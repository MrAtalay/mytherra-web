import "../../../css/gameplay/items/ItemsGrid.css";
import { useApi } from "../../../hooks/useApi";
import ItemsCard from "./ItemsCard";

export default function ItemsGridSection() {
  const { data: items, loading } = useApi("/api/items");
  if (loading) return <p style={{ textAlign: "center", padding: "4rem", color: "#c8aa6e" }}>Yükleniyor...</p>;
  return (
    <section className="items-grid" aria-label="Items list">
      {items.map((item) => <ItemsCard key={item.id} items={item} />)}
    </section>
  );
}
