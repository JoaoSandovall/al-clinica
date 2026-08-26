import { serif } from "../../data/content";

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&h=1000&fit=crop&auto=format"
          alt="Clínica odontológica moderna"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.98) saturate(.82)" }}
        />
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
      </div>

      {/* Conteúdo Central Responsivo */}
      <div className="w-full max-w-[1280px] mx-auto relative px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center z-10">
        
        <div>
          <div className="anim-fade-down delay-200">
            <span className="eyebrow">Odontologia de excelência</span>
          </div>
          <h1
            className="anim-fade-up delay-300"
            style={{ ...serif, fontWeight: 400, lineHeight: 1.07, letterSpacing: "-.015em", fontSize: "clamp(2.7rem, 6vw, 5.5rem)", color: "#1A1A18", marginBottom: "1.75rem" }}
          >
            Seu sorriso, <em style={{ fontStyle: "italic", color: "#1B3A4B" }}>redefinido.</em>
          </h1>
          <p className="anim-fade-up delay-400"
            style={{ color: "#4A5568", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 420, marginBottom: "2.5rem", fontWeight: 300 }}>
            Tecnologia de ponta, equipe especializada e um ambiente pensado para transformar cada consulta em uma experiência de confiança.
          </p>
          
          <div className="anim-fade-up delay-500 flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={() => goTo("contato")} className="btn-primary w-full sm:w-auto">Agendar avaliação gratuita</button>
            <button onClick={() => goTo("servicos")} className="btn-outline w-full sm:w-auto text-center">Ver tratamentos</button>
          </div>

          <div className="anim-fade-up delay-700 flex flex-wrap gap-8 md:gap-10 pt-8 border-t border-[rgba(27,58,75,.14)]">
            {[["18+", "anos de experiência"], ["9.800+", "pacientes atendidos"], ["98%", "satisfação"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ ...serif, fontWeight: 500, fontSize: "2rem", color: "#1B3A4B", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: ".72rem", color: "#8A97A5", marginTop: 6, letterSpacing: ".05em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem Flutuante Corrigida (Largura ampla e proporcional) */}
        <div className="hidden md:flex justify-center relative">
          <div className="relative w-[340px] h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=640&h=800&fit=crop&auto=format"
              alt="Paciente com sorriso saudável"
              className="w-full h-full object-cover rounded-2xl anim-scale-in delay-500"
              style={{ filter: "brightness(.96) saturate(.9)" }}
            />
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(27,58,75,.12)]" />
            
            {/* Stat float esquerdo */}
            <div className="stat-float absolute top-12 -left-12 bg-[#FDFCFA]/95 border border-[rgba(27,58,75,.1)] rounded-xl py-3 px-5 shadow-[0_8px_32px_rgba(27,58,75,.12)] backdrop-blur-md">
               <div style={{ ...serif, fontWeight: 500, fontSize: "1.25rem", color: "#1B3A4B" }}>4.9 ★</div>
               <div className="text-[0.7rem] text-[#8A97A5] mt-1">Google Reviews</div>
            </div>

            {/* Stat float direito */}
            <div className="stat-float absolute bottom-16 -right-10 bg-[#FDFCFA]/95 border border-[rgba(27,58,75,.1)] rounded-xl py-3 px-5 shadow-[0_8px_32px_rgba(27,58,75,.12)] backdrop-blur-md">
               <div style={{ ...serif, fontWeight: 500, fontSize: "1.25rem", color: "#1B3A4B" }}>1ª</div>
               <div className="text-[0.7rem] text-[#8A97A5] mt-1">Consulta gratuita</div>
            </div>
          </div>
        </div>
      </div>

      <div className="anim-fade-in delay-1000 hidden md:flex" style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", flexDirection: "column", alignItems: "center", gap: 6, opacity: .4 }}>
        <span style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#4A5568" }}>rolar</span>
        <div style={{ width: 1, height: 38, background: "linear-gradient(to bottom, #1B3A4B, transparent)" }} />
      </div>
    </div>
  );
}