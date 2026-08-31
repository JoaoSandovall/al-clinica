import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Contact() {
  return (
    <Section id="contato">
      <div className="max-w-[1000px] mx-auto">
        <div className="reveal relative rounded-[2rem] overflow-hidden bg-[var(--c-primary)] shadow-2xl p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at center, var(--c-accent) 0%, transparent 60%)' }} />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-[var(--c-accent)] mb-4 block">
              {globalData.contact.eyebrow}
            </span>
            <h2 style={{ ...serif }} className="text-[2.5rem] md:text-[4rem] font-normal leading-[1.1] mb-6 text-[#FFFFFF]">
              {globalData.contact.title1} <em className="italic text-[var(--c-accent)]">{globalData.contact.title2}</em>
            </h2>
            <p className="text-[#FFFFFF]/80 font-light leading-relaxed mb-10 max-w-lg text-[1.05rem]">
              {globalData.contact.desc}
            </p>
            <a href={globalData.clinica.contato.whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-[var(--c-accent)] text-[var(--c-primary)] px-10 py-5 rounded-full font-medium text-[0.9rem] uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--c-accent-hover)]">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              {globalData.clinica.contato.whatsappLabel}
            </a>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/20 text-left">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--c-accent)] mb-2 font-semibold">{globalData.contact.box1_title}</div>
              <div className="text-[#FFFFFF]/80 text-[0.85rem] font-light leading-relaxed">{globalData.clinica.endereco.edificio}<br />{globalData.clinica.endereco.bairroCidade}</div>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--c-accent)] mb-2 font-semibold">{globalData.contact.box2_title}</div>
              <div className="text-[#FFFFFF]/80 text-[0.85rem] font-light leading-relaxed">{globalData.clinica.contato.telefoneLabel}<br />{globalData.clinica.contato.emailLabel}</div>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--c-accent)] mb-2 font-semibold">{globalData.contact.box3_title}</div>
              <div className="text-[#FFFFFF]/80 text-[0.85rem] font-light leading-relaxed">{globalData.contact.box3_desc1}<br />{globalData.contact.box3_desc2}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}