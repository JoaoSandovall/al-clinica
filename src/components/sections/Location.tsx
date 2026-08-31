import { Section } from "../ui/Section";
import { serif } from "../../data/content";

export function Location() {
  return (
    <Section id="localizacao" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1280px] mx-auto">
        
        {/* Bloco Único Arquitetônico */}
        <div className="flex flex-col md:flex-row items-stretch border border-[rgba(92,49,54,.12)] rounded-[2rem] overflow-hidden shadow-sm">
          
          {/* Coluna de Dados (Fatos, sem texto genérico) */}
          <div className="w-full md:w-5/12 bg-[#FDFBF9] p-10 md:p-16 flex flex-col justify-center relative z-10">
            {/* Linha divisória sutil no desktop */}
            <div className="absolute top-0 right-0 w-[1px] h-full bg-[rgba(92,49,54,.1)] hidden md:block"></div>
            
            <h2 className="reveal mb-12" style={{ ...serif, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#2B1C1D", lineHeight: 1.1 }}>
              Endereço &<br />Estrutura
            </h2>
            
            <div className="reveal flex flex-col gap-8 mb-14">
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[#D49A89] uppercase mb-2">Edifício</div>
                <div className="text-[#2B1C1D] text-[1.1rem] font-medium">Paulista Corporate</div>
                <div className="text-[#5A6778] font-light text-[0.95rem] mt-1">14º Andar — Conjunto 1402</div>
              </div>
              
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[#D49A89] uppercase mb-2">Localização</div>
                <div className="text-[#5A6778] font-light text-[0.95rem] leading-relaxed">
                  Av. Paulista, 2.001<br />
                  Bela Vista, São Paulo — SP<br />
                  CEP: 01311-300
                </div>
              </div>

              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[#D49A89] uppercase mb-2">Comodidades</div>
                <div className="text-[#5A6778] font-light text-[0.95rem] leading-relaxed">
                  • Estacionamento com Valet<br />
                  • Acessibilidade completa<br />
                  • A 200m da Estação Consolação
                </div>
              </div>
            </div>

            <div className="reveal mt-auto">
              <a 
                href="https://goo.gl/maps/KjXgN5s4jP2zR2xX8"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-[#5C3136] font-medium text-[0.85rem] uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Abrir no Google Maps
                <svg className="transform group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna do Mapa */}
          <div className="w-full md:w-7/12 h-[450px] md:h-auto relative bg-[#EAEAEA] overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.148782012025!2d-46.66014498502221!3d-23.55948928468357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd2b0244ad%3A0x6b44f2b130190538!2sAv.%20Paulista%2C%202001%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-300!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // Filtro severo em preto e branco que ganha cor ao passar o mouse
              className="absolute inset-0 grayscale contrast-125 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
            ></iframe>
          </div>

        </div>
      </div>
    </Section>
  );
}