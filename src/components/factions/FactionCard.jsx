import { Link } from "react-router-dom";
import "../../css/factions/FactionCard.css";

export default function FactionCard({ faction }) {
  return (
    <section className="faction-card">
        <img src={faction.image} alt={faction.name} />

        <div className="faction-info">
          <h2>{faction.name}</h2>
          <span className="location">
            {faction.continent} • {faction.country}
          </span>
          <p className="title">{faction.title}</p>
          <div className="meta">
            <span>Bilgi: {faction.info}</span>
          </div>

          {<Link to={`/world/factions/${faction.id}`} className="details-link">
            Detayları Gör →
          </Link>}
          
        </div>
    </section>
  );
}
