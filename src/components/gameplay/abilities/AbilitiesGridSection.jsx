import "../../../css/gameplay/abilities/AbilitiesGrid.css";
import { abilities } from "../../../data/gameplay/abilities/abilities";
import AbilitiesCard from "./AbilitiesCard";

export default function AbilitiesGridSection() {
  return (
    <section className="abilities-grid" aria-label="Abilities list">
      {abilities.map(ability => (
        <AbilitiesCard key={ability.id} abilities={ability} />
      ))}
    </section>
  );
}
