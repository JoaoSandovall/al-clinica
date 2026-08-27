import { CSSProperties } from "react";
import { Shield, Sparkles, Layers, ScanFace, Activity, Smile } from "lucide-react";

import lentesAntes from "../imagens/lentes-antes.jpg";
import lentesDepois from "../imagens/lentes-depois.jpg";
import clareamentoAntes from "../imagens/clareamento-antes.jpg";
import clareamentoDepois from "../imagens/clareamento-depois.jpg";
import alinhamentoAntes from "../imagens/alinhamento-antes.jpg";
import alinhamentoDepois from "../imagens/alinhamento-depois.jpg";
import gengivoAntes from "../imagens/gengivo-antes.jpg";
import gengivoDepois from "../imagens/gengivo-depois.jpg";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const services = [
  {
    icon: <Shield size={28} strokeWidth={1.2} />,
    title: "Implante Dentário",
    desc: "Substituição permanente de dentes perdidos com titânio de alta pureza e coroas que imitam perfeitamente o dente natural."
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.2} />,
    title: "Clareamento Dental",
    desc: "Protocolo clínico de clareamento profissional com luz LED de última geração, resultado visível em uma única sessão."
  },
  {
    icon: <Layers size={28} strokeWidth={1.2} />,
    title: "Facetas de Porcelana",
    desc: "Laminados ultra-finos que transformam a estética do sorriso com precisão milimétrica e durabilidade de décadas."
  },
  {
    icon: <ScanFace size={28} strokeWidth={1.2} />,
    title: "Ortodontia / Alinhadores",
    desc: "Alinhamento com aparelhos tradicionais ou alinhadores transparentes personalizados para cada fase do tratamento."
  },
  {
    icon: <Activity size={28} strokeWidth={1.2} />,
    title: "Tratamento de Canal",
    desc: "Endodontia com rotação mecanizada e localizador apical digital — procedimento rápido e praticamente sem dor."
  },
  {
    icon: <Smile size={28} strokeWidth={1.2} />,
    title: "Odontopediatria",
    desc: "Ambiente acolhedor e técnicas gentis para que crianças tenham uma relação saudável com a saúde bucal desde cedo."
  }
];

export const testimonials = [
  {
    name: "Fernanda Carvalho", role: "Empreendedora", stars: 5,
    text: "Fiz facetas de porcelana e o resultado me surpreendeu completamente. A equipe me explicou cada etapa com paciência e o sorriso ficou absolutamente natural.",
    img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Rodrigo Mendes", role: "Engenheiro Civil", stars: 5,
    text: "Tinha muito medo de dentista e fui indicado por um amigo. A clínica tem um ambiente diferente — moderno, tranquilo. Fiz o implante sem sentir nada.",
    img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Juliana Torres", role: "Professora universitária", stars: 5,
    text: "Três anos em tratamento ortodôntico e cada consulta foi impecável. Atendimento pontual, explicações claras e resultado além do que eu esperava.",
    img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format",
  }
];

export const team = [
  { name: "Dr. Rafael Almeida", cro: "CRO-SP 58.203", specialty: "Implantodontia & Cirurgia", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
  { name: "Dra. Camila Nunes",  cro: "CRO-SP 62.417", specialty: "Estética & Facetas",        img: "https://images.unsplash.com/photo-1681939282781-341ac4f61996?w=400&h=500&fit=crop&auto=format" },
  { name: "Dr. Bruno Lacerda",  cro: "CRO-SP 49.880", specialty: "Ortodontia",                 img: "https://images.unsplash.com/photo-1662837625421-5fd8ed6131a0?w=400&h=500&fit=crop&auto=format" }
];

export const faqs = [
  { q: "O clareamento dental danifica o esmalte?", a: "Não. Nosso protocolo usa concentração de peróxido calibrada e dessensibilizante antes e após o procedimento, preservando integralmente a estrutura do dente." },
  { q: "Quanto tempo dura um implante dentário?",  a: "Com higiene adequada e acompanhamento semestral, implantes de titânio têm vida útil superior a 25 anos. A maioria dos pacientes mantém o implante por toda a vida." },
  { q: "Alinhadores invisíveis funcionam para casos complexos?", a: "Para a maioria dos casos de má oclusão, sim. Casos muito severos podem exigir aparelho fixo. Fazemos um planejamento digital completo antes de iniciar qualquer tratamento." },
  { q: "Vocês atendem convênios?", a: "Trabalhamos com os principais convênios e também oferecemos parcelamento próprio em até 12x sem juros para tratamentos fora do plano." }
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
    procedure: "Protocolo de clareamento de consultório com Peróxido de Hidrogênio 35% ativado por luz LED em 3 ciclos de 15 minutos.",
    beforeImg: clareamentoAntes,
    afterImg: clareamentoDepois
  }, 
  {
    category: "Ortodontia com Alinhadores",
    duration: "8 Meses de Tratamento",
    complaint: "Apinhamento (dentes encavalados) na região anterior inferior e sorriso metálico com aparelho antigo.",
    procedure: "Remoção do aparelho fixo e escaneamento digital em 3D. Tratamento finalizado exclusivamente com alinhadores invisíveis.",
    beforeImg: alinhamentoAntes,
    afterImg: alinhamentoDepois
  },
  {
    category: "Reabilitação Estética",
    duration: "3 Sessões",
    complaint: "Sorriso excessivamente gengival e presença de resinas antigas, opacas e manchadas nos dentes da frente.",
    procedure: "Gengivoplastia para aumento de coroa clínica (remoção do excesso de gengiva) e substituição por resinas compostas de alta estética.",
    beforeImg: gengivoAntes,
    afterImg: gengivoDepois
  }
];