import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ui/ProjectCard";
import CompanyCard from "@/components/ui/CompanyCard";
import ContactDialog from "@/components/ui/ContactDialog";
import SocialIcons from "@/components/ui/SocialIcons";
import FAQ from "@/components/ui/FAQ";
import TypewriterEffect from "@/components/ui/TypewriterEffect";
import AnimatedName from "@/components/ui/AnimatedName";
import FloatingTerminal from "@/components/ui/FloatingTerminal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Target, Lightbulb, Briefcase, Code, Heart } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
const Index = () => {
  const {
    language
  } = useTheme();
  const t = useTranslation(language);

  // Dados atualizados para projetos em destaque
  const featuredProjects = [{
    title: "Land page Sagiri Bot",
    description: getText(language, "Uma land page pra uma bot de discord de parcerias.", "A landing page for a Discord bot for partnerships."),
    image: "https://i.ibb.co/jkPPHWdc/image.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://sagiribot.vercel.app"
  }, {
    title: getText(language, "Site da Werneck Group", "Werneck Group Website"),
    description: getText(language, "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes.", "Complete redesign of Werneck Group's corporate platform, including institutional sections and client area."),
    image: "https://i.ibb.co/rSQjVTs/wallpaper.png",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    link: "https://werneckgroup.com"
  }, {
    title: getText(language, "Site da Família Werneck", "Werneck Family Website"),
    description: getText(language, "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais.", "Customized portal for the Werneck Family focused on content sharing and social media integration."),
    image: "https://i.ibb.co/20FBr03Q/Chat-GPT-Image-4-05-2025-15-12-34.png",
    technologies: ["React", "Firebase", "Styled Components"],
    link: "https://familiawerneck.vercel.app"
  }];

  // Companies with skills
  const featuredCompanies = [{
    name: "Cheetah Network",
    description: getText(language, "Soluções digitais especializadas em desenvolvimento de bots, aplicações web.", "Digital solutions specialized in bot development and web applications."),
    logo: "https://i.ibb.co/0yQ0mnD6/bannercheetah2.png",
    skills: language === 'pt' 
      ? ["Liderança como CEO, definindo a visão estratégica da empresa", "Gestão de projetos e supervisão eficiente de equipes multidisciplinares", "Desenvolvimento e capacitação de talentos internos", "Gestão de clientes, parcerias estratégicas e relacionamento comercial", "Planejamento e execução de estratégias para crescimento e inovação"] 
      : ["CEO leadership, defining the company's strategic vision", "Project management and efficient supervision of multidisciplinary teams", "Development and training of internal talents", "Client management, strategic partnerships and commercial relationships", "Planning and execution of strategies for growth and innovation"]
  }, {
    name: "Werneck Group",
    description: getText(language, "Consultoria estratégica especializada em transformação digital e implementação de soluções tecnológicas empresariais.", "Strategic consulting specialized in digital transformation and implementation of enterprise technology solutions."),
    logo: "https://i.ibb.co/YT7LK7Vc/bannerwerneck.jpg",
    skills: language === 'pt' 
      ? ["Direção estratégica e tomada de decisões corporativas", "Desenvolvimento e implementação de planos de negócios", "Gestão financeira e controle orçamentário", "Coordenação de operações e otimização de processos", "Construção e manutenção de relacionamentos comerciais", "Liderança e motivação de equipes multidisciplinares", "Análise de mercado e identificação de oportunidades de crescimento"] 
      : ["Strategic direction and corporate decision making", "Development and implementation of business plans", "Financial management and budget control", "Operations coordination and process optimization", "Building and maintaining commercial relationships", "Leadership and motivation of multidisciplinary teams", "Market analysis and identification of growth opportunities"]
  }];
  return <Layout withPadding={false}>
      {/* Hero Section - Simplificado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background aprimorado */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-gray-100/60 to-gray-200/70 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/80"></div>
        
        {/* Elementos flutuantes aprimorados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-300/20 to-gray-400/20 dark:from-gray-600/20 dark:to-gray-500/10 rounded-full blur-3xl opacity-60 animate-float"></div>
          <div className="absolute bottom-32 left-16 w-80 h-80 bg-gradient-to-tr from-gray-200/25 to-gray-300/10 dark:from-gray-500/20 dark:to-gray-600/15 rounded-full blur-3xl opacity-40 animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-100/15 to-gray-200/15 dark:from-gray-500/10 dark:to-gray-600/10 rounded-full blur-3xl opacity-30 animate-float" style={{
          animationDelay: '2s'
        }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="mb-6">
              <span className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-6 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
                {t.hero.badge}
              </span>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                {t.hero.greeting}{" "}
                <AnimatedName className="text-gradient" />
              </h1>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </motion.div>

            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex justify-center mb-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-3xl border border-white/50 dark:border-gray-700/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-105">
                <SocialIcons className="flex gap-6" />
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <ContactDialog>
                <Button className="font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {t.hero.contact}
                </Button>
              </ContactDialog>
              
              <Link to="/about">
                <Button variant="outline" className="font-semibold px-8 py-3 rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300">
                  {t.hero.about}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Tech Stack Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {getText(language, 'Stack Técnica', 'Tech Stack')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {getText(language, 'Ferramentas que uso no dia a dia para construir sistemas robustos', 'Tools I use daily to build robust systems')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
            >
              {[
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-lg group"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {getText(language, 'Trajetória Profissional', 'Professional Journey')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {getText(language, 'Posições de liderança e contribuições que moldaram minha carreira em tecnologia.', 'Leadership positions and contributions that shaped my career in technology.')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Professional Experience Timeline */}
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  {getText(language, 'Trajetória Profissional', 'Career Path')}
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                    <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 dark:text-white">CEO & Founder - Cheetah Network</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2023 - {getText(language, 'Presente', 'Present')}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {getText(language, 'Fundei e lidero a Cheetah Network, desenvolvendo soluções digitais inovadoras para clientes diversos.', 'Founded and lead Cheetah Network, developing innovative digital solutions for diverse clients.')}
                      </p>
                    </div>
                  </div>
                  <div className="border-l-4 border-gray-700 dark:border-gray-400 pl-6">
                    <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 dark:text-white">{getText(language, 'Diretor Estratégico', 'Strategic Director')} - Werneck Group</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2024 - {getText(language, 'Presente', 'Present')}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {getText(language, 'Direção estratégica em consultoria empresarial e desenvolvimento de negócios.', 'Strategic direction in business consulting and business development.')}
                      </p>
                    </div>
                  </div>
                  <div className="border-l-4 border-gray-500 dark:border-gray-500 pl-6">
                    <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 dark:text-white">{getText(language, 'Parceiro', 'Partner')} - Square Cloud</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2025 - {getText(language, 'Presente', 'Present')}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {getText(language, 'Parceiro oficial e contribuidor para ecossistema de hosting cloud.', 'Official partner and contributor to cloud hosting ecosystem.')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  {getText(language, 'Conquistas', 'Achievements')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{getText(language, 'Projetos', 'Projects')}</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">8+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{getText(language, 'Anos Exp.', 'Years Exp.')}</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">2</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{getText(language, 'Empresas', 'Companies')}</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-600/60 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{getText(language, 'Satisfação', 'Satisfaction')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {getText(language, 'Empresas que Lidero', 'Companies I Lead')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {getText(language, 'Organizações onde atuo em posições de liderança e direção estratégica.', 'Organizations where I serve in leadership and strategic direction roles.')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredCompanies.map((company, index) => <CompanyCard key={company.name} {...company} index={index} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {t.projects.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t.projects.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => <ProjectCard key={project.title} {...project} index={index} />)}
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-center">
              <Link to="/projects">
                <Button variant="outline" size="lg" className="font-semibold px-8 py-3 rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300">
                  {t.projects.viewAll}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Highlight Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-3">
                {language === 'pt' ? 'Por que fundei minha empresa aos 17?' : 'Why I started my company at 17?'}
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 md:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {language === 'pt' 
                  ? 'Em 2021, fui recusado em um processo seletivo não por falta de qualificação, mas por causa da minha cadeira de rodas. Esse momento transformou frustração em propósito: decidi criar meu próprio espaço onde competência e inclusão caminham juntas.'
                  : 'In 2021, I was rejected in a selection process not for lack of qualification, but because of my wheelchair. That moment transformed frustration into purpose: I decided to create my own space where competence and inclusion walk together.'
                }
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {language === 'pt'
                  ? 'Assim nasceu a Cheetah Network — mais que uma empresa, uma prova de que todos merecem oportunidades reais.'
                  : 'Thus Cheetah Network was born — more than a company, proof that everyone deserves real opportunities.'
                }
              </p>
              <div className="text-center">
                <Link to="/career">
                  <Button className="font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {language === 'pt' ? 'Ler história completa' : 'Read full story'}
                  </Button>
                </Link>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {language === 'pt' ? 'O que dizem sobre mim' : 'What they say about me'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === 'pt' ? 'Depoimentos de colegas e clientes' : 'Testimonials from colleagues and clients'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                    PS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Priscila Suanne</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'pt' ? 'Desenvolvedora Back End' : 'Back End Developer'}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {language === 'pt' 
                    ? '"Tive o prazer de trabalhar com Talisson, um profissional extremamente comprometido, resiliente e dedicado. Sua postura ética e foco em resultados foram fundamentais para o sucesso dos projetos."'
                    : '"I had the pleasure of working with Talisson, an extremely committed, resilient and dedicated professional. His ethical stance and focus on results were fundamental to the success of the projects."'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                    DF
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Davi R. Fraustino</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'pt' ? 'Consultor de Tecnologia' : 'Technology Consultant'}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {language === 'pt'
                    ? '"Talisson é um excelente profissional capaz de unir conhecimento técnico com visão estratégica de negócios. Ele sempre entrega soluções criativas e eficientes."'
                    : '"Talisson is an excellent professional capable of combining technical knowledge with strategic business vision. He always delivers creative and efficient solutions."'
                  }
                </p>
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="text-center mt-12">
              <Link to="/career">
                <Button variant="outline" size="lg" className="font-semibold px-8 py-3 rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300">
                  {language === 'pt' ? 'Ver todos os depoimentos' : 'See all testimonials'}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {t.services.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t.services.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[{
              icon: Code,
              title: getText(language, 'Desenvolvimento Web', 'Web Development'),
              description: getText(language, 'Sites e aplicações web modernas com as melhores tecnologias.', 'Modern websites and web applications with the best technologies.')
            }, {
              icon: Building2,
              title: getText(language, 'Sistemas Corporativos', 'Corporate Systems'),
              description: getText(language, 'Soluções empresariais sob medida para otimizar processos.', 'Custom enterprise solutions to optimize processes.')
            }, {
              icon: Lightbulb,
              title: getText(language, 'Consultoria Tech', 'Tech Consulting'),
              description: getText(language, 'Orientação estratégica para projetos de tecnologia.', 'Strategic guidance for technology projects.')
            }].map((service, index) => <motion.div key={service.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                </motion.div>)}
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-center">
              <Link to="/services">
                <Button variant="outline" size="lg" className="font-semibold px-8 py-3 rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300">
                  {language === 'pt' ? 'Ver todos os serviços' : 'View all services'}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {t.blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t.blog.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[{
              title: getText(language, 'Desenvolvimento Full Stack', 'Full Stack Development'),
              excerpt: getText(language, 'Explore as melhores práticas e tendências no desenvolvimento web moderno.', 'Explore best practices and trends in modern web development.'),
              category: getText(language, 'Desenvolvimento', 'Development'),
              readTime: '5 min'
            }, {
              title: getText(language, 'Automação Web', 'Web Automation'),
              excerpt: getText(language, 'Aprenda como automatizar processos e aumentar a produtividade.', 'Learn how to automate processes and increase productivity.'),
              category: getText(language, 'Automação', 'Automation'),
              readTime: '4 min'
            }, {
              title: getText(language, 'Soluções Cloud', 'Cloud Solutions'),
              excerpt: getText(language, 'Descubra as vantagens da computação em nuvem para seu negócio.', 'Discover the advantages of cloud computing for your business.'),
              category: 'Cloud',
              readTime: '6 min'
            }].map((post, index) => <motion.div key={post.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </motion.div>)}
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-center">
              <Link to="/blog">
                <Button variant="outline" size="lg" className="font-semibold px-8 py-3 rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300">
                  {t.blog.viewAll}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {language === 'pt' ? 'Terminal Interativo' : 'Interactive Terminal'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {language === 'pt' 
                  ? 'Experimente navegar pelo meu perfil usando comandos de terminal. Digite "help" para ver os comandos disponíveis.'
                  : 'Try navigating my profile using terminal commands. Type "help" to see available commands.'
                }
              </p>
            </motion.div>
            
            <FloatingTerminal />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {language === 'pt' 
                  ? 'Respostas para as dúvidas mais comuns sobre meus serviços e forma de trabalho.'
                  : 'Answers to the most common questions about my services and work approach.'
                }
              </p>
            </motion.div>
            
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <div className="relative bg-primary text-primary-foreground p-12 md:p-16 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24" />
              
              <div className="relative z-10 text-center">
                <Heart className="w-12 h-12 mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t.cta.title}
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  {t.cta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ContactDialog>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      {t.cta.button}
                    </Button>
                  </ContactDialog>
                  <Link to="/projects">
                    <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-all duration-300">
                      {t.projects.viewAll}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Index;