import { serif } from "../../data/content";

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&h=1000&fit=crop&auto=format"
          alt="Clínica odontológica moderna"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.98) saturate(.82)" }}
        />
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
      </div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "9rem 2.5rem 6rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
        className="hero-grid">
        <div>
          <div className="anim-fade-down delay-200">
            <span className="eyebrow">Odontologia de excelência</span>
          </div>
          <h1
            className="anim-fade-up delay-300"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.07, letterSpacing: "-.015em", fontSize: "clamp(3rem, 5.5vw, 5.5rem)", color: "#1A1A18", marginBottom: "1.75rem" }}
          >
            Seu sorriso, <em style={{ fontStyle: "italic", color: "#1B3A4B" }}>redefinido.</em>
          </h1>
          <p className="anim-fade-up delay-400"
            style={{ color: "#4A5568", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 420, marginBottom: "2.5rem", fontWeight: 300 }}>
            Tecnologia de ponta, equipe especializada e um ambiente pensado para transformar cada consulta em uma experiência de confiança.
          </p>
          <div className="anim-fade-up delay-500" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <button onClick={() => goTo("contato")} className="btn-primary">Agendar avaliação gratuita</button>
            <button onClick={() => goTo("servicos")} className="btn-outline">Ver tratamentos</button>
          </div>
          <div className="anim-fade-up delay-700" style={{ display: "flex", gap: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(27,58,75,.14)" }}>
            {[["18+", "anos de experiência"], ["9.800+", "pacientes atendidos"], ["98%", "satisfação"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ ...serif, fontWeight: 500, fontSize: "2rem", color: "#1B3A4B", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: ".72rem", color: "#8A97A5", marginTop: 6, letterSpacing: ".05em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex" style={{ justifyContent: "center", position: "relative" }}>
          <div style={{ position: "relative", width: 320, paddingLeft: 64, paddingRight: 56 }}>
            <div style={{ position: "relative", width: "100%", height: 480 }}>
              <img
                src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=640&h=800&fit=crop&auto=format"
                alt="Paciente com sorriso saudável"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14, filter: "brightness(.96) saturate(.9)" }}
                className="anim-scale-in delay-500"
              />
              <div style={{ position: "absolute", inset: 0, borderRadius: 14, boxShadow: "inset 0 0 0 1px rgba(27,58,75,.12)" }} />
              <div
                className="stat-float"
                style={{
                  position: "absolute", top: 52, left: -64,
                  background: "rgba(253,252,250,.97)", border: "1px solid rgba(27,58,75,.1)",
                  borderRadius: 10, padding: "12px 18px",
                  boxShadow: "0 8px 32px rgba(27,58,75,.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{ ...serif, fontWeight: 500, fontSize: "1.25rem", color: "#1B3A4B" }}>4.9 ★</div>
                <div style={{ fontSize: ".7rem", color: "#8A97A5", marginTop: 2 }}>Google Reviews</div>
              </div>
              <div
                className="stat-float"
                style={{
                  position: "absolute", bottom: 72, right: -56,
                  background: "rgba(253,252,250,.97)", border: "1px solid rgba(27,58,75,.1)",
                  borderRadius: 10, padding: "12px 18px",
                  boxShadow: "0 8px 32px rgba(27,58,75,.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{ ...serif, fontWeight: 500, fontSize: "1.25rem", color: "#1B3A4B" }}>1ª</div>
                <div style={{ fontSize: ".7rem", color: "#8A97A5", marginTop: 2 }}>Consulta gratuita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anim-fade-in delay-1000" style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: .4 }}>
        <span style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#4A5568" }}>rolar</span>
        <div style={{ width: 1, height: 38, background: "linear-gradient(to bottom, #1B3A4B, transparent)" }} />
      </div>
    </div>
  );
}