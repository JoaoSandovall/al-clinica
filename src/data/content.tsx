import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

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
    icon: <Sparkles size={28} strokeWidth={1.2} />,
    title: "Dentística & Reabilitação",
    desc: "Transformação de sorrisos com dedicação. Avaliamos cada caso como um universo de possibilidades, planejando a reabilitação estética ideal para você."
  },
  {
    icon: <Smile size={28} strokeWidth={1.2} />,
    title: "Ortodontia & Alinhadores",
    desc: "Produção in-office de alinhadores transparentes e aparelhos convencionais, oferecendo conforto, praticidade e resultados estéticos de excelência."
  },
  {
    icon: <Shield size={28} strokeWidth={1.2} />,
    title: "Estomatologia",
    desc: "Prevenção, diagnóstico e tratamento de lesões dentro e fora da cavidade bucal, devolvendo conforto e garantindo a sua saúde integral."
  },
  {
    icon: <Activity size={28} strokeWidth={1.2} />,
    title: "DTM & Dor Orofacial",
    desc: "Diagnóstico e alívio para dores na mandíbula, estalos, dificuldades de mastigação e dores de cabeça relacionadas à Articulação Temporomandibular."
  },
  {
    icon: <Users size={28} strokeWidth={1.2} />,
    title: "Odontopediatria",
    desc: "Uma abordagem lúdica e sensível para encantar os pequenos, focando na prevenção e saúde bucal desde a infância para um futuro sem intervenções."
  },
  {
    icon: <Stethoscope size={28} strokeWidth={1.2} />,
    title: "Clínica Geral",
    desc: "Diagnósticos precisos, limpezas periódicas e procedimentos de rotina para manter a integridade do seu sorriso sempre em dia."
  }
];

export const testimonials = [
  {
    name: "Carolina Mendes", role: "Paciente", stars: 5,
    text: "O atendimento da INB é surreal. A Dra. Lara não olhou só pros meus dentes, ela entendeu exatamente o que eu queria pro meu sorriso. Recomendo muito!",
    img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Marcos Oliveira", role: "Paciente", stars: 5,
    text: "Sofria com dores de cabeça e estalos na mandíbula há anos. O tratamento de DTM com a Dra. Letícia devolveu minha qualidade de vida.",
    img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Patrícia Souza", role: "Mãe de Paciente", stars: 5,
    text: "A Dra. Clara é um anjo! Meu filho tinha muito medo de dentista e hoje ele adora as consultas. O trabalho de conscientização com a família faz toda a diferença.",
    img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format",
  }
];

export const team = [
  { name: "Dra. Thais",           cro: "Estomatologia",             specialty: "Diagnóstico de Lesões", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
  { name: "Dra. Lara",            cro: "Dentística",                specialty: "Reabilitação Oral",     img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
  { name: "Dra. Rafaella Gadelha",cro: "Ortodontia",                specialty: "Alinhadores In-Office", img: "https://images.unsplash.com/photo-1681939282781-341ac4f61996?w=400&h=500&fit=crop&auto=format" },
  { name: "Dra. Clara",           cro: "Odontopediatria",           specialty: "Odontologia Hospitalar",img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=500&fit=crop&auto=format" },
  { name: "Dra. Letícia Ventura", cro: "DTM & Dor Orofacial",       specialty: "Alívio de Dores",       img: "https://images.unsplash.com/photo-1594824432258-f9b1a50c3d9a?w=400&h=500&fit=crop&auto=format" }
];

export const faqs = [
  { q: "Onde a INB Odonto está localizada?", a: "Estamos no coração de Águas Claras: Intercity Led Office, Torre 2, Sala 210. Um ambiente moderno e de fácil acesso para o seu conforto." },
  { q: "Quais os sintomas da DTM?", a: "Os sintomas podem incluir dor na mandíbula, dificuldade para abrir ou fechar a boca, estalos na articulação, dores de cabeça e até dor no pescoço. Nossa especialista Dra. Letícia pode ajudar." },
  { q: "Vocês produzem os próprios alinhadores transparentes?", a: "Sim! Na INB contamos com produção de alinhadores in-office. Isso oferece mais agilidade, precisão, conforto e praticidade durante todo o seu tratamento ortodôntico." },
  { q: "Qual a idade certa para a primeira consulta das crianças?", a: "A Dra. Clara orienta que a prevenção deve iniciar a partir dos 2 meses de idade, mesmo antes da erupção dos dentes, para orientações de hábitos alimentares e higiene." }
];

export const navLinks = ["A Clínica", "Tratamentos", "Especialistas", "Resultados", "Estrutura", "Contato"];
export const navIds   = ["sobre", "servicos", "equipe", "/resultados", "convenios", "contato"];

export const clinicalCases = [
  {
    category: "Reabilitação Estética",
    duration: "Planejamento Personalizado",
    complaint: "Dentes amarelados e desgastados, comprometendo a harmonia do rosto.",
    procedure: "Transformação do sorriso com facetas de porcelana guiada pela arquitetura facial da paciente.",
    beforeImg: lentesAntes,
    afterImg: lentesDepois
  },
  {
    category: "Alinhadores In-Office",
    duration: "Acompanhamento Contínuo",
    complaint: "Dentes apinhados e rejeição ao uso de aparelhos metálicos tradicionais.",
    procedure: "Tratamento ortodôntico 100% invisível utilizando nossa produção própria de alinhadores INB.",
    beforeImg: alinhamentoAntes,
    afterImg: alinhamentoDepois
  },
  {
    category: "Clareamento Clínico",
    duration: "Sessão Rápida",
    complaint: "Esmalte escurecido e com manchas superficiais ao longo dos anos.",
    procedure: "Protocolo de clareamento supervisionado para devolver o brilho natural com segurança.",
    beforeImg: clareamentoAntes,
    afterImg: clareamentoDepois
  },
  {
    category: "Reabilitação Oral",
    duration: "Tratamento Integrado",
    complaint: "Sorriso gengival e resinas antigas escurecidas.",
    procedure: "Substituição de materiais antigos e plastia gengival para um resultado altamente natural e saudável.",
    beforeImg: gengivoAntes,
    afterImg: gengivoDepois
  }
];