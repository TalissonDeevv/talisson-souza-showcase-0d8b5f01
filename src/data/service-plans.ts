/**
 * Planos de acompanhamento técnico por serviço.
 *
 * Fonte única para preços, modalidades, benefícios, rotas e textos das páginas
 * `/servicos/:serviceId/planos` e `/en-us/services/:serviceId/plans`.
 *
 * Este arquivo não importa nada de propósito: ele também é lido pelos scripts de
 * build (`scripts/generate-static-route-metadata.mjs` e `scripts/generate-sitemap.mjs`).
 * Mantenha os caminhos (`servicePath` / `plansPath`) como strings literais.
 */

export type PlanLanguage = "pt" | "en";
export type Localized = { pt: string; en: string };

export type PlanTierId = "essential" | "professional" | "excellence" | "enterprise";

export type PlanBenefitKey =
  // Essencial
  | "updates"
  | "corrective"
  | "bugfixes"
  | "support"
  | "basicMonitoring"
  | "basicSecurity"
  | "compatibility"
  // Profissional
  | "priority"
  | "preventive"
  | "performance"
  | "securityReviews"
  | "monthlyReport"
  | "evolutionTracking"
  | "monthlyFeature"
  // Excelência
  | "advancedPriority"
  | "automatedMonitoring"
  | "dedicatedFollowUp"
  | "evolutionConsulting"
  | "recurringOptimization"
  | "backup"
  | "detailedReport"
  | "excellenceFeatures"
  // Empresarial
  | "customFeatures"
  | "preventiveCorrective"
  | "customSupport"
  | "dedicatedPriority"
  | "systemsMonitoring"
  | "multiProject"
  | "techPlanning"
  | "continuousImprovement"
  | "customTerms";

export type PlanTier = {
  id: PlanTierId;
  name: Localized;
  /** Valor mensal em reais. `null` = sob consulta. */
  monthlyPrice: number | null;
  /** Título comercial da assinatura (o mesmo usado no link de pagamento). */
  title: Localized;
  tagline: Localized;
  description: Localized;
  /** Link de pagamento da assinatura (Stripe). `null` = contratação por proposta. */
  paymentUrl: string | null;
  /** Modalidade cujos benefícios esta herda integralmente. */
  inherits?: PlanTierId;
  benefits: PlanBenefitKey[];
  cta: Localized;
  badge?: Localized;
};

export const planWhatsAppNumber = "5581993964261";

export const planTiers: PlanTier[] = [
  {
    id: "essential",
    name: { pt: "Essencial", en: "Essential" },
    monthlyPrice: 84.9,
    tagline: { pt: "Para manter estável", en: "To keep it stable" },
    title: { pt: "Acompanhamento Técnico Essencial", en: "Essential Technical Follow-up" },
    description: {
      pt: "Mantenha seu projeto atualizado e funcionando adequadamente com acompanhamento técnico contínuo. Tenha acesso a atualizações de tecnologias e dependências, manutenções corretivas, correção de bugs, suporte técnico, monitoramento básico e cuidados de segurança. Ideal para quem deseja preservar a estabilidade, compatibilidade e confiabilidade do seu bot, site ou sistema.",
      en: "Keep your project up to date and working properly with continuous technical follow-up. Get technology and dependency updates, corrective maintenance, bug fixes, technical support, basic monitoring and security care. Ideal for anyone who wants to preserve the stability, compatibility and reliability of their bot, website or system.",
    },
    paymentUrl: "https://buy.stripe.com/test_cNieVefmR9SYfn3gefcEw01",
    benefits: ["updates", "corrective", "bugfixes", "support", "basicMonitoring", "basicSecurity", "compatibility"],
    cta: { pt: "Assinar Essencial", en: "Subscribe to Essential" },
  },
  {
    id: "professional",
    name: { pt: "Profissional", en: "Professional" },
    monthlyPrice: 159.9,
    tagline: { pt: "Para evoluir com constância", en: "To evolve consistently" },
    title: { pt: "Acompanhamento Técnico Profissional", en: "Professional Technical Follow-up" },
    description: {
      pt: "Tenha um acompanhamento técnico mais completo, com todos os benefícios do plano Essencial, atendimento prioritário, manutenções preventivas, otimizações de desempenho, revisões de segurança e relatório mensal. Inclui também o desenvolvimento de 1 nova funcionalidade simples por mês, permitindo que seu projeto continue evoluindo conforme suas necessidades.",
      en: "Get more complete technical follow-up, with every Essential benefit, priority support, preventive maintenance, performance optimizations, security reviews and a monthly report. It also includes 1 new simple feature per month, so your project keeps evolving with your needs.",
    },
    paymentUrl: "https://buy.stripe.com/test_bJe3cw1w1aX28YF2npcEw02",
    inherits: "essential",
    benefits: ["priority", "preventive", "performance", "securityReviews", "monthlyReport", "evolutionTracking", "monthlyFeature"],
    cta: { pt: "Assinar Profissional", en: "Subscribe to Professional" },
  },
  {
    id: "excellence",
    name: { pt: "Excelência", en: "Excellence" },
    monthlyPrice: 319.9,
    tagline: { pt: "Para projetos que exigem atenção", en: "For projects that demand attention" },
    title: { pt: "Acompanhamento Técnico Excelência", en: "Excellence Technical Follow-up" },
    description: {
      pt: "Uma experiência avançada de acompanhamento técnico, com todos os benefícios do plano Profissional, monitoramento contínuo, acompanhamento dedicado, consultoria técnica, otimizações recorrentes e backup periódico. Inclui o desenvolvimento de até 2 funcionalidades simples ou 1 intermediária por mês, proporcionando mais possibilidades de evolução para seu projeto.",
      en: "An advanced technical follow-up experience, with every Professional benefit, continuous monitoring, dedicated follow-up, technical consulting, recurring optimizations and periodic backup. It includes up to 2 simple features or 1 intermediate feature per month, opening more room for your project to evolve.",
    },
    paymentUrl: "https://buy.stripe.com/test_00w8wQ0rXfdigr7e67cEw03",
    inherits: "professional",
    benefits: [
      "advancedPriority",
      "automatedMonitoring",
      "dedicatedFollowUp",
      "evolutionConsulting",
      "recurringOptimization",
      "backup",
      "detailedReport",
      "excellenceFeatures",
    ],
    cta: { pt: "Assinar Excelência", en: "Subscribe to Excellence" },
    badge: { pt: "Mais completo", en: "Most complete" },
  },
  {
    id: "enterprise",
    name: { pt: "Empresarial", en: "Enterprise" },
    monthlyPrice: null,
    tagline: { pt: "Para operações sob medida", en: "For tailored operations" },
    title: { pt: "Acompanhamento Técnico Empresarial", en: "Enterprise Technical Follow-up" },
    description: {
      pt: "Uma solução personalizada para empresas e operações que exigem acompanhamento técnico especializado. Tenha benefícios definidos conforme as necessidades do seu negócio, incluindo suporte dedicado, monitoramento, manutenções, desenvolvimento de novas funcionalidades, gestão de múltiplos projetos, consultoria e condições especiais de atendimento. Escopo, recursos e investimento definidos mediante avaliação individual.",
      en: "A tailored solution for companies and operations that require specialized technical follow-up. Get benefits defined around your business needs, including dedicated support, monitoring, maintenance, new feature development, management of multiple projects, consulting and special service conditions. Scope, resources and investment are defined after an individual assessment.",
    },
    paymentUrl: null,
    benefits: [
      "customFeatures",
      "preventiveCorrective",
      "customSupport",
      "dedicatedPriority",
      "systemsMonitoring",
      "multiProject",
      "techPlanning",
      "continuousImprovement",
      "customTerms",
    ],
    cta: { pt: "Solicitar proposta", en: "Request a proposal" },
  },
];

