import "/src/css/entities/bosses/BossesWelcomeSection.css";
import bossThumb from "/src/assets/bosses/boss_placeholder.jpg";

export default function BossesWelcomeSection() {
  return (
    <section className="bosses-welcome-section" aria-labelledby="bosses-heading">
      <div className="bosses-welcome-inner">
        <div className="bosses-welcome-copy">
          <p className="eyebrow">Baş Düşmanlar</p>
          <h1 id="bosses-heading" className="bosses-title">Baş Düşmanlar</h1>
          <p className="bosses-lead">
            Mytherra’nın yaşayan karakterleri — düşmanlar, rakipler ve kaderini
            şekillendiren figürler. Onlarla etkileşimler oyunun dünyasını genişletir.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/entities/bosses">Tüm Baş Düşmanları Gör</a>
            <a className="btn-ghost" href="/lore">Lore</a>
          </div>
        </div>

        <div className="bosses-welcome-visual">
          <img src={bossThumb} alt="Boss portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
