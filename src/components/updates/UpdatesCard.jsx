import { Link } from "react-router-dom";
import "/src/css/updates/UpdatesCard.css";

export default function UpdatesCard({ updates }) {
  return (
    <Link to={updates.path} className={`updates-card theme-${updates.theme}`}>
      <div className="updates-overlay" />

      <div className="updates-info">
        <h3>{updates.name}</h3>
        <p>{updates.description}</p>
        <span className="updates-cta">Keşfet →</span>
      </div>
    </Link>
  );
}