/** Textos padrão dos benefícios. Cada serviço pode sobrescrever ou excluir (null). */
export const defaultBenefitLabels: Record<PlanBenefitKey, Localized> = {
  updates: { pt: "Atualizações de bibliotecas, dependências e tecnologias", en: "Updates to libraries, dependencies and technologies" },
  corrective: { pt: "Manutenções corretivas", en: "Corrective maintenance" },
  bugfixes: { pt: "Correção de bugs e falhas", en: "Bug and failure fixes" },
  support: { pt: "Suporte técnico relacionado ao projeto", en: "Technical support related to the project" },
  basicMonitoring: { pt: "Monitoramento básico", en: "Basic monitoring" },
  basicSecurity: { pt: "Revisões e cuidados básicos de segurança", en: "Basic security reviews and care" },
  compatibility: { pt: "Manutenção da compatibilidade com as tecnologias utilizadas", en: "Compatibility upkeep with the technologies in use" },
  priority: { pt: "Atendimento prioritário", en: "Priority support" },
  preventive: { pt: "Manutenções preventivas", en: "Preventive maintenance" },
  performance: { pt: "Otimizações de desempenho", en: "Performance optimizations" },
  securityReviews: { pt: "Revisões periódicas de segurança", en: "Periodic security reviews" },
  monthlyReport: { pt: "Relatório mensal das atividades realizadas", en: "Monthly report of completed activities" },
  evolutionTracking: { pt: "Acompanhamento da evolução técnica", en: "Tracking of technical evolution" },
  monthlyFeature: { pt: "Direito a 1 nova funcionalidade simples por mês", en: "1 new simple feature per month" },
  advancedPriority: { pt: "Atendimento com prioridade avançada", en: "Advanced priority support" },
  automatedMonitoring: { pt: "Monitoramento contínuo automatizado", en: "Continuous automated monitoring" },
  dedicatedFollowUp: { pt: "Acompanhamento técnico dedicado", en: "Dedicated technical follow-up" },
  evolutionConsulting: { pt: "Consultoria para evolução do projeto", en: "Consulting for project evolution" },
  recurringOptimization: { pt: "Otimizações recorrentes", en: "Recurring optimizations" },
  backup: { pt: "Backup periódico, quando aplicável", en: "Periodic backup, when applicable" },
  detailedReport: { pt: "Relatório técnico detalhado", en: "Detailed technical report" },
  excellenceFeatures: {
    pt: "Direito a até 2 funcionalidades simples ou 1 intermediária por mês",
    en: "Up to 2 simple features or 1 intermediate feature per month",
  },
  customFeatures: { pt: "Quantidade personalizada de funcionalidades", en: "Custom number of features" },
  preventiveCorrective: { pt: "Manutenções preventivas e corretivas", en: "Preventive and corrective maintenance" },
  customSupport: { pt: "Suporte técnico personalizado", en: "Tailored technical support" },
  dedicatedPriority: { pt: "Atendimento prioritário dedicado", en: "Dedicated priority support" },
  systemsMonitoring: { pt: "Monitoramento de sistemas e aplicações", en: "Monitoring of systems and applications" },
  multiProject: { pt: "Gestão técnica de múltiplos projetos", en: "Technical management of multiple projects" },
  techPlanning: { pt: "Consultoria e planejamento tecnológico", en: "Technology consulting and planning" },
  continuousImprovement: { pt: "Otimizações e melhorias contínuas", en: "Continuous optimizations and improvements" },
  customTerms: { pt: "Condições e prazos de atendimento personalizados", en: "Tailored service conditions and timelines" },
};

/* ------------------------------------------------------------------------ */
/* Comparativo                                                              */
/* ------------------------------------------------------------------------ */

export type PlanComparisonCell =
  | { key: PlanBenefitKey; value: true | Localized }
  | null;

export type PlanComparisonRowId =
  | "maintenance"
  | "support"
  | "monitoring"
  | "security"
  | "preventive"
  | "optimizations"
  | "reports"
  | "features"
  | "dedicated"
  | "consulting"
  | "backup"
  | "multiProject";

export type PlanComparisonRow = {
  id: PlanComparisonRowId;
  label: Localized;
  /** A linha só aparece se ao menos um destes benefícios existir no serviço. */
  requires: PlanBenefitKey[];
  cells: Record<PlanTierId, PlanComparisonCell>;
};

const byProposal: Localized = { pt: "Conforme proposta", en: "Per proposal" };

