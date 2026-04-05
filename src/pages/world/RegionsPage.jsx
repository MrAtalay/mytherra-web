import { regions } from "../../data/regions/regions";
import RegionCard from "../../components/regions/RegionCard";
import Footer from "../../components/general/Footer";

export default function RegionPage() {
  return (
    <>
        <main>
        <div className="spacer" style={{ height: "80px" }}></div>
        <h1 className="page-title">Kıtalar</h1>

        {regions.map((region) => (
            <RegionCard key={region.id} region={region} />
        ))}
        
        </main>
        <Footer />
    </>
  );
}
