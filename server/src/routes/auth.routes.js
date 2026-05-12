import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Bu e-posta zaten kayıtlı" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });

    res.status(201).json({
      message: "Kayıt başarılı",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("REGISTER HATA:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Geçersiz bilgiler" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Geçersiz bilgiler" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

export default router;
