import "/src/css/lore/LegendaryFiguresSection.css";

export default function LegendaryFiguresSection() {
  return (
    <section className="legendary-figures-section" aria-labelledby="figures-heading">
      <div className="legendary-figures-inner">

        {/* Header */}
        <header className="figures-header">
          <p className="eyebrow">Efsaneler</p>
          <h2 id="figures-heading" className="figures-title">
            Kadim Figürler
          </h2>
          <p className="figures-lead">
            Mytherra’nın tarihi krallar ve ordular tarafından değil;
            tek bir kararın dünyayı yaraladığı figürler tarafından yazıldı.
          </p>
        </header>

        {/* Grid */}
        <div className="figures-grid">
          <article className="figure-card shadow">
            <h3>Aethrakar</h3>
            <span className="figure-title">Zamanın Yırtığı</span>
            <p>
              Ölümü bir hata olarak gören ilk büyücü.
              Zamanın tek bir çizgi olması gerektiğini reddetti
              ve bedelini varlığını kaybederek ödedi.
            </p>
            <span className="figure-impact">Zamansal Akımlar</span>
          </article>

          <article className="figure-card abyss">
            <h3>Thal’Zuur</h3>
            <span className="figure-title">Derinliğin Nabzı</span>
            <p>
              Okyanusun bir canlı üretme çabası değil;
              kendini savunma refleksi.
              Deniz onunla konuşmaz — onunla karar verir.
            </p>
            <span className="figure-impact">Okyanus Manası</span>
          </article>

          <article className="figure-card death">
            <h3>Morvaelis</h3>
            <span className="figure-title">Bin Ruhun Papazı</span>
            <p>
              Ölüyü diriltmedi.
              Ölümü ikna etti.
              Sessiz ordular onun vaazının sonucudur.
            </p>
            <span className="figure-impact">Necromancy Doktrini</span>
          </article>

          <article className="figure-card flame">
            <h3>Ignivar</h3>
            <span className="figure-title">Külün Hatırladığı</span>
            <p>
              Yanmayı reddeden ejderha anısı.
              Ateşi yok etmez, hatırlatır.
            </p>
            <span className="figure-impact">Alev Ritüelleri</span>
          </article>

          <article className="figure-card shadow">
            <h3>Vael’Thryn</h3>
            <span className="figure-title">Gölgeyle Anlaşan</span>
            <p>
              Gölgelere isim veren ilk insan.
              Karşılığında kendinden vazgeçti.
            </p>
            <span className="figure-impact">Gölge Bilinci</span>
          </article>
        </div>

        {/* Quote */}
        <footer className="figures-quote">
          <blockquote>
            “Efsaneler hatırlanmaz.  
            Onlar, dünya izin verdiği sürece var olur.”
          </blockquote>
        </footer>

      </div>
    </section>
  );
}
