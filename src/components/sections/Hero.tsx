import { useEffect, useState } from "react";
import { serif } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";

const stats = [
  { target: 5, suffix: "+", label: "especialidades clínicas" },
  { target: 100, suffix: "%", label: "alinhadores in-office", thousands: false },
  { target: 99, suffix: "%", label: "satisfação" },
];

function StatCounter({ target, suffix, label, thousands }: { target: number; suffix: string; label: string; thousands?: boolean }) {
  const { value, ref } = useCountUp(target);
  const display = thousands ? value.toLocaleString("pt-BR") : value;

  return (
    <div ref={ref} className="flex flex-col">
      <div style={{ 
        fontFamily: "'DM Sans', sans-serif", 
        fontWeight: 300, 
        fontSize: "clamp(2.5rem, 4vw, 3.2rem)", 
        color: "#1E2532", 
        lineHeight: 1,
        letterSpacing: "-0.04em", 
        fontVariantNumeric: "tabular-nums"
      }}>
        {display}
        <span style={{ color: "#C5A570", fontWeight: 400, fontSize: "75%", marginLeft: "2px" }}>
          {suffix}
        </span>
      </div>
      <div style={{ 
        fontSize: ".65rem", 
        color: "#7A8593", 
        marginTop: 10, 
        letterSpacing: ".18em", 
        textTransform: "uppercase", 
        fontWeight: 600 
      }}>
        {label}
      </div>
    </div>
  );
}

function WordReveal({ text, delayStart = 0, italic = false }: { text: string; delayStart?: number; italic?: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span 
          key={i} 
          style={{ 
            display: "inline-block", 
            overflow: "hidden", 
            verticalAlign: "top",
            paddingBottom: "0.2em",
            marginBottom: "-0.2em"
          }}
        >
          <span
            className="word-reveal"
            style={{
              display: "inline-block",
              animationDelay: `${delayStart + i * 90}ms`,
              fontStyle: italic ? "italic" : undefined,
              color: italic ? "#C5A570" : undefined,
              paddingRight: "0.1em"
            }}
          >
            {word}{i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </>
  );
}

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            right: -80,
            bottom: -80,
            transform: `translateY(${scrollY * 0.08}px)`,
            willChange: "transform",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=2000&q=85&fit=crop"
            alt="Clínica odontológica INB Odonto"
            className="w-full h-full object-cover origin-center"
            style={{ 
              filter: "brightness(.95) saturate(.85)",
              transform: isLoaded ? "scale(1)" : "scale(1.15)",
              transition: "transform 10s cubic-bezier(0.25, 1, 0.5, 1)" 
            }}
          />
        </div>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
      </div>

      <div className="w-full max-w-[1280px] mx-auto relative px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center z-10">
        
        <div>
          <div className="anim-fade-down delay-200">
            <span className="eyebrow">Águas Claras — Led Office</span>
          </div>
          
          <h1
            style={{ ...serif, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.015em", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: "#1E2532", marginBottom: "1.75rem" }}
          >
            <WordReveal text="Seu sorriso é a" delayStart={280} />{" "}
            <br className="hidden md:block"/>
            <WordReveal text="nossa" delayStart={460} italic />{" "}
            <WordReveal text="paixão." delayStart={640} />
          </h1>
          
          <p className="anim-fade-up delay-[600ms]"
            style={{ color: "#7A8593", fontSize: "1.1rem", lineHeight: 1.85, maxWidth: 460, marginBottom: "2.5rem", fontWeight: 300 }}>
            Atendimento <strong className="font-medium text-[#1E2532]">personalizado</strong> e todas as especialidades em um só lugar. Excelência e cuidado em saúde e estética dental no Led Office.
          </p>
          
          <div className="anim-fade-up delay-[700ms] flex flex-col sm:flex-row gap-4 mb-14">
            <button onClick={() => goTo("contato")} className="btn-primary w-full sm:w-auto">Agende sua consulta</button>
            <button onClick={() => goTo("sobre")} className="btn-outline w-full sm:w-auto text-center">Conheça os especialistas</button>
          </div>

          <div className="anim-fade-up delay-[800ms] flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-[rgba(30,37,50,.1)]">
            {stats.map((s) => (
              <StatCounter 
                key={s.label} 
                target={s.target} 
                suffix={s.suffix} 
                label={s.label} 
                thousands={s.thousands} 
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center lg:justify-end relative">
          <div className="relative w-[85%] max-w-[380px] aspect-[3/4.2]">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&fit=crop"
              alt="Paciente sorrindo com confiança"
              className="w-full h-full object-cover rounded-t-full rounded-b-[2rem] anim-scale-in delay-500 shadow-[0_20px_60px_rgba(30,37,50,0.12)]"
              style={{ filter: "brightness(1) saturate(.95)" }}
            />
            <div className="absolute inset-0 rounded-t-full rounded-b-[2rem] shadow-[inset_0_0_0_1px_rgba(197,165,112,0.3)] pointer-events-none" />
            
            <div className="absolute top-12 -left-8 anim-fade-in delay-[1200ms]">
              <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-xl border border-white/50 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C5A570] animate-pulse"></div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[#7A8593] mb-0.5">Diferencial</div>
                  <div style={{ ...serif }} className="text-[#1E2532] text-[1.1rem] leading-none">Alinhadores Próprios</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="anim-fade-in delay-1000 hidden md:flex" style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", flexDirection: "column", alignItems: "center", gap: 6, opacity: .6 }}>
        <span style={{ fontSize: ".55rem", letterSpacing: ".25em", textTransform: "uppercase", color: "#1E2532", fontWeight: 500 }}>Explorar</span>
        <div style={{ width: 1, height: 45, background: "linear-gradient(to bottom, #1E2532, transparent)" }} />
      </div>
    </div>
  );
}