import { Section } from "../ui/Section";
import { serif, services } from "../../data/content";

export function Services({ goTo }: { goTo: (id: string) => void }) {
  return (
    <Section id="servicos">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        <div className="lg:w-4/12 lg:sticky lg:top-32 lg:h-max">
          <div className="reveal">
            <span className="eyebrow">Tratamentos</span>
          </div>
          <h2
            className="reveal mt-3"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#1E2532" }}
          >
            Atenção <em style={{ color: "#C5A570", fontStyle: "italic" }}>humana.</em>
          </h2>
          
          <p className="reveal mt-6" style={{ color: "#7A8593", fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>
            Oferecemos uma <strong className="font-medium text-[#1E2532]">atuação completa</strong>. Seja diagnosticando lesões em estomatologia ou criando alinhadores no nosso laboratório interno.
          </p>
          
          <div className="reveal mt-10 hidden lg:block">
            <button onClick={() => goTo("contato")} className="btn-outline">
              Agendar avaliação
            </button>
          </div>
        </div>

        <div className="lg:w-8/12 flex flex-col stagger-children">
          {services.map((s, index) => (
            <div 
              key={s.title}
              className="reveal group border-t border-[rgba(30,37,50,.1)] py-8 md:py-12 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex md:flex-col items-center md:items-start gap-5 md:w-[60px] shrink-0">
                  <span className="text-[0.7rem] font-medium tracking-[0.2em] text-[#A0AAB5] group-hover:text-[#C5A570] transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="text-[#1E2532] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 md:origin-left">
                    {s.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 style={{ ...serif }} className="text-2xl md:text-[1.8rem] text-[#1E2532] mb-3 group-hover:text-[#C5A570] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-[#7A8593] text-[0.95rem] md:text-[1.05rem] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-4 lg:hidden">
          <button onClick={() => goTo("contato")} className="btn-outline w-full text-center">
            Agendar avaliação
          </button>
        </div>

      </div>
    </Section>
  );
}