import { useApi } from "../../hooks/useApi";
import UpdatesWelcomeSection from "../../components/updates/UpdatesWelcomeSection";
import UpdatesTabsSection from "../../components/updates/UpdatesTabsSection";
import LatestUpdatesSection from "../../components/updates/LatestUpdatesSection";
import UpdatesListSection from "../../components/updates/UpdatesListSection";
import UpdatesFooterCTA from "../../components/updates/UpdatesFooterCTA";
import Footer from "../../components/general/Footer";
import UpdatesCard from "../../components/updates/UpdatesCard";
import "../../css/updates/UpdatesPage.css";

export default function UpdatesPage() {
  const { data: updates, loading } = useApi("/api/updates");
  return (
    <>
      <UpdatesWelcomeSection />
      <UpdatesTabsSection />
      <LatestUpdatesSection />
      <UpdatesListSection />
      <section className="updates-grid">
        {loading
          ? <p style={{ textAlign: "center", color: "#c8aa6e" }}>Yükleniyor...</p>
          : updates.map((item) => <UpdatesCard key={item.id} updates={item} />)
        }
      </section>
      <UpdatesFooterCTA />
      <Footer />
    </>
  );
}
