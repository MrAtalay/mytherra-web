import "/src/css/gameplay/GameplayWelcomeSection.css";

import thumb1 from "../../assets/champ1.png";

export default function GameplayWelcomeSection() {
  return (
    <section className="gameplay-welcome-section" aria-labelledby="gameplay-heading">
      <div className="gameplay-welcome-inner">
        <div className="gameplay-welcome-copy">
          <p className="eyebrow">Oynanış</p>
          <h1 id="gameplay-heading" className="gameplay-title">Oynanış</h1>
          <p className="gameplay-lead">
            NPC'ler, canavarlar ve baş düşmanlar — Mytherra'nın yaşayan unsurları.
            Buradan onların kısa özetlerine ve detay sayfalarına erişebilirsin.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/gameplay/abilities">Büyülere Git</a>
            <a className="btn-primary" href="/gameplay/items">Eşyalara Git</a>
            <a className="btn-primary" href="/gameplay/equipments">Ekipmanlara Git</a>
          </div>
        </div>

        <div className="gameplay-welcome-visual" aria-hidden>
            <img src={thumb1} alt="" className="gameplay-hero-img" />
            <div className="gameplay-thumbnail" />
        </div>

      </div>
    </section>
  );
}
