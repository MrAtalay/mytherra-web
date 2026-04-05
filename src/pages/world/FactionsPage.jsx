import { useState } from "react";
import { factions } from "../../data/factions/factions";
import FactionCard from "../../components/factions/FactionCard";

import Footer from "../../components/general/Footer";
import "../../css/factions/FactionsPage.css";

export default function FactionsPage() {
  const [continentFilter, setContinentFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredFactions = factions
    .filter (f =>
      continentFilter === "all"
      ? true
      : f.continent === continentFilter
    )
    .filter (f =>
      countryFilter === "all"
      ? true
      : f.country === countryFilter
    )

    .sort ((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "continent":
        return a.continent.localeCompare(b.continent);
      case "country":
        return a.country.localeCompare(b.country);
      default:
        return 0;
    }
    });

  return (
    <>  
        {/* Control Panel */}
        <section className="factions-controls">
        <select onChange={e => setContinentFilter(e.target.value)}>
          <option value="all">Tüm Kıtalar</option>
          <option value="Solterra">Solterra</option>
          <option value="Aqualerra">Aqualerra</option>
          <option value="Mytherra">Mytherra</option>
          <option value="Ferraterra">Ferraterra</option>
        </select>

        <select onChange={e => setCountryFilter(e.target.value)}>
          <option value="all">Tüm Ülkeler</option>
          <option value="Alvanith">Alvanith</option>
          <option value="Virexith">Virexith</option>
          <option value="Valerith">Valerith</option>
          <option value="Kaldramith">Kaldramith</option>
          <option value="Grondemith">Grondemith</option>
          <option value="Stonith">Stonith</option>
          <option value="Olyndarith">Olyndarith</option>
          <option value="Skarvith">Skarvith</option>
        </select>

        <select onChange={e => setSortBy(e.target.value)}>
          <option value="name">İsme Göre</option>
          <option value="continent">Kıtaya Göre</option>
          <option value="country">Ülkeye Göre</option>
        </select>
      </section>

      {/* Grid */}
      <section className="factions-grid">
        {filteredFactions.map(faction => (
          <FactionCard key={faction.id} faction={faction} />
        ))}
      </section>
        <Footer />
    </>
  );
}
