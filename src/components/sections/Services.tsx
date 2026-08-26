import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Services() {
  return (
    <Section id="servicos">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="max-w-[560px] mb-16 md:mb-20">
          <div className="reveal">
            <span className="eyebrow">Tratamentos</span>
          </div>
          <h2
            className="reveal mt-2"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#2B1C1D", marginBottom: "1.25rem" }}
          >
            Cada sorriso merece <em style={{ color: "#5C3136" }}>atenção única</em>
          </h2>
          <p className="reveal" style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>
            Do diagnóstico ao acompanhamento pós-tratamento, cuidamos de você com protocolos clínicos validados e equipamentos de última geração.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div 
              key={s.title} 
              className="reveal group flex flex-col h-full bg-white rounded-2xl p-8 md:p-10 cursor-pointer border border-[rgba(92,49,54,.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(92,49,54,0.12)]"
            >
              
              <div className="w-14 h-14 rounded-xl bg-[#FDFBF9] text-[#5C3136] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#5C3136] group-hover:text-[#FFFFFF]">
                {s.icon}
              </div>

              <h3 style={{ ...serif, fontWeight: 500, fontSize: "1.35rem", color: "#2B1C1D", marginBottom: "0.75rem" }}>
                {s.title}
              </h3>
              <p className="text-[#5A6778] text-[0.95rem] leading-relaxed font-light flex-grow">
                {s.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-[rgba(92,49,54,.06)] flex items-center text-[0.75rem] font-medium tracking-wider uppercase text-[#D49A89] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
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