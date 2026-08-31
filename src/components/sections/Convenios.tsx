import { useState } from "react";
import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Convenios() {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const goToContact = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <Section id="convenios">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
          <div className="reveal"><span className="eyebrow">{globalData.convenios.eyebrow}</span></div>
          <h2 className="reveal mt-3 mb-6" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--c-text-main)" }}>
            {globalData.convenios.title1} <br />{globalData.convenios.title2} <em className="italic text-[var(--c-accent)]">{globalData.convenios.title3}</em>
          </h2>
          <p className="reveal text-[var(--c-text-muted)] text-[1.05rem] leading-relaxed font-light mb-10">
            {globalData.convenios.desc}
          </p>
          <div className="reveal">
            <button onClick={goToContact} className="btn-outline">{globalData.convenios.btn}</button>
          </div>
        </div>

        <div className="w-full lg:w-7/12 stagger-children border-t border-[rgba(var(--c-primary-rgb),0.1)]">
          {globalData.convenios.list.map((item, i) => (
            <div key={i} className="reveal" style={{ borderBottom: "1px solid rgba(var(--c-primary-rgb), 0.1)" }}>
              <button onClick={() => setActiveTab(activeTab === i ? null : i)} className="w-full flex items-center justify-between py-8 text-left bg-transparent border-none cursor-pointer group">
                <span className={`text-[1.1rem] md:text-[1.25rem] transition-colors duration-300 pr-6 ${activeTab === i ? "text-[var(--c-text-main)] font-medium" : "text-[var(--c-text-main)] font-normal group-hover:text-[var(--c-accent)]"}`} style={serif}>
                  {item.title}
                </span>
                <span className="relative flex items-center justify-center w-6 h-6 shrink-0">
                  <span className="absolute w-full h-[1.5px] bg-[var(--c-accent)] transition-transform duration-300" style={{ transform: activeTab === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                  <span className="absolute w-full h-[1.5px] bg-[var(--c-accent)] transition-transform duration-300" style={{ transform: activeTab === i ? "rotate(0deg)" : "rotate(-90deg)" }} />
                </span>
              </button>
              <div className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ gridTemplateRows: activeTab === i ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className={`pb-8 text-[var(--c-text-muted)] text-[0.95rem] md:text-[1.05rem] font-light leading-relaxed transition-all duration-500 delay-100 ${activeTab === i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}