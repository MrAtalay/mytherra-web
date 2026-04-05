import "/src/css/updates/LatestUpdatesSection.css";

const latestUpdates = [
  {
    id: "patch-103",
    type: "Patch",
    title: "Patch 1.0.3 – Gölge Dengeleri",
    date: "12 Ağustos 2025",
    description:
      "Gölge yeteneklerinde denge güncellemeleri, Vael’Thryn boss dövüşü iyileştirmeleri ve performans optimizasyonları.",
    link: "/updates/patch-notes/1-0-3",
  },
  {
    id: "devlog-world",
    type: "Devlog",
    title: "Dünya Tasarımı: Mytherra’nın Katmanları",
    date: "5 Ağustos 2025",
    description:
      "Bölgelerin nasıl anlatısal olarak inşa edildiğini, mana akımlarını ve biome kararlarını detaylandırıyoruz.",
    link: "/updates/devlogs/world-design",
  },
  {
    id: "devlog-combat",
    type: "Devlog",
    title: "Savaş Sisteminin Evrimi",
    date: "28 Temmuz 2025",
    description:
      "Yetenek senkronizasyonu, cooldown felsefesi ve boss savaşlarının arkasındaki tasarım kararları.",
    link: "/updates/devlogs/combat-evolution",
  },
];

export default function LatestUpdatesSection() {
  return (
    <section className="latest-updates-section" aria-labelledby="latest-updates-title">
      <div className="latest-updates-inner">
        {/* Header */}
        <header className="latest-updates-header">
          <p className="eyebrow">Güncellemeler</p>
          <h2 id="latest-updates-title" className="section-title">
            Son Gelişmeler
          </h2>
          <p className="section-sub">
            Mytherra dünyasında neler değişti, neler gelişti — en güncel notlar burada.
          </p>
        </header>

        {/* Updates */}
        <div className="latest-updates-grid">
          {latestUpdates.map((item) => (
            <article key={item.id} className={`update-card ${item.type.toLowerCase()}`}>
              <span className="update-type">{item.type}</span>

              <h3 className="update-title">{item.title}</h3>
              <time className="update-date">{item.date}</time>

              <p className="update-desc">{item.description}</p>

              <a href={item.link} className="update-link">
                Devamını Oku →  
              </a>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="latest-updates-footer">
          <a href="/updates" className="btn-primary">
            Tüm Güncellemeleri Gör
          </a>
        </div>
      </div>
    </section>
  );
}
