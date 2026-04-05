export default function ItemsCard({ items }) {
  return (
    <article className="items-card" aria-labelledby={"items-" + items.id}>
      <img src={items.image} alt={items.name} />

      <div className="items-info">
        <h3 id={"items-" + items.id}>{items.name}</h3>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <span className="items-title">{items.title}</span>
          <span className={"items-badge " + (items.difficulty || '').toLowerCase()}>{items.difficulty}</span>
          <span className="items-phases">{items.phaseCount} phases</span>
        </div>

        <p style={{marginTop:8}}>{items.shortLore}</p>

        <div style={{marginTop:10}}>
          <span className="items-meta">{items.region} · {items.role}</span>
        </div>

        <div>
          <a className="items-cta" href={`/gameplay/items/${items.id}`} aria-label={`Open ${items.name} details`}>
            İncele
          </a>
        </div>
      </div>
    </article>
  );
}