export const planComparisonRows: PlanComparisonRow[] = [
  {
    id: "maintenance",
    label: { pt: "Atualizações e manutenção corretiva", en: "Updates and corrective maintenance" },
    requires: ["corrective", "preventiveCorrective"],
    cells: {
      essential: { key: "corrective", value: true },
      professional: { key: "corrective", value: true },
      excellence: { key: "corrective", value: true },
      enterprise: { key: "preventiveCorrective", value: true },
    },
  },
  {
    id: "support",
    label: { pt: "Atendimento", en: "Support" },
    requires: ["support"],
    cells: {
      essential: { key: "support", value: { pt: "Padrão", en: "Standard" } },
      professional: { key: "priority", value: { pt: "Prioritário", en: "Priority" } },
      excellence: { key: "advancedPriority", value: { pt: "Prioridade avançada", en: "Advanced priority" } },
      enterprise: { key: "dedicatedPriority", value: { pt: "Prioritário dedicado", en: "Dedicated priority" } },
    },
  },
  {
    id: "monitoring",
    label: { pt: "Monitoramento", en: "Monitoring" },
    requires: ["basicMonitoring", "automatedMonitoring", "systemsMonitoring"],
    cells: {
      essential: { key: "basicMonitoring", value: { pt: "Básico", en: "Basic" } },
      professional: { key: "basicMonitoring", value: { pt: "Básico", en: "Basic" } },
      excellence: { key: "automatedMonitoring", value: { pt: "Contínuo e automatizado", en: "Continuous and automated" } },
      enterprise: { key: "systemsMonitoring", value: { pt: "Sistemas e aplicações", en: "Systems and applications" } },
    },
  },
  {
    id: "security",
    label: { pt: "Segurança", en: "Security" },
    requires: ["basicSecurity", "securityReviews"],
    cells: {
      essential: { key: "basicSecurity", value: { pt: "Cuidados básicos", en: "Basic care" } },
      professional: { key: "securityReviews", value: { pt: "Revisões periódicas", en: "Periodic reviews" } },
      excellence: { key: "securityReviews", value: { pt: "Revisões periódicas", en: "Periodic reviews" } },
      enterprise: { key: "securityReviews", value: byProposal },
    },
  },
  {
    id: "preventive",
    label: { pt: "Manutenção preventiva", en: "Preventive maintenance" },
    requires: ["preventive", "preventiveCorrective"],
    cells: {
      essential: null,
      professional: { key: "preventive", value: true },
      excellence: { key: "preventive", value: true },
      enterprise: { key: "preventiveCorrective", value: true },
    },
  },
  {
    id: "optimizations",
    label: { pt: "Otimizações", en: "Optimizations" },
    requires: ["performance", "recurringOptimization", "continuousImprovement"],
    cells: {
      essential: null,
      professional: { key: "performance", value: { pt: "De desempenho", en: "Performance" } },
      excellence: { key: "recurringOptimization", value: { pt: "Recorrentes", en: "Recurring" } },
      enterprise: { key: "continuousImprovement", value: { pt: "Contínuas", en: "Continuous" } },
    },
  },
  {
    id: "reports",
    label: { pt: "Relatórios", en: "Reports" },
    requires: ["monthlyReport", "detailedReport"],
    cells: {
      essential: null,
      professional: { key: "monthlyReport", value: { pt: "Mensal de atividades", en: "Monthly activities" } },
      excellence: { key: "detailedReport", value: { pt: "Técnico detalhado", en: "Detailed technical" } },
      enterprise: { key: "customTerms", value: byProposal },
    },
  },
  {
    id: "features",
    label: { pt: "Novas funcionalidades por mês", en: "New features per month" },
    requires: ["monthlyFeature", "excellenceFeatures", "customFeatures"],
    cells: {
      essential: null,
      professional: { key: "monthlyFeature", value: { pt: "1 simples", en: "1 simple" } },
      excellence: { key: "excellenceFeatures", value: { pt: "Até 2 simples ou 1 intermediária", en: "Up to 2 simple or 1 intermediate" } },
      enterprise: { key: "customFeatures", value: { pt: "Personalizada", en: "Custom" } },
    },
  },
  {
    id: "dedicated",
    label: { pt: "Acompanhamento dedicado", en: "Dedicated follow-up" },
    requires: ["dedicatedFollowUp", "dedicatedPriority"],
    cells: {
      essential: null,
      professional: null,
      excellence: { key: "dedicatedFollowUp", value: true },
      enterprise: { key: "dedicatedPriority", value: true },
    },
  },
  {
    id: "consulting",
    label: { pt: "Consultoria", en: "Consulting" },
    requires: ["evolutionConsulting", "techPlanning"],
    cells: {
      essential: null,
      professional: null,
      excellence: { key: "evolutionConsulting", value: { pt: "Evolução do projeto", en: "Project evolution" } },
      enterprise: { key: "techPlanning", value: { pt: "Planejamento tecnológico", en: "Technology planning" } },
    },
  },
  {
    id: "backup",
    label: { pt: "Backup", en: "Backup" },
    requires: ["backup"],
    cells: {
      essential: null,
      professional: null,
      excellence: { key: "backup", value: { pt: "Periódico, quando aplicável", en: "Periodic, when applicable" } },
      enterprise: { key: "backup", value: byProposal },
    },
  },
  {
    id: "multiProject",
    label: { pt: "Múltiplos projetos", en: "Multiple projects" },
    requires: ["multiProject"],
    cells: {
      essential: null,
      professional: null,
      excellence: null,
      enterprise: { key: "multiProject", value: true },
    },
  },
];

/* ------------------------------------------------------------------------ */
/* Serviços                                                                 */
/* ------------------------------------------------------------------------ */

export type ServicePlanConfig = {
  /** Identificador interno, igual ao `serviceId` usado nas páginas de serviço. */
  id: string;
  servicePath: Localized;
  plansPath: Localized;
  serviceName: Localized;
  /** Como o serviço aparece na mensagem de contato: "...para desenvolvimento de bots." */
  contactLabel: Localized;
  title: Localized;
  description: Localized;
  seoTitle: Localized;
  seoDescription: Localized;
  /** Sobrescreve (texto) ou remove (null) benefícios que não se aplicam ao serviço. */
  benefitOverrides?: Partial<Record<PlanBenefitKey, Localized | null>>;
  /** Sobrescreve o rótulo de linhas do comparativo. */
  comparisonLabels?: Partial<Record<PlanComparisonRowId, Localized>>;
  /** O que o acompanhamento cobre e o que fica fora dele para este serviço. */
  coverage: { included: Localized[]; excluded: Localized[] };
  importance: Array<{ title: Localized; text: Localized }>;
  faq: Array<{ question: Localized; answer: Localized }>;
};

