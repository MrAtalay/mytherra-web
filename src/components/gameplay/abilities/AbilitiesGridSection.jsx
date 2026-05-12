import "../../../css/gameplay/abilities/AbilitiesGrid.css";
import { useApi } from "../../../hooks/useApi";
import AbilitiesCard from "./AbilitiesCard";

export default function AbilitiesGridSection() {
  const { data: abilities, loading } = useApi("/api/abilities");
  if (loading) return <p style={{ textAlign: "center", padding: "4rem", color: "#c8aa6e" }}>Yükleniyor...</p>;
  return (
    <section className="abilities-grid" aria-label="Abilities list">
      {abilities.map((ability) => <AbilitiesCard key={ability.id} abilities={ability} />)}
    </section>
  );
}
