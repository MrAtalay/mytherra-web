import "/src/css/lore/MajorFactionsSection.css";

export default function MajorFactionsSection() {
  return (
    <section className="major-factions-section" aria-labelledby="factions-heading">
      <div className="major-factions-inner">

        {/* Header */}
        <header className="factions-header">
          <p className="eyebrow">FACTIONS</p>
          <h2 id="factions-heading" className="factions-title">
            Büyük Fraksiyonlar
          </h2>
          <p className="factions-lead">
            Mytherra’nın kaderi, bu kadim güçlerin çatışması ve dengesiyle şekillenir.
            Her fraksiyon, dünyanın farklı bir gerçeğini savunur.
          </p>
        </header>

        {/* Grid */}
        <div className="factions-grid">

          <article className="faction-card light">
            <h3>Solar Concord</h3>
            <span className="faction-aspect">Işık & Düzen</span>
            <p>
              Krallıklar ve kutsal tarikatlar tarafından desteklenen Solar Concord,
              düzenin kaostan üstün olduğuna inanır.
            </p>
          </article>

          <article className="faction-card shadow">
            <h3>Veiled Covenant</h3>
            <span className="faction-aspect">Gölge & Antlaşma</span>
            <p>
              Gölgeyle yapılan eski sözleşmelerin koruyucuları.
              Bilgi, bedelsiz verilmez.
            </p>
          </article>

          <article className="faction-card nature">
            <h3>Verdant Circle</h3>
            <span className="faction-aspect">Doğa & Döngü</span>
            <p>
              Medeniyetten önce var olan ruhlar.
              Onlara göre dünya, iyileştirilmez; dinlenmeye bırakılır.
            </p>
          </article>

          <article className="faction-card arcane">
            <h3>Arcanum Ascendant</h3>
            <span className="faction-aspect">Mana & Bilgelik</span>
            <p>
              Kadim büyücüler ve mana akademileri.
              Gerçeklik, çözülebilecek bir formüldür.
            </p>
          </article>

          <article className="faction-card death">
            <h3>Mortis Synod</h3>
            <span className="faction-aspect">Ölüm & Söz</span>
            <p>
              Ruhlar birer araç değil, müttefiktir.
              Ölüm, son değil; görev değişimidir.
            </p>
          </article>

        </div>

        {/* Quote */}
        <div className="factions-quote">
          <blockquote>
            “Dünya tarafsız değildir. Sadece kimin kazandığını bekler.”
          </blockquote>
        </div>

      </div>
    </section>
  );
}
