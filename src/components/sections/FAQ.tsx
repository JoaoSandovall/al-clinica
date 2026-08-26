import { useState } from "react";
import { Section } from "../ui/Section";
import { serif, faqs } from "../../data/content";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <Section style={{ padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
            <span className="eyebrow">Dúvidas frequentes</span>
          </div>
          <h2
            className="reveal"
            style={{ ...serif, fontWeight: 400, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#1A1A18" }}
          >
            Perguntas e respostas
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal faq-item">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                <span style={{ fontSize: ".95rem", fontWeight: 500, color: "#1A1A18", paddingRight: "1.5rem" }}>{faq.q}</span>
                <span style={{ color: "#1B3A4B", fontSize: "1.25rem", opacity: .65, flexShrink: 0, transition: "transform .3s ease", transform: activeFaq === i ? "rotate(45deg)" : "none", display: "block" }}>
                  +
                </span>
              </button>
              <div style={{ overflow: "hidden", maxHeight: activeFaq === i ? 200 : 0, transition: "max-height .38s ease" }}>
                <p style={{ paddingBottom: "1.5rem", color: "#5A6778", fontSize: ".9rem", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}