import "/src/css/gameplay/equipments/EquipmentsWelcomeSection.css";
import equipmentsThumb from "/src/assets/equipments/equipments_placeholder.jpg";

export default function EquipmentsWelcomeSection() {
  return (
    <section className="equipments-welcome-section" aria-labelledby="equipments-heading">
      <div className="equipments-welcome-inner">
        <div className="equipments-welcome-copy">
          <p className="eyebrow">Ekipmanlar</p>
          <h1 id="equipments-heading" className="equipments-title">Ekipmanlar</h1>
          <p className="equipments-lead">
            Mytherra’nın yaşayan karakterleri — düşmanlar, rakipler ve kaderini
            şekillendiren figürler. Onlarla etkileşimler oyunun dünyasını genişletir.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/gameplay/equipments">Tüm Ekipmanları Gör</a>
            <a className="btn-ghost" href="/lore">Lore</a>
          </div>
        </div>

        <div className="equipments-welcome-visual">
          <img src={equipmentsThumb} alt="Equipments portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
