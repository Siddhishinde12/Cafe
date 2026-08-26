import { useState } from "react";
import { MapPin, Clock, Phone, Instagram, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        {/* ── Left: info ──────────────────────────────────── */}
        <div className="reveal-left">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" aria-hidden="true" />
            Come find us
          </div>

          <h2 className="contact-title">Come sit<br />at the bar.</h2>

          <div className="contact-details">
            <div className="contact-row">
              <div className="contact-icon-wrap" aria-hidden="true">
                <MapPin size={16} />
              </div>
              <div>
                <span className="contact-row-label">Address</span>
                <div className="contact-row-text">
                  <a
                    href="https://maps.google.com/?q=14+Ashwood+Lane+Koregaon+Park+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    14 Ashwood Lane, Koregaon Park
                    <br />
                    Pune 411 001
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon-wrap" aria-hidden="true">
                <Clock size={16} />
              </div>
              <div>
                <span className="contact-row-label">Hours</span>
                <div className="contact-row-text">
                  Tuesday – Sunday, 07:00 – 19:00
                  <br />
                  <span style={{ fontSize: "13px", opacity: 0.65 }}>
                    Closed Mondays for cupping &amp; roasting
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon-wrap" aria-hidden="true">
                <Phone size={16} />
              </div>
              <div>
                <span className="contact-row-label">Phone</span>
                <div className="contact-row-text">
                  <a href="tel:+912012345678">(020) 1234-5678</a>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://instagram.com/kessel.coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            <Instagram size={15} />
            @kessel.coffee
            <ArrowUpRight size={13} />
          </a>

          {/* Decorative map */}
          <div className="contact-map" aria-hidden="true">
            <div className="map-ring" />
            <div className="map-pin">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s8-8 8-13A8 8 0 0 0 4 9c0 5 8 13 8 13Z"
                  fill="var(--caramel)"
                />
                <circle cx="12" cy="9" r="2.8" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Right: form ──────────────────────────────────── */}
        <div className="reveal-right">
          {submitted ? (
            <div className="form-success">
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>✓</div>
              <strong style={{ display: "block", marginBottom: "8px", fontSize: "16px" }}>
                Message received.
              </strong>
              We'll write back within a day.
              <br /><br />
              Come say hello in person — the bar's open every morning at 07:00.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontStyle: "italic",
                color: "#fff",
                marginBottom: "8px",
              }}>
                Send us a note
              </div>
              <p style={{
                fontSize: "14px",
                color: "rgba(250,248,243,0.5)",
                marginBottom: "24px",
                lineHeight: "1.6",
              }}>
                For reservations, roastery inquiries, or just to say hello.
              </p>

              <div className="form-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="btn btn-caramel"
                disabled={loading}
                style={{ marginTop: "8px", position: "relative" }}
              >
                {loading ? (
                  <span style={{
                    display: "inline-block",
                    width: "14px",
                    height: "14px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spinSlow 0.7s linear infinite",
                  }} />
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
