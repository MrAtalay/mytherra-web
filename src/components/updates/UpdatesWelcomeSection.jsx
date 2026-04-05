import "/src/css/updates/UpdatesWelcomeSection.css";

export default function UpdateWelcomeSection() {
  return (
    <section
      className="update-welcome-section"
      aria-labelledby="updates-heading"
    >
      <div className="update-welcome-inner">
        {/* TEXT AREA */}
        <div className="update-welcome-copy">
          <p className="eyebrow">Güncellemeler</p>

          <h1 id="updates-heading" className="update-title">
            Mytherra Geliştirme Günlüğü
          </h1>

          <p className="update-lead">
            Mytherra yaşayan bir dünya. Bu sayfada geliştirici notlarını,
            dünyada yapılan değişiklikleri ve oynanışı etkileyen tüm
            güncellemeleri takip edebilirsin.
          </p>

          <div className="update-cta-row">
            <a href="/updates/devlogs" className="btn-primary">
              Devlog’ları Oku
            </a>
            <a href="/updates/patch-notes" className="btn-ghost">
              Patch Notes
            </a>
          </div>
        </div>

        {/* VISUAL AREA */}
        <div className="update-welcome-visual" aria-hidden>
          {/* Şimdilik boş — sonra timeline / artwork eklenebilir */}
          <div className="update-visual-placeholder" />
        </div>
      </div>
    </section>
  );
}
