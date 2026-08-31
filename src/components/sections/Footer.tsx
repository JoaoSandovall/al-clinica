import { serif, globalData } from "../../data/content";

export function Footer() {
  return (
    <footer style={{ background: "var(--c-primary)" }} className="pt-24 pb-10 px-6 md:px-10">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div className="flex items-center justify-center shrink-0 border border-[var(--c-accent)] rounded-full w-9 h-9 bg-white shadow-sm">
                <svg viewBox="0 0 100 100" width={22} height={22}>
                  <text x="50%" y="65%" textAnchor="middle" fill="var(--c-primary)" fontSize="58" fontFamily="Georgia, serif" letterSpacing="-4">
                    {globalData.clinica.logoLetras.l1}<tspan fill="var(--c-accent)">{globalData.clinica.logoLetras.l2}</tspan>{globalData.clinica.logoLetras.l3}
                  </text>
                </svg>
              </div>
              <span style={{ ...serif, fontWeight: 400, fontSize: "1.2rem", letterSpacing: ".02em", color: "#FFFFFF" }}>{globalData.clinica.nome}</span>
            </div>
            <p style={{ color: "var(--c-text-muted)", fontSize: ".9rem", lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>{globalData.footer.sobre}</p>
            <div style={{ display: "flex", gap: 8, marginTop: "1.75rem" }}>
              {["In", "Fb", "Yt"].map((s) => (
                <div key={s} style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: ".75rem", color: "var(--c-text-muted)", transition: "border-color .3s, color .3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--c-accent)"; e.currentTarget.style.color = "var(--c-accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--c-text-muted)"; }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: ".68rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>{globalData.footer.title_tratamentos}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {globalData.services.list.slice(0, 5).map((s) => (
                <li key={s.title} style={{ color: "var(--c-text-muted)", fontSize: ".9rem", cursor: "pointer", fontWeight: 300, transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: ".68rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>{globalData.footer.title_contato}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", color: "var(--c-text-muted)", fontSize: ".9rem", fontWeight: 300 }}>
              <li>{globalData.clinica.endereco.edificio}</li>
              <li>{globalData.clinica.endereco.bairroCidade}</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")} >{globalData.clinica.contato.telefoneLabel}</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")} >{globalData.clinica.contato.emailLabel}</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "var(--c-text-muted)", fontSize: ".75rem", fontWeight: 300 }}>{globalData.footer.direitos}</p>
          <p style={{ color: "var(--c-text-muted)", fontSize: ".75rem", fontWeight: 300 }}>{globalData.footer.registro}</p>
        </div>
      </div>
    </footer>
  );
}