import "/src/css/entities/npcs/NPCsWelcomeSection.css";
import npcThumb from "/src/assets/npcs/npc_placeholder.jpg";

export default function NPCsWelcomeSection() {
  return (
    <section className="npcs-welcome-section" aria-labelledby="npcs-heading">
      <div className="npcs-welcome-inner">
        <div className="npcs-welcome-copy">
          <p className="eyebrow">Varlıklar</p>
          <h1 id="npcs-heading" className="npcs-title">NPC’ler</h1>
          <p className="npcs-lead">
            Mytherra’nın yaşayan karakterleri — dostlar, rehberler ve kaderini
            şekillendiren figürler. Onlarla etkileşimler oyunun dünyasını genişletir.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/entities/npcs">Tüm NPC’leri Gör</a>
            <a className="btn-ghost" href="/lore">Lore</a>
          </div>
        </div>

        <div className="npcs-welcome-visual">
          <img src={npcThumb} alt="NPC portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
