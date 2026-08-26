import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Services() {
  return (
    <Section id="servicos" style={{ padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 560, marginBottom: "5rem" }}>
          <div className="reveal"><span className="eyebrow">Tratamentos</span></div>
          <h2
            className="reveal"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#1A1A18", marginBottom: "1.25rem" }}
          >
            Cada sorriso merece <em style={{ color: "#1B3A4B" }}>atenção única</em>
          </h2>
          <p className="reveal" style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>
            Do diagnóstico ao acompanhamento pós-tratamento, cuidamos de você com protocolos clínicos validados e equipamentos de última geração.
          </p>
        </div>
        <div
          className="stagger-children"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}
        >
          {services.map((s) => (
            <div key={s.title} className="reveal service-card" style={{ padding: "2rem 2rem 1.75rem", cursor: "pointer", position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: "1.6rem", color: "#1B3A4B", opacity: .6, marginBottom: "1.5rem", display: "inline-block", transition: "transform .3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {s.icon}
              </div>
              <h3 style={{ ...serif, fontWeight: 500, fontSize: "1.2rem", color: "#1A1A18", marginBottom: ".6rem" }}>{s.title}</h3>
              <p style={{ color: "#5A6778", fontSize: ".9rem", lineHeight: 1.8, fontWeight: 300 }}>{s.desc}</p>
              <div style={{ marginTop: "1.4rem", fontSize: ".72rem", fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "#1B3A4B", display: "flex", alignItems: "center", gap: 6, opacity: 0, transition: "opacity .3s ease" }}
                className="card-cta">
                Saiba mais <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}