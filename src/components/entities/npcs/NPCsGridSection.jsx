import "../../../css/entities/npcs/NPCsGrid.css";
import { useApi } from "../../../hooks/useApi";
import NPCCard from "./NPCsCard";

export default function NPCsGridSection() {
  const { data: npcs, loading } = useApi("/api/npcs");
  if (loading) return <p style={{ textAlign: "center", padding: "4rem", color: "#c8aa6e" }}>Yükleniyor...</p>;
  return (
    <section className="npcs-grid" aria-label="NPCs list">
      {npcs.map((npc) => <NPCCard key={npc.id} npc={npc} />)}
    </section>
  );
}
