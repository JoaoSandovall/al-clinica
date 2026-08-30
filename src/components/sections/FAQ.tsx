import { useState } from "react";
import { Section } from "../ui/Section";
import { faqs } from "../../data/content";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <Section>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4.5rem" }}>
           <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "clamp(2rem, 3vw, 2.8rem)", letterSpacing: "-0.03em", color: "#2B1C1D" }}>
             Perguntas Frequentes
           </h2>
        </div>
        
        <div className="stagger-children">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="reveal faq-item"
              style={{ borderBottom: "1px solid rgba(92,49,54,.1)" }}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                style={{ 
                  width: "100%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  padding: "1.75rem 0", 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  textAlign: "left"
                }}
              >
                <span style={{ 
                  fontSize: "1.05rem", 
                  fontWeight: activeFaq === i ? 600 : 500, 
                  color: activeFaq === i ? "#5C3136" : "#2B1C1D", 
                  paddingRight: "1.5rem",
                  transition: "color 0.3s ease"
                }}>
                  {faq.q}
                </span>
                <span style={{ 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5C3136", 
                  opacity: activeFaq === i ? 1 : 0.5, 
                  flexShrink: 0, 
                  transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease", 
                  transform: activeFaq === i ? "rotate(135deg)" : "rotate(0deg)" 
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>
              
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateRows: activeFaq === i ? "1fr" : "0fr", 
                  transition: "grid-template-rows 0.5s cubic-bezier(0.22, 1, 0.36, 1)" 
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p style={{ 
                    paddingBottom: "1.75rem", 
                    color: "#5A6778", 
                    fontSize: ".95rem", 
                    lineHeight: 1.8, 
                    fontWeight: 300,
                    opacity: activeFaq === i ? 1 : 0,
                    transform: activeFaq === i ? "translateY(0)" : "translateY(-10px)",
                    transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}