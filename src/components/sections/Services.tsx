import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Services({ goTo }: { goTo: (id: string) => void }) {
  return (
    <Section id="servicos">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Coluna Esquerda - Fixa (Sticky) */}
        <div className="lg:w-5/12 lg:sticky lg:top-32 lg:h-max">
          <div className="reveal">
            <span className="eyebrow">Especialidades</span>
          </div>
          <h2
            className="reveal mt-3"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#2B1C1D" }}
          >
            A arte e a ciência por trás de um <em style={{ color: "#5C3136", fontStyle: "italic" }}>sorriso perfeito.</em>
          </h2>
          <p className="reveal mt-6" style={{ color: "#5A6778", fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>
            Nossa clínica oferece uma abordagem integrada, combinando tecnologia de ponta com a precisão artesanal que cada tratamento exige. Da avaliação inicial ao acompanhamento contínuo.
          </p>
          
          {/* ÚNICO BOTÃO DE AGENDAMENTO (Desktop) */}
          <div className="reveal mt-10 hidden lg:block">
            <button onClick={() => goTo("contato")} className="btn-outline">
              Agendar avaliação
            </button>
          </div>
        </div>

        {/* Coluna Direita - Lista Editorial de Serviços */}
        <div className="lg:w-7/12 flex flex-col stagger-children">
          {services.map((s, index) => (
            <div 
              key={s.title}
              className="reveal group border-t border-[rgba(92,49,54,.1)] py-10 md:py-14 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                
                {/* Número e Ícone Minimalistas */}
                <div className="flex md:flex-col items-center md:items-start gap-5 md:w-[60px] shrink-0">
                  <span className="text-[0.7rem] font-medium tracking-[0.2em] text-[#A8B2BC] group-hover:text-[#D49A89] transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="text-[#5C3136] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 md:origin-left">
                    {s.icon}
                  </div>
                </div>

                {/* Texto e Conteúdo do Serviço */}
                <div className="flex-1">
                  <h3 style={{ ...serif }} className="text-2xl md:text-[1.8rem] text-[#2B1C1D] mb-4 group-hover:text-[#5C3136] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-[#5A6778] text-[0.95rem] md:text-[1.05rem] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ÚNICO BOTÃO DE AGENDAMENTO (Mobile) - Aparece no final da lista */}
        <div className="reveal mt-4 lg:hidden">
          <button onClick={() => goTo("contato")} className="btn-outline w-full text-center">
            Agendar avaliação
          </button>
        </div>

      </div>
    </Section>
  );
}