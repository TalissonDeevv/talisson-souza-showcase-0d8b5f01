import { 
  MessageSquare, Search, FileCode, TestTube, Rocket, 
  Shield, Clock, AlertTriangle, CheckCircle, Lightbulb, 
  Target, Compass, Layers, Lock, Eye, FileCheck,
  GitBranch, Database, Wrench, Scale, Handshake,
  BarChart3, ShieldCheck, BookOpen, Gem
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Lang = "pt" | "en";

interface TextPair {
  pt: string;
  en: string;
}

interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: TextPair;
  description: TextPair;
  details: TextPair[];
}

interface PrincipleCard {
  icon: LucideIcon;
  title: TextPair;
  description: TextPair;
}

interface CriteriaGroup {
  title: TextPair;
  items: TextPair[];
  positive: boolean;
}

interface PolicyItem {
  icon: LucideIcon;
  title: TextPair;
  description: TextPair;
}

// ─── 1. HERO (Introdução forte) ─────────────────────────────────
export const heroContent = {
  label: { pt: "Metodologia", en: "Methodology" },
  title: { pt: "Como eu trabalho", en: "How I work" },
  description: {
    pt: "Meu trabalho vai além de escrever código. Envolve processo, responsabilidade técnica e compromisso com qualidade em cada decisão. Aqui você entende como conduzo projetos. do diagnóstico à entrega. com método, previsibilidade e transparência.",
    en: "My work goes beyond writing code. It involves process, technical responsibility and a commitment to quality in every decision. Here you'll understand how I manage projects. from diagnosis to delivery. with method, predictability and transparency."
  }
};

// ─── 2. FILOSOFIA DE TRABALHO ────────────────────────────────────
export const philosophyContent = {
  label: { pt: "Filosofia", en: "Philosophy" },
  title: { pt: "O que orienta minhas decisões", en: "What guides my decisions" },
  subtitle: {
    pt: "Antes de qualquer linha de código, existem princípios. Eles definem como penso, como priorizo e como entrego.",
    en: "Before any line of code, there are principles. They define how I think, how I prioritize and how I deliver."
  },
  cards: [
    {
      icon: Eye,
      title: { pt: "Clareza antes de execução", en: "Clarity before execution" },
      description: {
        pt: "Nenhum projeto começa sem entendimento claro do problema. Investir tempo no diagnóstico evita retrabalho, decisões erradas e desperdício de recursos. Perguntas difíceis no início poupam meses de frustração depois.",
        en: "No project starts without a clear understanding of the problem. Investing time in diagnosis avoids rework, wrong decisions and wasted resources. Hard questions early save months of frustration later."
      }
    },
    {
      icon: Compass,
      title: { pt: "Processo antes de velocidade", en: "Process before speed" },
      description: {
        pt: "Velocidade sem direção é desperdício. Trabalho com método estruturado porque previsibilidade é mais valiosa que pressa. Cada etapa existe por uma razão. e pular etapas cria dívida técnica que alguém vai pagar.",
        en: "Speed without direction is waste. I work with a structured method because predictability is more valuable than rush. Each step exists for a reason. and skipping steps creates technical debt someone will pay."
      }
    },
    {
      icon: Layers,
      title: { pt: "Sustentabilidade antes de improviso", en: "Sustainability before improvisation" },
      description: {
        pt: "Código que funciona hoje mas não se mantém amanhã não é solução. é problema adiado. Penso em arquitetura, manutenibilidade e escalabilidade desde o primeiro dia, porque projetos precisam sobreviver além da entrega.",
        en: "Code that works today but can't be maintained tomorrow isn't a solution. it's a deferred problem. I think about architecture, maintainability and scalability from day one, because projects need to survive beyond delivery."
      }
    },
    {
      icon: ShieldCheck,
      title: { pt: "Responsabilidade técnica", en: "Technical responsibility" },
      description: {
        pt: "Cada decisão técnica tem consequências. Não escolho ferramentas por hype, não ignoro riscos por conveniência e não entrego sabendo que algo vai quebrar. Responsabilidade técnica é inegociável.",
        en: "Every technical decision has consequences. I don't choose tools by hype, I don't ignore risks for convenience and I don't deliver knowing something will break. Technical responsibility is non-negotiable."
      }
    }
  ] as PrincipleCard[]
};

