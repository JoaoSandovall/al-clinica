import { useState } from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { serif, clinicalCases } from "../../data/content";

function BeforeAfterSlider({ beforeImg, afterImg }: { beforeImg: string, afterImg: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] bg-[#E8EAEB] overflow-hidden select-none rounded-t-2xl">
      
      <img 
        src={afterImg} 
        alt="Resultado Depois" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        draggable={false} 
      />

      <img 
        src={beforeImg} 
        alt="Situação Antes" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        style={{ 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` 
        }} 
        draggable={false} 
      />

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]" 
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white text-[#1B3A4B] rounded-full flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6" />
            <path d="M15 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      <input 
        type="range" 
        min="0" max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10 m-0 p-0" 
        aria-label="Controle deslizante de antes e depois"
      />

      <div className="absolute top-5 left-5 bg-black/60 text-[#FDFCFA] text-[0.65rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded backdrop-blur-md pointer-events-none">
        Antes
      </div>
      <div className="absolute top-5 right-5 bg-[#1B3A4B]/90 text-[#FDFCFA] text-[0.65rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded backdrop-blur-md pointer-events-none">
        Depois
      </div>
    </div>
  );
}

export function ResultsPage({ goTo }: { goTo: (id: string) => void }) {
  return (
    <div className="bg-[#FDFCFA] min-h-screen flex flex-col">
      <Header goTo={goTo} />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        
        <div className="text-center mb-16 md:mb-24 anim-fade-up">
          <span className="eyebrow mb-4">Portfólio Clínico</span>
          <h1 style={{ ...serif }} className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A18] font-normal tracking-tight">
            Antes e <em className="italic text-[#1B3A4B]">Depois</em>
          </h1>
          <p className="text-[#4A5568] max-w-2xl mx-auto mt-6 font-light text-lg">
            Deslize as imagens para o lado e veja a transformação real dos nossos pacientes. O planejamento digital nos permite resultados milimetricamente perfeitos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {clinicalCases.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white rounded-2xl border border-[rgba(27,58,75,.08)] shadow-[0_4px_20px_rgba(27,58,75,.03)] anim-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              <BeforeAfterSlider 
                beforeImg={item.beforeImg} 
                afterImg={item.afterImg} 
              />

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between border-b border-[rgba(27,58,75,.08)] pb-4 mb-6">
                  <h3 style={{ ...serif }} className="text-2xl font-medium text-[#1A1A18]">
                    {item.category}
                  </h3>
                  <span className="bg-[#F3F0EA] text-[#1B3A4B] text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-md font-medium whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>

                <div className="mb-5">
                  <h4 className="text-[0.7rem] uppercase tracking-widest text-[#8A97A5] font-semibold mb-2">Queixa do Paciente</h4>
                  <p className="text-[#4A5568] font-light text-[0.95rem] leading-relaxed">
                    "{item.complaint}"
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="text-[0.7rem] uppercase tracking-widest text-[#8A97A5] font-semibold mb-2">Procedimento Realizado</h4>
                  <p className="text-[#4A5568] font-light text-[0.95rem] leading-relaxed">
                    {item.procedure}
                  </p>
                </div>

                <button 
                  onClick={() => goTo("contato")} 
                  className="w-full text-center py-4 bg-transparent border border-[#1B3A4B] text-[#1B3A4B] rounded-lg font-medium text-[0.85rem] uppercase tracking-widest hover:bg-[#1B3A4B] hover:text-[#FDFCFA] transition-colors duration-300"
                >
                  Agendar avaliação semelhante
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-20 text-center anim-fade-in delay-500">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("navigate", { detail: "/" }));
            }}
            className="inline-flex items-center gap-3 text-[#5A6778] hover:text-[#1B3A4B] font-medium transition-colors border-b border-transparent hover:border-[#1B3A4B] pb-1"
          >
            &larr; Voltar para a página inicial
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}