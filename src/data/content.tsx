import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "DHC Odontologia",
    subtitulo: "Tecnologia • Humanização • Resultados",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/5527997155698",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(27) 99715-5698",
      emailLabel: "contato@dhcodontologia.com.br",
      instagramLabel: "@dhcodontologia no Instagram",
    },
    endereco: {
      bairroCidade: "Centro — Linhares, ES",
      edificio: "Av. Nogueira da Gama, 1351",
      detalhado: "Centro, Linhares - ES, 29900-043\nClínica odontológica de alto padrão.",
      comodidades: ["Ambiente acolhedor", "Tecnologia de ponta", "Estética e Bem-estar"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Av.+Nogueira+da+Gama,+1351+-+Centro,+Linhares",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.307561605006!2d-40.06858226119317!3d-19.39911279546829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb625119bccd16f%3A0x18dd249ef2864271!2sDHC%20Odontologia%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1788265335393!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sexta\nAberto até as 18:00",
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
    imgUrl: "/imagens/hero.png",
    eyebrow: "Centro — Linhares, ES",
    title1: "Odontologia de",
    title2: "alto padrão",
    title3: "& tecnologia.",
    desc1: "Aqui, cada sorriso é planejado de forma ",
    descBold: "única",
    desc2: " — com naturalidade, saúde e sofisticação. Seja bem-vindo a essa nova fase. 🤍",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Conheça a clínica",
    badgeTitle: "Destaque",
    badgeDesc: "Conforto e Excelência",
    stats: [
      { target: 5, suffix: ".0", label: "nota no google", thousands: false },
      { target: 38, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "planejamento único", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Conforto e cuidado",
    title2: "caminham juntos.",
    p1: "Bem-vindo à DHC Odontologia, um lugar feito para encantar, cuidar e transformar sorrisos. Cada detalhe deste espaço foi pensado para que você se sinta acolhido desde o primeiro momento.",
    p2_1: "Mais do que uma clínica, criamos um ambiente onde ",
    p2_bold: "conforto, cuidado e excelência",
    p2_2: " caminham juntos, porque acreditamos que a sua experiência é tão importante quanto o seu resultado.",
    topics: [
      { title: "Odontologia de Alto Padrão", desc: "Excelência técnica aliada a um olhar humano." },
      { title: "Tecnologia e Sofisticação", desc: "Equipamentos de ponta para precisão e estética." },
      { title: "Ambiente Acolhedor", desc: "Criado para que você se sinta bem desde a recepção." },
      { title: "Planejamento Único", desc: "Resultados com naturalidade, saúde e bem-estar." },
    ],
    btn: "Agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Ambiente Acolhedor" },
      { url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop", title: "Estrutura Sofisticada" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Excelência Clínica" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Transformamos o seu",
    title2: "sorriso.",
    desc1: "Um olhar humano em cada detalhe. Oferecemos ",
    descBold: "tecnologia e excelência técnica",
    desc2: " para garantir resultados que unem naturalidade, saúde e bem-estar.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Reabilitação Oral", desc: "Devolvemos a função, a saúde e a estética do seu sorriso com tratamentos completos e planejados sob medida para o seu caso." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Lentes em Resina", desc: "Transformação estética com naturalidade e sofisticação, corrigindo cor e formato dos dentes de forma minimamente invasiva." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes Dentários", desc: "Segurança e tecnologia de ponta para a reposição de dentes perdidos, recuperando a sua autoestima e conforto ao mastigar." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "Odontologia Estética", desc: "Procedimentos avançados voltados para a harmonização e beleza do seu sorriso, sempre com foco em resultados elegantes." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Saúde e Bem Estar", desc: "Acreditamos que a saúde bucal reflete na saúde geral. Realizamos prevenções e tratamentos focados na sua qualidade de vida." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Cada sorriso é único. Nossa equipe está preparada para entender suas necessidades e proporcionar uma experiência excepcional." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Nossos Especialistas",
    members: [
      { name: "Especialista DHC", cro: "Reabilitação Oral", specialty: "Lentes e Implantes", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Especialista DHC", cro: "Odontologia Estética", specialty: "Saúde e Bem Estar", img: "https://images.unsplash.com/photo-1594824432258-f9b1a50c3d9a?w=400&h=500&fit=crop&auto=format" },
      { name: "Especialista DHC", cro: "Atendimento Clínico", specialty: "Cuidado Humanizado", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Estrutura DHC",
    title1: "Um lugar feito para",
    title2: "encantar",
    title3: "e cuidar.",
    desc: "Cada detalhe deste espaço foi pensado para que você se sinta acolhido desde o primeiro momento. Um ambiente onde conforto, cuidado e excelência caminham juntos.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Odontologia de Alto Padrão", content: "Combinamos excelência técnica com um ambiente moderno e acolhedor. Nossa clínica no centro de Linhares foi projetada para oferecer a melhor experiência." },
      { title: "Tecnologia e Precisão", content: "Utilizamos as mais recentes inovações da odontologia, como lentes em resina e implantes avançados, para entregar resultados de alta durabilidade e naturalidade." },
      { title: "Olhar Humano", content: "Aqui você não é apenas um paciente. Nós acreditamos que a sua experiência durante todo o tratamento é tão importante quanto o seu resultado final." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que nossos pacientes dizem",
    googleScore: "5.0",
    googleReviews: "38 Avaliações",
    list: [
      { name: "Paciente DHC", role: "Paciente", stars: 5, text: "O atendimento da DHC é impecável. O espaço é maravilhoso e os profissionais têm um cuidado humano muito grande em cada detalhe.", img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente DHC", role: "Paciente", stars: 5, text: "Fiz minhas lentes em resina e o resultado ficou com uma naturalidade incrível. A tecnologia e a sofisticação da clínica me passaram muita segurança.", img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente DHC", role: "Paciente", stars: 5, text: "Desde a recepção até a finalização do meu implante, me senti acolhida. É realmente um ambiente onde o conforto e a excelência caminham juntos.", img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format" }
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
    p_bold1: "excelência técnica",
    p2: "é refletida na naturalidade de cada sorriso. Explore nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e conheça o padrão da",
    p_bold3: "DHC Odontologia",
    btn: "Ver Galeria de Casos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde a DHC Odontologia está localizada?", a: "Estamos na Av. Nogueira da Gama, 1351, no Centro de Linhares - ES. Um espaço criado com foco no seu bem-estar e conforto." },
      { q: "Quais tratamentos estéticos vocês realizam?", a: "Trabalhamos com reabilitação oral, estética avançada e lentes em resina, sempre priorizando a naturalidade e a saúde do seu sorriso." },
      { q: "Qual o horário de funcionamento da clínica?", a: "Atendemos de segunda a sexta-feira, abertos até as 18:00. Entre em contato pelo nosso WhatsApp para agendar sua avaliação." },
      { q: "A clínica realiza implantes?", a: "Sim, somos especialistas em implantes dentários. Utilizamos tecnologia de alto padrão para planejar o seu sorriso de forma única e segura." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Av. Nogueira da Gama, 1351", value2: "Centro, Linhares - ES" },
    box2: { title: "Localização", value1: "Linhares, ES", value2: "CEP: 29900-043" },
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
    desc: "Entre em contato para agendar sua avaliação ou tirar dúvidas. Nossa equipe está pronta para recebê-lo com um olhar humano e atencioso.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe o nosso dia a dia",
    box3_desc2: "@dhcodontologia no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Um espaço criado para oferecer odontologia de alto padrão, com tecnologia, excelência técnica e um olhar humano.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 DHC Odontologia Especializada. Todos os direitos reservados.",
    registro: "Centro — Linhares, ES"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio Clínico",
    title1: "Seu sorriso,",
    title2: "planejado de forma única.",
    p1: "Navegue pela nossa",
    p_bold1: "galeria de casos",
    p2: ". A tecnologia aliada ao nosso",
    p_bold2: "olhar humano",
    p3: "em Linhares nos permite entregar resultados que unem naturalidade, saúde e sofisticação.",
    btnSaberMais: "Agendar caso semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Lentes em Resina", duration: "Estética e Naturalidade", complaint: "Desgastes e coloração irregular comprometendo a harmonia do rosto.", procedure: "Reabilitação estética com lentes em resina planejadas de forma única e natural.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Reabilitação Oral", duration: "Cuidado Completo", complaint: "Função mastigatória e estética afetadas por perdas dentárias.", procedure: "Tratamento integrado devolvendo a saúde, conforto e a beleza do sorriso.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Estética Avançada", duration: "Alta Tecnologia", complaint: "Sorriso com manchas e formato desarmônico ao longo dos anos.", procedure: "Protocolo estético minimamente invasivo para elevar o brilho com sofisticação.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" },
      { category: "Implantes Dentários", duration: "Saúde e Bem Estar", complaint: "Ausência dentária impactando a qualidade de vida e a autoestima.", procedure: "Planejamento com tecnologia de ponta para reposição segura e excelência técnica.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" }
    ]
  }
};