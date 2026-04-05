import video from "../../assets/cinematic.mp4";

function WorldCinematicSection() {
  return (
    <section style={styles.wcsection} aria-label="Cinematic lore section">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={styles.video}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div style={styles.overlay} />

      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.badge}>Yer: Antik Dağ</div>
          <h2 style={styles.title}>Kadim Büyücü — Aetrahkar</h2>
          <p style={styles.lead}>
            Sinematikte gördüğünüz Aetrahkar, Mytherra'nın en eski ve en güçlü büyücülerinden biridir. Binlerce yıl önce, kadim büyünün sırlarını keşfetmiş ve evrenin dengesini korumak için hayatını adamıştır.
          </p>

          <p style={styles.detail}>
            Antik büyünün ustası olan Aetrahkar, Mytherra'nın karanlık zamanlarında ışık olmuş ve halkına rehberlik etmiştir. Onun bilgeliği ve gücü, efsanelerde nesiller boyu anlatılmıştır. Sinematikte, Aetrahkar'ın kadim bir tehdide karşı verdiği mücadeleyi izleyebilirsiniz.
          </p>

          <div style={styles.actions}>
            <a href="/play" style={{ ...styles.button, ...styles.primary }}>
              Şimdi Yüzleş
            </a>
            <a href="/lore" style={{ ...styles.button, ...styles.secondary }}>
              Hikayeyi Keşfet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wcsection: {
    position: "relative",
    width: "100%",
    minHeight: "70vh",
    height: "80vh",
    overflow: "hidden",
    display: "block",
  },
  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: 0,
    filter: "saturate(0.9) contrast(1.05)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.6) 60%, rgba(2,6,23,0.85) 100%)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1rem",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: "980px",
    width: "100%",
    background: "linear-gradient(135deg, rgba(10,14,22,0.24), rgba(10,14,22,0.18))",
    borderRadius: "14px",
    padding: "2rem 2.25rem",
    color: "#FFFFFF",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(2,6,23,0.6)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.04)",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.85rem",
    padding: "0.25rem 0.6rem",
    borderRadius: "999px",
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.04)",
    marginBottom: "0.75rem",
    color: "#dfe7ff",
  },
  title: {
    margin: "0 0 0.6rem 0",
    fontSize: "clamp(1.4rem, 3.6vw, 2.6rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.01em",
    fontWeight: 800,
    textShadow: "0 6px 26px rgba(2,6,23,0.6)",
  },
  lead: {
    margin: "0 0 1rem 0",
    fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)",
    color: "rgba(245,247,250,0.92)",
  },
  detail: {
    margin: "0 0 1.25rem 0",
    fontSize: "0.95rem",
    color: "rgba(225,230,240,0.8)",
  },
  actions: {
    display: "flex",
    gap: "0.9rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    display: "inline-block",
    padding: "0.65rem 1.05rem",
    borderRadius: "10px",
    fontWeight: 700,
    textDecoration: "none",
    transition: "transform .18s ease, box-shadow .18s ease",
  },
  primary: {
    background: "linear-gradient(90deg,#f6c84c,#f28f3b)",
    color: "#071024",
    boxShadow: "0 10px 30px rgba(242,143,59,0.14)",
  },
  secondary: {
    background: "rgba(255,255,255,0.04)",
    color: "#e9f0ff",
    border: "1px solid rgba(255,255,255,0.06)",
  },
};

export default WorldCinematicSection;
