import "../../css/world/ShortInfoSections.css";
import mapImg from "../../assets/map.png";
import { regions } from "../../data/regions/regions";
import { factions } from "../../data/factions/factions";

export default function MapShortInfo() {
  const regionCount = regions.length;
  const kingdomCount = factions.length;

  return (
    <section className="short-info-section map-short" aria-label="Map overview">
      <div className="map-inner">
        <div className="map-thumb">
          <img src={mapImg} alt="World map thumbnail" loading="lazy" />
        </div>

        <div className="map-stats">
          <h3 className="short-info-title">Harita & İstatistikler</h3>
          <p className="short-info-sub">Mytherra genel görünümü, bölge ve krallık sayıları.</p>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat-num">{regionCount}</div>
              <div className="stat-label">Bölgeler</div>
            </div>
            <div className="stat">
              <div className="stat-num">{kingdomCount}</div>
              <div className="stat-label">Krallıklar</div>
            </div>
          </div>

          <div className="short-info-footer">
            <a className="btn-primary" href="/world/map">Haritayı Aç</a>
            <a className="btn-ghost" href="/world/regions">Bölgeleri İncele</a>
          </div>
        </div>
      </div>
    </section>
  );
}