// ─── 3. PROCESSO ESTRUTURADO ─────────────────────────────────────
export const processContent = {
  label: { pt: "Processo", en: "Process" },
  title: { pt: "Do diagnóstico à entrega", en: "From diagnosis to delivery" },
  subtitle: {
    pt: "Um processo estruturado em 6 etapas que garante previsibilidade, qualidade e resultado em cada projeto. Nada é improvisado.",
    en: "A structured 6-step process that ensures predictability, quality and results in each project. Nothing is improvised."
  },
  steps: [
    {
      number: "01",
      icon: MessageSquare,
      title: { pt: "Diagnóstico Técnico", en: "Technical Diagnosis" },
      description: {
        pt: "Antes de propor soluções, entendo o problema. Analiso contexto de negócio, restrições técnicas e expectativas reais. Essa etapa define se o projeto é viável e qual a melhor abordagem.",
        en: "Before proposing solutions, I understand the problem. I analyze business context, technical constraints and real expectations. This step defines whether the project is viable and the best approach."
      },
      details: [
        { pt: "Reunião de entendimento com stakeholders", en: "Understanding meeting with stakeholders" },
        { pt: "Mapeamento de requisitos e restrições", en: "Requirements and constraints mapping" },
        { pt: "Análise de viabilidade técnica", en: "Technical feasibility analysis" },
        { pt: "Definição de métricas de sucesso", en: "Definition of success metrics" }
      ]
    },
    {
      number: "02",
      icon: Search,
      title: { pt: "Definição de Escopo", en: "Scope Definition" },
      description: {
        pt: "Escopo indefinido é a maior causa de projetos fracassados. Documento cada funcionalidade, cada entrega e cada limitação. Ambiguidade gera conflito. clareza gera resultado.",
        en: "Undefined scope is the biggest cause of failed projects. I document every feature, every delivery and every limitation. Ambiguity creates conflict. clarity creates results."
      },
      details: [
        { pt: "Documento de requisitos detalhado", en: "Detailed requirements document" },
        { pt: "Wireframes e protótipos quando necessário", en: "Wireframes and prototypes when needed" },
        { pt: "Estimativa de esforço por funcionalidade", en: "Effort estimation by feature" },
        { pt: "Aprovação formal antes de iniciar", en: "Formal approval before starting" }
      ]
    },
    {
      number: "03",
      icon: FileCode,
      title: { pt: "Planejamento e Arquitetura", en: "Planning & Architecture" },
      description: {
        pt: "Cada escolha técnica é justificada e documentada. Stack é definida pelo contexto do projeto, não por tendência. Trade-offs são analisados com base em dados. nunca por opinião.",
        en: "Every technical choice is justified and documented. Stack is defined by project context, not by trends. Trade-offs are analyzed based on data. never by opinion."
      },
      details: [
        { pt: "Escolha de stack baseada no contexto", en: "Stack choice based on context" },
        { pt: "Documentação de decisões arquiteturais", en: "Architectural decision documentation" },
        { pt: "Análise de escalabilidade e manutenção", en: "Scalability and maintenance analysis" },
        { pt: "Plano de contingência para riscos identificados", en: "Contingency plan for identified risks" }
      ]
    },
    {
      number: "04",
      icon: TestTube,
      title: { pt: "Execução Controlada", en: "Controlled Execution" },
      description: {
        pt: "Desenvolvimento em ciclos curtos com validação constante. Cada entrega parcial é verificável. você acompanha progresso real, não promessas. Feedback é incorporado sem comprometer a arquitetura.",
        en: "Development in short cycles with constant validation. Each partial delivery is verifiable. you follow real progress, not promises. Feedback is incorporated without compromising architecture."
      },
      details: [
        { pt: "Sprints semanais ou quinzenais", en: "Weekly or bi-weekly sprints" },
        { pt: "Demos regulares do progresso", en: "Regular progress demos" },
        { pt: "Feedback incorporado de forma controlada", en: "Feedback incorporated in a controlled manner" },
        { pt: "Código versionado e rastreável", en: "Versioned and traceable code" }
      ]
    },
    {
      number: "05",
      icon: Shield,
      title: { pt: "Testes e Validação", en: "Testing & Validation" },
      description: {
        pt: "Antes da entrega, cada funcionalidade é validada. Testes não são opcionais. são parte do processo. Problemas identificados aqui custam uma fração do que custariam em produção.",
        en: "Before delivery, each feature is validated. Tests are not optional. they're part of the process. Problems identified here cost a fraction of what they would in production."
      },
      details: [
        { pt: "Validação funcional de cada entrega", en: "Functional validation of each delivery" },
        { pt: "Revisão de segurança e performance", en: "Security and performance review" },
        { pt: "Testes em diferentes cenários de uso", en: "Tests in different usage scenarios" },
        { pt: "Correção antes do deploy final", en: "Fix before final deployment" }
      ]
    },
    {
      number: "06",
      icon: Rocket,
      title: { pt: "Entrega Estruturada", en: "Structured Delivery" },
      description: {
        pt: "Projeto entregue não é projeto abandonado. A entrega inclui documentação, deploy assistido e período de acompanhamento. A transição é planejada para que o projeto funcione sem depender de mim.",
        en: "Delivered project is not abandoned project. Delivery includes documentation, assisted deployment and follow-up period. Transition is planned so the project works without depending on me."
      },
      details: [
        { pt: "Deploy assistido em produção", en: "Assisted production deployment" },
        { pt: "Documentação técnica completa", en: "Complete technical documentation" },
        { pt: "Treinamento da equipe quando necessário", en: "Team training when necessary" },
        { pt: "Período de suporte pós-entrega", en: "Post-delivery support period" }
      ]
    }
  ] as ProcessStep[]
};

