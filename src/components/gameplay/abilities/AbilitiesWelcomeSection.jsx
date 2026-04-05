import "/src/css/gameplay/abilities/AbilitiesWelcomeSection.css";
import abilitiesThumb from "/src/assets/abilities/abilities_placeholder.jpg";

export default function AbilitiesWelcomeSection() {
  return (
    <section className="abilities-welcome-section" aria-labelledby="abilities-heading">
      <div className="abilities-welcome-inner">
        <div className="abilities-welcome-copy">
          <p className="eyebrow">Büyüler</p>
          <h1 id="abilities-heading" className="abilities-title">Büyüler</h1>
          <p className="abilities-lead">
            Mytherra’nın yaşayan karakterleri — düşmanlar, rakipler ve kaderini
            şekillendiren figürler. Onlarla etkileşimler oyunun dünyasını genişletir.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/gameplay/abilities">Tüm Büyüleri Gör</a>
            <a className="btn-ghost" href="/lore">Lore</a>
          </div>
        </div>

        <div className="abilities-welcome-visual">
          <img src={abilitiesThumb} alt="Abilities portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
