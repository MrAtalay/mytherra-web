import { useApi } from "../../hooks/useApi";
import RegionCard from "../../components/regions/RegionCard";
import Footer from "../../components/general/Footer";

export default function RegionPage() {
  const { data: regions, loading } = useApi("/api/regions");
  return (
    <>
      <main>
        <div className="spacer" style={{ height: "80px" }}></div>
        <h1 className="page-title">Kıtalar</h1>
        {loading
          ? <p style={{ textAlign: "center", color: "#c8aa6e" }}>Yükleniyor...</p>
          : regions.map((region) => <RegionCard key={region.id} region={region} />)
        }
      </main>
      <Footer />
    </>
  );
}
