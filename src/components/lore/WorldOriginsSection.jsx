import "/src/css/lore/WorldOriginsSection.css";

export default function WorldOriginsSection() {
  return (
    <section className="world-origins-section" aria-labelledby="origins-heading">
      <div className="world-origins-inner">

        <header className="origins-header">
          <p className="eyebrow">Origins</p>
          <h2 id="origins-heading" className="origins-title">
            Dünyanın Kökeni
          </h2>
          <p className="origins-lead">
            Mytherra bir tesadüf değildi.  
            Işık, Gölge ve Dengenin ilk çatışmasından doğdu.
          </p>
        </header>

        <div className="origins-grid">

          <article className="origin-card light">
            <h3>Işığın Doğuşu</h3>
            <p>
              İlk kıvılcım saf bilinçten doğdu.  
              Zaman, düzen ve yaşam bu güçle şekillendi.
            </p>
          </article>

          <article className="origin-card shadow">
            <h3>Gölgenin Uyanışı</h3>
            <p>
              Işık genişledikçe, ardında bir boşluk bıraktı.  
              Bu boşluk irade kazandı.
            </p>
          </article>

          <article className="origin-card balance">
            <h3>Dengenin Mührü</h3>
            <p>
              Dünya yok olmamak için üçüncü bir yol seçti.  
              Ne saf ışık, ne mutlak karanlık.
            </p>
          </article>

        </div>

        <footer className="origins-quote">
          <blockquote>
            “Dünya bir savaş alanı değil, bir sonuçtur.”
          </blockquote>
        </footer>

      </div>
    </section>
  );
}
