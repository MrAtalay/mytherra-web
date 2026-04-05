import { Link } from "react-router-dom";
import "../../css/updates/UpdatesListSection.css";

export const updates = [
  {
    id: "patch-001",
    type: "patch",
    title: "Patch 0.1.4 – Gölge Dengelemeleri",
    date: "12 Mart 2025",
    summary: "Gölge yetenekleri yeniden dengelendi, bazı bug’lar giderildi.",
    path: "/updates/patch-notes/0-1-4",
  },
  {
    id: "devlog-003",
    type: "devlog",
    title: "Devlog #3 – Boss Tasarım Felsefesi",
    date: "5 Mart 2025",
    summary: "Boss savaşlarını nasıl tasarlıyoruz? Karar alma süreçleri.",
    path: "/updates/devlogs/3",
  },
];

export default function UpdatesListSection({ title, subtitle, updates = [], filter = "all" }) {
  const updatesList = Array.isArray(updates) ? updates : [];
  const filteredUpdates =
    filter === "all"
      ? updatesList
      : updatesList.filter(update => update.type === filter);

  return (
    <section className="updates-list-section">
      <div className="updates-list-inner">

        {/* Header */}
        <header className="updates-list-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </header>

        {/* List */}
        <div className="updates-list-grid">
          {filteredUpdates.map(update => (
            <article
              key={update.id}
              className={`update-card ${update.type}`}
            >
              <span className="update-type">
                {update.type === "patch" ? "PATCH NOTES" : "DEVLOG"}
              </span>

              <h3 className="update-title">{update.title}</h3>
              <span className="update-date">{update.date}</span>

              <p className="update-desc">{update.summary}</p>

              <Link to={update.path} className="update-link">
                Devamını Oku →
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredUpdates.length === 0 && (
          <p className="updates-empty">
            Gösterilecek güncelleme bulunamadı.
          </p>
        )}

      </div>
    </section>
  );
}
