import "/src/css/lore/LoreFooterCTA.css";

export default function LoreFooterCTA() {
  return (
    <section className="lore-footer-cta" aria-labelledby="lore-cta-heading">
      <div className="lore-footer-inner">
        <p className="lore-cta-eyebrow">Hikâye Bitmedi</p>

        <h2 id="lore-cta-heading" className="lore-cta-title">
          Mytherra Hâlâ Nefes Alıyor
        </h2>

        <p className="lore-cta-text">
          Okudukların yalnızca kayda geçmiş olanlar. Dünya, varlıkları ve
          karanlık sırlarıyla yaşamaya devam ediyor. Gerçeğe yaklaşmak için
          adım atman gerekiyor.
        </p>

        <div className="lore-cta-actions">
          <a className="btn-primary" href="/entities">
            Dünya Varlıkları
          </a>
          <a className="btn-secondary" href="/characters">
            Efsanevi Figürler
          </a>
        </div>
      </div>
    </section>
  );
}
