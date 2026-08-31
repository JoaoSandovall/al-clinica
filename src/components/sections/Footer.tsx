import { serif, services } from "../../data/content";

export function Footer() {
  return (
    <footer style={{ background: "#2B1C1D" }} className="pt-24 pb-10 px-6 md:px-10">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-2">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div style={{ width: 28, height: 28, borderRadius: 5, background: "#D49A89", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" fill="none" width={13} height={13} stroke="#2B1C1D" strokeWidth="2">
                  <path d="M12 2C8.5 2 6 5 6 8c0 2.5.8 4.5 2 6l1 7h6l1-7c1.2-1.5 2-3.5 2-6 0-3-2.5-6-6-6z" />
                </svg>
              </div>
              <span style={{ ...serif, fontWeight: 400, fontSize: "1.2rem", letterSpacing: ".06em", color: "#FFFFFF" }}>
                Lumina Odontologia
              </span>
            </div>
            <p style={{ color: "#A8B2BC", fontSize: ".9rem", lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>
              Cuidado especializado para sorrisos que transformam vidas. São Paulo, desde 2006.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: "1.75rem" }}>
              {["In", "Fb", "Yt"].map((s) => (
                <div
                  key={s}
                  style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: ".75rem", color: "#A8B2BC", transition: "border-color .3s, color .3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D49A89"; e.currentTarget.style.color = "#D49A89"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#A8B2BC"; }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: ".68rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>
              Tratamentos
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {services.map((s) => (
                <li key={s.title} style={{ color: "#A8B2BC", fontSize: ".9rem", cursor: "pointer", fontWeight: 300, transition: "color .3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D49A89")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A8B2BC")}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontSize: ".68rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>
              Contato
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", color: "#A8B2BC", fontSize: ".9rem", fontWeight: 300 }}>
              <li>Av. Paulista, 2.001 — Bela Vista</li>
              <li>São Paulo — SP, 01310-100</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#D49A89")} onMouseLeave={(e) => (e.currentTarget.style.color = "#A8B2BC")} >(11) 3240-9900</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#D49A89")} onMouseLeave={(e) => (e.currentTarget.style.color = "#A8B2BC")} >contato@luminaodonto.com.br</li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "#717C87", fontSize: ".75rem", fontWeight: 300 }}>© 2026 Lumina Odontologia. Todos os direitos reservados.</p>
          <p style={{ color: "#717C87", fontSize: ".75rem", fontWeight: 300 }}>CRO-SP ativo | CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}