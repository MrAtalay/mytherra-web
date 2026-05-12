import "../../css/general/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mytherra : Veil of The Ancient. Tüm hakları saklıdır.</p>
    </footer>
  );
}