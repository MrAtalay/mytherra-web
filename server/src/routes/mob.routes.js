import express from "express";
import multer from "multer";
import { prisma } from "../config/db.js";
import cloudinary from "../config/cloudinary.js";
import { randomUUID } from "crypto";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

/* GET /api/mobs — tüm moblar */
router.get("/", async (req, res) => {
  try {
    const mobs = await prisma.mob.findMany({ orderBy: { createdAt: "asc" } });
    res.json(mobs);
  } catch (error) {
    console.error("MOB LIST HATA:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

/* GET /api/mobs/:id — tek mob */
router.get("/:id", async (req, res) => {
  try {
    const mob = await prisma.mob.findUnique({ where: { id: req.params.id } });
    if (!mob) return res.status(404).json({ message: "Bulunamadı" });
    res.json(mob);
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

/* POST /api/mobs — yeni mob (admin) */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, title, region, type, difficulty, alignment, element, shortLore } = req.body;

    let imageUrl = null;

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "mytherra/mobs", resource_type: "image" },
          (err, result) => (err ? reject(err) : resolve(result))
        ).end(req.file.buffer);
      });
      imageUrl = result.secure_url;
    }

    const mob = await prisma.mob.create({
      data: {
        id: randomUUID(),
        name, title, region, type, difficulty, alignment, element, shortLore,
        imageUrl,
      },
    });

    res.status(201).json(mob);
  } catch (error) {
    console.error("MOB CREATE HATA:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

/* PUT /api/mobs/:id — mob güncelle (admin) */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, title, region, type, difficulty, alignment, element, shortLore } = req.body;

    let imageUrl = req.body.imageUrl ?? null;

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "mytherra/mobs", resource_type: "image" },
          (err, result) => (err ? reject(err) : resolve(result))
        ).end(req.file.buffer);
      });
      imageUrl = result.secure_url;
    }

    const mob = await prisma.mob.update({
      where: { id: req.params.id },
      data: { name, title, region, type, difficulty, alignment, element, shortLore, imageUrl, updatedAt: new Date() },
    });

    res.json(mob);
  } catch (error) {
    console.error("MOB UPDATE HATA:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

/* DELETE /api/mobs/:id — mob sil (admin) */
router.delete("/:id", async (req, res) => {
  try {
    await prisma.mob.delete({ where: { id: req.params.id } });
    res.json({ message: "Silindi" });
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

export default router;
