import "./../../css/updates/UpdatesFooterCTA.css";

const UpdatesFooterCTA = () => {
  return (
    <section className="updates-footer-cta">
      <div className="updates-footer-container">
        <h2>The World Is Still Evolving</h2>

        <p>
          Every update reshapes the fate of this world. New mechanics, hidden
          lore fragments, and untold stories are still waiting to surface.
        </p>

        <div className="updates-footer-actions">
          <a href="/lore" className="cta-secondary">
            Explore the Lore
          </a>

          <a href="/community" className="cta-primary">
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpdatesFooterCTA;
