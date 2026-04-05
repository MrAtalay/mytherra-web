import logo from "../../assets/logo1.png";
import video from "../../assets/cinematic.mp4";

function HeroSection() {
  return (
    <section style={styles.hero}>
      {/* Background Video */}
      <video
        autoPlay
        
        loop
        playsInline
        style={styles.video}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div style={styles.content}>
        <img src={logo} alt="Game Logo" style={styles.logo} />

        <p style={styles.subtitle}>
          Mytherra : Veil of The Ancient. Oyuncuların büyülü bir dünyada
          epik maceralara atıldığı, strateji ve keşif dolu bir RPG deneyimi.
        </p>

        <button style={styles.button}>
          Oyna
        </button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.55)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    width: "560px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "40px",
    opacity: 0.85,
  },
  button: {
    padding: "14px 48px",
    fontSize: "16px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    border: "2px solid #c8aa6e",
    backgroundColor: "transparent",
    color: "#c8aa6e",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default HeroSection;
