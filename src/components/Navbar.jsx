import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteData.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Kessel<span>.</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="navbar-right">
          <span className="navbar-hours">
            <span className="navbar-dot" aria-hidden="true" />
            07:00 – 19:00
          </span>

          <Link to="/menu" className="btn btn-primary navbar-cta">
            View menu
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/menu"
            className="btn btn-primary"
            style={{ marginTop: "16px", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            Full menu
          </Link>
        </nav>
      )}
    </header>
  );
}
