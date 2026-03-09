
interface Translations {
  [key: string]: {
    nav: {
      home: string;
      about: string;
      projects: string;
      companies: string;
      services: string;
      blog: string;
      contact: string;
      certificates: string;
      recommendations: string;
      portfolio: string;
      subtitle: string;
    };
    hero: {
      greeting: string;
      name: string;
      subtitle: string;
      contact: string;
      about: string;
      badge: string;
    };
    book: {
      newRelease: string;
      title: string;
      subtitle: string;
      by: string;
      buyOnAmazon: string;
      aboutTitle: string;
      aboutText1: string;
      aboutText2: string;
      aboutText3: string;
      highlightsTitle: string;
      highlights: string[];
      ctaTitle: string;
      ctaText: string;
      ctaButton: string;
      authorTitle: string;
      authorText: string;
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      skillsTitle: string;
      experienceTitle: string;
      socials: string;
      curriculum: string;
      downloadCV: string;
      cvDescription: string;
      profile: string;
      experience: string;
      education: string;
      youtube: {
        title: string;
        description: string;
        subscribe: string;
      };
    };
    projects: {
      title: string;
      subtitle: string;
      viewAll: string;
      technologies: string;
      seeProject: string;
      viewDetails: string;
    };
    companies: {
      title: string;
      subtitle: string;
      cheetahNetwork: {
        about: string;
      };
      werneckGroup: {
        about: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      webDevelopment: string;
      mobileDevelopment: string;
      uiUxDesign: string;
      digitalMarketing: string;
      seoOptimization: string;
      cloudSolutions: string;
    };
    servicesPage: any;
    blog: any;
    faq: any;
    discord: any;
    footer: any;
    cta: any;
    contact: any;
    certificates: any;
    recommendations: any;
    theme: any;
  };
}

const translations: Translations = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      companies: "Empresas",
      services: "Serviços",
      blog: "Blog",
      contact: "Contato",
      certificates: "Certificados",
      recommendations: "Recomendações",
      portfolio: "Portfólio",
      subtitle: "Full Stack & Empreendedor"
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Talisson Souza",
      subtitle:
        "Desenvolvo sistemas sob medida e lidero equipes que transformam ideias em produtos digitais de alto impacto.",
      contact: "Falar sobre seu projeto",
      about: "Conhecer minha trajetória",
      badge: "Tecnologia. Sistemas. Decisões."
    },
    book: {
      newRelease: "Novo Lançamento",
      title: "Superando Limites",
      subtitle: "da Rejeição ao Sucesso",
      by: "por",
      buyOnAmazon: "Comprar na Amazon",
      aboutTitle: "Sobre o Livro",
      aboutText1: "A vida nem sempre é justa, e muitas vezes enfrentamos barreiras que parecem impossíveis de superar. Neste livro, Talisson Souza compartilha uma visão inspiradora sobre como transformar rejeição, limitações físicas e desafios sociais em combustível para o sucesso.",
      aboutText2: "Ao longo de 121 capítulos, ele ensina lições valiosas sobre resiliência, empreendedorismo, autoconfiança, liderança e visão estratégica, mostrando que é possível conquistar objetivos mesmo diante das maiores adversidades.",
      aboutText3: "Com uma abordagem prática e motivadora, o livro é um guia completo para quem deseja superar obstáculos, fortalecer o caráter, aprender com falhas e construir um legado duradouro. É uma fonte de inspiração para todos que buscam transformar desafios em conquistas concretas e duradouras.",
      highlightsTitle: "O que você vai encontrar",
      highlights: [
        "121 capítulos repletos de lições práticas e inspiradoras",
        "Estratégias para transformar rejeição em oportunidade",
        "Lições de resiliência, empreendedorismo e liderança",
        "Um guia para construir um legado duradouro"
      ],
      ctaTitle: "Transforme sua história",
      ctaText: "Não importa onde você está agora. O que importa é o que você decide fazer a partir deste momento. Este livro pode ser o ponto de virada que você estava procurando.",
      ctaButton: "Adquira seu exemplar",
      authorTitle: "Sobre o Autor",
      authorText: "Talisson Souza é desenvolvedor full-stack, CEO de empresas de tecnologia e gestor de projetos. Desde jovem, enfrentou desafios que o moldaram como profissional e pessoa, transformando cada obstáculo em degrau para o sucesso. Com este livro, ele compartilha suas experiências e aprendizados para inspirar outros a superarem seus próprios limites."
    },
    about: {
      title: "Sobre Mim",
      subtitle:
        "Conheça minha trajetória, as tecnologias que domino e o que me move no universo do desenvolvimento.",
      description:
        "Desenvolvedor full-stack com mais de 8 anos de experiência, especializado em arquitetura de sistemas e liderança técnica. Construo aplicações web escaláveis do zero, com foco em qualidade, performance e experiência do usuário. Também sou empreendedor, fundei e lidero empresas que entregam soluções digitais sob medida para clientes de diversos setores.",
      skillsTitle: "Stack Principal",
      experienceTitle: "Trajetória",
      socials: "Redes Sociais",
      curriculum: "Currículo",
      downloadCV: "Baixar CV",
      cvDescription: "Currículo completo com experiências profissionais e competências técnicas.",
      profile: "Perfil",
      experience: "Experiência",
      education: "Formação",
      youtube: {
        title: "Canal no YouTube",
        description: "Compartilho conteúdo sobre programação, carreira em tech e bastidores do desenvolvimento de software.",
        subscribe: "Inscrever-se"
      }
    },
    projects: {
      title: "Portfólio",
      subtitle: "Projetos que desenvolvi ou liderei do conceito à entrega",
      viewAll: "Ver portfólio completo",
      technologies: "Stack",
      seeProject: "Ver projeto",
      viewDetails: "Detalhes",
    },
    companies: {
      title: "Empresas",
      subtitle: "Empresas que fundei ou que trabalho atualmente",
      cheetahNetwork: {
        about: "Cheetah Solutions Network nasceu em Recife, Pernambuco, com o propósito de transformar o cenário digital por meio de soluções modernas e eficientes. Fundada há 2 anos, começamos com foco no desenvolvimento de bots para Discord e evoluímos rapidamente, consolidando nossa atuação em Desenvolvimento de Sites, Sistemas, APIs, Bots para Discord e Telegram, entre outras soluções tecnológicas personalizadas."
      },
      werneckGroup: {
        about: "O Werneck Group é um grupo empresarial brasileiro que nasce com a missão de conectar negócios, impulsionar inovação e liderar iniciativas no ecossistema digital e tecnológico. Atuamos como uma ponte estratégica entre diferentes frentes operacionais, promovendo a integração entre marcas e garantindo a excelência em cada projeto conduzido sob nossa liderança."
      }
    },
    services: {
      title: "Serviços",
      subtitle: "Soluções técnicas para empresas que precisam de resultados",
      webDevelopment: "Desenvolvimento Web",
      mobileDevelopment: "Desenvolvimento Mobile",
      uiUxDesign: "UI/UX Design",
      digitalMarketing: "Marketing Digital",
      seoOptimization: "Otimização SEO",
      cloudSolutions: "Soluções em Nuvem",
    },
    blog: {
      title: "Blog",
      subtitle: "Artigos técnicos e insights sobre desenvolvimento e tecnologia",
      articlesBasedOnExperience: "Conteúdo baseado em projetos reais",
      backToBlog: "Voltar ao blog",
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Respostas para as perguntas mais comuns sobre meus serviços",
      questions: {
        question1: "Quando NÃO vale a pena me contratar?",
        answer1: "Se você precisa de algo genérico e barato, ou não tem clareza sobre o problema que quer resolver, provavelmente não sou a melhor escolha. Meu foco é em projetos que exigem qualidade técnica e visão estratégica, não volume.",
        question2: "Você trabalha sozinho ou com time?",
        answer2: "Depende do projeto. Para demandas focadas, atuo sozinho com total responsabilidade sobre a entrega. Para projetos maiores, lidero ou integro equipes com profissionais de confiança que escolhi ao longo dos anos.",
        question3: "Como funciona a manutenção pós-entrega?",
        answer3: "Ofereço período de suporte incluso após cada entrega. Para manutenções contínuas, trabalho com contratos mensais de retenção ou atendimento sob demanda, dependendo da complexidade do projeto.",
        question4: "Qual seu prazo médio de entrega?",
        answer4: "Varia conforme o escopo: projetos simples levam 2-4 semanas, sistemas mais robustos entre 2-4 meses. Sempre defino cronograma realista antes de começar, nunca prometo o impossível.",
        question5: "Você faz projetos fora da sua stack?",
        answer5: "Posso adaptar quando faz sentido, mas trabalho melhor com minha stack principal (React, Node.js, TypeScript, PostgreSQL). Se seu projeto exige tecnologias muito diferentes, indico profissionais especializados.",
        question6: "Como você lida com mudanças de escopo?",
        answer6: "Mudanças são normais. Antes de começar, alinho expectativas e documento bem. Alterações significativas são renegociadas de forma transparente, sem surpresas para nenhum lado.",
      },
    },
    servicesPage: {
      title: "Serviços",
      subtitle: "Desenvolvimento sob medida para empresas que buscam excelência técnica",
      client: "Cliente",
      deliveryDate: "Entrega",
      status: "Status",
      completed: "Concluído",
      inProgress: "Em desenvolvimento",
      viewProject: "Ver projeto",
      projectIdea: "Tem um projeto em mente?",
      projectIdeaDescription: "Aceito projetos selecionados onde posso entregar valor real. Vamos conversar sobre sua necessidade.",
      requestQuote: "Solicitar proposta",
      learnMore: "Saber mais",
      viewDetails: "Ver detalhes",
      categories: {
        webDevelopment: {
          title: "Desenvolvimento Web",
          description: "Sites e aplicações web modernas com as melhores tecnologias",
          features: ["Sites Responsivos", "E-commerce", "Aplicações Web", "Landing Pages", "Otimização SEO"]
        },
        mobileDevelopment: {
          title: "Desenvolvimento Mobile",
          description: "Aplicativos mobile nativos e híbridos para iOS e Android",
          features: ["Apps Nativos", "Apps Híbridos", "React Native", "Interface Intuitiva", "Performance Otimizada"]
        },
        botDevelopment: {
          title: "Desenvolvimento de Bots",
          description: "Bots inteligentes para Discord, Telegram e outras plataformas",
          features: ["Bots Discord", "Bots Telegram", "Automação", "Integração APIs", "Comandos Personalizados"]
        },
        uiuxDesign: {
          title: "UI/UX Design",
          description: "Design de interfaces modernas e experiência do usuário otimizada",
          features: ["Design Responsivo", "Prototipagem", "Design System", "Wireframes", "Testes de Usabilidade"]
        },
        cloudSolutions: {
          title: "Soluções em Nuvem",
          description: "Infraestrutura em nuvem escalável e segura",
          features: ["Deploy Automatizado", "Monitoramento", "Backup Automático", "Escalabilidade", "Segurança"]
        },
        consulting: {
          title: "Consultoria Tech",
          description: "Consultoria especializada em tecnologia e gestão de projetos",
          features: ["Análise de Projetos", "Arquitetura de Software", "Code Review", "Mentoria", "Gestão de Equipes"]
        }
      }
    },
    discord: {
      title: "Tech Leaders Network",
      subtitle: "Conectando Mentes, Negócios e Inovação",
      purpose: "Nosso Propósito",
      description1: "A Tech Leaders é uma comunidade criada para unir empreendedores, startups, desenvolvedores, criadores de conteúdo, designers, mentores e profissionais da área de tecnologia em um único ecossistema colaborativo.",
      description2: "Nosso propósito é simples, mas poderoso: conectar pessoas que constroem o futuro, promovendo trocas de conhecimento, parcerias estratégicas e oportunidades reais de crescimento. Aqui, cada membro tem um espaço para aprender, se conectar e gerar impacto. A comunidade foi pensada para reunir quem busca ir além. Pessoas que transformam ideias em soluções e acreditam no poder da colaboração.",
      whatYouFind: "O que você encontra aqui:",
      opportunities: "Oportunidades reais: conecte-se com empresas e profissionais e encontre novas chances de trabalho ou colaboração.",
      partnerships: "Parcerias e Networking: construa conexões com empreendedores, criadores e líderes de diferentes áreas.",
      discussions: "Espaços de discussão especializados: participe de fóruns sobre tecnologia, design, marketing, IA e automação, trocando experiências e aprendizados com especialistas.",
      joinServer: "Entrar na Comunidade",
      owner: "Dono: Talisson Souza",
    },
    footer: {
      role: "Desenvolvedor Full Stack & CEO",
      description: "Mais de 8 anos construindo produtos digitais, liderando equipes técnicas e entregando sistemas que escalam.",
      navigation: "Navegação",
      explore: "Explorar",
      contact: "Contato Profissional",
      email: "Email",
      channels: "Canais",
      allRightsReserved: "Todos os direitos reservados.",
      madeWith: "Feito com dedicação e muito café ☕",
      location: "Brasil"
    },
    cta: {
      title: "Vamos construir algo juntos?",
      subtitle:
        "Se você tem um projeto que precisa de execução técnica sólida, vamos conversar sobre como posso contribuir.",
      contact: "Iniciar conversa",
    },
    contact: {
      title: "Contato",
      subtitle: "Propostas, parcerias ou apenas trocar uma ideia",
      info: "Onde me encontrar",
      location: "Localização",
      social: "Redes",
      form: {
        name: "Seu nome",
        email: "Seu email",
        message: "Sua mensagem",
        send: "Enviar",
        sending: "Enviando...",
        success: "Mensagem enviada!",
        successMessage: "Obrigado pelo contato. Retorno em breve."
      }
    },
    certificates: {
      title: "Meus Certificados",
      subtitle: "Certificações e cursos que obtive ao longo da minha carreira",
      certificate: "Certificado",
      view: "Ver"
    },
    recommendations: {
      title: "Recomendações de Livros",
      subtitle: "Livros que li e super recomendo para outros desenvolvedores"
    },
    theme: {
      light: "Claro",
      dark: "Escuro",
      language: "Idioma"
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      companies: "Companies",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      certificates: "Certificates",
      recommendations: "Recommendations",
      portfolio: "Portfolio",
      subtitle: "Full Stack & Entrepreneur"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Talisson Souza",
      subtitle:
        "I build custom systems and lead teams that turn ideas into high-impact digital products.",
      contact: "Discuss your project",
      about: "Learn my story",
      badge: "Tecnologia. Sistemas. Decisões."
    },
    book: {
      newRelease: "New Release",
      title: "Overcoming Limits",
      subtitle: "from Rejection to Success",
      by: "by",
      buyOnAmazon: "Buy on Amazon",
      aboutTitle: "About the Book",
      aboutText1: "Life isn't always fair, and we often face barriers that seem impossible to overcome. In this book, Talisson Souza shares an inspiring vision on how to transform rejection, physical limitations, and social challenges into fuel for success.",
      aboutText2: "Throughout 121 chapters, he teaches valuable lessons about resilience, entrepreneurship, self-confidence, leadership, and strategic vision, showing that it's possible to achieve goals even in the face of the greatest adversities.",
      aboutText3: "With a practical and motivating approach, the book is a complete guide for those who want to overcome obstacles, strengthen their character, learn from failures, and build a lasting legacy. It's a source of inspiration for all who seek to transform challenges into concrete and lasting achievements.",
      highlightsTitle: "What you will find",
      highlights: [
        "121 chapters full of practical and inspiring lessons",
        "Strategies to transform rejection into opportunity",
        "Lessons in resilience, entrepreneurship, and leadership",
        "A guide to building a lasting legacy"
      ],
      ctaTitle: "Transform your story",
      ctaText: "It doesn't matter where you are now. What matters is what you decide to do from this moment on. This book could be the turning point you were looking for.",
      ctaButton: "Get your copy",
      authorTitle: "About the Author",
      authorText: "Talisson Souza is a full-stack developer, CEO of technology companies, and project manager. From a young age, he faced challenges that shaped him as a professional and person, transforming each obstacle into a stepping stone to success. With this book, he shares his experiences and learnings to inspire others to overcome their own limits."
    },
    about: {
      title: "About Me",
      subtitle:
        "My journey, the technologies I master, and what drives me in software development.",
      description:
        "Full-stack developer with 8+ years of experience, specialized in systems architecture and technical leadership. I build scalable web applications from scratch, focused on quality, performance, and user experience. I'm also an entrepreneur, I founded and lead companies delivering custom digital solutions across industries.",
      skillsTitle: "Main Stack",
      experienceTitle: "Journey",
      socials: "Social Media",
      curriculum: "Resume",
      downloadCV: "Download CV",
      cvDescription: "Complete resume with professional experience and technical skills.",
      profile: "Profile",
      experience: "Experience",
      education: "Education",
      youtube: {
        title: "YouTube Channel",
        description: "I share content about programming, tech careers, and behind-the-scenes of software development.",
        subscribe: "Subscribe"
      }
    },
    projects: {
      title: "Portfolio",
      subtitle: "Projects I developed or led from concept to delivery",
      viewAll: "View full portfolio",
      technologies: "Stack",
      seeProject: "View project",
      viewDetails: "Details",
    },
    companies: {
      title: "Companies",
      subtitle: "Companies I founded or currently work for",
      cheetahNetwork: {
        about: "Cheetah Solutions Network was born in Recife, Pernambuco, with the purpose of transforming the digital landscape through modern and efficient solutions. Founded 2 years ago, we started with a focus on developing Discord bots and evolved rapidly, consolidating our work in Website Development, Systems, APIs, Discord and Telegram Bots, among other customized technological solutions."
      },
      werneckGroup: {
        about: "Werneck Group is a Brazilian business group that was born with the mission of connecting businesses, driving innovation and leading initiatives in the digital and technological ecosystem. We act as a strategic bridge between different operational fronts, promoting integration between brands and ensuring excellence in each project conducted under our leadership."
      }
    },
    services: {
      title: "Services",
      subtitle: "Technical solutions for companies that need results",
      webDevelopment: "Web Development",
      mobileDevelopment: "Mobile Development",
      uiUxDesign: "UI/UX Design",
      digitalMarketing: "Digital Marketing",
      seoOptimization: "SEO Optimization",
      cloudSolutions: "Cloud Solutions",
    },
    blog: {
      title: "Blog",
      subtitle: "Technical articles and insights on development and technology",
      articlesBasedOnExperience: "Content based on real projects",
      backToBlog: "Back to blog",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about my services",
      questions: {
        question1: "When is it NOT worth hiring me?",
        answer1: "If you need something generic and cheap, or don't have clarity about the problem you want to solve, I'm probably not the best choice. My focus is on projects that require technical quality and strategic vision, not volume.",
        question2: "Do you work alone or with a team?",
        answer2: "It depends on the project. For focused demands, I work alone with full responsibility for delivery. For larger projects, I lead or integrate teams with trusted professionals I've chosen over the years.",
        question3: "How does post-delivery maintenance work?",
        answer3: "I offer included support period after each delivery. For ongoing maintenance, I work with monthly retainer contracts or on-demand service, depending on project complexity.",
        question4: "What's your average delivery time?",
        answer4: "It varies by scope: simple projects take 2-4 weeks, more robust systems between 2-4 months. I always set a realistic timeline before starting, never promise the impossible.",
        question5: "Do you work on projects outside your stack?",
        answer5: "I can adapt when it makes sense, but I work best with my main stack (React, Node.js, TypeScript, PostgreSQL). If your project requires very different technologies, I refer specialized professionals.",
        question6: "How do you handle scope changes?",
        answer6: "Changes are normal. Before starting, I align expectations and document well. Significant changes are renegotiated transparently, no surprises for either side.",
      },
    },
    servicesPage: {
      title: "Services",
      subtitle: "Custom development for companies seeking technical excellence",
      client: "Client",
      deliveryDate: "Delivery",
      status: "Status",
      completed: "Completed",
      inProgress: "In development",
      viewProject: "View project",
      projectIdea: "Have a project in mind?",
      projectIdeaDescription: "I take on selected projects where I can deliver real value. Let's discuss your needs.",
      requestQuote: "Request proposal",
      learnMore: "Learn more",
      viewDetails: "View details",
      categories: {
        webDevelopment: {
          title: "Web Development",
          description: "Modern websites and web applications with the best technologies",
          features: ["Responsive Sites", "E-commerce", "Web Applications", "Landing Pages", "SEO Optimization"]
        },
        mobileDevelopment: {
          title: "Mobile Development",
          description: "Native and hybrid mobile apps for iOS and Android",
          features: ["Native Apps", "Hybrid Apps", "React Native", "Intuitive Interface", "Optimized Performance"]
        },
        botDevelopment: {
          title: "Bot Development",
          description: "Intelligent bots for Discord, Telegram and other platforms",
          features: ["Discord Bots", "Telegram Bots", "Automation", "API Integration", "Custom Commands"]
        },
        uiuxDesign: {
          title: "UI/UX Design",
          description: "Modern interface design and optimized user experience",
          features: ["Responsive Design", "Prototyping", "Design System", "Wireframes", "Usability Testing"]
        },
        cloudSolutions: {
          title: "Cloud Solutions",
          description: "Scalable and secure cloud infrastructure",
          features: ["Automated Deploy", "Monitoring", "Automatic Backup", "Scalability", "Security"]
        },
        consulting: {
          title: "Tech Consulting",
          description: "Specialized consulting in technology and project management",
          features: ["Project Analysis", "Software Architecture", "Code Review", "Mentoring", "Team Management"]
        }
      }
    },
    discord: {
      title: "Tech Leaders Network",
      subtitle: "Connecting Minds, Business and Innovation",
      purpose: "Our Purpose",
      description1: "Tech Leaders is a community created to unite entrepreneurs, startups, developers, content creators, designers, mentors and technology professionals in a single collaborative ecosystem.",
      description2: "Our purpose is simple, but powerful: to connect people who build the future, promoting knowledge exchanges, strategic partnerships and real growth opportunities. Here, each member has a space to learn, connect and generate impact. The community was designed to bring together those who seek to go further. People who transform ideas into solutions and believe in the power of collaboration.",
      whatYouFind: "What you find here:",
      opportunities: "Real opportunities: connect with companies and professionals and find new chances for work or collaboration.",
      partnerships: "Partnerships and Networking: build connections with entrepreneurs, creators and leaders from different areas.",
      discussions: "Specialized discussion spaces: participate in forums on technology, design, marketing, AI and automation, exchanging experiences and learnings with experts.",
      joinServer: "Join the Community",
      owner: "Owner: Talisson Souza",
    },
    footer: {
      role: "Full Stack Developer & CEO",
      description: "8+ years building digital products, leading technical teams, and delivering systems that scale.",
      navigation: "Navigation",
      explore: "Explore",
      contact: "Professional Contact",
      email: "Email",
      channels: "Channels",
      allRightsReserved: "All rights reserved.",
      madeWith: "Made with dedication and lots of coffee ☕",
      location: "Brazil"
    },
    cta: {
      title: "Let's build something together?",
      subtitle:
        "If you have a project that needs solid technical execution, let's discuss how I can contribute.",
      contact: "Start conversation",
    },
    contact: {
      title: "Contact",
      subtitle: "Proposals, partnerships, or just to exchange ideas",
      info: "Where to find me",
      location: "Location",
      social: "Networks",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent!",
        successMessage: "Thanks for reaching out. I'll get back to you soon."
      }
    },
    certificates: {
      title: "My Certificates",
      subtitle: "Certifications and courses I obtained throughout my career",
      certificate: "Certificate",
      view: "View"
    },
    recommendations: {
      title: "Book Recommendations",
      subtitle: "Books I've read and highly recommend to other developers"
    },
    theme: {
      light: "Light",
      dark: "Dark",
      language: "Language"
    },
  },
};

export const useTranslation = (language: string) => {
  return translations[language as keyof typeof translations] || translations.pt;
};

// Helper function for inline 2-language translations
export const getText = (language: string, pt: string, en: string): string => {
  return language === 'pt' ? pt : en;
};
