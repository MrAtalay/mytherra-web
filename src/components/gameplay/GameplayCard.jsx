import { Link } from "react-router-dom";
import "/src/css/gameplay/GameplayCard.css";

export default function GameplayCard({ gameplay }) {
  return (
    <Link to={gameplay.path} className={`gameplay-card theme-${gameplay.theme}`}>
      <div className="gameplay-overlay" />

      <div className="gameplay-info">
        <h3>{gameplay.name}</h3>
        <p>{gameplay.description}</p>
        <span className="gameplay-cta">Keşfet →</span>
      </div>
    </Link>
  );
}
