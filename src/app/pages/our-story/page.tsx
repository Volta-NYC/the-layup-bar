"use client"
 
import Link from "next/link"
import Image from "next/image"
 
const photos = {
  hero:    "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/3b13bafb-ce87-4155-93ae-9e02f2ee4643/IMG_2195.jpg",
  wide1:   "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/620a5ab3-45c7-4c29-bbf3-51f7832771da/IMG_2257.jpg",
  wide2:   "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/3ea700b2-3152-4131-a234-6c64b2bbd677/IMG_2259.jpg",
  full:    "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/9eac7a54-f0b8-4bbe-b5f5-3f78c2c9f374/IMG_2937.jpg",
  port1:   "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/438f0f61-c230-43ea-bd47-a19d394d1258/IMG_0768.jpg",
  port2:   "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/70879dce-9529-4471-9ea3-4222192b3638/IMG_2258.jpg",
  port3:   "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/4dcc1421-6e0b-42fd-bcd7-cb817bdeb268/IMG_2271.jpg",
  port4:   "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/a7c365be-c09c-41e2-835d-3ca9f931ec4e/IMG_6287.jpg",
}
 
export default function OurStoryPage() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════
           ROOT & TOKENS
        ═══════════════════════════════════════════════════════ */
        .os-root {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          color: var(--cream-warm, #eed8a8);
          background: var(--bg-base, #0c0f16);
          overflow-x: hidden;
        }
 
        /* ═══════════════════════════════════════════════════════
           HERO — cinematic full-bleed with image
        ═══════════════════════════════════════════════════════ */
        .os-hero {
          position: relative;
          height: 100svh;
          min-height: 560px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
 
        .os-hero-img {
          position: absolute;
          inset: 0;
          object-fit: cover;
          object-position: center 40%;
          width: 100%;
          height: 100%;
        }
 
        /* layered gradient: dark at top (for nav), rich at bottom */
        .os-hero::after {
          content: '';
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg,
              rgba(8,10,18,0.72) 0%,
              rgba(8,10,18,0.10) 35%,
              rgba(8,10,18,0.05) 50%,
              rgba(8,10,18,0.70) 72%,
              rgba(8,10,18,0.97) 100%
            ),
            radial-gradient(ellipse 80% 50% at 50% 100%,
              rgba(185,55,10,0.28) 0%, transparent 65%
            );
          z-index: 1;
        }
 
        .os-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
 
        .os-hero-eyebrow {
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
 
        .os-hero-eyebrow::before {
          content: '';
          display: block;
          width: 2.5rem;
          height: 1px;
          background: var(--orange-full, #e8640e);
        }
 
        .os-hero-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(4rem, 13vw, 11rem);
          line-height: 0.88;
          letter-spacing: 0.01em;
          color: #fff;
          margin: 0;
          text-shadow: 0 4px 60px rgba(0,0,0,0.5);
        }
 
        .os-hero-title span {
          color: var(--orange-full, #e8640e);
        }
 
        .os-hero-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(238,216,168,0.75);
          max-width: 38ch;
        }
 
        /* scrolling ticker strip */
        .os-ticker-wrap {
          position: relative;
          z-index: 3;
          background: var(--orange-full, #e8640e);
          overflow: hidden;
          white-space: nowrap;
          padding: 0.55rem 0;
          margin-top: -1px;
        }
 
        .os-ticker-track {
          display: inline-block;
          animation: os-ticker 28s linear infinite;
          will-change: transform;
        }
 
        .os-ticker-track span {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          letter-spacing: 0.15em;
          color: #0c0f16;
          padding: 0 2.5rem;
        }
 
        .os-ticker-track span.dot {
          padding: 0;
          color: rgba(12,15,22,0.4);
        }
 
        @keyframes os-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
 
        /* ═══════════════════════════════════════════════════════
           INTRO — two-col: pull-quote left, body right
        ═══════════════════════════════════════════════════════ */
        .os-intro {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 7rem);
          align-items: start;
        }
 
        @media (max-width: 768px) {
          .os-intro { grid-template-columns: 1fr; gap: 3rem; }
        }
 
        .os-intro-left {
          position: sticky;
          top: clamp(5rem, 8vw, 7rem);
        }
 
        .os-pull-quote {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.6rem, 5vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: 0.015em;
          color: #fff;
          margin: 0 0 2rem 0;
        }
 
        .os-pull-quote em {
          font-style: normal;
          color: var(--orange-full, #e8640e);
        }
 
        .os-intro-divider {
          width: 3.5rem;
          height: 2px;
          background: var(--orange-full, #e8640e);
          margin-bottom: 1.5rem;
        }
 
        .os-intro-stat {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          margin-bottom: 2rem;
        }
 
        .os-stat-number {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(3rem, 5vw, 4rem);
          line-height: 1;
          color: var(--orange-full, #e8640e);
        }
 
        .os-stat-label {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.55);
        }
 
        .os-intro-right {}
 
        .os-body-lead {
          font-size: clamp(1.15rem, 1.8vw, 1.35rem);
          font-weight: 600;
          line-height: 1.55;
          color: #fff;
          margin: 0 0 1.5rem 0;
        }
 
        .os-body-lead em {
          font-style: italic;
          color: var(--orange-full, #e8640e);
        }
 
        .os-body-text {
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          line-height: 1.8;
          color: rgba(238,216,168,0.72);
          margin: 0 0 1.5rem 0;
        }
 
        .os-body-text:last-child { margin-bottom: 0; }
 
        /* ═══════════════════════════════════════════════════════
           MOSAIC — asymmetric photo collage
        ═══════════════════════════════════════════════════════ */
        .os-mosaic {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 8vw, 8rem);
        }
 
        /* big label watermark */
        .os-mosaic-label {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(4rem, 12vw, 10rem);
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          margin-bottom: -1.5rem;
          padding-left: 0.25rem;
        }
 
        .os-mosaic-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(3, auto);
          gap: clamp(0.5rem, 1.2vw, 1rem);
        }
 
        .os-mosaic-item {
          overflow: hidden;
          border-radius: 3px;
          position: relative;
        }
 
        /* hover zoom effect */
        .os-mosaic-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
 
        .os-mosaic-item:hover img {
          transform: scale(1.05);
        }
 
        /* orange top-line reveal on hover */
        .os-mosaic-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--orange-full, #e8640e);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 2;
        }
 
        .os-mosaic-item:hover::before {
          transform: scaleX(1);
        }
 
        /* grid placements */
        .os-m1 { grid-column: 1 / 8;  grid-row: 1;    aspect-ratio: 16/9; }
        .os-m2 { grid-column: 8 / 13; grid-row: 1;    aspect-ratio: 3/4; }
        .os-m3 { grid-column: 1 / 5;  grid-row: 2;    aspect-ratio: 3/4; }
        .os-m4 { grid-column: 5 / 10; grid-row: 2;    aspect-ratio: 16/9; }
        .os-m5 { grid-column: 10 / 13;grid-row: 2;    aspect-ratio: 3/4; }
        .os-m6 { grid-column: 1 / 6;  grid-row: 3;    aspect-ratio: 3/4; }
        .os-m7 { grid-column: 6 / 13; grid-row: 3;    aspect-ratio: 16/10; }
 
        @media (max-width: 900px) {
          .os-mosaic-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: none;
          }
          .os-m1 { grid-column: 1/3; grid-row: auto; aspect-ratio: 16/9; }
          .os-m2 { grid-column: 1/2; grid-row: auto; aspect-ratio: 1/1; }
          .os-m3 { grid-column: 2/3; grid-row: auto; aspect-ratio: 1/1; }
          .os-m4 { grid-column: 1/3; grid-row: auto; aspect-ratio: 16/9; }
          .os-m5 { grid-column: 1/2; grid-row: auto; aspect-ratio: 1/1; }
          .os-m6 { grid-column: 2/3; grid-row: auto; aspect-ratio: 1/1; }
          .os-m7 { grid-column: 1/3; grid-row: auto; aspect-ratio: 16/9; }
        }
 
        @media (max-width: 560px) {
          .os-mosaic-grid { grid-template-columns: 1fr; }
          .os-m1,.os-m2,.os-m3,.os-m4,.os-m5,.os-m6,.os-m7 {
            grid-column: 1/-1; grid-row: auto; aspect-ratio: 4/3;
          }
        }
 
        /* ═══════════════════════════════════════════════════════
           PILLARS — three value props
        ═══════════════════════════════════════════════════════ */
        .os-pillars {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(232,100,14,0.07) 0%,
            rgba(12,15,22,0) 50%,
            rgba(232,100,14,0.05) 100%
          );
          border-top: 1px solid rgba(232,100,14,0.15);
          border-bottom: 1px solid rgba(232,100,14,0.15);
        }
 
        .os-pillars-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(2rem, 4vw, 4rem);
        }
 
        @media (max-width: 720px) {
          .os-pillars-inner { grid-template-columns: 1fr; }
        }
 
        .os-pillar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-left: 1px solid rgba(232,100,14,0.2);
          padding-left: clamp(1.25rem, 2.5vw, 2rem);
        }
 
        .os-pillar-num {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: 3.5rem;
          line-height: 1;
          color: rgba(232,100,14,0.18);
          letter-spacing: 0.02em;
        }
 
        .os-pillar-heading {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(1.3rem, 2vw, 1.65rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.15;
        }
 
        .os-pillar-text {
          font-size: clamp(0.88rem, 1.2vw, 0.98rem);
          line-height: 1.75;
          color: rgba(238,216,168,0.62);
        }
 
        /* ═══════════════════════════════════════════════════════
           SPLIT SECTION — wide photo + text side by side
        ═══════════════════════════════════════════════════════ */
        .os-split {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }
 
        @media (max-width: 768px) {
          .os-split { grid-template-columns: 1fr; }
          .os-split-img { order: -1; }
        }
 
        .os-split-photo {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 4/5;
        }
 
        .os-split-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
 
        /* decorative orange frame offset */
        .os-split-photo::before {
          content: '';
          position: absolute;
          inset: -8px -8px auto auto;
          width: 60%;
          height: 60%;
          border-top: 2px solid var(--orange-full, #e8640e);
          border-right: 2px solid var(--orange-full, #e8640e);
          z-index: 2;
          pointer-events: none;
        }
 
        .os-split-photo::after {
          content: '';
          position: absolute;
          inset: auto auto -8px -8px;
          width: 40%;
          height: 40%;
          border-bottom: 2px solid rgba(232,100,14,0.4);
          border-left: 2px solid rgba(232,100,14,0.4);
          z-index: 2;
          pointer-events: none;
        }
 
        .os-split-text {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
 
        .os-section-eyebrow {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
 
        .os-section-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: currentColor;
        }
 
        .os-section-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0;
        }
 
        .os-section-title span {
          color: var(--orange-full, #e8640e);
        }
 
        .os-split-body {
          font-size: clamp(0.92rem, 1.3vw, 1.02rem);
          line-height: 1.8;
          color: rgba(238,216,168,0.70);
        }
 
        /* ═══════════════════════════════════════════════════════
           CTA BAND
        ═══════════════════════════════════════════════════════ */
        .os-cta {
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem);
        }
 
        /* background: IMG_2937 full bar shot */
        .os-cta-bg {
          position: absolute;
          inset: 0;
          object-fit: cover;
          object-position: center 55%;
          width: 100%;
          height: 100%;
        }
 
        .os-cta::before {
          content: '';
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg,
              rgba(8,10,18,0.88) 0%,
              rgba(8,10,18,0.70) 40%,
              rgba(8,10,18,0.85) 100%
            ),
            radial-gradient(ellipse 70% 60% at 50% 60%,
              rgba(185,55,10,0.25) 0%, transparent 65%
            );
          z-index: 1;
        }
 
        .os-cta-inner {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
 
        .os-cta-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0;
        }
 
        .os-cta-title span {
          color: var(--orange-full, #e8640e);
          display: block;
        }
 
        .os-cta-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          letter-spacing: 0.06em;
          color: rgba(238,216,168,0.65);
        }
 
        .os-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }
 
        .os-btn-primary {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.85rem;
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
 
        .os-btn-primary:hover {
          background: transparent;
          color: var(--orange-full, #e8640e);
        }
 
        .os-btn-secondary {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.85);
          background: transparent;
          border: 1.5px solid rgba(238,216,168,0.3);
          padding: 0.85rem 2.25rem;
          text-decoration: none;
          transition: border-color 0.22s, color 0.22s;
          display: inline-block;
        }
 
        .os-btn-secondary:hover {
          border-color: rgba(238,216,168,0.7);
          color: #fff;
        }
      `}</style>
 
      <div className="os-root">
 
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="os-hero">
          <img
            src={photos.hero}
            alt="The LayUp bar interior"
            className="os-hero-img"
          />
          <div className="os-hero-content">
            <p className="os-hero-eyebrow">Brooklyn, New York</p>
            <h1 className="os-hero-title">
              Our<br />
              <span>Story</span>
            </h1>
            <p className="os-hero-sub">
              Where Brooklyn comes to play, eat, and enjoy.
            </p>
          </div>
        </section>
 
        {/* ─── TICKER STRIP ─────────────────────────────────────── */}
        <div className="os-ticker-wrap" aria-hidden="true">
          <div className="os-ticker-track">
            {[1, 2].map(i => (
              <span key={i}>
                <span>THE LAYUP</span>
                <span className="dot">·</span>
                <span>47 5TH AVE BROOKLYN</span>
                <span className="dot">·</span>
                <span>15 BEERS ON TAP</span>
                <span className="dot">·</span>
                <span>ONE BLOCK FROM BARCLAYS</span>
                <span className="dot">·</span>
                <span>SMASH BURGERS</span>
                <span className="dot">·</span>
                <span>ALL GAMES SHOWING</span>
                <span className="dot">·</span>
              </span>
            ))}
          </div>
        </div>
 
        {/* ─── INTRO ────────────────────────────────────────────── */}
        <section className="os-intro">
          <div className="os-intro-left">
            <h2 className="os-pull-quote">
              Brooklyn's<br />
              <em>First True</em><br />
              Sports Bar.
            </h2>
            <div className="os-intro-divider" />
            <div className="os-intro-stat">
              <span className="os-stat-number">15</span>
              <span className="os-stat-label">Beers On Tap</span>
            </div>
            <div className="os-intro-stat">
              <span className="os-stat-number">1</span>
              <span className="os-stat-label">Block from Barclays Center</span>
            </div>
          </div>
          <div className="os-intro-right">
            <p className="os-body-lead">
              Welcome to <em>The LayUp</em> — located on the corner of 5th Ave &amp; 12th Street,
              just one block from the Barclays Center.
            </p>
            <p className="os-body-text">
              The LayUp brings the energy of Brooklyn game nights together with great food,
              ice-cold drinks, and the perfect atmosphere to cheer on your favorite team.
              We were built for fans who want more than a screen — we give you the whole experience.
            </p>
            <p className="os-body-text">
              Enjoy 15 beers on tap, a rotating selection of local brews, and our signature
              smash-style burgers that have quickly become a neighborhood favorite.
              Whether you're stopping in before the game, celebrating a win, or just looking
              for a place to chill with friends, The LayUp is where Brooklyn comes to play,
              eat, and enjoy.
            </p>
          </div>
        </section>
 
        {/* ─── MOSAIC GALLERY ───────────────────────────────────── */}
        <section className="os-mosaic">
          <p className="os-mosaic-label" aria-hidden="true">THE LAYUP</p>
          <div className="os-mosaic-grid">
            <div className="os-mosaic-item os-m1">
              <img src={photos.wide1} alt="Bar interior" loading="lazy" />
            </div>
            <div className="os-mosaic-item os-m2">
              <img src={photos.port2} alt="The LayUp" loading="lazy" />
            </div>
            <div className="os-mosaic-item os-m3">
              <img src={photos.port1} alt="Bar detail" loading="lazy" />
            </div>
            <div className="os-mosaic-item os-m4">
              <img src={photos.wide2} alt="Game night at The LayUp" loading="lazy" />
            </div>
            <div className="os-mosaic-item os-m5">
              <img src={photos.port3} alt="The LayUp" loading="lazy" />
            </div>
            <div className="os-mosaic-item os-m6">
              <img src={photos.port4} alt="The LayUp" loading="lazy" />
            </div>
            <div className="os-mosaic-item os-m7">
              <img src={photos.full} alt="Full bar at The LayUp" loading="lazy" />
            </div>
          </div>
        </section>
 
        {/* ─── PILLARS ──────────────────────────────────────────── */}
        <section className="os-pillars">
          <div className="os-pillars-inner">
            <div className="os-pillar">
              <span className="os-pillar-num">01</span>
              <h3 className="os-pillar-heading">Locally Sourced,<br />Crafted With Love</h3>
              <p className="os-pillar-text">
                Our menu is built around ingredients we actually care about.
                Smash-style burgers made fresh, sides done right, and bar bites
                that keep you coming back round after round.
              </p>
            </div>
            <div className="os-pillar">
              <span className="os-pillar-num">02</span>
              <h3 className="os-pillar-heading">15 Beers<br />On Tap</h3>
              <p className="os-pillar-text">
                From Brooklyn Lager to rotating local selections, we keep the taps
                flowing and the pints cold. Because a great game deserves a great beer.
              </p>
            </div>
            <div className="os-pillar">
              <span className="os-pillar-num">03</span>
              <h3 className="os-pillar-heading">Every Game.<br />Every Screen.</h3>
              <p className="os-pillar-text">
                One block from the Barclays Center, surrounded by screens, and surrounded
                by fans. We show every game, every night — this is where Brooklyn watches together.
              </p>
            </div>
          </div>
        </section>
 
        {/* ─── SPLIT — wide bar shot + text ─────────────────────── */}
        <section className="os-split">
          <div className="os-split-photo os-split-img">
            <img src={photos.full} alt="The LayUp bar at night" loading="lazy" />
          </div>
          <div className="os-split-text">
            <p className="os-section-eyebrow">Come As You Are</p>
            <h2 className="os-section-title">
              The Home Court<br />
              <span>Advantage</span>
            </h2>
            <p className="os-split-body">
              We're not a chain. We're not a franchise. We're a Brooklyn bar built
              by people who love the neighborhood, love the game, and love bringing
              people together over something cold and something delicious.
            </p>
            <p className="os-split-body">
              Mon–Sat from 5pm. Sundays from noon. Walk-ins always welcome.
              Reservations available for groups — because the bigger the crew,
              the louder the cheer.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Link href="/pages/menu" className="os-btn-primary">See the Menu</Link>
              <Link href="/pages/contact" className="os-btn-secondary">Hours &amp; Location</Link>
            </div>
          </div>
        </section>
 
        {/* ─── CTA BAND ─────────────────────────────────────────── */}
        <section className="os-cta">
          <img
            src={photos.wide2}
            alt="The LayUp atmosphere"
            className="os-cta-bg"
            loading="lazy"
          />
          <div className="os-cta-inner">
            <p className="os-section-eyebrow" style={{ justifyContent: 'center' }}>
              47 5th Ave · Brooklyn, NY
            </p>
            <h2 className="os-cta-title">
              Come Watch
              <span>With Us.</span>
            </h2>
            <p className="os-cta-sub">
              One block from Barclays. Open nightly. Always showing.
            </p>
            <div className="os-cta-buttons">
              <a
                href="https://www.google.com/maps/search/47+5th+Ave+Brooklyn+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="os-btn-primary"
              >
                Get Directions
              </a>
              <a
                href="https://www.instagram.com/thelayupbar/"
                target="_blank"
                rel="noopener noreferrer"
                className="os-btn-secondary"
              >
                Follow @thelayupbar
              </a>
            </div>
          </div>
        </section>
 
      </div>
    </>
  )
}