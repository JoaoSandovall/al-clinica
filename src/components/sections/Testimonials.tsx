import { Section } from "../ui/Section";
import { serif, testimonials } from "../../data/content";

export function Testimonials() {
  return (
    <Section id="depoimentos" style={{ background: "#FDFBF9" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 520, marginBottom: "4.5rem" }}>
          <div className="reveal"><span className="eyebrow">Depoimentos</span></div>
          <h2
            className="reveal"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#2B1C1D" }}
          >
            O que nossos pacientes dizem
          </h2>
        </div>
        <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {testimonials.map((t) => (
            <div key={t.name} className="reveal test-card" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: "1.4rem" }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "#D49A89", opacity: 1, fontSize: ".9rem" }}>★</span>
                ))}
              </div>
              <p style={{ ...serif, fontStyle: "italic", fontSize: "1.08rem", lineHeight: 1.85, color: "#4A5568", marginBottom: "1.75rem" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: "1.25rem", borderTop: "1px solid rgba(92,49,54,.08)" }}>
                <img src={t.img} alt={t.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <div style={{ fontSize: ".875rem", fontWeight: 500, color: "#2B1C1D" }}>{t.name}</div>
                  <div style={{ fontSize: ".75rem", color: "#8A97A5", marginTop: 1, fontWeight: 300 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: "3.5rem", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1.75rem", background: "#FFFFFF", border: "1px solid rgba(92,49,54,.09)", borderRadius: 14, padding: "1.25rem 2.75rem", boxShadow: "0 2px 20px rgba(92,49,54,.06)" }}>
            <div>
              <div style={{ ...serif, fontWeight: 500, fontSize: "2rem", color: "#5C3136", lineHeight: 1 }}>4.9</div>
              <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "#D49A89", opacity: 1, fontSize: ".75rem" }}>★</span>)}
              </div>
            </div>
            <div style={{ width: 1, height: 36, background: "rgba(92,49,54,.1)" }} />
            <div>
              <div style={{ fontWeight: 500, fontSize: ".875rem", color: "#2B1C1D" }}>+340 avaliações</div>
              <div style={{ fontSize: ".75rem", color: "#8A97A5", marginTop: 2, fontWeight: 300 }}>no Google</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}