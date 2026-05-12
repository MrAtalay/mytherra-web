import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admin/AdminMobsPage.css";

const API = import.meta.env.VITE_API_URL;

export default function AdminEntityPage({ title, apiPath, fields, columns }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!user || user.role !== "admin") navigate("/");
  }, []);

  const emptyForm = Object.fromEntries(fields.map((f) => [f.key, f.default ?? ""]));
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => { fetchItems(); }, []);

  async function fetchItems() {
    const res = await fetch(`${API}${apiPath}`);
    setItems(await res.json());
  }

  function handleEdit(item) {
    setEditingId(item.id);
    const f = {};
    fields.forEach((field) => { f[field.key] = item[field.key] ?? field.default ?? ""; });
    setForm(f);
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancel() {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (imageFile) fd.append("image", imageFile);
    const url = editingId ? `${API}${apiPath}/${editingId}` : `${API}${apiPath}`;
    const method = editingId ? "PUT" : "POST";
    const res = await fetch(url, { method, body: fd });
    if (res.ok) {
      setMessage(editingId ? "✅ Güncellendi" : "✅ Eklendi");
      handleCancel();
      fetchItems();
    } else {
      const d = await res.json();
      setMessage("❌ " + (d.message || "Hata"));
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!confirm("Silinsin mi?")) return;
    await fetch(`${API}${apiPath}/${id}`, { method: "DELETE" });
    fetchItems();
  }

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin — {title}</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId ? "Düzenle" : "Yeni Ekle"}</h2>
        {message && <p className="admin-message">{message}</p>}

        <div className="admin-grid">
          {fields.filter((f) => f.type !== "textarea").map((field) => (
            <div className="form-group" key={field.key}>
              <label>{field.label}</label>
              {field.type === "select" ? (
                <select value={form[field.key]} onChange={(e) => setForm((p) => ({ ...p, [field.key]: e.target.value }))}>
                  {field.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  value={form[field.key]}
                  onChange={(e) => setForm((p) => ({ ...p, [field.key]: e.target.value }))}
                  required={field.required !== false}
                />
              )}
            </div>
          ))}
        </div>

        {fields.filter((f) => f.type === "textarea").map((field) => (
          <div className="form-group full" key={field.key}>
            <label>{field.label}</label>
            <textarea rows={3} value={form[field.key]} onChange={(e) => setForm((p) => ({ ...p, [field.key]: e.target.value }))} required={field.required !== false} />
          </div>
        ))}

        <div className="form-group full">
          <label>Görsel</label>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        </div>

        <div className="admin-actions">
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Kaydediliyor..." : editingId ? "Güncelle" : "Ekle"}
          </button>
          {editingId && <button type="button" className="btn ghost" onClick={handleCancel}>İptal</button>}
        </div>
      </form>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Görsel</th>
              {columns.map((c) => <th key={c.key}>{c.label}</th>)}
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.imageUrl
                    ? <img src={item.imageUrl} alt={item.name} className="admin-thumb" />
                    : <span className="admin-no-img">—</span>}
                </td>
                {columns.map((c) => <td key={c.key}>{c.render ? c.render(item) : item[c.key]}</td>)}
                <td>
                  <button className="btn ghost small" onClick={() => handleEdit(item)}>Düzenle</button>
                  <button className="btn danger small" onClick={() => handleDelete(item.id)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
