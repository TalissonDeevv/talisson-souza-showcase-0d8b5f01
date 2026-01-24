import Layout from "@/components/layout/Layout";
import ContactDialog from "@/components/ui/ContactDialog";
import SocialIcons from "@/components/ui/SocialIcons";
import FAQ from "@/components/ui/FAQ";
import FloatingTerminal from "@/components/ui/FloatingTerminal";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import logoSignature from "@/assets/logo-signature.png";
import talissonPhoto from "@/assets/talisson-photo.png";

const Index = () => {
  const {
    language
  } = useTheme();
  const t = useTranslation(language);
  const featuredProjects = [{
    title: "Land page Sagiri Bot",
    description: getText(language, "Uma land page pra uma bot de discord de parcerias.", "A landing page for a Discord bot for partnerships."),
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://sagiribot.vercel.app"
  }, {
    title: getText(language, "Site da Werneck Group", "Werneck Group Website"),
    description: getText(language, "Redesign completo da plataforma corporativa do Werneck Group, incluindo seções institucionais e área de clientes.", "Complete redesign of Werneck Group's corporate platform, including institutional sections and client area."),
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    link: "https://werneckgroup.com"
  }, {
    title: getText(language, "Site da Família Werneck", "Werneck Family Website"),
    description: getText(language, "Portal personalizado para a Família Werneck com foco em compartilhamento de conteúdo e integração de mídias sociais.", "Customized portal for the Werneck Family focused on content sharing and social media integration."),
    technologies: ["React", "Firebase", "Styled Components"],
    link: "https://familiawerneck.vercel.app"
  }];
  const featuredCompanies = [{
    name: "Cheetah Network",
    role: "CEO & Founder",
    period: "2023 - " + getText(language, 'Presente', 'Present'),
    description: getText(language, "Soluções digitais especializadas em desenvolvimento de bots, aplicações web.", "Digital solutions specialized in bot development and web applications.")
  }, {
    name: "Werneck Group",
    role: getText(language, 'Diretor Estratégico', 'Strategic Director'),
    period: "2024 - " + getText(language, 'Presente', 'Present'),
    description: getText(language, "Consultoria estratégica especializada em transformação digital e implementação de soluções tecnológicas empresariais.", "Strategic consulting specialized in digital transformation and implementation of enterprise technology solutions.")
  }];
  const techStack = ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Firebase'];
  return <Layout withPadding={false}>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-end pb-20 pt-32 relative overflow-hidden">
        {/* Photo with editorial fade effect - positioned on right side */}
        <div 
          className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] lg:w-[420px] xl:w-[480px] pointer-events-none select-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 60%), linear-gradient(to top, transparent 0%, transparent 10%, black 40%)',
            maskComposite: 'intersect',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 60%), linear-gradient(to top, transparent 0%, transparent 10%, black 40%)',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <img 
            src={talissonPhoto} 
            alt="" 
            className="w-full h-auto opacity-50"
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
              {t.hero.badge}
            </p>
            
            <img src={logoSignature} alt="Talisson Souza" className="h-20 sm:h-24 lg:h-28 w-auto mb-10 invert dark:invert-0 border-0 border-none" />

            <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
              <ContactDialog>
                <button className="group inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
                  {t.hero.contact}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </ContactDialog>
              
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t.hero.about}
              </Link>
            </div>

            <SocialIcons />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl text-foreground mb-4">
                {getText(language, 'Stack Técnica', 'Tech Stack')}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {getText(language, 'Ferramentas que uso no dia a dia para construir sistemas robustos', 'Tools I use daily to build robust systems')}
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-3">
                {techStack.map(tech => <span key={tech} className="text-sm text-foreground/80 px-4 py-2 border border-border/60 hover:border-foreground/30 transition-colors duration-200">
                    {tech}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl text-foreground mb-4">
                {getText(language, 'Trajetória Profissional', 'Professional Journey')}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {getText(language, 'Posições de liderança e contribuições que moldaram minha carreira em tecnologia.', 'Leadership positions and contributions that shaped my career in technology.')}
              </p>
              <Link to="/career" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
                {getText(language, 'Ver trajetória completa', 'View full career')}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              {featuredCompanies.map((company, index) => <div key={company.name} className={`pb-8 ${index !== featuredCompanies.length - 1 ? 'border-b border-border/40' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{company.role}</h3>
                      <p className="text-sm text-muted-foreground">{company.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground tracking-wide">{company.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {company.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[{
            value: '50+',
            label: getText(language, 'Projetos', 'Projects')
          }, {
            value: '8+',
            label: getText(language, 'Anos Exp.', 'Years Exp.')
          }, {
            value: '2',
            label: getText(language, 'Empresas', 'Companies')
          }, {
            value: '100%',
            label: getText(language, 'Satisfação', 'Satisfaction')
          }].map(stat => <div key={stat.label} className="text-center lg:text-left">
                <p className="font-serif text-4xl lg:text-5xl text-foreground mb-2">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                {t.projects.title}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg">
                {t.projects.subtitle}
              </p>
            </div>
            <Link to="/projects" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
              {t.projects.viewAll}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {featuredProjects.map((project, index) => <article key={project.title} className="group">
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:opacity-70 transition-opacity duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>)}
                </div>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-sm text-foreground">
                    {t.projects.seeProject}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                  </a>}
              </article>)}
          </div>
        </div>
      </section>

      {/* Story Highlight */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
              {language === 'pt' ? 'Por que fundei minha empresa aos 17?' : 'Why I started my company at 17?'}
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'pt' ? 'Em 2021, fui recusado em um processo seletivo não por falta de qualificação, mas por causa da minha cadeira de rodas. Esse momento transformou frustração em propósito: decidi criar meu próprio espaço onde competência e inclusão caminham juntas.' : 'In 2021, I was rejected in a selection process not for lack of qualification, but because of my wheelchair. That moment transformed frustration into purpose: I decided to create my own space where competence and inclusion walk together.'}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {language === 'pt' ? 'Assim nasceu a Cheetah Network — mais que uma empresa, uma prova de que todos merecem oportunidades reais.' : 'Thus Cheetah Network was born — more than a company, proof that everyone deserves real opportunities.'}
            </p>
            
            <Link to="/career" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
              {language === 'pt' ? 'Ler história completa' : 'Read full story'}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
              {language === 'pt' ? 'O que dizem sobre mim' : 'What they say about me'}
            </h2>
            <p className="text-sm text-muted-foreground">
              {language === 'pt' ? 'Depoimentos de colegas e clientes' : 'Testimonials from colleagues and clients'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[{
            initials: "PS",
            name: "Priscila Suanne",
            role: language === 'pt' ? 'Desenvolvedora Back End' : 'Back End Developer',
            quote: language === 'pt' ? '"Tive o prazer de trabalhar com Talisson, um profissional extremamente comprometido, resiliente e dedicado. Sua postura ética e foco em resultados foram fundamentais para o sucesso dos projetos."' : '"I had the pleasure of working with Talisson, an extremely committed, resilient and dedicated professional. His ethical stance and focus on results were fundamental to the success of the projects."'
          }, {
            initials: "DF",
            name: "Davi R. Fraustino",
            role: language === 'pt' ? 'Consultor de Tecnologia' : 'Technology Consultant',
            quote: language === 'pt' ? '"Talisson é um excelente profissional capaz de unir conhecimento técnico com visão estratégica de negócios. Ele sempre entrega soluções criativas e eficientes."' : '"Talisson is an excellent professional capable of combining technical knowledge with strategic business vision. He always delivers creative and efficient solutions."'
          }].map(testimonial => <blockquote key={testimonial.name} className="relative">
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>)}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                {t.services.title}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg">
                {t.services.subtitle}
              </p>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
              {language === 'pt' ? 'Ver todos os serviços' : 'View all services'}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[{
            number: '01',
            title: getText(language, 'Desenvolvimento Web', 'Web Development'),
            description: getText(language, 'Sites e aplicações web modernas com as melhores tecnologias.', 'Modern websites and web applications with the best technologies.')
          }, {
            number: '02',
            title: getText(language, 'Sistemas Corporativos', 'Corporate Systems'),
            description: getText(language, 'Soluções empresariais sob medida para otimizar processos.', 'Custom enterprise solutions to optimize processes.')
          }, {
            number: '03',
            title: getText(language, 'Consultoria Tech', 'Tech Consulting'),
            description: getText(language, 'Orientação estratégica para projetos de tecnologia.', 'Strategic guidance for technology projects.')
          }].map(service => <div key={service.number} className="group py-8 border-t border-border/40">
                <span className="text-xs text-muted-foreground mb-4 block">{service.number}</span>
                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                {t.blog.title}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg">
                {t.blog.subtitle}
              </p>
            </div>
            <Link to="/blog" className="group inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity duration-200">
              {t.blog.viewAll}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
          }].map((post, index) => <article key={post.title} className="group py-8 border-t border-border/40">
                <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:opacity-70 transition-opacity duration-200">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </article>)}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                {language === 'pt' ? 'Terminal Interativo' : 'Interactive Terminal'}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                {language === 'pt' ? 'Experimente navegar pelo meu perfil usando comandos de terminal. Digite "help" para ver os comandos disponíveis.' : 'Try navigating my profile using terminal commands. Type "help" to see available commands.'}
              </p>
            </div>
            
            <FloatingTerminal />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {language === 'pt' ? 'Respostas para as dúvidas mais comuns sobre meus serviços e forma de trabalho.' : 'Answers to the most common questions about my services and work approach.'}
              </p>
            </div>
            
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
              {t.cta.title}
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <ContactDialog>
                <button className="group inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </ContactDialog>
              
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t.projects.viewAll}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;