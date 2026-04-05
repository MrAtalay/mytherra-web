export default function AbilitiesCard({ abilities }) {
  return (
    <article className="abilities-card" aria-labelledby={"abilities-" + abilities.id}>
      <img src={abilities.image} alt={abilities.name} />

      <div className="abilities-info">
        <h3 id={"abilities-" + abilities.id}>{abilities.name}</h3>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <span className="abilities-title">{abilities.title}</span>
          <span className={"abilities-badge " + (abilities.difficulty || '').toLowerCase()}>{abilities.difficulty}</span>
          <span className="abilities-phases">{abilities.phaseCount} phases</span>
        </div>

        <p style={{marginTop:8}}>{abilities.shortLore}</p>

        <div style={{marginTop:10}}>
          <span className="abilities-meta">{abilities.region} · {abilities.role}</span>
        </div>

        <div>
          <a className="abilities-cta" href={`/gameplay/abilities/${abilities.id}`} aria-label={`Open ${abilities.name} details`}>
            İncele
          </a>
        </div>
      </div>
    </article>
  );
}
