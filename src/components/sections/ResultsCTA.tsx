import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function ResultsCTA() {
  return (
    <Section id="resultados">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-[var(--c-primary)] flex flex-col md:flex-row items-stretch shadow-2xl">
          <div className="p-12 md:p-20 flex flex-col justify-center w-full md:w-[55%] relative z-10">
            <span className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[var(--c-accent)] mb-6 block">
              {globalData.results_cta.eyebrow}
            </span>
            <h2 style={{ ...serif }} className="text-[2.5rem] md:text-[3.8rem] font-normal leading-[1.1] mb-8 text-[var(--c-bg)]">
              {globalData.results_cta.title1} <br className="hidden lg:block"/><em className="italic text-[var(--c-accent)]">{globalData.results_cta.title2}</em>
            </h2>
            <p className="text-[var(--c-bg)]/70 font-light leading-relaxed mb-12 max-w-md text-[1.05rem]">
              {globalData.results_cta.p1} <strong className="font-medium text-white">{globalData.results_cta.p_bold1}</strong> {globalData.results_cta.p2} <strong className="font-medium text-white">{globalData.results_cta.p_bold2}</strong> {globalData.results_cta.p3} <strong className="font-medium text-[var(--c-accent)]">{globalData.results_cta.p_bold3}</strong>.
            </p>
            <div>
              <a href="/resultados" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" })); }}
                className="group inline-flex items-center gap-4 bg-transparent border border-[var(--c-bg)]/30 text-[var(--c-bg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-primary)] px-8 py-4 rounded-full font-medium text-[0.8rem] uppercase tracking-widest transition-all duration-500"
              >
                {globalData.results_cta.btn}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[45%] h-80 md:h-auto relative overflow-hidden">
            <img src={globalData.results_cta.imgUrl} alt="Resultados" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" style={{ filter: "brightness(0.9)" }} />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--c-primary)] via-[rgba(var(--c-primary-rgb),0.4)] to-transparent opacity-90 md:opacity-100 pointer-events-none" />
          </div>
        </div>
      </div>
    </Section>
  );
}