import "../../../css/entities/mobs/MobsGrid.css";
import { mobs } from "../../../data/entities/mobs/mobs";
import MobsCard from "./MobsCard";

export default function MobsGridSection() {
  return (
    <section className="mobs-grid" aria-label="Mobs list">
      {mobs.map(mob => (
        <MobsCard key={mob.id} mob={mob} />
      ))}
    </section>
  );
}
