import "/src/css/world/WorldWelcomeSection.css";
import mytherraImg from "/src/assets/countries/mytherra.png";

export default function WorldWelcomeSection() {
  return (
    <section className="world-welcome-section">
      <div className="world-welcome-inner">
        <div className="world-welcome-copy">
          <p className="world-welcome-subtitle">Mytherra: Veil of The Ancient</p>
          <h1 className="world-welcome-title">Mytherra'ya Hoş Geldin</h1>
          <p className="world-welcome-subtitle world-welcome-description">
            Mytherra: Veil of The Ancient, keşfedilmeyi bekleyen sayısız sır ve
            hikâyeye ev sahipliği yapıyor. Bu kadim dünyanın detaylarını öğrenmek
            için buradan başlayabilirsin.
          </p>

          <div className="world-welcome-actions">
            <a className="btn-welcome" href="/world">Keşfet</a>
            <a className="btn-secondary" href="/lore">Lore</a>
          </div>
        </div>

        <div className="world-welcome-visual">
          <img src={mytherraImg} alt="Mytherra map" />
        </div>
      </div>
    </section>
  );
}
