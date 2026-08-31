import { useState, useEffect, useCallback } from "react";
import { Section } from "../ui/Section";
import { serif } from "../../data/content";

// Galeria de imagens com legendas descritivas
const gallery = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop",
    title: "Recepção Premium"
  },
  {
    url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop",
    title: "Salas de Atendimento"
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop",
    title: "Tecnologia & Conforto"
  }
];

export function About({ goTo }: { goTo: (id: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextIndex = (activeIndex + 1) % gallery.length;

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % gallery.length);
  }, []);

  // Auto-play de 5 segundos
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <Section id="sobre" style={{ background: "#F6F2EF" }}>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Coluna Esquerda: Galeria com Miniatura Flutuante */}
        <div className="w-full lg:w-1/2 reveal-l relative">
          
          {/* Container da Imagem Principal */}
          <div className="relative w-full aspect-[4/5] md:aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(92,49,54,0.08)] bg-[#2B1C1D]">
            {gallery.map((img, idx) => (
              <img
                key={`main-${idx}`}
                src={img.url}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ 
                  filter: "brightness(0.95)",
                  // Transição suave: o Fade dura 1s, mas o Zoom (scale) dura 6s criando o efeito contínuo
                  transition: "opacity 1s ease-in-out, transform 6s ease-out",
                  opacity: idx === activeIndex ? 1 : 0,
                  transform: idx === activeIndex ? "scale(1.05)" : "scale(1)",
                  zIndex: idx === activeIndex ? 10 : 0
                }}
              />
            ))}

            {/* Gradiente e Legenda da Imagem Principal */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C1D]/80 via-transparent to-transparent opacity-90 z-20 pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-30">
              <div className="text-white/70 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-2">
                0{activeIndex + 1} / 0{gallery.length}
              </div>
              <div className="text-white text-[1.4rem] md:text-[1.8rem] font-medium tracking-wide drop-shadow-md" style={serif}>
                {gallery[activeIndex].title}
              </div>
            </div>
          </div>

          {/* Miniatura Flutuante (Mostra a próxima foto e serve como botão) */}
          <div 
            onClick={handleNext}
            className="absolute -bottom-6 -right-4 md:bottom-12 md:-right-10 w-32 md:w-44 aspect-[3/4] rounded-2xl border-4 border-[#F6F2EF] shadow-2xl overflow-hidden cursor-pointer group z-40"
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
            
            {/* Máscara e Ícone Interativo na Miniatura */}
            <div className="absolute inset-0 bg-[#5C3136]/20 group-hover:bg-transparent transition-colors duration-500 z-20" />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 group-hover:bg-[#5C3136] transition-all duration-300 border border-white/40 group-hover:border-[#5C3136]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Coluna Direita: Textos Editoriais */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-6 lg:mt-0">
          <div className="reveal">
            <span className="eyebrow">A Clínica</span>
          </div>
          <h2
            className="reveal mt-2"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#2B1C1D", marginBottom: "1.5rem" }}
          >
            Mais de 18 anos de excelência clínica.
          </h2>
          
          <p className="reveal" style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: "1.2rem", fontWeight: 300 }}>
            A Lumina Odontologia nasceu com uma proposta clara: unir <strong className="font-medium text-[#5C3136]">rigor técnico e cuidado humano</strong>. Nossos dentistas passam por atualização contínua em <strong className="font-medium text-[#5C3136]">centros de referência</strong> nacionais e internacionais.
          </p>
          <p className="reveal" style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: "2.5rem", fontWeight: 300 }}>
            Equipamentos com <strong className="font-medium text-[#5C3136]">tomografia cone beam 3D e scanner intraoral</strong> permitem diagnósticos precisos e <strong className="font-medium text-[#5C3136]">planejamentos digitais</strong> antes de qualquer procedimento.
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