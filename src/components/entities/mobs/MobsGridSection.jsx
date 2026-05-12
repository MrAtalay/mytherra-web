import { useEffect, useState } from "react";
import "../../../css/entities/mobs/MobsGrid.css";
import MobsCard from "./MobsCard";

export default function MobsGridSection() {
  const [mobs, setMobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/mobs`)
      .then((r) => r.json())
      .then((data) => setMobs(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center", padding: "4rem", color: "#c8aa6e" }}>Yükleniyor...</p>;

  return (
    <section className="mobs-grid" aria-label="Mobs list">
      {mobs.map((mob) => (
        <MobsCard key={mob.id} mob={mob} />
      ))}
    </section>
  );
}