// ─── 4. DECISÕES TÉCNICAS CONSCIENTES ────────────────────────────
export const technicalDecisionsContent = {
  label: { pt: "Decisões Técnicas", en: "Technical Decisions" },
  title: { pt: "Como penso sobre tecnologia", en: "How I think about technology" },
  subtitle: {
    pt: "Toda escolha técnica envolve trade-offs. Não existe bala de prata. existe a decisão certa para o contexto certo.",
    en: "Every technical choice involves trade-offs. There is no silver bullet. there is the right decision for the right context."
  },
  cards: [
    {
      icon: Target,
      title: { pt: "Contexto define a stack", en: "Context defines the stack" },
      description: {
        pt: "A melhor tecnologia é a que resolve o problema dentro das restrições do projeto. Escolho ferramentas por adequação técnica, maturidade do ecossistema e capacidade de manutenção. não por popularidade ou preferência pessoal.",
        en: "The best technology is the one that solves the problem within the project's constraints. I choose tools by technical fit, ecosystem maturity and maintainability. not by popularity or personal preference."
      }
    },
    {
      icon: Layers,
      title: { pt: "Arquitetura prioriza manutenibilidade", en: "Architecture prioritizes maintainability" },
      description: {
        pt: "Software que só o autor entende é software com prazo de validade. Estruturo projetos para que outras pessoas possam dar continuidade, entender as decisões e evoluir o sistema sem precisar reescrever do zero.",
        en: "Software that only the author understands is software with an expiration date. I structure projects so others can continue, understand the decisions and evolve the system without needing to rewrite from scratch."
      }
    },
    {
      icon: BarChart3,
      title: { pt: "Performance é requisito, não extra", en: "Performance is a requirement, not extra" },
      description: {
        pt: "Performance impacta experiência do usuário, custos de infraestrutura e posicionamento em buscadores. Não é algo que se adiciona no final. é considerada desde a arquitetura inicial.",
        en: "Performance impacts user experience, infrastructure costs and search ranking. It's not something added at the end. it's considered from the initial architecture."
      }
    },
    {
      icon: Lock,
      title: { pt: "Segurança não é opcional", en: "Security is not optional" },
      description: {
        pt: "Validação de dados, controle de acesso, proteção contra vulnerabilidades conhecidas. segurança é parte do desenvolvimento, não uma camada separada que se adiciona depois.",
        en: "Data validation, access control, protection against known vulnerabilities. security is part of development, not a separate layer added afterwards."
      }
    }
  ] as PrincipleCard[]
};

