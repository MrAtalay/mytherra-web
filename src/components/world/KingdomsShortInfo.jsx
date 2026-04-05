import "../../css/world/ShortInfoSections.css";
import { factions } from "../../data/factions/factions";

export default function KingdomsShortInfo() {
  const items = factions.slice(0, 3);

  return (
    <section className="short-info-section" aria-label="Kingdoms overview">
      <div className="short-info-header">
        <h3 className="short-info-title">Krallıklar</h3>
        <p className="short-info-sub">Dünyayı şekillendiren kadim uluslar.</p>
      </div>

      <div className="short-info-grid">
        {items.map(k => (
          <article key={k.id} className="short-info-card">
            <img src={k.image} alt={k.name} loading="lazy" />
            <div className="short-info-body">
              <h4>{k.name}</h4>
              <p className="muted">{k.title}</p>
              <p className="short-hook">{k.info}</p>
              <a className="short-cta" href={`/world/factions#${k.id}`}>Detay</a>
            </div>
          </article>
        ))}
      </div>

      <div className="short-info-footer">
        <a className="btn-primary" href="/world/factions">Tüm Krallıkları Gör</a>
      </div>
    </section>
  );
}
