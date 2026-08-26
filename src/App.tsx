import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Team } from "./components/sections/Team";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  // Função global de rolagem que é repassada para os botões que precisam dela
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Header goTo={goTo} />
      <Hero goTo={goTo} />
      <Services />
      <About goTo={goTo} />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* CSS global para responsividade das grids (mantido do original) */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid    { grid-template-columns: 1fr !important; }
          .about-grid   { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
        .service-card:hover .card-cta { opacity: 1 !important; }
      `}</style>
    </div>
  );
}