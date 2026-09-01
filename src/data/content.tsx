import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Classe A Odontologia",
    subtitulo: "Sorrisos bonitos e saudáveis",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/message/I2NQCGBLXZ6TI1",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(61) 98374-0136",
      emailLabel: "classeaodontologia.negocio.site",
      instagramLabel: "@classeaodontologia no Instagram",
    },
    endereco: {
      bairroCidade: "Candangolândia - DF",
      edificio: "QR 3, Conjunto F, Casa 49",
      detalhado: "Candangolândia, Brasília — DF\nFácil acesso e infraestrutura completa.",
      comodidades: ["Clínica Odontológica Completa", "Atendimento humanizado", "Equipe multidisciplinar"],
      mapaGpsUrl: "https://maps.app.goo.gl/Q6baLFjN3c1TPr7r8",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15352.362039782429!2d-47.96421688261719!3d-15.8518396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31abdc79ccef%3A0xbac25d83108ace50!2sClasse%20A%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1788263349296!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sexta\nAberto até as 17:00",
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
    eyebrow: "Candangolândia — DF",
    title1: "Sorrisos bonitos,",
    title2: "saudáveis",
    title3: "& verdadeiros.",
    desc1: "Transformamos o seu ",
    descBold: "sorriso!",
    desc2: " Cuidado humanizado e busca constante por resultados de alta qualidade para você e sua família.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Conheça a equipe",
    badgeTitle: "Destaque",
    badgeDesc: "Atendimento Humanizado",
    stats: [
      { target: 8, suffix: "+", label: "áreas de atuação", thousands: false },
      { target: 50, suffix: "+", label: "avaliações no google", thousands: false },
      { target: 99, suffix: "%", label: "pacientes satisfeitos", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Compromisso com a",
    title2: "excelência clínica.",
    p1: "Na Classe A Odontologia, nosso propósito é entregar cuidado excepcional. Ética, qualificação e conforto guiam cada um dos nossos tratamentos.",
    p2_1: "Temos uma equipe ",
    p2_bold: "multidisciplinar qualificada",
    p2_2: " pronta para somar e trazer ainda mais conhecimento para transformar o seu sorriso nas áreas de implantes, ortodontia e estética.",
    topics: [
      { title: "Múltiplas Especialidades", desc: "De implantes e próteses à ortodontia e reabilitação." },
      { title: "Atendimento Humanizado", desc: "Cuidado excepcional voltado ao seu conforto." },
      { title: "Excelência Comprovada", desc: "4.8 estrelas de aprovação no Google." },
      { title: "Fácil Acesso", desc: "Localização privilegiada na Candangolândia." },
    ],
    btn: "Agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Atendimento Humanizado" },
      { url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop", title: "Estrutura Completa" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Excelência Clínica" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Tratamentos",
    title1: "Transformamos o seu",
    title2: "sorriso.",
    desc1: "Oferecemos uma ",
    descBold: "atuação completa",
    desc2: ". Especialistas em implantes, canal, próteses e aparelhos ortodônticos em um só lugar.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implante, Canal & Prótese", desc: "Reabilitação total com carga imediata e planejamento personalizado para devolver a sua função mastigatória e autoestima." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Aparelho Ortodôntico", desc: "Tratamentos modernos e eficazes para o alinhamento dos seus dentes, garantindo um sorriso harmonioso e saudável." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Clareamento & Estética", desc: "Lentes de contato dental e clareamentos seguros para elevar o brilho e a estética natural do seu rosto." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "Reabilitação Oral", desc: "Soluções integradas para pacientes que necessitam de intervenções mais amplas na cavidade bucal." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Odontopediatria", desc: "Prevenção e cuidado lúdico com as crianças, criando desde cedo uma relação amigável e livre de traumas com o dentista." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Clínica Geral & Limpeza", desc: "Procedimentos de rotina e prevenção constante para manter a integridade dos dentes e gengivas a longo prazo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Nossos Especialistas",
    members: [
      { name: "Dr. Daniel", cro: "Especialista", specialty: "Implante, Canal e Prótese", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Regiane Farias", cro: "Ortodontista", specialty: "Ortodontia", img: "https://images.unsplash.com/photo-1594824432258-f9b1a50c3d9a?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Thalia Duarte", cro: "Especialista", specialty: "Implante e Prótese", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Thayná Santana", cro: "Clínica Geral", specialty: "Cuidado Humanizado", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Geisy Christina", cro: "Clínica Geral", specialty: "Excelência Clínica", img: "https://images.unsplash.com/photo-1681939282781-341ac4f61996?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Estrutura Classe A",
    title1: "Cuidado que vai",
    title2: "além da",
    title3: "estética.",
    desc: "Nossa clínica foi pensada para entregar segurança e tecnologia do diagnóstico ao tratamento final, centralizando diversas soluções no mesmo lugar.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Múltiplas Especialidades", content: "Diferente das clínicas comuns, possuímos uma equipe multidisciplinar capacitada em Ortodontia, Implantes, Próteses e Pediatria, facilitando todo o seu plano de tratamento." },
      { title: "Carga Imediata", content: "Recupere o seu sorriso com agilidade. Nossos profissionais realizam avaliações criteriosas para protocolos de implantes eficientes." },
      { title: "Estética e Prevenção", content: "De limpezas a lentes de contato dental, nosso foco principal é a preservação da estrutura natural dos seus dentes aliada à estética premium." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que nossos pacientes dizem",
    googleScore: "4.8",
    googleReviews: "53 Avaliações",
    list: [
      { name: "Carolina Mendes", role: "Paciente", stars: 5, text: "O atendimento da Classe A é surreal. A doutora não olhou só pros meus dentes, ela entendeu exatamente o que eu queria pro meu sorriso. Recomendo muito!", img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format" },
      { name: "Marcos Oliveira", role: "Paciente", stars: 5, text: "Fiz meus implantes e o processo foi excelente. A equipe passa muita segurança e a estrutura da clínica na Candangolândia é nota dez.", img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format" },
      { name: "Patrícia Souza", role: "Mãe de Paciente", stars: 5, text: "Meu filho tinha muito medo de dentista e hoje ele adora as consultas de odontopediatria. O trabalho humanizado faz toda a diferença.", img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CHAMADA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossos Resultados",
    title1: "Transformamos o",
    title2: "seu sorriso!",
    p1: "A",
    p_bold1: "excelência do nosso trabalho",
    p2: "é refletida na qualidade de vida de cada paciente. Explore nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e conheça o padrão da",
    p_bold3: "Classe A Odontologia",
    btn: "Ver Galeria de Casos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde a Classe A Odontologia está localizada?", a: "Estamos na Qr 3, conjunto F, casa 49, na Candangolândia - DF. Oferecemos um ambiente moderno e de fácil acesso para o seu conforto." },
      { q: "A clínica atende diversas especialidades?", a: "Sim! Nossa equipe multidisciplinar atende Implantes, Canal, Prótese, Ortodontia, Clareamento, Reabilitação Oral e Odontopediatria." },
      { q: "Qual o horário de funcionamento da clínica?", a: "Atendemos de segunda a sexta-feira, abertos até as 17:00. Entre em contato pelo nosso WhatsApp para verificar a disponibilidade dos especialistas." },
      { q: "Vocês trabalham com lentes de contato dental?", a: "Trabalhamos com estética completa, incluindo facetas, lentes de contato e clareamentos seguros para transformar a harmonia do seu rosto." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "QR 3, Conjunto F, Casa 49", value2: "Candangolândia - DF" },
    box2: { title: "Localização", value1: "Candangolândia, Brasília", value2: "CEP: 71725-306" },
    box3: { title: "Comodidades" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO: CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Vamos",
    title2: "conversar?",
    desc: "Entre em contato para agendar sua avaliação ou tirar dúvidas. Nossa equipe técnica está pronta para apresentar o seu plano de tratamento.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe o nosso dia a dia",
    box3_desc2: "@classeaodontologia no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Sorrisos bonitos, saudáveis e verdadeiros. Transformamos o seu sorriso com ética e tecnologia na Candangolândia.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 Classe A Odontologia. Todos os direitos reservados.",
    registro: "Candangolândia — Brasília, DF"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio Clínico",
    title1: "Seu sorriso,",
    title2: "nossa paixão.",
    p1: "Navegue pela nossa",
    p_bold1: "galeria de casos",
    p2: ". O planejamento aliado à nossa",
    p_bold2: "atenção humana e clínica",
    p3: "na Candangolândia nos permite entregar os melhores resultados estéticos e funcionais.",
    btnSaberMais: "Agendar caso semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Reabilitação Estética", duration: "Planejamento Personalizado", complaint: "Dentes amarelados e desgastados, comprometendo a harmonia do rosto.", procedure: "Transformação do sorriso com lentes de contato dental guiada pela arquitetura facial da paciente.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Ortodontia", duration: "Acompanhamento Contínuo", complaint: "Dentes apinhados afetando a estética e a função mastigatória.", procedure: "Tratamento ortodôntico completo visando o alinhamento perfeito e saudável dos dentes.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Clareamento Clínico", duration: "Sessão Rápida", complaint: "Esmalte escurecido e com manchas superficiais ao longo dos anos.", procedure: "Protocolo de clareamento supervisionado para devolver o brilho natural com segurança.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" },
      { category: "Implantes & Próteses", duration: "Tratamento Integrado", complaint: "Ausência dentária e desgaste severo impactando a fala e alimentação.", procedure: "Reabilitação oral através de carga imediata e prótese, devolvendo conforto e estética.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" }
    ]
  }
};