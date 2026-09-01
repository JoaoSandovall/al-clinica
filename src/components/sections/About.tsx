import { useState, useEffect, useCallback } from "react";
import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function About({ goTo }: { goTo: (id: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = globalData.about.gallery;
  const nextIndex = (activeIndex + 1) % gallery.length;

  const handleNext = useCallback(() => setActiveIndex((current) => (current + 1) % gallery.length), [gallery.length]);
  useEffect(() => { const timer = setInterval(handleNext, 5000); return () => clearInterval(timer); }, [handleNext]);

  return (
    <Section id="sobre" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-16 items-center">
        
        {/* BLOCO DE FOTOS INTACTO (Não alterado) */}
        <div className="w-full lg:w-1/2 reveal-l relative">
          <div className="relative w-full aspect-[4/5] md:aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(var(--c-primary-rgb),0.1)] bg-[var(--c-primary)]">
            {gallery.map((img, idx) => (
              <img
                key={`main-${idx}`} src={img.url} alt={img.title} className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.95)", transition: "opacity 1s ease-in-out, transform 6s ease-out", opacity: idx === activeIndex ? 1 : 0, transform: idx === activeIndex ? "scale(1.05)" : "scale(1)", zIndex: idx === activeIndex ? 10 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--c-primary-rgb),0.8)] via-transparent to-transparent opacity-90 z-20 pointer-events-none" />
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-30">
              <div className="text-white/70 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-2">
                0{activeIndex + 1} / 0{gallery.length}
              </div>
              <div className="text-white text-[1.4rem] md:text-[1.8rem] font-medium tracking-wide drop-shadow-md" style={serif}>
                {gallery[activeIndex].title}
              </div>
            </div>
          </div>

          <div onClick={handleNext} className="absolute -bottom-6 -right-4 md:bottom-12 md:-right-10 w-32 md:w-44 aspect-[3/4] rounded-2xl border-4 border-[var(--c-bg-alt)] shadow-2xl overflow-hidden cursor-pointer group z-40">
            {gallery.map((img, idx) => (
              <img key={`thumb-${idx}`} src={img.url} alt="Próxima foto" className="absolute inset-0 w-full h-full object-cover" style={{ transition: "opacity 0.8s ease-in-out, transform 0.8s ease-out", opacity: idx === nextIndex ? 1 : 0, transform: idx === nextIndex ? "scale(1)" : "scale(1.1)", zIndex: idx === nextIndex ? 10 : 0 }} />
            ))}
            <div className="absolute inset-0 bg-[rgba(var(--c-primary-rgb),0.2)] group-hover:bg-transparent transition-colors duration-500 z-20" />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 group-hover:bg-[var(--c-primary)] transition-all duration-300 border border-white/40 group-hover:border-[var(--c-primary)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO DE TEXTOS REFORMULADO (Mais editorial, espaçoso e acolhedor) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-12 lg:mt-0 lg:pl-10 xl:pl-14">
          <div className="reveal"><span className="eyebrow">{globalData.about.eyebrow}</span></div>
          
          <h2 className="reveal mt-2 mb-8" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--c-text-main)" }}>
            {globalData.about.title1} <br/>
            <em className="italic text-[var(--c-accent)]">{globalData.about.title2}</em>
          </h2>
          
          {/* Mensagem de Boas-vindas (Estilo Cartão Acolhedor) */}
          <div className="reveal relative bg-white/50 backdrop-blur-sm border border-white shadow-[0_10px_40px_rgba(30,37,50,0.03)] p-6 md:p-8 rounded-[1.5rem] mb-8">
            <div className="absolute top-0 left-0 w-2 h-full bg-[var(--c-accent)] rounded-l-[1.5rem] opacity-80" />
            <p style={{ color: "var(--c-text-main)", fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 400, fontStyle: "italic" }}>
              "{globalData.about.p1}"
            </p>
          </div>

          <p className="reveal" style={{ color: "var(--c-text-muted)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "3rem", fontWeight: 300, paddingRight: "1rem" }}>
            {globalData.about.p2_1} <strong className="font-medium text-[var(--c-text-main)]">{globalData.about.p2_bold}</strong> {globalData.about.p2_2}
          </p>
          
          {/* Grid de Diferenciais Redesenhado */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 mb-12">
            {globalData.about.topics.map((t) => (
              <div key={t.title} className="flex gap-4 items-start group">
                <div className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[var(--c-accent)]/40 group-hover:bg-[var(--c-accent)] transition-colors duration-500 shrink-0 shadow-sm">
                  <svg className="w-3 h-3 text-[var(--c-accent)] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--c-text-main)", marginBottom: "0.25rem", letterSpacing: "0.01em" }}>
                    {t.title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", lineHeight: 1.6, fontWeight: 300 }}>
                    {t.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal">
            <button 
              className="btn-primary w-full sm:w-auto text-center px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
              onClick={() => goTo("contato")}
            >
              {globalData.about.btn}
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
}