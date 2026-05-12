import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Unvan" },
  { key: "region", label: "Bölge" },
  { key: "type", label: "Tür" },
  { key: "difficulty", label: "Zorluk", type: "select", options: ["Easy","Medium","Hard"] },
  { key: "alignment", label: "Hizalama", type: "select", options: ["Neutral","Hostile","Friendly"] },
  { key: "element", label: "Element" },
  { key: "shortLore", label: "Kısa Lore", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "element", label: "Element" },
  { key: "difficulty", label: "Zorluk" },
];

export default function AdminAbilitiesPage() {
  return <AdminEntityPage title="Büyüler" apiPath="/api/abilities" fields={fields} columns={columns} />;
}
