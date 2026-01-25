import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import CompanyCard from "@/components/ui/CompanyCard";
import { 
  Rocket, Target, Heart, Users, Lightbulb, Shield, 
  Award, Calendar, Building2, Briefcase,
  Quote, Sparkles, HandHeart, MessageCircle, ArrowRight,
  Star, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Career = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const content = {
    pt: {
      title: "Minha Carreira",
      subtitle: "Transformando desafios em oportunidades",
      myStory: "Minha História e Propósito",
      myJourney: "Minha Jornada no Mundo Tech",
      whyCompany: "Por que decidi criar minha própria empresa aos 17 anos?",
      achievements: "Conquistas e Trajetória",
      timeline: "Linha do Tempo",
      testimonials: "Depoimentos",
      values: "Valores Pessoais",
      quotes: "Frases Inspiradoras",
      inclusion: "Inclusão e Impacto Social",
      partnerships: "Parcerias e Atuações",
      companies: "Minhas Empresas",
      cta: "Vamos Trabalhar Juntos"
    },
    en: {
      title: "My Career",
      subtitle: "Transforming challenges into opportunities",
      myStory: "My Story and Purpose",
      myJourney: "My Journey in the Tech World",
      whyCompany: "Why I decided to start my own company at 17?",
      achievements: "Achievements and Journey",
      timeline: "Timeline",
      testimonials: "Testimonials",
      values: "Personal Values",
      quotes: "Inspiring Quotes",
      inclusion: "Inclusion and Social Impact",
      partnerships: "Partnerships and Activities",
      companies: "My Companies",
      cta: "Let's Work Together"
    }
  };

  const tt = content[language];

  const storyPt = `Meu nome é Talisson Souza, mas muitos me conhecem como Talinho. Sou Empreendedor Executivo, Diretor de Negócios Empresariais e Desenvolvedor Full Stack. Minha relação com a tecnologia começou de forma simples: na curiosidade de explorar, aprender e descobrir. O que parecia apenas diversão virou paixão, e essa paixão se transformou em propósito de vida.

Aos 14 anos, desenvolvi meus primeiros bots para Discord. Ali percebi que tecnologia não era apenas código, mas sim uma forma de conectar pessoas e transformar ideias em soluções reais. Desde então, mergulhei de cabeça nesse universo, aprendendo de forma independente, encarando desafios e sempre buscando novas formas de crescer.

Com o tempo, a tecnologia deixou de ser apenas uma habilidade. Ela se tornou parte da minha identidade. Estar envolvido em cada etapa da primeira linha de código ao resultado final é o que me motiva a seguir criando. Desenvolvimento web, mobile, bots inteligentes e infraestrutura são mais do que áreas de atuação: são minha forma de me expressar e de impactar o mundo.`;

  const storyEn = `My name is Talisson Souza, but many know me as Talinho. I'm an Executive Entrepreneur, Business Director, and Full Stack Developer. My relationship with technology began simply: in the curiosity to explore, learn and discover. What seemed like just fun became passion, and that passion transformed into a life purpose.

At 14, I developed my first bots for Discord. There I realized that technology was not just code, but a way to connect people and transform ideas into real solutions. Since then, I've dived headfirst into this universe, learning independently, facing challenges and always seeking new ways to grow.

Over time, technology ceased to be just a skill. It became part of my identity. Being involved in every step from the first line of code to the final result is what motivates me to keep creating. Web, mobile development, smart bots and infrastructure are more than areas of work: they are my way of expressing myself and impacting the world.`;

  const whyCompanyPt = `Em 2021, participei de um processo seletivo para uma vaga de Jovem Aprendiz. Passei por todas as etapas com dedicação e confiança: entrevista, exames médicos, preparação. A vaga era para trabalhar com computadores minha paixão desde cedo.

No entanto, ao final do processo, fui recusado. Não por falta de qualificação. Não por falta de capacidade. Mas por causa da minha cadeira de rodas.

Foi um choque. Senti tristeza, frustração e até raiva. Eu sabia que poderia desempenhar o trabalho com excelência, mas fui julgado por algo que não define meu potencial.

Naquele momento, entendi que, por mais que nos preparemos, ainda existe muito preconceito e falta de inclusão em diversos lugares. Muitas vezes, somos enxergados apenas pela aparência, e não pelo que realmente somos capazes de fazer. Então, tomei uma decisão: se não iam me dar espaço, eu criaria o meu próprio espaço.

Assim nasceu a Cheetah Network. Mais do que uma empresa, ela representa a transformação de uma dor em propósito. Um lugar onde competência e inclusão caminham juntas, e onde cada pessoa pode mostrar seu valor, independente de barreiras.

Hoje, a Cheetah Network conecta pessoas, desenvolve soluções inovadoras e prova que todos merecem oportunidades reais. Construímos um ambiente de trabalho e aprendizado acolhedor, onde cada voz é respeitada e cada talento é reconhecido.

Não estou aqui apenas para ocupar um espaço no mercado. Estou aqui para ajudar a construir um futuro mais justo, onde todos tenham a chance de crescer. Essa jornada não é só minha. É de todos que acreditam que a verdadeira inclusão é possível.`;

  const whyCompanyEn = `In 2021, I participated in a selection process for a Young Apprentice position. I went through all stages with dedication and confidence: interview, medical exams, preparation. The position was to work with computers my passion since early age.

However, at the end of the process, I was rejected. Not for lack of qualification. Not for lack of ability. But because of my wheelchair.

It was a shock. I felt sadness, frustration and even anger. I knew I could perform the job excellently, but I was judged by something that doesn't define my potential.

At that moment, I understood that no matter how much we prepare, there is still a lot of prejudice and lack of inclusion in many places. Often, we are seen only by appearance, not by what we are really capable of doing. So, I made a decision: if they wouldn't give me space, I would create my own space.

Thus Cheetah Network was born. More than a company, it represents the transformation of pain into purpose. A place where competence and inclusion walk together, and where each person can show their value, regardless of barriers.

Today, Cheetah Network connects people, develops innovative solutions and proves that everyone deserves real opportunities. We build a welcoming work and learning environment, where every voice is respected and every talent is recognized.

I'm not here just to occupy a space in the market. I'm here to help build a fairer future, where everyone has a chance to grow. This journey is not just mine. It's for everyone who believes that true inclusion is possible.`;

  const stats = [
    { icon: Award, label: getText(language, "Projetos Entregues", "Projects Delivered"), value: "50+" },
    { icon: Building2, label: getText(language, "Empresas Fundadas", "Companies Founded"), value: "2" },
    { icon: Star, label: getText(language, "Satisfação", "Satisfaction"), value: "100%" },
    { icon: Calendar, label: getText(language, "Anos de Experiência", "Years of Experience"), value: "8+" }
  ];

  const timelineEvents = [
    {
      year: "2018",
      title: getText(language, "Início da Jornada", "Journey Begins"),
      description: getText(language, "Aos 14 anos, criei meus primeiros bots para Discord", "At 14, I created my first Discord bots"),
      icon: Rocket
    },
    {
      year: "2021",
      title: getText(language, "Momento Decisivo", "Decisive Moment"),
      description: getText(language, "Experiência discriminatória que motivou a criação da própria empresa", "Discriminatory experience that motivated the creation of my own company"),
      icon: Target
    },
    {
      year: "2023",
      title: getText(language, "Fundação da Cheetah Network", "Cheetah Network Founded"),
      description: getText(language, "Criação da empresa focada em inclusão e soluções digitais", "Company created focused on inclusion and digital solutions"),

      icon: Building2
    },
    {
      year: "2024",
      title: getText(language, "Diretor Estratégico - Werneck Group", "Strategic Director - Werneck Group"),
      description: getText(language, "Assumo nova posição estratégica em consultoria empresarial", "Taking on new strategic position in business consulting"),
      icon: Briefcase
    },
    {
      year: "2024",
      title: getText(language, "Parcerias e Atuações", "Partnerships and Activities"),
      description: getText(language, "Parceiro Square Cloud e Influencer Rocketseat", "Square Cloud Partner and Influencer Rocketseat"),
      icon: HandHeart
    }
  ];

  const testimonials = [
    {
      name: "Priscila Suanne",
      role: language === 'pt' ? "Desenvolvedora Back End na Cheetah Network" : "Back End Developer at Cheetah Network",
      text: language === 'pt' 
        ? "Tive o prazer de conhecer e trabalhar com Thalisson, um profissional extremamente comprometido, resiliente e dedicado em tudo o que faz. Sua postura ética, foco em resultados e capacidade de adaptação foram fundamentais para o sucesso dos projetos em que atuamos juntos. Thalisson sempre demonstrou iniciativa, responsabilidade e uma excelente colaboração em equipe, contribuindo de forma significativa para o ambiente de trabalho e para o crescimento dos processos. Sem dúvida, é um profissional que agrega muito valor e que eu recomendo com total confiança."
        : "I had the pleasure of meeting and working with Thalisson, an extremely committed, resilient and dedicated professional in everything he does. His ethical stance, focus on results and adaptability were fundamental to the success of the projects we worked on together. Thalisson always demonstrated initiative, responsibility and excellent team collaboration, contributing significantly to the work environment and process growth. Without a doubt, he is a professional who adds great value and whom I recommend with complete confidence.",
      image: "https://i.ibb.co/zWp10rhx/Priscila.jpg",
      date: language === 'pt' ? "18 de setembro de 2025" : "September 18, 2025",
      relation: language === 'pt' ? "Talisson Supervisionava Priscila na Cheetah Network" : "Talisson supervised Priscila at Cheetah Network"
    },
    {
      name: "Camile Vitória Barros",
      role: language === 'pt' ? "Assistente de Suporte Administrativo na Cheetah Network" : "Administrative Support Assistant at Cheetah Network",
      text: language === 'pt' 
        ? "Recomendo os serviços de Talisson, pois acompanho de perto seu comprometimento, seriedade e dedicação em cada projeto. Seu trabalho é marcado pela qualidade, responsabilidade e foco em entregar sempre os melhores resultados. Sem dúvidas, uma escolha segura para quem busca excelência. :)"
        : "I recommend Talisson's services, as I closely follow his commitment, seriousness and dedication in each project. His work is marked by quality, responsibility and focus on always delivering the best results. Without a doubt, a safe choice for those seeking excellence. :)",
      image: "https://i.ibb.co/nN5LJhpk/Camile.jpg",
      date: language === 'pt' ? "15 de Setembro de 2025" : "September 15, 2025",
      relation: language === 'pt' ? "Camile trabalha na mesma empresa que o Talisson" : "Camile works at the same company as Talisson"
    },
    {
      name: "Rafael Araujo",
      role: language === 'pt' ? "Colega de Estudos" : "Study Colleague",
      text: language === 'pt' 
        ? "Tive a oportunidade de estudar ao lado do Talisson e posso afirmar que ele é uma pessoa extremamente dedicada e comprometida. Sua capacidade de liderança sempre se destacou, conduzindo o grupo de forma organizada e motivadora. Além disso, sua responsabilidade e disposição para colaborar fizeram toda diferença em diversos trabalhos em equipe. Sem dúvidas, é alguém que agrega muito valor em qualquer ambiente de estudo ou trabalho"
        : "I had the opportunity to study alongside Talisson and I can say that he is an extremely dedicated and committed person. His leadership ability has always stood out, leading the group in an organized and motivating way. In addition, his responsibility and willingness to collaborate made all the difference in various team assignments. Without a doubt, he is someone who adds great value in any study or work environment",
      image: "https://i.ibb.co/s9BCVGsP/Rafael.jpg",
      date: language === 'pt' ? "13 de Setembro de 2025" : "September 13, 2025",
      relation: language === 'pt' ? "Rafael e Talisson estudavam na mesma instituição" : "Rafael and Talisson studied at the same institution"
    },
    {
      name: "Matheus Yuri Silva",
      role: language === 'pt' ? "Desenvolvedor de Software na Cheetah Network" : "Software Developer at Cheetah Network",
      text: language === 'pt' 
        ? "É uma honra poder acompanhar o trabalho do Talisson. Ele demonstra uma combinação rara de expertise em desenvolvimento full stack e uma visão de negócios afiada. Suas soluções são sempre criativas, eficientes e focadas no impacto real. Um profissional dedicado, resiliente e com notável potencial de liderança"
        : "It is an honor to follow Talisson's work. He demonstrates a rare combination of full stack development expertise and sharp business vision. His solutions are always creative, efficient and focused on real impact. A dedicated, resilient professional with remarkable leadership potential",
      image: "https://i.ibb.co/V0P35B23/Matheus.jpg",
      date: language === 'pt' ? "12 de Setembro de 2025" : "September 12, 2025",
      relation: language === 'pt' ? "Talisson Supervisionava Matheus na mesma equipe" : "Talisson supervised Matheus on the same team"
    },
    {
      name: "Kleber Silva",
      role: language === 'pt' ? "Desenvolvedor Full Stack na Cheetah Network" : "Full Stack Developer at Cheetah Network",
      text: language === 'pt' ? "Empreendedor" : "Entrepreneur",
      image: "https://i.ibb.co/G4vY5qv9/Kleber.jpg",
      date: language === 'pt' ? "12 de Setembro de 2025" : "September 12, 2025",
      relation: language === 'pt' ? "Talisson Supervisionava Kleber na mesma equipe" : "Talisson supervised Kleber on the same team"
    },
    {
      name: "Davi R. Fraustino",
      role: language === 'pt' ? "Consultor de Tecnologia na Cheetah Network" : "Technology Consultant at Cheetah Network",
      text: language === 'pt' 
        ? "Tive a oportunidade de acompanhar o trabalho do Talisson, ele é um excelente profissional sendo capaz de unir conhecimento técnico em desenvolvimento full stack com visão estratégica de negócios. Ele sempre entrega soluções criativas e eficientes, sempre atento ao impacto real para clientes e equipes. Um profissional comprometido, resiliente e com grande potencial de liderança."
        : "I had the opportunity to follow Talisson's work, he is an excellent professional capable of combining full stack development technical knowledge with strategic business vision. He always delivers creative and efficient solutions, always attentive to the real impact for clients and teams. A committed, resilient professional with great leadership potential.",
      image: "https://i.ibb.co/BH9gwhBg/Foto-do-Davi.jpg",
      date: language === 'pt' ? "12 de Setembro de 2025" : "September 12, 2025",
      relation: language === 'pt' ? "Talisson Supervisionava Davi na mesma equipe" : "Talisson supervised Davi on the same team"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: language === 'pt' ? "Empatia" : "Empathy",
      description: language === 'pt' ? "Colocar-se no lugar do outro e criar soluções humanas" : "Putting yourself in others' shoes and creating human solutions"
    },
    {
      icon: Lightbulb,
      title: language === 'pt' ? "Inovação" : "Innovation",
      description: language === 'pt' ? "Buscar constantemente novas formas de resolver problemas" : "Constantly seeking new ways to solve problems"
    },
    {
      icon: Shield,
      title: language === 'pt' ? "Transparência" : "Transparency",
      description: language === 'pt' ? "Honestidade e clareza em todas as relações" : "Honesty and clarity in all relationships"
    },
    {
      icon: Users,
      title: language === 'pt' ? "Inclusão" : "Inclusion",
      description: language === 'pt' ? "Criar oportunidades para todos, sem barreiras" : "Create opportunities for everyone, without barriers"
    }
  ];

  const quotes = [
    language === 'pt' ? '"A verdadeira inovação nasce quando quebramos barreiras, não quando as aceitamos."' : '"True innovation is born when we break barriers, not when we accept them."',
    language === 'pt' ? '"Tecnologia é a ferramenta, mas o propósito é humano."' : '"Technology is the tool, but the purpose is human."',
    language === 'pt' ? '"Não espere pela oportunidade perfeita. Crie ela."' : '"Don\'t wait for the perfect opportunity. Create it."'
  ];

  const partnerships = [
    {
      name: "Tech Leaders Network",
      description: language === 'pt' ? "Fundador da Tech Leaders Network, uma comunidade exclusiva para empreendedores, programadores e donos de empresas" : "Founder of Tech Leaders Network, an exclusive community for entrepreneurs, programmers and business owners",
      logo: "https://i.ibb.co/M5jS68gD/93afd9c07484ebe558d11e4b95c6d976.png",
      banner: "https://i.ibb.co/Zzn1NtJ1/Tech-Leaders.jpg",
      link: "https://discord.gg/edZWXqcxuF",
      color: "blue",
      badge: language === 'pt' ? 'Fundador' : 'Founder'
    },
    {
      name: "Rocketseat",
      description: language === 'pt' ? "Influenciador oficial da Rocketseat, a maior comunidade de desenvolvedores do Brasil" : "Official influencer at Rocketseat, the largest developer community in Brazil",
      logo: "https://i.ibb.co/jvVR1DzD/rocketseat-logo.jpg",
      banner: "https://i.ibb.co/5hR5T77f/banner-rocketseat.webp",
      link: "https://https://www.rocketseat.com.br/oferta/influencer/v2/talinho",
      color: "purple",
      badge: "Influencer"
    },
    {
      name: "Square Cloud",
      description: language === 'pt' ? "Parceiro da maior empresa de hospedagem para bots, sites e banco de dados da América Latina" : "Partner of the largest hosting company for bots, websites and databases in Latin America",
      logo: "https://squarecloud.app/favicon.ico",
      banner: "https://i.ibb.co/7xPkwhZy/Square-Cloud.png",
      link: "https://squarecloud.app",
      color: "purple",
      badge: language === 'pt' ? 'Parceiro Oficial' : 'Official Partner'
    },
    {
      name: "Brasil Play Shox",
      description: language === 'pt' ? "Ex Moderador Discord do maior servidor de GTA San Andreas Online da América Latina" : "Former Discord Moderator of the largest GTA San Andreas Online server in Latin America",
      logo: "https://i.ibb.co/GvST1msf/Shox-logo.gif",
      banner: "https://i.ibb.co/0pC2xh25/Shox-banner.png",
      link: "https://discord.gg/bps",
      color: "purple",
      badge: language === 'pt' ? 'Ex Moderador' : 'Former Moderator'
    },
    {
      name: "ModsClub",
      description: language === 'pt' ? "Sou Profissional de Comunidade na ModsClub, uma comunidade que reúne moderadores e donos de servidores, oferecendo aprendizado sobre Discord e artigos feitos pelos membros." : "I am a Community Professional at ModsClub, a community that brings together moderators and server owners, offering learning opportunities about Discord and articles written by members.",
      logo: "https://i.ibb.co/1Grnn5P7/Mods-Club-logo.png",
      banner: "https://i.ibb.co/fKnphFF/Mods-Club-Banner.png",
      link: "https://discord.gg/uuHdJUNYQs",
      color: "blue",
      badge: language === 'pt' ? 'Profissional de Comunidades' : 'Community Professional'
    },
    {
      name: "Elixir Lab",
      description: language === 'pt' ? "Ex Moderador da comunidade de interação do YouTuber @DuneDiscord" : "Former moderator of the YouTuber's interaction community @DuneDiscord",
      logo: "https://i.ibb.co/wZmJXBzb/image.png",
      banner: "https://i.ibb.co/JwhxrM7V/image.png",
      link: "https://discord.gg/elixirlab",
      color: "red",
      badge: language === 'pt' ? 'Ex Moderador' : 'Former Moderator'
    }
  ];

  // Companies data
  const companies = [
    {
      name: "Cheetah Network",
      description: language === 'pt'
        ? "Soluções digitais especializadas em desenvolvimento de bots, aplicações web."
        : "Digital solutions specialized in bot development and web applications.",
      logo: "https://i.ibb.co/0yQ0mnD6/bannercheetah2.png",
      color: "blue",
      skills: language === 'pt' ? [
        "Liderança como CEO, definindo a visão estratégica da empresa",
        "Gestão de projetos e supervisão eficiente de equipes multidisciplinares",
        "Desenvolvimento e capacitação de talentos internos",
        "Gestão de clientes, parcerias estratégicas e relacionamento comercial",
        "Planejamento e execução de estratégias para crescimento e inovação"
      ] : [
        "CEO leadership, defining the company's strategic vision",
        "Project management and efficient supervision of multidisciplinary teams",
        "Development and training of internal talents",
        "Client management, strategic partnerships and commercial relationships",
        "Planning and execution of strategies for growth and innovation"
      ]
    },
    {
      name: "Werneck Group",
      description: language === 'pt'
        ? "Consultoria estratégica especializada em transformação digital e implementação de soluções tecnológicas empresariais."
        : "Strategic consulting specialized in digital transformation and implementation of enterprise technology solutions.",
      logo: "https://i.ibb.co/YT7LK7Vc/bannerwerneck.jpg",
      color: "orange",
      skills: language === 'pt' ? [
        "Direção estratégica e tomada de decisões corporativas",
        "Desenvolvimento e implementação de planos de negócios",
        "Gestão financeira e controle orçamentário",
        "Coordenação de operações e otimização de processos",
        "Construção e manutenção de relacionamentos comerciais",
        "Liderança e motivação de equipes multidisciplinares",
        "Análise de mercado e identificação de oportunidades de crescimento"
      ] : [
        "Strategic direction and corporate decision making",
        "Development and implementation of business plans",
        "Financial management and budget control",
        "Operations coordination and process optimization",
        "Building and maintaining commercial relationships",
        "Leadership and motivation of multidisciplinary teams",
        "Market analysis and identification of growth opportunities"
      ]
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">
            <span className="w-8 h-px bg-foreground/30" />
            {tt.title}
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.1]">
            {tt.subtitle}
          </h1>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-5 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/30 text-foreground/70 mb-3">
                <stat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* My Story Section */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.myStory}</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-foreground/60" />
                {tt.myJourney}
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {language === 'pt' ? storyPt : storyEn}
              </p>
            </div>

            <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-3">
                <Target className="w-5 h-5 text-foreground/60" />
                {tt.whyCompany}
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {language === 'pt' ? whyCompanyPt : whyCompanyEn}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.timeline}</h2>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/30 text-foreground/60 flex-shrink-0">
                    <event.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl font-serif text-foreground">{event.year}</span>
                      <h3 className="text-sm font-medium text-foreground">{event.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Companies Section */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.companies}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                index={index}
                name={company.name}
                description={company.description}
                logo={company.logo}
                skills={company.skills}
              />
            ))}
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.partnerships}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.a
                key={index}
                href={partnership.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={partnership.banner} 
                    alt={`${partnership.name} Banner`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${partnership.color}-900/90 via-${partnership.color}-900/50 to-transparent`}></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={partnership.logo} 
                        alt={partnership.name} 
                        className="w-12 h-12 rounded-lg shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{partnership.name}</h3>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                          {partnership.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`bg-card dark:bg-secondary p-6 border-t-4 border-primary`}>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {partnership.description}
                  </p>
                  <div className={`flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all`}>
                    {language === 'pt' ? 'Saiba mais' : 'Learn more'}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{tt.values}</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary text-foreground mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quotes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{tt.quotes}</h2>
          
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-foreground flex-shrink-0" />
                  <p className="text-xl font-medium text-foreground italic">{quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{tt.testimonials}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">{testimonial.text}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inclusion Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{tt.inclusion}</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <HandHeart className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'pt' ? 'Comprometido com a Diversidade' : 'Committed to Diversity'}
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-lg">
                  {language === 'pt' 
                    ? 'A minha história me ensinou que inclusão não é apenas uma palavra, mas uma prática diária. Como pessoa com deficiência, sei na pele os desafios que muitos enfrentam. Por isso, me comprometo a criar ambientes onde todas as pessoas, independente de suas limitações, possam crescer, aprender e contribuir.'
                    : 'My story taught me that inclusion is not just a word, but a daily practice. As a person with a disability, I know firsthand the challenges many face. That\'s why I am committed to creating environments where all people, regardless of their limitations, can grow, learn and contribute.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{tt.cta}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Tem um projeto em mente ou quer conversar sobre como posso ajudar? Entre em contato!'
              : 'Have a project in mind or want to talk about how I can help? Get in touch!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-secondary font-semibold px-8 transition-all duration-300">
                <CheckCircle className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Ver Projetos' : 'View Projects'}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Career;
