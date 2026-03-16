"use client"
 
import Link from "next/link"
 
const menuHighlights = [
  { category: "Mains",     name: "The MVP",        price: "$18.99", desc: "Triple patties, triple cheese, lettuce, pickles, MVP sauce." },
  { category: "Mains",     name: "Brooklyn Slam",  price: "$15.99", desc: "Double patties, bacon, cheddar, caramelized onions, BBQ sauce." },
  { category: "Cocktails", name: "Green & Amber",  price: "$12",    desc: "Vodka, single-malt scotch, honey, lemon, green tea." },
  { category: "Cocktails", name: "Manhattan",      price: "$11",    desc: "Rye whisky, sweet vermouth, bitters." },
  { category: "Beer",      name: "Brooklyn Lager", price: "$8",     desc: "Local. Ice cold. Always on tap." },
  { category: "Sides",     name: "LayUp Wings",    price: "$11.99", desc: "Six wings. Your choice of sauce." },
]
 
export default function HomePage() {
  return (
    <>
      <style>{`
        .hp-root {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          color: var(--cream-warm, #eed8a8);
          background: var(--bg-base, #0c0f16);
          overflow-x: hidden;
        }
 
        /* ════════════════════════════════════════════════════════════════
           HERO
        ════════════════════════════════════════════════════════════════ */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 clamp(1.25rem, 5vw, 3rem);
        }
 
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 90% 50% at 50% 100%, rgba(185, 55, 10, 0.32) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 60%,  rgba(42, 85, 160, 0.09) 0%, transparent 65%),
            radial-gradient(ellipse 50% 35% at 80% 55%,  rgba(200, 130, 20, 0.08) 0%, transparent 60%),
            linear-gradient(180deg, #060810 0%, #0a0d16 55%, #0e0c10 100%);
          z-index: 0;
        }
 
        .hero::after {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }
 
        .hero-content {
          position: relative; z-index: 2;
          text-align: center;
          max-width: 900px;
          padding-top: 64px;
        }
 
        .hero-eyebrow {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.65rem, 1.5vw, 0.75rem);
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--text-orange, #e8680e);
          margin-bottom: 1.2rem;
          display: flex; align-items: center; justify-content: center; gap: 0.75rem;
        }
 
        .hero-eyebrow::before,
        .hero-eyebrow::after {
          content: '';
          display: block; width: clamp(28px, 5vw, 52px); height: 1px;
          background: linear-gradient(90deg, transparent, var(--orange-full, #e8640e));
        }
        .hero-eyebrow::after {
          background: linear-gradient(90deg, var(--orange-full, #e8640e), transparent);
        }
 
        .hero-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(3.8rem, 12vw, 10rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 0.90;
          color: var(--cream-warm, #eed8a8);
          margin: 0 0 0.08em;
        }
 
        .hero-title-accent {
          display: block;
          color: var(--orange-full, #e8640e);
          text-shadow: 0 0 60px rgba(232, 100, 14, 0.30);
        }
 
        .hero-title-sub {
          font-size: clamp(3rem, 9vw, 7.5rem);
          color: var(--cream-warm, #eed8a8);
          opacity: 0.85;
        }
 
        .hero-location {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(200, 155, 75, 0.55);
          margin: 1.6rem 0 2.8rem;
        }
 
        .hero-ctas {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; flex-wrap: wrap;
        }
 
        .hero-cta-primary {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.20em; text-transform: uppercase;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #a83c08 0%, #d45510 100%);
          padding: 0.85rem 2.2rem;
          border-radius: 3px;
          transition: background 200ms ease, box-shadow 200ms ease, transform 200ms ease;
          box-shadow: 0 4px 24px rgba(185, 72, 12, 0.35);
        }
 
        .hero-cta-primary:hover {
          background: linear-gradient(135deg, #c04812 0%, #e86018 100%);
          box-shadow: 0 6px 36px rgba(220, 90, 18, 0.50);
          transform: translateY(-1px);
        }
 
        .hero-cta-secondary {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.20em; text-transform: uppercase;
          text-decoration: none;
          color: rgba(225, 188, 115, 0.80);
          border: 1px solid rgba(210, 85, 22, 0.28);
          background: transparent;
          padding: 0.85rem 2.2rem;
          border-radius: 3px;
          transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
        }
 
        .hero-cta-secondary:hover {
          color: var(--cream-warm, #eed8a8);
          border-color: rgba(232, 100, 14, 0.50);
          background: rgba(220, 90, 18, 0.06);
        }
 
        .hero-scroll {
          position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          z-index: 2;
        }
 
        .hero-scroll-label {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.55rem; letter-spacing: 0.30em; text-transform: uppercase;
          color: rgba(172, 135, 75, 0.35);
        }
 
        .hero-scroll-line {
          width: 1px; height: 36px;
          background: linear-gradient(180deg, rgba(232, 100, 14, 0.45), transparent);
        }
 
        .hero-bottom-strip {
          position: absolute; bottom: 0; left: -5%; right: -5%;
          height: 2px; z-index: 3;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(210, 85, 22, 0.12) 10%,
            var(--orange-full, #e8640e) 30%,
            rgba(232, 160, 40, 0.75) 50%,
            var(--orange-full, #e8640e) 70%,
            rgba(210, 85, 22, 0.12) 90%,
            transparent 100%
          );
          box-shadow: 0 0 18px rgba(232, 100, 14, 0.30);
        }
 
 
        /* ════════════════════════════════════════════════════════════════
           ABOUT
        ════════════════════════════════════════════════════════════════ */
        .about {
          position: relative;
          padding: clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 3rem);
          overflow: hidden;
        }
 
        .about::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 95% 50%, rgba(185, 48, 12, 0.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 5%  50%, rgba(42, 85, 160, 0.05) 0%, transparent 60%);
          pointer-events: none;
        }
 
        .about-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }
 
        @media (max-width: 768px) {
          .about-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
 
        .section-eyebrow {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.64rem; font-weight: 700;
          letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--text-orange, #e8680e);
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
 
        .section-eyebrow::before {
          content: '';
          display: block; width: 24px; height: 1.5px;
          background: var(--orange-full, #e8640e);
        }
 
        .about-headline {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.8rem, 6vw, 5rem);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 0.92;
          color: var(--cream-warm, #eed8a8);
          margin-bottom: 1.8rem;
        }
 
        .about-headline em {
          font-style: normal;
          color: var(--orange-full, #e8640e);
        }
 
        .about-body {
          font-size: clamp(0.94rem, 1.8vw, 1.05rem);
          line-height: 1.80;
          color: rgba(200, 160, 90, 0.70);
          max-width: 420px;
          margin-bottom: 2.2rem;
        }
 
        .about-detail-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.6rem;
        }
 
        .about-detail-list li {
          display: flex; align-items: center; gap: 0.65rem;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.88rem; font-weight: 600;
          letter-spacing: 0.10em; text-transform: uppercase;
          color: rgba(225, 188, 115, 0.70);
        }
 
        .about-detail-list li::before {
          content: '';
          display: inline-block; width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--orange-full, #e8640e);
          flex-shrink: 0;
        }
 
        .about-card {
          position: relative;
          border: 1px solid rgba(210, 85, 22, 0.16);
          border-radius: 4px;
          background: rgba(14, 18, 28, 0.65);
          padding: 2.5rem;
          overflow: hidden;
        }
 
        .about-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--orange-full, #e8640e), transparent);
        }
 
        .about-card-watermark {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(4rem, 10vw, 7rem);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 0.88;
          color: rgba(232, 100, 14, 0.07);
          position: absolute;
          top: 1rem; right: -0.5rem;
          pointer-events: none;
          user-select: none;
        }
 
        .about-hours-title {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.64rem; font-weight: 700;
          letter-spacing: 0.30em; text-transform: uppercase;
          color: var(--text-orange, #e8680e);
          margin-bottom: 1.2rem;
        }
 
        .about-hours-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 0.65rem 0;
          border-bottom: 1px solid rgba(210, 85, 22, 0.07);
        }
 
        .about-hours-row:last-of-type { border-bottom: none; }
 
        .about-hours-day {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.95rem; font-weight: 700;
          letter-spacing: 0.10em; text-transform: uppercase;
          color: rgba(225, 188, 115, 0.75);
        }
 
        .about-hours-time {
          font-size: 0.85rem;
          color: rgba(172, 135, 75, 0.55);
          letter-spacing: 0.05em;
        }
 
        .about-location-note {
          margin-top: 1.8rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(210, 85, 22, 0.08);
          font-size: 0.82rem;
          color: rgba(172, 135, 75, 0.50);
          line-height: 1.65;
          letter-spacing: 0.03em;
        }
 
        .about-location-note strong {
          display: block;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.95rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(225, 188, 115, 0.75);
          margin-bottom: 3px;
        }
 
 
        /* ════════════════════════════════════════════════════════════════
           MENU PREVIEW
        ════════════════════════════════════════════════════════════════ */
        .menu-preview {
          position: relative;
          padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 5vw, 3rem);
          background: rgba(6, 8, 13, 0.90);
          overflow: hidden;
        }
 
        .menu-preview::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(232, 100, 14, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 100, 14, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
 
        .menu-preview::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6, 8, 13, 0) 0%, rgba(6, 8, 13, 0.80) 70%);
          pointer-events: none;
        }
 
        .menu-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }
 
        .menu-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 2rem; flex-wrap: wrap;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }
 
        .menu-headline {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.8rem, 6vw, 5rem);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 0.92;
          color: var(--cream-warm, #eed8a8);
          margin-top: 0.8rem;
        }
 
        .menu-cta-link {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          text-decoration: none;
          color: var(--text-orange, #e8680e);
          white-space: nowrap;
          display: flex; align-items: center; gap: 0.5rem;
          padding-bottom: 0.6rem;
          transition: color 180ms ease;
        }
 
        .menu-cta-link::after {
          content: '→';
          transition: transform 180ms ease;
        }
 
        .menu-cta-link:hover { color: var(--orange-burn, #ff8c1a); }
        .menu-cta-link:hover::after { transform: translateX(4px); }
 
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          border: 1px solid rgba(210, 85, 22, 0.10);
          border-radius: 4px;
          overflow: hidden;
        }
 
        @media (max-width: 900px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
 
        @media (max-width: 540px) {
          .menu-grid { grid-template-columns: 1fr; }
        }
 
        .menu-card {
          background: rgba(10, 13, 22, 0.80);
          padding: 1.8rem;
          position: relative;
          transition: background 200ms ease;
          border-right: 1px solid rgba(210, 85, 22, 0.07);
          border-bottom: 1px solid rgba(210, 85, 22, 0.07);
          overflow: hidden;
        }
 
        .menu-card:hover {
          background: rgba(16, 20, 32, 0.95);
        }
 
        .menu-card-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232, 100, 14, 0.40), transparent);
          opacity: 0;
          transition: opacity 200ms ease;
        }
 
        .menu-card:hover .menu-card-top-line { opacity: 1; }
 
        .menu-card-category {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.30em; text-transform: uppercase;
          color: var(--text-orange, #e8680e);
          margin-bottom: 0.5rem;
        }
 
        .menu-card-name {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--cream-warm, #eed8a8);
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }
 
        .menu-card-desc {
          font-size: 0.82rem;
          color: rgba(172, 135, 75, 0.52);
          line-height: 1.55;
          letter-spacing: 0.03em;
          margin-bottom: 1.2rem;
        }
 
        .menu-card-price {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 1.05rem; font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(225, 188, 115, 0.65);
        }
 
 
        /* ════════════════════════════════════════════════════════════════
           LOCATION / CTA
        ════════════════════════════════════════════════════════════════ */
        .location {
          position: relative;
          padding: clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 3rem);
          overflow: hidden;
          text-align: center;
        }
 
        .location::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 70% at 50% 100%, rgba(185, 48, 12, 0.22) 0%, transparent 62%),
            radial-gradient(ellipse 60% 40% at 50% 50%,  rgba(42, 85, 160, 0.05) 0%, transparent 60%);
        }
 
        .location-inner {
          position: relative; z-index: 1;
          max-width: 700px; margin: 0 auto;
        }
 
        .location-big {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(3.5rem, 10vw, 8rem);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 0.88;
          color: var(--cream-warm, #eed8a8);
          margin-bottom: 1.5rem;
        }
 
        .location-big span {
          display: block;
          color: var(--orange-full, #e8640e);
          text-shadow: 0 0 60px rgba(232, 100, 14, 0.28);
        }
 
        .location-address {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.85rem, 2vw, 1rem);
          font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(200, 155, 75, 0.50);
          margin-bottom: 2.8rem;
          line-height: 1.9;
        }
 
        .location-ctas {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; flex-wrap: wrap;
        }
      `}</style>
 
      <div className="hp-root">
 
        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Brooklyn's Sports Bar</p>
 
            <h1 className="hero-title">
              Best<br />
              <span className="hero-title-accent">Sports Bar</span>
              <br />
              <span className="hero-title-sub">In Brooklyn</span>
            </h1>
 
            <p className="hero-location">
              47 5th Ave · One block from Barclays Center
            </p>
 
            <div className="hero-ctas">
              <Link href="/pages/menu" className="hero-cta-primary">
                See the Menu
              </Link>
              <Link href="/pages/contact" className="hero-cta-secondary">
                Hours &amp; Location
              </Link>
            </div>
          </div>
 
          <div className="hero-scroll">
            <span className="hero-scroll-label">Scroll</span>
            <div className="hero-scroll-line" />
          </div>
 
          <div className="hero-bottom-strip" />
        </section>
 
 
        {/* ══════════════════════════════════════════════════════════════
            ABOUT
        ══════════════════════════════════════════════════════════════ */}
        <section className="about">
          <div className="about-inner">
            <div className="about-text">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="about-headline">
                Locally sourced.<br />
                <em>Crafted</em> with love.
              </h2>
              <p className="about-body">
                Welcome to The LayUp — Brooklyn's first true sports bar, on the corner of 47 5th Ave,
                just one block from the Barclays Center. We bring the energy of Brooklyn game nights
                together with great food, ice-cold drinks, and the perfect atmosphere to cheer on your
                favorite team.
              </p>
              <ul className="about-detail-list">
                <li>15 beers on tap, rotating local brews</li>
                <li>Signature smash-style burgers</li>
                <li>Every game on. Always.</li>
                <li>Open late, Mon – Sun</li>
              </ul>
            </div>
 
            <div>
              <div className="about-card">
                <div className="about-card-watermark">OPEN</div>
 
                <p className="about-hours-title">Hours</p>
 
                <div className="about-hours-row">
                  <span className="about-hours-day">Mon – Sat</span>
                  <span className="about-hours-time">5pm – 1am</span>
                </div>
                <div className="about-hours-row">
                  <span className="about-hours-day">Sunday</span>
                  <span className="about-hours-time">12pm – 1am</span>
                </div>
 
                <div className="about-location-note">
                  <strong>47 5th Ave, Brooklyn NY 11217</strong>
                  One block from the Barclays Center.
                  Corner spot — you can't miss us.
                </div>
              </div>
            </div>
          </div>
        </section>
 
 
        {/* ══════════════════════════════════════════════════════════════
            MENU PREVIEW
        ══════════════════════════════════════════════════════════════ */}
        <section className="menu-preview">
          <div className="menu-inner">
            <div className="menu-header">
              <div>
                <p className="section-eyebrow">What We're Serving</p>
                <h2 className="menu-headline">The Menu</h2>
              </div>
              <Link href="/pages/menu" className="menu-cta-link">
                Full Menu
              </Link>
            </div>
 
            <div className="menu-grid">
              {menuHighlights.map((item) => (
                <div key={item.name} className="menu-card">
                  <div className="menu-card-top-line" />
                  <p className="menu-card-category">{item.category}</p>
                  <h3 className="menu-card-name">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <span className="menu-card-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
 
 
        {/* ══════════════════════════════════════════════════════════════
            LOCATION CTA
        ══════════════════════════════════════════════════════════════ */}
        <section className="location">
          <div className="location-inner">
            <p className="section-eyebrow" style={{ justifyContent: "center" }}>Come Through</p>
            <h2 className="location-big">
              Find Us In
              <span>Brooklyn</span>
            </h2>
            <p className="location-address">
              47 5th Ave, Brooklyn NY 11217<br />
              One block from Barclays Center
            </p>
            <div className="location-ctas">
              <a
                href="https://maps.google.com/?q=47+5th+Ave+Brooklyn+NY"
                target="_blank"
                rel="noreferrer"
                className="hero-cta-primary"
              >
                Get Directions
              </a>
              <Link href="/pages/contact" className="hero-cta-secondary">
                Hours &amp; Info
              </Link>
            </div>
          </div>
        </section>
 
      </div>
    </>
  )
}