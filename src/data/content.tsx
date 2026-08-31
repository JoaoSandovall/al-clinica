import { CSSProperties } from "react";
import { Shield, Sparkles, Layers, ScanFace, Activity, Smile, Stethoscope, Droplets } from "lucide-react";
import lentesAntes from "../imagens/lentes-antes.jpg";
import lentesDepois from "../imagens/lentes-depois.jpg";
import clareamentoAntes from "../imagens/clareamento-antes.jpg";
import clareamentoDepois from "../imagens/clareamento-depois.jpg";
import alinhamentoAntes from "../imagens/alinhamento-antes.jpg";
import alinhamentoDepois from "../imagens/alinhamento-depois.jpg";
import gengivoAntes from "../imagens/gengivo-antes.jpg";
import gengivoDepois from "../imagens/gengivo-depois.jpg";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

// Serviços atualizados conforme a imagem da Sorri+
export const services = [
  {
    icon: <Stethoscope size={28} strokeWidth={1.2} />,
    title: "Clínica Geral",
    desc: "Prevenção, diagnósticos precisos e cuidados essenciais para manter sua saúde bucal sempre em dia."
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.2} />,
    title: "Clareamento dental",
    desc: "Tecnologia e segurança para devolver o brilho e a brancura natural do seu sorriso."
  },
  {
    icon: <Shield size={28} strokeWidth={1.2} />,
    title: "Próteses e Implantes",
    desc: "Reabilitação oral completa, devolvendo a função mastigatória e a estética com materiais de alta durabilidade."
  },
  {
    icon: <Droplets size={28} strokeWidth={1.2} />,
    title: "Restauração e Limpeza",
    desc: "Remoção de tártaro, placa bacteriana e restaurações estéticas invisíveis para proteger seus dentes."
  },
  {
    icon: <Activity size={28} strokeWidth={1.2} />,
    title: "Tratamento de Canal",
    desc: "Endodontia avançada e humanizada, focada em salvar seu dente e eliminar a dor rapidamente."
  },
  {
    icon: <ScanFace size={28} strokeWidth={1.2} />,
    title: "Harmonização Orofacial",
    desc: "Procedimentos estéticos para equilibrar os traços do rosto e realçar ainda mais o seu sorriso."
  },
  {
    icon: <Layers size={28} strokeWidth={1.2} />,
    title: "Facetas",
    desc: "Lentes de contato e facetas em resina/porcelana para transformar o formato e a cor dos dentes."
  },
  {
    icon: <Smile size={28} strokeWidth={1.2} />,
    title: "Aparelhos ortodônticos",
    desc: "Alinhamento dental com aparelhos convencionais, estéticos ou alinhadores invisíveis."
  }
];

export const testimonials = [
  {
    name: "Fernanda Carvalho", role: "Paciente", stars: 5,
    text: "Atendimento maravilhoso! A clínica é linda e a equipe me explicou cada etapa com muita paciência. Recomendo muito no Maiobão.",
    img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Rodrigo Mendes", role: "Paciente", stars: 5,
    text: "Tinha muito medo de dentista, mas a Sorri+ tem um ambiente muito acolhedor. Fiz meu tratamento sem sentir nada de dor.",
    img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Juliana Torres", role: "Paciente", stars: 5,
    text: "Excelente localização e profissionais super qualificados. Finalmente uma clínica de alto nível e acessível aqui em Paço do Lumiar.",
    img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format",
  }
];

export const team = [
  { name: "Dr. Rafael Almeida", cro: "CRO-MA 58.203", specialty: "Implantodontia & Cirurgia", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
  { name: "Dra. Camila Nunes",  cro: "CRO-MA 62.417", specialty: "Estética & Harmonização",        img: "https://images.unsplash.com/photo-1681939282781-341ac4f61996?w=400&h=500&fit=crop&auto=format" },
  { name: "Dr. Bruno Lacerda",  cro: "CRO-MA 49.880", specialty: "Ortodontia",                 img: "https://images.unsplash.com/photo-1662837625421-5fd8ed6131a0?w=400&h=500&fit=crop&auto=format" }
];

export const faqs = [
  { q: "Onde a clínica está localizada?", a: "Nossa clínica fica em uma localização privilegiada e de fácil acesso: Av. Quatro, 32, QD 78, Maiobão, Paço do Lumiar." },
  { q: "O clareamento dental danifica o esmalte?", a: "Não. Nosso protocolo usa concentração calibrada e dessensibilizante antes e após o procedimento, preservando integralmente a estrutura do dente." },
  { q: "Vocês atendem planos odontológicos?", a: "Entre em contato conosco pelo WhatsApp para consultarmos a cobertura atualizada dos planos aceitos na clínica." },
  { q: "Como faço para agendar uma avaliação?", a: "Você pode agendar sua avaliação diretamente pelo nosso formulário no site ou clicando no botão do WhatsApp para falar com nossa equipe de triagem." }
];

export const navLinks = ["Serviços", "Sobre", "Equipe", "Resultados", "Depoimentos", "Contato"];
export const navIds   = ["servicos", "sobre",  "equipe", "/resultados", "depoimentos", "contato"];

export const clinicalCases = [
  {
    category: "Lentes de Contato Dental",
    duration: "Planejamento + 2 Sessões",
    complaint: "Dentes amarelados, curtos, com desgaste nas bordas incisais e sorriso tímido.",
    procedure: "Aplicação de 10 facetas de porcelana ultra-finas (cor BL2). Devolvemos proporção, tamanho e brilho natural à arcada superior.",
    beforeImg: lentesAntes,
    afterImg: lentesDepois
  },
  {
    category: "Clareamento a Laser",
    duration: "Sessão Única (45 min)",
    complaint: "Escurecimento severo do esmalte devido ao consumo contínuo de café e tabagismo ao longo dos anos.",
    procedure: "Protocolo de clareamento de consultório com Peróxido de Hidrogênio ativado por luz LED.",
    beforeImg: clareamentoAntes,
    afterImg: clareamentoDepois
  },
  {
    category: "Ortodontia com Alinhadores",
    duration: "8 Meses de Tratamento",
    complaint: "Apinhamento (dentes encavalados) na região anterior inferior e sorriso metálico com aparelho antigo.",
    procedure: "Remoção do aparelho fixo e escaneamento digital em 3D. Tratamento finalizado exclusivamente com alinhadores.",
    beforeImg: alinhamentoAntes,
    afterImg: alinhamentoDepois
  },
  {
    category: "Reabilitação Estética",
    duration: "3 Sessões",
    complaint: "Sorriso excessivamente gengival e presença de resinas antigas, opacas e manchadas nos dentes da frente.",
    procedure: "Gengivoplastia para aumento de coroa clínica e substituição por resinas compostas de alta estética.",
    beforeImg: gengivoAntes,
    afterImg: gengivoDepois
  }
];