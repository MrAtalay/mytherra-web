import "/src/css/lore/AncientForcesSection.css";

export default function AncientForcesSection() {
  return (
    <section className="ancient-forces-section" aria-labelledby="ancient-forces-heading">
      <div className="ancient-forces-inner">

        {/* Header */}
        <header className="forces-header">
          <p className="eyebrow">Kadim Güçler</p>
          <h2 id="ancient-forces-heading" className="forces-title">
            Dünyayı Şekillendiren Kudretler
          </h2>
          <p className="forces-lead">
            Mytherra’nın yüzeyinde krallıklar savaşır; ancak derinlerinde,
            her kaderi fısıldayan kadim güçler hüküm sürer.
          </p>
        </header>

        {/* Grid */}
        <div className="forces-grid">
          <article className="force-card light">
            <h3>Işığın Kaynağı</h3>
            <p>
              Yaratımın ve düzenin özü. Umut, adalet ve kutsal yeminler bu
              güçten doğar.
            </p>
          </article>

          <article className="force-card shadow">
            <h3>Umbral Veil</h3>
            <p>
              Gölgenin ve bilinmeyenin perdesi. Sırlar, korkular ve bastırılmış
              arzular burada şekillenir.
            </p>
          </article>

          <article className="force-card wild">
            <h3>Primal Wild</h3>
            <p>
              Doğanın saf iradesi. Değişim, içgüdü ve dönüşüm bu güçle
              hayat bulur.
            </p>
          </article>

          <article className="force-card cycle">
            <h3>Ebedi Döngü</h3>
            <p>
              Yaşam ve ölüm arasındaki sonsuz ritim. Hiçbir şey gerçekten
              kaybolmaz.
            </p>
          </article>

          <article className="force-card void">
            <h3>Void Beyond</h3>
            <p>
              Yokluğun ötesi. Akıl dışı, bozulmuş ve anlaşılmaz olanın kaynağı.
            </p>
          </article>
        </div>

        {/* Closing */}
        <footer className="forces-quote">
          <blockquote>
            “Krallar hükmeder, varlıklar susar; ama kadim güçler asla kaybolmaz.”
          </blockquote>
        </footer>

      </div>
    </section>
  );
}
