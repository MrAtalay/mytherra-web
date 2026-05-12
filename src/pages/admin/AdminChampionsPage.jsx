import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Unvan" },
  { key: "role", label: "Rol" },
  { key: "element", label: "Element" },
  { key: "description", label: "Açıklama", type: "textarea" },
  { key: "abilities", label: "Yetenekler (virgülle ayır)", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "role", label: "Rol" },
  { key: "element", label: "Element" },
];

export default function AdminChampionsPage() {
  return <AdminEntityPage title="Şampiyonlar" apiPath="/api/champions" fields={fields} columns={columns} />;
}
