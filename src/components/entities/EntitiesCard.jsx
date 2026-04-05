import { Link } from "react-router-dom";
import "/src/css/entities/EntitiesCard.css";

export default function EntitiesCard({ entities }) {
  return (
    <Link to={entities.path} className={`entities-card theme-${entities.theme}`}>
      <div className="entities-overlay" />

      <div className="entities-info">
        <h3>{entities.name}</h3>
        <p>{entities.description}</p>
        <span className="entities-cta">Keşfet →</span>
      </div>
    </Link>
  );
}
