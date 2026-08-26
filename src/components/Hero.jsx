import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { todaysPour } from "../data/siteData.js";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const cardRef = useRef(null);
  const heroRef = useRef(null);

  /* ── 3D tilt on pour card ──────────────────────────── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotX = ((y - rect.height / 2) / rect.height) * -10;
      const rotY = ((x - rect.width / 2) / rect.width) * 10;
      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
    };
    const onLeave = () => {
      card.style.transition = "transform 0.7s cubic-bezier(0.34,1.56,0.64,1)";
      card.style.transform = "";
      setTimeout(() => { card.style.transition = ""; }, 700);
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => { card.removeEventListener("mousemove", onMove); card.removeEventListener("mouseleave", onLeave); };
  }, []);

  /* ── Parallax scroll on hero image ────────────────── */
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const imgEl = section.querySelector(".hero-bg-img");
    if (!imgEl) return;
    const onScroll = () => {
      const scrollY = window.scrollY;
      imgEl.style.transform = `scale(1.08) translateY(${scrollY * 0.28}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      {/* ── Full-bleed background image with parallax ── */}
      <div className="hero-bg" aria-hidden="true">
        <img src={heroImg} alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`hero-particle hero-particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-inner">
        {/* ── Left copy ───────────────────────────────── */}
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Filter bar &amp; roastery · est. 2019
          </div>

          <h1 className="hero-title">
            Coffee,
            <span className="hero-title-em">measured.</span>
          </h1>

          <p className="hero-sub">
            Every cup on our bar is brewed to a published ratio, temperature,
            and time — the same way we'd hand you a recipe, because that's
            exactly what it is.
          </p>

          <div className="hero-cta">
            <a href="#menu" className="btn btn-caramel">
              View the menu <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Reserve a seat
            </a>
          </div>

          <div className="hero-badges">
            {["Direct trade", "Small batch roastery", "Koregaon Park, Pune"].map((b) => (
              <span key={b} className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: pour card ────────────────────────── */}
        <div>
          {/* Coffee image above card */}
          <div className="hero-img-float">
            <img src="/images/pour_over.png" alt="Pour-over coffee" className="hero-coffee-img" />
            {/* Steam above image */}
            <svg className="hero-steam-svg" width="120" height="70" viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <path className="steam-path" d="M35 65 C 28 50, 46 36, 36 20 C 26 5, 44 -5, 36 -18" />
              <path className="steam-path" d="M60 65 C 53 50, 71 36, 61 20 C 51 5, 69 -5, 61 -18" />
              <path className="steam-path" d="M85 65 C 78 50, 96 36, 86 20 C 76 5, 94 -5, 86 -18" />
            </svg>
          </div>

          {/* 3D tilt pour card */}
          <div ref={cardRef} className="pour-card">
            <div className="pour-card-tag">
              <span>Today's pour</span>
              <span>{todaysPour.number}</span>
            </div>
            <div className="pour-card-name">{todaysPour.name}</div>
            <div className="pour-card-origin">{todaysPour.origin}</div>
            <div className="pour-card-divider" />
            <div className="pour-card-stats">
              {[
                { label: "Ratio",      val: todaysPour.ratio },
                { label: "Water temp", val: todaysPour.temp  },
                { label: "Bloom",      val: todaysPour.bloom },
                { label: "Total time", val: todaysPour.total },
              ].map(({ label, val }) => (
                <div key={label} className="pour-stat">
                  <span className="pour-stat-label">{label}</span>
                  <span className="pour-stat-value">{val}</span>
                </div>
              ))}
            </div>
            <div className="pour-card-divider" style={{ marginTop: "20px" }} />
            <div className="pour-card-tasting-label">Tasting</div>
            <div className="pour-card-tasting-value">{todaysPour.tasting}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to about section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
