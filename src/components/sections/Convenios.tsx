import { useState } from "react";
import { Section } from "../ui/Section";
import { serif } from "../../data/content";

const conveniosData = [
  {
    title: "Alinhadores Próprios (In-Office)",
    content: "Diferente de clínicas tradicionais, possuímos nossa própria produção de alinhadores transparentes. Isso nos permite oferecer mais praticidade, velocidade na entrega e conforto durante todo o seu tratamento ortodôntico."
  },
  {
    title: "Especialista em DTM",
    content: "Dores de cabeça constantes e estalos na mandíbula não são normais. A Dra. Letícia Ventura é especialista no diagnóstico e tratamento da Disfunção Temporomandibular, devolvendo o conforto para sua fala e mastigação."
  },
  {
    title: "Estrutura Integrada",
    content: "Da odontopediatria com as crianças até as complexas reabilitações orais, a INB concentra uma equipe de especialistas no mesmo local. Você não será mais um caso, você terá atenção profissional e humana."
  }
];

export function Convenios() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="convenios">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
          <div className="reveal">
            <span className="eyebrow">A Estrutura INB</span>
          </div>
          
          <h2 className="reveal mt-3 mb-6" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#1E2532" }}>
            Cuidado que vai <br />além da <em className="italic text-[#C5A570]">estética.</em>
          </h2>
          
          <p className="reveal text-[#7A8593] text-[1.05rem] leading-relaxed font-light mb-10">
            Acreditamos que a saúde bucal é o reflexo da sua saúde como um todo. Por isso, aliamos tecnologia e atendimento humanizado para resolver qualquer incômodo.
          </p>

          <div className="reveal">
            <button onClick={goToContact} className="btn-outline">
              Quero marcar uma consulta
            </button>
          </div>
        </div>

        <div className="w-full lg:w-7/12 stagger-children border-t border-[rgba(30,37,50,.1)]">
          {conveniosData.map((item, i) => (
            <div 
              key={i} 
              className="reveal"
              style={{ borderBottom: "1px solid rgba(30,37,50,.1)" }}
            >
              <button
                onClick={() => setActiveTab(activeTab === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left bg-transparent border-none cursor-pointer group"
              >
                <span 
                  className={`text-[1.1rem] md:text-[1.25rem] transition-colors duration-300 pr-6 ${
                    activeTab === i ? "text-[#1E2532] font-medium" : "text-[#1E2532] font-normal group-hover:text-[#C5A570]"
                  }`}
                  style={serif}
                >
                  {item.title}
                </span>
                
                <span className="relative flex items-center justify-center w-6 h-6 shrink-0">
                  <span 
                    className="absolute w-full h-[1.5px] bg-[#C5A570] transition-transform duration-300" 
                    style={{ transform: activeTab === i ? "rotate(180deg)" : "rotate(0deg)" }} 
                  />
                  <span 
                    className="absolute w-full h-[1.5px] bg-[#C5A570] transition-transform duration-300" 
                    style={{ transform: activeTab === i ? "rotate(0deg)" : "rotate(-90deg)" }} 
                  />
                </span>
              </button>
              
              <div 
                className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ gridTemplateRows: activeTab === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p 
                    className={`pb-8 text-[#7A8593] text-[0.95rem] md:text-[1.05rem] font-light leading-relaxed transition-all duration-500 delay-100 ${
                      activeTab === i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    {item.content}
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