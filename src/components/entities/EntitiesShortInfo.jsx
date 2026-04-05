import "../../css/entities/EntitiesShortInfo.css";
import { entities } from "../../data/entities/entitiescard";
import thumb1 from "/src/assets/npcs/npc_placeholder.jpg";
import thumb2 from "/src/assets/mobs/mob_placeholder.jpg";
import thumb3 from "/src/assets/bosses/boss_placeholder.jpg";

export default function EntitiesShortInfo() {
  const thumbs = [thumb1, thumb2, thumb3];

  return (
    <section className="short-info-section" aria-label="Entities overview">
      <div className="short-info-header">
        <h3 className="short-info-title">Varlıklar</h3>
        <p className="short-info-sub">Oyundaki NPC'ler, canavarlar ve baş düşmanlar hakkında hızlı giriş.</p>
      </div>

      <div className="short-info-grid">
        {entities.map((item, idx) => (
          <article key={item.id} className="short-info-card reveal">
            <img src={thumbs[idx % thumbs.length]} alt={item.name} loading="lazy" />
            <div className="short-info-body">
              <h4>{item.name}</h4>
              <p className="muted">{item.description}</p>
              <p className="short-hook">Kısa bilgi: {item.description}</p>
              <a className="short-cta" href={item.path}>Detay</a>
            </div>
          </article>
        ))}
      </div>

      <div className="short-info-footer">
        <a className="btn-primary" href="/entities">Tüm Varlıkları Gör</a>
      </div>
    </section>
  );
}
