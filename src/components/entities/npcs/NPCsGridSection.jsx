import "../../../css/entities/npcs/NPCsGrid.css";
import { npcs } from "../../../data/entities/npcs/npcs";
import NPCCard from "./NPCsCard";

export default function NPCsGridSection() {
  return (
    <section className="npcs-grid" aria-label="NPCs list">
      {npcs.map(npc => (
        <NPCCard key={npc.id} npc={npc} />
      ))}
    </section>
  );
}
