import "../../css/world/ShortInfoSections.css";
import { regions } from "../../data/regions/regions";

export default function RegionsShortInfo() {
  const items = regions.slice(0, 3);

  return (
    <section className="short-info-section" aria-label="Regions overview">
      <div className="short-info-header">
        <h3 className="short-info-title">Bölgeler</h3>
        <p className="short-info-sub">Kıtalar, biyomlar ve keşfedilecek yerler.</p>
      </div>

      <div className="short-info-grid">
        {items.map(item => (
          <article key={item.id} className="short-info-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="short-info-body">
              <h4>{item.name}</h4>
              <p className="muted">{item.title}</p>
              <p className="short-hook">{item.description}</p>
              <a className="short-cta" href={`/world/regions#${item.id}`}>Detay</a>
            </div>
          </article>
        ))}
      </div>

      <div className="short-info-footer">
        <a className="btn-primary" href="/world/regions">Tüm Bölgeleri Gör</a>
      </div>
    </section>
  );
}
