import { Section } from "../ui/Section";

export function About({ goTo }: { goTo: (id: string) => void }) {
  return (
    <Section id="sobre">
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
        className="about-grid">
        <div className="reveal-l" style={{ position: "relative" }}>
          <div style={{ borderRadius: 14, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1777331903190-341a3dd0441b?w=900&h=680&fit=crop&auto=format"
              alt="Dentista e paciente em consulta"
              style={{ width: "100%", height: 460, objectFit: "cover", display: "block", filter: "brightness(.97) saturate(.88)" }}
            />
          </div>
          <div style={{ position: "absolute", bottom: -20, right: -20, width: 100, height: 100, border: "1px solid rgba(92,49,54,.18)", borderRadius: 12, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -20, left: -20, width: 70, height: 70, border: "1px solid rgba(92,49,54,.12)", borderRadius: 8, pointerEvents: "none" }} />
        </div>
        <div>
          <h2
            className="reveal"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#2B1C1D", marginBottom: "1.5rem" }}
          >
            Mais de 18 anos de excelência clínica.
          </h2>
          <p className="reveal" style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: "1.2rem", fontWeight: 300 }}>
            A Lumina Odontologia nasceu com uma proposta clara: unir rigor técnico e cuidado humano. Nossos dentistas passam por atualização contínua em centros de referência nacionais e internacionais.
          </p>
          <p className="reveal" style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: "2.5rem", fontWeight: 300 }}>
            Equipamentos com tomografia cone beam 3D, scanner intraoral e sistema CAD/CAM permitem diagnósticos precisos e planejamentos digitais antes de qualquer procedimento.
          </p>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4rem", marginBottom: "2.5rem" }}>
            {[
              ["Tecnologia 3D", "Tomografia e scanner intraoral"],
              ["Sem surpresas", "Orçamento detalhado antes de começar"],
              ["Multiespecialista", "7 especialidades sob o mesmo teto"],
              ["Horários flexíveis", "Seg-Sáb, das 8h às 20h"],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D49A89", opacity: 1, marginTop: "0.45rem", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: ".875rem", fontWeight: 500, color: "#2B1C1D" }}>{t}</div>
                  <div style={{ fontSize: ".78rem", color: "#8A97A5", marginTop: 2, lineHeight: 1.6, fontWeight: 300 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="reveal btn-primary" onClick={() => goTo("contato")}>
            Conheça nossa estrutura
          </button>
        </div>
      </div>
    </Section>
  );
}