import { useState } from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { serif, clinicalCases } from "../../data/content";

function BeforeAfterSlider({ beforeImg, afterImg }: { beforeImg: string, afterImg: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[400px] md:h-[450px] bg-[#F5F3F0] overflow-hidden select-none rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={afterImg} alt="Resultado Depois" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      <img src={beforeImg} alt="Situação Antes" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }} draggable={false} />

      <div className="absolute top-0 bottom-0 w-[1.5px] bg-white/80 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-75" style={{ left: `calc(${sliderPosition}% - 0.75px)` }}>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-white/90 scale-110 shadow-xl' : 'bg-white/50 backdrop-blur-sm shadow-md border border-white/40'}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A570" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6" />
            <path d="M15 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10 m-0 p-0" aria-label="Controle deslizante de antes e depois" />

      <div className="absolute bottom-5 left-5 bg-black/40 backdrop-blur-md border border-white/20 text-[#FFFFFF] text-[0.6rem] font-medium tracking-[0.2em] uppercase px-4 py-2 rounded-full pointer-events-none">
        Antes
      </div>
      <div className="absolute bottom-5 right-5 bg-[#1E2532]/70 backdrop-blur-md border border-white/20 text-[#FFFFFF] text-[0.6rem] font-medium tracking-[0.2em] uppercase px-4 py-2 rounded-full pointer-events-none">
        Depois
      </div>
    </div>
  );
}

export function ResultsPage({ goTo }: { goTo: (id: string) => void }) {
  return (
    <div className="bg-[#F5F3F0] min-h-screen flex flex-col overflow-x-hidden">
      <Header goTo={goTo} />
      
      <main className="flex-grow w-full relative">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 w-full pt-[6rem]">
          <div className="bg-[#1E2532] w-full rounded-[2rem] md:rounded-[3rem] pt-16 pb-32 md:pt-24 md:pb-44 px-6 md:px-10 text-center shadow-2xl relative z-10 flex flex-col items-center">
            <div className="anim-fade-up">
              <span className="inline-block font-['DM_Sans',sans-serif] text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#C5A570] pb-1 border-b border-[#C5A570]/40 mb-6">
                Portfólio Clínico
              </span>
              
              <h1 style={{ ...serif }} className="text-4xl md:text-5xl lg:text-7xl text-[#FFFFFF] font-normal tracking-tight leading-tight max-w-4xl mx-auto">
                Seu sorriso, <em className="italic text-[#C5A570]">nossa paixão.</em>
              </h1>
              
              <p className="text-[#FFFFFF]/80 max-w-2xl mx-auto mt-6 font-light text-[1.05rem] leading-relaxed">
                Navegue pela nossa <strong className="font-medium text-white">galeria de casos</strong>. O planejamento aliado à nossa <strong className="font-medium text-white">atenção humana e clínica</strong> em Águas Claras nos permite entregar os melhores resultados estéticos e funcionais.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 -mt-20 md:-mt-28 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {clinicalCases.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col anim-fade-up bg-white rounded-[2rem] p-3 shadow-[0_15px_50px_rgba(30,37,50,0.08)] border border-[rgba(30,37,50,.05)]" 
                style={{ animationDelay: `${(index % 2) * 200 + 100}ms` }}
              >
                <BeforeAfterSlider beforeImg={item.beforeImg} afterImg={item.afterImg} />
                
                <div className="pt-8 px-5 pb-5 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h3 style={{ ...serif }} className="text-2xl md:text-[1.75rem] text-[#1E2532]">
                      {item.category}
                    </h3>
                    <span className="text-[#C5A570] text-[0.65rem] uppercase tracking-[0.15em] border border-[#C5A570]/40 px-4 py-2 rounded-full font-medium w-max">
                      {item.duration}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 flex-grow border-l-2 border-[rgba(30,37,50,.15)] pl-6">
                    <div>
                      <h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#7A8593] font-semibold mb-3">
                        O Desafio
                      </h4>
                      <p className="text-[#1E2532] font-light text-[0.95rem] leading-relaxed">
                        "{item.complaint}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#C5A570] font-semibold mb-3">
                        A Solução
                      </h4>
                      <p className="text-[#1E2532] font-light text-[0.95rem] leading-relaxed">
                        {item.procedure}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-[rgba(30,37,50,.1)]">
                    <button 
                      onClick={() => goTo("contato")} 
                      className="group flex items-center justify-between w-full text-left text-[#1E2532] hover:text-[#C5A570] transition-colors duration-500 py-2"
                    >
                      <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em]">
                        Agendar caso semelhante
                      </span>
                      <svg className="w-5 h-5 transform opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28 text-center anim-fade-in delay-500">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("navigate", { detail: "/" })); }} 
              className="group inline-flex items-center gap-3 text-[#7A8593] hover:text-[#1E2532] font-medium transition-colors"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="border-b border-transparent group-hover:border-[#1E2532] pb-0.5 transition-colors duration-300">
                Retornar à página inicial
              </span>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}