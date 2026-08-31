import { Section } from "../ui/Section";
import { serif, testimonials } from "../../data/content";

const StarIcon = () => (
  <svg className="w-[1.1rem] h-[1.1rem] text-[#3075D3]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function Testimonials() {
  return (
    <Section id="depoimentos" style={{ background: "#FDFBF9" }}>
      <div className="max-w-[1280px] mx-auto">
        
        <div className="max-w-[600px] mb-16 md:mb-24">
          <div className="reveal"><span className="eyebrow">Depoimentos</span></div>
          <h2 className="reveal mt-3" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#2B1C1D" }}>
            O que nossos pacientes dizem
          </h2>
        </div>

        {/* 
          ESTRUTURA HÍBRIDA:
          - No Mobile (padrão): vira um flex row com rolagem horizontal (overflow-x-auto), alinhamento suave (snap-x) e espaçamento adequado.
          - No Desktop (md:): reseta para o grid perfeito de 3 colunas que você já aprovou, sem alterar nada.
        */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-6 md:pb-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((t) => (
            <div 
              key={t.name} 
              className="reveal relative bg-white border border-[rgba(92,49,54,.06)] p-8 md:p-10 flex flex-col justify-between h-auto md:h-full hover:shadow-[0_15px_40px_rgba(92,49,54,0.05)] transition-shadow duration-500 rounded-2xl overflow-hidden shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center"
            >
              {/* Marca d'água elegante de aspas */}
              <span className="absolute top-6 right-8 text-[6rem] text-[#0C238A] opacity-[0.03] font-serif leading-none select-none">
                "
              </span>
              
              <div>
                <div className="flex gap-1 mb-6 md:mb-8 relative z-10">
                  {Array.from({ length: t.stars }).map((_, i) => <StarIcon key={i} />)}
                </div>
                
                <p style={{ ...serif }} className="text-[1.05rem] md:text-[1.15rem] leading-relaxed text-[#4A5568] italic mb-8 md:mb-10 relative z-10">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-[rgba(92,49,54,.06)] relative z-10 mt-auto">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale-[20%] border border-[rgba(92,49,54,.1)]" />
                <div>
                  <div className="text-[0.9rem] font-medium text-[#2B1C1D]">{t.name}</div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-[#8A97A5] mt-1">{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Resumo do Google (Permanece exatamente igual e isolado embaixo) */}
        <div className="reveal mt-12 md:mt-20 flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-[rgba(92,49,54,.08)] rounded-full px-10 py-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <span style={{ ...serif }} className="text-3xl font-medium text-[#0C238A] leading-none">4.9</span>
              <div className="flex gap-1">
                 {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
            </div>
            <div className="w-[1px] h-8 bg-[rgba(92,49,54,.1)] hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <div className="text-[0.85rem] font-semibold text-[#2B1C1D] uppercase tracking-wide">+340 avaliações</div>
              <div className="text-[0.75rem] text-[#8A97A5] mt-1">no Google</div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}