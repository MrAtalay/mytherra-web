import "../../../css/entities/bosses/BossesGrid.css";
import { useApi } from "../../../hooks/useApi";
import BossesCard from "./BossesCard";

export default function BossesGridSection() {
  const { data: bosses, loading } = useApi("/api/bosses");
  if (loading) return <p style={{ textAlign: "center", padding: "4rem", color: "#c8aa6e" }}>Yükleniyor...</p>;
  return (
    <section className="bosses-grid" aria-label="Bosses list">
      {bosses.map((boss) => <BossesCard key={boss.id} boss={boss} />)}
    </section>
  );
}
