import { useEffect, useRef, useState } from "react";
import { stats, origins } from "../data/siteData.js";

function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const [displayed, setDisplayed] = useState("—");
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        io.disconnect();
        const numMatch = value.replace(/,/g, "").match(/^(\d+)/);
        if (!numMatch) { setDisplayed(value); return; }
        const target = parseInt(numMatch[1], 10);
        const suffix = value.slice(numMatch[0].length);
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplayed(`${Math.round(eased * target).toLocaleString("en-IN")}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-value">{displayed}</span>
      <div className="stat-label">
        {label.split("\n").map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        {/* ── Left copy ────────────────────────────────── */}
        <div className="reveal-left">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" aria-hidden="true" />
            The idea
          </div>
          <h2 className="about-title">
            We treat every cup as a small,{" "}
            <em>repeatable experiment</em>{" "}
            worth writing down.
          </h2>
          <p className="about-copy">
            Kessel started as a single scale and a notebook of failed pour-overs.
            Three years and a few hundred logged brews later, we opened a six-seat
            bar so the notebook could become a menu.
          </p>
          <p className="about-copy" style={{ marginTop: "14px" }}>
            We still log every change — new origin, new grind, new kettle — because
            the only way to make a better cup tomorrow is to know exactly what today's was.
          </p>

          <div className="about-signature">
            <div className="about-avatar" aria-hidden="true">K</div>
            <div>
              <div className="about-sig-name">Karan Mehta</div>
              <div className="about-sig-text">Founder &amp; head barista</div>
            </div>
          </div>

          {/* ── Coffee photo card ───────────────────── */}
          <div className="about-photo-wrap">
            <img
              src="/images/latte.png"
              alt="Cardamom oat latte at Kessel"
              className="about-photo"
            />
            <div className="about-photo-badge">
              <span className="about-photo-badge-text">Signature latte</span>
              <span className="about-photo-badge-sub">House cardamom syrup</span>
            </div>
          </div>

          {/* Origins */}
          <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {origins.map((o, i) => (
              <div key={o.country} className={`origin-card reveal delay-${i + 1}`}>
                <div className="origin-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9Z" stroke="var(--caramel-light)" strokeWidth="1.6" />
                    <path d="M12 4c-3 3-3 13 0 16" stroke="var(--caramel-light)" strokeWidth="1.6" />
                  </svg>
                </div>
                <div>
                  <div className="origin-meta">{o.country} · {o.process} · {o.altitude}</div>
                  <div className="origin-name">{o.region}</div>
                  <div className="origin-notes">{o.notes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: stats + photo ────────────────────── */}
        <div className="reveal-right">
          {/* Pour-over photo floating above stats */}
          <div className="about-pour-photo-wrap">
            <img
              src="/images/pour_over.png"
              alt="Pour-over coffee being prepared"
              className="about-pour-photo"
            />
            <div className="about-pour-overlay" aria-hidden="true" />
            <div className="about-pour-caption">
              <span className="eyebrow eyebrow-light" style={{ fontSize: "10px" }}>
                <span className="eyebrow-line" />
                No. 041
              </span>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontStyle: "italic", marginTop: "6px" }}>
                Yirgacheffe, Gedeb
              </div>
            </div>
          </div>

          <div className="stats-grid" style={{ marginTop: "16px" }}>
            {stats.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          {/* Rotating badge */}
          <div className="about-badge" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="100" height="100" className="about-badge-ring">
              <defs>
                <path id="circle-text-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text fill="rgba(196,124,43,0.65)" fontSize="9.5" letterSpacing="3.2" fontFamily="IBM Plex Mono, monospace">
                <textPath href="#circle-text-path">KESSEL COFFEE · PUNE · EST 2019 · </textPath>
              </text>
            </svg>
            <div className="about-badge-text">☕</div>
          </div>
        </div>
      </div>
    </section>
  );
}
