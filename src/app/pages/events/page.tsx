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