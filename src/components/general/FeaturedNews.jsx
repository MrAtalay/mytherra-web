import "../../css/general/FeaturedNews.css";

export default function FeaturedNews() {
  return (
    <section className="featured-news">
      <h2>ÖNE ÇIKAN HABERLER</h2>

      <div className="news-grid">
        <div className="news-card">
          <span className="tag">GÜNCELLEME</span>
          <h3>Yeni Bölge: Alvanith</h3>
        </div>

        <div className="news-card">
          <span className="tag">HİKAYE</span>
          <h3>Karanlıkta Doğanlar</h3>
        </div>

        <div className="news-card">
          <span className="tag">ETKİNLİK</span>
          <h3>Pyronith Savaşı</h3>
        </div>
      </div>
    </section>
  );
}
