import AdminEntityPage from "../../components/admin/AdminEntityPage";

const fields = [
  { key: "title", label: "Başlık" },
  { key: "type", label: "Tür", type: "select", options: ["patch","devlog"] },
  { key: "date", label: "Tarih", type: "date" },
  { key: "version", label: "Versiyon", required: false },
  { key: "author", label: "Yazar", required: false },
  { key: "summary", label: "Özet", type: "textarea" },
  { key: "content", label: "İçerik", type: "textarea", required: false },
  { key: "tags", label: "Etiketler (JSON dizi)", type: "textarea" },
];

const columns = [
  { key: "title", label: "Başlık" },
  { key: "type", label: "Tür" },
  { key: "date", label: "Tarih" },
  { key: "version", label: "Versiyon" },
];

export default function AdminUpdatesPage() {
  return <AdminEntityPage title="Güncellemeler" apiPath="/api/updates" fields={fields} columns={columns} />;
}