/**
 * Serviços com página de planos. Comunidade Discord e Consultoria ficam de fora
 * de propósito: não possuem acompanhamento técnico por assinatura.
 */
export const servicePlans: ServicePlanConfig[] = [
  {
    id: "web-development",
    servicePath: { pt: "/servicos/web-development", en: "/en-us/services/web-development" },
    plansPath: { pt: "/servicos/web-development/planos", en: "/en-us/services/web-development/plans" },
    serviceName: { pt: "Desenvolvimento Web", en: "Web Development" },
    contactLabel: { pt: "desenvolvimento web", en: "web development" },
    title: { pt: "Planos de acompanhamento para sites e aplicações web.", en: "Follow-up plans for websites and web applications." },
    description: {
      pt: "Mantenha seu site ou aplicação web atualizado, seguro e rápido, com uma base técnica preparada para acompanhar o crescimento da sua operação.",
      en: "Keep your website or web application up to date, secure and fast, with a technical foundation ready to keep up with your operation's growth.",
    },
    seoTitle: { pt: "Planos de Acompanhamento Web | Talisson Souza", en: "Web Follow-up Plans | Talisson Souza" },
    seoDescription: {
      pt: "Planos de acompanhamento técnico para sites e aplicações web: atualizações, correções, suporte, segurança, desempenho e evolução contínua.",
      en: "Technical follow-up plans for websites and web applications: updates, fixes, support, security, performance and continuous evolution.",
    },
    benefitOverrides: {
      updates: { pt: "Atualizações de bibliotecas, frameworks e dependências do projeto", en: "Updates to the project's libraries, frameworks and dependencies" },
      bugfixes: { pt: "Correção de bugs e falhas na interface e nas funcionalidades", en: "Fixes for bugs and failures in the interface and features" },
      basicMonitoring: { pt: "Monitoramento básico de disponibilidade", en: "Basic availability monitoring" },
      compatibility: { pt: "Compatibilidade com navegadores e tecnologias utilizadas", en: "Compatibility with browsers and the technologies in use" },
      performance: { pt: "Otimizações de desempenho e carregamento", en: "Performance and loading optimizations" },
      systemsMonitoring: { pt: "Monitoramento de sites, sistemas e aplicações web", en: "Monitoring of websites, systems and web applications" },
    },
    coverage: {
      included: [
        { pt: "Código, dependências e configurações do site ou aplicação acompanhada", en: "Code, dependencies and configuration of the website or application under follow-up" },
        { pt: "Correções, ajustes e pequenas evoluções dentro do escopo da modalidade", en: "Fixes, adjustments and small improvements within the plan's scope" },
        { pt: "Orientação técnica sobre hospedagem, domínio e integrações já existentes", en: "Technical guidance on existing hosting, domain and integrations" },
      ],
      excluded: [
        { pt: "Redesign completo, novos módulos de grande porte ou um novo projeto", en: "Full redesigns, large new modules or a new project" },
        { pt: "Custos de hospedagem, domínio, licenças e serviços de terceiros", en: "Hosting, domain, license and third-party service costs" },
      ],
    },
    importance: [
      {
        title: { pt: "Dependências envelhecem", en: "Dependencies age" },
        text: {
          pt: "Frameworks e bibliotecas recebem correções de segurança com frequência. Um site parado no tempo acumula vulnerabilidades e fica mais caro de atualizar.",
          en: "Frameworks and libraries receive security fixes frequently. A website frozen in time accumulates vulnerabilities and becomes more expensive to update.",
        },
      },
      {
        title: { pt: "Navegadores mudam", en: "Browsers change" },
        text: {
          pt: "Novas versões de navegadores e dispositivos podem quebrar comportamentos que funcionavam. O acompanhamento identifica e corrige antes que o visitante perceba.",
          en: "New browser and device versions can break behavior that used to work. Follow-up identifies and fixes it before visitors notice.",
        },
      },
      {
        title: { pt: "Desempenho é percebido", en: "Performance is noticed" },
        text: {
          pt: "Carregamento lento afeta conversão e confiança. Revisões contínuas mantêm o produto rápido conforme o conteúdo e o uso crescem.",
          en: "Slow loading affects conversion and trust. Continuous reviews keep the product fast as content and usage grow.",
        },
      },
    ],
    faq: [
      {
        question: { pt: "O acompanhamento inclui alterações de conteúdo?", en: "Does the follow-up include content changes?" },
        answer: {
          pt: "Ajustes pontuais podem entrar como funcionalidade simples nas modalidades que a incluem. Rotinas frequentes de publicação de conteúdo são avaliadas à parte.",
          en: "One-off adjustments can count as a simple feature in the plans that include it. Frequent content publishing routines are assessed separately.",
        },
      },
    ],
  },
  {
    id: "mobile-development",
    servicePath: { pt: "/servicos/mobile-development", en: "/en-us/services/mobile-development" },
    plansPath: { pt: "/servicos/mobile-development/planos", en: "/en-us/services/mobile-development/plans" },
    serviceName: { pt: "Desenvolvimento Mobile", en: "Mobile Development" },
    contactLabel: { pt: "desenvolvimento mobile", en: "mobile development" },
    title: { pt: "Planos de acompanhamento para aplicativos.", en: "Follow-up plans for mobile apps." },
    description: {
      pt: "Mantenha seu aplicativo compatível com as novas versões dos sistemas, estável para quem usa todos os dias e preparado para evoluir.",
      en: "Keep your app compatible with new operating system versions, stable for daily users and ready to evolve.",
    },
    seoTitle: { pt: "Planos de Acompanhamento Mobile | Talisson Souza", en: "Mobile Follow-up Plans | Talisson Souza" },
    seoDescription: {
      pt: "Planos de acompanhamento técnico para aplicativos: atualizações de SDKs, compatibilidade com Android e iOS, correções, suporte e evolução contínua.",
      en: "Technical follow-up plans for apps: SDK updates, Android and iOS compatibility, fixes, support and continuous evolution.",
    },
    benefitOverrides: {
      updates: { pt: "Atualizações de SDKs, bibliotecas e dependências do aplicativo", en: "Updates to the app's SDKs, libraries and dependencies" },
      bugfixes: { pt: "Correção de bugs e falhas no aplicativo", en: "Fixes for bugs and failures in the app" },
      basicMonitoring: { pt: "Monitoramento básico de falhas e estabilidade", en: "Basic crash and stability monitoring" },
      compatibility: { pt: "Compatibilidade com as versões de Android, iOS e tecnologias utilizadas", en: "Compatibility with Android, iOS versions and the technologies in use" },
      performance: { pt: "Otimizações de desempenho e consumo do aplicativo", en: "App performance and resource usage optimizations" },
      backup: { pt: "Backup periódico dos dados do aplicativo, quando aplicável", en: "Periodic backup of app data, when applicable" },
      systemsMonitoring: { pt: "Monitoramento de aplicativos, APIs e integrações", en: "Monitoring of apps, APIs and integrations" },
    },
    coverage: {
      included: [
        { pt: "Código, dependências e configurações do aplicativo acompanhado", en: "Code, dependencies and configuration of the app under follow-up" },
        { pt: "Adequações técnicas exigidas por novas versões dos sistemas", en: "Technical adjustments required by new operating system versions" },
        { pt: "Correções e pequenas evoluções dentro do escopo da modalidade", en: "Fixes and small improvements within the plan's scope" },
      ],
      excluded: [
        { pt: "Novos módulos de grande porte, redesign completo ou um novo aplicativo", en: "Large new modules, full redesigns or a new app" },
        { pt: "Taxas das lojas de aplicativos, contas de desenvolvedor e serviços de terceiros", en: "App store fees, developer accounts and third-party services" },
      ],
    },
    importance: [
      {
        title: { pt: "Sistemas atualizam todo ano", en: "Systems update every year" },
        text: {
          pt: "Android e iOS mudam permissões, APIs e requisitos com frequência. Sem acompanhamento, o aplicativo pode deixar de funcionar como esperado.",
          en: "Android and iOS change permissions, APIs and requirements frequently. Without follow-up, the app may stop working as expected.",
        },
      },
      {
        title: { pt: "Falha no bolso é falha visível", en: "A failure in the pocket is visible" },
        text: {
          pt: "Quem usa o aplicativo todo dia percebe rapidamente travamentos e lentidão. Corrigir cedo protege a confiança e a avaliação do produto.",
          en: "Daily users quickly notice crashes and slowness. Fixing early protects trust and the product's reputation.",
        },
      },
      {
        title: { pt: "Evolução sem ruptura", en: "Evolution without disruption" },
        text: {
          pt: "Pequenas melhorias contínuas mantêm o aplicativo relevante sem a necessidade de grandes reescritas no futuro.",
          en: "Small continuous improvements keep the app relevant without large rewrites in the future.",
        },
      },
    ],
    faq: [
      {
        question: { pt: "O acompanhamento cobre publicações nas lojas?", en: "Does the follow-up cover store releases?" },
        answer: {
          pt: "O envio de versões resultantes das manutenções e evoluções do plano pode ser combinado no início do acompanhamento. Taxas e contas das lojas continuam sob responsabilidade do titular do aplicativo.",
          en: "Submitting versions that result from the plan's maintenance and improvements can be agreed at the start of the follow-up. Store fees and accounts remain the app owner's responsibility.",
        },
      },
    ],
  },
  {
    id: "bot-development",
    servicePath: { pt: "/servicos/bot-development", en: "/en-us/services/bot-development" },
    plansPath: { pt: "/servicos/bot-development/planos", en: "/en-us/services/bot-development/plans" },
    serviceName: { pt: "Desenvolvimento de Bots", en: "Bot Development" },
    contactLabel: { pt: "desenvolvimento de bots", en: "bot development" },
    title: { pt: "Planos de acompanhamento para bots.", en: "Follow-up plans for bots." },
    description: {
      pt: "Mantenha seu bot atualizado, estável e preparado para acompanhar as necessidades da sua comunidade ou operação.",
      en: "Keep your bot up to date, stable and ready to keep up with the needs of your community or operation.",
    },
    seoTitle: { pt: "Planos de Acompanhamento para Bots | Talisson Souza", en: "Bot Follow-up Plans | Talisson Souza" },
    seoDescription: {
      pt: "Planos de acompanhamento técnico para bots de Discord, WhatsApp e Telegram: atualizações, correções, suporte, monitoramento e novas funcionalidades.",
      en: "Technical follow-up plans for Discord, WhatsApp and Telegram bots: updates, fixes, support, monitoring and new features.",
    },
    benefitOverrides: {
      updates: { pt: "Atualizações de bibliotecas, dependências e APIs das plataformas", en: "Updates to libraries, dependencies and platform APIs" },
      bugfixes: { pt: "Correção de bugs e falhas em comandos e fluxos", en: "Fixes for bugs and failures in commands and flows" },
      basicMonitoring: { pt: "Monitoramento básico de disponibilidade do bot", en: "Basic bot availability monitoring" },
      compatibility: { pt: "Compatibilidade com as mudanças das plataformas utilizadas", en: "Compatibility with changes in the platforms in use" },
      systemsMonitoring: { pt: "Monitoramento de bots, sistemas e integrações", en: "Monitoring of bots, systems and integrations" },
    },
    coverage: {
      included: [
        { pt: "Código, dependências e configurações do bot acompanhado", en: "Code, dependencies and configuration of the bot under follow-up" },
        { pt: "Adequações a mudanças de API do Discord, WhatsApp ou Telegram", en: "Adjustments to Discord, WhatsApp or Telegram API changes" },
        { pt: "Correções e pequenas evoluções dentro do escopo da modalidade", en: "Fixes and small improvements within the plan's scope" },
      ],
      excluded: [
        { pt: "Módulos novos de grande porte ou um novo bot", en: "Large new modules or a new bot" },
        { pt: "Custos de hospedagem, APIs pagas e serviços de terceiros", en: "Hosting, paid API and third-party service costs" },
      ],
    },
    importance: [
      {
        title: { pt: "Plataformas mudam sem aviso longo", en: "Platforms change on short notice" },
        text: {
          pt: "Discord, WhatsApp e Telegram atualizam APIs, limites e regras. Um bot sem acompanhamento pode parar de responder de um dia para o outro.",
          en: "Discord, WhatsApp and Telegram update APIs, limits and rules. A bot without follow-up can stop responding overnight.",
        },
      },
      {
        title: { pt: "A comunidade depende da rotina", en: "The community depends on the routine" },
        text: {
          pt: "Tickets, cargos, logs e automações sustentam a operação diária. Quando falham, a equipe volta ao trabalho manual.",
          en: "Tickets, roles, logs and automations sustain daily operations. When they fail, the team falls back to manual work.",
        },
      },
      {
        title: { pt: "Necessidades crescem com o servidor", en: "Needs grow with the server" },
        text: {
          pt: "Novos fluxos surgem conforme a comunidade amadurece. O acompanhamento permite evoluir o bot sem acumular remendos.",
          en: "New flows emerge as the community matures. Follow-up lets the bot evolve without piling up patches.",
        },
      },
    ],
    faq: [
      {
        question: { pt: "O plano vale para bots de qualquer plataforma?", en: "Does the plan apply to bots on any platform?" },
        answer: {
          pt: "Vale para bots de Discord, WhatsApp e Telegram cujo código e ambiente possam ser acompanhados. A análise inicial confirma se o projeto se encaixa na modalidade escolhida.",
          en: "It applies to Discord, WhatsApp and Telegram bots whose code and environment can be followed up. The initial review confirms whether the project fits the chosen plan.",
        },
      },
    ],
  },
  {
    id: "uiux-design",
    servicePath: { pt: "/servicos/uiux-design", en: "/en-us/services/uiux-design" },
    plansPath: { pt: "/servicos/uiux-design/planos", en: "/en-us/services/uiux-design/plans" },
    serviceName: { pt: "UI/UX Design", en: "UI/UX Design" },
    contactLabel: { pt: "UI/UX design", en: "UI/UX design" },
    title: { pt: "Planos de acompanhamento para design de interfaces.", en: "Follow-up plans for interface design." },
    description: {
      pt: "Mantenha interfaces, componentes e design system consistentes enquanto o produto evolui, sem perder clareza na experiência de quem usa.",
      en: "Keep interfaces, components and the design system consistent as the product evolves, without losing clarity in the user experience.",
    },
    seoTitle: { pt: "Planos de Acompanhamento UI/UX | Talisson Souza", en: "UI/UX Follow-up Plans | Talisson Souza" },
    seoDescription: {
      pt: "Planos de acompanhamento de UI/UX design: manutenção do design system, ajustes de interface, melhorias de usabilidade e novas telas mensais.",
      en: "UI/UX design follow-up plans: design system upkeep, interface adjustments, usability improvements and new monthly screens.",
    },
    benefitOverrides: {
      updates: { pt: "Atualização de bibliotecas de componentes e design tokens", en: "Updates to component libraries and design tokens" },
      corrective: { pt: "Ajustes corretivos em telas e componentes", en: "Corrective adjustments to screens and components" },
      bugfixes: { pt: "Correção de inconsistências visuais e de usabilidade", en: "Fixes for visual and usability inconsistencies" },
      support: { pt: "Suporte relacionado ao design do projeto", en: "Support related to the project's design" },
      basicMonitoring: null,
      basicSecurity: null,
      compatibility: { pt: "Consistência com o design system e as plataformas do produto", en: "Consistency with the design system and the product's platforms" },
      preventive: { pt: "Revisões preventivas de consistência visual", en: "Preventive visual consistency reviews" },
      performance: { pt: "Melhorias de usabilidade e clareza das jornadas", en: "Usability and journey clarity improvements" },
      securityReviews: null,
      evolutionTracking: { pt: "Acompanhamento da evolução da experiência", en: "Tracking of experience evolution" },
      monthlyFeature: { pt: "Direito a 1 nova tela ou componente simples por mês", en: "1 new simple screen or component per month" },
      automatedMonitoring: null,
      evolutionConsulting: { pt: "Consultoria para evolução da experiência do produto", en: "Consulting for product experience evolution" },
      recurringOptimization: { pt: "Refinamentos recorrentes de interface", en: "Recurring interface refinements" },
      backup: { pt: "Backup periódico dos arquivos de design, quando aplicável", en: "Periodic backup of design files, when applicable" },
      excellenceFeatures: {
        pt: "Direito a até 2 telas ou componentes simples, ou 1 fluxo intermediário, por mês",
        en: "Up to 2 simple screens or components, or 1 intermediate flow, per month",
      },
      customFeatures: { pt: "Quantidade personalizada de telas, componentes e fluxos", en: "Custom number of screens, components and flows" },
      preventiveCorrective: { pt: "Revisões preventivas e ajustes corretivos", en: "Preventive reviews and corrective adjustments" },
      systemsMonitoring: null,
      multiProject: { pt: "Gestão de design de múltiplos projetos", en: "Design management across multiple projects" },
      techPlanning: { pt: "Consultoria e planejamento de experiência e produto", en: "Experience and product consulting and planning" },
      continuousImprovement: { pt: "Melhorias contínuas de interface e experiência", en: "Continuous interface and experience improvements" },
    },
    comparisonLabels: {
      maintenance: { pt: "Atualizações e ajustes corretivos", en: "Updates and corrective adjustments" },
      preventive: { pt: "Revisões preventivas", en: "Preventive reviews" },
      optimizations: { pt: "Melhorias de experiência", en: "Experience improvements" },
      features: { pt: "Novas telas ou componentes por mês", en: "New screens or components per month" },
    },
    coverage: {
      included: [
        { pt: "Arquivos de design, componentes e design system do produto acompanhado", en: "Design files, components and design system of the product under follow-up" },
        { pt: "Ajustes de interface e usabilidade dentro do escopo da modalidade", en: "Interface and usability adjustments within the plan's scope" },
        { pt: "Handoff das alterações para a equipe de desenvolvimento", en: "Handoff of changes to the development team" },
      ],
      excluded: [
        { pt: "Implementação em código das telas desenhadas", en: "Coding the designed screens" },
        { pt: "Redesign completo, nova identidade visual ou um novo produto", en: "Full redesigns, a new visual identity or a new product" },
      ],
    },
    importance: [
      {
        title: { pt: "Consistência se perde aos poucos", en: "Consistency erodes gradually" },
        text: {
          pt: "Cada nova tela criada sem referência afasta o produto do design system. O acompanhamento mantém a linguagem visual coerente.",
          en: "Every new screen created without reference pulls the product away from its design system. Follow-up keeps the visual language coherent.",
        },
      },
      {
        title: { pt: "O uso real revela atritos", en: "Real usage reveals friction" },
        text: {
          pt: "Depois do lançamento aparecem dúvidas, cliques perdidos e jornadas longas. Ajustes contínuos removem atritos com base no que o produto já mostra.",
          en: "After launch come doubts, missed clicks and long journeys. Continuous adjustments remove friction based on what the product already shows.",
        },
      },
      {
        title: { pt: "Desenvolvimento com referência", en: "Development with reference" },
        text: {
          pt: "Telas e componentes documentados reduzem retrabalho e interpretação na hora de implementar.",
          en: "Documented screens and components reduce rework and guesswork during implementation.",
        },
      },
    ],
    faq: [
      {
        question: { pt: "O acompanhamento de UI/UX inclui desenvolvimento?", en: "Does UI/UX follow-up include development?" },
        answer: {
          pt: "Não. Os planos de UI/UX cobrem design, componentes e handoff. A implementação em código pode ser combinada com os planos de desenvolvimento web ou mobile.",
          en: "No. UI/UX plans cover design, components and handoff. Implementation in code can be combined with the web or mobile development plans.",
        },
      },
    ],
  },
  {
    id: "cloud-solutions",
    servicePath: { pt: "/servicos/cloud-solutions", en: "/en-us/services/cloud-solutions" },
    plansPath: { pt: "/servicos/cloud-solutions/planos", en: "/en-us/services/cloud-solutions/plans" },
    serviceName: { pt: "Soluções em Nuvem", en: "Cloud Solutions" },
    contactLabel: { pt: "soluções em nuvem", en: "cloud solutions" },
    title: { pt: "Planos de acompanhamento para infraestrutura em nuvem.", en: "Follow-up plans for cloud infrastructure." },
    description: {
      pt: "Mantenha deploys, ambientes e serviços em nuvem estáveis, atualizados e observáveis, com atenção contínua à segurança e à disponibilidade.",
      en: "Keep deployments, environments and cloud services stable, up to date and observable, with continuous attention to security and availability.",
    },
    seoTitle: { pt: "Planos de Acompanhamento Cloud | Talisson Souza", en: "Cloud Follow-up Plans | Talisson Souza" },
    seoDescription: {
      pt: "Planos de acompanhamento técnico para infraestrutura em nuvem: atualizações, monitoramento, segurança, backup, otimizações e suporte contínuo.",
      en: "Technical follow-up plans for cloud infrastructure: updates, monitoring, security, backup, optimizations and continuous support.",
    },
    benefitOverrides: {
      updates: { pt: "Atualizações de serviços, imagens e dependências da infraestrutura", en: "Updates to infrastructure services, images and dependencies" },
      corrective: { pt: "Manutenções corretivas no ambiente", en: "Corrective maintenance of the environment" },
      bugfixes: { pt: "Correção de falhas em deploys, configurações e pipelines", en: "Fixes for failures in deployments, configuration and pipelines" },
      basicMonitoring: { pt: "Monitoramento básico de disponibilidade e recursos", en: "Basic availability and resource monitoring" },
      basicSecurity: { pt: "Revisões e cuidados básicos de segurança do ambiente", en: "Basic environment security reviews and care" },
      compatibility: { pt: "Compatibilidade entre serviços, versões e provedores utilizados", en: "Compatibility across the services, versions and providers in use" },
      performance: { pt: "Otimizações de desempenho e uso de recursos", en: "Performance and resource usage optimizations" },
      monthlyFeature: { pt: "Direito a 1 nova configuração ou automação simples por mês", en: "1 new simple configuration or automation per month" },
      excellenceFeatures: {
        pt: "Direito a até 2 configurações ou automações simples, ou 1 intermediária, por mês",
        en: "Up to 2 simple configurations or automations, or 1 intermediate, per month",
      },
      customFeatures: { pt: "Quantidade personalizada de configurações e automações", en: "Custom number of configurations and automations" },
      systemsMonitoring: { pt: "Monitoramento de ambientes, sistemas e aplicações", en: "Monitoring of environments, systems and applications" },
    },
    comparisonLabels: {
      features: { pt: "Novas configurações ou automações por mês", en: "New configurations or automations per month" },
    },
    coverage: {
      included: [
        { pt: "Ambientes, pipelines e serviços de nuvem já estruturados", en: "Environments, pipelines and cloud services already in place" },
        { pt: "Ajustes de configuração, segurança e observabilidade dentro do escopo", en: "Configuration, security and observability adjustments within scope" },
        { pt: "Orientação técnica sobre capacidade e uso de recursos", en: "Technical guidance on capacity and resource usage" },
      ],
      excluded: [
        { pt: "Migrações completas entre provedores ou uma nova arquitetura", en: "Full provider migrations or a new architecture" },
        { pt: "Custos dos provedores de nuvem, licenças e serviços de terceiros", en: "Cloud provider, license and third-party service costs" },
      ],
    },
    importance: [
      {
        title: { pt: "Disponibilidade é rotina", en: "Availability is a routine" },
        text: {
          pt: "Certificados vencem, discos enchem e serviços mudam de versão. Acompanhar evita que detalhes operacionais virem indisponibilidade.",
          en: "Certificates expire, disks fill up and services change versions. Follow-up keeps operational details from becoming downtime.",
        },
      },
      {
        title: { pt: "Segurança exige revisão", en: "Security requires review" },
        text: {
          pt: "Permissões, chaves e regras de rede precisam de revisão periódica conforme a operação muda.",
          en: "Permissions, keys and network rules need periodic review as operations change.",
        },
      },
      {
        title: { pt: "Recuperação precisa estar pronta", en: "Recovery must be ready" },
        text: {
          pt: "Backup só tem valor quando funciona no momento certo. Rotinas verificadas reduzem o impacto de incidentes.",
          en: "Backups only matter when they work at the right moment. Verified routines reduce the impact of incidents.",
        },
      },
    ],
    faq: [
      {
        question: { pt: "Os custos da nuvem estão incluídos no plano?", en: "Are cloud costs included in the plan?" },
        answer: {
          pt: "Não. O plano cobre o acompanhamento técnico. Custos de provedores, domínios e serviços de terceiros continuam sendo cobrados diretamente pelos respectivos fornecedores.",
          en: "No. The plan covers technical follow-up. Provider, domain and third-party service costs are still billed directly by the respective vendors.",
        },
      },
    ],
  },
];

