import { Section } from "../ui/Section";
import { serif } from "../../data/content";

// Lista de convênios premium (você pode editar os nomes conforme a realidade da clínica)
const conveniosList = [
  "Omint", 
  "Care Plus", 
  "SulAmérica", 
  "Bradesco Saúde", 
  "Porto Seguro", 
  "Amil One"
];

export function Convenios() {
  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="convenios">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        
        {/* Coluna Esquerda: Textos e Assessoria de Reembolso */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <div className="reveal">
            <span className="eyebrow">Parcerias</span>
          </div>
          
          <h2 className="reveal mt-3 mb-6" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#2B1C1D" }}>
            O seu plano, <br /><em className="italic text-[#D49A89]">padrão Lumina.</em>
          </h2>
          
          <p className="reveal text-[#5A6778] text-[1.05rem] leading-relaxed font-light mb-10">
            Somos credenciados aos principais planos de saúde do segmento premium, garantindo que o seu tratamento seja realizado com a excelência que você merece, sem atritos.
          </p>

          {/* Card de Assessoria de Reembolso */}
          <div className="reveal bg-[#FDFBF9] border border-[rgba(92,49,54,.1)] rounded-[1.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden group">
            {/* Detalhe de borda superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5C3136] to-[#D49A89]"></div>
            
            <h3 className="text-[0.75rem] font-bold tracking-[0.2em] text-[#5C3136] uppercase mb-4">
              Assessoria de Reembolso
            </h3>
            <p className="text-[#5A6778] font-light text-[0.95rem] leading-relaxed mb-8">
              Seu plano não está na lista? Nossa equipe cuida de toda a documentação, laudos e notas fiscais para que você solicite o reembolso do seu tratamento junto à sua operadora.
            </p>
            
            <a 
              href="#contato" 
              onClick={goToContact}
              className="inline-flex items-center gap-3 text-[#D49A89] font-medium text-[0.85rem] uppercase tracking-widest group-hover:text-[#5C3136] transition-colors duration-300"
            >
              Consultar minha cobertura
              <svg className="transform group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna Direita: Grid de Convênios */}
        <div className="w-full lg:w-7/12">
          <div className="stagger-children grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {conveniosList.map((convenio) => (
              <div 
                key={convenio} 
                className="reveal bg-white border border-[rgba(92,49,54,.06)] rounded-2xl h-[120px] flex items-center justify-center p-6 text-center hover:border-[#D49A89] hover:shadow-[0_10px_30px_rgba(92,49,54,0.05)] transition-all duration-500 cursor-default"
              >
                {/* Se você tiver as logos em PNG, pode trocar este <span> pela <img> da logo */}
                <span className="font-['DM_Sans',sans-serif] text-[1.1rem] font-medium text-[#2B1C1D] opacity-80">
                  {convenio}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}