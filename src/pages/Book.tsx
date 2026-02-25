import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { ArrowUpRight, BookOpen, Heart, Lightbulb, Users, Target, Zap, Star, CheckCircle2, Clock, TrendingUp, Sparkles, User, Award, Rocket, Shield, Eye, PenTool } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import bookMockup from "@/assets/book-mockup-opt.jpg";

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

  const stats = [
    { value: "120+", label: getText(language, "Capítulos", "Chapters"), icon: BookOpen },
    { value: "1.5", label: getText(language, "Anos de Escrita", "Years of Writing"), icon: Clock },
    { value: "100%", label: getText(language, "Autoral", "Original"), icon: PenTool },
    { value: "1", label: getText(language, "Livro Publicado", "Book Published"), icon: Star },
  ];

  return (
    <Layout withPadding={false}>
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
      
      {/* Hero Section - Same pattern as About/Career/Projects */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden pt-24 pb-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Book Cover Section */}
            <div className="lg:col-span-5">
              <div className="flex flex-col items-center lg:items-start gap-8">
                <img
                  src={bookMockup}
                  alt={`${bookTitle} - ${bookSubtitle}`}
                  className="w-56 lg:w-64 h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                  <motion.a
                    href="https://www.amazon.com.br/dp/B0FXV8WP3Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full max-w-[220px] inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-full py-3 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                    }}
                  >
                    <BookOpen className="w-4 h-4" />
                    {getText(language, "Acessar na Amazon", "Access on Amazon")}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
                >
                  {getText(language, "Obra Autoral", "Original Work")}
                </motion.span>
                <AnimatedTitle variant="hero" as="h1" className="mb-4">
                  {bookTitle}
                </AnimatedTitle>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  {bookSubtitle}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {getText(
                    language,
                    "Um livro que nasce da experiência real de alguém que enfrentou rejeições, limitações físicas, portas fechadas e desconfiança constante, mas decidiu transformar cada dificuldade em força.",
                    "A book born from the real experience of someone who faced rejections, physical limitations, closed doors and constant distrust, but decided to transform each difficulty into strength."
                  )}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Same pattern as Career */}
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

      {/* About the Book - Same pattern as Career story cards */}
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
              {getText(language, "Sobre o Livro", "About the Book")}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, "Uma jornada de superação", "A journey of overcoming")}
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
                      {getText(language, "A Proposta", "The Purpose")}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.9]">
                    {getText(
                      language,
                      "A vida nem sempre é justa, e muitas vezes os obstáculos parecem impossíveis de superar. Este livro nasce da experiência real de alguém que enfrentou rejeições, limitações físicas, portas fechadas e desconfiança constante, mas decidiu transformar cada dificuldade em força.",
                      "Life isn't always fair, and often obstacles seem impossible to overcome. This book is born from the real experience of someone who faced rejections, physical limitations, closed doors and constant distrust, but decided to transform each difficulty into strength."
                    )}
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
                      <BookOpen className="w-5 h-5 text-foreground/60" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground">
                      {getText(language, "O Conteúdo", "The Content")}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.9]">
                    {getText(
                      language,
                      "Ao longo de mais de 120 capítulos, a obra aborda temas como superação, resiliência, empreendedorismo, liderança, autoconfiança e visão estratégica, oferecendo reflexões profundas e aprendizados práticos para quem deseja evoluir pessoal e profissionalmente. Não é um livro teórico. É um relato real, direto e humano.",
                      "Throughout over 120 chapters, the book addresses themes such as overcoming, resilience, entrepreneurship, leadership, self-confidence and strategic vision, offering deep reflections and practical learnings for those who want to evolve personally and professionally. It's not a theoretical book. It's a real, direct and human account."
                    )}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Why This Book - Same pattern as Career timeline section */}
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
                {getText(language, "A Origem", "The Origin")}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, "Por que este livro foi escrito", "Why this book was written")}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {getText(language, "Uma história de transformação pessoal e profissional.", "A story of personal and professional transformation.")}
              </p>
            </ScrollReveal>
            
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal delay={0.1}>
                <motion.div
                  whileHover={{ y: -3, x: 3 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-foreground/60" />
                    </div>
                    <div>
                      <span className="block text-lg font-medium text-foreground">1 {getText(language, "ano e", "year and")} 5 {getText(language, "meses", "months")}</span>
                      <span className="text-sm text-muted-foreground">{getText(language, "de escrita dedicada", "of dedicated writing")}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {getText(
                      language,
                      "Este livro foi escrito como resultado de uma trajetória marcada por desafios, rejeições e a necessidade constante de provar valor.",
                      "This book was written as a result of a trajectory marked by challenges, rejections and the constant need to prove value."
                    )}
                  </p>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{ y: -3, x: 3 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Target className="w-5 h-5 text-foreground/60" />
                    </div>
                    <div>
                      <span className="block text-lg font-medium text-foreground">{getText(language, "A Decisão", "The Decision")}</span>
                      <span className="text-sm text-muted-foreground">{getText(language, "Criar o próprio caminho", "Create your own path")}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {getText(
                      language,
                      "Desde cedo, o autor enfrentou não apenas limitações físicas, mas também o preconceito e a falta de oportunidades. Em vez de desistir, decidiu criar o próprio caminho: fundou sua empresa e seguiu firme como programador.",
                      "From an early age, the author faced not only physical limitations, but also prejudice and lack of opportunities. Instead of giving up, he decided to create his own path: founded his company and continued steadfast as a programmer."
                    )}
                  </p>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ y: -3, x: 3 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <PenTool className="w-5 h-5 text-foreground/60" />
                    </div>
                    <div>
                      <span className="block text-lg font-medium text-foreground">{getText(language, "O Propósito", "The Purpose")}</span>
                      <span className="text-sm text-muted-foreground">{getText(language, "Compartilhar aprendizados", "Share learnings")}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {getText(
                      language,
                      "A escrita deste livro foi uma forma de organizar aprendizados, registrar vivências reais e compartilhar uma mensagem clara: é possível vencer, mesmo quando o cenário é desfavorável.",
                      "Writing this book was a way to organize learnings, record real experiences and share a clear message: it's possible to win, even when the scenario is unfavorable."
                    )}
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* What You Will Find */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.08}
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
              {getText(language, "Conteúdo", "Content")}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, "O que você vai encontrar", "What you will find")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {whatYouWillFind.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -3, x: 3 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Themes Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-card/20 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
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
              {getText(language, "Temas Abordados", "Themes Covered")}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, "Principais temas do livro", "Main themes of the book")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 group"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border/30 text-foreground/70 mb-4 group-hover:border-foreground/20 transition-colors duration-300">
                    <theme.icon className="w-5 h-5 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-2">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground/70">{theme.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Target Audience */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
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
                {getText(language, "Público", "Audience")}
              </motion.span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, "Para quem este livro foi escrito", "Who this book was written for")}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {getText(language, "Se você se identifica com algum desses perfis, este livro foi feito pensando em você.", "If you identify with any of these profiles, this book was made with you in mind.")}
              </p>
            </ScrollReveal>
            
            <div className="lg:col-span-7 space-y-4">
              {targetAudience.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -2, x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Impact Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-card/20 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
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
              {getText(language, "Impacto", "Impact")}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, "O que o livro busca gerar", "What the book aims to generate")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {impact.map((item, index) => (
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
                    <item.icon className="w-5 h-5 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground/70">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Publication Status & CTA */}
      <ParallaxSection 
        className="py-20 lg:py-28"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, "Publicação", "Publication")}
              </motion.span>
              
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
                {getText(language, "Disponível na Amazon", "Available on Amazon")}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {getText(
                  language,
                  "Livro publicado oficialmente. Obra autoral baseada em história real, disponível para leitura em formato digital. Parte central da trajetória do autor.",
                  "Officially published book. Original work based on a true story, available for reading in digital format. Central part of the author's trajectory."
                )}
              </p>

              <motion.a
                href="https://www.amazon.com.br/dp/B0FXV8WP3Y"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 text-sm font-medium text-background bg-foreground px-8 py-4 rounded-full transition-all duration-300"
                style={{
                  boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                }}
              >
                <BookOpen className="w-4 h-4" />
                {getText(language, "Conhecer o Livro na Amazon", "Discover the Book on Amazon")}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Book;
