export const equipments = [
  {
    id: "shadowfang-blade",
    name: "Shadowfang Blade",
    category: "Weapon",
    slot: "MainHand",
    weaponType: "Spear",
    rarity: "Rare",
    element: "Shadow",
    levelReq: 5,
    image: "/src/assets/equipment/shadowfang_blade.png",
    shortLore: "Gölge varlıklarının dişlerinden dövülmüş ölümcül bir mızrak.",
    stats: {
      attack: 22,
      critChance: 8,
      attackSpeed: 5
    },
    effects: [
      "Spirit Spear applies Shadow Brand",
      "Critical hits deal bonus Umbral damage"
    ],
    synergy: ["Spirit Spear", "Shadow Brand"],
    source: "Shadow elite mobs"
  },

  {
    id: "veilborn-helm",
    name: "Veilborn Helm",
    category: "Armor",
    slot: "Head",
    rarity: "Uncommon",
    element: "Shadow",
    levelReq: 4,
    image: "/src/assets/equipment/veilborn_helm.png",
    shortLore: "Umbral Veil içinden doğmuş bir miğfer.",
    stats: {
      defense: 14,
      mana: 30,
      shadowResistance: 10
    },
    effects: [
      "Umbral Veil duration +15%"
    ],
    synergy: ["Umbral Veil"],
    source: "Crafted"
  },

  {
    id: "beastbound-chest",
    name: "Beastbound Chestplate",
    category: "Armor",
    slot: "Chest",
    rarity: "Common",
    element: "Beast",
    levelReq: 3,
    image: "/src/assets/equipment/beastbound_chest.png",
    shortLore: "Vahşi formlarla uyumlu ağır bir zırh.",
    stats: {
      defense: 20,
      health: 80
    },
    effects: [
      "Beast Form grants bonus armor"
    ],
    synergy: ["Beast Form"],
    source: "Beast mobs"
  },

  {
    id: "umbral-striders",
    name: "Umbral Striders",
    category: "Armor",
    slot: "Feet",
    rarity: "Rare",
    element: "Shadow",
    levelReq: 6,
    image: "/src/assets/equipment/umbral_striders.png",
    shortLore: "Gölgeyle adım atanlara ait botlar.",
    stats: {
      movementSpeed: 10,
      evasion: 12
    },
    effects: [
      "Exiting Umbral Veil grants movement speed burst"
    ],
    synergy: ["Umbral Veil"],
    source: "Boss drop"
  },

  {
    id: "wildcall-ring",
    name: "Wildcall Ring",
    category: "Accessory",
    slot: "Ring",
    rarity: "Epic",
    element: "Nature",
    levelReq: 7,
    image: "/src/assets/equipment/wildcall_ring.png",
    shortLore: "Doğanın çağrısını taşıyan kadim bir yüzük.",
    stats: {
      cooldownReduction: 8,
      stamina: 40
    },
    effects: [
      "Wild Recall resets one random ability cooldown"
    ],
    synergy: ["Wild Recall"],
    source: "Ancient shrine"
  },

  {
    id: "sovereign-crown",
    name: "Crown of the Sovereign",
    category: "Relic",
    slot: "Relic",
    rarity: "Legendary",
    element: "Shadow",
    levelReq: 12,
    image: "/src/assets/equipment/sovereign_crown.png",
    shortLore: "Gölge Hükümdarı'nın iradesini taşıyan taç.",
    stats: {
      attack: 25,
      mana: 100,
      shadowDamage: 15
    },
    effects: [
      "Sovereign of Shadows duration +30%",
      "Shadow Execution becomes AoE"
    ],
    synergy: [
      "Sovereign of Shadows",
      "Shadow Execution"
    ],
    source: "Final boss"
  }
];
