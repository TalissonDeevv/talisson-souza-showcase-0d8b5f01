import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { 
  Code, Database, Cloud, Shield, Zap,
  CheckCircle, X, ArrowRight, ArrowUpRight, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const TechDecisions = () => {
  const { language } = useTheme();

  const decisions = [
    {
      id: "react-vs-next",
      title: getText(language, "Por que React e não Next.js em alguns projetos", "Why React and not Next.js in some projects"),
      context: getText(language, 
        "Em projetos onde SEO não é crítico e a aplicação é predominantemente client-side (dashboards, painéis administrativos), React puro com Vite oferece DX superior.",
        "In projects where SEO is not critical and the application is predominantly client-side (dashboards, admin panels), pure React with Vite offers superior DX."
      ),
      pros: [
        getText(language, "Build mais rápido com Vite", "Faster build with Vite"),
        getText(language, "Menos complexidade de deploy", "Less deploy complexity"),
        getText(language, "Hot reload instantâneo", "Instant hot reload"),
        getText(language, "Menor curva de aprendizado do time", "Lower team learning curve")
      ],
      cons: [
        getText(language, "SEO limitado (resolvível com prerender)", "Limited SEO (solvable with prerender)"),
        getText(language, "Sem SSR nativo", "No native SSR")
      ],
      when: getText(language, "Use quando: Dashboard, SaaS interno, aplicações autenticadas", "Use when: Dashboard, internal SaaS, authenticated apps"),
      icon: Code
    },
    {
      id: "postgres-vs-mongo",
      title: getText(language, "PostgreSQL como escolha padrão", "PostgreSQL as default choice"),
      context: getText(language, 
        "MongoDB tem seus casos de uso, mas PostgreSQL com JSONB cobre 95% dos cenários com mais garantias de consistência e ferramentas maduras.",
        "MongoDB has its use cases, but PostgreSQL with JSONB covers 95% of scenarios with more consistency guarantees and mature tools."
      ),
      pros: [
        getText(language, "ACID compliant nativo", "Native ACID compliant"),
        getText(language, "JSONB para dados flexíveis", "JSONB for flexible data"),
        getText(language, "Ecossistema maduro (Supabase, etc)", "Mature ecosystem (Supabase, etc)"),
        getText(language, "Melhor para queries complexas", "Better for complex queries")
      ],
      cons: [
        getText(language, "Mais setup inicial que MongoDB", "More initial setup than MongoDB"),
        getText(language, "Scaling horizontal mais complexo", "More complex horizontal scaling")
      ],
      when: getText(language, "Use quando: Qualquer projeto que precise de consistência de dados", "Use when: Any project that needs data consistency"),
      icon: Database
    },
    {
      id: "supabase-vs-firebase",
      title: getText(language, "Supabase em vez de Firebase", "Supabase instead of Firebase"),
      context: getText(language, 
        "Firebase é ótimo para prototipagem, mas Supabase oferece PostgreSQL real, RLS nativo e sem vendor lock-in agressivo.",
        "Firebase is great for prototyping, but Supabase offers real PostgreSQL, native RLS and without aggressive vendor lock-in."
      ),
      pros: [
        getText(language, "PostgreSQL real com todas as features", "Real PostgreSQL with all features"),
        getText(language, "RLS para segurança granular", "RLS for granular security"),
        getText(language, "Open source e self-hostable", "Open source and self-hostable"),
        getText(language, "Preço mais previsível", "More predictable pricing")
      ],
      cons: [
        getText(language, "Menos integrações prontas que Firebase", "Fewer ready integrations than Firebase"),
        getText(language, "Comunidade menor (crescendo rápido)", "Smaller community (growing fast)")
      ],
      when: getText(language, "Use quando: Projetos que valorizam controle e portabilidade", "Use when: Projects that value control and portability"),
      icon: Cloud
    },
    {
      id: "tailwind-vs-styled",
      title: getText(language, "Tailwind CSS como padrão", "Tailwind CSS as standard"),
      context: getText(language, 
        "Styled-components tem seu lugar, mas Tailwind com design tokens oferece consistência superior e bundles menores em produção.",
        "Styled-components has its place, but Tailwind with design tokens offers superior consistency and smaller bundles in production."
      ),
      pros: [
        getText(language, "Bundles menores (purge automático)", "Smaller bundles (automatic purge)"),
        getText(language, "Consistência via design tokens", "Consistency via design tokens"),
        getText(language, "DX excelente com autocomplete", "Excellent DX with autocomplete"),
        getText(language, "Mais fácil de manter em equipe", "Easier to maintain in a team")
      ],
      cons: [
        getText(language, "HTML mais verboso", "More verbose HTML"),
        getText(language, "Curva inicial para quem vem de CSS tradicional", "Initial curve for those from traditional CSS")
      ],
      when: getText(language, "Use quando: Qualquer projeto novo (exceto design systems complexos)", "Use when: Any new project (except complex design systems)"),
      icon: Zap
    },
    {
      id: "typescript-always",
      title: getText(language, "TypeScript sempre, sem exceção", "TypeScript always, no exception"),
      context: getText(language, 
        "O custo inicial de configurar TypeScript é mínimo. O retorno em manutenibilidade, refatoração segura e DX é imenso.",
        "The initial cost of setting up TypeScript is minimal. The return in maintainability, safe refactoring and DX is immense."
      ),
      pros: [
        getText(language, "Erros capturados em compile time", "Errors caught at compile time"),
        getText(language, "Refatoração segura e rápida", "Safe and fast refactoring"),
        getText(language, "Documentação implícita via tipos", "Implicit documentation via types"),
        getText(language, "Melhor autocomplete e DX", "Better autocomplete and DX")
      ],
      cons: [
        getText(language, "Verbosidade inicial (diminui com prática)", "Initial verbosity (decreases with practice)"),
        getText(language, "Algumas libs com tipagem ruim", "Some libs with poor typing")
      ],
      when: getText(language, "Use quando: Sempre. Não há justificativa para JS puro em 2024+", "Use when: Always. No justification for pure JS in 2024+"),
      icon: Shield
    }
  ];

  const antiPatterns = [
    {
      title: getText(language, "Over-engineering prematuro", "Premature over-engineering"),
      description: getText(language, 
        "Microserviços para um MVP? Kubernetes para 100 usuários? Event sourcing para um CRUD? Não.",
        "Microservices for an MVP? Kubernetes for 100 users? Event sourcing for a CRUD? No."
      )
    },
    {
      title: getText(language, "Hype-driven development", "Hype-driven development"),
      description: getText(language, 
        "Escolher tecnologia porque é nova e não porque resolve o problema. Boring tech wins.",
        "Choosing technology because it's new and not because it solves the problem. Boring tech wins."
      )
    },
    {
      title: getText(language, "Ignorar manutenção futura", "Ignoring future maintenance"),
      description: getText(language, 
        "Código entregue é código que alguém vai manter. Se você não documentar, você vai odiar você mesmo.",
        "Delivered code is code someone will maintain. If you don't document, you'll hate yourself."
      )
    },
    {
      title: getText(language, "Otimização prematura", "Premature optimization"),
      description: getText(language, 
        "Make it work, make it right, make it fast. Nessa ordem. Não otimize o que você não mediu.",
        "Make it work, make it right, make it fast. In that order. Don't optimize what you haven't measured."
      )
    }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title="Decisões Técnicas | Stack e Trade-offs"
        description="Reflexões sobre escolhas de stack, trade-offs reais e erros que evito em projetos. Conteúdo técnico para desenvolvedores e arquitetos."
        canonical="/decisoes-tecnicas"
        keywords={['decisões técnicas', 'arquitetura', 'stack', 'trade-offs', 'desenvolvimento']}
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
                {getText(language, 'Arquitetura', 'Architecture')}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {getText(language, 'Decisões Técnicas', 'Technical Decisions')}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {getText(language, 
                  'Reflexões sobre escolhas de stack, trade-offs que considero e erros que aprendi a evitar ao longo dos anos.',
                  'Reflections on stack choices, trade-offs I consider and mistakes I learned to avoid over the years.'
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Decisions */}
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
              {getText(language, 'Stack', 'Stack')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {getText(language, 'Por que escolho o que escolho', 'Why I choose what I choose')}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {getText(language, 
                'Cada tecnologia tem seu contexto ideal. Aqui está meu raciocínio para as escolhas mais comuns.',
                'Each technology has its ideal context. Here is my reasoning for the most common choices.'
              )}
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {decisions.map((decision, index) => (
              <ScrollReveal key={decision.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group overflow-hidden"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300 flex-shrink-0">
                          <decision.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-2 leading-tight">
                            {decision.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {decision.context}
                          </p>
                        </div>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-3 font-medium">
                            {getText(language, 'Vantagens', 'Advantages')}
                          </h4>
                          <ul className="space-y-2">
                            {decision.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-green-500/70 mt-0.5 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-3 font-medium">
                            {getText(language, 'Trade-offs', 'Trade-offs')}
                          </h4>
                          <ul className="space-y-2">
                            {decision.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <X className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* When to use */}
                      <div className="p-4 rounded-xl bg-foreground/[0.03] border border-border/20">
                        <p className="text-sm text-foreground/80">
                          <span className="font-medium">{decision.when}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Anti-patterns */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
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
              {getText(language, 'Anti-padrões', 'Anti-patterns')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Erros que evito', 'Mistakes I avoid')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {antiPatterns.map((pattern, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-center mb-6">
                      <Lightbulb className="w-5 h-5 text-amber-500/70" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">
                      {pattern.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pattern.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <section className="py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-background to-background" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                {getText(language, 'Quer discutir arquitetura?', 'Want to discuss architecture?')}
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                {getText(language, 
                  'Se você tem um projeto e quer entender as melhores escolhas técnicas para o seu contexto, vamos conversar.',
                  "If you have a project and want to understand the best technical choices for your context, let's talk."
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://wa.me/5581993964261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Solicitar consultoria', 'Request consulting')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <Link 
                  to="/como-trabalho"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <span>{getText(language, 'Ver meu processo', 'See my process')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default TechDecisions;
