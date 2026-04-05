import "/src/css/entities/EntitiesWelcomeSection.css";

import thumb1 from "../../assets/champ1.png";

export default function EntitiesWelcomeSection() {
  return (
    <section className="entities-welcome-section" aria-labelledby="entities-heading">
      <div className="entities-welcome-inner">
        <div className="entities-welcome-copy">
          <p className="eyebrow">Varlıklar</p>
          <h1 id="entities-heading" className="entities-title">Dünya Varlıkları</h1>
          <p className="entities-lead">
            NPC'ler, canavarlar ve baş düşmanlar — Mytherra'nın yaşayan unsurları.
            Buradan onların kısa özetlerine ve detay sayfalarına erişebilirsin.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/entities/npcs">NPC'lere Git</a>
            <a className="btn-primary" href="/entities/mobs">Canavarlara Git</a>
            <a className="btn-primary" href="/entities/bosses">Baş Düşmanlara Git</a>
          </div>
        </div>

        <div className="entities-welcome-visual" aria-hidden>
            <img src={thumb1} alt="" className="entities-hero-img" />
            <div className="entities-thumbnail" />
        </div>

      </div>
    </section>
  );
}
