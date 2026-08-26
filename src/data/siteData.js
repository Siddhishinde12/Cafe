/* ============================================================
   KESSEL COFFEE — Site Data
   ============================================================ */

export const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Menu",         href: "#menu" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Visit",        href: "#contact" },
];

/* ── Today's featured pour ─────────────────────────────── */
export const todaysPour = {
  number:  "No. 041",
  name:    "Yirgacheffe, Gedeb",
  origin:  "Ethiopia · Washed · 1,900 m",
  ratio:   "1 : 16",
  temp:    "94 °C",
  bloom:   "0:35",
  total:   "2:45",
  tasting: "Bergamot · White Peach · Jasmine",
};

/* ── Menu data ─────────────────────────────────────────── */
export const menuData = {
  Filter: {
    description: "Hand-poured to order — ratio, temp, and time on the card.",
    items: [
      {
        name:  "Yirgacheffe, Gedeb",
        notes: "bergamot · white peach · jasmine",
        ratio: "1:16",
        temp:  "94 °C",
        time:  "2:45",
        price: "₹280",
        tags:  ["washed", "single origin"],
      },
      {
        name:  "Huila, Colombia",
        notes: "red apple · brown sugar · clove",
        ratio: "1:15",
        temp:  "93 °C",
        time:  "3:00",
        price: "₹260",
        tags:  ["honey process"],
      },
      {
        name:  "Chikmagalur Estate",
        notes: "jaggery · toasted almond · cocoa",
        ratio: "1:16",
        temp:  "92 °C",
        time:  "2:50",
        price: "₹240",
        tags:  ["natural", "estate"],
      },
    ],
  },
  Espresso: {
    description: "Pulled on a La Marzocco Linea — 27 seconds, no rush.",
    items: [
      {
        name:  "House Blend No. 4",
        notes: "hazelnut · caramel · dark cherry",
        ratio: "1:2",
        temp:  "93 °C",
        time:  "0:27",
        price: "₹180",
        tags:  ["house blend"],
      },
      {
        name:  "Cortado",
        notes: "espresso + steamed milk, equal parts",
        ratio: "1:1",
        temp:  "93 °C",
        time:  "0:27",
        price: "₹220",
        tags:  [],
      },
      {
        name:  "Piccolo",
        notes: "ristretto shot · silked whole milk",
        ratio: "1:1.5",
        temp:  "93 °C",
        time:  "0:22",
        price: "₹200",
        tags:  [],
      },
      {
        name:  "Cardamom Oat Latte",
        notes: "house cardamom syrup · always oat · not too sweet",
        ratio: "1:3",
        temp:  "65 °C",
        time:  "0:30",
        price: "₹260",
        tags:  ["seasonal favourite"],
      },
    ],
  },
  Seasonal: {
    description: "Rotates with harvest. Ask what's on today.",
    items: [
      {
        name:  "Honey Barrel Pour",
        notes: "anaerobic honey process · stone fruit · brown sugar",
        ratio: "1:16",
        temp:  "94 °C",
        time:  "2:55",
        price: "₹320",
        tags:  ["limited", "anaerobic"],
      },
      {
        name:  "Cold Brew Concentrate",
        notes: "18 hr steep · dark chocolate · fig · zero dilution",
        ratio: "1:8",
        temp:  "room",
        time:  "18 hr",
        price: "₹260",
        tags:  ["cold"],
      },
      {
        name:  "Iced Shakerato",
        notes: "double espresso shaken with ice · silk crema",
        ratio: "1:2",
        temp:  "cold",
        time:  "0:30",
        price: "₹240",
        tags:  ["iced"],
      },
    ],
  },
  Kitchen: {
    description: "Baked at 06:00, gone by ten most days.",
    items: [
      {
        name:  "Brown-Butter Rye Scone",
        notes: "baked fresh at 6am — gone by 10 most days",
        ratio: "—",
        temp:  "—",
        time:  "—",
        price: "₹140",
        tags:  ["baked daily"],
      },
      {
        name:  "Miso Caramel Cookie",
        notes: "salty-sweet · our most-requested recipe",
        ratio: "—",
        temp:  "—",
        time:  "—",
        price: "₹120",
        tags:  [],
      },
      {
        name:  "Banana Cardamom Loaf",
        notes: "house cardamom butter · walnuts",
        ratio: "—",
        temp:  "—",
        time:  "—",
        price: "₹160",
        tags:  ["vegan"],
      },
    ],
  },
};

/* ── Stats ─────────────────────────────────────────────── */
export const stats = [
  { value: "07:00", label: "opening pour,\ndaily" },
  { value: "3",     label: "origins on\nrotation" },
  { value: "2019",  label: "first cup\nserved" },
  { value: "1,200", label: "brews logged\nthis year" },
  { value: "100%",  label: "direct trade\nsourcing" },
  { value: "6",     label: "seats at\nthe bar" },
];

/* ── Testimonials ──────────────────────────────────────── */
export const testimonials = [
  {
    quote:
      "The only place in the city that will tell you the exact ratio in your cup without being asked. It shows in the taste.",
    name:   "A. Menon",
    role:   "regular · Tuesday filter",
    rating: 5,
  },
  {
    quote:
      "Sat at the bar and watched them dial in a new origin for twenty minutes before serving it. That's the whole draw.",
    name:   "R. Iyer",
    role:   "first-time visitor",
    rating: 5,
  },
  {
    quote:
      "Quiet, precise, unfussy. It's rare to find a café that treats coffee like a craft instead of a backdrop.",
    name:   "S. Fernandes",
    role:   "regular · Saturday espresso",
    rating: 5,
  },
];

/* ── Gallery tiles ─────────────────────────────────────── */
export const galleryTiles = [
  { label: "The bar",              title: "Where every cup begins",       tone: "espresso",   pattern: "dots" },
  { label: "Roast log",            title: "Every batch, written down",    tone: "caramel",    pattern: "lines" },
  { label: "Pour station",         title: "Kettle, scale, patience",      tone: "sage",       pattern: "grid" },
  { label: "Green stock",          title: "Arrived this week from Huila", tone: "sage-deep",  pattern: "dots" },
  { label: "Cupping table",        title: "Tuesday morning ritual",       tone: "parchment",  pattern: "grid" },
  { label: "East window seating",  title: "Six seats, natural light",     tone: "cream-dark", pattern: "lines" },
];

/* ── Bean origins (for about / sourcing section) ───────── */
export const origins = [
  {
    country: "Ethiopia",
    region:  "Yirgacheffe, Konga",
    process: "Washed",
    altitude: "2,000 m",
    notes:   "Jasmine · Bergamot · Stone fruit",
    copy:    "Grown at 2,000 m by the Konga cooperative. Bright and floral — the one people come back for.",
  },
  {
    country: "Colombia",
    region:  "Huila, Pitalito",
    process: "Honey",
    altitude: "1,800 m",
    notes:   "Brown sugar · Red apple · Cocoa",
    copy:    "Family-run lot, honey-processed. Our default drip — round, sweet, forgiving of a rough morning.",
  },
  {
    country: "India",
    region:  "Chikmagalur Estate",
    process: "Natural",
    altitude: "1,100 m",
    notes:   "Jaggery · Toasted almond · Cocoa",
    copy:    "Single estate, shade-grown under silver oak. What carries the house blend.",
  },
];
