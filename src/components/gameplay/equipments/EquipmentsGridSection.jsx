import "../../../css/gameplay/equipments/EquipmentsGrid.css";
import { useApi } from "../../../hooks/useApi";
import EquipmentsCard from "./EquipmentsCard";

export default function EquipmentsGridSection() {
  const { data: equipments, loading } = useApi("/api/equipments");
  if (loading) return <p style={{ textAlign: "center", padding: "4rem", color: "#c8aa6e" }}>Yükleniyor...</p>;
  return (
    <section className="equipments-grid" aria-label="Equipments list">
      {equipments.map((eq) => <EquipmentsCard key={eq.id} equipments={eq} />)}
    </section>
  );
}
