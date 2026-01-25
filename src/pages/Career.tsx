import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import CompanyCard from "@/components/ui/CompanyCard";
import { 
  Rocket, Target, Heart, Users, Lightbulb, Shield, 
  Award, Calendar, Building2, Briefcase, Quote, Sparkles, 
  HandHeart, ArrowRight, ArrowUpRight, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const Career = () => {
  const { language } = useTheme();

  const content = {
    pt: {
      title: "Minha Carreira",
      subtitle: "Transformando desafios em oportunidades",
      myStory: "Minha História e Propósito",
      myJourney: "Minha Jornada no Mundo Tech",
      whyCompany: "Por que decidi criar minha própria empresa aos 17 anos?",
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

Assim nasceu a Cheetah Network. Mais do que uma empresa, ela representa a transformação de uma dor em propósito. Um lugar onde competência e inclusão caminham juntas, e onde cada pessoa pode mostrar seu valor, independente de barreiras.`;

  const whyCompanyEn = `In 2021, I participated in a selection process for a Young Apprentice position. I went through all stages with dedication and confidence: interview, medical exams, preparation. The position was to work with computers my passion since early age.

However, at the end of the process, I was rejected. Not for lack of qualification. Not for lack of ability. But because of my wheelchair.

It was a shock. I felt sadness, frustration and even anger. I knew I could perform the job excellently, but I was judged by something that doesn't define my potential.

At that moment, I understood that no matter how much we prepare, there is still a lot of prejudice and lack of inclusion in many places. Often, we are seen only by appearance, not by what we are really capable of doing. So, I made a decision: if they wouldn't give me space, I would create my own space.

Thus Cheetah Network was born. More than a company, it represents the transformation of pain into purpose. A place where competence and inclusion walk together, and where each person can show their value, regardless of barriers.`;

  const stats = [
    { icon: Award, label: getText(language, "Projetos Entregues", "Projects Delivered"), value: "50+" },
    { icon: Building2, label: getText(language, "Empresas Fundadas", "Companies Founded"), value: "2" },
    { icon: Star, label: getText(language, "Satisfação", "Satisfaction"), value: "100%" },
    { icon: Calendar, label: getText(language, "Anos de Experiência", "Years of Experience"), value: "8+" }
  ];

  const timelineEvents = [
    { year: "2018", title: getText(language, "Início da Jornada", "Journey Begins"), description: getText(language, "Aos 14 anos, criei meus primeiros bots para Discord", "At 14, I created my first Discord bots"), icon: Rocket },
    { year: "2021", title: getText(language, "Momento Decisivo", "Decisive Moment"), description: getText(language, "Experiência discriminatória que motivou a criação da própria empresa", "Discriminatory experience that motivated the creation of my own company"), icon: Target },
    { year: "2023", title: getText(language, "Fundação da Cheetah Network", "Cheetah Network Founded"), description: getText(language, "Criação da empresa focada em inclusão e soluções digitais", "Company created focused on inclusion and digital solutions"), icon: Building2 },
    { year: "2024", title: getText(language, "Diretor Estratégico", "Strategic Director"), description: getText(language, "Assumo nova posição estratégica em consultoria empresarial no Werneck Group", "Taking on new strategic position in business consulting at Werneck Group"), icon: Briefcase },
    { year: "2024", title: getText(language, "Parcerias e Atuações", "Partnerships and Activities"), description: getText(language, "Parceiro Square Cloud e Influencer Rocketseat", "Square Cloud Partner and Rocketseat Influencer"), icon: HandHeart }
  ];

  const testimonials = [
    {
      name: "Priscila Suanne",
      role: language === 'pt' ? "Desenvolvedora Back End na Cheetah Network" : "Back End Developer at Cheetah Network",
      text: language === 'pt' 
        ? "Tive o prazer de conhecer e trabalhar com Thalisson, um profissional extremamente comprometido, resiliente e dedicado em tudo o que faz. Sua postura ética, foco em resultados e capacidade de adaptação foram fundamentais para o sucesso dos projetos em que atuamos juntos."
        : "I had the pleasure of meeting and working with Thalisson, an extremely committed, resilient and dedicated professional in everything he does. His ethical stance, focus on results and adaptability were fundamental to the success of the projects we worked on together.",
      image: "https://i.ibb.co/zWp10rhx/Priscila.jpg"
    },
    {
      name: "Camile Vitória Barros",
      role: language === 'pt' ? "Assistente de Suporte Administrativo" : "Administrative Support Assistant",
      text: language === 'pt' 
        ? "Recomendo os serviços de Talisson, pois acompanho de perto seu comprometimento, seriedade e dedicação em cada projeto. Seu trabalho é marcado pela qualidade e foco em entregar sempre os melhores resultados."
        : "I recommend Talisson's services, as I closely follow his commitment, seriousness and dedication in each project. His work is marked by quality and focus on always delivering the best results.",
      image: "https://i.ibb.co/nN5LJhpk/Camile.jpg"
    },
    {
      name: "Matheus Yuri Silva",
      role: language === 'pt' ? "Desenvolvedor de Software" : "Software Developer",
      text: language === 'pt' 
        ? "É uma honra poder acompanhar o trabalho do Talisson. Ele demonstra uma combinação rara de expertise em desenvolvimento full stack e uma visão de negócios afiada. Suas soluções são sempre criativas, eficientes e focadas no impacto real."
        : "It is an honor to follow Talisson's work. He demonstrates a rare combination of full stack development expertise and sharp business vision. His solutions are always creative, efficient and focused on real impact.",
      image: "https://i.ibb.co/V0P35B23/Matheus.jpg"
    }
  ];

  const values = [
    { icon: Heart, title: language === 'pt' ? "Empatia" : "Empathy", description: language === 'pt' ? "Colocar-se no lugar do outro e criar soluções humanas" : "Putting yourself in others' shoes and creating human solutions" },
    { icon: Lightbulb, title: language === 'pt' ? "Inovação" : "Innovation", description: language === 'pt' ? "Buscar constantemente novas formas de resolver problemas" : "Constantly seeking new ways to solve problems" },
    { icon: Shield, title: language === 'pt' ? "Transparência" : "Transparency", description: language === 'pt' ? "Honestidade e clareza em todas as relações" : "Honesty and clarity in all relationships" },
    { icon: Users, title: language === 'pt' ? "Inclusão" : "Inclusion", description: language === 'pt' ? "Criar oportunidades para todos, sem barreiras" : "Create opportunities for everyone, without barriers" }
  ];

  const quotes = [
    language === 'pt' ? '"A verdadeira inovação nasce quando quebramos barreiras, não quando as aceitamos."' : '"True innovation is born when we break barriers, not when we accept them."',
    language === 'pt' ? '"Tecnologia é a ferramenta, mas o propósito é humano."' : '"Technology is the tool, but the purpose is human."',
    language === 'pt' ? '"Não espere pela oportunidade perfeita. Crie ela."' : '"Don\'t wait for the perfect opportunity. Create it."'
  ];

  const partnerships = [
    { name: "Tech Leaders Network", description: language === 'pt' ? "Fundador da comunidade exclusiva para empreendedores e programadores" : "Founder of exclusive community for entrepreneurs and programmers", logo: "https://i.ibb.co/M5jS68gD/93afd9c07484ebe558d11e4b95c6d976.png", banner: "https://i.ibb.co/Zzn1NtJ1/Tech-Leaders.jpg", link: "https://discord.gg/edZWXqcxuF", badge: language === 'pt' ? 'Fundador' : 'Founder' },
    { name: "Rocketseat", description: language === 'pt' ? "Influenciador oficial da maior comunidade de desenvolvedores do Brasil" : "Official influencer at the largest developer community in Brazil", logo: "https://i.ibb.co/jvVR1DzD/rocketseat-logo.jpg", banner: "https://i.ibb.co/5hR5T77f/banner-rocketseat.webp", link: "https://www.rocketseat.com.br/oferta/influencer/v2/talinho", badge: "Influencer" },
    { name: "Square Cloud", description: language === 'pt' ? "Parceiro da maior empresa de hospedagem para bots da América Latina" : "Partner of the largest bot hosting company in Latin America", logo: "https://squarecloud.app/favicon.ico", banner: "https://i.ibb.co/7xPkwhZy/Square-Cloud.png", link: "https://squarecloud.app", badge: language === 'pt' ? 'Parceiro' : 'Partner' }
  ];

  const companies = [
    { name: "Cheetah Network", description: language === 'pt' ? "Soluções digitais especializadas em desenvolvimento de bots, aplicações web." : "Digital solutions specialized in bot development and web applications.", logo: "https://i.ibb.co/0yQ0mnD6/bannercheetah2.png", skills: language === 'pt' ? ["Liderança como CEO", "Gestão de projetos", "Desenvolvimento de talentos"] : ["CEO leadership", "Project management", "Talent development"] },
    { name: "Werneck Group", description: language === 'pt' ? "Consultoria estratégica especializada em transformação digital." : "Strategic consulting specialized in digital transformation.", logo: "https://i.ibb.co/YT7LK7Vc/bannerwerneck.jpg", skills: language === 'pt' ? ["Direção estratégica", "Gestão financeira", "Coordenação de operações"] : ["Strategic direction", "Financial management", "Operations coordination"] }
  ];

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
                {tt.title}
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-[1.1]">
                {tt.subtitle}
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Stats */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-5 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/30 text-foreground/70 mb-3">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-1">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.myStory}</h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            <ScrollReveal>
              <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
                <h3 className="text-base font-medium text-foreground mb-4 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-foreground/60" />
                  {tt.myJourney}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {language === 'pt' ? storyPt : storyEn}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8">
                <h3 className="text-base font-medium text-foreground mb-4 flex items-center gap-3">
                  <Target className="w-5 h-5 text-foreground/60" />
                  {tt.whyCompany}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {language === 'pt' ? whyCompanyPt : whyCompanyEn}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.timeline}</h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.companies}</h2>
          </ScrollReveal>
          
          <div className="space-y-4">
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
      </section>

      {/* Partnerships */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{tt.partnerships}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a
                  href={partnership.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="block h-full group"
                >
                  <div className="relative h-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={partnership.banner} 
                        alt={partnership.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <img 
                          src={partnership.logo} 
                          alt={partnership.name}
                          className="w-10 h-10 rounded-lg"
                        />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">{partnership.name}</h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-border/30 bg-background/80 text-foreground/70">
                            {partnership.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {partnership.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">
                          {language === 'pt' ? 'Saiba mais' : 'Learn more'}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8 text-center">{tt.values}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border/30 text-foreground/60 mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8 text-center">{tt.quotes}</h2>
          </ScrollReveal>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {quotes.map((quote, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-foreground/40 flex-shrink-0" />
                    <p className="text-base font-serif text-foreground/90 italic">{quote}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8 text-center">{tt.testimonials}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-border/30"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{testimonial.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8 text-center">{tt.inclusion}</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8 lg:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0">
                  <HandHeart className="w-8 h-8 text-foreground/60" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-serif text-foreground mb-3">
                    {language === 'pt' ? 'Comprometido com a Diversidade' : 'Committed to Diversity'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'pt' 
                      ? 'A minha história me ensinou que inclusão não é apenas uma palavra, mas uma prática diária. Como pessoa com deficiência, sei na pele os desafios que muitos enfrentam. Por isso, me comprometo a criar ambientes onde todas as pessoas possam crescer, aprender e contribuir.'
                      : 'My story taught me that inclusion is not just a word, but a daily practice. As a person with a disability, I know firsthand the challenges many face. That\'s why I\'m committed to creating environments where all people can grow, learn, and contribute.'}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                {tt.cta}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {getText(language, 'Tem um projeto em mente? Vamos conversar sobre como posso ajudar.', "Have a project in mind? Let's talk about how I can help.")}
              </p>
              <a 
                href="https://wa.me/5581993964261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground px-8 py-3.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 hover:border-foreground/40 transition-all duration-300"
              >
                {getText(language, 'Iniciar conversa', 'Start conversation')}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
