import "../../css/patchnotes/PatchDetailPage.css";

export default function PatchDetailPage() {
  return (
    <main className="patch-detail-page">
      
      {/* HEADER */}
      <header className="patch-header">
        <span className="patch-badge">PATCH</span>
        <h1 className="patch-title">Patch 0.1.2 – Denge ve Temeller</h1>
        <p className="patch-meta">20 Nisan 2025 • Mytherra Team</p>
        <p className="patch-summary">
          Bu güncelleme, temel sistemlerde denge düzenlemeleri ve ilk oynanış
          yapı taşlarını içermektedir.
        </p>
      </header>

      {/* CONTENT */}
      <section className="patch-content">

        <div className="patch-section">
          <h2>🧩 Eklenenler</h2>
          <ul>
            <li>Büyü sisteminin altyapısı eklendi</li>
            <li>İlk lore tabanlı boss akışları hazırlandı</li>
            <li>Entities sayfaları aktif edildi</li>
          </ul>
        </div>

        <div className="patch-section">
          <h2>⚖️ Değiştirilenler</h2>
          <ul>
            <li>Mana tüketimi daha tutarlı hale getirildi</li>
            <li>Cooldown süreleri normalize edildi</li>
          </ul>
        </div>

        <div className="patch-section">
          <h2>🛠️ Düzeltilenler</h2>
          <ul>
            <li>Navigation geçiş hataları giderildi</li>
            <li>Görsel tema kontrast sorunları çözüldü</li>
          </ul>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="patch-footer">
        <a href="/updates" className="btn-secondary">
          ← Tüm Güncellemelere Dön
        </a>
      </footer>

      {/* HEADER */}
      <header className="patch-header">
        <span className="patch-badge">PATCH</span>
        <h1 className="patch-title">Patch 0.1.2 – Denge ve Temeller</h1>
        <p className="patch-meta">20 Nisan 2025 • Mytherra Team</p>
        <p className="patch-summary">
          Bu güncelleme, temel sistemlerde denge düzenlemeleri ve ilk oynanış
          yapı taşlarını içermektedir.
        </p>
      </header>

      {/* CONTENT */}
      <section className="patch-content">

        <div className="patch-section">
          <h2>🧩 Eklenenler</h2>
          <ul>
            <li>Büyü sisteminin altyapısı eklendi</li>
            <li>İlk lore tabanlı boss akışları hazırlandı</li>
            <li>Entities sayfaları aktif edildi</li>
          </ul>
        </div>

        <div className="patch-section">
          <h2>⚖️ Değiştirilenler</h2>
          <ul>
            <li>Mana tüketimi daha tutarlı hale getirildi</li>
            <li>Cooldown süreleri normalize edildi</li>
          </ul>
        </div>

        <div className="patch-section">
          <h2>🛠️ Düzeltilenler</h2>
          <ul>
            <li>Navigation geçiş hataları giderildi</li>
            <li>Görsel tema kontrast sorunları çözüldü</li>
          </ul>
        </div>

      </section>

    </main>
  );
}
