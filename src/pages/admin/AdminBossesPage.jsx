import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Unvan" },
  { key: "region", label: "Bölge" },
  { key: "role", label: "Rol" },
  { key: "phaseCount", label: "Faz Sayısı", type: "number", default: "1" },
  { key: "difficulty", label: "Zorluk", type: "select", options: ["Epic","Legendary","Mythic"] },
  { key: "alignment", label: "Hizalama" },
  { key: "elements", label: "Elementler (JSON dizi)" },
  { key: "shortLore", label: "Kısa Lore", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "difficulty", label: "Zorluk" },
  { key: "region", label: "Bölge" },
];

export default function AdminBossesPage() {
  return <AdminEntityPage title="Baş Düşmanlar" apiPath="/api/bosses" fields={fields} columns={columns} />;
}