// ─── 5. CRITÉRIOS PARA TRABALHAR COMIGO ──────────────────────────
export const criteriaContent = {
  label: { pt: "Critérios", en: "Criteria" },
  title: { pt: "Como decido participar", en: "How I decide to participate" },
  groups: [
    {
      title: { pt: "Quando faz sentido me contratar", en: "When it makes sense to hire me" },
      items: [
        { pt: "Projeto com escopo definido ou abertura para estruturá-lo", en: "Project with defined scope or openness to structure it" },
        { pt: "Compromisso com qualidade acima de velocidade irresponsável", en: "Commitment to quality over irresponsible speed" },
        { pt: "Visão de longo prazo para o produto ou sistema", en: "Long-term vision for the product or system" },
        { pt: "Disponibilidade para comunicação estruturada", en: "Availability for structured communication" },
        { pt: "Valorização de processo e profissionalismo", en: "Appreciation for process and professionalism" }
      ],
      positive: true
    },
    {
      title: { pt: "Quando não faz sentido", en: "When it doesn't make sense" },
      items: [
        { pt: "Busca exclusiva por menor preço, sem considerar qualidade", en: "Exclusive search for lowest price, without considering quality" },
        { pt: "Urgência extrema sem planejamento ou escopo definido", en: "Extreme urgency without planning or defined scope" },
        { pt: "Resistência a contrato formal ou documentação", en: "Resistance to formal contract or documentation" },
        { pt: "Expectativa de disponibilidade 24/7 sem acordo prévio", en: "Expectation of 24/7 availability without prior agreement" },
        { pt: "Projeto sem clareza de objetivo ou público-alvo", en: "Project without clear objective or target audience" }
      ],
      positive: false
    }
  ] as CriteriaGroup[]
};

// ─── 6. POLÍTICA PROFISSIONAL ────────────────────────────────────
export const policyContent = {
  label: { pt: "Política Profissional", en: "Professional Policy" },
  title: { pt: "Como formalizo meus projetos", en: "How I formalize my projects" },
  subtitle: {
    pt: "Profissionalismo protege ambas as partes. Todo projeto segue regras claras que garantem segurança jurídica, previsibilidade financeira e respeito mútuo.",
    en: "Professionalism protects both parties. Every project follows clear rules that ensure legal security, financial predictability and mutual respect."
  },
  items: [
    {
      icon: FileCheck,
      title: { pt: "Contrato em todos os projetos", en: "Contract on all projects" },
      description: {
        pt: "Trabalho exclusivamente com contrato. Ele define escopo, prazos, valores, responsabilidades e critérios de aceite. Sem contrato, não há projeto.",
        en: "I work exclusively with a contract. It defines scope, deadlines, values, responsibilities and acceptance criteria. No contract, no project."
      }
    },
    {
      icon: Scale,
      title: { pt: "Escopo definido protege todos", en: "Defined scope protects everyone" },
      description: {
        pt: "Mudanças de escopo acontecem. mas são tratadas formalmente. Cada alteração é avaliada, documentada e aprovada antes de ser implementada. Isso evita surpresas para ambas as partes.",
        en: "Scope changes happen. but they are handled formally. Each change is evaluated, documented and approved before implementation. This avoids surprises for both parties."
      }
    },
    {
      icon: Handshake,
      title: { pt: "Pagamento e prazos acordados", en: "Payment and deadlines agreed" },
      description: {
        pt: "Condições financeiras e cronograma são definidos antes do início. Marcos de pagamento são vinculados a entregas verificáveis. não a promessas.",
        en: "Financial conditions and timeline are defined before starting. Payment milestones are tied to verifiable deliveries. not promises."
      }
    },
    {
      icon: MessageSquare,
      title: { pt: "Comunicação estruturada", en: "Structured communication" },
      description: {
        pt: "Canais, frequência e formato de comunicação são definidos no início. Relatórios de progresso são regulares. Problemas são comunicados imediatamente. não escondidos.",
        en: "Channels, frequency and communication format are defined at the start. Progress reports are regular. Problems are communicated immediately. not hidden."
      }
    }
  ] as PolicyItem[]
};

