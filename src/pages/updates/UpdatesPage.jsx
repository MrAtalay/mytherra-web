import { updates } from "../../data/updates/updatescard";
import UpdatesWelcomeSection from "../../components/updates/UpdatesWelcomeSection";
import UpdatesTabsSection from "../../components/updates/UpdatesTabsSection";
import LatestUpdatesSection from "../../components/updates/LatestUpdatesSection";
import UpdatesListSection from "../../components/updates/UpdatesListSection";
import UpdatesFooterCTA from "../../components/updates/UpdatesFooterCTA";
import Footer from "../../components/general/Footer";
import UpdatesCard from "../../components/updates/UpdatesCard";
import "../../css/updates/UpdatesPage.css";

function UpdatesPage() {
  return (
    <>
      <UpdatesWelcomeSection />
      <UpdatesTabsSection />
      <LatestUpdatesSection />
      <UpdatesListSection />
      <section className="updates-grid">
        {updates.map(item => (
          <UpdatesCard key={item.id} updates={item} />
        ))}
      </section>
      <UpdatesFooterCTA />
      <Footer />
    </>
  );
}

export default UpdatesPage;