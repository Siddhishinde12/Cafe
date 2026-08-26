import { useState, useRef, useEffect } from "react";

/* ─── coffee images ──────────────────────────────────────── */
const LATTE    = "/images/latte.png";
const POUR     = "/images/pour_over.png";

/* ─── all 8 gallery items ───────────────────────────────── */
const ITEMS = [
  { id: 0, img: POUR,  label: "Pour-over",          title: "Hand-poured to order",         wide: true  },
  { id: 1, img: LATTE, label: "Cardamom latte",      title: "Oat milk, cardamom syrup",     wide: false },
  { id: 2, img: POUR,  label: "Filter station",      title: "Kettle · Scale · Patience",    wide: false },
  { id: 3, img: LATTE, label: "Latte art",            title: "Every cup a small canvas",     wide: false },
  { id: 4, img: POUR,  label: "Single origin",        title: "Yirgacheffe, Gedeb",           wide: false },
  { id: 5, img: LATTE, label: "Oat milk texture",     title: "House-milled, silked daily",   wide: true  },
];

/* ─── single card ───────────────────────────────────────── */
function GalleryCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  /* reveal on scroll */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("gc-visible"); io.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`gc${item.wide ? " gc-wide" : ""}`}
      style={{ transitionDelay: `${index * 0.09}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={item.label}
    >
      {/* photo */}
      <img
        src={item.img}
        alt={item.label}
        className={`gc-img${hovered ? " gc-img-zoom" : ""}`}
      />

      {/* gradient overlay — darker on hover */}
      <div className={`gc-overlay${hovered ? " gc-overlay-hover" : ""}`} aria-hidden="true" />

      {/* bottom label */}
      <div className={`gc-body${hovered ? " gc-body-hover" : ""}`}>
        <span className="gc-eyebrow">{item.label}</span>
        <div className="gc-title">{item.title}</div>
      </div>

      {/* animated corner bracket on hover */}
      {hovered && <span className="gc-bracket gc-bracket-tl" aria-hidden="true" />}
      {hovered && <span className="gc-bracket gc-bracket-br" aria-hidden="true" />}
    </div>
  );
}

/* ─── auto-scroll strip ─────────────────────────────────── */
function PhotoStrip() {
  const STRIP = [
    { img: POUR,  cap: "Pour-over, single origin" },
    { img: LATTE, cap: "Cardamom oat latte"        },
    { img: POUR,  cap: "Yirgacheffe filter"        },
    { img: LATTE, cap: "Oat milk texture"          },
    { img: POUR,  cap: "Filter station"            },
    { img: LATTE, cap: "Latte art"                 },
  ];
  /* duplicate for seamless loop */
  const all = [...STRIP, ...STRIP];

  return (
    <div className="gstrip-wrap" aria-hidden="true">
      <div className="gstrip-track">
        {all.map((s, i) => (
          <div key={i} className="gstrip-card">
            <img src={s.img} alt={s.cap} className="gstrip-img" />
            <div className="gstrip-cap">{s.cap}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── main export ───────────────────────────────────────── */
export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-inner">

        {/* heading */}
        <div className="gallery-head">
          <div className="eyebrow reveal">
            <span className="eyebrow-line" aria-hidden="true" />
            Around the bar
          </div>
          <h2 className="section-title reveal" style={{ color: "var(--ink)" }}>
            A small room,{" "}
            <em style={{ fontStyle: "italic", color: "var(--caramel)" }}>
              built for paying attention.
            </em>
          </h2>
          <p className="section-sub reveal delay-1">
            Six seats, one kettle, no background music. Just coffee and whoever's behind the bar.
          </p>
        </div>

        {/* ── main grid ──────────────────────────────────── */}
        <div className="gc-grid">
          {ITEMS.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── auto-scroll photo strip ─────────────────────── */}
        <PhotoStrip />

      </div>
    </section>
  );
}
