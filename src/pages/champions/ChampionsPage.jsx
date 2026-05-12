import { useApi } from "../../hooks/useApi";
import ChampionCard from "../../components/champions/ChampionCard";
import Footer from "../../components/general/Footer";
import "../../css/champions/ChampionsPage.css";

export default function ChampionsPage() {
  const { data: champions, loading } = useApi("/api/champions");
  return (
    <>
      <main className="champions-page">
        <h1>Şampiyonlar</h1>
        {loading
          ? <p style={{ textAlign: "center", color: "#c8aa6e" }}>Yükleniyor...</p>
          : <section className="champions-grid">
              {champions.map((champion) => (
                <ChampionCard key={champion.id} champion={{
                  ...champion,
                  abilities: (() => { try { return JSON.parse(champion.abilities || "[]"); } catch { return []; } })()
                }} />
              ))}
            </section>
        }
      </main>
      <Footer />
    </>
  );
}
