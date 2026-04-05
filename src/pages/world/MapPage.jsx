import Footer from "../../components/general/Footer";
import MapSection from "../../components/map/MapSection";

import "../../css/world/MapPage.css";

function MapPage() {
  return (
    <>
      <main>
              <div className="spacer" style={{ height: "80px" }}></div>
              <h1 className="page-title">Harita</h1>     
      </main>
      <MapSection />
      <Footer />
    </>
  );
}

export default MapPage;