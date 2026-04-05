import "../../css/champions/ChampionCard.css";

export default function ChampionCard({ champion }) {
  return (
    <section className="champion-card">
      <img src={champion.image} alt={champion.name} />

      <div className="champion-info">
        <h2>{champion.name}</h2>
        <h4>{champion.title}</h4>

        <p>{champion.description}</p>

        <div className="meta">
          <span>Role: {champion.role}</span>
          <span>Element: {champion.element}</span>
        </div>

        <ul className="abilities">
          {champion.abilities.map((ability, i) => (
            <li key={i}>{ability}</li>
          ))}
        </ul>
        
        <div className="details">
          <button>Detayları Görüntüle</button>
        </div>
      </div>
    </section>
  );
}
