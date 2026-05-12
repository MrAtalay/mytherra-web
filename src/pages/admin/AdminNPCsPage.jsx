import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Unvan" },
  { key: "region", label: "Bölge" },
  { key: "role", label: "Rol" },
  { key: "alignment", label: "Hizalama" },
  { key: "shortLore", label: "Kısa Lore", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "role", label: "Rol" },
  { key: "region", label: "Bölge" },
];

export default function AdminNPCsPage() {
  return <AdminEntityPage title="NPC'ler" apiPath="/api/npcs" fields={fields} columns={columns} />;
}
