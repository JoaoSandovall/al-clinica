import { useEffect, useState } from "react";
import { serif, globalData } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";
import { Star, Shield, Smile } from "lucide-react";

// Componente do Cartão Flutuante (Estilo Glassmorphism como na foto)
function FloatingStatCard({ target, suffix, label, icon: Icon, delay, className, thousands }: any) {
  const { value, ref } = useCountUp(target);
  const display = thousands ? value.toLocaleString("pt-BR") : value;

  return (
    <div 
      ref={ref} 
      className={`absolute z-30 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(30,37,50,0.1)] flex items-center gap-4 anim-fade-in ${className}`} 
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 rounded-xl bg-[var(--c-primary)] text-white flex items-center justify-center shrink-0 shadow-inner">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="flex flex-col pr-2">
        <div className="font-bold text-xl md:text-2xl text-[var(--c-text-main)] leading-none mb-1 font-sans">
          {display}<span className="text-[var(--c-accent)]">{suffix}</span>
        </div>
        <div className="text-[0.65rem] text-[var(--c-text-muted)] uppercase tracking-wider font-semibold">
          {label}
        </div>
      </div>
    </div>
  );
}

// Animação de revelação das palavras
function WordReveal({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.2em", marginBottom: "-0.2em" }}>
          <span className="word-reveal" style={{ display: "inline-block", animationDelay: `${delayStart + i * 90}ms`, paddingRight: "0.15em" }}>
            {word}{i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </>
  );
}

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[var(--c-bg)] pt-20">
      
      {/* Padrão de Pontilhados no Fundo REPOSICIONADO E AJUSTADO */}
      <svg width="150" height="160" fill="none" viewBox="0 0 100 100" className="absolute top-[10%] lg:right-[16%] right-[4%] z-0 opacity-20 text-[var(--c-primary)] hidden md:block">
        <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>
      <svg width="140" height="140" fill="none" viewBox="0 0 100 100" className="absolute bottom-[5%] lg:left-[45%] left-[40%] z-0 opacity-20 text-[var(--c-accent)] hidden md:block">
        <pattern id="dots2" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
        <rect width="100" height="100" fill="url(#dots2)" />
      </svg>

      <div className="w-full max-w-[1280px] mx-auto relative px-6 md:px-10 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* COLUNA ESQUERDA: Textos Formatação Bold */}
        <div className="flex flex-col justify-center w-full max-w-xl mx-auto lg:mx-0 relative z-20">
          
          <span className="text-[var(--c-text-muted)] font-semibold tracking-widest uppercase mb-4 block anim-fade-down delay-100 text-sm md:text-base">
            {globalData.hero.eyebrow}
          </span>
          
          {/* Título Gigante com quebras de linha e Destaque Colorido */}
          <h1 style={serif} className="text-[clamp(3.2rem,6vw,5.5rem)] leading-[1.05] font-bold text-[var(--c-text-main)] mb-6 anim-fade-down delay-200 uppercase tracking-tight">
            <span className="block mb-1"><WordReveal text={globalData.hero.title1} delayStart={280} /></span>
            <span className="text-[var(--c-accent)] block mb-1"><WordReveal text={globalData.hero.title2} delayStart={460} /></span>
            <span className="block"><WordReveal text={globalData.hero.title3} delayStart={640} /></span>
          </h1>
          
          <p className="anim-fade-up delay-[600ms]" style={{ color: "var(--c-text-muted)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 400 }}>
            {globalData.hero.desc1} <strong className="font-bold text-[var(--c-text-main)]">{globalData.hero.descBold}</strong>{globalData.hero.desc2}
          </p>
          
          <div className="anim-fade-up delay-[700ms] flex flex-col sm:flex-row gap-4 mb-8">
            <button onClick={() => goTo("contato")} className="btn-primary w-full sm:w-auto text-center rounded-full px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {globalData.hero.btnPrimary}
            </button>
          </div>
        </div>

        {/* COLUNA DIREITA: Blobs Orgânicos + Imagem + Cartões Flutuantes */}
        <div className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center mt-10 lg:mt-0">
          
          {/* Forma Orgânica 1 (Fundo - Cor Primária Azul Marinho) */}
          <svg viewBox="0 0 200 200" className="absolute w-[110%] h-[110%] md:w-[130%] md:h-[130%] text-[var(--c-primary)] opacity-100 z-0 animate-[floatY_8s_ease-in-out_infinite]">
            <path fill="currentColor" transform="translate(100 100)" d="M48,-64.5C61.4,-54.1,70.9,-38.4,75.4,-21.2C79.8,-4,79.2,14.7,71.2,30.3C63.2,45.9,47.8,58.4,30.8,66.6C13.8,74.8,-4.8,78.7,-22.1,74.5C-39.4,70.3,-55.4,58.1,-65.4,42.5C-75.4,26.9,-79.4,7.9,-75.6,-9.7C-71.8,-27.3,-60.2,-43.5,-45.8,-54C-31.4,-64.5,-15.7,-69.3,1.1,-70.8C17.9,-72.3,35.8,-70.5,48,-64.5Z" />
          </svg>

          {/* Forma Orgânica 2 (Frente - Cor Secundária Dourado) */}
          <svg viewBox="0 0 200 200" className="absolute w-[95%] h-[95%] md:w-[110%] md:h-[110%] text-[var(--c-accent)] opacity-90 z-10 animate-[floatY_6s_ease-in-out_infinite_reverse]">
            <path fill="currentColor" transform="translate(100 100)" d="M41.7,-59.6C54.5,-51.1,65.6,-39.8,71.5,-25.9C77.4,-12,78.1,4.4,73,18.7C67.9,33,57,45.1,43.8,53.4C30.6,61.7,15.3,66.2,-0.2,66.5C-15.7,66.8,-31.4,62.8,-44.6,54.4C-57.8,46,-67.7,33.2,-72.3,18.5C-76.9,3.8,-76.2,-12.6,-69.7,-26.1C-63.2,-39.6,-50.9,-50.2,-37.2,-58.5C-23.5,-66.8,-11.8,-72.8,1.4,-74.7C14.6,-76.6,29.1,-74.4,41.7,-59.6Z" />
          </svg>

          {/* Imagem Principal da Doutora/Clínica: FORMATO RETANGULAR ELEGANTE AJUSTADO */}
          <img 
            src={globalData.hero.imgUrl}
            alt="Profissional" 
            className={`relative z-20 w-[85%] md:w-[75%] h-[420px] md:h-[500px] object-cover object-center rounded-[2.5rem] shadow-2xl border-[6px] border-white/30 transition-transform duration-[2s] ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} 
          />

          {/* Cartão 1: Topo Esquerda */}
          <FloatingStatCard 
            target={globalData.hero.stats[0].target} 
            suffix={globalData.hero.stats[0].suffix} 
            label={globalData.hero.stats[0].label} 
            thousands={globalData.hero.stats[0].thousands}
            icon={Shield} 
            className="top-[10%] -left-[5%] md:-left-[15%] stat-float delay-100" 
            delay="600ms" 
          />
          
          {/* Cartão 2: Meio Direita */}
          <FloatingStatCard 
            target={globalData.hero.stats[2].target} 
            suffix={globalData.hero.stats[2].suffix} 
            label={globalData.hero.stats[2].label} 
            thousands={globalData.hero.stats[2].thousands}
            icon={Star} 
            className="top-[45%] -right-[5%] md:-right-[10%] stat-float delay-300" 
            delay="800ms" 
          />

          {/* Cartão 3: Base Esquerda */}
          <FloatingStatCard 
            target={globalData.hero.stats[1].target} 
            suffix={globalData.hero.stats[1].suffix} 
            label={globalData.hero.stats[1].label} 
            thousands={globalData.hero.stats[1].thousands}
            icon={Smile} 
            className="bottom-[10%] left-[0%] md:-left-[10%] stat-float delay-500" 
            delay="1000ms" 
          />

        </div>
      </div>
    </div>
  );
}