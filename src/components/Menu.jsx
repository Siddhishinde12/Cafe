import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { menuData } from "../data/siteData.js";

const CATEGORIES = Object.keys(menuData);

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0]);

  const category = menuData[active];

  return (
    <section id="menu" className="menu-section">
      <div className="eyebrow reveal">
        <span className="eyebrow-line" aria-hidden="true" />
        The menu
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
        <h2 className="section-title reveal">Brewed to spec,<br />not to guess.</h2>
        <Link
          to="/menu"
          className="btn btn-outline reveal"
          style={{ marginBottom: "36px" }}
        >
          Full menu <ArrowRight size={14} />
        </Link>
      </div>

      {/* Category tabs */}
      <div className="menu-tabs" role="tablist">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`menu-tab${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Category description */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--ink-muted)",
        letterSpacing: "0.06em",
        padding: "14px 6px 0",
        minHeight: "32px",
        transition: "opacity 0.3s ease",
      }}>
        {category.description}
      </p>

      {/* Column headers */}
      <div className="menu-list-header" aria-hidden="true">
        <span>Cup</span>
        <span>Ratio · Temp</span>
        <span>Brew time</span>
        <span style={{ textAlign: "right" }}>Price</span>
      </div>

      {/* Items — key on active so list re-animates on tab switch */}
      <div key={active} role="tabpanel">
        {category.items.map((item, i) => (
          <div
            key={item.name}
            className="menu-item"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Name + notes */}
            <div>
              <div className="menu-item-name">{item.name}</div>
              <div className="menu-item-notes">{item.notes}</div>
            </div>

            {/* Ratio / temp */}
            <div className="menu-item-mono">
              {item.ratio !== "—" ? `${item.ratio} · ${item.temp}` : "—"}
            </div>

            {/* Brew time */}
            <div className="menu-item-mono">
              {item.time !== "—" ? item.time : "—"}
            </div>

            {/* Price */}
            <div className="menu-item-price">{item.price}</div>
          </div>
        ))}
      </div>

      <p className="menu-footer-note">
        — board rewritten by hand each morning · ask what's brewing today —
      </p>
    </section>
  );
}
