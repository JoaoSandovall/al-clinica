import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
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
      className={`transition-all duration-300 ${menuOpen ? "bg-[#FDFBF9]" : scrolled ? "header-scrolled" : ""}`}
    >
      <div className="px-6 md:px-10 max-w-[1280px] mx-auto flex items-center justify-between h-[4.75rem]">
        <div
          className="anim-fade-down flex items-center gap-3 cursor-pointer select-none shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <div className="w-8 h-8 rounded-md bg-[#5C3136] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" width={15} height={15} stroke="#FFFFFF" strokeWidth="1.8">
              <path d="M12 2C8.5 2 6 5 6 8c0 2.5.8 4.5 2 6l1 7h6l1-7c1.2-1.5 2-3.5 2-6 0-3-2.5-6-6-6z" />
            </svg>
          </div>
          <div>
            <span style={{ ...serif, fontWeight: 400, fontSize: "1.2rem", letterSpacing: ".06em", color: "#5C3136", display: "block", lineHeight: 1 }}>
              Lumina
            </span>
            <span style={{ fontSize: ".58rem", letterSpacing: ".22em", textTransform: "uppercase", color: "#8A97A5", fontWeight: 300 }}>
              Odontologia
            </span>
          </div>
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
          <button onClick={() => handleNav("contato")} className="btn-primary anim-fade-down delay-700">
            Agendar consulta
          </button>
        </div>

        <div className="flex md:hidden relative z-[60] anim-fade-down -mr-2">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#5C3136" size={26} rounded label="Mostrar menu" />
        </div>
      </div>

      <div
        className="md:hidden absolute left-0 w-full bg-[#FDFBF9] overflow-hidden transition-all duration-300 ease-in-out border-b border-[rgba(92,49,54,.05)] shadow-2xl"
        style={{ top: "4.75rem", maxHeight: menuOpen ? "600px" : "0", opacity: menuOpen ? 1 : 0 }}
      >
        <div style={{ padding: "1.5rem 1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {navLinks.map((label, i) => (
            <button
              key={label}
              onClick={() => handleNav(navIds[i])}
              style={{ textAlign: "left", color: "#5C3136", fontWeight: 500, fontSize: "1.05rem", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", padding: "0.5rem 0" }}
            >
              {label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => handleNav("contato")} style={{ marginTop: "0.5rem", width: "100%", padding: "1rem" }}>
            Agendar consulta
          </button>
        </div>
      </div>
    </header>
  );
}