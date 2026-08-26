import { useState } from "react";
import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });

  return (
    <Section id="contato" style={{ background: "#FDFCFA" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="eyebrow">Fale conosco</span>
          <h2 style={{ ...serif, fontWeight: 400, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#1A1A18", marginTop: "1rem" }}>
            Agende sua <em style={{ color: "#1B3A4B" }}>avaliação gratuita</em>
          </h2>
          <p style={{ color: "#4A5568", fontSize: "1.05rem", fontWeight: 300, maxWidth: 500, margin: "1rem auto 0" }}>
            Preencha o formulário abaixo e um de nossos especialistas entrará em contato. A primeira consulta é sem custo.
          </p>
        </div>

        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          background: "#FFFFFF",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(27,58,75,.06)",
          border: "1px solid rgba(27,58,75,.05)"
        }}>
          
          <div style={{ background: "#1B3A4B", color: "#FDFCFA", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ ...serif, fontSize: "1.8rem", fontWeight: 400, marginBottom: "2.5rem" }}>Informações de Contato</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
                    label: "Endereço",
                    value: "Av. Paulista, 2.001 — Bela Vista\nSão Paulo — SP"
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
                    label: "Telefone",
                    value: "(11) 3240-9900"
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
                    label: "Funcionamento",
                    value: "Seg-Sex: 8h-20h\nSáb: 8h-15h"
                  }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ opacity: 0.7, marginTop: 2 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: "4rem 3rem" }}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada! Entraremos em contato em breve."); }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: ".7rem", color: "#4A5568", marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".1em" }}>Nome completo</label>
                  <input
                    type="text"
                    placeholder="Ex: Maria Oliveira"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    required
                    className="field"
                    style={{ background: "#F9F8F6", border: "none", borderBottom: "1px solid rgba(27,58,75,.1)", borderRadius: "6px 6px 0 0", padding: "1rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: ".7rem", color: "#4A5568", marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".1em" }}>Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 9 0000-0000"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    required
                    className="field"
                    style={{ background: "#F9F8F6", border: "none", borderBottom: "1px solid rgba(27,58,75,.1)", borderRadius: "6px 6px 0 0", padding: "1rem" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: ".7rem", color: "#4A5568", marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".1em" }}>Tratamento de interesse</label>
                <select
                  value={form.servico}
                  onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="field"
                  style={{ background: "#F9F8F6", border: "none", borderBottom: "1px solid rgba(27,58,75,.1)", borderRadius: "6px 6px 0 0", padding: "1rem" }}
                >
                  <option value="">Selecione uma opção...</option>
                  {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                  <option value="Outro">Ainda não sei / Outro</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: ".7rem", color: "#4A5568", marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".1em" }}>Como podemos ajudar?</label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente o motivo do agendamento..."
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="field"
                  style={{ resize: "none", background: "#F9F8F6", border: "none", borderBottom: "1px solid rgba(27,58,75,.1)", borderRadius: "6px 6px 0 0", padding: "1rem" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", flexWrap: "wrap", gap: "1.5rem" }}>
                <button type="submit" className="btn-primary" style={{ padding: "1rem 2.5rem" }}>
                  Solicitar Agendamento
                </button>
                
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "#1B3A4B", textDecoration: "none", fontWeight: 500, fontSize: "0.9rem", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Falar no WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}