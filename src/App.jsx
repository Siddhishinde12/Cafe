import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";

/* ── Scroll to top on route change ────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* ── Page entrance animation ───────────────────────────── */
function PageTransition({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.animation = "none";
    el.offsetHeight; // reflow
    el.style.animation = "";
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}

/* ── Intersection Observer reveal system ───────────────── */
function RevealEffect() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay lets the DOM settle after route change
    const timer = setTimeout(() => {
      const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
      const els = document.querySelectorAll(`${selectors}:not(.is-visible)`);

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RevealEffect />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="menu"
            element={
              <PageTransition>
                <MenuPage />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
