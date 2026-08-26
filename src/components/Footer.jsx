import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <Link to="/" className="footer-logo">
            Kessel<span>.</span>
          </Link>
          <p className="footer-tagline">
            A six-seat filter bar and small-batch roastery in Koregaon Park,
            Pune. Every cup logged. Every origin traced.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            {[
              { href: "https://instagram.com/kessel.coffee", Icon: Instagram, label: "Instagram" },
              { href: "https://twitter.com/kesselcoffee", Icon: Twitter, label: "Twitter" },
              { href: "mailto:hello@kesselcoffee.in", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250,248,243,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(250,248,243,0.5)",
                  transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--caramel-light)";
                  e.currentTarget.style.color = "var(--caramel-light)";
                  e.currentTarget.style.background = "rgba(196,124,43,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,248,243,0.15)";
                  e.currentTarget.style.color = "rgba(250,248,243,0.5)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div>
          <div className="footer-col-title">Visit</div>
          <ul className="footer-list">
            <li className="footer-list-item">14 Ashwood Lane</li>
            <li className="footer-list-item">Koregaon Park, Pune 411 001</li>
            <li className="footer-list-item" style={{ marginTop: "8px" }}>
              <a href="tel:+912012345678">(020) 1234-5678</a>
            </li>
            <li className="footer-list-item">
              <a href="mailto:hello@kesselcoffee.in">hello@kesselcoffee.in</a>
            </li>
          </ul>
        </div>

        {/* Hours + links */}
        <div>
          <div className="footer-col-title">Hours</div>
          <ul className="footer-list">
            <li className="footer-list-item">Tue – Fri · 07:00 – 19:00</li>
            <li className="footer-list-item">Saturday · 07:00 – 20:00</li>
            <li className="footer-list-item">Sunday · 08:00 – 18:00</li>
            <li className="footer-list-item" style={{ marginTop: "8px", opacity: 0.5, fontSize: "12px" }}>
              Closed Mondays
            </li>
          </ul>

          <div className="footer-col-title" style={{ marginTop: "28px" }}>Menu</div>
          <ul className="footer-list">
            {["Filter", "Espresso", "Seasonal", "Kitchen"].map((cat) => (
              <li key={cat} className="footer-list-item">
                <Link to="/menu">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span>© {year} Kessel Coffee Bar · All rights reserved</span>
        <span>Brewed daily since 2019</span>
      </div>
    </footer>
  );
}
