import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, Stethoscope, HeartHandshake } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Dra. Ana Julia Ribeiro",
    subtitulo: "Cirurgiã Dentista",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/5516993768794",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(16) 99376-8794",
      emailLabel: "contato@draanajuliaribeiro.com",
      instagramLabel: "@dra.anajuliaribeiro no Instagram",
    },
    endereco: {
      bairroCidade: "Morro Agudo - SP",
      edificio: "Rua Barão do Rio Branco, 1318",
      detalhado: "Rua Barão do Rio Branco, 1318\nMorro Agudo - SP, 14640-000",
      comodidades: ["Ambiente acolhedor", "Fácil acesso", "Atendimento humanizado"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Rua+Barão+do+Rio+Branco,+1318,+Morro+Agudo+-+SP",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0544158499266!2d-48.0583331!3d-20.731454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bbbc2b24e64f7b%3A0x6b77c59a0f0d2c0e!2sR.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%201318%20-%20Morro%20Agudo%2C%20SP%2C%2014640-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sexta\nAberto até as 19:00",
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
    eyebrow: "Morro Agudo — SP",
    title1: "Cuidando do seu",
    title2: "sorriso",
    title3: "com saúde.",
    desc1: "Medo de dentista é mais comum do que você imagina. Aqui, ele é acolhido com ",
    descBold: "cuidado, paciência e respeito.",
    desc2: " Transformamos cada consulta em uma experiência leve e segura.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Conheça a equipe",
    badgeTitle: "Destaque",
    badgeDesc: "Atendimento Humanizado",
    stats: [
      { target: 5, suffix: ".0", label: "nota no google", thousands: false },
      { target: 10, suffix: "+", label: "lentes em resina", thousands: false },
      { target: 100, suffix: "%", label: "cuidado e paciência", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Um sonho que",
    title2: "ganhou forma.",
    p1: "Hoje temos um lugar para chamar de nosso. Um espaço criado com gratidão, amor e apoio familiar para oferecer a você o melhor cuidado odontológico em Morro Agudo.",
    p2_1: "Nossa clínica é um ambiente onde a saúde e o ",
    p2_bold: "cuidado de verdade",
    p2_2: " caminham juntos. Com parcerias exclusivas e uma metodologia acolhedora, garantimos o bem-estar de toda a sua família, desde os pequenos até os adultos.",
    topics: [
      { title: "Odontopediatria Acolhedora", desc: "Consultas leves e seguras para os pequenos." },
      { title: "Lentes em Resina", desc: "Transformações estéticas com naturalidade." },
      { title: "Atendimento com Respeito", desc: "Paciência e cuidado para quem tem medo de dentista." },
      { title: "Estrutura Nova", desc: "Um espaço sonhado e preparado para você." },
    ],
    btn: "Agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop", title: "Um Sonho Realizado" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Atendimento Humanizado" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Cuidado e Respeito" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Cuidado de",
    title2: "verdade.",
    desc1: "Atuamos com ",
    descBold: "excelência e dedicação",
    desc2: " em diversas áreas, sempre priorizando a sua saúde e conforto durante todo o tratamento.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontopediatria", desc: "Transformamos cada consulta em uma experiência leve e segura para os pequenos. Parceria exclusiva com a Wizard Morro Agudo." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes em Resina", desc: "Renove a estética do seu sorriso com procedimentos modernos, corrigindo cor e formato com resultados incrivelmente naturais." },
      { icon: <HeartHandshake size={28} strokeWidth={1.2} />, title: "Atendimento Acolhedor", desc: "Acolhemos o medo de dentista com muito cuidado, paciência e respeito, garantindo uma experiência tranquila." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Clínica Geral", desc: "Prevenção, limpezas e cuidados essenciais para manter a sua saúde bucal e da sua família sempre em dia." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Cirurgia", desc: "Procedimentos cirúrgicos realizados com a máxima segurança, técnica e atenção ao conforto pós-operatório do paciente." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Odontologia Familiar", desc: "Um ambiente preparado para atender desde as crianças até os adultos, fortalecendo a comunidade de Morro Agudo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Nossa Equipe",
    members: [
      { name: "Dra. Ana Julia Ribeiro", cro: "CRO/SP 162327", specialty: "Cirurgiã Dentista", img: "https://images.unsplash.com/photo-1594824432258-f9b1a50c3d9a?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Samara Galvani", cro: "Especialista", specialty: "Cirurgiã Dentista", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Dr. Carlos Eduardo", cro: "Especialista", specialty: "Cirurgião Dentista", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Nossa Estrutura",
    title1: "Um lugar para",
    title2: "chamar de",
    title3: "nosso.",
    desc: "Nossa clínica em Morro Agudo foi planejada para oferecer qualidade, confiança e bem-estar. Um sonho realizado para atender você com o maior conforto.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Parceria com a Comunidade", content: "Nos unimos à Wizard Morro Agudo para provar que quando negócios locais se apoiam, toda a comunidade cresce. Garantimos o futuro dos seus filhos com saúde bucal e educação." },
      { title: "Ambiente Acolhedor", content: "Sabemos que o medo de dentista é real. Por isso, nossa estrutura e equipe estão prontas para te receber com a máxima paciência e respeito em cada etapa." },
      { title: "Tecnologia em Estética", content: "Oferecemos tratamentos de ponta como lentes em resina para garantir que a sua estética dental seja acompanhada de saúde e durabilidade." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que nossos pacientes dizem",
    googleScore: "5.0",
    googleReviews: "8 Avaliações",
    list: [
      { name: "Paciente Satisfeito", role: "Morro Agudo", stars: 5, text: "Eu tinha muito medo de ir ao dentista, mas a Dra. Ana Julia e sua equipe me atenderam com um carinho e paciência que nunca vi igual. Perdi o medo!", img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format" },
      { name: "Mãe de Paciente", role: "Parceria Wizard", stars: 5, text: "Meu filho adorou a consulta! A abordagem da clínica com as crianças é maravilhosa, transforma um momento de tensão em algo super leve.", img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente Estética", role: "Lentes em Resina", stars: 5, text: "Fiz minhas lentes em resina e o resultado superou todas as expectativas. O sorriso ficou natural e o atendimento foi excelente do início ao fim.", img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format" }
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
    p2: "é refletida na naturalidade de cada paciente. Explore nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e conheça o padrão da",
    p_bold3: "Dra. Ana Julia Ribeiro",
    btn: "Ver Galeria de Casos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde a clínica está localizada?", a: "Estamos na Rua Barão do Rio Branco, 1318, em Morro Agudo - SP. Um espaço novo e planejado para o seu conforto." },
      { q: "A clínica atende crianças?", a: "Com certeza! A Dra. Ana Julia é especialista em odontopediatria e tem parceria com a Wizard Morro Agudo para oferecer uma experiência lúdica e leve para os pequenos." },
      { q: "Tenho muito medo de dentista. E agora?", a: "O medo é muito comum e nós entendemos perfeitamente. Aqui, o seu receio é acolhido com paciência e respeito para que a consulta seja a mais tranquila possível." },
      { q: "Vocês trabalham com estética dental?", a: "Sim, realizamos procedimentos estéticos de alta qualidade, incluindo confecção de Lentes em Resina para a harmonização do seu sorriso." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Barão do Rio Branco, 1318", value2: "Morro Agudo - SP" },
    box2: { title: "Localização", value1: "Morro Agudo, SP", value2: "CEP: 14640-444" },
    box3: { title: "Convênios e Parcerias", value1: "HAPVIDA", value2: "Wizard Morro Agudo" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO: CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Vamos",
    title2: "conversar?",
    desc: "Agende sua consulta e venha conhecer nosso novo espaço. Cuidaremos do seu sorriso com toda a atenção e carinho que você merece.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe o nosso dia a dia",
    box3_desc2: "@dra.anajuliaribeiro no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Cuidando do seu sorriso com saúde. Medo de dentista acolhido com cuidado, paciência e respeito em Morro Agudo.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 Dra. Ana Julia Ribeiro. Todos os direitos reservados.",
    registro: "Morro Agudo — SP | CRO/SP 162327"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio Clínico",
    title1: "Seu sorriso,",
    title2: "cuidado de verdade.",
    p1: "Navegue pela nossa",
    p_bold1: "galeria de casos",
    p2: ". A excelência aliada ao nosso",
    p_bold2: "olhar humano",
    p3: "em Morro Agudo nos permite entregar resultados que unem estética e saúde.",
    btnSaberMais: "Agendar caso semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Lentes em Resina", duration: "Estética e Naturalidade", complaint: "Desgastes e coloração irregular comprometendo a harmonia do rosto.", procedure: "Reabilitação estética com lentes em resina planejadas de forma única e natural.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Odontopediatria", duration: "Cuidado Leve", complaint: "Paciente infantil com muito medo das ferramentas do dentista.", procedure: "Atendimento acolhedor, lúdico e seguro, devolvendo a saúde bucal da criança.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Estética Avançada", duration: "Alta Tecnologia", complaint: "Sorriso com manchas e formato desarmônico ao longo dos anos.", procedure: "Protocolo estético minimamente invasivo para elevar o brilho com sofisticação.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" },
      { category: "Clínica Geral", duration: "Saúde e Bem Estar", complaint: "Dores pontuais e necessidade de limpeza profunda.", procedure: "Diagnóstico preciso e tratamento clínico focado na eliminação do desconforto.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" }
    ]
  }
};