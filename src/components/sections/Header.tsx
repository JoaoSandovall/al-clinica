import { useState, useEffect } from "react";
import { serif, navLinks, navIds } from "../../data/content";

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (id: string) => {
    goTo(id);
    setMenuOpen(false);
  };

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`transition-all duration-500 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.75rem" }}>
        {/* Logo */}
        <div
          className="anim-fade-down"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", userSelect: "none" }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 6, background: "#1B3A4B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" fill="none" width={15} height={15} stroke="#FDFCFA" strokeWidth="1.8">
              <path d="M12 2C8.5 2 6 5 6 8c0 2.5.8 4.5 2 6l1 7h6l1-7c1.2-1.5 2-3.5 2-6 0-3-2.5-6-6-6z" />
            </svg>
          </div>
          <div>
            <span style={{ ...serif, fontWeight: 400, fontSize: "1.2rem", letterSpacing: ".06em", color: "#1B3A4B", display: "block", lineHeight: 1 }}>
              Lumina
            </span>
            <span style={{ fontSize: ".58rem", letterSpacing: ".22em", textTransform: "uppercase", color: "#8A97A5", fontWeight: 300 }}>
              Odontologia
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.25rem" }} className="hidden md:flex">
          {navLinks.map((label, i) => (
            <button
              key={label}
              onClick={() => handleNav(navIds[i])}
              className={`nav-link anim-fade-down delay-${(i + 1) * 100 + 100}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={() => handleNav("contato")} className="btn-primary anim-fade-down delay-700">
            Agendar consulta
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden anim-fade-down"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 8 }}
        >
          {[0, 1, 2].map((k) => (
            <span
              key={k}
              style={{
                display: "block", width: 22, height: 1.5, background: "#1B3A4B",
                transition: "transform .3s ease, opacity .3s ease",
                transform: menuOpen && k === 0 ? "rotate(45deg) translateY(6.5px)" : menuOpen && k === 2 ? "rotate(-45deg) translateY(-6.5px)" : "none",
                opacity: menuOpen && k === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ background: "#F3F0EA", borderTop: "1px solid rgba(27,58,75,.1)", padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {navLinks.map((label, i) => (
            <button
              key={label}
              onClick={() => handleNav(navIds[i])}
              style={{ textAlign: "left", color: "#1B3A4B", fontWeight: 500, fontSize: "1rem", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
            >
              {label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => handleNav("contato")} style={{ marginTop: 8 }}>Agendar consulta</button>
        </div>
      )}
    </header>
  );
}