// ─── 7. GESTÃO DE RISCO ──────────────────────────────────────────
export const riskContent = {
  label: { pt: "Gestão de Risco", en: "Risk Management" },
  title: { pt: "Como lido com incertezas", en: "How I handle uncertainty" },
  subtitle: {
    pt: "Todo projeto tem riscos. A diferença está em identificá-los cedo e ter um plano antes que se tornem problemas reais.",
    en: "Every project has risks. The difference is identifying them early and having a plan before they become real problems."
  },
  cards: [
    {
      icon: Search,
      title: { pt: "Identificação antecipada", en: "Early identification" },
      description: {
        pt: "Riscos técnicos, de escopo e de dependência são mapeados no início do projeto. Quanto antes um risco é identificado, menor o custo de mitigá-lo.",
        en: "Technical, scope and dependency risks are mapped at the start. The earlier a risk is identified, the lower the cost to mitigate it."
      }
    },
    {
      icon: Wrench,
      title: { pt: "Planos de mitigação", en: "Mitigation plans" },
      description: {
        pt: "Para cada risco relevante, existe um plano de contingência. Não é paranoia. é engenharia. Projetos que ignoram riscos pagam caro quando eles se materializam.",
        en: "For each relevant risk, there's a contingency plan. It's not paranoia. it's engineering. Projects that ignore risks pay dearly when they materialize."
      }
    },
    {
      icon: Eye,
      title: { pt: "Transparência com o cliente", en: "Transparency with the client" },
      description: {
        pt: "Riscos não são escondidos. Comunico impactos potenciais, probabilidades e alternativas. Decisões informadas são melhores que surpresas desagradáveis.",
        en: "Risks are not hidden. I communicate potential impacts, probabilities and alternatives. Informed decisions are better than unpleasant surprises."
      }
    },
    {
      icon: BookOpen,
      title: { pt: "Documentação quando necessário", en: "Documentation when necessary" },
      description: {
        pt: "Riscos críticos e decisões de mitigação são documentados. Isso cria rastreabilidade e ajuda na tomada de decisão futura, especialmente em projetos de longa duração.",
        en: "Critical risks and mitigation decisions are documented. This creates traceability and helps in future decision-making, especially in long-duration projects."
      }
    }
  ] as PrincipleCard[]
};

// ─── 8. COMPROMISSO COM QUALIDADE ────────────────────────────────
export const qualityContent = {
  label: { pt: "Qualidade", en: "Quality" },
  title: { pt: "O que considero inegociável", en: "What I consider non-negotiable" },
  subtitle: {
    pt: "Qualidade não é perfeccionismo. é responsabilidade. Estes são os padrões que aplico em cada projeto, independentemente do tamanho.",
    en: "Quality is not perfectionism. it's responsibility. These are the standards I apply to every project, regardless of size."
  },
  cards: [
    {
      icon: FileCode,
      title: { pt: "Código limpo e legível", en: "Clean and readable code" },
      description: {
        pt: "Código é lido mais vezes do que é escrito. Priorizo clareza, nomes significativos e estrutura consistente. Quem vier depois de mim precisa entender o que foi feito e por quê.",
        en: "Code is read more times than it's written. I prioritize clarity, meaningful names and consistent structure. Whoever comes after me needs to understand what was done and why."
      }
    },
    {
      icon: GitBranch,
      title: { pt: "Versionamento adequado", en: "Proper versioning" },
      description: {
        pt: "Todo código é versionado com commits claros e histórico rastreável. Branches organizados, merges controlados e a possibilidade de reverter qualquer mudança a qualquer momento.",
        en: "All code is versioned with clear commits and traceable history. Organized branches, controlled merges and the ability to revert any change at any time."
      }
    },
    {
      icon: Database,
      title: { pt: "Estrutura escalável", en: "Scalable structure" },
      description: {
        pt: "Projetos são estruturados para crescer. Separação de responsabilidades, modularidade e abstrações adequadas garantem que novas funcionalidades possam ser adicionadas sem reescrever o existente.",
        en: "Projects are structured to grow. Separation of concerns, modularity and proper abstractions ensure new features can be added without rewriting what exists."
      }
    },
    {
      icon: Gem,
      title: { pt: "Manutenção futura considerada", en: "Future maintenance considered" },
      description: {
        pt: "Cada decisão considera quem vai manter o sistema depois. Documentação técnica, padrões consistentes e dependências atualizadas reduzem o custo de manutenção ao longo do tempo.",
        en: "Every decision considers who will maintain the system afterwards. Technical documentation, consistent patterns and updated dependencies reduce maintenance cost over time."
      }
    }
  ] as PrincipleCard[]
};

// ─── 9. CTA (Encerramento forte) ─────────────────────────────────
export const ctaContent = {
  label: { pt: "Próximo passo", en: "Next step" },
  title: {
    pt: "Pronto para trabalhar com método?",
    en: "Ready to work with method?"
  },
  description: {
    pt: "Se você busca um profissional que entrega com processo, responsabilidade e compromisso técnico, vamos conversar. O primeiro passo é um diagnóstico. sem compromisso, sem pressa.",
    en: "If you're looking for a professional who delivers with process, responsibility and technical commitment, let's talk. The first step is a diagnosis. no commitment, no rush."
  },
  primaryCta: { pt: "Solicitar diagnóstico", en: "Request diagnosis" },
  secondaryCta: { pt: "Ver serviços", en: "View services" }
};
