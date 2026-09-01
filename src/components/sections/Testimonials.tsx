import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

// Estrela Redesenhada puxando a cor Dourada da marca em vez de amarelo genérico
const StarIcon = () => (
  <svg className="w-[1.2rem] h-[1.2rem] text-[var(--c-accent)] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function Testimonials() {
  return (
    // Fundo alternativo para destacar os cartões brancos
    <Section id="depoimentos" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[1280px] mx-auto pb-8 md:pb-16">
        
        {/* CABEÇALHO EDITORIAL: Título na esquerda, Placa do Google na direita */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 md:mb-24 reveal">
          <div className="max-w-[600px]">
            <span className="eyebrow">{globalData.testimonials.eyebrow}</span>
            <h2 className="mt-3" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--c-text-main)" }}>
              {globalData.testimonials.title}
            </h2>
          </div>

          {/* Placa do Google Premium (Glassmorphism) */}
          <div className="bg-white/60 backdrop-blur-xl px-8 py-5 rounded-[2rem] shadow-[0_15px_40px_rgba(30,37,50,0.06)] border border-white flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span style={serif} className="text-3xl text-[var(--c-text-main)] leading-none">{globalData.testimonials.googleScore}</span>
              <div className="flex gap-[2px] mt-2">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
            </div>
            <div className="w-[1px] h-12 bg-[var(--c-primary)] opacity-10"></div>
            <div className="flex flex-col">
              <span className="text-[0.8rem] font-bold text-[var(--c-text-main)] uppercase tracking-[0.15em] mb-1">{globalData.testimonials.googleReviews}</span>
              <span className="text-[0.7rem] text-[var(--c-text-muted)] font-medium uppercase tracking-widest">Verificadas no Google</span>
            </div>
          </div>
        </div>

        {/* GRID ASSIMÉTRICO (O cartão do meio desce para criar um design de agência premium) */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-10 md:pb-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
          {globalData.testimonials.list.map((t, index) => (
            <div 
              key={t.name} 
              // A mágica do offset acontece aqui: index === 1 ? 'md:translate-y-12' : ''
              className={`reveal relative bg-white p-8 md:p-12 flex flex-col justify-between h-auto md:h-full rounded-[2.5rem] shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center group hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(30,37,50,0.03)] hover:shadow-[0_20px_50px_rgba(30,37,50,0.08)] border border-white/50 ${index === 1 ? 'md:translate-y-12' : ''}`}
            >
              
              {/* Aspas Gigantes Decorativas (Interativas no Hover) */}
              <span className="absolute top-6 right-8 text-[8rem] font-serif text-[var(--c-accent)] opacity-20 leading-none select-none group-hover:scale-110 group-hover:text-[var(--c-primary)] group-hover:opacity-5 transition-all duration-500">
                ”
              </span>

              <div>
                <div className="flex gap-[2px] mb-8 relative z-10">
                  {Array.from({ length: t.stars }).map((_, i) => <StarIcon key={i} />)}
                </div>
                
                <p style={serif} className="text-[1.15rem] md:text-[1.3rem] leading-relaxed text-[var(--c-text-main)] mb-10 relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Rodapé do Cartão: Foto e Nome */}
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-[rgba(var(--c-primary-rgb),0.05)]">
                <div className="relative shrink-0">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none" />
                </div>
                <div>
                  <div className="text-[0.95rem] font-bold text-[var(--c-text-main)] leading-none mb-1">{t.name}</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--c-accent)] font-bold">{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </Section>
  );
}