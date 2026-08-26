import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { menuData } from "../data/siteData.js";

export default function MenuPage() {
  return (
    <div className="menu-page">
      {/* Back link */}
      <Link
        to="/"
        className="btn btn-outline"
        style={{ marginBottom: "40px", display: "inline-flex" }}
      >
        <ArrowLeft size={15} /> Back to home
      </Link>

      {/* Hero header */}
      <div className="menu-page-hero">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          Kessel Coffee · Pune
        </div>

        <h1 className="menu-page-title">
          The full <em>board.</em>
        </h1>

        <p className="menu-page-sub">
          Every item brewed to a published ratio, temperature, and time.
          Prices include all taxes. Board updated each morning.
        </p>
      </div>

      {/* All categories */}
      <div className="menu-page-categories">
        {Object.entries(menuData).map(([category, { description, items }], ci) => (
          <div key={category} className="reveal" style={{ transitionDelay: `${ci * 0.1}s` }}>
            {/* Category heading */}
            <h2 className="menu-category-title">{category}</h2>
            <p className="menu-category-sub">{description}</p>

            {/* Items */}
            {items.map((item, ii) => (
              <div
                key={item.name}
                className="menu-page-item reveal"
                style={{ transitionDelay: `${ci * 0.1 + ii * 0.06}s` }}
              >
                <div>
                  <div className="menu-page-item-name">{item.name}</div>
                  <div className="menu-page-item-desc">{item.notes}</div>

                  {/* Brew spec tags */}
                  {item.ratio !== "—" && (
                    <div className="menu-page-item-tags">
                      <span className="menu-tag">{item.ratio}</span>
                      <span className="menu-tag">{item.temp}</span>
                      <span className="menu-tag">{item.time}</span>
                      {item.tags && item.tags.map((tag) => (
                        <span key={tag} className="menu-tag" style={{
                          background: "rgba(74,94,58,0.1)",
                          color: "var(--sage)",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="menu-page-item-price">{item.price}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{
        marginTop: "80px",
        padding: "32px",
        border: "1px dashed var(--border)",
        borderRadius: "var(--radius-md)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--ink-muted)",
          letterSpacing: "0.08em",
          lineHeight: "1.8",
        }}>
          Board is rewritten by hand each morning.<br />
          Ask whoever's on the machine what they'd order.
        </p>
        <Link
          to="/"
          className="btn btn-primary"
          style={{ marginTop: "24px", display: "inline-flex" }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
