import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SocialIcons from "@/components/ui/SocialIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, User, Briefcase, GraduationCap, Heart, Music, Coffee, Gamepad2, BookOpen, Zap, Rocket, Star, Award, Calendar, ExternalLink, Users, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bookCover from "@/assets/book-cover.jpg";

const About = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const aboutTextPt = `Oi, tudo bem? Meu nome é Talisson Souza, mas muitos me chamam de Talinho. Sou Empreendedor Executivo, Diretor de Negócios Empresariais e Desenvolvedor Full Stack. Como CEO da Cheetah Network, minha jornada com tecnologia começou meio que na curiosidade, fuçando aqui e ali, até que virei apaixonado de vez. Aprendi muita coisa sozinho, encarando desafios e quebrando a cabeça e até hoje esse jeito de buscar conhecimento é o que me move.

Gosto de estar envolvido em tudo que crio, desde a primeira linha de código até ver o resultado final funcionando na prática. Trabalhar com desenvolvimento web, mobile, bots inteligentes e infraestrutura não é só meu trabalho, é parte do meu dia a dia e da minha forma de me expressar.

Como CEO da Cheetah Network, tenho o privilégio de liderar uma equipe que acredita em tecnologia feita com propósito soluções que ajudam comunidades, criadores de conteúdo e empresas a crescer de verdade. O mais importante pra mim é lembrar que por trás de cada sistema tem pessoas reais, e é por isso que respeito, empatia e transparência são os pilares do que fazemos.

Sou uma pessoa que valoriza a calma, o contato com a natureza e o silêncio para refletir ainda que nem sempre seja tão tranquilo assim (quem me conhece sabe rs). Sempre que posso, gosto de ajudar os outros, seja com um conselho, um apoio ou uma ideia.

Fora do mundo tech, música é minha companhia constante vou do Eletrônico ao Sertanejo, passando pelo Lo-Fi, Gospel e até um pouco de punk. Café e pudim são meus pequenos prazeres que nunca faltam.

No fim, minha missão é criar soluções que realmente façam diferença, com um toque humano, e continuar aprendendo e evoluindo todos os dias. :)`;

  const aboutTextEn = `Hi, how are you? My name is Talisson Souza, but many call me Talinho. I'm an Executive Entrepreneur, Business Director, and Full Stack Developer. As CEO of Cheetah Network, my journey with technology began out of curiosity, dabbling here and there, until I became completely passionate. I learned a lot on my own, facing challenges and racking my brains, and to this day, this pursuit of knowledge is what drives me.

I enjoy being involved in everything I create, from the first line of code to seeing the final result in action. Working with web and mobile development, smart bots, and infrastructure isn't just my job; it's part of my daily life and my way of expressing myself.

As CEO of Cheetah Network, I have the privilege of leading a team that believes in purpose-built technology solutions that help communities, content creators, and businesses truly grow. The most important thing for me is to remember that behind every system are real people, and that's why respect, empathy, and transparency are the pillars of what we do.

I'm a person who values calm, contact with nature, and silence to reflect, even though it's not always so peaceful (those who know me know, lol). Whenever I can, I like to help others, whether with advice, support, or an idea.

Outside of the tech world, music is my constant companion; I go from electronic to country, passing through lo-fi, gospel, and even a bit of punk. Coffee and pudding are my little pleasures that never fail.

Ultimately, my mission is to create solutions that truly make a difference, with a human touch, and to continue learning and evolving every day. :)`;

  const experiencesPt = [
    {
      company: "Cheetah Network",
      position: "CEO & Founder",
      period: "2023 - Presente",
      description: "Fundei e lidero a Cheetah Network, empresa especializada em soluções digitais. Responsável pela visão estratégica, gestão de equipes multidisciplinares e relacionamento com clientes."
    },
    {
      company: "Werneck Group",
      position: "Diretor Estratégico",
      period: "2024 - Presente",
      description: "Direção estratégica em consultoria empresarial, desenvolvimento de planos de negócios, gestão financeira e coordenação de operações."
    },
    {
      company: "FastyGroup",
      position: "Desenvolvedor Full Stack",
      period: "2024 - Presente",
      description: "Desenvolvimento de aplicações web completas utilizando tecnologias modernas e melhores práticas de desenvolvimento."
    },
    {
      company: "Global Mode",
      position: "CTO",
      period: "2023 - 2024 (Encerrado)",
      description: "Desenvolvimento de soluções personalizadas para clientes diversos, incluindo sistemas web e automações."
    }
  ];

  const experiencesEn = [
    {
      company: "Cheetah Network",
      position: "CEO & Founder",
      period: "2023 - Present",
      description: "Founded and lead Cheetah Network, a company specialized in digital solutions. Responsible for strategic vision, managing multidisciplinary teams and client relationships."
    },
    {
      company: "Werneck Group",
      position: "Strategic Director",
      period: "2024 - Present",
      description: "Strategic direction in business consulting, business plan development, financial management and operations coordination."
    },
    {
      company: "FastyGroup",
      position: "Full Stack Developer",
      period: "2024 - Present",
      description: "Development of complete web applications using modern technologies and best development practices."
    },
    {
      company: "Global Mode",
      position: "CTO",
      period: "2023 - 2024 (Closed)",
      description: "Development of custom solutions for diverse clients, including web systems and automation."
    }
  ];

  const educationPt = [
    {
      title: "Ensino Médio Completo",
      institution: "Escola Estadual",
      period: "2019 - 2022",
      description: "Formação básica com foco em exatas e tecnologia"
    },
    {
      title: "Cursos de Programação",
      institution: "Autodidatismo",
      period: "2020 - Presente",
      description: "Aprendizado contínuo através de cursos online, documentações e projetos práticos"
    }
  ];

  const educationEn = [
    {
      title: "High School Complete",
      institution: "State School",
      period: "2019 - 2022",
      description: "Basic education with focus on mathematics and technology"
    },
    {
      title: "Programming Courses",
      institution: "Self-taught",
      period: "2020 - Present",
      description: "Continuous learning through online courses, documentation and practical projects"
    }
  ];

  const valuesPt = [
    { title: "Qualidade", description: "Sempre busco entregar código limpo, eficiente e bem documentado", icon: Zap },
    { title: "Aprendizado", description: "Estou sempre estudando novas tecnologias e aprimorando minhas habilidades", icon: BookOpen },
    { title: "Colaboração", description: "Acredito que os melhores projetos surgem do trabalho em equipe", icon: Heart }
  ];

  const valuesEn = [
    { title: "Quality", description: "I always strive to deliver clean, efficient and well-documented code", icon: Zap },
    { title: "Learning", description: "I'm always studying new technologies and improving my skills", icon: BookOpen },
    { title: "Collaboration", description: "I believe the best projects come from teamwork", icon: Heart }
  ];

  const hobbiesPt = [
    { name: "Música Eletrônica", icon: Music },
    { name: "Lo-Fi", icon: Music },
    { name: "Café", icon: Coffee },
    { name: "Gaming", icon: Gamepad2 }
  ];

  const hobbiesEn = [
    { name: "Electronic Music", icon: Music },
    { name: "Lo-Fi", icon: Music },
    { name: "Coffee", icon: Coffee },
    { name: "Gaming", icon: Gamepad2 }
  ];

  const certificatesPt = [
    {
      id: 1,
      title: "Administração no Século 21",
      issuer: "Fundação Bradesco",
      date: "2025",
      description: "Curso que aborda conceitos modernos de administração, liderança, tomada de decisão e inovação.",
      link: "https://drive.google.com/file/d/1uNq5H26X0WbQf2Ohxr3hWJ_bzHMnMT9Y",
      image: "https://oportunidadesprofissionais.com.br/wp-content/uploads/2025/04/Sobre-a-Escola-Virtual-da-Fundacao-Bradesco.webp"
    },
    {
      id: 2,
      title: "Estratégia de Negócios",
      issuer: "Fundação Bradesco",
      date: "2025",
      description: "Capacitação sobre análise estratégica, posicionamento competitivo e desenvolvimento de planos de ação.",
      link: "https://drive.google.com/file/d/1Mel2pK_6ajyFOHQIuvFF5XbljNjY40TA/view?usp=drive_link",
      image: "https://oportunidadesprofissionais.com.br/wp-content/uploads/2025/04/Sobre-a-Escola-Virtual-da-Fundacao-Bradesco.webp"
    },
    {
      id: 3,
      title: "Gestão de Projetos",
      issuer: "Fundação Bradesco",
      date: "2023",
      description: "Curso com foco nas boas práticas do gerenciamento de projetos.",
      link: "https://drive.google.com/file/d/1Y454v0F4R4G91iR2ZBC8ps1vfUNh-gHI/view?usp=drive_link",
      image: "https://oportunidadesprofissionais.com.br/wp-content/uploads/2025/04/Sobre-a-Escola-Virtual-da-Fundacao-Bradesco.webp"
    }
  ];

  const certificatesEn = [
    {
      id: 1,
      title: "Administration in the 21st Century",
      issuer: "Bradesco Foundation",
      date: "2025",
      description: "Course covering modern concepts of management, leadership, decision-making, and innovation.",
      link: "https://drive.google.com/file/d/1uNq5H26X0WbQf2Ohxr3hWJ_bzHMnMT9Y",
      image: "https://oportunidadesprofissionais.com.br/wp-content/uploads/2025/04/Sobre-a-Escola-Virtual-da-Fundacao-Bradesco.webp"
    },
    {
      id: 2,
      title: "Business Strategy",
      issuer: "Bradesco Foundation",
      date: "2025",
      description: "Training in strategic analysis, competitive positioning and development of effective action plans.",
      link: "https://drive.google.com/file/d/1Mel2pK_6ajyFOHQIuvFF5XbljNjY40TA/view?usp=drive_link",
      image: "https://oportunidadesprofissionais.com.br/wp-content/uploads/2025/04/Sobre-a-Escola-Virtual-da-Fundacao-Bradesco.webp"
    },
    {
      id: 3,
      title: "Project Management",
      issuer: "Bradesco Foundation",
      date: "2023",
      description: "Course focused on best practices in project management.",
      link: "https://drive.google.com/file/d/1Y454v0F4R4G91iR2ZBC8ps1vfUNh-gHI/view?usp=drive_link",
      image: "https://oportunidadesprofissionais.com.br/wp-content/uploads/2025/04/Sobre-a-Escola-Virtual-da-Fundacao-Bradesco.webp"
    }
  ];

  const currentExperiences = language === 'pt' ? experiencesPt : experiencesEn;
  const currentEducation = language === 'pt' ? educationPt : educationEn;
  const currentValues = language === 'pt' ? valuesPt : valuesEn;
  const currentHobbies = language === 'pt' ? hobbiesPt : hobbiesEn;
  const certificates = language === 'pt' ? certificatesPt : certificatesEn;

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-24 pb-10 lg:pt-28 lg:pb-12"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                {t.about.title}
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-[1.1]">
                Talisson Souza
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.about.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Main Content */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <ScrollReveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-6">
                {/* Avatar */}
                <div className="relative flex justify-center lg:justify-start">
                  <div className="absolute inset-0 bg-gradient-radial from-foreground/10 to-transparent rounded-full blur-2xl opacity-30 scale-110" />
                  <Avatar className="h-48 w-48 border-2 border-border/30 relative z-10">
                    <AvatarImage src="https://i.ibb.co/MySV14GV/Polish-20231015-221849134-112435.jpg" alt="Talisson Souza" className="object-cover" />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Social */}
                <div className="p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                  <h3 className="text-sm font-medium text-foreground mb-4">{t.about.socials}</h3>
                  <SocialIcons className="flex-wrap gap-3" />
                </div>

                {/* CV Download */}
                <div className="p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                  <h3 className="text-sm font-medium text-foreground mb-4">{t.about.curriculum}</h3>
                  <button 
                    onClick={() => window.open('https://drive.google.com/file/d/1JBmXK4aCAPfeY4kuEc5QpO-ehlA2rfWO/view?usp=sharing', '_blank')}
                    className="w-full group inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3 transition-all duration-300 hover:opacity-90"
                  >
                    <Download className="w-4 h-4" />
                    {t.about.downloadCV}
                  </button>
                  <p className="text-xs text-muted-foreground/70 mt-3 leading-relaxed">
                    {t.about.cvDescription}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Tabs */}
              <ScrollReveal>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 lg:p-8">
                  <Tabs defaultValue="profile" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8 bg-background/50">
                      <TabsTrigger value="profile" className="flex items-center gap-2 text-xs sm:text-sm">
                        <User className="w-4 h-4" />
                        <span className="hidden sm:inline">{t.about.profile}</span>
                      </TabsTrigger>
                      <TabsTrigger value="experience" className="flex items-center gap-2 text-xs sm:text-sm">
                        <Briefcase className="w-4 h-4" />
                        <span className="hidden sm:inline">{t.about.experience}</span>
                      </TabsTrigger>
                      <TabsTrigger value="education" className="flex items-center gap-2 text-xs sm:text-sm">
                        <GraduationCap className="w-4 h-4" />
                        <span className="hidden sm:inline">{language === 'pt' ? 'Formação' : 'Education'}</span>
                      </TabsTrigger>
                      <TabsTrigger value="career" className="flex items-center gap-2 text-xs sm:text-sm">
                        <Rocket className="w-4 h-4" />
                        <span className="hidden sm:inline">{language === 'pt' ? 'Carreira' : 'Career'}</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="profile" className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {language === 'pt' ? aboutTextPt : aboutTextEn}
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="experience" className="space-y-4">
                      {currentExperiences.map((exp, index) => (
                        <div key={index} className="p-5 rounded-xl border border-border/20 bg-background/50">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                              <h4 className="text-base font-medium text-foreground">{exp.position}</h4>
                              <p className="text-sm text-foreground/70">{exp.company}</p>
                            </div>
                            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/30 bg-card/50 w-fit">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="education" className="space-y-4">
                      {currentEducation.map((edu, index) => (
                        <div key={index} className="p-5 rounded-xl border border-border/20 bg-background/50">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                              <h4 className="text-base font-medium text-foreground">{edu.title}</h4>
                              <p className="text-sm text-foreground/70">{edu.institution}</p>
                            </div>
                            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/30 bg-card/50 w-fit">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="career" className="space-y-6">
                      <div className="p-6 rounded-xl border border-border/20 bg-background/50 text-center">
                        <Rocket className="w-12 h-12 text-foreground/60 mx-auto mb-4" />
                        <h3 className="text-lg font-serif text-foreground mb-3">
                          {language === 'pt' ? 'Minha Jornada Profissional' : 'My Professional Journey'}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto">
                          {language === 'pt' 
                            ? 'Descubra a história completa de como transformei desafios em oportunidades e construí minha carreira no mundo da tecnologia.'
                            : 'Discover the complete story of how I transformed challenges into opportunities and built my career in the tech world.'}
                        </p>
                        <Link 
                          to="/career"
                          className="group inline-flex items-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-full px-6 py-3 transition-all duration-300 hover:opacity-90"
                        >
                          {language === 'pt' ? 'Ver Página de Carreira' : 'View Career Page'}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </ScrollReveal>

              {/* Book Section */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground">
                    {language === 'pt' ? 'Meu Livro' : 'My Book'}
                  </h2>
                  
                  <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-card/50 to-background">
                        <div className="relative">
                          <div className="absolute inset-0 bg-foreground/10 rounded-lg blur-xl scale-110" />
                          <img
                            src={bookCover}
                            alt={t.book.title}
                            className="relative w-40 h-auto rounded-lg shadow-xl"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-8 space-y-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-border/30 bg-card/50 text-foreground">
                          {t.book.newRelease}
                        </span>
                        
                        <h3 className="text-xl font-serif text-foreground">{t.book.title}</h3>
                        
                        <p className="text-xs text-muted-foreground">
                          121 {language === 'pt' ? 'capítulos' : 'chapters'}
                        </p>
                        
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-foreground/70 text-foreground/70" />
                          ))}
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t.book.aboutText1}
                        </p>
                        
                        <a 
                          href="https://www.amazon.com.br/dp/B0FXV8WP3Y" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                          <span className="relative">
                            {t.book.buyOnAmazon}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Community Section */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground">
                    {language === 'pt' ? 'Comunidade' : 'Community'}
                  </h2>
                  
                  <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-16 h-16 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-foreground/60" />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-serif text-foreground mb-2">Tech Leaders Network</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {language === 'pt' 
                            ? 'Sou o fundador e administrador da Tech Leaders Network, uma comunidade no Discord que conecta desenvolvedores, designers, empreendedores e criadores de diversas áreas.'
                            : "I'm the founder and administrator of Tech Leaders Network, a Discord community that connects developers, designers, entrepreneurs and creators from various fields."}
                        </p>
                        <a 
                          href="https://discord.gg/esmCBMP8Md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                          <span className="relative">
                            {language === 'pt' ? 'Entrar no Discord' : 'Join Discord'}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Certificates */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground">
                    {t.certificates.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {certificates.map((certificate, index) => (
                      <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="group rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden cursor-pointer"
                        style={{
                          boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                        }}
                      >
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-medium border border-border/30 bg-background/80 backdrop-blur-sm flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            {t.certificates.certificate}
                          </div>
                        </div>

                        <div className="p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2 line-clamp-1">
                            {certificate.title}
                          </h4>
                          
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{certificate.date}</span>
                          </div>

                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                            {certificate.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-foreground/70">
                              {certificate.issuer}
                            </span>
                            <a
                              href={certificate.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-foreground hover:opacity-70 transition-opacity"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {t.certificates.view}
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Values */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground">
                    {language === 'pt' ? 'Meus Valores' : 'My Values'}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentValues.map((value, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm text-center cursor-default group"
                        style={{
                          boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                        }}
                      >
                        <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                          <value.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        </div>
                        <h4 className="text-base font-medium text-foreground mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Hobbies */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground">
                    {language === 'pt' ? 'Meus Hobbies' : 'My Hobbies'}
                  </h2>
                  
                  <div className="flex flex-wrap gap-3">
                    {currentHobbies.map((hobby, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ y: -2, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm cursor-default group"
                        style={{
                          boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                        }}
                      >
                        <hobby.icon className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        <span className="text-sm text-foreground">{hobby.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
