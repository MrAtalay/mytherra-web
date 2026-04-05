import "../../css/world/RegionCard.css";

export default function RegionCard({ region }) {
  return (
    <section className="region-card">
      <img src={region.image} alt={region.name} />

      <div className="region-info">
        <h2>{region.name}</h2>
        <h4>{region.title}</h4>

        <p>{region.description}</p>

        <div className="meta">
          <span>Bilgi: {region.info}</span>
        </div>
      </div>
    </section>
  );
}
