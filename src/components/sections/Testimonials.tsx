import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

const StarIcon = () => (
  <svg className="w-[1.1rem] h-[1.1rem] text-[#FFFF00]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function Testimonials() {
  return (
    <Section id="depoimentos" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[600px] mb-16 md:mb-24">
          <div className="reveal"><span className="eyebrow">{globalData.testimonials.eyebrow}</span></div>
          <h2 className="reveal mt-3" style={{ ...serif, fontWeight: 400, lineHeight: 1.1, fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--c-text-main)" }}>
            {globalData.testimonials.title}
          </h2>
        </div>
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-6 md:pb-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
          {globalData.testimonials.list.map((t) => (
            <div key={t.name} className="reveal relative bg-white border border-[rgba(var(--c-primary-rgb),0.06)] p-8 md:p-10 flex flex-col justify-between h-auto md:h-full hover:shadow-[0_15px_40px_rgba(var(--c-primary-rgb),0.05)] transition-shadow duration-500 rounded-2xl overflow-hidden shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center">
              <span className="absolute top-6 right-8 text-[6rem] text-[var(--c-primary)] opacity-[0.03] font-serif leading-none select-none">"</span>
              <div>
                <div className="flex gap-1 mb-6 md:mb-8 relative z-10">{Array.from({ length: t.stars }).map((_, i) => <StarIcon key={i} />)}</div>
                <p style={{ ...serif }} className="text-[1.05rem] md:text-[1.15rem] leading-relaxed text-[var(--c-text-muted)] italic mb-8 md:mb-10 relative z-10">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-[rgba(var(--c-primary-rgb),0.06)] relative z-10 mt-auto">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale-[20%] border border-[rgba(var(--c-primary-rgb),0.1)]" />
                <div>
                  <div className="text-[0.9rem] font-medium text-[var(--c-text-main)]">{t.name}</div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-[var(--c-text-light)] mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-12 md:mt-20 flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-[rgba(var(--c-primary-rgb),0.08)] rounded-full px-10 py-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <span style={{ ...serif }} className="text-3xl font-medium text-[var(--c-text-main)] leading-none">{globalData.testimonials.googleScore}</span>
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}</div>
            </div>
            <div className="w-[1px] h-8 bg-[rgba(var(--c-primary-rgb),0.1)] hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <div className="text-[0.85rem] font-semibold text-[var(--c-text-main)] uppercase tracking-wide">{globalData.testimonials.googleReviews}</div>
              <div className="text-[0.75rem] text-[var(--c-text-light)] mt-1">no Google</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}