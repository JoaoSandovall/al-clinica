import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { serif, navLinks, navIds } from "../../data/content";

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    if (id === "/resultados") {
      window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
    } else {
      goTo(id);
    }
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 9999,
      }}
      className={`transition-all duration-300 ${
        menuOpen ? "bg-[#F5F3F0]" : scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="px-6 md:px-10 max-w-[1280px] mx-auto flex items-center justify-between h-[5rem]">
        
        <div
          className="anim-fade-down flex items-center gap-3 cursor-pointer select-none shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          {/* Logo Tipográfica INB (Dourado e Azul Marinho) */}
          <div className="flex items-center justify-center shrink-0 border border-[#C5A570] rounded-full w-11 h-11 bg-white shadow-sm">
            <svg viewBox="0 0 100 100" width={26} height={26}>
              <text x="50%" y="65%" textAnchor="middle" fill="#1E2532" fontSize="58" fontFamily="Georgia, serif" letterSpacing="-4">
                I<tspan fill="#C5A570">N</tspan>B
              </text>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span style={{ ...serif, fontWeight: 500, fontSize: "1.3rem", letterSpacing: "0.02em", color: "#1E2532", display: "block", lineHeight: 1 }}>
              INB Odonto
            </span>
            <span style={{ fontSize: ".55rem", letterSpacing: ".15em", textTransform: "uppercase", color: "#7A8593", fontWeight: 400, marginTop: "2px" }}>
              Odontologia Especializada
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
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

        <div className="hidden md:block">
          <button onClick={() => handleNav("contato")} className="btn-primary anim-fade-down delay-700">
            Agendar consulta
          </button>
        </div>

        <div className="flex md:hidden relative z-[60] anim-fade-down -mr-2">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#1E2532" size={26} rounded label="Mostrar menu" />
        </div>
      </div>

      <div
        className="md:hidden absolute left-0 w-full bg-[#F5F3F0] shadow-2xl overflow-hidden"
        style={{ 
          top: "5rem", 
          maxHeight: menuOpen ? "500px" : "0", 
          opacity: menuOpen ? 1 : 0,
          borderBottom: menuOpen ? "1px solid rgba(30,37,50,.05)" : "none",
          transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease" 
        }}
      >
        <div style={{ padding: "1.5rem 1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {navLinks.map((label, i) => (
            <button
              key={label}
              onClick={() => handleNav(navIds[i])}
              style={{ 
                textAlign: "left", 
                color: "#1E2532", 
                fontWeight: 500, 
                fontSize: "1.1rem", 
                background: "none", 
                border: "none", 
                cursor: "pointer", 
                fontFamily: "'DM Sans', sans-serif", 
                padding: "0.5rem 0",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
              }}
            >
              {label}
            </button>
          ))}
          <button 
            className="btn-primary" 
            onClick={() => handleNav("contato")} 
            style={{ 
              marginTop: "0.5rem", 
              width: "100%", 
              padding: "1rem",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              transitionDelay: menuOpen ? `${100 + navLinks.length * 60}ms` : "0ms",
            }}
          >
            Agendar consulta
          </button>
        </div>
      </div>
    </header>
  );
}