import "/src/css/gameplay/items/ItemsWelcomeSection.css";
import itemsThumb from "/src/assets/items/items_placeholder.jpg";

export default function ItemsWelcomeSection() {
  return (
    <section className="items-welcome-section" aria-labelledby="items-heading">
      <div className="items-welcome-inner">
        <div className="items-welcome-copy">
          <p className="eyebrow">Eşyalar</p>
          <h1 id="items-heading" className="items-title">Eşyalar</h1>
          <p className="items-lead">
            Mytherra’nın yaşayan karakterleri — düşmanlar, rakipler ve kaderini
            şekillendiren figürler. Onlarla etkileşimler oyunun dünyasını genişletir.
          </p>

          <div className="btn-row">
            <a className="btn-primary" href="/gameplay/items">Tüm Eşyaları Gör</a>
            <a className="btn-ghost" href="/lore">Lore</a>
          </div>
        </div>

        <div className="items-welcome-visual">
          <img src={itemsThumb} alt="Items portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
