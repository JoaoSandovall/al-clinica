import { Section } from "../ui/Section";
import { serif, team } from "../../data/content";

export function Team() {
  return (
    <Section id="equipe" style={{ background: "#1E2532" }}>
      <div className="max-w-[1280px] mx-auto">
        
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-20 reveal">
          <h2 style={{ ...serif }} className="text-[2.4rem] md:text-[3.6rem] text-[#FFFFFF] leading-none whitespace-nowrap">
            Nossas Especialistas
          </h2>
          <div className="hidden md:block flex-grow h-[1px] bg-white/20 mb-3"></div>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {team.map((dr) => (
            <div key={dr.name} className="reveal group cursor-default flex flex-col">
              
              {/* Container vazio: Adicionamos um fundo bg-[#2A3446] para ficar elegante sem foto */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] border border-white/10 shadow-2xl bg-[#2A3446]">
                
                {/* Ícone de placeholder sutil (Opcional, deixa com cara de "perfil") */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                {/* Gradiente mantido para dar profundidade ao card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2532]/90 via-transparent to-transparent opacity-80 transition-opacity duration-500" />
                
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-10">
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#1E2532] uppercase">{dr.cro}</span>
                </div>
              </div>

              <div className="pl-4 border-l border-[#C5A570]/40 transition-colors duration-500">
                <div style={{ ...serif }} className="text-[1.3rem] leading-tight text-[#FFFFFF] transition-colors duration-500">
                  {dr.name}
                </div>
                <div className="text-[0.75rem] font-medium tracking-widest uppercase text-[#F5F3F0]/60 mt-2">
                  {dr.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}