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

  useEffect(() => {
    // 1. Lida com o botão de voltar/avançar do próprio navegador
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    
    // 2. Lida com a nossa navegação interna sem recarregar a página (Evita tela branca)
    const handleInternalNav = (e: any) => {
      window.history.pushState({}, "", e.detail);
      setCurrentPath(e.detail);
      window.scrollTo(0, 0);
    };
    window.addEventListener("navigate", handleInternalNav);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("navigate", handleInternalNav);
    };
  }, []);

  const goTo = (id: string) => {
    // Se estiver na galeria e clicar no menu, volta pra home primeiro
    if (currentPath.includes("resultados")) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: "/" }));
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150); // Aguarda um instante para a home carregar antes de rolar
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Se a URL contiver 'resultados', renderiza a galeria
  if (currentPath.includes("resultados")) {
    return <ResultsPage goTo={goTo} />;
  }

  // Caso contrário, renderiza a Home normal
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Header goTo={goTo} />
      <Hero goTo={goTo} />
      <Services />
      <About goTo={goTo} />
      <Team />
      <Testimonials />
      <ResultsCTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}