import { serif, services } from "../../data/content";

export function Footer() {
  return (
    <footer style={{ background: "#1E2532" }} className="pt-24 pb-10 px-6 md:px-10">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-2">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div className="flex items-center justify-center shrink-0 border border-[#C5A570] rounded-full w-9 h-9 bg-white shadow-sm">
                <svg viewBox="0 0 100 100" width={22} height={22}>
                  <text x="50%" y="65%" textAnchor="middle" fill="#1E2532" fontSize="58" fontFamily="Georgia, serif" letterSpacing="-4">
                    I<tspan fill="#C5A570">N</tspan>B
                  </text>
                </svg>
              </div>
              <span style={{ ...serif, fontWeight: 400, fontSize: "1.2rem", letterSpacing: ".02em", color: "#FFFFFF" }}>
                INB Odonto
              </span>
            </div>
            <p style={{ color: "#7A8593", fontSize: ".9rem", lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>
              Onde seu sorriso é a nossa paixão. Atendimento personalizado e tecnologia em Águas Claras.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: "1.75rem" }}>
              {["In", "Fb", "Yt"].map((s) => (
                <div
                  key={s}
                  style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: ".75rem", color: "#7A8593", transition: "border-color .3s, color .3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C5A570"; e.currentTarget.style.color = "#C5A570"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#7A8593"; }}
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
              {services.slice(0, 5).map((s) => (
                <li key={s.title} style={{ color: "#7A8593", fontSize: ".9rem", cursor: "pointer", fontWeight: 300, transition: "color .3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A570")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8593")}
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
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", color: "#7A8593", fontSize: ".9rem", fontWeight: 300 }}>
              <li>Led Office Torre 2, Sala 210</li>
              <li>Águas Claras - DF</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A570")} onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8593")} >(61) 98106-5655</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A570")} onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8593")} >inbodonto@gmail.com</li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "#7A8593", fontSize: ".75rem", fontWeight: 300 }}>© 2026 INB Odonto. Todos os direitos reservados.</p>
          <p style={{ color: "#7A8593", fontSize: ".75rem", fontWeight: 300 }}>Águas Claras — Brasília, DF</p>
        </div>
      </div>
    </footer>
  );
}