/** Perguntas comuns a todos os serviços. */
export const sharedPlanFaq: Array<{ question: Localized; answer: Localized }> = [
  {
    question: { pt: "Como funciona a contratação?", en: "How does hiring work?" },
    answer: {
      pt: "Nas modalidades Essencial, Profissional e Excelência, a assinatura mensal é feita pelo link de pagamento seguro do Stripe. Se preferir, converse antes pelo WhatsApp. Depois da assinatura, o projeto é analisado e o escopo do acompanhamento é alinhado com você. O Empresarial começa com uma solicitação de proposta.",
      en: "For the Essential, Professional and Excellence plans, the monthly subscription is made through Stripe's secure payment link. If you prefer, talk first on WhatsApp. After subscribing, the project is reviewed and the follow-up scope is aligned with you. Enterprise starts with a proposal request.",
    },
  },
  {
    question: { pt: "O que diferencia uma funcionalidade simples de uma intermediária?", en: "What separates a simple feature from an intermediate one?" },
    answer: {
      pt: "Uma funcionalidade simples é um ajuste pontual e de baixo impacto, que não altera a arquitetura do projeto. Uma intermediária envolve mais de uma parte do sistema ou uma integração. A classificação é combinada antes da execução.",
      en: "A simple feature is a focused, low-impact change that does not alter the project's architecture. An intermediate one involves more than one part of the system or an integration. The classification is agreed before execution.",
    },
  },
  {
    question: { pt: "Quando faz sentido o plano Empresarial?", en: "When does the Enterprise plan make sense?" },
    answer: {
      pt: "Quando a operação envolve múltiplos projetos, exige condições de atendimento específicas ou precisa de uma quantidade de evoluções que não cabe nas modalidades mensais fixas.",
      en: "When the operation involves multiple projects, requires specific service conditions or needs more improvements than the fixed monthly plans allow.",
    },
  },
  {
    question: { pt: "O plano substitui o orçamento de um projeto novo?", en: "Does the plan replace a quote for a new project?" },
    answer: {
      pt: "Não. Os planos acompanham projetos existentes. Projetos novos, redesigns e módulos de grande porte são orçados à parte.",
      en: "No. The plans follow up on existing projects. New projects, redesigns and large modules are quoted separately.",
    },
  },
];

