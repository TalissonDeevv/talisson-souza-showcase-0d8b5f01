import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { 
  MessageSquare, Search, FileCode, TestTube, Rocket, 
  Shield, Clock, AlertTriangle, CheckCircle, ArrowRight,
  Lightbulb, Target, ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const HowIWork = () => {
  const { language } = useTheme();

  const processSteps = [
    {
      number: "01",
      icon: MessageSquare,
      title: getText(language, "Descoberta e Alinhamento", "Discovery & Alignment"),
      description: getText(language, 
        "Começo entendendo profundamente o problema. Não é sobre tecnologia ainda, é sobre negócio.",
        "I start by deeply understanding the problem. It's not about technology yet, it's about business."
      ),
      details: [
        getText(language, "Reunião inicial para entender objetivos", "Initial meeting to understand goals"),
        getText(language, "Mapeamento de stakeholders e expectativas", "Stakeholder and expectation mapping"),
        getText(language, "Identificação de restrições e riscos", "Identification of constraints and risks"),
        getText(language, "Definição de métricas de sucesso", "Definition of success metrics")
      ]
    },
    {
      number: "02",
      icon: Search,
      title: getText(language, "Validação de Escopo", "Scope Validation"),
      description: getText(language, 
        "Antes de escrever código, valido o escopo com documentação clara. Menos surpresas, mais resultado.",
        "Before writing code, I validate the scope with clear documentation. Less surprises, more results."
      ),
      details: [
        getText(language, "Documento de requisitos detalhado", "Detailed requirements document"),
        getText(language, "Wireframes e protótipos quando necessário", "Wireframes and prototypes when needed"),
        getText(language, "Estimativa de esforço por funcionalidade", "Effort estimation by feature"),
        getText(language, "Aprovação formal antes de iniciar", "Formal approval before starting")
      ]
    },
    {
      number: "03",
      icon: FileCode,
      title: getText(language, "Arquitetura e Decisões Técnicas", "Architecture & Technical Decisions"),
      description: getText(language, 
        "Cada escolha técnica é justificada. Documento trade-offs e decido com base em dados, não hype.",
        "Every technical choice is justified. I document trade-offs and decide based on data, not hype."
      ),
      details: [
        getText(language, "Escolha de stack baseada no contexto", "Stack choice based on context"),
        getText(language, "Documentação de decisões arquiteturais", "Architectural decision documentation"),
        getText(language, "Análise de escalabilidade e manutenção", "Scalability and maintenance analysis"),
        getText(language, "Plano de contingência para riscos", "Contingency plan for risks")
      ]
    },
    {
      number: "04",
      icon: TestTube,
      title: getText(language, "Desenvolvimento Iterativo", "Iterative Development"),
      description: getText(language, 
        "Entrego em ciclos curtos com validação constante. Você vê progresso real, não promessas.",
        "I deliver in short cycles with constant validation. You see real progress, not promises."
      ),
      details: [
        getText(language, "Sprints semanais ou quinzenais", "Weekly or bi-weekly sprints"),
        getText(language, "Demos regulares do progresso", "Regular progress demos"),
        getText(language, "Feedback incorporado rapidamente", "Feedback incorporated quickly"),
        getText(language, "Código limpo e bem documentado", "Clean and well-documented code")
      ]
    },
    {
      number: "05",
      icon: Rocket,
      title: getText(language, "Entrega e Acompanhamento", "Delivery & Follow-up"),
      description: getText(language, 
        "Projeto entregue não é projeto abandonado. Acompanho a estabilização e garanto a transição.",
        "Delivered project is not abandoned project. I follow stabilization and ensure transition."
      ),
      details: [
        getText(language, "Deploy assistido em produção", "Assisted production deployment"),
        getText(language, "Documentação técnica completa", "Complete technical documentation"),
        getText(language, "Treinamento da equipe quando necessário", "Team training when necessary"),
        getText(language, "Período de suporte pós-entrega", "Post-delivery support period")
      ]
    }
  ];

  const principles = [
    {
      icon: Shield,
      title: getText(language, "Transparência Total", "Full Transparency"),
      description: getText(language, 
        "Você sabe exatamente o que está acontecendo. Problemas são comunicados antes de virarem crises.",
        "You know exactly what's happening. Problems are communicated before they become crises."
      )
    },
    {
      icon: Clock,
      title: getText(language, "Prazos Realistas", "Realistic Deadlines"),
      description: getText(language, 
        "Prefiro dizer não a prometer o impossível. Estimativas incluem margem para imprevistos.",
        "I prefer to say no than promise the impossible. Estimates include margin for unforeseen events."
      )
    },
    {
      icon: AlertTriangle,
      title: getText(language, "Gestão de Riscos", "Risk Management"),
      description: getText(language, 
        "Identifico riscos no início e crio planos de mitigação. Menos incêndios, mais previsibilidade.",
        "I identify risks early and create mitigation plans. Less fires, more predictability."
      )
    },
    {
      icon: Lightbulb,
      title: getText(language, "Foco no Resultado", "Result Focus"),
      description: getText(language, 
        "Tecnologia é meio, não fim. Cada decisão visa resolver o problema do negócio, não impressionar.",
        "Technology is a means, not an end. Every decision aims to solve the business problem, not impress."
      )
    }
  ];

  const decisionCriteria = [
    {
      title: getText(language, "Quando eu aceito um projeto", "When I accept a project"),
      items: [
        getText(language, "Problema claro e bem definido", "Clear and well-defined problem"),
        getText(language, "Expectativas realistas de prazo", "Realistic timeline expectations"),
        getText(language, "Orçamento compatível com o escopo", "Budget compatible with scope"),
        getText(language, "Comunicação direta com decisores", "Direct communication with decision-makers")
      ],
      positive: true
    },
    {
      title: getText(language, "Quando eu recuso", "When I decline"),
      items: [
        getText(language, "Escopo indefinido ou muito volátil", "Undefined or too volatile scope"),
        getText(language, "Prazos impossíveis desde o início", "Impossible deadlines from the start"),
        getText(language, "Falta de comprometimento do cliente", "Lack of client commitment"),
        getText(language, "Projeto que não posso entregar com qualidade", "Project I can't deliver with quality")
      ],
      positive: false
    }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title="Como Trabalho | Processo e Metodologia"
        description="Conheça meu processo de trabalho: como inicio projetos, valido escopo, tomo decisões técnicas e gerencio riscos para entregar resultados consistentes."
        canonical="/como-trabalho"
        keywords={['processo', 'metodologia', 'gestão de projetos', 'desenvolvimento', 'consultoria']}
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
                {getText(language, 'Metodologia', 'Methodology')}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {getText(language, 'Como eu trabalho', 'How I work')}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {getText(language, 
                  'Mais do que código, entrego processos. Cada projeto segue uma metodologia clara que garante previsibilidade e resultado.',
                  'More than code, I deliver processes. Each project follows a clear methodology that ensures predictability and results.'
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Steps */}
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
              {getText(language, 'Processo', 'Process')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
              {getText(language, 'Do briefing à entrega', 'From briefing to delivery')}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
              {getText(language, 
                'Um processo estruturado em 5 etapas que garante clareza, qualidade e resultado em cada projeto.',
                'A structured 5-step process that ensures clarity, quality and results in each project.'
              )}
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
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
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative">
                      {/* Number and Icon */}
                      <div className="lg:col-span-2 flex items-start gap-4">
                        <span className="text-5xl lg:text-6xl font-serif text-foreground/[0.08] group-hover:text-foreground/15 transition-colors duration-500">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                          <step.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-5">
                        <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="lg:col-span-5">
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-foreground/40 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Principles */}
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
              {getText(language, 'Princípios', 'Principles')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Como eu penso', 'How I think')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
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
                    <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center mb-6 group-hover:border-foreground/20 transition-colors duration-300">
                      <principle.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Decision Criteria */}
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
              {getText(language, 'Critérios', 'Criteria')}
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-[1.05]">
              {getText(language, 'Como decido participar', 'How I decide to participate')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decisionCriteria.map((criteria, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="h-full p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <h3 className="font-serif text-xl text-foreground mb-6 leading-tight">
                      {criteria.title}
                    </h3>
                    <ul className="space-y-3">
                      {criteria.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          {criteria.positive ? (
                            <CheckCircle className="w-4 h-4 text-green-500/70 mt-0.5 flex-shrink-0" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                  <Target className="w-8 h-8 text-foreground/60" />
                </div>
                
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
                >
                  {getText(language, 'Próximo passo', 'Next step')}
                </motion.span>
                
                <h2 className="font-serif text-2xl lg:text-4xl text-foreground mb-6 leading-tight">
                  {getText(language, 'Vamos analisar seu projeto?', "Let's analyze your project?")}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Agende uma conversa para discutirmos viabilidade técnica, escopo e expectativas.',
                    "Schedule a conversation to discuss technical feasibility, scope and expectations."
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
                    {getText(language, 'Solicitar diagnóstico', 'Request diagnosis')}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  
                  <Link 
                    to="/servicos"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <span>{getText(language, 'Ver serviços', 'View services')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default HowIWork;
