import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Location() {
  return (
    <Section id="localizacao" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-stretch border border-[rgba(var(--c-primary-rgb),0.1)] rounded-[2rem] overflow-hidden shadow-sm">
          <div className="w-full md:w-5/12 bg-[var(--c-bg)] p-10 md:p-16 flex flex-col justify-center relative z-10">
            <div className="absolute top-0 right-0 w-[1px] h-full bg-[rgba(var(--c-primary-rgb),0.1)] hidden md:block"></div>
            <h2 className="reveal mb-12" style={{ ...serif, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "var(--c-text-main)", lineHeight: 1.1 }}>
              {globalData.location.eyebrow}
            </h2>
            <div className="reveal flex flex-col gap-8 mb-14">
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-2">{globalData.location.box1.title}</div>
                <div className="text-[var(--c-text-main)] text-[1.1rem] font-medium">{globalData.location.box1.value1}</div>
                <div className="text-[var(--c-text-muted)] font-light text-[0.95rem] mt-1">{globalData.location.box1.value2}</div>
              </div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-2">{globalData.location.box2.title}</div>
                <div className="text-[var(--c-text-muted)] font-light text-[0.95rem] leading-relaxed">
                  {globalData.location.box2.value1}<br />{globalData.location.box2.value2}
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-2">{globalData.location.box3.title}</div>
                <div className="text-[var(--c-text-muted)] font-light text-[0.95rem] leading-relaxed">
                  {globalData.clinica.endereco.comodidades.map(c => <span key={c}>• {c}<br /></span>)}
                </div>
              </div>
            </div>
            <div className="reveal mt-auto">
              <a href={globalData.clinica.endereco.mapaGpsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-[var(--c-text-main)] font-medium text-[0.85rem] uppercase tracking-widest hover:opacity-70 transition-opacity">
                {globalData.location.btn}
                <svg className="transform group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-7/12 h-[450px] md:h-auto relative bg-[#EAEAEA] overflow-hidden group">
            <iframe src={globalData.clinica.endereco.mapaEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 grayscale contrast-125 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}