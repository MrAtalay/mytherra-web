export const items = [
  {
    id: "shadow-fang",
    name: "Shadow Fang",
    type: "Weapon",
    slot: "Main Hand",
    rarity: "Rare",
    element: "Shadow",
    levelReq: 5,
    image: "/src/assets/items/shadow_fang.png",
    shortLore: "Gölge varlıklarının özünden şekillenmiş keskin bir diş.",
    stats: {
      attack: 14,
      critChance: 6,
    },
    effects: [
      "Shadow abilities deal +5% damage",
      "Critical hits apply Shadow Brand"
    ],
    source: "Dropped by shadow mobs"
  },

  {
    id: "spirit-totem",
    name: "Spirit Totem",
    type: "Trinket",
    slot: "Relic",
    rarity: "Uncommon",
    element: "Spirit",
    levelReq: 3,
    image: "/src/assets/items/spirit_totem.png",
    shortLore: "Ataların ruhlarını çağıran eski bir totem.",
    stats: {
      mana: 40,
      cooldownReduction: 5,
    },
    effects: [
      "Spirit Spear cooldown reduced by 1s"
    ],
    source: "Quest reward"
  },

  {
    id: "beast-hide-armor",
    name: "Beast Hide Armor",
    type: "Armor",
    slot: "Chest",
    rarity: "Common",
    element: "Beast",
    levelReq: 2,
    image: "/src/assets/items/beast_hide_armor.png",
    shortLore: "Vahşi yaratıkların derisinden yapılmış dayanıklı bir zırh.",
    stats: {
      defense: 18,
      health: 60,
    },
    effects: [
      "Beast Form duration +10%"
    ],
    source: "Crafted"
  },

  {
    id: "umbral-cloak",
    name: "Umbral Cloak",
    type: "Armor",
    slot: "Back",
    rarity: "Epic",
    element: "Shadow",
    levelReq: 8,
    image: "/src/assets/items/umbral_cloak.png",
    shortLore: "Gölgenin kendisiyle dokunmuş bir pelerin.",
    stats: {
      evasion: 12,
      shadowResistance: 15,
    },
    effects: [
      "Entering Umbral Veil grants invisibility for 2s",
      "First attack from stealth deals bonus damage"
    ],
    source: "Boss drop"
  },

  {
    id: "sovereign-seal",
    name: "Seal of the Sovereign",
    type: "Relic",
    slot: "Relic",
    rarity: "Legendary",
    element: "Shadow",
    levelReq: 12,
    image: "/src/assets/items/sovereign_seal.png",
    shortLore: "Gölge Hükümdarı'nın gücünü mühürleyen kadim bir sembol.",
    stats: {
      attack: 20,
      mana: 80,
    },
    effects: [
      "Unlocks Sovereign of Shadows enhancement",
      "Shadow Execution damage +20%"
    ],
    source: "Ancient ritual boss"
  },

  {
    id: "wild-recall-charm",
    name: "Wild Recall Charm",
    type: "Consumable",
    slot: null,
    rarity: "Uncommon",
    element: "Nature",
    levelReq: 1,
    image: "/src/assets/items/wild_recall_charm.png",
    shortLore: "Doğanın çağrısına cevap veren küçük bir tılsım.",
    stats: {},
    effects: [
      "Instantly resets Wild Recall cooldown"
    ],
    source: "Vendor"
  }
];
