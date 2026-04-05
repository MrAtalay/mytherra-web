import HeroSection from "../components/general/HeroSection";
import FeaturedNews from "../components/general/FeaturedNews";
import ChampionSlider from "../components/champions/ChampionSlider";
import Footer from "../components/general/Footer";


function MainPage() {
  return (
    <>      
      <HeroSection />
      <FeaturedNews />
      <ChampionSlider />
      <Footer />
    </>
  );
}

export default MainPage;
