"use client"
 
export default function ContactPage() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════
           ROOT
        ═══════════════════════════════════════════════════ */
        .ct-root {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          color: var(--cream-warm, #eed8a8);
          background: var(--bg-base, #0c0f16);
          overflow-x: hidden;
          min-height: 100svh;
        }
 
        /* ═══════════════════════════════════════════════════
           HERO
        ═══════════════════════════════════════════════════ */
        .ct-hero {
          position: relative;
          padding: clamp(8rem, 16vw, 13rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 6rem);
          overflow: hidden;
        }
 
        .ct-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 100%,
              rgba(185,55,10,0.22) 0%, transparent 65%
            );
          pointer-events: none;
        }
 
        /* diagonal texture */
        .ct-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: repeating-linear-gradient(
            -45deg,
            #fff, #fff 1px,
            transparent 1px, transparent 12px
          );
          pointer-events: none;
        }
 
        .ct-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
        }
 
        .ct-eyebrow {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
 
        .ct-eyebrow::before {
          content: '';
          display: block;
          width: 2.5rem;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
        }
 
        .ct-hero-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(5rem, 16vw, 12rem);
          line-height: 0.88;
          letter-spacing: 0.01em;
          color: #fff;
          margin: 0;
        }
 
        /* ═══════════════════════════════════════════════════
           TICKER
        ═══════════════════════════════════════════════════ */
        .ct-ticker-wrap {
          background: var(--orange-full, #e8640e);
          overflow: hidden;
          white-space: nowrap;
          padding: 0.55rem 0;
        }
 
        .ct-ticker-track {
          display: inline-block;
          animation: ct-ticker 28s linear infinite;
        }
 
        .ct-ticker-track span {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(0.9rem, 1.4vw, 1rem);
          letter-spacing: 0.15em;
          color: #0c0f16;
          padding: 0 2.5rem;
        }
 
        .ct-ticker-track span.dot {
          padding: 0;
          color: rgba(12,15,22,0.35);
        }
 
        @keyframes ct-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
 
        /* ═══════════════════════════════════════════════════
           MAIN GRID
        ═══════════════════════════════════════════════════ */
        .ct-grid {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 8rem);
          align-items: start;
        }
 
        @media (max-width: 820px) {
          .ct-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
 
        /* ═══════════════════════════════════════════════════
           INFO BLOCKS
        ═══════════════════════════════════════════════════ */
        .ct-info {
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 4vw, 3rem);
        }
 
        .ct-block {
          border-left: 2px solid rgba(232,100,14,0.25);
          padding-left: clamp(1.25rem, 2.5vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
 
        .ct-block-label {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
        }
 
        .ct-block-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0 0 0.25rem;
        }
 
        .ct-block-body {
          font-size: clamp(0.9rem, 1.3vw, 1rem);
          line-height: 1.75;
          color: rgba(238,216,168,0.6);
        }
 
        .ct-block-body a {
          color: rgba(238,216,168,0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(232,100,14,0.3);
          transition: color 0.18s, border-color 0.18s;
        }
 
        .ct-block-body a:hover {
          color: var(--orange-full, #e8640e);
          border-bottom-color: var(--orange-full, #e8640e);
        }
 
        /* Hours table */
        .ct-hours {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.3rem 1.5rem;
          font-size: clamp(0.88rem, 1.2vw, 0.95rem);
          color: rgba(238,216,168,0.6);
          line-height: 1.6;
        }
 
        .ct-hours-day {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.45);
          font-size: 0.8rem;
        }
 
        .ct-hours-time {
          color: rgba(238,216,168,0.75);
        }
 
        .ct-hours-time.highlight {
          color: var(--orange-full, #e8640e);
        }
 
        /* ═══════════════════════════════════════════════════
           MAP PLACEHOLDER
        ═══════════════════════════════════════════════════ */
        .ct-map-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
 
        .ct-map-frame {
          position: relative;
          border-radius: 3px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(232,100,14,0.12);
        }
 
        .ct-map-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85);
        }
 
        /* decorative corner */
        .ct-map-frame::before {
          content: '';
          position: absolute;
          top: -1px; right: -1px;
          width: 40%;
          height: 40%;
          border-top: 2px solid var(--orange-full, #e8640e);
          border-right: 2px solid var(--orange-full, #e8640e);
          z-index: 2;
          pointer-events: none;
        }
 
        .ct-map-address {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.85rem, 1.3vw, 0.95rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.45);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
 
        .ct-map-address::before {
          content: '';
          display: block;
          width: 1.25rem;
          height: 1px;
          background: rgba(232,100,14,0.4);
          flex-shrink: 0;
        }
 
        .ct-map-btn {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0c0f16;
          background: var(--orange-full, #e8640e);
          border: 1.5px solid var(--orange-full, #e8640e);
          padding: 0.8rem 2rem;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          display: inline-block;
          align-self: flex-start;
        }
 
        .ct-map-btn:hover {
          background: transparent;
          color: var(--orange-full, #e8640e);
        }
 
        /* ═══════════════════════════════════════════════════
           FOOTER STRIP
        ═══════════════════════════════════════════════════ */
        .ct-footer-strip {
          border-top: 1px solid rgba(232,100,14,0.12);
          padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem);
        }
 
        .ct-footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
 
        .ct-footer-logo {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(1rem, 2vw, 1.3rem);
          letter-spacing: 0.12em;
          color: rgba(238,216,168,0.35);
          text-decoration: none;
        }
 
        .ct-footer-social {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.4);
          text-decoration: none;
          transition: color 0.18s;
        }
 
        .ct-footer-social:hover {
          color: var(--orange-full, #e8640e);
        }
 
        .ct-footer-copy {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.2);
        }
      `}</style>
 
      <div className="ct-root">
 
        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="ct-hero">
          <div className="ct-hero-inner">
            <p className="ct-eyebrow">The LayUp · Brooklyn, NY</p>
            <h1 className="ct-hero-title">Hours &amp;<br />Location</h1>
          </div>
        </section>
 
        {/* ─── TICKER ───────────────────────────────────────── */}
        <div className="ct-ticker-wrap" aria-hidden="true">
          <div className="ct-ticker-track">
            {[1, 2].map(i => (
              <span key={i}>
                <span>47 5TH AVE BROOKLYN</span>
                <span className="dot">·</span>
                <span>ONE BLOCK FROM BARCLAYS</span>
                <span className="dot">·</span>
                <span>OPEN NIGHTLY</span>
                <span className="dot">·</span>
                <span>SUNDAYS FROM NOON</span>
                <span className="dot">·</span>
                <span>WALK-INS WELCOME</span>
                <span className="dot">·</span>
              </span>
            ))}
          </div>
        </div>
 
        {/* ─── MAIN GRID ────────────────────────────────────── */}
        <div className="ct-grid">
 
          {/* Left — info */}
          <div className="ct-info">
 
            <div className="ct-block">
              <span className="ct-block-label">Hours</span>
              <h2 className="ct-block-title">We're Open</h2>
              <div className="ct-hours">
                <span className="ct-hours-day">Mon – Sat</span>
                <span className="ct-hours-time">5:00 PM – Close</span>
                <span className="ct-hours-day">Sunday</span>
                <span className="ct-hours-time highlight">12:00 PM – Close</span>
              </div>
            </div>
 
            <div className="ct-block">
              <span className="ct-block-label">Address</span>
              <h2 className="ct-block-title">Find Us</h2>
              <p className="ct-block-body">
                47 5th Ave<br />
                Brooklyn, NY 11217<br />
                <br />
                One block from Barclays Center.<br />
                Subway: B/Q/2/3/4/5 to Atlantic Ave–Barclays Ctr.
              </p>
            </div>
 
            <div className="ct-block">
              <span className="ct-block-label">Contact</span>
              <h2 className="ct-block-title">Get In Touch</h2>
              <p className="ct-block-body">
                For reservations and private events,<br />
                reach us on Instagram or stop in.<br />
                <br />
                <a href="https://www.instagram.com/thelayupbar/" target="_blank" rel="noopener noreferrer">
                  @thelayupbar
                </a>
              </p>
            </div>
 
          </div>
 
          {/* Right — map */}
          <div className="ct-map-col">
            <div className="ct-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4!2d-73.9784!3d40.6782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4590b4d0e3%3A0x0!2s47+5th+Ave%2C+Brooklyn%2C+NY+11217!5e0!3m2!1sen!2sus!4v1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The LayUp Sports Bar location"
              />
            </div>
            <p className="ct-map-address">47 5th Ave, Brooklyn NY 11217</p>
            <a
              href="https://www.google.com/maps/search/47+5th+Ave+Brooklyn+NY+11217"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-map-btn"
            >
              Get Directions
            </a>
          </div>
 
        </div>
 
        {/* ─── FOOTER STRIP ─────────────────────────────────── */}
        <div className="ct-footer-strip">
          <div className="ct-footer-inner">
            <a href="/" className="ct-footer-logo">The LayUp Sports Bar</a>
            <a
              href="https://www.instagram.com/thelayupbar/"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-footer-social"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @thelayupbar
            </a>
            <span className="ct-footer-copy">© 2025 The LayUp Sports Bar</span>
          </div>
        </div>
 
      </div>
    </>
  )
}