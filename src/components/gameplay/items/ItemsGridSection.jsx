import "../../../css/gameplay/items/ItemsGrid.css";
import { items } from "../../../data/gameplay/items/items";
import ItemsCard from "./ItemsCard";

export default function ItemsGridSection() {
  return (
    <section className="items-grid" aria-label="Items list">
      {items.map(items => (
        <ItemsCard key={items.id} items={items} />
      ))}
    </section>
  );
}
