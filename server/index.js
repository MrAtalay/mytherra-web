import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./src/routes/auth.routes.js";
import mobRoutes from "./src/routes/mob.routes.js";
import {
  championRoutes, bossRoutes, npcRoutes, abilityRoutes,
  itemRoutes, equipmentRoutes, regionRoutes, factionRoutes, updateRoutes,
} from "./src/routes/entities.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/mobs", mobRoutes);
app.use("/api/champions", championRoutes);
app.use("/api/bosses", bossRoutes);
app.use("/api/npcs", npcRoutes);
app.use("/api/abilities", abilityRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/equipments", equipmentRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/factions", factionRoutes);
app.use("/api/updates", updateRoutes);

app.get("/", (req, res) => res.send("Mytherra API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
