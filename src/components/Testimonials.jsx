import { testimonials } from "../data/siteData.js";

function Stars({ count = 5 }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star" aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div>
            <div className="eyebrow reveal">
              <span className="eyebrow-line" aria-hidden="true" />
              From the bar log
            </div>
            <h2 className="section-title reveal">What regulars say.</h2>
          </div>

          <p className="reveal" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--ink-muted)",
            letterSpacing: "0.06em",
            maxWidth: "28ch",
            textAlign: "right",
            lineHeight: "1.6",
          }}>
            Unedited. Written by people who<br />come back on their own.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card reveal delay-${i + 1}`}
            >
              <Stars count={t.rating} />

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="testimonial-meta">
                <div
                  className="testimonial-avatar"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div
          aria-hidden="true"
          style={{
            marginTop: "64px",
            overflow: "hidden",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "14px 0",
          }}
        >
          <div style={{
            display: "flex",
            gap: "0",
            width: "max-content",
            animation: "marquee 28s linear infinite",
          }}>
            {/* Duplicate for seamless loop */}
            {[...Array(2)].map((_, rep) => (
              <span
                key={rep}
                style={{
                  display: "flex",
                  gap: "0",
                  whiteSpace: "nowrap",
                }}
              >
                {[
                  "Direct Trade",
                  "Single Origin",
                  "Small Batch Roastery",
                  "Filter Bar",
                  "Est. 2019",
                  "Koregaon Park",
                  "Precision Brewing",
                  "Every Cup Logged",
                ].map((word) => (
                  <span
                    key={word}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                      padding: "0 32px",
                    }}
                  >
                    {word}
                    <span style={{ marginLeft: "32px", color: "var(--caramel)", opacity: 0.5 }}>·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
