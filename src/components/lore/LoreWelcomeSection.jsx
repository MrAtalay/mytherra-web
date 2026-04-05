import "/src/css/lore/LoreWelcomeSection.css";

export default function LoreWelcomeSection() {
  return (
    <section className="lore-welcome-section" aria-labelledby="lore-heading">
      <div className="lore-welcome-inner">
        <p className="eyebrow">LORE · CHRONICLES</p>

        <h1 id="lore-heading" className="lore-title">
          Kadim Perdenin Ardında
        </h1>

        <p className="lore-lead">
          Mytherra, yalnızca görünen topraklardan ibaret değildir.  
          Unutulmuş çağların fısıltıları, gölgelerde saklanan hakikatler ve
          zamanın kendisiyle mühürlenmiş sırlar bu dünyanın dokusuna işlemiştir.
        </p>

        <p className="lore-sub">
          Bu sayfalarda anlatılanlar, kesin doğrular değil;  
          hayatta kalanların, kaybolanların ve susturulanların hikâyeleridir.
        </p>

        <div className="btn-row">
          <a href="#ages" className="btn-primary">Çağları Keşfet</a>
          <a href="/world" className="btn-ghost">Dünyaya Dön</a>
        </div>
      </div>
    </section>
  );
}
