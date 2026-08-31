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
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
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

        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-6 lg:mt-0">
          <div className="reveal"><span className="eyebrow">{globalData.about.eyebrow}</span></div>
          <h2 className="reveal mt-2" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--c-text-main)", marginBottom: "1.5rem" }}>
            {globalData.about.title1} <br/>{globalData.about.title2}
          </h2>
          
          <p className="reveal" style={{ color: "var(--c-text-muted)", lineHeight: 1.85, marginBottom: "1.2rem", fontWeight: 300 }}>{globalData.about.p1}</p>
          <p className="reveal" style={{ color: "var(--c-text-muted)", lineHeight: 1.85, marginBottom: "2.5rem", fontWeight: 300 }}>
            {globalData.about.p2_1} <strong className="font-medium text-[var(--c-text-main)]">{globalData.about.p2_bold}</strong> {globalData.about.p2_2}
          </p>
          
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4rem", marginBottom: "2.5rem" }}>
            {globalData.about.topics.map((t) => (
              <div key={t.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--c-accent)", opacity: 1, marginTop: "0.45rem", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: ".875rem", fontWeight: 500, color: "var(--c-text-main)" }}>{t.title}</div>
                  <div style={{ fontSize: ".78rem", color: "var(--c-text-muted)", marginTop: 2, lineHeight: 1.6, fontWeight: 300 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-2"><button className="btn-primary" onClick={() => goTo("contato")}>{globalData.about.btn}</button></div>
        </div>
      </div>
    </Section>
  );
}