import "../../css/gameplay/GameplayShortInfo.css";
import { gameplay } from "../../data/gameplay/gameplaycard";
import thumb1 from "/src/assets/abilities/abilities_placeholder.jpg";
import thumb2 from "/src/assets/items/items_placeholder.jpg";
import thumb3 from "/src/assets/equipments/equipments_placeholder.jpg";

export default function GameplayShortInfo() {
  const thumbs = [thumb1, thumb2, thumb3];

  return (
    <section className="short-info-section" aria-label="Gameplay overview">
      <div className="short-info-header">
        <h3 className="short-info-title">Oynanış</h3>
        <p className="short-info-sub">Oyundaki oynanış hakkında hızlı giriş.</p>
      </div>

      <div className="short-info-grid">
        {gameplay.map((item, idx) => (
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
        <a className="btn-primary" href="/gameplay">Oynanışı Gör</a>
      </div>
    </section>
  );
}
