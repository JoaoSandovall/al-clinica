import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Services({ goTo }: { goTo: (id: string) => void }) {
  return (
    <Section id="servicos">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        <div className="lg:w-4/12 lg:sticky lg:top-32 lg:h-max">
          <div className="reveal"><span className="eyebrow">{globalData.services.eyebrow}</span></div>
          <h2 className="reveal mt-3" style={{ ...serif, fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--c-text-main)" }}>
            {globalData.services.title1} <em style={{ color: "var(--c-accent)", fontStyle: "italic" }}>{globalData.services.title2}</em>
          </h2>
          <p className="reveal mt-6" style={{ color: "var(--c-text-muted)", fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>
            {globalData.services.desc1}<strong className="font-medium text-[var(--c-text-main)]">{globalData.services.descBold}</strong>{globalData.services.desc2}
          </p>
          <div className="reveal mt-10 hidden lg:block">
            <button onClick={() => goTo("contato")} className="btn-outline">{globalData.services.btn}</button>
          </div>
        </div>

        <div className="lg:w-8/12 flex flex-col stagger-children">
          {globalData.services.list.map((s, index) => (
            <div key={s.title} className="reveal group border-t border-[rgba(var(--c-primary-rgb),0.1)] py-8 md:py-12 first:border-t-0 first:pt-0">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex md:flex-col items-center md:items-start gap-5 md:w-[60px] shrink-0">
                  <span className="text-[0.7rem] font-medium tracking-[0.2em] text-[var(--c-text-light)] group-hover:text-[var(--c-accent)] transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="text-[var(--c-text-main)] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 md:origin-left">
                    {s.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 style={{ ...serif }} className="text-2xl md:text-[1.8rem] text-[var(--c-text-main)] mb-3 group-hover:text-[var(--c-accent)] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-[var(--c-text-muted)] text-[0.95rem] md:text-[1.05rem] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-4 lg:hidden">
          <button onClick={() => goTo("contato")} className="btn-outline w-full text-center">{globalData.services.btn}</button>
        </div>
      </div>
    </Section>
  );
}