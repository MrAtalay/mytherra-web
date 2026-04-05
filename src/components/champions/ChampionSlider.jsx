import { useEffect, useState } from "react";
import "../../css/champions/ChampionSlider.css";
import { Link } from "react-router-dom";

import champ1 from "../../assets/champ1.png";
import champ2 from "../../assets/champ2.png";
import champ3 from "../../assets/champ3.png";

const champions = [
  {
    name: "Aerrai",
    desc: "Taşların Koruyucusu",
    image: champ1,
    theme: "grondemith",
  },
  {
    name: "Myrkann",
    desc: "Gölgelerin Efendisi",
    image: champ2,
    theme: "valerith",
  },
  {
    name: "Anwen",
    desc: "Ametist Büyücüsü",
    image: champ3,
    theme: "stonith",
  },
];

export default function ChampionSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % champions.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const champ = champions[index];

  return (
    <section
      className={`champion-slider ${champ.theme}`}
      style={{ backgroundImage: `url(${champ.image})` }}
    >
      <div className="overlay" />
      <div className="content">
        <h2>{champ.name}</h2>
        <p>{champ.desc}</p>
        <Link to="/champions"
        className={({ isActive }) => (isActive ? "active" : "")}>
          <button>DETAYLAR</button>
        </Link>
      </div>
    </section>

  );
}
