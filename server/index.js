import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./src/routes/auth.routes.js";
import connectDB from "./src/config/db.js";

connectDB();

const app = express();

/* 🔥 MIDDLEWARE — ROUTE'LARDAN ÖNCE */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json()); // ❗❗❗ BU SATIR ROUTE'LARDAN ÖNCE OLMAK ZORUNDA

/* ROUTES */
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Mytherra API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
