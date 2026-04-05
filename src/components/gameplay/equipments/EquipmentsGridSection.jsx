import "../../../css/gameplay/equipments/EquipmentsGrid.css";
import { equipments } from "../../../data/gameplay/equipments/equipments";
import EquipmentsCard from "./EquipmentsCard";

export default function EquipmentsGridSection() {
  return (
    <section className="equipments-grid" aria-label="Equipments list">
      {equipments.map(equipments => (
        <EquipmentsCard key={equipments.id} equipments={equipments} />
      ))}
    </section>
  );
}
