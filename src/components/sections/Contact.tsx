import { useState } from "react";
import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });

  return (
    <Section id="contato" style={{ padding: "7rem 2.5rem", background: "#FDFCFA" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
        className="contact-grid">
        <div>
          <div className="reveal"><span className="eyebrow">Fale conosco</span></div>
          <h2
            className="reveal"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2rem, 3vw, 3.2rem)", color: "#1A1A18", marginBottom: "1.75rem" }}
          >
            Agende sua <em style={{ color: "#1B3A4B" }}>avaliação gratuita</em>
          </h2>
          <p className="reveal" style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: "3rem", fontWeight: 300 }}>
            Preencha o formulário e um de nossos especialistas entrará em contato em até 24 horas. A primeira consulta é sem custo.
          </p>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              ["📍", "Av. Paulista, 2.001 — Bela Vista, São Paulo — SP"],
              ["📞", "(11) 3240-9900"],
              ["⏰", "Seg-Sex: 8h-20h | Sáb: 8h-15h"],
            ].map(([icon, info]) => (
              <div key={info} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#5A6778", fontSize: ".9rem", fontWeight: 300 }}>
                <span style={{ opacity: .55, fontSize: "1rem" }}>{icon}</span>
                <span>{info}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ background: "#FFFFFF", border: "1px solid rgba(27,58,75,.09)", borderRadius: 14, padding: "2.75rem", boxShadow: "0 4px 40px rgba(27,58,75,.07)" }}>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada! Entraremos em contato em breve."); }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {[
              { key: "nome", label: "Nome completo", type: "text", placeholder: "Maria Oliveira" },
              { key: "telefone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 9 0000-0000" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label style={{ display: "block", fontSize: ".68rem", color: "#8A97A5", marginBottom: 8, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase" }}>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  required
                  className="field"
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: ".68rem", color: "#8A97A5", marginBottom: 8, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase" }}>Tratamento de interesse</label>
              <select
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className="field"
              >
                <option value="">Selecione um tratamento</option>
                {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: ".68rem", color: "#8A97A5", marginBottom: 8, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase" }}>Mensagem (opcional)</label>
              <textarea
                rows={3}
                placeholder="Descreva brevemente o que você precisa..."
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="field"
                style={{ resize: "none" }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 4 }}>
              Enviar agendamento
            </button>
            <p style={{ textAlign: "center", fontSize: ".78rem", color: "#8A97A5", fontWeight: 300 }}>
              Ou fale direto pelo{" "}
              <a href="https://wa.me/5511999999999" style={{ color: "#1B3A4B", fontWeight: 500, textDecoration: "none" }}>
                WhatsApp
              </a>
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}