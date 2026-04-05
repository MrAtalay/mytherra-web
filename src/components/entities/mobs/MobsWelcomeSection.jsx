import "/src/css/entities/mobs/MobsWelcomeSection.css";
import mobThumb from "/src/assets/mobs/mob_placeholder.jpg";

export default function MobsWelcomeSection() {
  return (
    <section className="mobs-welcome-section" aria-labelledby="mobs-heading">
      <div className="mobs-welcome-inner">
        <div className="mobs-welcome-copy">
          <p className="eyebrow">Varlıklar</p>
          <h1 id="mobs-heading" className="mobs-title">Yaratıklar</h1>
          <p className="mobs-lead">
            Mytherra’nın yaşayan karakterleri — düşmanlar, rakipler ve kaderini
            şekillendiren figürler. Onlarla etkileşimler oyunun dünyasını genişletir.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/entities/mobs">Tüm Yaratıkları Gör</a>
            <a className="btn-ghost" href="/lore">Lore</a>
          </div>
        </div>

        <div className="mobs-welcome-visual">
          <img src={mobThumb} alt="Mob portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
