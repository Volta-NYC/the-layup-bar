"use client"
 
import Link from "next/link"
 
// ─── DATA ──────────────────────────────────────────────────────────────────
 
const smallPlates = [
  {
    name: "Truffle Fries",
    description: "Parmesan dusted, truffle oil drizzle, garlic aioli.",
    price: 11,
  },
  {
    name: "Wing Sampler",
    description: "Hennessy BBQ, Lemon Pepper, Honey Bourbon, Buffalo Heat.",
    price: 12,
  },
  {
    name: "The Layup Sliders",
    description: "Smash Burger Style",
    price: 8,
  },
  {
    name: "Layup House Salad",
    description: "Arugula, beets, goat cheese, candied pecans, balsamic reduction.",
    price: 13,
  },
  {
    name: "The All-Star Board",
    description: "Shareable platter — choose 3 items from the menu.",
    price: 32,
  },
]
 
const burgers = [
  {
    name: "THE CLASSIC LAYUP",
    description: "Double smash patties, American cheese, lettuce, tomato, pickles, special sauce.",
    price: 15,
  },
  {
    name: "BROOKLYN SLAM",
    description: "Double patties, bacon, cheddar, caramelized onions, BBQ sauce.",
    price: 15,
  },
  {
    name: "THE MVP",
    description: "Triple patties, triple cheese, lettuce, pickles, MVP sauce.",
    price: 18,
    featured: true,
  },
  {
    name: "SPICY DUNK",
    description: "Double patties, pepper jack, jalapeños, chipotle mayo, crispy onions.",
    price: 15,
  },
  {
    name: "MUSHROOM REBOUND",
    description: "Double patties, Swiss cheese, sautéed mushrooms, truffle aioli.",
    price: 17,
  },
  {
    name: "VEGGIE ASSIST",
    description: "Plant-based patty, vegan cheese, avocado, lettuce, tomato.",
    price: 15,
  },
]
 
const sides = [
  { name: "Classic Dunk Fries", description: "", price: 8 },
  { name: "Waffle Fries", description: "", price: 10 },
  { name: "The LayUp Wings", description: "4 piece", price: 8 },
]
 
const cocktails = [
  {
    name: "The LayUp",
    description: "Hennessy, Cointreau blood orange, and lime — effortless and bold.",
    price: 18,
    featured: true,
  },
  {
    name: "Overtime Old Fashioned",
    description: "Aged bourbon, smoked bitters, maple syrup, torched orange peel.",
    price: 17,
  },
  {
    name: "Courtside Cooler",
    description: "Tequila Reposado, pineapple, jalapeño, and chili-salt rim.",
    price: 16,
  },
  {
    name: "The Brooklyn Spritz",
    description: "Prosecco, Aperol, and blackberry purée — classy with an edge.",
    price: 15,
  },
  {
    name: "The MVP",
    description: "Vodka, passionfruit, and champagne — for the star player.",
    price: 17,
  },
  {
    name: "Baseline Mule",
    description: "Cucumber vodka, ginger beer, mint, and lime.",
    price: 15,
  },
]
 
// ─── COMPONENT ─────────────────────────────────────────────────────────────
 
