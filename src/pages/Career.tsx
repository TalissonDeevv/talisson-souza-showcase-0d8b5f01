import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { 
  Rocket, Target, Heart, Users, Lightbulb, Shield, 
  Award, Calendar, Building2, Briefcase, Quote, Sparkles, 
  HandHeart, ArrowRight, ArrowUpRight, Star, BookOpen, MessageCircle,
  Video, Megaphone, Settings, Handshake
} from "lucide-react";
import DiscordCommunityCard from "@/components/ui/DiscordCommunityCard";
const elixirLogo = "/images/discord/elixir-lab-logo.png";
const elixirBanner = "/images/discord/elixir-lab-banner.png";
const agonLogo = "/images/discord/agon-logo.png";
const agonBanner = "/images/discord/agon-banner.png";
const dunecoLogo = "/images/discord/duneco-logo.png";
const dunecoBanner = "/images/discord/duneco-banner.png";
const hytaleLogo = "/images/discord/hytale-logo.gif";
const hytaleBanner = "/images/discord/hytale-banner.png";
const modsclubLogo = "/images/discord/modsclub-logo.png";
const modsclubBanner = "/images/discord/modsclub-banner.png";
const escritorioLogo = "/images/discord/escritorio-logo.png";
const escritorioBannerFull = "/images/discord/escritorio-banner-full.png";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const Career = () => {
  const { language } = useTheme();

  const content = {
    pt: {
      title: "Minha Carreira",
      subtitle: "Transformando desafios em oportunidades"
    },
    en: {
      title: "My Career",
      subtitle: "Transforming challenges into opportunities"
    }
  };

  const tt = content[language];

  const storyPt = `Meu nome é Talisson Souza, mas muitos me conhecem como Talinho. Sou Empreendedor Executivo, Diretor de Negócios Empresariais e Desenvolvedor Full Stack. Minha relação com a tecnologia começou de forma simples: na curiosidade de explorar, aprender e descobrir.

Aos 14 anos, desenvolvi meus primeiros bots para Discord. Ali percebi que tecnologia não era apenas código, mas sim uma forma de conectar pessoas e transformar ideias em soluções reais.`;

  const storyEn = `My name is Talisson Souza, but many know me as Talinho. I'm an Executive Entrepreneur, Business Director, and Full Stack Developer. My relationship with technology began simply: in the curiosity to explore, learn and discover.

At 14, I developed my first bots for Discord. There I realized that technology was not just code, but a way to connect people and transform ideas into real solutions.`;

  const whyCompanyPt = `Em 2021, participei de um processo seletivo para uma vaga de Jovem Aprendiz. Passei por todas as etapas com dedicação: entrevista, exames médicos, preparação. No entanto, ao final do processo, fui recusado. Não por falta de qualificação. Mas por causa da minha cadeira de rodas.

Naquele momento, tomei uma decisão: se não iam me dar espaço, eu criaria o meu próprio espaço. Assim nasceu a Cheetah Solutions Network.`;

  const whyCompanyEn = `In 2021, I participated in a selection process for a Young Apprentice position. I went through all stages with dedication: interview, medical exams, preparation. However, at the end of the process, I was rejected. Not for lack of qualification. But because of my wheelchair.

At that moment, I made a decision: if they wouldn't give me space, I would create my own space. Thus Cheetah Solutions Network was born.`;

  const stats = [
    { icon: Award, label: getText(language, "Projetos Entregues", "Projects Delivered"), value: "50+" },
    { icon: Building2, label: getText(language, "Empresas & Parcerias", "Companies & Partnerships"), value: "4" },
    { icon: Star, label: getText(language, "Satisfação", "Satisfaction"), value: "100%" },
    { icon: Calendar, label: getText(language, "Anos de Experiência", "Years of Experience"), value: `${new Date().getFullYear() - 2018}+` }
  ];

  const timelineEvents = [
    { 
      year: "2018", 
      title: getText(language, "Fundador e Criador de Conteúdo", "Founder & Content Creator"), 
      role: getText(language, "Talisson Souza Mídia · Autônomo", "Talisson Souza Media · Self-employed"),
      description: getText(language, "Fundador e criador de conteúdo focado em Games. Canal com mais de 2,5 mil inscritos e 118 mil visualizações", "Founder and content creator focused on Games. Channel with over 2.5K subscribers and 118K views"), 
      learning: getText(language, "Consistência constrói audiência", "Consistency builds audience"),
      icon: Video 
    },
    { 
      year: "2020", 
      title: getText(language, "Fundação da Cheetah Solutions Network", "Cheetah Solutions Network Founded"), 
      role: getText(language, "CEO & Founder", "CEO & Founder"),
      description: getText(language, "Criação da empresa focada em soluções digitais", "Company created focused on digital solutions"), 
      learning: getText(language, "Empreender é resolver problemas", "Entrepreneurship is problem-solving"),
      icon: Building2 
    },
    { 
      year: "2021", 
      title: getText(language, "Momento Decisivo", "Decisive Moment"), 
      role: getText(language, "Freelancer", "Freelancer"),
      description: getText(language, "Experiência que motivou a criação da própria empresa", "Experience that motivated the creation of my own company"), 
      learning: getText(language, "Obstáculos podem ser trampolins", "Obstacles can be springboards"),
      icon: Target 
    },
    { 
      year: "2024", 
      title: getText(language, "Diretor Estratégico", "Strategic Director"), 
      role: getText(language, "Diretor no Werneck Group", "Director at Werneck Group"),
      description: getText(language, "Posição estratégica no Werneck Group", "Strategic position at Werneck Group"), 
      learning: getText(language, "Liderança é sobre pessoas", "Leadership is about people"),
      icon: Briefcase 
    },
    { 
      year: "2025", 
      title: getText(language, "Criador Independente Verificado", "Verified Independent Creator"), 
      role: getText(language, "Warlocks · Autônomo", "Warlocks · Self-employed"),
      description: getText(language, "Atuação na Warlocks Dungeons, profissionalizando a criação de projetos dentro do ecossistema Discord", "Working at Warlocks Dungeons, professionalizing project creation within the Discord ecosystem"), 
      learning: getText(language, "Autonomia exige posicionamento", "Autonomy requires positioning"),
      icon: Sparkles 
    },
    { 
      year: "2025", 
      title: getText(language, "Influenciador na Rocketseat", "Rocketseat Influencer"), 
      role: getText(language, "Influencer · Rocketseat", "Influencer · Rocketseat"),
      description: getText(language, "Influencer Academy na Rocketseat — criação de conteúdo digital e publicidade no ecossistema de tecnologia", "Influencer Academy at Rocketseat — digital content creation and publicity in the tech ecosystem"), 
      learning: getText(language, "Educação escala impacto", "Education scales impact"),
      icon: Megaphone 
    },
    { 
      year: "2026", 
      title: getText(language, "Diretor de Operações", "Operations Director"), 
      role: getText(language, "Noyevel · Temporário", "Noyevel · Temporary"),
      description: getText(language, "Organização de processos internos, definição de KPIs, gestão de equipe e implementação de padrões estratégicos", "Internal process organization, KPI definition, team management and strategic standards implementation"), 
      learning: getText(language, "Processos geram previsibilidade", "Processes create predictability"),
      icon: Settings 
    },
    { 
      year: "2026", 
      title: getText(language, "Parceiro Estratégico", "Strategic Partner"), 
      role: getText(language, "Splendori · Tempo integral", "Splendori · Full-time"),
      description: getText(language, "Parceiro estratégico em iniciativas de tecnologia e desenvolvimento de produtos digitais. Colaboração em desenvolvimento web, landing pages, automações e criação de soluções", "Strategic partner in technology initiatives and digital product development. Collaboration in web development, landing pages, automations and solution creation"), 
      learning: getText(language, "Parcerias ampliam alcance", "Partnerships expand reach"),
      icon: Handshake 
    }
  ];

  const testimonials = [
    {
      name: "Priscila Suanne",
      role: language === 'pt' ? "Desenvolvedora Back End" : "Back End Developer",
      text: language === 'pt' 
        ? "Tive o prazer de trabalhar com Thalisson, um profissional extremamente comprometido, resiliente e dedicado em tudo o que faz."
        : "I had the pleasure of working with Thalisson, an extremely committed, resilient and dedicated professional in everything he does.",
      image: "https://i.ibb.co/zWp10rhx/Priscila.jpg"
    },
    {
      name: "Matheus Yuri Silva",
      role: language === 'pt' ? "Desenvolvedor de Software" : "Software Developer",
      text: language === 'pt' 
        ? "Talisson demonstra uma combinação rara de expertise técnica e visão estratégica de negócios."
        : "Talisson demonstrates a rare combination of technical expertise and strategic business vision.",
      image: "https://i.ibb.co/V0P35B23/Matheus.jpg"
    },
    {
      name: "Camile Vitória Barros",
      role: language === 'pt' ? "Assistente de Suporte Administrativo" : "Administrative Support Assistant",
      text: language === 'pt'
        ? "Acompanho de perto o comprometimento e dedicação do Talisson em cada projeto. Trabalho marcado pela qualidade e foco em entregar os melhores resultados. Uma escolha segura para quem busca excelência. :)"
        : "I closely follow Talisson's commitment and dedication in every project. Work marked by quality and focus on delivering the best results. A safe choice for those seeking excellence. :)",
      image: "https://i.ibb.co/gFjVRgtr/image.png"
    },
    {
      name: "Rafael Araujo",
      role: "Web Developer",
      text: language === 'pt'
        ? "Estudei ao lado do Talisson e posso afirmar que é extremamente dedicado. Sua liderança sempre se destacou, conduzindo o grupo de forma organizada e motivadora. Sua disposição para colaborar fez toda diferença nos trabalhos em equipe. Agrega muito valor em qualquer ambiente."
        : "I studied alongside Talisson and can affirm he is extremely dedicated. His leadership always stood out, leading the group in an organized and motivating way. His willingness to collaborate made all the difference in team projects. Adds great value in any environment.",
      image: "https://i.ibb.co/My7YX5s4/image.png"
    },
    {
      name: "Davi R. Fraustino",
      role: language === 'pt' ? "Estudante de Ciência da Computação" : "Computer Science Student",
      text: language === 'pt'
        ? "Talisson é um excelente profissional que une conhecimento técnico full stack com visão estratégica de negócios. Entrega soluções criativas e eficientes, sempre atento ao impacto real para clientes e equipes. Comprometido, resiliente e com grande potencial de liderança."
        : "Talisson is an excellent professional who combines full stack technical knowledge with strategic business vision. He delivers creative and efficient solutions, always attentive to real impact for clients and teams. Committed, resilient, with great leadership potential.",
      image: "https://i.ibb.co/LDG4sdNM/image.png"
    },
    {
      name: "Anna Ishii",
      role: language === 'pt' ? "Co-fundadora da Splendori" : "Co-founder of Splendori",
      text: language === 'pt'
        ? "Trabalhei com o Talisson em projetos estratégicos e ele entrega com excelência. Sua visão técnica aliada ao senso de negócio torna qualquer projeto mais robusto. Inspira confiança e compromisso em tudo que faz."
        : "I worked with Talisson on strategic projects and he delivers with excellence. His technical vision combined with business sense makes any project more robust. He inspires trust and commitment in everything he does.",
      image: "https://i.ibb.co/pjKpnWFq/image.png"
    },
    {
      name: "Caio Eduardo Ferreira Frederico",
      role: "Backend Developer",
      text: language === 'pt'
        ? "Talisson entende tanto o lado técnico quanto o de negócios. Sua organização e clareza na comunicação facilitam o trabalho em equipe. Sempre entrega com qualidade e no prazo."
        : "Talisson understands both the technical and business sides. His organization and clear communication make teamwork easier. Always delivers with quality and on time.",
      image: "https://i.ibb.co/SwqJmQt0/image.png"
    },
    {
      name: "Diogo Calmon",
      role: "Full Stack Developer",
      text: language === 'pt'
        ? "Talisson tem domínio técnico sólido, visão de produto e dedicação impressionante. Um desenvolvedor que realmente faz a diferença em qualquer projeto."
        : "Talisson has solid technical skills, product vision and impressive dedication. A developer who truly makes a difference in any project.",
      image: "https://i.ibb.co/1tyf3c5V/image.png"
    }
  ];

  const values = [
    { icon: Heart, title: language === 'pt' ? "Empatia" : "Empathy", description: language === 'pt' ? "Criar soluções humanas" : "Create human solutions" },
    { icon: Lightbulb, title: language === 'pt' ? "Inovação" : "Innovation", description: language === 'pt' ? "Novas formas de resolver" : "New ways to solve" },
    { icon: Shield, title: language === 'pt' ? "Transparência" : "Transparency", description: language === 'pt' ? "Honestidade em tudo" : "Honesty in everything" },
    { icon: Users, title: language === 'pt' ? "Inclusão" : "Inclusion", description: language === 'pt' ? "Oportunidades para todos" : "Opportunities for all" }
  ];

  const companies = [
    { name: "Cheetah Solutions Network", description: language === 'pt' ? "Soluções digitais especializadas em desenvolvimento de bots e aplicações web." : "Digital solutions specialized in bot development and web applications.", logo: "https://i.ibb.co/0yQ0mnD6/bannercheetah2.png", role: "CEO & Founder" },
    { name: "Werneck Group", description: language === 'pt' ? "Consultoria estratégica especializada em transformação digital." : "Strategic consulting specialized in digital transformation.", logo: "https://i.ibb.co/YT7LK7Vc/bannerwerneck.jpg", role: getText(language, "Diretor Estratégico", "Strategic Director") },
  ];

  const discordCommunities = [
    {
      name: "Elixir Lab",
      description: getText(language, "A porta de entrada para o Discord brasileiro! Temos espaços de interação, jogos e suporte sobre Discord e Bots.", "The gateway to Brazilian Discord! We have interaction spaces, games and support about Discord and Bots."),
      logo: elixirLogo,
      banner: elixirBanner,
      link: "https://discord.gg/elixirlab",
      role: getText(language, "Ex Moderador", "Former Moderator"),
    },
    {
      name: "AGON by AOC",
      description: getText(language, "Servidor oficial da AGON by AOC no Discord Brasil. Um espaço para gamers competitivos e entusiastas de hardware, com foco em performance, tecnologia, lançamentos, eventos oficiais e interação direta com a comunidade AGON.", "Official AGON by AOC server on Discord Brazil. A space for competitive gamers and hardware enthusiasts, focused on performance, technology, launches, official events and direct interaction with the AGON community."),
      logo: agonLogo,
      banner: agonBanner,
      link: "https://discord.gg/yBy8Vu79J3",
      role: getText(language, "Ex Moderador", "Former Moderator"),
    },
    {
      name: "DuneCo Dungeons",
      description: getText(language, "DuneCo Dungeons nasceu para ajudar marcas, criadores, times, DAOs e projetos de Web 3.0 a explorar o Discord e construir comunidades cada vez mais fortes.", "DuneCo Dungeons was born to help brands, creators, teams, DAOs and Web 3.0 projects explore Discord and build stronger communities."),
      logo: dunecoLogo,
      banner: dunecoBanner,
      link: "https://discord.gg/SyEnrAknqA",
      role: getText(language, "Criador Independente Verificado", "Verified Independent Creator"),
    },
    {
      name: "Comunidade Hytale Brasil",
      description: getText(language, "Hytale Brasil é o servidor definitivo de Hytale no Discord! O lar dos jogadores brasileiros, reunindo tudo sobre Hytale em um só lugar.", "Hytale Brasil is the ultimate Hytale server on Discord! The home of Brazilian players, bringing everything about Hytale in one place."),
      logo: hytaleLogo,
      banner: hytaleBanner,
      link: "https://discord.gg/x2SvJd2NsZ",
      role: getText(language, "Desenvolvedor Interno", "Internal Developer"),
    },
    {
      name: "ModsClub",
      description: getText(language, "Comunidade que reúne moderadores, administradores e proprietários de comunidades brasileiras, dedicando um espaço de aprendizagem sobre o Discord e suas ferramentas.", "Community that brings together moderators, administrators and owners of Brazilian communities, dedicating a learning space about Discord and its tools."),
      logo: modsclubLogo,
      banner: modsclubBanner,
      link: "https://discord.gg/uuHdJUNYQs",
      role: getText(language, "Especialista em Comunidades", "Community Specialist"),
    },
    {
      name: "Escritório do Talisson",
      description: getText(language, "Espaço oficial onde concentro minha comunidade, projetos e conteúdos relacionados a tecnologia, desenvolvimento de produtos digitais e estratégia de negócios.", "Official space where I concentrate my community, projects and content related to technology, digital product development and business strategy."),
      logo: escritorioLogo,
      banner: escritorioBannerFull,
      link: "https://discord.gg/DzZN6tUJKq",
      role: getText(language, "Proprietário", "Owner"),
    },
  ];

  const partnerships = [
    { name: "Tech Leaders Network", description: language === 'pt' ? "Fundador da comunidade exclusiva" : "Founder of exclusive community", logo: "https://i.ibb.co/M5jS68gD/93afd9c07484ebe558d11e4b95c6d976.png", link: "https://discord.gg/edZWXqcxuF", badge: language === 'pt' ? 'Fundador' : 'Founder' },
    { name: "Rocketseat", description: language === 'pt' ? "Influenciador oficial" : "Official influencer", logo: "https://i.ibb.co/jvVR1DzD/rocketseat-logo.jpg", link: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho", badge: "Influencer" },
    { name: "Square Cloud", description: language === 'pt' ? "Parceiro oficial" : "Official partner", logo: "https://squarecloud.app/favicon.ico", link: "https://squarecloud.app", badge: language === 'pt' ? 'Parceiro' : 'Partner' }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title={getText(language, 'Carreira | Trajetória de Talisson Souza', 'Career | Talisson Souza Journey')}
        description={getText(language, 'Conheça a trajetória profissional de Talisson Souza, desde os primeiros projetos até se tornar CEO da Cheetah Solutions Network e Diretor Estratégico do Werneck Group.', 'Discover Talisson Souza\'s professional journey, from his first projects to becoming CEO of Cheetah Solutions Network and Strategic Director of Werneck Group.')}
        canonical={language === 'en' ? '/en-us/career' : '/carreira'}
        keywords={language === 'pt' ? ['carreira', 'trajetória', 'experiência profissional', 'CEO', 'empreendedor', 'desenvolvedor'] : ['career', 'journey', 'professional experience', 'CEO', 'entrepreneur', 'developer']}
      />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {tt.title}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {tt.subtitle}
              </AnimatedTitle>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 text-center group"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border/30 text-foreground/70 mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-3xl font-serif text-foreground mb-1">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground/70">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'História', 'Story')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Minha Jornada', 'My Journey')}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm h-full"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-foreground/[0.06] rounded-tl-2xl" />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-foreground/60" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground">
                      {getText(language, 'O Início', 'The Beginning')}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.9] whitespace-pre-line">
                    {language === 'pt' ? storyPt : storyEn}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm h-full"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-foreground/[0.06] rounded-br-2xl" />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Target className="w-5 h-5 text-foreground/60" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground">
                      {getText(language, 'A Decisão', 'The Decision')}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.9] whitespace-pre-line">
                    {language === 'pt' ? whyCompanyPt : whyCompanyEn}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Timeline Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-card/20 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                Timeline
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Marcos Importantes', 'Key Milestones')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {getText(language, 'Os momentos que definiram minha trajetória profissional.', 'The moments that defined my professional trajectory.')}
              </p>
            </ScrollReveal>
            
            <div className="lg:col-span-7 space-y-4 relative">
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-6 lg:left-0 top-0 bottom-0 w-px origin-top hidden sm:block"
                style={{
                  background: 'linear-gradient(to bottom, hsl(var(--foreground) / 0.2), hsl(var(--foreground) / 0.05) 70%, transparent)'
                }}
              />
              
              {timelineEvents.map((event, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -3, x: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative pl-0 sm:pl-12 lg:pl-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      className="absolute left-4 lg:left-[-5px] top-8 hidden sm:flex items-center justify-center"
                    >
                      <div className="w-3 h-3 rounded-full bg-foreground/40 ring-4 ring-background shadow-[0_0_10px_hsl(var(--foreground)/0.2)]" />
                    </motion.div>
                    
                    <div 
                      className="relative p-6 lg:p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group overflow-hidden"
                      style={{
                        boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                            <event.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-2xl font-serif text-foreground">{event.year}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full border border-border/30 bg-card/50 text-muted-foreground">
                                {event.role}
                              </span>
                            </div>
                            <h3 className="text-base font-medium text-foreground">{event.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                        
                        {/* Learning Badge */}
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-foreground/[0.03] border border-border/10">
                          <Lightbulb className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                          <span className="text-xs text-foreground/70 font-medium">
                            {getText(language, 'Aprendizado:', 'Learning:')}
                          </span>
                          <span className="text-xs text-muted-foreground italic">
                            "{event.learning}"
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Companies Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'Empresas', 'Companies')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Minhas Empresas', 'My Companies')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <ScrollReveal key={company.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                    
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-border/30 bg-card/50 text-foreground/70 mb-4">
                        {company.role}
                      </span>
                      <h3 className="text-xl font-serif text-foreground mb-3">{company.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{company.description}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Partnerships Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/20 to-transparent" />
            <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, 'Parcerias', 'Partnerships')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Parcerias e Atuações', 'Partnerships and Activities')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <ScrollReveal key={partnership.name} delay={index * 0.1}>
                <motion.a
                  href={partnership.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="block h-full group"
                >
                  <div 
                    className="relative h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={partnership.logo} 
                        alt={partnership.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="text-base font-medium text-foreground">{partnership.name}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-border/30 bg-background/80 text-foreground/70">
                          {partnership.badge}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{partnership.description}</p>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="relative">
                        {language === 'pt' ? 'Saiba mais' : 'Learn more'}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Values Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
              >
                {getText(language, 'Valores', 'Values')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                {getText(language, 'Valores Pessoais', 'Personal Values')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm text-center group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{value.title}</h3>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-card/20 to-transparent" />
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="mb-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Depoimentos', 'Testimonials')}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {language === 'pt' ? 'O que dizem' : 'What they say'}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div 
                    className="relative h-full p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-tr-2xl" />
                    
                    <blockquote className="relative">
                      <div className="absolute -top-4 -left-2 text-6xl text-foreground/[0.05] font-serif leading-none select-none">"</div>
                      
                      <p className="text-base text-foreground/80 leading-[1.8] mb-8 relative z-10">
                        "{testimonial.text}"
                      </p>
                      
                      <footer className="flex items-center gap-4">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-xl object-cover border border-border/30"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl border border-border/30 bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground/70">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Mindset & Foundations Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
              >
                {getText(language, 'Mentalidade', 'Mindset')}
              </motion.span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                {getText(language, 'Base Sólida: Caráter e Profissão', 'Solid Foundation: Character and Profession')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {getText(
                  language,
                  'Carreira não é apenas técnica. É também mentalidade, disciplina e visão de longo prazo. Os princípios abaixo guiam a construção de uma trajetória profissional com propósito.',
                  'Career is not just about technique. It is also mindset, discipline and long-term vision. The principles below guide the construction of a purposeful professional trajectory.'
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                verse: getText(language, 'Josué 1:9', 'Joshua 1:9'),
                text: getText(
                  language,
                  '"Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar."',
                  '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."'
                ),
                reflection: getText(
                  language,
                  'O mercado de tecnologia é volátil. Tecnologias mudam, empresas fecham, projetos falham. A coragem de continuar construindo mesmo diante da incerteza é o que separa profissionais que evoluem daqueles que estacionam. Força e coragem não significam ausência de medo, mas a decisão consciente de agir apesar dele.',
                  'The technology market is volatile. Technologies change, companies close, projects fail. The courage to keep building even in the face of uncertainty is what separates professionals who evolve from those who stagnate. Strength and courage do not mean the absence of fear, but the conscious decision to act despite it.'
                ),
              },
              {
                verse: getText(language, 'Isaías 40:29-31', 'Isaiah 40:29-31'),
                text: getText(
                  language,
                  '"Ele dá força ao cansado e aumenta o poder do fraco. Os que esperam no Senhor renovam as suas forças; sobem com asas como águias; correm e não se cansam; caminham e não se fatigam."',
                  '"He gives strength to the weary and increases the power of the weak. Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."'
                ),
                reflection: getText(
                  language,
                  'Persistência em programação não é romantismo. É a prática diária de resolver problemas quando a motivação já passou. O profissional que se renova constantemente, estuda com consistência e não depende de empolgação passageira constrói algo que nenhum atalho substitui: competência real acumulada ao longo do tempo.',
                  'Persistence in programming is not romanticism. It is the daily practice of solving problems when motivation has already passed. The professional who constantly renews themselves, studies consistently, and does not depend on fleeting excitement builds something no shortcut can replace: real competence accumulated over time.'
                ),
              },
              {
                verse: getText(language, 'Provérbios 12:24', 'Proverbs 12:24'),
                text: getText(
                  language,
                  '"As mãos diligentes governarão, mas a preguiça acaba em trabalho escravo."',
                  '"Diligent hands will rule, but laziness ends in forced labor."'
                ),
                reflection: getText(
                  language,
                  'Disciplina define trajetórias. O desenvolvedor que se dedica a entender fundamentos profundamente, que documenta seu trabalho, que refatora código por convicção e não por obrigação, eventualmente assume posições de liderança técnica. Quem busca atalhos acaba preso em ciclos de retrabalho e dependência.',
                  'Discipline defines trajectories. The developer who is dedicated to deeply understanding fundamentals, who documents their work, who refactors code out of conviction rather than obligation, eventually assumes technical leadership positions. Those who seek shortcuts end up trapped in cycles of rework and dependency.'
                ),
              },
              {
                verse: getText(language, 'Eclesiastes 9:10', 'Ecclesiastes 9:10'),
                text: getText(
                  language,
                  '"Tudo o que a sua mão encontrar para fazer, faça-o com toda a sua força."',
                  '"Whatever your hand finds to do, do it with all your might."'
                ),
                reflection: getText(
                  language,
                  'Cada projeto, cada commit, cada revisão de código é uma oportunidade de demonstrar excelência. O profissional que trata o menor bug com a mesma seriedade de uma feature crítica constrói uma reputação que abre portas de forma orgânica. Qualidade consistente é o marketing mais eficiente que existe.',
                  'Every project, every commit, every code review is an opportunity to demonstrate excellence. The professional who treats the smallest bug with the same seriousness as a critical feature builds a reputation that opens doors organically. Consistent quality is the most efficient marketing that exists.'
                ),
              },
              {
                verse: getText(language, 'Provérbios 27:17', 'Proverbs 27:17'),
                text: getText(
                  language,
                  '"Assim como o ferro afia o ferro, o homem afia o seu companheiro."',
                  '"As iron sharpens iron, so one person sharpens another."'
                ),
                reflection: getText(
                  language,
                  'Crescimento profissional não acontece isoladamente. Cercar-se de pessoas que desafiam seu raciocínio, que apontam falhas com honestidade e que compartilham conhecimento sem reservas acelera o desenvolvimento de forma que nenhum curso individual consegue. A comunidade certa é um multiplicador de competência.',
                  'Professional growth does not happen in isolation. Surrounding yourself with people who challenge your reasoning, who point out flaws honestly, and who share knowledge without reservations accelerates development in a way that no individual course can. The right community is a competence multiplier.'
                ),
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
                  >
                    <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-foreground/[0.06] rounded-tl-2xl" />
                    
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-foreground/60" />
                      </div>
                      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/70 font-medium">
                        {item.verse}
                      </span>
                    </div>

                    <blockquote className="text-base font-serif text-foreground/90 leading-[1.8] mb-6 pl-4 border-l-2 border-foreground/10">
                      {item.text}
                    </blockquote>

                    <p className="text-sm text-muted-foreground leading-[1.9]">
                      {item.reflection}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5}>
              <div className="text-center pt-8">
                <p className="font-serif text-xl text-foreground leading-relaxed max-w-xl mx-auto">
                  {getText(
                    language,
                    'Técnica se aprende. Caráter se constrói. Uma carreira sólida exige os dois.',
                    'Technique is learned. Character is built. A solid career demands both.'
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Discord Communities Section */}
      <ParallaxSection
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              Discord
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4 leading-[1.05]">
              {getText(language, 'Comunidades no Discord', 'Discord Communities')}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {getText(
                language,
                'Comunidades onde possuo ou possuí cargo, contribuindo com moderação, desenvolvimento e gestão comunitária.',
                'Communities where I hold or held a role, contributing with moderation, development and community management.'
              )}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {discordCommunities.map((community, index) => (
              <ScrollReveal key={community.name} delay={index * 0.08}>
                <DiscordCommunityCard {...community} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Inclusion Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-background to-background" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-foreground/5 to-transparent blur-3xl opacity-50" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="max-w-3xl mx-auto p-10 lg:p-12 text-center hover:border-foreground/20 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-6">
                  <HandHeart className="w-8 h-8 text-foreground/60" />
                </div>
                
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Inclusão', 'Inclusion')}
                </motion.span>
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {language === 'pt' ? 'Comprometido com a Diversidade' : 'Committed to Diversity'}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {language === 'pt' 
                    ? 'A minha história me ensinou que inclusão não é apenas uma palavra, mas uma prática diária. Me comprometo a criar ambientes onde todas as pessoas possam crescer e contribuir.'
                    : 'My story taught me that inclusion is not just a word, but a daily practice. I\'m committed to creating environments where all people can grow and contribute.'}
                </p>
                
                <Link 
                  to="/contato"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Vamos conversar', 'Let\'s talk')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
