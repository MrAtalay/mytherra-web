import { createEntityRouter } from "./entity.factory.js";

const j = (v) => (typeof v === "string" ? v : JSON.stringify(v ?? []));

export const championRoutes = createEntityRouter("champion", "champions", (b, img) => ({
  name: b.name, title: b.title, role: b.role, element: b.element,
  description: b.description, abilities: j(b.abilities), imageUrl: img,
}));

export const bossRoutes = createEntityRouter("boss", "bosses", (b, img) => ({
  name: b.name, title: b.title, region: b.region,
  phaseCount: parseInt(b.phaseCount) || 1,
  difficulty: b.difficulty, alignment: b.alignment,
  elements: j(b.elements), role: b.role,
  shortLore: b.shortLore, imageUrl: img,
}));

export const npcRoutes = createEntityRouter("npc", "npcs", (b, img) => ({
  name: b.name, title: b.title, region: b.region,
  role: b.role, alignment: b.alignment,
  shortLore: b.shortLore, imageUrl: img,
}));

export const abilityRoutes = createEntityRouter("ability", "abilities", (b, img) => ({
  name: b.name, title: b.title, region: b.region,
  type: b.type, difficulty: b.difficulty, alignment: b.alignment,
  element: b.element, shortLore: b.shortLore, imageUrl: img,
}));

export const itemRoutes = createEntityRouter("item", "items", (b, img) => ({
  name: b.name, type: b.type, slot: b.slot || null, rarity: b.rarity,
  element: b.element, levelReq: parseInt(b.levelReq) || 1,
  shortLore: b.shortLore, stats: j(b.stats), effects: j(b.effects),
  source: b.source, imageUrl: img,
}));

export const equipmentRoutes = createEntityRouter("equipment", "equipments", (b, img) => ({
  name: b.name, category: b.category, slot: b.slot,
  weaponType: b.weaponType || null, rarity: b.rarity, element: b.element,
  levelReq: parseInt(b.levelReq) || 1, shortLore: b.shortLore,
  stats: j(b.stats), effects: j(b.effects), synergy: j(b.synergy),
  source: b.source, imageUrl: img,
}));

export const regionRoutes = createEntityRouter("region", "regions", (b, img) => ({
  name: b.name, title: b.title, description: b.description,
  info: b.info, imageUrl: img,
}));

export const factionRoutes = createEntityRouter("faction", "factions", (b, img) => ({
  name: b.name, continent: b.continent, country: b.country,
  title: b.title, info: b.info, description: b.description, imageUrl: img,
}));

export const updateRoutes = createEntityRouter("update", "updates", (b, img) => ({
  type: b.type, title: b.title, date: b.date, version: b.version || null,
  summary: b.summary, content: b.content || null,
  tags: j(b.tags), author: b.author || null, changes: j(b.changes) || null,
}));
