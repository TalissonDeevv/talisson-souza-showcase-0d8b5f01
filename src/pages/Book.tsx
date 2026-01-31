import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Heart, Lightbulb, Users, Target, Zap, Star, CheckCircle2, Clock, Layers, TrendingUp, Sparkles, Quote, User, Award, Rocket, Shield, Eye, PenTool } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import bookCover from "@/assets/book-cover.jpg";
import bookHero from "@/assets/book-hero.jpg";

const Book = () => {
  const { language } = useTheme();

  const bookTitle = getText(language, "Superando Limites", "Overcoming Limits");
  const bookSubtitle = getText(language, "da Rejeição ao Sucesso", "from Rejection to Success");

  const themes = [
    { icon: Heart, title: getText(language, "Superação Pessoal", "Personal Growth"), description: getText(language, "Como transformar dificuldades em força interior", "How to transform difficulties into inner strength") },
    { icon: Shield, title: getText(language, "Rejeição e Autoconfiança", "Rejection & Self-confidence"), description: getText(language, "Lidar com o 'não' e seguir em frente", "Dealing with 'no' and moving forward") },
    { icon: TrendingUp, title: getText(language, "Empreendedorismo Real", "Real Entrepreneurship"), description: getText(language, "Lições práticas de quem começou do zero", "Practical lessons from someone who started from scratch") },
    { icon: Users, title: getText(language, "Liderança e Responsabilidade", "Leadership & Responsibility"), description: getText(language, "Assumir o protagonismo da própria história", "Taking ownership of your own story") },
    { icon: Lightbulb, title: getText(language, "Mentalidade de Crescimento", "Growth Mindset"), description: getText(language, "Desenvolver visão de longo prazo", "Developing long-term vision") },
    { icon: Target, title: getText(language, "Propósito e Identidade", "Purpose & Identity"), description: getText(language, "Construir um legado que faz sentido", "Building a legacy that matters") },
  ];

  const whatYouWillFind = [
    getText(language, "Mais de 120 capítulos curtos e diretos", "Over 120 short and direct chapters"),
    getText(language, "Reflexões profundas aplicáveis à vida real", "Deep reflections applicable to real life"),
    getText(language, "Histórias reais de rejeição, queda e reconstrução", "Real stories of rejection, fall and reconstruction"),
    getText(language, "Aprendizados sobre mentalidade, disciplina e visão", "Lessons on mindset, discipline and vision"),
    getText(language, "Conteúdo escrito de forma acessível e honesta", "Content written in an accessible and honest way"),
  ];

  const targetAudience = [
    { icon: User, text: getText(language, "Pessoas que enfrentam rejeição ou falta de oportunidades", "People facing rejection or lack of opportunities") },
    { icon: Sparkles, text: getText(language, "Jovens em busca de direção e propósito", "Young people seeking direction and purpose") },
    { icon: Rocket, text: getText(language, "Empreendedores iniciantes ou em crescimento", "Beginning or growing entrepreneurs") },
    { icon: Zap, text: getText(language, "Profissionais que querem evoluir mentalmente", "Professionals who want to grow mentally") },
    { icon: Heart, text: getText(language, "Quem deseja transformar dor em força", "Those who want to transform pain into strength") },
  ];

  const impact = [
    { icon: Zap, title: getText(language, "Inspirar Ação", "Inspire Action"), description: getText(language, "Sair da inércia e tomar iniciativa", "Break inertia and take initiative") },
    { icon: Eye, title: getText(language, "Gerar Clareza", "Generate Clarity"), description: getText(language, "Enxergar o caminho com mais nitidez", "See the path more clearly") },
    { icon: Shield, title: getText(language, "Fortalecer Mentalidade", "Strengthen Mindset"), description: getText(language, "Construir resiliência duradoura", "Build lasting resilience") },
    { icon: Award, title: getText(language, "Incentivar Responsabilidade", "Encourage Responsibility"), description: getText(language, "Assumir o controle da própria vida", "Take control of your own life") },
  ];

  return (
    <Layout>
      <SEO
        title={`${bookTitle}: ${bookSubtitle} | Talisson Souza`}
        description={getText(
          language,
          "Livro autoral de Talisson Souza sobre superação, resiliência, empreendedorismo e liderança. Mais de 120 capítulos com lições práticas para transformar desafios em conquistas.",
          "Talisson Souza's book on overcoming, resilience, entrepreneurship and leadership. Over 120 chapters with practical lessons to transform challenges into achievements."
        )}
        canonical="/livro"
        type="website"
        keywords={[
          'livro',
          'superando limites',
          'superação',
          'empreendedorismo',
          'liderança',
          'resiliência',
          'autoajuda',
          'motivação',
          'carreira'
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl opacity-60 hidden md:block" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-accent/5 via-transparent to-transparent blur-3xl opacity-40 hidden md:block" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Book shadow */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-foreground/20 rounded-xl blur-xl" />
                
                <img
                  src={bookCover}
                  alt={`${bookTitle} - ${bookSubtitle}`}
                  className="relative w-64 md:w-72 lg:w-80 h-auto rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
                />
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium shadow-lg"
                >
                  {getText(language, "Disponível na Amazon", "Available on Amazon")}
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, "Obra Autoral", "Original Work")}
              </motion.span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.05]">
                {bookTitle}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {bookSubtitle}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-10">
                {getText(
                  language,
                  "Um livro que nasce da experiência real de alguém que enfrentou rejeições, limitações físicas, portas fechadas e desconfiança constante, mas decidiu transformar cada dificuldade em força.",
                  "A book born from the real experience of someone who faced rejections, physical limitations, closed doors and constant distrust, but decided to transform each difficulty into strength."
                )}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
                <div className="text-center lg:text-left">
                  <span className="block font-serif text-3xl text-foreground">120+</span>
                  <span className="text-sm text-muted-foreground">{getText(language, "Capítulos", "Chapters")}</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block font-serif text-3xl text-foreground">1.5</span>
                  <span className="text-sm text-muted-foreground">{getText(language, "Anos de escrita", "Years of writing")}</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block font-serif text-3xl text-foreground">100%</span>
                  <span className="text-sm text-muted-foreground">{getText(language, "Autoral", "Original")}</span>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="https://www.amazon.com.br/dp/B0DKFL3MSR"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group inline-flex items-center gap-3 text-sm font-medium text-background bg-foreground px-8 py-4 rounded-full hover:bg-foreground/90 transition-all duration-300"
              >
                {getText(language, "Acessar na Amazon", "Access on Amazon")}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, "Sobre o Livro", "About the Book")}
              </motion.span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 leading-[1.08]">
                {getText(
                  language,
                  "Uma jornada de superação contada em primeira pessoa",
                  "A journey of overcoming told in first person"
                )}
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  {getText(
                    language,
                    "A vida nem sempre é justa, e muitas vezes os obstáculos parecem impossíveis de superar. Este livro nasce da experiência real de alguém que enfrentou rejeições, limitações físicas, portas fechadas e desconfiança constante, mas decidiu transformar cada dificuldade em força.",
                    "Life isn't always fair, and often obstacles seem impossible to overcome. This book is born from the real experience of someone who faced rejections, physical limitations, closed doors and constant distrust, but decided to transform each difficulty into strength."
                  )}
                </p>

                <p className="text-base md:text-lg">
                  {getText(
                    language,
                    "Ao longo de mais de 120 capítulos, a obra aborda temas como superação, resiliência, empreendedorismo, liderança, autoconfiança e visão estratégica, oferecendo reflexões profundas e aprendizados práticos para quem deseja evoluir pessoal e profissionalmente.",
                    "Throughout over 120 chapters, the book addresses themes such as overcoming, resilience, entrepreneurship, leadership, self-confidence and strategic vision, offering deep reflections and practical learnings for those who want to evolve personally and professionally."
                  )}
                </p>

                <p className="text-base md:text-lg font-medium text-foreground/80">
                  {getText(
                    language,
                    "Não é um livro teórico. É um relato real, direto e humano, escrito para quem precisa de direção, coragem e clareza para continuar.",
                    "It's not a theoretical book. It's a real, direct and human account, written for those who need direction, courage and clarity to continue."
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Why This Book Was Written */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-card/20 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, "A Origem", "The Origin")}
              </motion.span>

              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-[1.08]">
                {getText(
                  language,
                  "Por que este livro foi escrito",
                  "Why this book was written"
                )}
              </h2>

              <div className="flex items-center gap-4 mt-8 p-4 rounded-xl border border-border/30 bg-card/30">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-foreground/60" />
                </div>
                <div>
                  <span className="block text-lg font-medium text-foreground">1 {getText(language, "ano e", "year and")} 5 {getText(language, "meses", "months")}</span>
                  <span className="text-sm text-muted-foreground">{getText(language, "de escrita dedicada", "of dedicated writing")}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7" delay={0.1}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-base">
                  {getText(
                    language,
                    "Este livro foi escrito ao longo de 1 ano e 5 meses, como resultado de uma trajetória marcada por desafios, rejeições e a necessidade constante de provar valor.",
                    "This book was written over 1 year and 5 months, as a result of a trajectory marked by challenges, rejections and the constant need to prove value."
                  )}
                </p>

                <p className="text-base">
                  {getText(
                    language,
                    "Desde cedo, o autor enfrentou não apenas limitações físicas, mas também o preconceito, a falta de oportunidades e a dificuldade de ser levado a sério profissionalmente. Foram inúmeros 'nãos', tentativas frustradas e momentos de incerteza.",
                    "From an early age, the author faced not only physical limitations, but also prejudice, lack of opportunities and the difficulty of being taken seriously professionally. There were countless 'nos', frustrated attempts and moments of uncertainty."
                  )}
                </p>

                <p className="text-base">
                  {getText(
                    language,
                    "Em vez de desistir, decidiu criar o próprio caminho: fundou sua empresa, tornou-se empreendedor e seguiu firme como programador, construindo oportunidades com as próprias mãos.",
                    "Instead of giving up, he decided to create his own path: he founded his company, became an entrepreneur and continued firmly as a programmer, building opportunities with his own hands."
                  )}
                </p>

                <p className="text-base font-medium text-foreground/80">
                  {getText(
                    language,
                    "A escrita deste livro foi uma forma de organizar aprendizados, registrar vivências reais e compartilhar uma mensagem clara: é possível vencer, mesmo quando o cenário é desfavorável.",
                    "Writing this book was a way to organize learnings, record real experiences and share a clear message: it is possible to win, even when the scenario is unfavorable."
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* The Journey Behind the Book */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, "Bastidores", "Behind the Scenes")}
            </motion.span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.08]">
              {getText(
                language,
                "A jornada por trás da obra",
                "The journey behind the book"
              )}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: PenTool, title: getText(language, "Processo de Escrita", "Writing Process"), description: getText(language, "Cada capítulo nasceu de reflexões reais, escritas nos momentos mais intensos da jornada", "Each chapter was born from real reflections, written in the most intense moments of the journey") },
              { icon: Heart, title: getText(language, "Momentos de Dúvida", "Moments of Doubt"), description: getText(language, "Houve dias de incerteza, mas a decisão de continuar sempre prevaleceu", "There were days of uncertainty, but the decision to continue always prevailed") },
              { icon: TrendingUp, title: getText(language, "Evolução Pessoal", "Personal Evolution"), description: getText(language, "O livro acompanha o próprio amadurecimento do autor ao longo do tempo", "The book follows the author's own maturation over time") },
              { icon: Layers, title: getText(language, "Organização de Aprendizados", "Organizing Learnings"), description: getText(language, "Transformar experiências dispersas em lições estruturadas e aplicáveis", "Transforming scattered experiences into structured and applicable lessons") },
              { icon: Lightbulb, title: getText(language, "Clareza de Propósito", "Clarity of Purpose"), description: getText(language, "A escrita ajudou a definir com mais nitidez o caminho a seguir", "Writing helped to more clearly define the path forward") },
              { icon: Sparkles, title: getText(language, "Legado em Construção", "Legacy in Progress"), description: getText(language, "Este livro é parte de algo maior que está sendo construído", "This book is part of something bigger being built") },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm h-full"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent" />
                    
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-foreground/60" />
                    </div>
                    
                    <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      {/* What You Will Find */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-5">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, "Conteúdo", "Content")}
              </motion.span>

              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-[1.08]">
                {getText(
                  language,
                  "O que você vai encontrar no livro",
                  "What you will find in the book"
                )}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {getText(
                  language,
                  "Cada capítulo foi pensado para entregar valor real. Sem enrolação, sem teorias vazias. Apenas experiências vividas e lições que podem ser aplicadas imediatamente.",
                  "Each chapter was designed to deliver real value. No filler, no empty theories. Just lived experiences and lessons that can be applied immediately."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7" delay={0.1}>
              <div className="space-y-4">
                {whatYouWillFind.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border/20 bg-card/20"
                  >
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-foreground/60" />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Main Themes */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, "Temas Centrais", "Core Themes")}
            </motion.span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.08]">
              {getText(
                language,
                "Principais temas abordados",
                "Main topics covered"
              )}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <ScrollReveal key={theme.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm h-full"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent" />
                    
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-foreground/60" />
                    </div>
                    
                    <h3 className="text-lg font-medium text-foreground mb-2">{theme.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      {/* Target Audience */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/20 to-transparent" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, "Público", "Audience")}
              </motion.span>

              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-[1.08]">
                {getText(
                  language,
                  "Para quem este livro foi escrito",
                  "Who this book was written for"
                )}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {getText(
                  language,
                  "Este livro é para quem busca mais do que motivação passageira. É para quem quer clareza, direção e força para agir.",
                  "This book is for those who seek more than fleeting motivation. It's for those who want clarity, direction and strength to act."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7" delay={0.1}>
              <div className="space-y-4">
                {targetAudience.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-5 rounded-xl border border-border/20 bg-card/20"
                    >
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-foreground/60" />
                      </div>
                      <span className="text-foreground/90">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Impact */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
            >
              {getText(language, "Propósito", "Purpose")}
            </motion.span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.08]">
              {getText(
                language,
                "O impacto que o livro busca gerar",
                "The impact the book seeks to generate"
              )}
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              {getText(
                language,
                "A origem não define o destino. Este livro existe para provar isso.",
                "Origin does not define destiny. This book exists to prove that."
              )}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impact.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm text-center h-full"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-foreground/60" />
                    </div>
                    
                    <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      {/* Status & Publication */}
      <ParallaxSection
        className="py-20 lg:py-28"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="p-8 md:p-12 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
                >
                  {getText(language, "Status de Publicação", "Publication Status")}
                </motion.span>

                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-[1.08]">
                  {getText(
                    language,
                    "Obra publicada e disponível",
                    "Published and available work"
                  )}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: CheckCircle2, text: getText(language, "Livro publicado oficialmente", "Officially published book") },
                    { icon: BookOpen, text: getText(language, "Obra autoral baseada em história real", "Original work based on real story") },
                    { icon: Star, text: getText(language, "Disponível na Amazon", "Available on Amazon") },
                    { icon: Award, text: getText(language, "Parte central da trajetória do autor", "Central part of the author's journey") },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-foreground/60 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

                <div className="flex items-center gap-4">
                  <img
                    src={bookCover}
                    alt={bookTitle}
                    className="w-16 h-auto rounded-lg shadow-lg"
                  />
                  <div>
                    <h3 className="font-medium text-foreground">{bookTitle}</h3>
                    <p className="text-sm text-muted-foreground">{getText(language, "por Talisson Souza", "by Talisson Souza")}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Final CTA */}
      <ParallaxSection
        className="py-24 lg:py-32"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.03] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Quote className="w-12 h-12 text-foreground/20 mx-auto mb-6" />
            </motion.div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.08]">
              {getText(
                language,
                "Transforme sua história",
                "Transform your story"
              )}
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {getText(
                language,
                "Não importa onde você está agora. O que importa é o que você decide fazer a partir deste momento. Este livro pode ser o ponto de virada que você estava procurando.",
                "It doesn't matter where you are now. What matters is what you decide to do from this moment on. This book could be the turning point you were looking for."
              )}
            </p>

            <motion.a
              href="https://www.amazon.com.br/dp/B0DKFL3MSR"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 text-sm font-medium text-background bg-foreground px-10 py-5 rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              {getText(language, "Acessar na Amazon", "Access on Amazon")}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <p className="text-xs text-muted-foreground/60 mt-6">
              {getText(
                language,
                "Versão digital disponível para leitura imediata",
                "Digital version available for immediate reading"
              )}
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Book;
