import "../../css/devlogs/DevlogDetailPage.css";

export default function DevlogDetailPage() {
  return (
    <main className="devlog-detail-page">
      
      {/* HEADER */}
      <header className="devlog-header">
        <span className="devlog-badge">DEVLOG</span>
        <h1 className="devlog-title">DEVLOG 0.1.2 – Denge ve Temeller</h1>
        <p className="devlog-meta">20 Nisan 2025 • Mytherra Team</p>
        <p className="devlog-summary">
          Bu güncelleme, temel sistemlerde denge düzenlemeleri ve ilk oynanış
          yapı taşlarını içermektedir.
        </p>
      </header>

      {/* CONTENT */}
      <section className="devlog-content">

        <div className="devlog-section">
          <h2>🧩 Eklenenler</h2>
          <ul>
            <li>Veil sisteminin altyapısı eklendi</li>
            <li>İlk lore tabanlı boss akışları hazırlandı</li>
            <li>Entities sayfaları aktif edildi</li>
          </ul>
        </div>

        <div className="devlog-section">
          <h2>⚖️ Değiştirilenler</h2>
          <ul>
            <li>Mana tüketimi daha tutarlı hale getirildi</li>
            <li>Cooldown süreleri normalize edildi</li>
          </ul>
        </div>

        <div className="devlog-section">
          <h2>🛠️ Düzeltilenler</h2>
          <ul>
            <li>Navigation geçiş hataları giderildi</li>
            <li>Görsel tema kontrast sorunları çözüldü</li>
          </ul>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="devlog-footer">
        <a href="/updates" className="btn-secondary">
          ← Tüm Güncellemelere Dön
        </a>
      </footer>

    </main>
  );
}
