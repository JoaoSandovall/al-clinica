import { Section } from "../ui/Section";
import { serif, team } from "../../data/content";

export function Team() {
  return (
    <Section id="equipe">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Cabeçalho Editorial */}
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-20 reveal">
          <h2 style={{ ...serif }} className="text-[2.4rem] md:text-[3.6rem] text-[#2B1C1D] leading-none whitespace-nowrap">
            Corpo Clínico
          </h2>
          <div className="hidden md:block flex-grow h-[1px] bg-[rgba(92,49,54,.15)] mb-3"></div>
        </div>

        {/* Grid de Retratos */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {team.map((dr) => (
            <div key={dr.name} className="reveal group cursor-pointer flex flex-col">
              
              {/* Foto com Overlay e Pill */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] border border-[rgba(92,49,54,.05)]">
                <img
                  src={dr.img}
                  alt={dr.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: "brightness(0.95) saturate(0.9)" }}
                />
                {/* Gradiente escuro sutil para proteger a leitura do CRO */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500" />
                
                {/* Badge do CRO (Glassmorphism) */}
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#0C238A] uppercase">{dr.cro}</span>
                </div>
              </div>

              {/* Informações com Guia Lateral */}
              <div className="pl-4 border-l border-[#3075D3]/40 group-hover:border-[#0C238A] transition-colors duration-500">
                <div style={{ ...serif }} className="text-2xl text-[#2B1C1D] group-hover:text-[#0C238A] transition-colors duration-500">
                  {dr.name}
                </div>
                <div className="text-[0.75rem] font-medium tracking-widest uppercase text-[#8A97A5] mt-2">
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