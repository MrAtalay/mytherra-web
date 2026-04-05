import "../../css/general/Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate} from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/"
        className={({ isActive }) => (isActive ? "active" : "")}>
        <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>

        <ul className="navbar-menu">
          <li>
            <NavLink to="/champions" className={({ isActive }) => (isActive ? "active" : "")}>
              ŞAMPİYONLAR
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/world" className={({ isActive }) => (isActive ? "active" : "")}>  
            DÜNYA
            </NavLink>
            <span className="arrow">▾</span>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <NavLink to="/world/regions">
                Bölgeler <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/world/map">
                Harita <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/world/factions">
                Krallıklar <span className="arrow">▸</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="/entities" className={({ isActive }) => (isActive ? "active" : "")}>  
            VARLIKLAR
            </NavLink>
            <span className="arrow">▾</span>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <NavLink to="/entities/npcs">
                NPC'ler <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/entities/mobs">
                Yaratıklar <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/entities/bosses">
                Baş Düşmanlar <span className="arrow">▸</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="/gameplay" className={({ isActive }) => (isActive ? "active" : "")}>  
            OYNANIŞ
            </NavLink>
            <span className="arrow">▾</span>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <NavLink to="/gameplay/abilities">
                Büyüler <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/gameplay/items">
                Eşyalar <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/gameplay/equipments">
                Ekipmanlar <span className="arrow">▸</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/lore" className={({ isActive }) => (isActive ? "active" : "")}>  
            HİKAYE
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/updates" className={({ isActive }) => (isActive ? "active" : "")}>  
            GÜNCELLEMELER
            </NavLink>
            <span className="arrow">▾</span>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <NavLink to="/updates/patchnotes">
                Yama Notları <span className="arrow">▸</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/updates/devlogs">
                DevLogs <span className="arrow">▸</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
          <button className="btn ghost" onClick={() => navigate("/login")}>GİRİŞ</button>
          <a
            href="/mytherra-demo.zip"
            download
            className="btn primary">
            <button className="btn primary">HEMEN OYNA</button>
          </a>
      </div>
    </nav>
  );
}