/* ------------------------------------------------------------------------ */
/* Helpers                                                                  */
/* ------------------------------------------------------------------------ */

export const getServicePlanById = (id: string | undefined) =>
  servicePlans.find((service) => service.id === id);

/** Resolve o serviço pelo segmento da URL no idioma atual (ex.: `comunidade-discord` em PT). */
export const getServicePlanBySlug = (slug: string | undefined, language: PlanLanguage) =>
  servicePlans.find((service) => service.servicePath[language].split("/").pop() === slug);

/** Reaproveita a imagem social da página do serviço (ex.: `/og/servicos-bot-development.png`). */
export const getServicePlanOgImage = (service: ServicePlanConfig, language: PlanLanguage) =>
  `/og/${service.servicePath[language].replace(/^\/+/, "").replace(/\//g, "-")}.png`;

export const getTier = (id: PlanTierId) => planTiers.find((tier) => tier.id === id) as PlanTier;

export const getBenefitLabel = (service: ServicePlanConfig, key: PlanBenefitKey): Localized | null => {
  const override = service.benefitOverrides?.[key];
  if (override === null) return null;
  return override ?? defaultBenefitLabels[key];
};

export const isBenefitAvailable = (service: ServicePlanConfig, key: PlanBenefitKey) =>
  getBenefitLabel(service, key) !== null;

