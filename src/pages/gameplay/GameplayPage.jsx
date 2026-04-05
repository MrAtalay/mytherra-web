import { gameplay } from "../../data/gameplay/gameplaycard";
import Footer from "../../components/general/Footer";
import GameplayCard from "../../components/gameplay/GameplayCard";
import GameplayShortInfo from "../../components/gameplay/GameplayShortInfo";
import GameplayWelcomeSection from "../../components/gameplay/GameplayWelcomeSection";
import "../../css/gameplay/GameplayPage.css";

function GameplayPage() {
  return (
    <>
      <GameplayWelcomeSection />
      <section className="gameplay-grid">
        {gameplay.map(item => (
          <GameplayCard key={item.id} gameplay={item} />
        ))}
      </section>
      <GameplayShortInfo />
      <Footer />
    </>
  );
} 

export default GameplayPage;