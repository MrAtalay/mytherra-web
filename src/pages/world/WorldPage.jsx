import { world } from "../../data/world/worldcard";

import Footer from "../../components/general/Footer";
import WorldCard from "../../components/world/WorldCard";
import WorldWelcomeSection from "../../components/world/WorldWelcomeSection";
import WorldCinematicSection from "../../components/world/WorldCinematicSection";
import RegionsShortInfo from "../../components/world/RegionsShortInfo";
import MapShortInfo from "../../components/world/MapShortInfo";
import KingdomsShortInfo from "../../components/world/KingdomsShortInfo";

import "../../css/world/WorldPage.css";

function WorldPage() {
  return (
    <>  
      <WorldWelcomeSection />
      <section className="world-grid">
        {world.map(item => (
          <WorldCard key={item.id} world={item} />
        ))}
      </section>
      <RegionsShortInfo />
      <MapShortInfo />
      <KingdomsShortInfo />
      <WorldCinematicSection />
      <Footer />
    </>
  );
}

export default WorldPage;