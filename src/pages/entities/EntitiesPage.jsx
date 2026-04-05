import { entities } from "../../data/entities/entitiescard";
import Footer from "../../components/general/Footer";
import EntitiesCard from "../../components/entities/EntitiesCard";
import EntitiesShortInfo from "../../components/entities/EntitiesShortInfo";
import EntitiesWelcomeSection from "../../components/entities/EntitiesWelcomeSection";
import "../../css/entities/EntitiesPage.css";

function EntitiesPage() {
  return (
    <>
      <EntitiesWelcomeSection />
      <section className="entities-grid">
        {entities.map(item => (
          <EntitiesCard key={item.id} entities={item} />
        ))}
      </section>
      <EntitiesShortInfo />
      <Footer />
    </>
  );
}

export default EntitiesPage;