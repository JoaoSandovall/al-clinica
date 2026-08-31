import { useState, useEffect } from "react";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Team } from "./components/sections/Team";
import { Testimonials } from "./components/sections/Testimonials";
import { ResultsCTA } from "./components/sections/ResultsCTA";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

// Sua página de resultados
import { ResultsPage } from "./components/pages/ResultsPage"; 

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // displayPath só troca depois que a animação de saída termina, e stage
  // controla se a página atual está entrando ou saindo.
  const [displayPath, setDisplayPath] = useState(window.location.pathname);
  const [stage, setStage] = useState<"in" | "out">("in");

  useEffect(() => {
    // 1. Lida com o botão de voltar/avançar do próprio navegador
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    
    // 2. Lida com a nossa navegação interna sem recarregar a página (Evita tela branca)
    const handleInternalNav = (e: any) => {
      window.history.pushState({}, "", e.detail);
      setCurrentPath(e.detail);
    };
    window.addEventListener("navigate", handleInternalNav);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("navigate", handleInternalNav);
    };
  }, []);

  useEffect(() => {
    if (currentPath === displayPath) return;
    setStage("out");
    const t = setTimeout(() => {
      setDisplayPath(currentPath);
      window.scrollTo(0, 0);
      setStage("in");
    }, 260);
    return () => clearTimeout(t);
  }, [currentPath, displayPath]);

  const goTo = (id: string) => {
    if (currentPath.includes("resultados")) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: "/" }));
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const transitionClass = stage === "out" ? "page-transition-out" : "page-transition-in";

  if (displayPath.includes("resultados")) {
    return (
      <div className={transitionClass}>
        <ResultsPage goTo={goTo} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Header goTo={goTo} />
      <Hero goTo={goTo} />
      <About goTo={goTo} />
      <Services goTo={goTo} />
      <Team />
      <Testimonials />
      <ResultsCTA />
      <FAQ />
      <Contact />

    </div>
  );
}