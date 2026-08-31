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

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "INB Odonto",
    subtitulo: "Odontologia Especializada",
    logoLetras: { l1: "I", l2: "N", l3: "B" },
    contato: {
      whatsappUrl: "https://wa.me/5561981065655",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(61) 98106-5655",
      emailLabel: "inbodonto@gmail.com",
      instagramLabel: "@inbodonto no Instagram",
    },
    endereco: {
      bairroCidade: "Águas Claras - DF",
      edificio: "Led Office Torre 2, Sala 210",
      detalhado: "Águas Claras, Brasília — DF\nFácil acesso e excelente infraestrutura.",
      comodidades: ["Estacionamento no local", "Acessibilidade completa", "Segurança e conforto"],
      mapaGpsUrl: "https://maps.app.goo.gl/dmXmzkPP1W4Q7FXW9",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.384638706312!2d-48.04638818514457!3d-15.839379889022635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333c985beb45%3A0x5aad173a677e222a!2sINB%20ODONTO!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Seg a Sex: 08h às 19h\nSábados: 08h às 12h",
  },

  // ---------------------------------------------------
  // MENU E NAVEGAÇÃO
  // ---------------------------------------------------
  nav: {
    links: ["A Clínica", "Especialidades", "Resultados", "Estrutura", "Contato"],
    ids: ["sobre", "/especialidades", "/resultados", "convenios", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO (BANNER INICIAL)
  // ---------------------------------------------------
  hero: {
    eyebrow: "Águas Claras — Led Office",
    title1: "Seu sorriso é a",
    title2: "nossa", // Este texto fica em itálico e com cor de destaque
    title3: "paixão.",
    desc1: "Atendimento ",
    descBold: "personalizado",
    desc2: " e todas as especialidades em um só lugar. Excelência e cuidado em saúde e estética dental no Led Office.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Conheça os especialistas",
    badgeTitle: "Diferencial",
    badgeDesc: "Alinhadores Próprios",
    stats: [
      { target: 5, suffix: "+", label: "especialidades clínicas", thousands: false },
      { target: 100, suffix: "%", label: "alinhadores in-office", thousands: false },
      { target: 99, suffix: "%", label: "satisfação", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Cada paciente é",
    title2: "um universo de possibilidades.",
    p1: "Na INB, não vemos apenas um caso. Nós entendemos as dores, alegrias e expectativas antes de apresentar o melhor plano de tratamento para você.",
    p2_1: "Aqui, a paixão por ",
    p2_bold: "sorrisos alinhados e saudáveis",
    p2_2: " vem de berço. Com uma equipe especializada, desde a odontopediatria até a reabilitação oral e DTM, cuidamos da saúde da sua família como um todo.",
    topics: [
      { title: "Alinhadores Próprios", desc: "Produção in-office para mais praticidade." },
      { title: "Especialistas", desc: "Equipe referência em reabilitação e DTM." },
      { title: "Odontopediatria", desc: "Cuidado lúdico desde os 2 meses de idade." },
      { title: "Localização Premium", desc: "No coração de Águas Claras (Led Office)." },
    ],
    btn: "Agendar uma visita",
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Atendimento Personalizado" },
      { url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop", title: "Estrutura Completa" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Tecnologia In-Office" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Tratamentos",
    title1: "Atenção",
    title2: "humana.", // Itálico destaque
    desc1: "Oferecemos uma ",
    descBold: "atuação completa",
    desc2: ". Seja diagnosticando lesões em estomatologia ou criando alinhadores no nosso laboratório interno.",
    btn: "Agendar avaliação",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Dentística & Reabilitação", desc: "Transformação de sorrisos com dedicação. Avaliamos cada caso como um universo de possibilidades, planejando a reabilitação estética ideal para você." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Ortodontia & Alinhadores", desc: "Produção in-office de alinhadores transparentes e aparelhos convencionais, oferecendo conforto, praticidade e resultados estéticos de excelência." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Estomatologia", desc: "Prevenção, diagnóstico e tratamento de lesões dentro e fora da cavidade bucal, devolvendo conforto e garantindo a sua saúde integral." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "DTM & Dor Orofacial", desc: "Diagnóstico e alívio para dores na mandíbula, estalos, dificuldades de mastigação e dores de cabeça relacionadas à Articulação Temporomandibular." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Odontopediatria", desc: "Uma abordagem lúdica e sensível para encantar os pequenos, focando na prevenção e saúde bucal desde a infância para um futuro sem intervenções." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Clínica Geral", desc: "Diagnósticos precisos, limpezas periódicas e procedimentos de rotina para manter a integridade do seu sorriso sempre em dia." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Nossas Especialistas",
    members: [
      { name: "Dra. Thais", cro: "Estomatologia", specialty: "Diagnóstico de Lesões", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Lara", cro: "Dentística", specialty: "Reabilitação Oral", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Rafaella Gadelha", cro: "Ortodontia", specialty: "Alinhadores In-Office", img: "https://images.unsplash.com/photo-1681939282781-341ac4f61996?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Estrutura INB",
    title1: "Cuidado que vai",
    title2: "além da",
    title3: "estética.", // itálico
    desc: "Acreditamos que a saúde bucal é o reflexo da sua saúde como um todo. Por isso, aliamos tecnologia e atendimento humanizado para resolver qualquer incômodo.",
    btn: "Quero marcar uma consulta",
    list: [
      { title: "Alinhadores Próprios (In-Office)", content: "Diferente de clínicas tradicionais, possuímos nossa própria produção de alinhadores transparentes. Isso nos permite oferecer mais praticidade, velocidade na entrega e conforto durante todo o seu tratamento ortodôntico." },
      { title: "Especialista em DTM", content: "Dores de cabeça constantes e estalos na mandíbula não são normais. A Dra. Letícia Ventura é especialista no diagnóstico e tratamento da Disfunção Temporomandibular, devolvendo o conforto para sua fala e mastigação." },
      { title: "Estrutura Integrada", content: "Da odontopediatria com as crianças até as complexas reabilitações orais, a INB concentra uma equipe de especialistas no mesmo local. Você não será mais um caso, você terá atenção profissional e humana." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que nossos pacientes dizem",
    googleScore: "5.0",
    googleReviews: "99% Satisfação",
    list: [
      { name: "Carolina Mendes", role: "Paciente", stars: 5, text: "O atendimento da INB é surreal. A Dra. Lara não olhou só pros meus dentes, ela entendeu exatamente o que eu queria pro meu sorriso. Recomendo muito!", img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format" },
      { name: "Marcos Oliveira", role: "Paciente", stars: 5, text: "Sofria com dores de cabeça e estalos na mandíbula há anos. O tratamento de DTM com a Dra. Letícia devolveu minha qualidade de vida.", img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format" },
      { name: "Patrícia Souza", role: "Mãe de Paciente", stars: 5, text: "A Dra. Clara é um anjo! Meu filho tinha muito medo de dentista e hoje ele adora as consultas. O trabalho de conscientização com a família faz toda a diferença.", img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CHAMADA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossos Resultados",
    title1: "Transformações que",
    title2: "mudam vidas.", // itálico
    p1: "A",
    p_bold1: "excelência do nosso trabalho",
    p2: "é refletida no sorriso de cada paciente. Explore nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e conheça o padrão da",
    p_bold3: "INB Odonto",
    btn: "Ver Galeria de Casos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde a INB Odonto está localizada?", a: "Estamos no coração de Águas Claras: Intercity Led Office, Torre 2, Sala 210. Um ambiente moderno e de fácil acesso para o seu conforto." },
      { q: "Quais os sintomas da DTM?", a: "Os sintomas podem incluir dor na mandíbula, dificuldade para abrir ou fechar a boca, estalos na articulação, dores de cabeça e até dor no pescoço. Nossa especialista Dra. Letícia pode ajudar." },
      { q: "Vocês produzem os próprios alinhadores transparentes?", a: "Sim! Na INB contamos com produção de alinhadores in-office. Isso oferece mais agilidade, precisão, conforto e praticidade durante todo o seu tratamento ortodôntico." },
      { q: "Qual a idade certa para a primeira consulta das crianças?", a: "A Dra. Clara orienta que a prevenção deve iniciar a partir dos 2 meses de idade, mesmo antes da erupção dos dentes, para orientações de hábitos alimentares e higiene." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Edifício", value1: "Intercity Led Office", value2: "Torre 2 — Sala 210" },
    box2: { title: "Localização", value1: "Águas Claras, Brasília — DF", value2: "Fácil acesso e excelente infraestrutura." },
    box3: { title: "Comodidades" }, // Puxa do endereco.comodidades
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO: CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Vamos",
    title2: "conversar?", // Itálico
    desc: "Entre em contato para agendar sua avaliação ou tirar dúvidas. Nossa equipe técnica está pronta para apresentar o seu plano de tratamento.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe o nosso dia a dia",
    box3_desc2: "@inbodonto no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Onde seu sorriso é a nossa paixão. Atendimento personalizado e tecnologia em Águas Claras.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 INB Odonto. Todos os direitos reservados.",
    registro: "Águas Claras — Brasília, DF"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio Clínico",
    title1: "Seu sorriso,",
    title2: "nossa paixão.", // Itálico
    p1: "Navegue pela nossa",
    p_bold1: "galeria de casos",
    p2: ". O planejamento aliado à nossa",
    p_bold2: "atenção humana e clínica",
    p3: "em Águas Claras nos permite entregar os melhores resultados estéticos e funcionais.",
    btnSaberMais: "Agendar caso semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Reabilitação Estética", duration: "Planejamento Personalizado", complaint: "Dentes amarelados e desgastados, comprometendo a harmonia do rosto.", procedure: "Transformação do sorriso com facetas de porcelana guiada pela arquitetura facial da paciente.", beforeImg: lentesAntes, afterImg: lentesDepois },
      { category: "Alinhadores In-Office", duration: "Acompanhamento Contínuo", complaint: "Dentes apinhados e rejeição ao uso de aparelhos metálicos tradicionais.", procedure: "Tratamento ortodôntico 100% invisível utilizando nossa produção própria de alinhadores INB.", beforeImg: alinhamentoAntes, afterImg: alinhamentoDepois },
      { category: "Clareamento Clínico", duration: "Sessão Rápida", complaint: "Esmalte escurecido e com manchas superficiais ao longo dos anos.", procedure: "Protocolo de clareamento supervisionado para devolver o brilho natural com segurança.", beforeImg: clareamentoAntes, afterImg: clareamentoDepois },
      { category: "Reabilitação Oral", duration: "Tratamento Integrado", complaint: "Sorriso gengival e resinas antigas escurecidas.", procedure: "Substituição de materiais antigos e plastia gengival para um resultado altamente natural e saudável.", beforeImg: gengivoAntes, afterImg: gengivoDepois }
    ]
  }
};