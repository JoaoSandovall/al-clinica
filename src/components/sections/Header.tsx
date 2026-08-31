import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navLinks, navIds } from "../../data/content";

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

  // Trava o scroll do body APENAS quando o menu mobile está aberto
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
      // Fundo sempre Azul da Sorri+, usando translúcido (header-scrolled) quando rola a tela
      className={`transition-all duration-300 ${
        menuOpen ? "bg-[#0C238A]" : scrolled ? "header-scrolled" : "bg-[#0C238A]"
      }`}
    >
      <div className="px-6 md:px-10 max-w-[1280px] mx-auto flex items-center justify-between h-[4.75rem]">
        
        <div
          className="anim-fade-down flex items-center cursor-pointer select-none shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <img 
            src="/logo-sorrimais.png" 
            alt="Sorri+ Odontologia" 
            className="h-10 md:h-12 min-w-[120px] w-auto object-contain shrink-0 rounded-lg" 
          />
        </div>

        <nav className="hidden md:flex items-center gap-9">
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
          {/* Usando o novo botão branco criado no CSS */}
          <button onClick={() => handleNav("contato")} className="btn-white anim-fade-down delay-700">
            Agendar consulta
          </button>
        </div>

        <div className="flex md:hidden relative z-[60] anim-fade-down -mr-2">
          {/* Hamburger ajustado para a cor BRANCA */}
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#FFFFFF" size={26} rounded label="Mostrar menu" />
        </div>
      </div>

      <div
        className="md:hidden absolute left-0 w-full bg-[#0C238A] shadow-2xl overflow-hidden"
        style={{ 
          top: "4.75rem", 
          maxHeight: menuOpen ? "500px" : "0", 
          opacity: menuOpen ? 1 : 0,
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,.1)" : "none",
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
                color: "#FFFFFF", // Links do mobile brancos
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
            className="btn-white" 
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