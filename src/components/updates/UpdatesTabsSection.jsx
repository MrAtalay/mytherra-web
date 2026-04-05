import { NavLink } from "react-router-dom";
import "/src/css/updates/UpdatesTabsSection.css";

export default function UpdatesTabsSection() {
  return (
    <section className="updates-tab-section" aria-label="Update navigation">
      <div className="updates-tab-inner">
        
        <div className="updates-tabs">
          <NavLink
            to="/updates/devlogs"
            className={({ isActive }) =>
              isActive ? "updates-tab active" : "updates-tab"
            }
          >
            <span className="tab-title">Devlogs</span>
            <span className="tab-sub">
              Geliştirme süreci, kararlar ve perde arkası
            </span>
          </NavLink>

          <NavLink
            to="/updates/patch-notes"
            className={({ isActive }) =>
              isActive ? "updates-tab active" : "updates-tab"
            }
          >
            <span className="tab-title">Patch Notes</span>
            <span className="tab-sub">
              Versiyonlar, denge değişimleri ve düzeltmeler
            </span>
          </NavLink>
        </div>

      </div>
    </section>
  );
}
