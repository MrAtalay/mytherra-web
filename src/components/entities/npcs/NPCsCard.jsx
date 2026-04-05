export default function NPCCard({ npc }) {
  return (
    <article className="npc-card" aria-labelledby={"npc-" + npc.id}>
      <img src={npc.image} alt={npc.name} />

      <div className="npc-info">
        <h3 id={"npc-" + npc.id}>{npc.name}</h3>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="npc-title">{npc.title}</span>
          <span className={"npc-badge " + (npc.alignment || '').toLowerCase()}>{npc.alignment}</span>
          <span className="npc-role">{npc.role}</span>
        </div>

        <p style={{ marginTop: 8 }}>{npc.shortLore}</p>

        <div style={{ marginTop: 10 }}>
          <span className="npc-meta">{npc.region} · {npc.role}</span>
        </div>

        <div>
          <a className="npc-cta" href={`/entities/npcs/${npc.id}`} aria-label={`Open ${npc.name} details`}>
            İncele
          </a>
        </div>
      </div>
    </article>
  );
}
