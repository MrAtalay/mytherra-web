export default function EquipmentsCard({ equipments }) {
  return (
    <article className="equipments-card" aria-labelledby={"equipments-" + equipments.id}>
      <img src={equipments.image} alt={equipments.name} />

      <div className="equipments-info">
        <h3 id={"equipments-" + equipments.id}>{equipments.name}</h3>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <span className="equipments-title">{equipments.title}</span>
          <span className={"equipments-badge " + (equipments.difficulty || '').toLowerCase()}>{equipments.difficulty}</span>
          <span className="equipments-phases">{equipments.phaseCount} phases</span>
        </div>

        <p style={{marginTop:8}}>{equipments.shortLore}</p>

        <div style={{marginTop:10}}>
          <span className="equipments-meta">{equipments.region} · {equipments.role}</span>
        </div>

        <div>
          <a className="equipments-cta" href={`/gameplay/equipments/${equipments.id}`} aria-label={`Open ${equipments.name} details`}>
            İncele
          </a>
        </div>
      </div>
    </article>
  );
}
