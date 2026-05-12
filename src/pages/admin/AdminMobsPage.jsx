import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admin/AdminMobsPage.css";

const API = import.meta.env.VITE_API_URL;

const EMPTY_FORM = {
  name: "", title: "", region: "", type: "",
  difficulty: "Easy", alignment: "Neutral", element: "", shortLore: "",
};

export default function AdminMobsPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!user || user.role !== "admin") navigate("/");
  }, []);

  const [mobs, setMobs] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => { fetchMobs(); }, []);

  async function fetchMobs() {
    const res = await fetch(`${API}/api/mobs`);
    setMobs(await res.json());
  }

  function handleEdit(mob) {
    setEditingId(mob.id);
    setForm({
      name: mob.name, title: mob.title, region: mob.region,
      type: mob.type, difficulty: mob.difficulty, alignment: mob.alignment,
      element: mob.element, shortLore: mob.shortLore,
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancel() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setImageFile(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (imageFile) fd.append("image", imageFile);

    const url = editingId ? `${API}/api/mobs/${editingId}` : `${API}/api/mobs`;
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, { method, body: fd });
    if (res.ok) {
      setMessage(editingId ? "✅ Güncellendi" : "✅ Eklendi");
      handleCancel();
      fetchMobs();
    } else {
      const data = await res.json();
      setMessage("❌ " + (data.message || "Hata"));
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!confirm("Bu mob silinsin mi?")) return;
    await fetch(`${API}/api/mobs/${id}`, { method: "DELETE" });
    fetchMobs();
  }

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin — Yaratık Yönetimi</h1>

      {/* FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId ? "Mob Düzenle" : "Yeni Mob Ekle"}</h2>
        {message && <p className="admin-message">{message}</p>}

        <div className="admin-grid">
          {[["name","İsim"],["title","Unvan"],["region","Bölge"],["type","Tür"],["element","Element"]].map(([key, label]) => (
            <div className="form-group" key={key}>
              <label>{label}</label>
              <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} required />
            </div>
          ))}

          <div className="form-group">
            <label>Zorluk</label>
            <select value={form.difficulty} onChange={e => setForm(f => ({ ...f, difficulty: e.target.value }))}>
              {["Easy","Medium","Hard","Boss"].map(d => <option key={d}>{d}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label>Hizalama</label>
            <select value={form.alignment} onChange={e => setForm(f => ({ ...f, alignment: e.target.value }))}>
              {["Neutral","Hostile","Friendly"].map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <div className="form-group full">
          <label>Kısa Lore</label>
          <textarea rows={3} value={form.shortLore} onChange={e => setForm(f => ({ ...f, shortLore: e.target.value }))} required />
        </div>

        <div className="form-group full">
          <label>Görsel</label>
          <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
        </div>

        <div className="admin-actions">
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Kaydediliyor..." : editingId ? "Güncelle" : "Ekle"}
          </button>
          {editingId && <button type="button" className="btn ghost" onClick={handleCancel}>İptal</button>}
        </div>
      </form>

      {/* TABLO */}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Görsel</th><th>İsim</th><th>Tür</th><th>Zorluk</th><th>Element</th><th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {mobs.map(mob => (
              <tr key={mob.id}>
                <td>
                  {mob.imageUrl
                    ? <img src={mob.imageUrl} alt={mob.name} className="admin-thumb" />
                    : <span className="admin-no-img">—</span>}
                </td>
                <td>{mob.name}<br /><small>{mob.title}</small></td>
                <td>{mob.type}</td>
                <td>{mob.difficulty}</td>
                <td>{mob.element}</td>
                <td>
                  <button className="btn ghost small" onClick={() => handleEdit(mob)}>Düzenle</button>
                  <button className="btn danger small" onClick={() => handleDelete(mob.id)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
