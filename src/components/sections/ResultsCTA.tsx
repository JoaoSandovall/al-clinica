import { Section } from "../ui/Section";
import { serif } from "../../data/content";

export function ResultsCTA() {
  return (
    <Section id="resultados">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-[#1E2532] flex flex-col md:flex-row items-stretch shadow-2xl">
          
          <div className="p-12 md:p-20 flex flex-col justify-center w-full md:w-[55%] relative z-10">
            <span className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#C5A570] mb-6 block">
              Nossos Resultados
            </span>
            
            <h2 style={{ ...serif }} className="text-[2.5rem] md:text-[3.8rem] font-normal leading-[1.1] mb-8 text-[#F5F3F0]">
              Transformações que <br className="hidden lg:block"/><em className="italic text-[#C5A570]">mudam vidas.</em>
            </h2>
            
            <p className="text-[#F5F3F0]/70 font-light leading-relaxed mb-12 max-w-md text-[1.05rem]">
              A <strong className="font-medium text-white">excelência do nosso trabalho</strong> é refletida no sorriso de cada paciente. Explore nossa <strong className="font-medium text-white">galeria de casos clínicos</strong> e conheça o padrão da <strong className="font-medium text-[#C5A570]">INB Odonto</strong>.
            </p>
            
            <div>
              <a 
                href="/resultados"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
                }}
                className="group inline-flex items-center gap-4 bg-transparent border border-[#F5F3F0]/30 text-[#F5F3F0] hover:bg-[#F5F3F0] hover:text-[#1E2532] px-8 py-4 rounded-full font-medium text-[0.8rem] uppercase tracking-widest transition-all duration-500"
              >
                Ver Galeria de Casos
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-[45%] h-80 md:h-auto relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" 
              alt="Sorriso perfeito resultado de tratamento" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              style={{ filter: "brightness(0.9)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1E2532] via-[#1E2532]/40 to-transparent opacity-90 md:opacity-100 pointer-events-none" />
          </div>

        </div>
      </div>
    </Section>
  );
}