"use client"
 
import Link from "next/link"
 
// ─── DATA ──────────────────────────────────────────────────────────────────
 
interface Event {
  id: string
  title: string
  date: string
  dayOfWeek: string
  month: string
  day: string
  time: string
  location: string
  description: string
  image?: string
}
 
const upcomingEvents: Event[] = [
  {
    id: "soft-opening",
    title: "Soft Opening",
    date: "Friday, March 20, 2026",
    dayOfWeek: "Friday",
    month: "MAR",
    day: "20",
    time: "6:30 PM – 11:30 PM",
    location: "The LayUp Sports Bar · 47 5th Ave, Brooklyn",
    description:
      "We're excited to welcome our friends and family to The LayUp for a special Soft Opening. Join us for great drinks, familiar faces, and good vibes as we fine-tune everything ahead of our official opening. Your support means everything to us, and we can't wait to raise a glass together.",
    image:
      "https://images.squarespace-cdn.com/content/v1/692e653bbeb9047fd27e6334/1770399797127-JVONS2SBPC7XS4VTDMOW/IMG_1490.jpg",
  },
]
 
// ─── COMPONENT ─────────────────────────────────────────────────────────────
 
export default function EventsPage() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════
           ROOT
        ═══════════════════════════════════════════════════ */
        .ev-root {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          color: var(--cream-warm, #eed8a8);
          background: var(--bg-base, #0c0f16);
          overflow-x: hidden;
          min-height: 100svh;
        }
 
        /* ═══════════════════════════════════════════════════
           HERO
        ═══════════════════════════════════════════════════ */
        .ev-hero {
          position: relative;
          padding: clamp(8rem, 16vw, 13rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 6rem);
          overflow: hidden;
        }
 
        .ev-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 60% at 50% 100%,
            rgba(185,55,10,0.22) 0%, transparent 65%
          );
          pointer-events: none;
        }
 
        .ev-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: repeating-linear-gradient(
            -45deg, #fff, #fff 1px, transparent 1px, transparent 12px
          );
          pointer-events: none;
        }
 
        .ev-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
 
        .ev-eyebrow {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
 
        .ev-eyebrow::before {
          content: '';
          display: block;
          width: 2.5rem;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
        }
 
        .ev-hero-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(5rem, 16vw, 12rem);
          line-height: 0.88;
          letter-spacing: 0.01em;
          color: #fff;
          margin: 0;
        }
 
        .ev-hero-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          letter-spacing: 0.08em;
          color: rgba(238,216,168,0.5);
          margin-top: 0.25rem;
        }
 
        /* ═══════════════════════════════════════════════════
           TICKER
        ═══════════════════════════════════════════════════ */
        .ev-ticker-wrap {
          background: var(--orange-full, #e8640e);
          overflow: hidden;
          white-space: nowrap;
          padding: 0.55rem 0;
        }
 
        .ev-ticker-track {
          display: inline-block;
          animation: ev-ticker 30s linear infinite;
        }
 
        .ev-ticker-track span {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(0.9rem, 1.4vw, 1rem);
          letter-spacing: 0.15em;
          color: #0c0f16;
          padding: 0 2.5rem;
        }
 
        .ev-ticker-track span.dot {
          padding: 0;
          color: rgba(12,15,22,0.35);
        }
 
        @keyframes ev-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
 
        /* ═══════════════════════════════════════════════════
           EVENTS LIST
        ═══════════════════════════════════════════════════ */
        .ev-body {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
        }
 
        .ev-section-label {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.35);
          margin-bottom: clamp(2rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
 
        .ev-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(238,216,168,0.08);
        }
 
        /* ─── Single event card ─── */
        .ev-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: clamp(1.5rem, 4vw, 3.5rem);
          padding: clamp(1.5rem, 3vw, 2.5rem) 0;
          border-bottom: 1px solid rgba(238,216,168,0.07);
          align-items: start;
        }
 
        .ev-card:first-child {
          border-top: 1px solid rgba(238,216,168,0.07);
        }
 
        @media (max-width: 640px) {
          .ev-card {
            grid-template-columns: 1fr;
          }
        }
 
        /* Date tag */
        .ev-date-tag {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 72px;
          flex-shrink: 0;
          padding: 0.75rem 0.5rem;
          border: 1px solid rgba(232,100,14,0.25);
          background: rgba(232,100,14,0.04);
          gap: 0.1rem;
        }
 
        .ev-date-month {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--orange-full, #e8640e);
          line-height: 1;
        }
 
        .ev-date-day {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: 2.4rem;
          line-height: 1;
          letter-spacing: 0.02em;
          color: #fff;
        }
 
        /* Card content */
        .ev-card-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: start;
        }
 
        @media (max-width: 820px) {
          .ev-card-content {
            grid-template-columns: 1fr;
          }
        }
 
        .ev-card-text {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
 
        .ev-card-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0;
        }
 
        .ev-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 1.5rem;
        }
 
        .ev-meta-item {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.45);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
 
        .ev-meta-item svg {
          opacity: 0.5;
          flex-shrink: 0;
        }
 
        .ev-card-desc {
          font-size: clamp(0.88rem, 1.2vw, 0.98rem);
          line-height: 1.75;
          color: rgba(238,216,168,0.55);
          max-width: 60ch;
          margin-top: 0.25rem;
        }
 
        /* Card image */
        .ev-card-img {
          width: 200px;
          aspect-ratio: 3/4;
          overflow: hidden;
          border-radius: 2px;
          flex-shrink: 0;
          position: relative;
        }
 
        .ev-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          transition: transform 0.6s ease;
        }
 
        .ev-card:hover .ev-card-img img {
          transform: scale(1.04);
        }
 
        @media (max-width: 820px) {
          .ev-card-img { width: 100%; aspect-ratio: 16/9; }
        }
 
        /* ═══════════════════════════════════════════════════
           EMPTY STATE
        ═══════════════════════════════════════════════════ */
        .ev-empty {
          padding: clamp(3rem, 6vw, 5rem) 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
 
        .ev-empty-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.25);
          margin: 0;
        }
 
        .ev-empty-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(238,216,168,0.25);
        }
 
        /* ═══════════════════════════════════════════════════
           INSTAGRAM CTA
        ═══════════════════════════════════════════════════ */
        .ev-cta {
          border-top: 1px solid rgba(232,100,14,0.12);
          background: linear-gradient(
            180deg,
            rgba(232,100,14,0.04) 0%,
            rgba(12,15,22,0) 100%
          );
          padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
          text-align: center;
        }
 
        .ev-cta-inner {
          max-width: 540px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
 
        .ev-cta-label {
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
 
        .ev-cta-label::before,
        .ev-cta-label::after {
          content: '';
          display: block;
          width: 1.75rem;
          height: 1px;
          background: currentColor;
        }
 
        .ev-cta-title {
          font-family: var(--font-display, 'Bebas Neue', sans-serif);
          font-size: clamp(2.4rem, 6vw, 4rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0;
        }
 
        .ev-cta-title span { color: var(--orange-full, #e8640e); }
 
        .ev-cta-sub {
          font-family: var(--font-nav, 'Barlow Condensed', sans-serif);
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          letter-spacing: 0.06em;
          color: rgba(238,216,168,0.5);
        }
 
        .ev-btn {
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
          margin-top: 0.25rem;
        }
 
        .ev-btn:hover {
          background: transparent;
          color: var(--orange-full, #e8640e);
        }
      `}</style>
 
      <div className="ev-root">
 
        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="ev-hero">
          <div className="ev-hero-inner">
            <p className="ev-eyebrow">The LayUp · Brooklyn, NY</p>
            <h1 className="ev-hero-title">Events</h1>
            <p className="ev-hero-sub">Upcoming events at 47 5th Ave</p>
          </div>
        </section>
 
        {/* ─── TICKER ───────────────────────────────────────── */}
        <div className="ev-ticker-wrap" aria-hidden="true">
          <div className="ev-ticker-track">
            {[1, 2].map(i => (
              <span key={i}>
                <span>UPCOMING EVENTS</span>
                <span className="dot">·</span>
                <span>ONE BLOCK FROM BARCLAYS</span>
                <span className="dot">·</span>
                <span>47 5TH AVE BROOKLYN</span>
                <span className="dot">·</span>
                <span>FOLLOW @THELAYUPBAR</span>
                <span className="dot">·</span>
                <span>OPEN NIGHTLY</span>
                <span className="dot">·</span>
              </span>
            ))}
          </div>
        </div>
 
        {/* ─── EVENTS LIST ──────────────────────────────────── */}
        <div className="ev-body">
          <p className="ev-section-label">Upcoming Events</p>
 
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <div key={event.id} className="ev-card">
 
                {/* Date tag */}
                <div className="ev-date-tag">
                  <span className="ev-date-month">{event.month}</span>
                  <span className="ev-date-day">{event.day}</span>
                </div>
 
                {/* Content + image */}
                <div className="ev-card-content">
                  <div className="ev-card-text">
                    <h2 className="ev-card-title">{event.title}</h2>
 
                    <div className="ev-card-meta">
                      <span className="ev-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {event.date}
                      </span>
                      <span className="ev-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {event.time}
                      </span>
                      <span className="ev-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {event.location}
                      </span>
                    </div>
 
                    <p className="ev-card-desc">{event.description}</p>
                  </div>
 
                  {event.image && (
                    <div className="ev-card-img">
                      <img src={event.image} alt={event.title} loading="lazy" />
                    </div>
                  )}
                </div>
 
              </div>
            ))
          ) : (
            <div className="ev-empty">
              <h2 className="ev-empty-title">No upcoming events</h2>
              <p className="ev-empty-sub">Check back soon or follow us on Instagram</p>
            </div>
          )}
        </div>
 
        {/* ─── CTA ──────────────────────────────────────────── */}
        <div className="ev-cta">
          <div className="ev-cta-inner">
            <p className="ev-cta-label">Stay in the loop</p>
            <h2 className="ev-cta-title">
              Follow Us<br />
              <span>@thelayupbar</span>
            </h2>
            <p className="ev-cta-sub">
              Events, game nights, and announcements — all on Instagram.
            </p>
            <a
              href="https://www.instagram.com/thelayupbar/"
              target="_blank"
              rel="noopener noreferrer"
              className="ev-btn"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
 
      </div>
    </>
  )
}