import { useEffect, useState } from "react";
import { serif } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";

const stats = [
  { target: 18, suffix: "+", label: "anos de experiência" },
  { target: 9800, suffix: "+", label: "pacientes atendidos", thousands: true },
  { target: 98, suffix: "%", label: "satisfação" },
];

function StatCounter({ target, suffix, label, thousands }: { target: number; suffix: string; label: string; thousands?: boolean }) {
  const { value, ref } = useCountUp(target);
  const display = thousands ? value.toLocaleString("pt-BR") : value;

  return (
    <div ref={ref} className="flex flex-col">
      <div style={{ 
        fontFamily: "'DM Sans', sans-serif", 
        fontWeight: 300, // Fonte bem mais fina e elegante
        fontSize: "clamp(2.5rem, 4vw, 3.2rem)", // Tamanho aumentado
        color: "#2B1C1D", // Tom escuro chumbo
        lineHeight: 1,
        letterSpacing: "-0.04em", // Números mais juntinhos
        fontVariantNumeric: "tabular-nums"
      }}>
        {display}
        {/* Sufixo colorido e levemente menor para dar contraste */}
        <span style={{ color: "#3075D3", fontWeight: 400, fontSize: "75%", marginLeft: "2px" }}>
          {suffix}
        </span>
      </div>
      <div style={{ 
        fontSize: ".65rem", 
        color: "#8A97A5", 
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
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <span
            className="word-reveal"
            style={{
              display: "inline-block",
              animationDelay: `${delayStart + i * 90}ms`,
              fontStyle: italic ? "italic" : undefined,
              color: italic ? "#0C238A" : undefined,
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
            left: 0,
            right: 0,
            bottom: -80,
            transform: `translateY(${scrollY * 0.08}px)`,
            willChange: "transform",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&h=1000&fit=crop&auto=format"
            alt="Clínica odontológica moderna"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.98) saturate(.82)" }}
          />
        </div>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
      </div>

      <div className="w-full max-w-[1280px] mx-auto relative px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center z-10">
        <div>
          <div className="anim-fade-down delay-200">
            <span className="eyebrow" style={{ color: "#3075D3", borderBottomColor: "rgba(48, 117, 211, 0.4)" }}>
              Sorri+ Odontologia
            </span>
          </div>
          <h1
            style={{ ...serif, fontWeight: 400, lineHeight: 1.07, letterSpacing: "-.015em", fontSize: "clamp(2.7rem, 6vw, 5.5rem)", color: "#2B1C1D", marginBottom: "1.75rem" }}
          >
            <WordReveal text="Mais cuidado." delayStart={280} />{" "}
            <WordReveal text="Mais sorrisos." delayStart={460} italic />
          </h1>
          <p className="anim-fade-up delay-400"
            style={{ color: "#4A5568", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 420, marginBottom: "2.5rem", fontWeight: 300 }}>
            A sua mais nova clínica odontológica no Maiobão. Mais do que um espaço, somos o propósito do amor pela vida por meio da transformação do seu sorriso.
          </p>
          
          <div className="anim-fade-up delay-500 flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={() => goTo("contato")} className="btn-primary w-full sm:w-auto">Agendar avaliação gratuita</button>
            <button onClick={() => goTo("servicos")} className="btn-outline w-full sm:w-auto text-center">Ver tratamentos</button>
          </div>

          <div className="anim-fade-up delay-700 flex flex-wrap gap-8 md:gap-10 pt-8 border-t border-[rgba(92,49,54,.14)]">
            {stats.map((s, index) => (
              <StatCounter 
                key={s.label} 
                target={s.target} 
                suffix={s.suffix} 
                label={s.label} 
                thousands={s.thousands} 
              />
            ))}
          </div>

          <div className="anim-fade-up delay-700 flex flex-wrap gap-8 md:gap-10 pt-8 border-t border-[rgba(12,35,138,.14)]">
            <div>
              <div style={{ ...serif, fontWeight: 500, fontSize: "1.8rem", color: "#0C238A", lineHeight: 1 }}>Humanizado</div>
              <div style={{ fontSize: ".72rem", color: "#8A97A5", marginTop: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>Atendimento</div>
            </div>
            <div>
              <div style={{ ...serif, fontWeight: 500, fontSize: "1.8rem", color: "#0C238A", lineHeight: 1 }}>Acessível</div>
              <div style={{ fontSize: ".72rem", color: "#8A97A5", marginTop: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>Qualidade para todos</div>
            </div>
            <div>
              <div style={{ ...serif, fontWeight: 500, fontSize: "1.8rem", color: "#0C238A", lineHeight: 1 }}>Maiobão</div>
              <div style={{ fontSize: ".72rem", color: "#8A97A5", marginTop: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>Localização Premium</div>
            </div>
          </div>

        </div>

        <div className="hidden md:flex justify-center relative">
          <div className="relative w-[340px] h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=640&h=800&fit=crop&auto=format"
              alt="Paciente com sorriso saudável"
              className="w-full h-full object-cover rounded-2xl anim-scale-in delay-500"
              style={{ filter: "brightness(.96) saturate(.9)" }}
            />
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(92,49,54,.12)]" />
            
            <div className="stat-float absolute top-12 -left-12 bg-[#FFFFFF]/95 border border-[rgba(92,49,54,.1)] rounded-xl py-3 px-5 shadow-[0_8px_32px_rgba(92,49,54,.12)] backdrop-blur-md">
               <div style={{ ...serif, fontWeight: 500, fontSize: "1.25rem", color: "#0C238A" }}>4.9 ★</div>
               <div className="text-[0.7rem] text-[#8A97A5] mt-1">Google Reviews</div>
            </div>

            <div className="stat-float absolute bottom-16 -right-10 bg-[#FFFFFF]/95 border border-[rgba(92,49,54,.1)] rounded-xl py-3 px-5 shadow-[0_8px_32px_rgba(92,49,54,.12)] backdrop-blur-md">
               <div style={{ ...serif, fontWeight: 500, fontSize: "1.25rem", color: "#0C238A" }}>1ª</div>
               <div className="text-[0.7rem] text-[#8A97A5] mt-1">Consulta gratuita</div>
            </div>
          </div>
        </div>
      </div>

      <div className="anim-fade-in delay-1000 hidden md:flex" style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", flexDirection: "column", alignItems: "center", gap: 6, opacity: .4 }}>
        <span style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#4A5568" }}>rolar</span>
        <div style={{ width: 1, height: 38, background: "linear-gradient(to bottom, #0C238A, transparent)" }} />
      </div>
    </div>
  );
}