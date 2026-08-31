import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { serif, globalData } from "../../data/content";

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    if (id === "/resultados") window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
    else goTo(id);
    setMenuOpen(false);
  };

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, width: "100%", zIndex: 9999 }}
      className={`transition-all duration-300 ${menuOpen ? "bg-[var(--c-bg)]" : scrolled ? "header-scrolled" : ""}`}
    >
      <div className="px-6 md:px-10 max-w-[1280px] mx-auto flex items-center justify-between h-[5rem]">
        <div className="anim-fade-down flex items-center gap-3 cursor-pointer select-none shrink-0" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}>
          <div className="flex items-center justify-center shrink-0 border border-[var(--c-accent)] rounded-full w-11 h-11 bg-white shadow-sm">
            <svg viewBox="0 0 100 100" width={26} height={26}>
              <text x="50%" y="65%" textAnchor="middle" fill="var(--c-primary)" fontSize="58" fontFamily="Georgia, serif" letterSpacing="-4">
                {globalData.clinica.logoLetras.l1}<tspan fill="var(--c-accent)">{globalData.clinica.logoLetras.l2}</tspan>{globalData.clinica.logoLetras.l3}
              </text>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span style={{ ...serif, fontWeight: 500, fontSize: "1.3rem", letterSpacing: "0.02em", color: "var(--c-text-main)", display: "block", lineHeight: 1 }}>
              {globalData.clinica.nome}
            </span>
            <span style={{ fontSize: ".55rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--c-text-muted)", fontWeight: 400, marginTop: "2px" }}>
              {globalData.clinica.subtitulo}
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {globalData.nav.links.map((label, i) => (
            <button key={label} onClick={() => handleNav(globalData.nav.ids[i])} className={`nav-link anim-fade-down delay-${(i + 1) * 100 + 100}`}>
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => handleNav("contato")} className="btn-primary anim-fade-down delay-700">
            Agendar consulta
          </button>
        </div>

        <div className="flex md:hidden relative z-[60] anim-fade-down -mr-2">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="var(--c-primary)" size={26} rounded label="Mostrar menu" />
        </div>
      </div>

      <div
        className="md:hidden absolute left-0 w-full bg-[var(--c-bg)] shadow-2xl overflow-hidden"
        style={{ top: "5rem", maxHeight: menuOpen ? "500px" : "0", opacity: menuOpen ? 1 : 0, borderBottom: menuOpen ? "1px solid rgba(var(--c-primary-rgb),.05)" : "none", transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease" }}
      >
        <div style={{ padding: "1.5rem 1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {globalData.nav.links.map((label, i) => (
            <button
              key={label} onClick={() => handleNav(globalData.nav.ids[i])}
              style={{ textAlign: "left", color: "var(--c-text-main)", fontWeight: 500, fontSize: "1.1rem", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", padding: "0.5rem 0", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(15px)", transition: "opacity 0.4s ease, transform 0.4s ease", transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
            >
              {label}
            </button>
          ))}
          <button 
            className="btn-primary" onClick={() => handleNav("contato")} 
            style={{ marginTop: "0.5rem", width: "100%", padding: "1rem", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(15px)", transition: "opacity 0.4s ease, transform 0.4s ease", transitionDelay: menuOpen ? `${100 + globalData.nav.links.length * 60}ms` : "0ms" }}
          >
            Agendar consulta
          </button>
        </div>
      </div>
    </header>
  );
}