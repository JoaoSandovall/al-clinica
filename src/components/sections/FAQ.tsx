import { useState } from "react";
import { Section } from "../ui/Section";
import { faqs } from "../../data/content";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <Section>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
           <h2 className="reveal" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "clamp(2rem, 3vw, 2.8rem)", letterSpacing: "-0.03em", color: "#2B1C1D" }}>
             Perguntas Frequentes
           </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal faq-item">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                <span style={{ fontSize: ".95rem", fontWeight: 500, color: "#2B1C1D", paddingRight: "1.5rem" }}>{faq.q}</span>
                <span style={{ color: "#5C3136", fontSize: "1.25rem", opacity: .65, flexShrink: 0, transition: "transform .3s ease", transform: activeFaq === i ? "rotate(45deg)" : "none", display: "block" }}>
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