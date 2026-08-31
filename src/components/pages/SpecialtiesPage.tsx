import { Header } from "../sections/Header";
import { Services } from "../sections/Services";
import { Team } from "../sections/Team";
import { Footer } from "../sections/Footer";
import { globalData } from "../../data/content";

export function SpecialtiesPage({ goTo }: { goTo: (id: string) => void }) {
  return (
    <div className="bg-[var(--c-bg)] min-h-screen flex flex-col">
      <Header goTo={goTo} />
      
      {/* O pt-[6rem] garante que o Header não cubra o topo da seção */}
      <main className="flex-grow w-full relative pt-[6rem]">
        {/* Aqui nós reaproveitamos os componentes exatos da home */}
        <Team />
        <Services goTo={goTo} />

        {/* Botão de voltar idêntico ao da página de resultados */}
        <div className="mt-12 mb-24 text-center anim-fade-in delay-500">
          <a 
            href="/" 
            onClick={(e) => { 
              e.preventDefault(); 
              window.dispatchEvent(new CustomEvent("navigate", { detail: "/" })); 
            }} 
            className="group inline-flex items-center gap-3 text-[var(--c-text-muted)] hover:text-[var(--c-text-main)] font-medium transition-colors"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="border-b border-transparent group-hover:border-[var(--c-text-main)] pb-0.5 transition-colors duration-300">
              {globalData.results_page.btnVoltar}
            </span>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}