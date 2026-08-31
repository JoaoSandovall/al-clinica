import { Section } from "../ui/Section";
import { serif } from "../../data/content";

export function Location() {
  return (
    <Section id="localizacao" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1280px] mx-auto">
        
        <div className="flex flex-col md:flex-row items-stretch border border-[rgba(30,37,50,.1)] rounded-[2rem] overflow-hidden shadow-sm">
          
          <div className="w-full md:w-5/12 bg-[#F5F3F0] p-10 md:p-16 flex flex-col justify-center relative z-10">
            <div className="absolute top-0 right-0 w-[1px] h-full bg-[rgba(30,37,50,.1)] hidden md:block"></div>
            
            <h2 className="reveal mb-12" style={{ ...serif, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1E2532", lineHeight: 1.1 }}>
              Endereço &<br />Acesso
            </h2>
            
            <div className="reveal flex flex-col gap-8 mb-14">
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[#C5A570] uppercase mb-2">Edifício</div>
                <div className="text-[#1E2532] text-[1.1rem] font-medium">Intercity Led Office</div>
                <div className="text-[#7A8593] font-light text-[0.95rem] mt-1">Torre 2 — Sala 210</div>
              </div>
              
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[#C5A570] uppercase mb-2">Localização</div>
                <div className="text-[#7A8593] font-light text-[0.95rem] leading-relaxed">
                  Águas Claras, Brasília — DF<br />
                  Fácil acesso e excelente infraestrutura.
                </div>
              </div>

              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[#C5A570] uppercase mb-2">Comodidades</div>
                <div className="text-[#7A8593] font-light text-[0.95rem] leading-relaxed">
                  • Estacionamento no local<br />
                  • Acessibilidade completa<br />
                  • Segurança e conforto
                </div>
              </div>
            </div>

            <div className="reveal mt-auto">
              <a 
                href="https://maps.app.goo.gl/dmXmzkPP1W4Q7FXW9"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-[#1E2532] font-medium text-[0.85rem] uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Abrir no Google Maps
                <svg className="transform group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-7/12 h-[450px] md:h-auto relative bg-[#EAEAEA] overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.384638706312!2d-48.04638818514457!3d-15.839379889022635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333c985beb45%3A0x5aad173a677e222a!2sINB%20ODONTO!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
            ></iframe>
          </div>

        </div>
      </div>
    </Section>
  );
}