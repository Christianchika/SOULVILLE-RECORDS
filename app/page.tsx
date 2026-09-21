const artists = [
  { name: "Artist One", genre: "Soul / R&B" },
  { name: "Artist Two", genre: "Alternative" },
  { name: "Artist Three", genre: "Afro-Soul" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/">SOULVILLE <span>RECORDS</span></a>
        <nav>
          <a href="#artists">Artists</a>
          <a href="#music">Music</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">INDEPENDENT MUSIC • EST. 2026</p>
        <h1>Sound<br /><em>with soul.</em></h1>
        <p className="hero-copy">A home for distinctive artists, honest stories, and records made to last.</p>
        <div className="actions">
          <a className="button" href="#music">Explore the music</a>
          <a className="text-link" href="#artists">Meet the artists →</a>
        </div>
      </section>

      <section id="music" className="feature">
        <div className="section-label">01 / FEATURED RELEASE</div>
        <div>
          <p className="release-type">LATEST RELEASE</p>
          <h2>After Dark</h2>
          <p>A placeholder release section ready for the label&apos;s real catalogue, artwork, credits and streaming links.</p>
          <a className="text-link" href="/music">View releases →</a>
        </div>
      </section>

      <section id="artists" className="section">
        <div className="section-heading">
          <div className="section-label">02 / ROSTER</div>
          <h2>Artists with<br /><em>something to say.</em></h2>
        </div>
        <div className="artist-grid">
          {artists.map((artist) => (
            <article className="artist-card" key={artist.name}>
              <div className="artist-image" aria-hidden="true">{artist.name.charAt(0)}</div>
              <p>{artist.genre}</p>
              <h3>{artist.name}</h3>
              <a href="/artists">View artist →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="story">
        <div className="section-label">03 / THE STORY</div>
        <div>
          <h2>Built around the music, not the noise.</h2>
          <p>Soulville Records is an independent label concept built to give artists room to develop their sound, tell their stories and reach audiences without losing what makes them different.</p>
          <a className="text-link" href="/about">Our story →</a>
        </div>
      </section>

      <section id="contact" className="cta">
        <p className="eyebrow">DEMO • PRESS • LICENSING • GENERAL</p>
        <h2>Let&apos;s make<br /><em>something memorable.</em></h2>
        <a className="button" href="/contact">Get in touch</a>
      </section>

      <footer>
        <div className="brand">SOULVILLE <span>RECORDS</span></div>
        <div className="footer-links">
          <a href="/submissions">Submissions</a>
          <a href="/press">Press Kit</a>
          <a href="/licensing">Licensing</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <p>© 2026 Soulville Records. All rights reserved.</p>
      </footer>
    </main>
  );
}