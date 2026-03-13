"use client"
 
import Link from "next/link"
import { useState, useEffect } from "react"
 
const navLinks = [
  { label: "Events", href: "/pages/events" },
  { label: "Our Story", href: "/pages/our-story" },
  { label: "Menu", href: "/pages/menu" },
  { label: "Hours & Contact", href: "/pages/contact" },
]
 
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thelayupbar/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
 
  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])
 
  return (
    <>
      <style>{`
        /* ── Navbar Shell ─────────────────────────────────────────────── */
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          font-family: var(--font-body);
          transition:
            background 280ms var(--ease-in-out),
            border-color 280ms var(--ease-in-out),
            box-shadow 280ms var(--ease-in-out);
 
          background: rgba(8, 10, 18, 0.72);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border-bottom: 1px solid rgba(210, 85, 22, 0.10);
        }
 
        .nav-root.scrolled {
          background: rgba(6, 8, 14, 0.96);
          border-bottom-color: rgba(220, 90, 28, 0.20);
          box-shadow:
            0 1px 0 rgba(225, 100, 25, 0.06),
            0 4px 32px rgba(4, 6, 12, 0.65);
        }
 
        /* ── Inner layout ─────────────────────────────────────────────── */
        .nav-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 2.5rem);
          height: 64px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
        }
 
        /* ── Left: nav links ──────────────────────────────────────────── */
        .nav-left {
          display: flex; align-items: center; gap: 0;
        }
 
        .nav-link {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: rgba(225, 188, 115, 0.70);
          text-decoration: none;
          padding: 0 1rem;
          height: 64px;
          display: flex; align-items: center;
          position: relative;
          transition: color 160ms var(--ease-in-out, ease);
          white-space: nowrap;
        }
 
        /* The court-line underline */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 1rem;
          width: 0;
          height: 2px;
          background: var(--orange-full, #e8640e);
          box-shadow: 0 0 8px rgba(232, 100, 14, 0.75);
          border-radius: 1px 1px 0 0;
          transition: width 220ms var(--ease-out-expo, ease);
        }
 
        .nav-link:hover {
          color: var(--cream-warm, #eed8a8);
        }
 
        .nav-link:hover::after {
          width: calc(100% - 2rem);
        }
 
        /* ── Center: logo ─────────────────────────────────────────────── */
        .nav-logo {
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          text-decoration: none;
          flex-direction: column;
          gap: 0;
          line-height: 1;
        }
 
        .nav-logo-main {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(1.15rem, 2.2vw, 1.55rem);
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cream-warm, #eed8a8);
          transition: color 200ms ease, text-shadow 200ms ease;
          white-space: nowrap;
        }
 
        .nav-logo-sub {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--text-orange, #e8680e);
          margin-top: 1px;
          white-space: nowrap;
        }
 
        .nav-logo:hover .nav-logo-main {
          color: var(--orange-burn, #ff8c1a);
          text-shadow:
            0 0 20px rgba(235, 120, 30, 0.50),
            0 0 50px rgba(200, 85, 15, 0.22);
        }
 
        /* ── Right: social + burger ───────────────────────────────────── */
        .nav-right {
          display: flex; align-items: center;
          justify-content: flex-end; gap: 0.5rem;
        }
 
        .nav-social-link {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 6px;
          border: 1px solid rgba(210, 85, 22, 0.18);
          color: rgba(225, 188, 115, 0.65);
          text-decoration: none;
          transition: all 180ms ease;
        }
 
        .nav-social-link:hover {
          border-color: rgba(232, 100, 14, 0.45);
          color: var(--orange-burn, #ff8c1a);
          background: rgba(230, 100, 20, 0.08);
          box-shadow: 0 0 14px rgba(232, 100, 14, 0.28);
        }
 
        /* Reserve Now CTA pill */
        .nav-cta {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cream-warm, #eed8a8);
          background: linear-gradient(135deg, #a83c08 0%, #d45510 100%);
          padding: 0.45rem 1rem;
          border-radius: 3px;
          white-space: nowrap;
          transition: all 200ms ease;
          box-shadow: 0 2px 16px rgba(185, 72, 12, 0.40);
          position: relative;
          overflow: hidden;
        }
 
        .nav-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 35%, rgba(255,200,100,0.10) 50%, transparent 65%);
          transform: translateX(-100%);
          transition: transform 420ms ease;
        }
 
        .nav-cta:hover { 
          background: linear-gradient(135deg, #c04812 0%, #e86018 100%);
          box-shadow: 0 4px 28px rgba(220, 90, 18, 0.60);
          transform: translateY(-1px);
        }
 
        .nav-cta:hover::before { transform: translateX(100%); }
 
        /* ── Burger button ────────────────────────────────────────────── */
        .nav-burger {
          display: none;
          width: 40px; height: 40px;
          background: none; border: none; cursor: pointer;
          align-items: center; justify-content: center;
          flex-direction: column; gap: 5px; padding: 4px;
          border-radius: 4px;
          transition: background 160ms ease;
        }
 
        .nav-burger:hover { background: rgba(230, 100, 20, 0.08); }
 
        .burger-line {
          display: block;
          width: 22px; height: 1.5px;
          background: rgba(225, 188, 115, 0.80);
          border-radius: 2px;
          transform-origin: center;
          transition: all 280ms var(--ease-out-expo, ease);
        }
 
        .nav-burger.open .burger-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .nav-burger.open .burger-line:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .nav-burger.open .burger-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
 
        /* ── Mobile menu overlay ──────────────────────────────────────── */
        .nav-mobile-overlay {
          position: fixed; inset: 0; z-index: 99;
          background: rgba(4, 6, 12, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0;
          opacity: 0; pointer-events: none;
          transition: opacity 280ms ease;
        }
 
        .nav-mobile-overlay.open {
          opacity: 1; pointer-events: all;
        }
 
        /* Atmosphere blobs inside mobile menu */
        .nav-mobile-overlay::before {
          content: '';
          position: absolute; top: -80px; left: -80px;
          width: 350px; height: 350px;
          background: radial-gradient(ellipse, rgba(185, 48, 12, 0.18) 0%, transparent 65%);
          pointer-events: none;
        }
 
        .nav-mobile-overlay::after {
          content: '';
          position: absolute; bottom: -60px; right: -60px;
          width: 300px; height: 300px;
          background: radial-gradient(ellipse, rgba(42, 85, 160, 0.12) 0%, transparent 65%);
          pointer-events: none;
        }
 
        .nav-mobile-link {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.8rem, 9vw, 5rem);
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(240, 224, 184, 0.72);
          text-decoration: none;
          line-height: 1.15;
          position: relative;
          transition: color 160ms ease;
          z-index: 1;
        }
 
        .nav-mobile-link::after {
          content: '';
          position: absolute; left: 0; bottom: 2px;
          width: 0; height: 3px;
          background: var(--orange-full, #e8640e);
          box-shadow: 0 0 12px rgba(232, 100, 14, 0.80);
          border-radius: 2px;
          transition: width 240ms var(--ease-out-expo, ease);
        }
 
        .nav-mobile-link:hover {
          color: var(--cream-pure, #f8eecc);
        }
 
        .nav-mobile-link:hover::after { width: 100%; }
 
        .nav-mobile-divider {
          width: 1px; height: 1px;
          background: rgba(210, 85, 22, 0.20);
          margin: 0.3rem 0;
        }
 
        .nav-mobile-footer {
          position: absolute; bottom: 2rem; left: 0; right: 0;
          display: flex; align-items: center; justify-content: center;
          gap: 1.5rem; z-index: 1;
        }
 
        .nav-mobile-social {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.68rem; letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(172, 135, 75, 0.60);
          text-decoration: none;
          transition: color 160ms ease;
        }
 
        .nav-mobile-social:hover { color: var(--orange-burn, #ff8c1a); }
 
        .nav-mobile-address {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.65rem; letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(172, 135, 75, 0.45);
          text-align: center;
        }
 
        /* ── Responsive ───────────────────────────────────────────────── */
        @media (max-width: 900px) {
          .nav-left { display: none; }
          .nav-right .nav-cta { display: none; }
          .nav-right .nav-social-link { display: none; }
          .nav-burger { display: flex; }
 
          .nav-inner {
            grid-template-columns: 1fr auto 1fr;
          }
        }
 
        @media (max-width: 480px) {
          .nav-inner { height: 56px; }
          .nav-mobile-link { font-size: clamp(2.4rem, 12vw, 4rem); }
        }
      `}</style>
 
      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
 
          {/* Left — desktop nav links */}
          <div className="nav-left">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>
 
          {/* Center — logo */}
          <Link href="/" className="nav-logo" aria-label="The LayUp Sports Bar — Home">
            <span className="nav-logo-main">The LayUp Sports Bar</span>
            <span className="nav-logo-sub">Brooklyn, NY · Est. 2025</span>
          </Link>
 
          {/* Right — second half of nav + social + CTA + burger */}
          <div className="nav-right">
            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" style={{ display: "none" }}>
                {link.label}
              </Link>
            ))}
 
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="nav-social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
 
            <a href="/pages/contact" className="nav-cta">
              Reserve
            </a>
 
            {/* Burger — mobile only */}
            <button
              className={`nav-burger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
 
        </div>
      </nav>
 
      {/* ── Mobile menu overlay ──────────────────────────────────────── */}
      <div
        className={`nav-mobile-overlay${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
 
        <div className="nav-mobile-footer">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="nav-mobile-social"
            >
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
          <span className="nav-mobile-address">47 5th Ave · Brooklyn</span>
        </div>
      </div>
    </>
  )
}