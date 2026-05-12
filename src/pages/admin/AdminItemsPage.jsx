import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "type", label: "Tür" },
  { key: "slot", label: "Slot", required: false },
  { key: "rarity", label: "Nadirlik", type: "select", options: ["Common","Uncommon","Rare","Epic","Legendary"] },
  { key: "element", label: "Element" },
  { key: "levelReq", label: "Seviye", type: "number", default: "1" },
  { key: "source", label: "Kaynak" },
  { key: "shortLore", label: "Kısa Lore", type: "textarea" },
  { key: "stats", label: "Stat'lar (JSON)", type: "textarea" },
  { key: "effects", label: "Etkiler (JSON dizi)", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "rarity", label: "Nadirlik" },
  { key: "element", label: "Element" },
  { key: "levelReq", label: "Seviye" },
];

export default function AdminItemsPage() {
  return <AdminEntityPage title="Eşyalar" apiPath="/api/items" fields={fields} columns={columns} />;
}