export default function MenuPage() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════
           ROOT & TOKENS
        ═══════════════════════════════════════════════════════ */
        .mn-root {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          color: var(--cream-warm, #eed8a8);
          background: var(--bg-base, #0c0f16);
          overflow-x: hidden;
        }
 
        /* ═══════════════════════════════════════════════════════
           HERO
        ═══════════════════════════════════════════════════════ */
        .mn-hero {
          position: relative;
          height: 55svh;
          min-height: 400px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: #0c0f16;
        }
 
        /* Animated grain texture */
        .mn-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 90% 70% at 50% 100%,
              rgba(185,55,10,0.35) 0%, transparent 60%
            ),
            radial-gradient(ellipse 40% 40% at 20% 20%,
              rgba(232,100,14,0.08) 0%, transparent 60%
            );
          z-index: 0;
        }
 
        /* Diagonal ruled lines texture */
        .mn-hero-texture {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: repeating-linear-gradient(
            -45deg,
            #fff,
            #fff 1px,
            transparent 1px,
            transparent 12px
          );
          z-index: 0;
        }
 
        .mn-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
 
        .mn-hero-eyebrow {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.7rem, 1.2vw, 0.85rem);
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
 
        .mn-hero-eyebrow::before {
          content: '';
          display: block;
          width: 2.5rem;
          height: 1px;
          background: var(--orange-full, #e8640e);
        }
 
        .mn-hero-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(5rem, 17vw, 13rem);
          line-height: 0.88;
          letter-spacing: 0.01em;
          color: #fff;
          margin: 0;
        }
 
        .mn-hero-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 400;
          letter-spacing: 0.08em;
          color: rgba(238,216,168,0.6);
        }
 
        /* ═══════════════════════════════════════════════════════
           TICKER
        ═══════════════════════════════════════════════════════ */
        .mn-ticker-wrap {
          position: relative;
          z-index: 3;
          background: var(--orange-full, #e8640e);
          overflow: hidden;
          white-space: nowrap;
          padding: 0.55rem 0;
        }
 
        .mn-ticker-track {
          display: inline-block;
          animation: mn-ticker 32s linear infinite;
          will-change: transform;
        }
 
        .mn-ticker-track span {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          letter-spacing: 0.15em;
          color: #0c0f16;
          padding: 0 2.5rem;
        }
 
        .mn-ticker-track span.dot {
          padding: 0;
          color: rgba(12,15,22,0.35);
        }
 
        @keyframes mn-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
 
        /* ═══════════════════════════════════════════════════════
           LAYOUT SHELL
        ═══════════════════════════════════════════════════════ */
        .mn-body {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 8rem);
          align-items: start;
        }
 
        @media (max-width: 900px) {
          .mn-body {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
 
        /* ═══════════════════════════════════════════════════════
           COLUMN HEADERS
        ═══════════════════════════════════════════════════════ */
        .mn-col-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: clamp(2rem, 4vw, 3rem);
          padding-bottom: clamp(1.5rem, 3vw, 2rem);
          border-bottom: 1px solid rgba(232,100,14,0.2);
        }
 
        .mn-col-eyebrow {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
 
        .mn-col-eyebrow::before {
          content: '';
          display: block;
          width: 1.75rem;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
        }
 
        .mn-col-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0;
        }
 
        .mn-col-title span {
          color: var(--orange-full, #e8640e);
        }
 
        /* ═══════════════════════════════════════════════════════
           SECTION LABELS
        ═══════════════════════════════════════════════════════ */
        .mn-section-label {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.4);
          margin: 0 0 1rem 0;
          padding-left: 0.1rem;
        }
 
        /* ═══════════════════════════════════════════════════════
           MENU ITEMS
        ═══════════════════════════════════════════════════════ */
        .mn-section {
          margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
        }
 
        .mn-section:last-child {
          margin-bottom: 0;
        }
 
        .mn-item {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          padding: clamp(0.85rem, 1.5vw, 1.1rem) 0;
          border-bottom: 1px solid rgba(238,216,168,0.07);
          position: relative;
          transition: border-color 0.2s;
        }
 
        .mn-item:first-child {
          border-top: 1px solid rgba(238,216,168,0.07);
        }
 
        .mn-item:hover {
          border-bottom-color: rgba(232,100,14,0.25);
        }
 
        /* Featured item highlight */
        .mn-item--featured {
          background: rgba(232,100,14,0.04);
          padding-left: 0.85rem;
          padding-right: 0.85rem;
          margin-left: -0.85rem;
          margin-right: -0.85rem;
          border-radius: 2px;
        }
 
        .mn-item--featured::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--orange-full, #e8640e);
        }
 
        .mn-item-info {
          flex: 1;
          min-width: 0;
        }
 
        .mn-item-name {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.2;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
 
        .mn-featured-badge {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0c0f16;
          background: var(--orange-full, #e8640e);
          padding: 0.1rem 0.45rem;
          line-height: 1.6;
        }
 
        .mn-item-desc {
          font-size: clamp(0.82rem, 1.1vw, 0.9rem);
          line-height: 1.65;
          color: rgba(238,216,168,0.5);
          margin-top: 0.2rem;
        }
 
        .mn-item-dots {
          flex: 1;
          height: 1px;
          border-bottom: 1px dashed rgba(238,216,168,0.12);
          margin: 0 0.25rem;
          align-self: center;
          min-width: 1rem;
        }
 
        .mn-item-price {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          letter-spacing: 0.03em;
          color: var(--orange-full, #e8640e);
          white-space: nowrap;
          flex-shrink: 0;
        }
 
        .mn-item-price-sign {
          font-size: 0.72em;
          opacity: 0.7;
          vertical-align: super;
          letter-spacing: 0;
        }
 
        /* ═══════════════════════════════════════════════════════
           DIVIDER BAND between columns on mobile
        ═══════════════════════════════════════════════════════ */
        .mn-divider-band {
          display: none;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(232,100,14,0.4) 30%,
            rgba(232,100,14,0.4) 70%,
            transparent
          );
          margin: 0.5rem 0;
        }
 
        @media (max-width: 900px) {
          .mn-divider-band { display: block; }
        }
 
        /* ═══════════════════════════════════════════════════════
           DRINKS COLUMN — dark bg panel
        ═══════════════════════════════════════════════════════ */
        .mn-drinks-col {
          position: relative;
        }
 
        .mn-drinks-bg {
          position: absolute;
          inset: -2rem -1.5rem;
          background: rgba(232,100,14,0.03);
          border: 1px solid rgba(232,100,14,0.08);
          border-radius: 4px;
          pointer-events: none;
          z-index: 0;
        }
 
        .mn-drinks-col > * {
          position: relative;
          z-index: 1;
        }
 
        /* ═══════════════════════════════════════════════════════
           FOOTER CTA STRIP
        ═══════════════════════════════════════════════════════ */
        .mn-cta-strip {
          border-top: 1px solid rgba(232,100,14,0.15);
          background: linear-gradient(
            180deg,
            rgba(232,100,14,0.05) 0%,
            rgba(12,15,22,0) 100%
          );
          padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
          text-align: center;
        }
 
        .mn-cta-inner {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
 
        .mn-cta-label {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          justify-content: center;
        }
 
        .mn-cta-label::before,
        .mn-cta-label::after {
          content: '';
          display: block;
          width: 1.75rem;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
        }
 
        .mn-cta-heading {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0;
        }
 
        .mn-cta-heading span {
          color: var(--orange-full, #e8640e);
        }
 
        .mn-cta-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          letter-spacing: 0.06em;
          color: rgba(238,216,168,0.55);
        }
 
        .mn-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 0.25rem;
        }
 
        .mn-btn-primary {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0c0f16;
          background: var(--orange-full, #e8640e);
          border: 1.5px solid var(--orange-full, #e8640e);
          padding: 0.85rem 2.25rem;
          text-decoration: none;
          transition: background 0.22s, color 0.22s;
          display: inline-block;
        }
 
        .mn-btn-primary:hover {
          background: transparent;
          color: var(--orange-full, #e8640e);
        }
 
        .mn-btn-secondary {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.8);
          background: transparent;
          border: 1.5px solid rgba(238,216,168,0.25);
          padding: 0.85rem 2.25rem;
          text-decoration: none;
          transition: border-color 0.22s, color 0.22s;
          display: inline-block;
        }
 
        .mn-btn-secondary:hover {
          border-color: rgba(238,216,168,0.65);
          color: #fff;
        }
 
        /* ═══════════════════════════════════════════════════════
           NOTICE
        ═══════════════════════════════════════════════════════ */
        .mn-notice {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 5vw, 4rem) clamp(1rem, 2vw, 1.5rem);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: rgba(238,216,168,0.3);
          text-align: center;
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          text-transform: uppercase;
        }
      `}</style>
 
      <div className="mn-root">
 
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="mn-hero">
          <div className="mn-hero-texture" aria-hidden="true" />
          <div className="mn-hero-content">
            <p className="mn-hero-eyebrow">The LayUp Sports Bar · Brooklyn</p>
            <h1 className="mn-hero-title">Menu</h1>
            <p className="mn-hero-sub">Food &amp; Drinks · 47 5th Ave, Brooklyn NY</p>
          </div>
        </section>
 
        {/* ─── TICKER ───────────────────────────────────────────── */}
        <div className="mn-ticker-wrap" aria-hidden="true">
          <div className="mn-ticker-track">
            {[1, 2].map(i => (
              <span key={i}>
                <span>SMASH BURGERS</span>
                <span className="dot">·</span>
                <span>15 BEERS ON TAP</span>
                <span className="dot">·</span>
                <span>SIGNATURE COCKTAILS</span>
                <span className="dot">·</span>
                <span>SMALL PLATES</span>
                <span className="dot">·</span>
                <span>ONE BLOCK FROM BARCLAYS</span>
                <span className="dot">·</span>
                <span>OPEN NIGHTLY</span>
                <span className="dot">·</span>
              </span>
            ))}
          </div>
        </div>
 
        {/* ─── MENU BODY ────────────────────────────────────────── */}
        <div className="mn-body">
 
          {/* LEFT COLUMN — Food */}
          <div>
            <div className="mn-col-header">
              <p className="mn-col-eyebrow">Kitchen</p>
              <h2 className="mn-col-title">
                Food<br />
                <span>Menu</span>
              </h2>
            </div>
 
            {/* Small Plates */}
            <div className="mn-section">
              <p className="mn-section-label">Small Plates &amp; Bar Bites</p>
              {smallPlates.map((item) => (
                <div key={item.name} className="mn-item">
                  <div className="mn-item-info">
                    <div className="mn-item-name">{item.name}</div>
                    {item.description && (
                      <p className="mn-item-desc">{item.description}</p>
                    )}
                  </div>
                  <div className="mn-item-dots" aria-hidden="true" />
                  <div className="mn-item-price">
                    <span className="mn-item-price-sign">$</span>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
 
            {/* Burgers */}
            <div className="mn-section">
              <p className="mn-section-label">Burgers</p>
              {burgers.map((item) => (
                <div
                  key={item.name}
                  className={`mn-item${item.featured ? " mn-item--featured" : ""}`}
                >
                  <div className="mn-item-info">
                    <div className="mn-item-name">
                      {item.name}
                      {item.featured && (
                        <span className="mn-featured-badge">Fan Fav</span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mn-item-desc">{item.description}</p>
                    )}
                  </div>
                  <div className="mn-item-dots" aria-hidden="true" />
                  <div className="mn-item-price">
                    <span className="mn-item-price-sign">$</span>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
 
            {/* Sides */}
            <div className="mn-section">
              <p className="mn-section-label">Small Sides</p>
              {sides.map((item) => (
                <div key={item.name} className="mn-item">
                  <div className="mn-item-info">
                    <div className="mn-item-name">{item.name}</div>
                    {item.description && (
                      <p className="mn-item-desc">{item.description}</p>
                    )}
                  </div>
                  <div className="mn-item-dots" aria-hidden="true" />
                  <div className="mn-item-price">
                    <span className="mn-item-price-sign">$</span>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* RIGHT COLUMN — Drinks */}
          <div className="mn-drinks-col">
            <div className="mn-drinks-bg" aria-hidden="true" />
 
            <div className="mn-col-header">
              <p className="mn-col-eyebrow">Bar Program</p>
              <h2 className="mn-col-title">
                Signature<br />
                <span>Cocktails</span>
              </h2>
            </div>
 
            <div className="mn-section">
              <p className="mn-section-label">Craft Cocktails</p>
              {cocktails.map((item) => (
                <div
                  key={item.name}
                  className={`mn-item${item.featured ? " mn-item--featured" : ""}`}
                >
                  <div className="mn-item-info">
                    <div className="mn-item-name">
                      {item.name}
                      {item.featured && (
                        <span className="mn-featured-badge">Signature</span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mn-item-desc">{item.description}</p>
                    )}
                  </div>
                  <div className="mn-item-dots" aria-hidden="true" />
                  <div className="mn-item-price">
                    <span className="mn-item-price-sign">$</span>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
        </div>
 
        {/* ─── NOTICE ───────────────────────────────────────────── */}
        <p className="mn-notice">
          Menu items and prices subject to change · Please inform your server of any allergies
        </p>
 
        {/* ─── CTA STRIP ────────────────────────────────────────── */}
        <div className="mn-cta-strip">
          <div className="mn-cta-inner">
            <p className="mn-cta-label">47 5th Ave · Brooklyn, NY</p>
            <h2 className="mn-cta-heading">
              Come Eat<br />
              <span>With Us.</span>
            </h2>
            <p className="mn-cta-sub">
              One block from Barclays. Open nightly. Always showing.
            </p>
            <div className="mn-cta-buttons">
              <Link href="/our-story" className="mn-btn-primary">
                Our Story
              </Link>
              <a
                href="https://www.google.com/maps/search/47+5th+Ave+Brooklyn+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="mn-btn-secondary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
 
      </div>
    </>
  )
}