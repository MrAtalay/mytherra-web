import { champions } from "../../data/champions/champion";
import ChampionCard from "../../components/champions/ChampionCard";
import Footer from "../../components/general/Footer";
import "../../css/champions/ChampionsPage.css";

export default function ChampionsPage() {
  return (
    <>
        <main className="champions-page">
        <h1>Şampiyonlar</h1>

        <section className="champions-grid">
            {champions.map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
            ))}
        </section>
        </main>
        <Footer />
    </>
  );
}
