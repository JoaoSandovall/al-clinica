import { Section } from "../ui/Section";
import { serif } from "../../data/content";

export function ResultsCTA() {
  return (
    <Section id="resultados">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal relative rounded-2xl overflow-hidden bg-[#1B3A4B] flex flex-col md:flex-row items-center shadow-2xl">
          
          {/* Lado do Texto (Escuro) */}
          <div className="p-10 md:p-16 flex-1 text-[#FDFCFA] w-full">
            <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[#F3F0EA]/70 mb-4 block">
              Nossos Resultados
            </span>
            <h2 
              style={{ ...serif }} 
              className="text-[2.2rem] md:text-[3.2rem] font-normal leading-[1.1] mb-6"
            >
              Transformações que <em className="italic text-[#F3F0EA]">mudam vidas.</em>
            </h2>
            <p className="text-[#FDFCFA]/80 font-light leading-relaxed mb-10 max-w-md text-sm md:text-base">
              A excelência do nosso trabalho é refletida no sorriso de cada paciente. Explore nossa galeria de casos clínicos e conheça o padrão Lumina de odontologia estética e funcional.
            </p>
            
            <a 
              href="/resultados" 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" })); // Avisa o React para trocar a tela
              }}
              className="inline-flex items-center gap-3 bg-[#FDFCFA] text-[#1B3A4B] px-8 py-4 rounded-md font-medium text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Ver Galeria de Casos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Lado da Imagem */}
          <div className="w-full md:w-2/5 h-72 md:h-auto self-stretch relative">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" 
              alt="Sorriso perfeito resultado de tratamento" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
            {/* Gradiente sutil para mesclar a imagem com o fundo escuro no mobile */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#1B3A4B]/40" />
          </div>

        </div>
      </div>
    </Section>
  );
}