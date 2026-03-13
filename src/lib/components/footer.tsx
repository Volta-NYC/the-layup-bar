"use client"
 
import Link from "next/link"
 
const navLinks = [
  { label: "Events", href: "/pages/events" },
  { label: "Our Story", href: "/pages/story" },
  { label: "Menu", href: "/pages/menu" },
  { label: "Hours & Contact", href: "/pages/contact" },
]
 
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thelayupbar/",
    handle: "@thelayupbar",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:thelayupbar@gmail.com",
    handle: "thelayupbar@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]
 
const hours = [
  { days: "Mon – Sat", time: "5pm – 1am" },
  { days: "Sunday", time: "12pm – 1am" },
]
 
export default function Footer() {
  return (
    <>
      <style>{`
        /* ── Footer shell ─────────────────────────────────────────────── */
        .footer-root {
          font-family: var(--font-body);
          position: relative;
          overflow: hidden;
          background: var(--bg-pit, #06080d);
        }
 
        /* Top border — the court line */
        .footer-root::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(210, 85, 22, 0.18) 20%,
            var(--orange-full, #e8640e) 50%,
            rgba(210, 85, 22, 0.18) 80%,
            transparent 100%
          );
        }
 
        /* Atmospheric glow blobs */
        .footer-glow-left {
          position: absolute; top: -60px; left: -80px;
          width: 420px; height: 320px;
          background: radial-gradient(ellipse, rgba(185, 48, 12, 0.16) 0%, transparent 68%);
          pointer-events: none;
        }
 
        .footer-glow-right {
          position: absolute; bottom: -40px; right: -60px;
          width: 380px; height: 300px;
          background: radial-gradient(ellipse, rgba(42, 85, 160, 0.10) 0%, transparent 68%);
          pointer-events: none;
        }
 
        /* ── Main content area ────────────────────────────────────────── */
        .footer-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 4.5rem clamp(1.25rem, 4vw, 2.5rem) 0;
        }
 
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3.5rem;
        }
 
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem 3rem;
          }
          .footer-brand-col { grid-column: 1 / -1; }
        }
 
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .footer-brand-col { grid-column: auto; }
        }
 
        /* ── Brand column ─────────────────────────────────────────────── */
        .footer-brand-eyebrow {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.62rem; letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--text-orange, #e8680e); margin-bottom: 8px; font-weight: 700;
        }
 
        .footer-brand-name {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cream-warm, #eed8a8);
          line-height: 1.0;
          margin-bottom: 0.85rem;
        }
 
        .footer-brand-tagline {
          font-size: 13px; font-weight: 300;
          color: var(--text-muted, rgba(172,135,75,0.62));
          line-height: 1.75; max-width: 220px;
          letter-spacing: 0.03em;
          font-style: italic;
        }
 
        /* Address block */
        .footer-address-block {
          margin-top: 1.75rem;
          display: flex; flex-direction: column; gap: 3px;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(210, 85, 22, 0.10);
        }
 
        .footer-address-line {
          font-size: 12px;
          color: var(--text-muted, rgba(172,135,75,0.62));
          letter-spacing: 0.07em; line-height: 1.7;
        }
 
        .footer-address-phone {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 12px;
          color: var(--text-secondary, rgba(225,188,115,0.82));
          text-decoration: none; letter-spacing: 0.07em;
          margin-top: 4px;
          transition: color 180ms ease;
        }
 
        .footer-address-phone:hover { color: var(--cream-warm, #eed8a8); }
 
        .footer-hours-badge {
          display: inline-flex; align-items: center; gap: 5px;
          margin-top: 10px;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700;
          color: var(--amber-bright, #e8b020);
        }
 
        /* Pulsing live dot */
        .footer-hours-badge::before {
          content: '';
          display: inline-block; width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--orange-full, #e8640e);
          box-shadow: 0 0 6px rgba(232, 100, 14, 0.80);
          animation: footer-pulse 2.4s ease-in-out infinite;
        }
 
        @keyframes footer-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(0.75); }
        }
 
        /* ── Column label ─────────────────────────────────────────────── */
        .footer-col-label {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.60rem; letter-spacing: 0.30em; text-transform: uppercase;
          color: var(--text-orange, #e8680e); font-weight: 700;
          margin-bottom: 1.25rem;
        }
 
        /* ── Nav links ────────────────────────────────────────────────── */
        .footer-nav-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0;
        }
 
        .footer-nav-list li a {
          display: inline-block;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 1rem; font-weight: 600;
          letter-spacing: 0.10em; text-transform: uppercase;
          color: rgba(225, 188, 115, 0.68);
          text-decoration: none;
          padding: 0.38rem 0;
          position: relative;
          transition: color 160ms ease;
        }
 
        .footer-nav-list li a::after {
          content: '';
          position: absolute; bottom: 5px; left: 0;
          width: 0; height: 1.5px;
          background: var(--orange-full, #e8640e);
          box-shadow: 0 0 6px rgba(232, 100, 14, 0.65);
          border-radius: 1px;
          transition: width 220ms var(--ease-out-expo, ease);
        }
 
        .footer-nav-list li a:hover { color: var(--cream-warm, #eed8a8); }
        .footer-nav-list li a:hover::after { width: 100%; }
 
        /* ── Hours list ───────────────────────────────────────────────── */
        .footer-hours-list {
          display: flex; flex-direction: column; gap: 0.6rem;
        }
 
        .footer-hours-row {
          display: flex; flex-direction: column; gap: 2px;
        }
 
        .footer-hours-days {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.10em; text-transform: uppercase;
          color: var(--cream-mid, #dcc490);
        }
 
        .footer-hours-time {
          font-size: 12px;
          color: var(--text-muted, rgba(172,135,75,0.62));
          letter-spacing: 0.06em;
        }
 
        /* ── Social links ─────────────────────────────────────────────── */
        .footer-social-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.7rem;
        }
 
        .footer-social-list li a {
          display: flex; align-items: center; gap: 0.65rem;
          text-decoration: none; transition: all 180ms ease;
        }
 
        .footer-social-icon {
          width: 34px; height: 34px; border-radius: 6px;
          border: 1px solid rgba(210, 85, 22, 0.18);
          background: rgba(185, 48, 12, 0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(225, 188, 115, 0.60);
          flex-shrink: 0;
          transition: all 180ms ease;
        }
 
        .footer-social-list li a:hover .footer-social-icon {
          border-color: rgba(232, 100, 14, 0.45);
          background: rgba(220, 90, 18, 0.14);
          color: var(--orange-burn, #ff8c1a);
          box-shadow: 0 0 14px rgba(232, 100, 14, 0.28);
        }
 
        .footer-social-handle {
          font-size: 12px;
          color: var(--text-muted, rgba(172,135,75,0.62));
          letter-spacing: 0.05em; line-height: 1.3;
          transition: color 180ms ease;
        }
 
        .footer-social-list li a:hover .footer-social-handle {
          color: var(--cream-warm, #eed8a8);
        }
 
        /* ── Divider ──────────────────────────────────────────────────── */
        .footer-divider {
          position: relative; z-index: 1;
          height: 1px; margin: 0 clamp(1.25rem, 4vw, 2.5rem);
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(210, 85, 22, 0.15) 15%,
            rgba(210, 85, 22, 0.15) 85%,
            transparent 100%
          );
        }
 
        /* ── Bottom bar ───────────────────────────────────────────────── */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 1.2rem clamp(1.25rem, 4vw, 2.5rem) 1.6rem;
          display: flex; align-items: center;
          justify-content: space-between; gap: 1rem; flex-wrap: wrap;
        }
 
        .footer-copy {
          font-size: 11px;
          color: var(--text-ghost, rgba(120,88,45,0.40));
          letter-spacing: 0.08em;
        }
 
        .footer-credit {
          font-size: 11px;
          color: var(--text-ghost, rgba(120,88,45,0.40));
          text-decoration: none; letter-spacing: 0.08em;
          display: flex; align-items: center; gap: 0.40rem;
          transition: color 180ms ease;
        }
 
        /* Orange pip before credit link */
        .footer-credit::before {
          content: '';
          display: inline-block; width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--orange-full, #e8640e);
          opacity: 0.55;
        }
 
        .footer-credit:hover { color: var(--text-orange, #e8680e); }
        .footer-credit:hover::before { opacity: 1; }
 
        /* Barclays callout — for fun, optional */
        .footer-barclays-note {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.62rem; letter-spacing: 0.20em; text-transform: uppercase;
          color: rgba(120, 88, 45, 0.35);
        }
 
        @media (max-width: 540px) {
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
          .footer-barclays-note { display: none; }
        }
      `}</style>
 
      <footer className="footer-root">
        <div className="footer-glow-left" />
        <div className="footer-glow-right" />
 
        <div className="footer-inner">
          <div className="footer-grid">
 
            {/* ── Brand col ───────────────────────────────────────────── */}
            <div className="footer-brand-col">
              <p className="footer-brand-eyebrow">Brooklyn, New York</p>
              <h2 className="footer-brand-name">The LayUp</h2>
              <p className="footer-brand-tagline">
                Brooklyn's sports bar. One block from the Barclays Center.
                Cold beers, smash burgers, every game.
              </p>
 
              <div className="footer-address-block">
                <span className="footer-address-line">47 5th Ave</span>
                <span className="footer-address-line">Brooklyn, NY 11217</span>
                <a href="tel:coming-soon" className="footer-address-phone">
                  Phone coming soon
                </a>
                <span className="footer-hours-badge">Open nightly until 1 AM</span>
              </div>
            </div>
 
            {/* ── Explore col ─────────────────────────────────────────── */}
            <div>
              <p className="footer-col-label">Explore</p>
              <ul className="footer-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* ── Hours col ───────────────────────────────────────────── */}
            <div>
              <p className="footer-col-label">Hours</p>
              <div className="footer-hours-list">
                {hours.map((h) => (
                  <div key={h.days} className="footer-hours-row">
                    <span className="footer-hours-days">{h.days}</span>
                    <span className="footer-hours-time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* ── Connect col ─────────────────────────────────────────── */}
            <div>
              <p className="footer-col-label">Connect</p>
              <ul className="footer-social-list">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                      <span className="footer-social-icon">{s.icon}</span>
                      <span className="footer-social-handle">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
 
          </div>
        </div>
 
        <div className="footer-divider" />
 
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} The LayUp Sports Bar. All rights reserved.
          </span>
          <span className="footer-barclays-note">1 block from Barclays Center</span>
          <a href="https://nyc.voltanpo.org" target="_blank" rel="noreferrer" className="footer-credit">
            Made by @VoltaNYC
          </a>
        </div>
      </footer>
    </>
  )
}