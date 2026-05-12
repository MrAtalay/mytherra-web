import express from "express";
import multer from "multer";
import { randomUUID } from "crypto";
import { prisma } from "../config/db.js";
import cloudinary from "../config/cloudinary.js";

const upload = multer({ storage: multer.memoryStorage() });

async function uploadToCloudinary(file, folder) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: `mytherra/${folder}`, resource_type: "image" },
      (err, result) => (err ? reject(err) : resolve(result.secure_url))
    ).end(file.buffer);
  });
}

export function createEntityRouter(modelKey, folder, buildData) {
  const model = prisma[modelKey];
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const items = await model.findMany({ orderBy: { createdAt: "asc" } });
      res.json(items);
    } catch (e) {
      console.error(e.message);
      res.status(500).json({ message: "Sunucu hatası" });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const item = await model.findUnique({ where: { id: req.params.id } });
      if (!item) return res.status(404).json({ message: "Bulunamadı" });
      res.json(item);
    } catch (e) {
      res.status(500).json({ message: "Sunucu hatası" });
    }
  });

  router.post("/", upload.single("image"), async (req, res) => {
    try {
      let imageUrl = null;
      if (req.file) imageUrl = await uploadToCloudinary(req.file, folder);
      const data = buildData(req.body, imageUrl);
      const item = await model.create({ data: { id: randomUUID(), ...data } });
      res.status(201).json(item);
    } catch (e) {
      console.error(e.message);
      res.status(500).json({ message: "Sunucu hatası" });
    }
  });

  router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      let imageUrl = req.body.imageUrl ?? null;
      if (req.file) imageUrl = await uploadToCloudinary(req.file, folder);
      const data = buildData(req.body, imageUrl);
      const item = await model.update({ where: { id: req.params.id }, data: { ...data, updatedAt: new Date() } });
      res.json(item);
    } catch (e) {
      console.error("PUT HATA:", e.message);
      res.status(500).json({ message: "Sunucu hatası", error: e.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      await model.delete({ where: { id: req.params.id } });
      res.json({ message: "Silindi" });
    } catch (e) {
      res.status(500).json({ message: "Sunucu hatası" });
    }
  });

  return router;
}
