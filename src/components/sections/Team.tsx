import { Section } from "../ui/Section";
import { serif, team } from "../../data/content";

export function Team() {
  return (
    <Section id="equipe" style={{ background: "#5C3136" }}>
      <div className="max-w-[1280px] mx-auto">
        
        {/* Cabeçalho Editorial Invertido (Branco) */}
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-20 reveal">
          <h2 style={{ ...serif }} className="text-[2.4rem] md:text-[3.6rem] text-[#FFFFFF] leading-none whitespace-nowrap">
            Corpo Clínico
          </h2>
          <div className="hidden md:block flex-grow h-[1px] bg-white/20 mb-3"></div>
        </div>

        {/* Grid de Retratos */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {team.map((dr) => (
            <div key={dr.name} className="reveal group cursor-pointer flex flex-col">
              
              {/* Foto com Overlay e Pill */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] border border-white/10 shadow-2xl">
                <img
                  src={dr.img}
                  alt={dr.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: "brightness(0.9) saturate(0.9)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C1D]/80 via-transparent to-transparent opacity-80 transition-opacity duration-500" />
                
                {/* Badge do CRO */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#5C3136] uppercase">{dr.cro}</span>
                </div>
              </div>

              {/* Informações com Guia Lateral Rosé */}
              <div className="pl-4 border-l border-[#D49A89]/30 group-hover:border-[#D49A89] transition-colors duration-500">
                <div style={{ ...serif }} className="text-2xl text-[#FFFFFF] group-hover:text-[#D49A89] transition-colors duration-500">
                  {dr.name}
                </div>
                <div className="text-[0.75rem] font-medium tracking-widest uppercase text-[#FDFBF9]/60 mt-2">
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