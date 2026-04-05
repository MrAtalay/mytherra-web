export default function MobCard({ mob }) {
  return (
    <article className="mob-card" aria-labelledby={"mob-" + mob.id}>
      <img src={mob.image} alt={mob.name} />

      <div className="mob-info">
        <h3 id={"mob-" + mob.id}>{mob.name}</h3>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <span className="mob-title">{mob.title}</span>
          <span className={"mob-badge " + (mob.difficulty || '').toLowerCase()}>{mob.difficulty}</span>
          <span className="mob-element">{mob.element}</span>
        </div>

        <p style={{marginTop:8}}>{mob.shortLore}</p>

        <div style={{marginTop:10}}>
          <span className="mob-meta">{mob.region} · {mob.type}</span>
        </div>

        <div>
          <a className="mob-cta" href={`/entities/mobs/${mob.id}`} aria-label={`Open ${mob.name} details`}>
            İncele
          </a>
        </div>
      </div>
    </article>
  );
}
