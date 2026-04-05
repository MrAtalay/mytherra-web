import LoreWelcomeSection from "../components/lore/LoreWelcomeSection";
import LoreAgesSection from "../components/lore/LoreAgesSection";
import WorldOriginsSection from "../components/lore/WorldOriginsSection";
import AncientForcesSection from "../components/lore/AncientForcesSection";
import LegendaryFiguresSection from "../components/lore/LegendaryFiguresSection";
import MajorFactionsSection from "../components/lore/MajorFactionsSection";
import UnansweredMysteriesSection from "../components/lore/UnansweredMysteriesSection";
import LoreFooterCTA from "../components/lore/LoreFooterCTA";
import Footer from "../components/general/Footer";

function LorePage() {
  return (
    <>
      <LoreWelcomeSection />
      <LoreAgesSection />
      <WorldOriginsSection />
      <AncientForcesSection />
      <LegendaryFiguresSection />
      <MajorFactionsSection />
      <UnansweredMysteriesSection />
      <LoreFooterCTA />
      <Footer />
    </>
  );
}

export default LorePage;