import { Link } from "react-router-dom";
import "/src/css/world/WorldCard.css";

export default function WorldCard({ world }) {
  return (
    <Link to={world.path} className={`world-card theme-${world.theme}`}>
      <div className="world-overlay" />

      <div className="world-info">
        <h3>{world.name}</h3>
        <p>{world.description}</p>
        <span className="world-cta">Keşfet →</span>
      </div>
    </Link>
  );
}
