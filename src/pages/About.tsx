
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialIcons from "@/components/ui/SocialIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, User, Briefcase, Code, GraduationCap, Heart, Music, Coffee, Gamepad2, BookOpen, Zap, Rocket, Book, ShoppingCart, Star, Award, Calendar, ExternalLink, Users } from "lucide-react";
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
      period: "2023 - 2024 Encerrado",
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
      period: "2023 - 2024 closed",
      description: "Development of custom solutions for diverse clients, including web systems and automation."
    }
  ];

  const skillsPt = [
    { name: "JavaScript/TypeScript", level: 95, icon: Code },
    { name: "React/Next.js", level: 90, icon: Code },
    { name: "Node.js", level: 85, icon: Code },
    { name: "Python", level: 80, icon: Code },
    { name: "AWS/Cloud", level: 75, icon: Zap },
    { name: "Docker", level: 70, icon: Zap },
    { name: "MongoDB/PostgreSQL", level: 85, icon: Code },
    { name: "GraphQL/REST APIs", level: 90, icon: Code }
  ];

  const skillsEn = [
    { name: "JavaScript/TypeScript", level: 95, icon: Code },
    { name: "React/Next.js", level: 90, icon: Code },
    { name: "Node.js", level: 85, icon: Code },
    { name: "Python", level: 80, icon: Code },
    { name: "AWS/Cloud", level: 75, icon: Zap },
    { name: "Docker", level: 70, icon: Zap },
    { name: "MongoDB/PostgreSQL", level: 85, icon: Code },
    { name: "GraphQL/REST APIs", level: 90, icon: Code }
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
    {
      title: "Qualidade",
      description: "Sempre busco entregar código limpo, eficiente e bem documentado",
      icon: Zap
    },
    {
      title: "Aprendizado",
      description: "Estou sempre estudando novas tecnologias e aprimorando minhas habilidades",
      icon: BookOpen
    },
    {
      title: "Colaboração",
      description: "Acredito que os melhores projetos surgem do trabalho em equipe",
      icon: Heart
    }
  ];

  const valuesEn = [
    {
      title: "Quality",
      description: "I always strive to deliver clean, efficient and well-documented code",
      icon: Zap
    },
    {
      title: "Learning",
      description: "I'm always studying new technologies and improving my skills",
      icon: BookOpen
    },
    {
      title: "Collaboration",
      description: "I believe the best projects come from teamwork",
      icon: Heart
    }
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

  // Certificates data
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
  const currentSkills = language === 'pt' ? skillsPt : skillsEn;
  const currentEducation = language === 'pt' ? educationPt : educationEn;
  const currentValues = language === 'pt' ? valuesPt : valuesEn;
  const currentHobbies = language === 'pt' ? hobbiesPt : hobbiesEn;
  const certificates = language === 'pt' ? certificatesPt : certificatesEn;

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <SectionTitle subtitle={t.about.subtitle} align="center">
          {t.about.title}
        </SectionTitle>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3 flex flex-col items-center gap-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-full blur-lg opacity-30 scale-110"></div>
                <Avatar className="h-72 w-72 border-4 border-white dark:border-gray-700 shadow-2xl relative z-10">
                  <AvatarImage src="https://i.ibb.co/MySV14GV/Polish-20231015-221849134-112435.jpg" alt="Talisson Souza" className="object-cover" />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border w-full backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{t.about.socials}</h3>
                <SocialIcons className="flex-wrap justify-center gap-4" />
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border w-full backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{t.about.curriculum}</h3>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://drive.google.com/file/d/1JBmXK4aCAPfeY4kuEc5QpO-ehlA2rfWO/view?usp=sharing', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t.about.downloadCV}
                </Button>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {t.about.cvDescription}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-2/3 space-y-8"
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="profile" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {t.about.profile}
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {t.about.experience}
                    </TabsTrigger>
                    <TabsTrigger value="education" className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      {language === 'pt' ? 'Formação' : 'Education'}
                    </TabsTrigger>
                    <TabsTrigger value="career" className="flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      {language === 'pt' ? 'Carreira' : 'Career'}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profile" className="space-y-6">
                    <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {language === 'pt' ? aboutTextPt : aboutTextEn}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="experience" className="space-y-6">
                    <div className="space-y-6">
                      {currentExperiences.map((exp, index) => (
                        <div key={index} className="bg-white/50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h4>
                              <p className="text-lg text-foreground font-medium">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>


                  <TabsContent value="education" className="space-y-6">
                    <div className="space-y-6">
                      {currentEducation.map((edu, index) => (
                        <div key={index} className="bg-white/50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.title}</h4>
                              <p className="text-lg text-foreground font-medium">{edu.institution}</p>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="career" className="space-y-6">
                    <div className="bg-secondary p-8 rounded-xl border border-border">
                      <div className="text-center mb-6">
                        <Rocket className="w-16 h-16 text-foreground mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {language === 'pt' ? 'Minha Jornada Profissional' : 'My Professional Journey'}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {language === 'pt' 
                            ? 'Descubra a história completa de como transformei desafios em oportunidades e construí minha carreira no mundo da tecnologia.'
                            : 'Discover the complete story of how I transformed challenges into opportunities and built my career in the tech world.'}
                        </p>
                      </div>
                      
                      <Link to="/career">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          {language === 'pt' ? 'Ver Página de Carreira Completa' : 'View Full Career Page'}
                          <Rocket className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>

          {/* Book Section - Highlighted */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {language === 'pt' ? 'Meu Livro' : 'My Book'}
            </h3>
            
            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl scale-110" />
                    <img
                      src={bookCover}
                      alt={t.book.title}
                      className="relative w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 space-y-4">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {t.book.newRelease}
                  </span>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t.book.title}</h4>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    121 {language === 'pt' ? 'capítulos' : 'chapters'}
                  </p>
                  
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t.book.aboutText1}
                  </p>
                  
                  <a 
                    href="https://www.amazon.com.br/dp/B0FXV8WP3Y" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {t.book.buyOnAmazon}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Leaders Network Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {language === 'pt' ? 'Comunidade' : 'Community'}
            </h3>
            
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 p-4 border-2 border-primary/20 flex-shrink-0 flex items-center justify-center">
                  <Users className="w-10 h-10 text-foreground" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Tech Leaders Network</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {language === 'pt' 
                      ? 'Sou o fundador e administrador da Tech Leaders Network, uma comunidade no Discord que conecta desenvolvedores, designers, empreendedores e criadores de diversas áreas. Um espaço para networking, troca de experiências e oportunidades.'
                      : "I'm the founder and administrator of Tech Leaders Network, a Discord community that connects developers, designers, entrepreneurs and creators from various fields. A space for networking, sharing experiences and opportunities."}
                  </p>
                  <a 
                    href="https://discord.gg/esmCBMP8Md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Users className="w-4 h-4" />
                    {language === 'pt' ? 'Entrar no Discord' : 'Join Discord'}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t.certificates.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      <Award className="inline-block w-3 h-3 mr-1" />
                      {t.certificates.certificate}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                      {certificate.title}
                    </h4>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="text-xs">{certificate.date}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                      {certificate.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground font-medium">
                        {certificate.issuer}
                      </span>
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-foreground hover:text-foreground/70 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        <span className="text-xs">{t.certificates.view}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Seção de Valores */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {language === 'pt' ? 'Meus Valores' : 'My Values'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentValues.map((value, index) => (
                <div key={index} className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center">
                  <value.icon className="w-12 h-12 text-foreground mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Seção de Hobbies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {language === 'pt' ? 'Meus Hobbies' : 'My Hobbies'}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {currentHobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-3 bg-card px-6 py-4 rounded-xl shadow-lg border border-border hover:scale-105 transition-transform duration-300">
                  <hobby.icon className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium">{hobby.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