/** Benefícios próprios da modalidade (sem os herdados), já filtrados para o serviço. */
export const getTierBenefits = (service: ServicePlanConfig, tier: PlanTier, language: PlanLanguage) =>
  tier.benefits
    .map((key) => getBenefitLabel(service, key))
    .filter((label): label is Localized => label !== null)
    .map((label) => label[language]);

export const getComparisonRows = (service: ServicePlanConfig) =>
  planComparisonRows
    .filter((row) => row.requires.some((key) => isBenefitAvailable(service, key)))
    .map((row) => ({
      ...row,
      label: service.comparisonLabels?.[row.id] ?? row.label,
      cells: Object.fromEntries(
        Object.entries(row.cells).map(([tierId, cell]) => [
          tierId,
          cell && isBenefitAvailable(service, cell.key) ? cell : null,
        ]),
      ) as Record<PlanTierId, PlanComparisonCell>,
    }));

export const formatPlanPrice = (price: number, language: PlanLanguage) =>
  new Intl.NumberFormat(language === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);

export const getStartingPrice = () =>
  Math.min(...planTiers.map((tier) => tier.monthlyPrice).filter((price): price is number => price !== null));

export const buildPlanWhatsAppMessage = (service: ServicePlanConfig, tier: PlanTier | null, language: PlanLanguage) => {
  const subject = service.contactLabel[language];

  if (!tier) {
    return language === "pt"
      ? `Olá! Gostaria de entender qual plano de acompanhamento técnico faz mais sentido para meu projeto de ${subject}.`
      : `Hi! I'd like to understand which technical follow-up plan makes the most sense for my ${subject} project.`;
  }

  if (tier.monthlyPrice === null) {
    return language === "pt"
      ? `Olá! Gostaria de solicitar uma proposta do plano ${tier.name.pt} de acompanhamento técnico para ${subject}. Posso compartilhar o contexto da operação.`
      : `Hi! I'd like to request a proposal for the ${tier.name.en} technical follow-up plan for ${subject}. I can share the context of the operation.`;
  }

  return language === "pt"
    ? `Olá! Tenho interesse no plano ${tier.name.pt} de acompanhamento técnico para ${subject}. Gostaria de saber mais sobre a contratação.`
    : `Hi! I'm interested in the ${tier.name.en} technical follow-up plan for ${subject}. I'd like to know more about hiring it.`;
};

export const buildPlanWhatsAppUrl = (message: string) =>
  `https://wa.me/${planWhatsAppNumber}?text=${encodeURIComponent(message)}`;
