export default function BossCard({ boss }) {
  return (
    <article className="boss-card" aria-labelledby={"boss-" + boss.id}>
      <img src={boss.image} alt={boss.name} />

      <div className="boss-info">
        <h3 id={"boss-" + boss.id}>{boss.name}</h3>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <span className="boss-title">{boss.title}</span>
          <span className={"boss-badge " + (boss.difficulty || '').toLowerCase()}>{boss.difficulty}</span>
          <span className="boss-phases">{boss.phaseCount} phases</span>
        </div>

        <p style={{marginTop:8}}>{boss.shortLore}</p>

        <div style={{marginTop:10}}>
          <span className="boss-meta">{boss.region} · {boss.role}</span>
        </div>

        <div>
          <a className="boss-cta" href={`/entities/bosses/${boss.id}`} aria-label={`Open ${boss.name} details`}>
            İncele
          </a>
        </div>
      </div>
    </article>
  );
}
