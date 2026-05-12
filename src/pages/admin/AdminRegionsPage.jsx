import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Başlık" },
  { key: "info", label: "Kısa Bilgi", type: "textarea" },
  { key: "description", label: "Açıklama", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Başlık" },
];

export default function AdminRegionsPage() {
  return <AdminEntityPage title="Bölgeler" apiPath="/api/regions" fields={fields} columns={columns} />;
}
