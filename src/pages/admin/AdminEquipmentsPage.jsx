import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "category", label: "Kategori", type: "select", options: ["Weapon","Armor","Accessory","Relic"] },
  { key: "slot", label: "Slot" },
  { key: "weaponType", label: "Silah Tipi", required: false },
  { key: "rarity", label: "Nadirlik", type: "select", options: ["Common","Uncommon","Rare","Epic","Legendary"] },
  { key: "element", label: "Element" },
  { key: "levelReq", label: "Seviye", type: "number", default: "1" },
  { key: "source", label: "Kaynak" },
  { key: "shortLore", label: "Kısa Lore", type: "textarea" },
  { key: "stats", label: "Stat'lar (JSON)", type: "textarea" },
  { key: "effects", label: "Etkiler (JSON dizi)", type: "textarea" },
  { key: "synergy", label: "Sinerji (JSON dizi)", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "category", label: "Kategori" },
  { key: "rarity", label: "Nadirlik" },
  { key: "levelReq", label: "Seviye" },
];

export default function AdminEquipmentsPage() {
  return <AdminEntityPage title="Ekipmanlar" apiPath="/api/equipments" fields={fields} columns={columns} />;
}
