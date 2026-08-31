import { useState, useEffect, useCallback } from "react";
import { Section } from "../ui/Section";
import { serif } from "../../data/content";

const gallery = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop",
    title: "Atendimento Personalizado"
  },
  {
    url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop",
    title: "Estrutura Completa"
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop",
    title: "Tecnologia In-Office"
  }
];

export function About({ goTo }: { goTo: (id: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextIndex = (activeIndex + 1) % gallery.length;

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % gallery.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <Section id="sobre" style={{ background: "#EAE6E1" }}>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-1/2 reveal-l relative">
          <div className="relative w-full aspect-[4/5] md:aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(30,37,50,0.1)] bg-[#1E2532]">
            {gallery.map((img, idx) => (
              <img
                key={`main-${idx}`}
                src={img.url}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ 
                  filter: "brightness(0.95)",
                  transition: "opacity 1s ease-in-out, transform 6s ease-out",
                  opacity: idx === activeIndex ? 1 : 0,
                  transform: idx === activeIndex ? "scale(1.05)" : "scale(1)",
                  zIndex: idx === activeIndex ? 10 : 0
                }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2532]/80 via-transparent to-transparent opacity-90 z-20 pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-30">
              <div className="text-white/70 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-2">
                0{activeIndex + 1} / 0{gallery.length}
              </div>
              <div className="text-white text-[1.4rem] md:text-[1.8rem] font-medium tracking-wide drop-shadow-md" style={serif}>
                {gallery[activeIndex].title}
              </div>
            </div>
          </div>

          <div 
            onClick={handleNext}
            className="absolute -bottom-6 -right-4 md:bottom-12 md:-right-10 w-32 md:w-44 aspect-[3/4] rounded-2xl border-4 border-[#EAE6E1] shadow-2xl overflow-hidden cursor-pointer group z-40"
          >
            {gallery.map((img, idx) => (
              <img
                key={`thumb-${idx}`}
                src={img.url}
                alt="Próxima foto"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transition: "opacity 0.8s ease-in-out, transform 0.8s ease-out",
                  opacity: idx === nextIndex ? 1 : 0,
                  transform: idx === nextIndex ? "scale(1)" : "scale(1.1)",
                  zIndex: idx === nextIndex ? 10 : 0
                }}
              />
            ))}
            
            <div className="absolute inset-0 bg-[#1E2532]/20 group-hover:bg-transparent transition-colors duration-500 z-20" />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 group-hover:bg-[#1E2532] transition-all duration-300 border border-white/40 group-hover:border-[#1E2532]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-6 lg:mt-0">
          <div className="reveal">
            <span className="eyebrow">A Clínica</span>
          </div>
          <h2
            className="reveal mt-2"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#1E2532", marginBottom: "1.5rem" }}
          >
            Cada paciente é <br/>um universo de possibilidades.
          </h2>
          
          <p className="reveal" style={{ color: "#7A8593", lineHeight: 1.85, marginBottom: "1.2rem", fontWeight: 300 }}>
            Na INB, não vemos apenas um caso. Nós entendemos as dores, alegrias e expectativas antes de apresentar o melhor plano de tratamento para você.
          </p>
          <p className="reveal" style={{ color: "#7A8593", lineHeight: 1.85, marginBottom: "2.5rem", fontWeight: 300 }}>
            Aqui, a paixão por <strong className="font-medium text-[#1E2532]">sorrisos alinhados e saudáveis</strong> vem de berço. Com uma equipe especializada, desde a odontopediatria até a reabilitação oral e DTM, cuidamos da saúde da sua família como um todo.
          </p>
          
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4rem", marginBottom: "2.5rem" }}>
            {[
              ["Alinhadores Próprios", "Produção in-office para mais praticidade."],
              ["Especialistas", "Equipe referência em reabilitação e DTM."],
              ["Odontopediatria", "Cuidado lúdico desde os 2 meses de idade."],
              ["Localização Premium", "No coração de Águas Claras (Led Office)."],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#C5A570", opacity: 1, marginTop: "0.45rem", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: ".875rem", fontWeight: 500, color: "#1E2532" }}>{t}</div>
                  <div style={{ fontSize: ".78rem", color: "#7A8593", marginTop: 2, lineHeight: 1.6, fontWeight: 300 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal mt-2">
            <button className="btn-primary" onClick={() => goTo("contato")}>
              Agendar uma visita
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
}