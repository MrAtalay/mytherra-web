import "../../../css/entities/bosses/BossesGrid.css";
import { bosses } from "../../../data/entities/bosses/bosses";
import BossesCard from "./BossesCard";

export default function BossesGridSection() {
  return (
    <section className="bosses-grid" aria-label="Bosses list">
      {bosses.map(boss => (
        <BossesCard key={boss.id} boss={boss} />
      ))}
    </section>
  );
}
