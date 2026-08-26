import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Services() {
  return (
    <Section id="servicos">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-[560px] mb-16 md:mb-20">
          <div className="reveal">
            <span className="eyebrow">Tratamentos</span>
          </div>
          <h2
            className="reveal mt-2"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#1A1A18", marginBottom: "1.25rem" }}
          >
            Cada sorriso merece <em style={{ color: "#1B3A4B" }}>atenção única</em>
          </h2>
          <p className="reveal" style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>
            Do diagnóstico ao acompanhamento pós-tratamento, cuidamos de você com protocolos clínicos validados e equipamentos de última geração.
          </p>
        </div>

        {/* 
          Grid Corrigido: 
          - 1 coluna no celular (grid-cols-1)
          - 2 colunas em tablets (md:grid-cols-2)
          - 3 colunas exatas no PC (lg:grid-cols-3) 
          Isso acaba com o problema de ficar 4 em cima e 2 embaixo.
        */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div 
              key={s.title} 
              className="reveal group flex flex-col h-full bg-white rounded-2xl p-8 md:p-10 cursor-pointer border border-[rgba(27,58,75,.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(27,58,75,0.12)]"
            >
              
              {/* Ícone com "caixa de destaque" (muito usado em design premium) */}
              <div className="w-14 h-14 rounded-xl bg-[#F3F0EA] text-[#1B3A4B] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1B3A4B] group-hover:text-[#FDFCFA]">
                {s.icon}
              </div>

              {/* Textos */}
              <h3 style={{ ...serif, fontWeight: 500, fontSize: "1.35rem", color: "#1A1A18", marginBottom: "0.75rem" }}>
                {s.title}
              </h3>
              <p className="text-[#5A6778] text-[0.95rem] leading-relaxed font-light flex-grow">
                {s.desc}
              </p>

              {/* Botão sutil que desliza ao passar o mouse */}
              <div className="mt-8 pt-6 border-t border-[rgba(27,58,75,.06)] flex items-center text-[0.75rem] font-medium tracking-wider uppercase text-[#1B3A4B] opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mr-3">Saiba mais</span>
                <svg 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}