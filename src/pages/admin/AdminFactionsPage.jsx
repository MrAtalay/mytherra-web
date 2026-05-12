import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "name", label: "İsim" },
  { key: "title", label: "Başlık" },
  { key: "continent", label: "Kıta", type: "select", options: ["Solterra","Ferraterra","Aqualerra","Mytherra"] },
  { key: "country", label: "Ülke" },
  { key: "info", label: "Kısa Bilgi", type: "textarea" },
  { key: "description", label: "Açıklama", type: "textarea" },
];

const columns = [
  { key: "name", label: "İsim" },
  { key: "continent", label: "Kıta" },
  { key: "country", label: "Ülke" },
];

export default function AdminFactionsPage() {
  return <AdminEntityPage title="Krallıklar" apiPath="/api/factions" fields={fields} columns={columns} />;
}
