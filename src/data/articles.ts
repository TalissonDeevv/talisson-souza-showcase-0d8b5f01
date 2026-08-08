import type { MarketTrailArticle } from "./market-trail/types";
import { careerGrowthExpansionArticleIds, careerGrowthExpansionArticles } from "./market-trail/career-growth-expansion";
import { careerMasteryExpansionArticleIds, careerMasteryExpansionArticles } from "./market-trail/career-mastery-expansion";

export interface ArticleData {
  id: string;
  title: { pt: string; en: string };
  excerpt: { pt: string; en: string };
  date: { pt: string; en: string };
  readTime: string;
  path: { pt: string; en: string };
  tags: { pt: string[]; en: string[] };
  publishedDate: string; // ISO for sorting
}

export interface TrailData {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  icon: string;
  path: { pt: string; en: string };
  articleIds: string[];
}

export const trails: TrailData[] = [
  {
    id: 'digital-security',
    title: { pt: 'Segurança Digital', en: 'Digital Security' },
    description: {
      pt: 'Conteúdos sobre proteção de contas, engenharia social, vulnerabilidades, segurança de servidores e boas práticas técnicas.',
      en: 'Content on account protection, social engineering, vulnerabilities, server security, and technical best practices.',
    },
    icon: '🔐',
    path: { pt: '/trilhas/seguranca-digital', en: '/en-us/trails/digital-security' },
    articleIds: ['discord-account-security', 'dependency-vulnerabilities', 'discord-bots-guide'],
  },
  {
    id: 'architecture-infrastructure',
    title: { pt: 'Arquitetura & Infraestrutura', en: 'Architecture & Infrastructure' },
    description: {
      pt: 'Conteúdos sobre hospedagem, deploy, escalabilidade, banco de dados, estrutura de sistemas e decisões arquiteturais.',
      en: 'Content on hosting, deploy, scalability, databases, system structure, and architectural decisions.',
    },
    icon: '💻',
    path: { pt: '/trilhas/arquitetura-infraestrutura', en: '/en-us/trails/architecture-infrastructure' },
    articleIds: ['infrastructure-hosting', 'tech-fundamentals', 'full-stack-development', 'system-development-cost'],
  },
  {
    id: 'community-management',
    title: { pt: 'Gestão de Comunidades no Discord', en: 'Discord Community Management' },
    description: {
      pt: 'Conteúdos sobre moderação, treinamento de equipes, segurança, cultura interna, operação de servidores e crescimento saudável em comunidades no Discord.',
      en: 'Content on moderation, staff training, safety, internal culture, server operations and healthy growth in Discord communities.',
    },
    icon: '🌐',
    path: { pt: '/trilhas/gestao-de-comunidades', en: '/en-us/trails/community-management' },
    articleIds: ['discord-community-engagement', 'discord-community-monetization', 'discord-moderation', 'discord-moderation-training', 'discord-promotion', 'professional-discord-bot', 'discord-bot-niche', 'monetizing-bots', 'discord-bot-rental'],
  },
  {
    id: 'strategy-mindset',
    title: { pt: 'Estratégia & Mentalidade', en: 'Strategy & Mindset' },
    description: {
      pt: 'Conteúdos sobre pensamento crítico, empreendedorismo digital, responsabilidade técnica e tomada de decisão estratégica.',
      en: 'Content on critical thinking, digital entrepreneurship, technical responsibility, and strategic decision-making.',
    },
    icon: '💼',
    path: { pt: '/trilhas/estrategia-mentalidade', en: '/en-us/trails/strategy-mindset' },
    articleIds: ['junior-to-strategic', 'what-companies-seek', 'building-portfolio', 'politics-entrepreneurship', 'clt-to-freelancer', 'vision-and-persistence', 'inpi', 'linkedin-profile-tech', 'eca-digital-anpd', 'dev-financial-growth', 'ai-replacing-devs', 'dev-job-positioning'],
  },
  {
    id: 'market-programming',
    title: { pt: 'Entrando no Mercado de Programação e Crescimento na Carreira', en: 'Entering the Programming Market and Growing Your Career' },
    description: {
      pt: 'Manual gratuito com 140 artigos para acompanhar quem começa a estudar programação, entra no mercado, amadurece tecnicamente e constrói uma carreira com critério.',
      en: 'A free 140 article manual for people starting in programming, entering the market, maturing technically and building a career with judgment.',
    },
    icon: '📐',
    path: { pt: '/trilhas/mercado-programacao', en: '/en-us/trails/market-programming' },
    articleIds: [
      'mt-what-programming-means', 'mt-not-memorizing-syntax', 'mt-logic-over-language', 'mt-how-internet-works', 'mt-frontend-backend-infra', 'mt-code-vs-systems',
      'mt-how-to-study', 'mt-course-college-selftaught', 'mt-realistic-study-plan', 'mt-copying-tutorials', 'mt-reading-documentation', 'mt-learning-to-search',
      'mt-basics-beginners-ignore', 'mt-git-versioning', 'mt-databases-practical', 'mt-what-is-http', 'mt-what-are-apis', 'mt-software-architecture-beginners',
      'mt-student-vs-developer', 'mt-think-like-professional', 'mt-technical-responsibility', 'mt-debugging-over-framework', 'mt-code-organization-maturity', 'mt-basic-security',
      'mt-portfolio-that-impresses', 'mt-beginner-projects', 'mt-what-not-github', 'mt-professional-readme', 'mt-technical-interviews', 'mt-what-companies-evaluate',
      'mt-trend-stack-danger', 'mt-early-specialization', 'mt-course-job-illusion', 'mt-switching-languages', 'mt-excessive-comparison', 'mt-wanting-shortcuts',
      'mt-when-to-specialize', 'mt-choosing-backend-frontend', 'mt-junior-to-mid', 'mt-understanding-business', 'mt-building-reputation', 'mt-remote-work-preparation',
      ...careerGrowthExpansionArticleIds,
      ...careerMasteryExpansionArticleIds,
    ],
  },
];

export function getTrailArticles(trailId: string): ArticleData[] {
  const trail = trails.find((t) => t.id === trailId);
  if (!trail) return [];
  return trail.articleIds
    .map((id) => articles.find((a) => a.id === id))
    .filter(Boolean) as ArticleData[];
}

export const articles: ArticleData[] = [
  {
    id: 'discord-community-engagement',
    title: {
      pt: 'Por que comunidades no Discord morrem tão rápido (e como evitar isso)',
      en: 'Why Discord Communities Die So Fast and How to Avoid It',
    },
    excerpt: {
      pt: 'Um guia profundo sobre engajamento, cultura, liderança, organização e estratégia para construir comunidades no Discord que continuam vivas depois do entusiasmo inicial.',
      en: 'A deep guide on engagement, culture, leadership, organization, and strategy for building Discord communities that remain active after the initial excitement.',
    },
    date: { pt: '8 de Julho, 2026', en: 'July 8, 2026' },
    readTime: '38 min',
    path: { pt: '/artigos/comunidades-discord-morrem-rapido', en: '/en-us/articles/why-discord-communities-die-fast' },
    tags: { pt: ['Discord', 'Comunidade', 'Gestão', 'Engajamento', 'Branding'], en: ['Discord', 'Community', 'Management', 'Engagement', 'Branding'] },
    publishedDate: '2026-07-08',
  },
  {
    id: 'discord-community-monetization',
    title: {
      pt: 'Como monetizar uma comunidade no Discord sem depender apenas de anúncios',
      en: 'How to Monetize a Discord Community Without Depending Only on Ads',
    },
    excerpt: {
      pt: 'Um guia completo sobre monetização ética de comunidades no Discord, com modelos sustentáveis baseados em confiança, valor diário, posicionamento e relacionamento.',
      en: 'A complete guide to ethical Discord community monetization, with sustainable models based on trust, daily value, positioning, and relationships.',
    },
    date: { pt: '8 de Julho, 2026', en: 'July 8, 2026' },
    readTime: '36 min',
    path: { pt: '/artigos/monetizar-comunidade-discord-sem-anuncios', en: '/en-us/articles/monetize-discord-community-without-ads' },
    tags: { pt: ['Discord', 'Comunidade', 'Monetização', 'Empreendedorismo', 'Gestão'], en: ['Discord', 'Community', 'Monetization', 'Entrepreneurship', 'Management'] },
    publishedDate: '2026-07-08',
  },
  {
    id: 'dev-job-positioning',
    title: {
      pt: 'Por Que Desenvolvedores Com Conhecimento Técnico Não Conseguem Vagas',
      en: 'Why Technically Skilled Developers Still Can\'t Get Jobs',
    },
    excerpt: {
      pt: 'O problema quase nunca é técnico. A maioria dos desenvolvedores que não consegue vagas está comunicando habilidades, não valor. Este artigo mostra como o posicionamento profissional define quem avança e quem fica para trás.',
      en: 'The problem is almost never technical. Most developers who can\'t land jobs are communicating skills, not value. This article shows how professional positioning defines who advances and who gets left behind.',
    },
    date: { pt: '5 de Abril, 2026', en: 'April 5, 2026' },
    readTime: '22 min',
    path: { pt: '/artigos/por-que-devs-nao-conseguem-vagas', en: '/en-us/articles/why-devs-cant-get-jobs' },
    tags: { pt: ['Carreira', 'Estratégia', 'Mercado', 'Posicionamento'], en: ['Career', 'Strategy', 'Market', 'Positioning'] },
    publishedDate: '2026-04-05',
  },
  {
    id: 'ai-replacing-devs',
    title: {
      pt: 'A Inteligência Artificial Vai Substituir os Desenvolvedores?',
      en: 'Will Artificial Intelligence Replace Developers?',
    },
    excerpt: {
      pt: 'Uma reflexão honesta e pessoal sobre o papel da IA no desenvolvimento de software, o que realmente muda na profissão e por que o pânico generalizado não faz sentido para quem entende o que significa construir sistemas de verdade.',
      en: 'An honest and personal reflection on the role of AI in software development, what really changes in the profession, and why widespread panic makes no sense for those who understand what building real systems actually means.',
    },
    date: { pt: '3 de Abril, 2026', en: 'April 3, 2026' },
    readTime: '26 min',
    path: { pt: '/artigos/ia-vai-substituir-desenvolvedores', en: '/en-us/articles/will-ai-replace-developers' },
    tags: { pt: ['Inteligência Artificial', 'Carreira', 'Estratégia', 'Mercado'], en: ['Artificial Intelligence', 'Career', 'Strategy', 'Market'] },
    publishedDate: '2026-04-03',
  },
  {
    id: 'dev-financial-growth',
    title: {
      pt: 'Por Que a Maioria dos Desenvolvedores Não Consegue Crescer Financeiramente',
      en: 'Why Most Developers Fail to Grow Financially',
    },
    excerpt: {
      pt: 'Exploramos o paradoxo de desenvolvedores tecnicamente brilhantes que enfrentam estagnação financeira. Este artigo desvenda as raízes desse problema, focando em mentalidade e escolhas de carreira.',
      en: 'We delve into the paradox of technically brilliant developers who face financial stagnation. This article uncovers the roots of this issue, focusing on mindset and career choices.',
    },
    date: { pt: '26 de Março, 2026', en: 'March 26, 2026' },
    readTime: '24 min',
    path: { pt: '/artigos/por-que-devs-nao-crescem-financeiramente', en: '/en-us/articles/why-devs-dont-grow-financially' },
    tags: { pt: ['Carreira', 'Finanças', 'Estratégia', 'Empreendedorismo'], en: ['Career', 'Finance', 'Strategy', 'Entrepreneurship'] },
    publishedDate: '2026-03-26',
  },
  {
    id: 'eca-digital-anpd',
    title: {
      pt: 'ECA Digital e ANPD: O Que o Monitoramento de Plataformas Significa para o Ecossistema Tecnológico Brasileiro',
      en: 'ECA Digital and ANPD: What Platform Monitoring Means for the Brazilian Tech Ecosystem',
    },
    excerpt: {
      pt: 'Análise técnica e regulatória sobre a ação de monitoramento da ANPD relacionada ao ECA Digital, seus impactos para empresas de tecnologia e a relevância da proteção de dados de menores no ambiente digital.',
      en: 'Technical and regulatory analysis of ANPD\'s monitoring action related to the ECA Digital, its impacts on technology companies, and the relevance of protecting minors\' data in the digital environment.',
    },
    date: { pt: '16 de Março, 2026', en: 'March 16, 2026' },
    readTime: '18 min',
    path: { pt: '/artigos/eca-digital-anpd-monitoramento', en: '/en-us/articles/eca-digital-anpd-monitoring' },
    tags: { pt: ['Governança Digital', 'Privacidade', 'Regulação', 'Segurança', 'Estratégia'], en: ['Digital Governance', 'Privacy', 'Regulation', 'Security', 'Strategy'] },
    publishedDate: '2026-03-16',
  },
  {
    id: 'discord-account-security',
    title: {
      pt: 'Proteção de Contas no Discord: Segurança para Quem Possui Ativos de Alto Valor',
      en: 'Discord Account Protection: Security for Those with High-Value Assets',
    },
    excerpt: {
      pt: 'Guia aprofundado sobre segurança no Discord para donos de servidores, desenvolvedores de bots e contas com insígnias de alto valor.',
      en: 'In-depth guide on Discord security for server owners, bot developers, and accounts with high-value badges.',
    },
    date: { pt: '16 de Fevereiro, 2025', en: 'February 16, 2025' },
    readTime: '20 min',
    path: { pt: '/artigos/seguranca-contas-discord', en: '/en-us/articles/discord-account-security' },
    tags: { pt: ['Discord', 'Segurança', 'Engenharia Social', 'Proteção'], en: ['Discord', 'Security', 'Social Engineering', 'Protection'] },
    publishedDate: '2025-02-16',
  },
  {
    id: 'infrastructure-hosting',
    title: {
      pt: 'Infraestrutura e Hospedagem: Critérios Técnicos para Desenvolvedores e Empresas',
      en: 'Infrastructure and Hosting: Technical Criteria for Developers and Companies',
    },
    excerpt: {
      pt: 'Análise técnica e estratégica sobre infraestrutura e hospedagem para sites, bots e bancos de dados.',
      en: 'Technical and strategic analysis on infrastructure and hosting for websites, bots, and databases.',
    },
    date: { pt: '16 de Fevereiro, 2025', en: 'February 16, 2025' },
    readTime: '18 min',
    path: { pt: '/artigos/infraestrutura-hospedagem', en: '/en-us/articles/infrastructure-hosting' },
    tags: { pt: ['Infraestrutura', 'Hospedagem', 'Arquitetura', 'DevOps'], en: ['Infrastructure', 'Hosting', 'Architecture', 'DevOps'] },
    publishedDate: '2025-02-16',
  },
  {
    id: 'junior-to-strategic',
    title: {
      pt: 'Como Evoluir de Desenvolvedor Júnior para Profissional Estratégico',
      en: 'How to Evolve from Junior Developer to Strategic Professional',
    },
    excerpt: {
      pt: 'Reflexão sobre a jornada de evolução profissional, mentalidade estratégica e o que realmente separa um desenvolvedor júnior de um profissional maduro.',
      en: 'Reflection on the professional evolution journey, strategic mindset, and what truly separates a junior developer from a mature professional.',
    },
    date: { pt: '15 de Fevereiro, 2025', en: 'February 15, 2025' },
    readTime: '16 min',
    path: { pt: '/artigos/junior-para-estrategico', en: '/en-us/articles/junior-to-strategic' },
    tags: { pt: ['Carreira', 'Estratégia', 'Maturidade'], en: ['Career', 'Strategy', 'Maturity'] },
    publishedDate: '2025-02-15',
  },
  {
    id: 'what-companies-seek',
    title: {
      pt: 'O Que Empresas Realmente Procuram em um Desenvolvedor',
      en: 'What Companies Really Look for in a Developer',
    },
    excerpt: {
      pt: 'Análise estratégica sobre o que o mercado realmente valoriza em desenvolvedores, além das competências técnicas e frameworks da moda.',
      en: 'Strategic analysis on what the market truly values in developers, beyond technical skills and trendy frameworks.',
    },
    date: { pt: '15 de Fevereiro, 2025', en: 'February 15, 2025' },
    readTime: '15 min',
    path: { pt: '/artigos/o-que-empresas-procuram', en: '/en-us/articles/what-companies-seek' },
    tags: { pt: ['Carreira', 'Mercado', 'Profissionalismo'], en: ['Career', 'Market', 'Professionalism'] },
    publishedDate: '2025-02-15',
  },
  {
    id: 'building-portfolio',
    title: {
      pt: 'Como Construir Portfólio com Projetos Relevantes',
      en: 'How to Build a Portfolio with Relevant Projects',
    },
    excerpt: {
      pt: 'Guia estratégico sobre como construir um portfólio que demonstre valor real, não apenas quantidade de repositórios.',
      en: 'Strategic guide on building a portfolio that demonstrates real value, not just repository count.',
    },
    date: { pt: '15 de Fevereiro, 2025', en: 'February 15, 2025' },
    readTime: '14 min',
    path: { pt: '/artigos/construir-portfolio', en: '/en-us/articles/building-portfolio' },
    tags: { pt: ['Portfólio', 'Carreira', 'Posicionamento'], en: ['Portfolio', 'Career', 'Positioning'] },
    publishedDate: '2025-02-15',
  },
  {
    id: 'dependency-vulnerabilities',
    title: {
      pt: 'Vulnerabilidade ao Instalar Dependências: O Risco que Ninguém Leva a Sério',
      en: 'Vulnerability When Installing Dependencies: The Risk Nobody Takes Seriously',
    },
    excerpt: {
      pt: 'Análise sobre os riscos de segurança ao instalar dependências em projetos de software, responsabilidade do desenvolvedor e mentalidade preventiva.',
      en: 'Analysis on security risks when installing dependencies in software projects, developer responsibility, and preventive mindset.',
    },
    date: { pt: '14 de Fevereiro, 2025', en: 'February 14, 2025' },
    readTime: '16 min',
    path: { pt: '/artigos/vulnerabilidade-dependencias', en: '/en-us/articles/dependency-vulnerabilities' },
    tags: { pt: ['Segurança', 'Dependências', 'npm'], en: ['Security', 'Dependencies', 'npm'] },
    publishedDate: '2025-02-14',
  },
  {
    id: 'politics-entrepreneurship',
    title: {
      pt: 'Política e Empreendedorismo: Por Que Estudar Antes de Opinar',
      en: 'Politics and Entrepreneurship: Why Study Before Opining',
    },
    excerpt: {
      pt: 'Reflexão sobre como decisões políticas impactam negócios e tecnologia, a importância do pensamento crítico e a responsabilidade ao produzir conteúdo.',
      en: 'Reflection on how political decisions impact business and technology, the importance of critical thinking, and responsibility when producing content.',
    },
    date: { pt: '14 de Fevereiro, 2025', en: 'February 14, 2025' },
    readTime: '17 min',
    path: { pt: '/artigos/politica-empreendedorismo', en: '/en-us/articles/politics-entrepreneurship' },
    tags: { pt: ['Política', 'Empreendedorismo', 'Pensamento Crítico'], en: ['Politics', 'Entrepreneurship', 'Critical Thinking'] },
    publishedDate: '2025-02-14',
  },
  {
    id: 'tech-fundamentals',
    title: {
      pt: 'Fundamentos de Tecnologia: A Lógica Por Trás dos Sistemas',
      en: 'Technology Fundamentals: The Logic Behind Systems',
    },
    excerpt: {
      pt: 'Reflexão sobre a importância dos fundamentos de tecnologia, raciocínio lógico, arquitetura de sistemas e pensamento estruturado antes das ferramentas.',
      en: 'Reflection on the importance of technology fundamentals, logical reasoning, systems architecture, and structured thinking before tools.',
    },
    date: { pt: '14 de Fevereiro, 2025', en: 'February 14, 2025' },
    readTime: '15 min',
    path: { pt: '/artigos/fundamentos-tecnologia', en: '/en-us/articles/tech-fundamentals' },
    tags: { pt: ['Fundamentos', 'Arquitetura', 'Lógica'], en: ['Fundamentals', 'Architecture', 'Logic'] },
    publishedDate: '2025-02-14',
  },
  {
    id: 'discord-promotion',
    title: {
      pt: 'Como Divulgar Comunidades e Bots no Discord de Forma Estratégica',
      en: 'How to Strategically Promote Discord Communities and Bots',
    },
    excerpt: {
      pt: 'Guia estratégico sobre divulgação de comunidades e bots no Discord com foco em crescimento orgânico, posicionamento e autoridade.',
      en: 'Strategic guide on promoting Discord communities and bots focusing on organic growth, positioning, and authority.',
    },
    date: { pt: '14 de Fevereiro, 2025', en: 'February 14, 2025' },
    readTime: '16 min',
    path: { pt: '/artigos/divulgacao-discord', en: '/en-us/articles/discord-promotion' },
    tags: { pt: ['Discord', 'Divulgação', 'Crescimento'], en: ['Discord', 'Promotion', 'Growth'] },
    publishedDate: '2025-02-14',
  },
  {
    id: 'discord-moderation',
    title: {
      pt: 'Moderação, Gestão e Administração de Servidores Discord',
      en: 'Moderation, Management and Administration of Discord Servers',
    },
    excerpt: {
      pt: 'Guia sobre moderação, gestão e administração de servidores Discord com foco em responsabilidade, estrutura organizacional, regras e segurança.',
      en: 'Guide on Discord server moderation, management, and administration focusing on responsibility, organizational structure, rules, and security.',
    },
    date: { pt: '14 de Fevereiro, 2025', en: 'February 14, 2025' },
    readTime: '18 min',
    path: { pt: '/artigos/moderacao-discord', en: '/en-us/articles/discord-moderation' },
    tags: { pt: ['Discord', 'Moderação', 'Gestão'], en: ['Discord', 'Moderation', 'Management'] },
    publishedDate: '2025-02-14',
  },
  {
    id: 'discord-moderation-training',
    title: {
      pt: 'Quando o Moderador Sabe a Regra, Mas Ainda Não Sabe Decidir',
      en: 'When the Moderator Knows the Rule but Still Cannot Decide',
    },
    excerpt: {
      pt: 'Uma análise prática sobre treinamento de equipes no Discord a partir de respostas reais de administradores e moderadores, com foco em punições, golpes, postura e tomada de decisão.',
      en: 'A practical analysis of Discord staff training based on real answers from administrators and moderators, focused on punishments, scams, posture and decision making.',
    },
    date: { pt: '8 de Agosto, 2026', en: 'August 8, 2026' },
    readTime: '24 min',
    path: { pt: '/artigos/treinamento-moderacao-discord', en: '/en-us/articles/discord-moderation-training' },
    tags: { pt: ['Discord', 'Moderação', 'Treinamento', 'Trust & Safety', 'Comunidades'], en: ['Discord', 'Moderation', 'Training', 'Trust & Safety', 'Communities'] },
    publishedDate: '2026-08-08',
  },
  {
    id: 'clt-to-freelancer',
    title: {
      pt: 'De CLT a Freelancer: Como Fazer a Transição com Estratégia',
      en: 'From Employee to Freelancer: How to Make the Transition Strategically',
    },
    excerpt: {
      pt: 'Guia estratégico para desenvolvedores CLT que desejam migrar para o mercado freelancer com posicionamento, autoridade e planejamento profissional.',
      en: 'Strategic guide for employed developers who want to migrate to the freelance market with positioning, authority, and professional planning.',
    },
    date: { pt: '13 de Fevereiro, 2025', en: 'February 13, 2025' },
    readTime: '18 min',
    path: { pt: '/artigos/clt-para-freelancer', en: '/en-us/articles/clt-to-freelancer' },
    tags: { pt: ['Carreira', 'Freelancer', 'Estratégia'], en: ['Career', 'Freelancer', 'Strategy'] },
    publishedDate: '2025-02-13',
  },
  {
    id: 'inpi',
    title: {
      pt: 'Como Registrar uma Marca no INPI',
      en: 'How to Register a Trademark at INPI',
    },
    excerpt: {
      pt: 'Guia completo e didático sobre o processo de registro de marca no INPI para empreendedores, freelancers, startups e donos de pequenas empresas no Brasil.',
      en: 'A complete and didactic guide on the trademark registration process at INPI for entrepreneurs, freelancers, startups, and small business owners in Brazil.',
    },
    date: { pt: '11 de Fevereiro, 2025', en: 'February 11, 2025' },
    readTime: '20 min',
    path: { pt: '/artigos/inpi', en: '/en-us/articles/inpi' },
    tags: { pt: ['Registro de Marca', 'INPI', 'Empreendedorismo'], en: ['Trademark', 'INPI', 'Entrepreneurship'] },
    publishedDate: '2025-02-11',
  },
  {
    id: 'professional-discord-bot',
    title: {
      pt: 'Como Criar um Bot Profissional no Discord',
      en: 'How to Create a Professional Discord Bot',
    },
    excerpt: {
      pt: 'Guia estratégico sobre como criar um bot profissional no Discord com foco em planejamento, qualidade, postura e visão de longo prazo.',
      en: 'Strategic guide on how to create a professional Discord bot focusing on planning, quality, conduct, and long-term vision.',
    },
    date: { pt: '12 de Fevereiro, 2025', en: 'February 12, 2025' },
    readTime: '15 min',
    path: { pt: '/artigos/bot-profissional-discord', en: '/en-us/articles/professional-discord-bot' },
    tags: { pt: ['Discord', 'Bots', 'Gestão'], en: ['Discord', 'Bots', 'Management'] },
    publishedDate: '2025-02-12',
  },
  {
    id: 'discord-bot-rental',
    title: {
      pt: 'Por que Alugar Bots no Discord Está Cada Vez Mais Nichado',
      en: 'Why Discord Bot Rental Is Becoming Increasingly Niche',
    },
    excerpt: {
      pt: 'Análise estratégica sobre o mercado de aluguel de bots no Discord, saturação, falta de originalidade e os caminhos para construir projetos genuínos.',
      en: 'Strategic analysis on the Discord bot rental market, saturation, lack of originality, and paths to building genuine projects.',
    },
    date: { pt: '12 de Fevereiro, 2025', en: 'February 12, 2025' },
    readTime: '12 min',
    path: { pt: '/artigos/aluguel-bots-discord', en: '/en-us/articles/discord-bot-rental' },
    tags: { pt: ['Discord', 'Mercado', 'Estratégia'], en: ['Discord', 'Market', 'Strategy'] },
    publishedDate: '2025-02-12',
  },
  {
    id: 'monetizing-bots',
    title: {
      pt: 'Como Monetizar Bots no Discord Corretamente',
      en: 'How to Monetize Discord Bots Correctly',
    },
    excerpt: {
      pt: 'Guia estratégico sobre como monetizar bots no Discord de forma profissional, sustentável e transparente.',
      en: 'Strategic guide on how to monetize Discord bots professionally, sustainably, and transparently.',
    },
    date: { pt: '12 de Fevereiro, 2025', en: 'February 12, 2025' },
    readTime: '14 min',
    path: { pt: '/artigos/monetizar-bots', en: '/en-us/articles/monetizing-bots' },
    tags: { pt: ['Discord', 'Monetização', 'Negócios'], en: ['Discord', 'Monetization', 'Business'] },
    publishedDate: '2025-02-12',
  },
  {
    id: 'discord-bot-niche',
    title: {
      pt: 'Como Criar um Nicho Para Seu Projeto de Bot no Discord',
      en: 'How to Create a Niche for Your Discord Bot Project',
    },
    excerpt: {
      pt: 'Guia estratégico sobre como encontrar e construir um nicho para projetos de bots no Discord, com foco em diferenciação e posicionamento.',
      en: 'Strategic guide on finding and building a niche for Discord bot projects, focusing on differentiation and positioning.',
    },
    date: { pt: '12 de Fevereiro, 2025', en: 'February 12, 2025' },
    readTime: '13 min',
    path: { pt: '/artigos/nicho-bot-discord', en: '/en-us/articles/discord-bot-niche' },
    tags: { pt: ['Discord', 'Nicho', 'Posicionamento'], en: ['Discord', 'Niche', 'Positioning'] },
    publishedDate: '2025-02-12',
  },
  {
    id: 'full-stack-development',
    title: {
      pt: 'O Que é Desenvolvimento Full Stack?',
      en: 'What is Full Stack Development?',
    },
    excerpt: {
      pt: 'Entenda o que realmente significa ser um desenvolvedor full stack, as competências envolvidas e o valor estratégico desse perfil.',
      en: 'Understand what it really means to be a full stack developer, the competencies involved, and the strategic value of this profile.',
    },
    date: { pt: '12 de Fevereiro, 2025', en: 'February 12, 2025' },
    readTime: '12 min',
    path: { pt: '/artigos/desenvolvimento-full-stack', en: '/en-us/articles/full-stack-development' },
    tags: { pt: ['Full Stack', 'Carreira', 'Tecnologia'], en: ['Full Stack', 'Career', 'Technology'] },
    publishedDate: '2025-02-12',
  },
  {
    id: 'system-development-cost',
    title: {
      pt: 'Quanto Custa Desenvolver um Sistema?',
      en: 'How Much Does It Cost to Develop a System?',
    },
    excerpt: {
      pt: 'Entenda os fatores que definem o custo de desenvolvimento de um sistema e como planejar seu investimento em tecnologia.',
      en: 'Understand the factors that define system development costs and how to plan your technology investment.',
    },
    date: { pt: '12 de Fevereiro, 2025', en: 'February 12, 2025' },
    readTime: '12 min',
    path: { pt: '/artigos/custo-desenvolvimento-sistema', en: '/en-us/articles/system-development-cost' },
    tags: { pt: ['Desenvolvimento', 'Custos', 'Estratégia'], en: ['Development', 'Costs', 'Strategy'] },
    publishedDate: '2025-02-12',
  },
  {
    id: 'vision-and-persistence',
    title: {
      pt: 'Se a Gente Consegue Imaginar, É Porque É Possível',
      en: "If We Can Imagine It, It's Because It's Possible",
    },
    excerpt: {
      pt: 'Reflexão sobre visão, persistência e empreendedorismo. Toda grande empresa começou com alguém imaginando algo que ainda não existia.',
      en: "A reflection on vision, persistence and entrepreneurship. Every great company started with someone imagining something that didn't exist yet.",
    },
    date: { pt: '10 de Fevereiro, 2025', en: 'February 10, 2025' },
    readTime: '8 min',
    path: { pt: '/artigos/visao-e-persistencia', en: '/en-us/articles/vision-and-persistence' },
    tags: { pt: ['Empreendedorismo', 'Visão', 'Persistência'], en: ['Entrepreneurship', 'Vision', 'Persistence'] },
    publishedDate: '2025-02-10',
  },
  {
    id: 'discord-bots-guide',
    title: {
      pt: 'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
      en: 'Maturity, Management & Security Guide for Discord Bot Projects',
    },
    excerpt: {
      pt: 'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord, abordando boas práticas, permissões e postura profissional.',
      en: 'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions and professional conduct.',
    },
    date: { pt: '7 de Fevereiro, 2025', en: 'February 7, 2025' },
    readTime: '25 min',
    path: { pt: '/artigos/bots-discord', en: '/en-us/articles/discord-bots' },
    tags: { pt: ['Discord', 'Segurança', 'Gestão'], en: ['Discord', 'Security', 'Management'] },
    publishedDate: '2025-02-07',
  },
  {
    id: 'linkedin-profile-tech',
    title: {
      pt: 'Como Construir um Perfil Forte no LinkedIn e se Posicionar no Mercado de Tecnologia',
      en: 'How to Build a Strong LinkedIn Profile and Position Yourself in the Tech Market',
    },
    excerpt: {
      pt: 'Guia completo e estratégico sobre como criar um perfil forte no LinkedIn, chamar atenção de recrutadores e se posicionar no mercado de tecnologia.',
      en: 'Complete strategic guide on building a strong LinkedIn profile, catching recruiters attention and positioning yourself in the tech market.',
    },
    date: { pt: '24 de Fevereiro, 2025', en: 'February 24, 2025' },
    readTime: '22 min',
    path: { pt: '/artigos/perfil-linkedin-tecnologia', en: '/en-us/articles/linkedin-profile-tech' },
    tags: { pt: ['LinkedIn', 'Carreira', 'Posicionamento', 'Mercado de Tecnologia', 'Networking'], en: ['LinkedIn', 'Career', 'Positioning', 'Tech Market', 'Networking'] },
    publishedDate: '2025-02-24',
  },
  // ===== Market Trail Articles (42 articles) =====
  { id: 'mt-what-programming-means', title: { pt: 'O Que Realmente Significa Saber Programar', en: 'What It Really Means to Know How to Program' }, excerpt: { pt: 'Análise sobre o que diferencia quem sabe programar de quem apenas reproduz código, com foco em raciocínio lógico e resolução de problemas.', en: 'Analysis on what separates those who know how to program from those who merely reproduce code, focusing on logical reasoning and problem-solving.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/o-que-significa-saber-programar', en: '/en-us/articles/what-programming-really-means' }, tags: { pt: ['Fundamentos', 'Programação', 'Carreira'], en: ['Fundamentals', 'Programming', 'Career'] }, publishedDate: '2026-02-19' },
  { id: 'mt-not-memorizing-syntax', title: { pt: 'Programar Não É Decorar Sintaxe', en: "Programming Is Not Memorizing Syntax" }, excerpt: { pt: 'Por que focar em decorar comandos é uma armadilha e como desenvolver a mentalidade correta para resolver problemas reais com código.', en: 'Why focusing on memorizing commands is a trap and how to develop the right mindset to solve real problems with code.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/programar-nao-e-decorar-sintaxe', en: '/en-us/articles/programming-is-not-memorizing-syntax' }, tags: { pt: ['Fundamentos', 'Mentalidade', 'Programação'], en: ['Fundamentals', 'Mindset', 'Programming'] }, publishedDate: '2026-02-19' },
  { id: 'mt-logic-over-language', title: { pt: 'Por Que Lógica É Mais Importante Que Linguagem', en: 'Why Logic Is More Important Than Language' }, excerpt: { pt: 'Entenda por que dominar lógica de programação é mais estratégico do que aprender múltiplas linguagens sem profundidade conceitual.', en: 'Understand why mastering programming logic is more strategic than learning multiple languages without conceptual depth.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/logica-mais-importante-que-linguagem', en: '/en-us/articles/logic-more-important-than-language' }, tags: { pt: ['Lógica', 'Fundamentos', 'Programação'], en: ['Logic', 'Fundamentals', 'Programming'] }, publishedDate: '2026-02-19' },
  { id: 'mt-how-internet-works', title: { pt: 'Como a Internet Realmente Funciona (E Por Que Você Deveria Saber Isso)', en: 'How the Internet Really Works (And Why You Should Know This)' }, excerpt: { pt: 'Explicação prática sobre o funcionamento da internet, DNS, servidores e protocolos para desenvolvedores.', en: 'Practical explanation of how the internet works, DNS, servers, and protocols for developers.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/como-internet-funciona', en: '/en-us/articles/how-the-internet-really-works' }, tags: { pt: ['Internet', 'Infraestrutura', 'Fundamentos'], en: ['Internet', 'Infrastructure', 'Fundamentals'] }, publishedDate: '2026-02-19' },
  { id: 'mt-frontend-backend-infra', title: { pt: 'O Que Frontend, Backend e Infraestrutura Realmente Fazem', en: 'What Frontend, Backend and Infrastructure Really Do' }, excerpt: { pt: 'Diferenças reais entre frontend, backend e infraestrutura com foco em responsabilidades e competências.', en: 'Real differences between frontend, backend, and infrastructure focusing on responsibilities and competencies.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/frontend-backend-infraestrutura', en: '/en-us/articles/frontend-backend-infrastructure' }, tags: { pt: ['Frontend', 'Backend', 'Infraestrutura'], en: ['Frontend', 'Backend', 'Infrastructure'] }, publishedDate: '2026-02-19' },
  { id: 'mt-code-vs-systems', title: { pt: 'A Diferença Entre Aprender Código e Entender Sistemas', en: 'The Difference Between Learning Code and Understanding Systems' }, excerpt: { pt: 'Por que entender sistemas completos é mais valioso do que dominar uma linguagem isoladamente.', en: 'Why understanding complete systems is more valuable than mastering a language in isolation.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/aprender-codigo-vs-entender-sistemas', en: '/en-us/articles/learning-code-vs-understanding-systems' }, tags: { pt: ['Sistemas', 'Arquitetura', 'Visão Técnica'], en: ['Systems', 'Architecture', 'Technical Vision'] }, publishedDate: '2026-02-19' },
  { id: 'mt-how-to-study', title: { pt: 'Como Estudar Programação Sem Se Perder', en: 'How to Study Programming Without Getting Lost' }, excerpt: { pt: 'Estratégias práticas para organizar o aprendizado e evitar dispersão no estudo de programação.', en: 'Practical strategies for organizing learning and avoiding dispersion when studying programming.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/como-estudar-programacao', en: '/en-us/articles/how-to-study-programming' }, tags: { pt: ['Estudo', 'Organização', 'Aprendizado'], en: ['Study', 'Organization', 'Learning'] }, publishedDate: '2026-02-19' },
  { id: 'mt-course-college-selftaught', title: { pt: 'Vale a Pena Fazer Faculdade para Trabalhar com Programação?', en: 'Is College Worth It for a Programming Career?' }, excerpt: { pt: 'Análise estratégica e comparativa entre ADS, Ciência da Computação, Sistemas de Informação e Engenharia da Computação. com cenários reais e limitações honestas.', en: 'Strategic and comparative analysis between IT degrees, Computer Science, Information Systems, and Computer Engineering. with real scenarios and honest limitations.' }, date: { pt: '27 de Fevereiro, 2026', en: 'February 27, 2026' }, readTime: '35 min', path: { pt: '/artigos/curso-faculdade-ou-autodidata', en: '/en-us/articles/course-college-or-self-taught' }, tags: { pt: ['Formação', 'Carreira', 'Educação', 'Faculdade', 'Estratégia'], en: ['Education', 'Career', 'College', 'Strategy', 'Training'] }, publishedDate: '2026-02-27' },
  { id: 'mt-realistic-study-plan', title: { pt: 'Como Montar um Plano de Estudo Realista', en: 'How to Build a Realistic Study Plan' }, excerpt: { pt: 'Como estruturar um plano de estudos que funcione na prática e mantenha consistência de longo prazo.', en: 'How to structure a study plan that works in practice and maintains long-term consistency.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/plano-de-estudo-realista', en: '/en-us/articles/realistic-study-plan' }, tags: { pt: ['Estudo', 'Planejamento', 'Disciplina'], en: ['Study', 'Planning', 'Discipline'] }, publishedDate: '2026-02-19' },
  { id: 'mt-copying-tutorials', title: { pt: 'Por Que Copiar Tutorial Não Te Transforma em Desenvolvedor', en: "Why Copying Tutorials Won't Transform You Into a Developer" }, excerpt: { pt: 'Como a dependência de tutoriais limita o desenvolvimento e o que fazer para ir além.', en: 'How tutorial dependency limits development and what to do to go beyond.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/copiar-tutorial-nao-transforma', en: '/en-us/articles/copying-tutorials-wont-transform-you' }, tags: { pt: ['Aprendizado', 'Autonomia', 'Prática'], en: ['Learning', 'Autonomy', 'Practice'] }, publishedDate: '2026-02-19' },
  { id: 'mt-reading-documentation', title: { pt: 'Como Aprender Lendo Documentação', en: 'How to Learn by Reading Documentation' }, excerpt: { pt: 'A habilidade de ler e interpretar documentação técnica como diferencial profissional.', en: 'The skill of reading and interpreting technical documentation as a professional differentiator.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/aprender-ler-documentacao', en: '/en-us/articles/learning-to-read-documentation' }, tags: { pt: ['Documentação', 'Autonomia', 'Profissionalismo'], en: ['Documentation', 'Autonomy', 'Professionalism'] }, publishedDate: '2026-02-19' },
  { id: 'mt-learning-to-search', title: { pt: 'Aprender a Pesquisar É Uma Habilidade Obrigatória', en: 'Learning to Search Is a Mandatory Skill' }, excerpt: { pt: 'Como a capacidade de pesquisar de forma eficiente separa profissionais autônomos de dependentes.', en: 'How the ability to search efficiently separates autonomous professionals from dependent ones.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/aprender-a-pesquisar', en: '/en-us/articles/learning-to-search' }, tags: { pt: ['Pesquisa', 'Autonomia', 'Habilidades'], en: ['Research', 'Autonomy', 'Skills'] }, publishedDate: '2026-02-19' },
  { id: 'mt-basics-beginners-ignore', title: { pt: 'O Básico Que Todo Iniciante Ignora (E Paga o Preço Depois)', en: 'The Basics Every Beginner Ignores (And Pays the Price Later)' }, excerpt: { pt: 'Os fundamentos técnicos que iniciantes frequentemente pulam e como isso compromete toda a evolução profissional posterior.', en: 'The technical fundamentals beginners frequently skip and how this compromises all subsequent professional evolution.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/basico-que-iniciante-ignora', en: '/en-us/articles/basics-beginners-ignore' }, tags: { pt: ['Fundamentos', 'Iniciantes', 'Base Técnica'], en: ['Fundamentals', 'Beginners', 'Technical Base'] }, publishedDate: '2026-02-19' },
  { id: 'mt-git-versioning', title: { pt: 'Por Que Aprender Git e Versionamento Cedo Muda Tudo', en: 'Why Learning Git and Versioning Early Changes Everything' }, excerpt: { pt: 'Como o domínio de Git e versionamento de código transforma a forma como o desenvolvedor trabalha e colabora.', en: 'How mastering Git and code versioning transforms how developers work and collaborate.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/git-versionamento', en: '/en-us/articles/git-and-versioning' }, tags: { pt: ['Git', 'Versionamento', 'Colaboração'], en: ['Git', 'Versioning', 'Collaboration'] }, publishedDate: '2026-02-19' },
  { id: 'mt-databases-practical', title: { pt: 'Banco de Dados Explicado de Forma Prática', en: 'Databases Explained Practically' }, excerpt: { pt: 'Introdução prática a bancos de dados: o que são, como funcionam e por que todo desenvolvedor precisa entendê-los.', en: 'Practical introduction to databases: what they are, how they work, and why every developer needs to understand them.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/banco-de-dados-pratico', en: '/en-us/articles/databases-explained-practically' }, tags: { pt: ['Banco de Dados', 'Fundamentos', 'Backend'], en: ['Database', 'Fundamentals', 'Backend'] }, publishedDate: '2026-02-19' },
  { id: 'mt-what-is-http', title: { pt: 'O Que É HTTP e Por Que Todo Dev Deveria Entender', en: 'What Is HTTP and Why Every Dev Should Understand It' }, excerpt: { pt: 'Explicação prática do protocolo HTTP, métodos, status codes e como esse conhecimento impacta o trabalho diário do desenvolvedor.', en: 'Practical explanation of the HTTP protocol, methods, status codes, and how this knowledge impacts a developer\'s daily work.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/o-que-e-http', en: '/en-us/articles/what-is-http' }, tags: { pt: ['HTTP', 'Web', 'Fundamentos'], en: ['HTTP', 'Web', 'Fundamentals'] }, publishedDate: '2026-02-19' },
  { id: 'mt-what-are-apis', title: { pt: 'O Que São APIs e Como Realmente Funcionam', en: 'What APIs Are and How They Really Work' }, excerpt: { pt: 'Explicação clara sobre APIs, contratos de comunicação entre sistemas e como utilizá-las de forma profissional.', en: 'Clear explanation of APIs, communication contracts between systems, and how to use them professionally.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/o-que-sao-apis', en: '/en-us/articles/what-are-apis' }, tags: { pt: ['APIs', 'Integração', 'Backend'], en: ['APIs', 'Integration', 'Backend'] }, publishedDate: '2026-02-19' },
  { id: 'mt-software-architecture-beginners', title: { pt: 'O Que É Arquitetura de Software (Mesmo Para Iniciantes)', en: 'What Is Software Architecture (Even for Beginners)' }, excerpt: { pt: 'Introdução acessível à arquitetura de software: como decisões estruturais afetam o futuro de qualquer projeto.', en: 'Accessible introduction to software architecture: how structural decisions affect any project\'s future.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/arquitetura-software-iniciantes', en: '/en-us/articles/software-architecture-for-beginners' }, tags: { pt: ['Arquitetura', 'Fundamentos', 'Sistemas'], en: ['Architecture', 'Fundamentals', 'Systems'] }, publishedDate: '2026-02-19' },
  { id: 'mt-student-vs-developer', title: { pt: 'A Diferença Entre Estudante de Programação e Desenvolvedor', en: 'The Difference Between Programming Student and Developer' }, excerpt: { pt: 'O que separa alguém que estuda programação de alguém que trabalha profissionalmente como desenvolvedor.', en: 'What separates someone studying programming from someone working professionally as a developer.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/estudante-vs-desenvolvedor', en: '/en-us/articles/student-vs-developer' }, tags: { pt: ['Carreira', 'Mentalidade', 'Profissionalismo'], en: ['Career', 'Mindset', 'Professionalism'] }, publishedDate: '2026-02-19' },
  { id: 'mt-think-like-professional', title: { pt: 'Como Pensar Como um Programador Profissional', en: 'How to Think Like a Professional Programmer' }, excerpt: { pt: 'Como desenvolver o raciocínio e a postura de um programador que entrega valor real em ambientes profissionais.', en: 'How to develop the reasoning and posture of a programmer who delivers real value in professional environments.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/pensar-como-programador-profissional', en: '/en-us/articles/think-like-a-professional-programmer' }, tags: { pt: ['Mentalidade', 'Profissionalismo', 'Raciocínio'], en: ['Mindset', 'Professionalism', 'Reasoning'] }, publishedDate: '2026-02-19' },
  { id: 'mt-technical-responsibility', title: { pt: 'Seu Código Impacta Pessoas', en: 'Your Code Impacts People' }, excerpt: { pt: 'Reflexão sobre como decisões técnicas afetam usuários reais e a importância da responsabilidade no desenvolvimento.', en: 'Reflection on how technical decisions affect real users and the importance of responsibility in development.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/responsabilidade-tecnica', en: '/en-us/articles/technical-responsibility' }, tags: { pt: ['Responsabilidade', 'Ética', 'Profissionalismo'], en: ['Responsibility', 'Ethics', 'Professionalism'] }, publishedDate: '2026-02-19' },
  { id: 'mt-debugging-over-framework', title: { pt: 'Por Que Aprender a Debugar É Mais Importante Que Aprender Framework', en: 'Why Learning to Debug Is More Important Than Learning a Framework' }, excerpt: { pt: 'A habilidade de diagnosticar e resolver problemas em código é mais duradoura e valiosa do que qualquer framework específico.', en: 'The ability to diagnose and solve code problems is more lasting and valuable than any specific framework.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/debugar-mais-importante-que-framework', en: '/en-us/articles/debugging-more-important-than-framework' }, tags: { pt: ['Debug', 'Fundamentos', 'Resolução de Problemas'], en: ['Debug', 'Fundamentals', 'Problem Solving'] }, publishedDate: '2026-02-19' },
  { id: 'mt-code-organization-maturity', title: { pt: 'Organização de Código É Maturidade', en: 'Code Organization Is Maturity' }, excerpt: { pt: 'Como a forma de organizar código reflete diretamente o nível de maturidade profissional de um desenvolvedor.', en: 'How code organization directly reflects a developer\'s professional maturity level.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/organizacao-codigo-maturidade', en: '/en-us/articles/code-organization-is-maturity' }, tags: { pt: ['Organização', 'Código', 'Maturidade'], en: ['Organization', 'Code', 'Maturity'] }, publishedDate: '2026-02-19' },
  { id: 'mt-basic-security', title: { pt: 'Segurança Básica Que Todo Iniciante Deveria Saber', en: 'Basic Security Every Beginner Should Know' }, excerpt: { pt: 'Práticas fundamentais de segurança que todo desenvolvedor deveria incorporar desde o início da carreira.', en: 'Fundamental security practices every developer should incorporate from the start of their career.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/seguranca-basica-iniciante', en: '/en-us/articles/basic-security-for-beginners' }, tags: { pt: ['Segurança', 'Fundamentos', 'Boas Práticas'], en: ['Security', 'Fundamentals', 'Best Practices'] }, publishedDate: '2026-02-19' },
  { id: 'mt-portfolio-that-impresses', title: { pt: 'Como Montar um Portfólio Que Realmente Chama Atenção', en: 'How to Build a Portfolio That Actually Impresses' }, excerpt: { pt: 'Estratégias para construir um portfólio de desenvolvimento que demonstre valor real e não apenas quantidade.', en: 'Strategies to build a development portfolio that demonstrates real value, not just quantity.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/portfolio-que-impressiona', en: '/en-us/articles/portfolio-that-actually-impresses' }, tags: { pt: ['Portfólio', 'Carreira', 'Posicionamento'], en: ['Portfolio', 'Career', 'Positioning'] }, publishedDate: '2026-02-19' },
  { id: 'mt-beginner-projects', title: { pt: 'Projetos Que Fazem Sentido Para Iniciantes', en: 'Projects That Make Sense for Beginners' }, excerpt: { pt: 'Como escolher projetos de desenvolvimento que acelerem o aprendizado e demonstrem competência real.', en: 'How to choose development projects that accelerate learning and demonstrate real competence.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/projetos-para-iniciantes', en: '/en-us/articles/projects-that-make-sense-for-beginners' }, tags: { pt: ['Projetos', 'Iniciantes', 'Prática'], en: ['Projects', 'Beginners', 'Practice'] }, publishedDate: '2026-02-19' },
  { id: 'mt-what-not-github', title: { pt: 'O Que Não Colocar no Seu GitHub', en: 'What Not to Put on Your GitHub' }, excerpt: { pt: 'Erros comuns que enfraquecem o perfil GitHub de um desenvolvedor e como manter um repositório profissional.', en: 'Common mistakes that weaken a developer\'s GitHub profile and how to maintain a professional repository.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/o-que-nao-colocar-no-github', en: '/en-us/articles/what-not-to-put-on-github' }, tags: { pt: ['GitHub', 'Portfólio', 'Profissionalismo'], en: ['GitHub', 'Portfolio', 'Professionalism'] }, publishedDate: '2026-02-19' },
  { id: 'mt-professional-readme', title: { pt: 'Como Estruturar um README Profissional', en: 'How to Structure a Professional README' }, excerpt: { pt: 'Guia prático para criar READMEs que comunicam valor, facilitam avaliação e demonstram maturidade profissional.', en: 'Practical guide to creating READMEs that communicate value, facilitate evaluation, and demonstrate professional maturity.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/readme-profissional', en: '/en-us/articles/professional-readme' }, tags: { pt: ['Documentação', 'GitHub', 'Comunicação'], en: ['Documentation', 'GitHub', 'Communication'] }, publishedDate: '2026-02-19' },
  { id: 'mt-technical-interviews', title: { pt: 'Como Se Preparar Para Entrevistas Técnicas', en: 'How to Prepare for Technical Interviews' }, excerpt: { pt: 'Estratégias práticas para enfrentar entrevistas técnicas com preparação sólida e postura profissional.', en: 'Practical strategies to face technical interviews with solid preparation and professional posture.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/preparacao-entrevistas-tecnicas', en: '/en-us/articles/preparing-for-technical-interviews' }, tags: { pt: ['Entrevistas', 'Carreira', 'Preparação'], en: ['Interviews', 'Career', 'Preparation'] }, publishedDate: '2026-02-19' },
  { id: 'mt-what-companies-evaluate', title: { pt: 'O Que Empresas Realmente Avaliam em Iniciantes', en: 'What Companies Really Evaluate in Beginners' }, excerpt: { pt: 'Os critérios reais que empresas utilizam para avaliar desenvolvedores iniciantes, além de habilidades técnicas isoladas.', en: 'The real criteria companies use to evaluate beginner developers, beyond isolated technical skills.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/o-que-empresas-avaliam-iniciantes', en: '/en-us/articles/what-companies-evaluate-in-beginners' }, tags: { pt: ['Carreira', 'Mercado', 'Avaliação'], en: ['Career', 'Market', 'Evaluation'] }, publishedDate: '2026-02-19' },
  { id: 'mt-trend-stack-danger', title: { pt: 'O Perigo de Seguir Só a Stack da Moda', en: 'The Danger of Only Following the Trend Stack' }, excerpt: { pt: 'Por que basear decisões técnicas em tendências é arriscado e como escolher tecnologias com critério.', en: 'Why basing technical decisions on trends is risky and how to choose technologies with criteria.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/perigo-stack-da-moda', en: '/en-us/articles/danger-of-trend-stack' }, tags: { pt: ['Tecnologia', 'Decisões', 'Carreira'], en: ['Technology', 'Decisions', 'Career'] }, publishedDate: '2026-02-19' },
  { id: 'mt-early-specialization', title: { pt: 'Especializar Cedo Demais Pode Te Limitar', en: 'Specializing Too Early Can Limit You' }, excerpt: { pt: 'Por que construir base ampla antes de se especializar é estrategicamente mais vantajoso para a carreira.', en: 'Why building a broad base before specializing is strategically more advantageous for your career.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/especializar-cedo-limita', en: '/en-us/articles/early-specialization-limits' }, tags: { pt: ['Especialização', 'Carreira', 'Estratégia'], en: ['Specialization', 'Career', 'Strategy'] }, publishedDate: '2026-02-19' },
  { id: 'mt-course-job-illusion', title: { pt: 'A Ilusão do "Curso Que Te Garante Emprego"', en: 'The Illusion of "The Course That Guarantees You a Job"' }, excerpt: { pt: 'Análise crítica sobre promessas de empregabilidade no mercado de educação em tecnologia.', en: 'Critical analysis of employability promises in the technology education market.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/ilusao-curso-garante-emprego', en: '/en-us/articles/course-guarantees-job-illusion' }, tags: { pt: ['Formação', 'Mercado', 'Análise Crítica'], en: ['Education', 'Market', 'Critical Analysis'] }, publishedDate: '2026-02-19' },
  { id: 'mt-switching-languages', title: { pt: 'Trocar de Linguagem o Tempo Todo Atrasa Seu Progresso', en: 'Switching Languages All the Time Slows Your Progress' }, excerpt: { pt: 'Por que a falta de foco em uma tecnologia impede o desenvolvimento de profundidade e expertise real.', en: 'Why lack of focus on one technology prevents developing depth and real expertise.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/trocar-linguagem-atrasa', en: '/en-us/articles/switching-languages-slows-progress' }, tags: { pt: ['Foco', 'Linguagens', 'Carreira'], en: ['Focus', 'Languages', 'Career'] }, publishedDate: '2026-02-19' },
  { id: 'mt-excessive-comparison', title: { pt: 'Comparação Excessiva com Outros Desenvolvedores', en: 'Excessive Comparison with Other Developers' }, excerpt: { pt: 'Como a comparação constante com outros profissionais prejudica o desenvolvimento e como focar no próprio progresso.', en: 'How constant comparison with other professionals harms development and how to focus on your own progress.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/comparacao-excessiva-devs', en: '/en-us/articles/excessive-comparison-with-developers' }, tags: { pt: ['Mentalidade', 'Carreira', 'Autoconhecimento'], en: ['Mindset', 'Career', 'Self-knowledge'] }, publishedDate: '2026-02-19' },
  { id: 'mt-wanting-shortcuts', title: { pt: 'Querer Atalhos em Uma Profissão Técnica', en: 'Wanting Shortcuts in a Technical Profession' }, excerpt: { pt: 'Por que buscar atalhos em desenvolvimento de software compromete a construção de competência real e duradoura.', en: 'Why seeking shortcuts in software development compromises building real and lasting competence.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '11 min', path: { pt: '/artigos/atalhos-profissao-tecnica', en: '/en-us/articles/shortcuts-in-technical-profession' }, tags: { pt: ['Mentalidade', 'Disciplina', 'Carreira'], en: ['Mindset', 'Discipline', 'Career'] }, publishedDate: '2026-02-19' },
  { id: 'mt-when-to-specialize', title: { pt: 'Quando Começar a Se Especializar', en: 'When to Start Specializing' }, excerpt: { pt: 'Como identificar o momento certo para escolher uma especialização e como fazer essa transição de forma estratégica.', en: 'How to identify the right moment to choose a specialization and how to make this transition strategically.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '12 min', path: { pt: '/artigos/quando-comecar-especializar', en: '/en-us/articles/when-to-start-specializing' }, tags: { pt: ['Especialização', 'Carreira', 'Estratégia'], en: ['Specialization', 'Career', 'Strategy'] }, publishedDate: '2026-02-19' },
  { id: 'mt-choosing-backend-frontend', title: { pt: 'Como Decidir Entre Backend, Frontend ou Infraestrutura', en: 'How to Decide Between Backend, Frontend or Infrastructure' }, excerpt: { pt: 'Critérios práticos para escolher uma direção de especialização baseados em experiência real e autoconhecimento.', en: 'Practical criteria for choosing a specialization direction based on real experience and self-knowledge.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/backend-frontend-como-decidir', en: '/en-us/articles/backend-frontend-how-to-decide' }, tags: { pt: ['Especialização', 'Backend', 'Frontend'], en: ['Specialization', 'Backend', 'Frontend'] }, publishedDate: '2026-02-19' },
  { id: 'mt-junior-to-mid', title: { pt: 'Como Evoluir de Júnior Para Pleno', en: 'How to Evolve from Junior to Mid-Level' }, excerpt: { pt: 'Os marcos técnicos e comportamentais que definem a transição de desenvolvedor júnior para pleno no mercado.', en: 'The technical and behavioral milestones that define the transition from junior to mid-level developer in the market.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '14 min', path: { pt: '/artigos/junior-para-pleno', en: '/en-us/articles/junior-to-mid-level' }, tags: { pt: ['Carreira', 'Evolução', 'Profissionalismo'], en: ['Career', 'Evolution', 'Professionalism'] }, publishedDate: '2026-02-19' },
  { id: 'mt-understanding-business', title: { pt: 'A Importância de Entender Negócios, Não Só Código', en: 'The Importance of Understanding Business, Not Just Code' }, excerpt: { pt: 'Por que o desenvolvedor que entende o negócio toma decisões melhores e gera mais valor do que o que apenas escreve código.', en: 'Why the developer who understands business makes better decisions and generates more value than one who only writes code.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/entender-negocios-nao-so-codigo', en: '/en-us/articles/understanding-business-not-just-code' }, tags: { pt: ['Negócios', 'Estratégia', 'Valor'], en: ['Business', 'Strategy', 'Value'] }, publishedDate: '2026-02-19' },
  { id: 'mt-building-reputation', title: { pt: 'Como Construir Reputação no Mercado', en: 'How to Build Market Reputation' }, excerpt: { pt: 'Estratégias para construir uma reputação profissional sólida baseada em competência demonstrada e posicionamento consistente.', en: 'Strategies for building a solid professional reputation based on demonstrated competence and consistent positioning.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/construir-reputacao-mercado', en: '/en-us/articles/building-market-reputation' }, tags: { pt: ['Reputação', 'Posicionamento', 'Carreira'], en: ['Reputation', 'Positioning', 'Career'] }, publishedDate: '2026-02-19' },
  { id: 'mt-remote-work-preparation', title: { pt: 'Preparação Técnica e Comportamental Para Trabalhar Remoto', en: 'Technical and Behavioral Preparation For Remote Work' }, excerpt: { pt: 'O que é necessário técnica e comportamentalmente para trabalhar de forma remota com eficiência e profissionalismo.', en: 'What is technically and behaviorally necessary to work remotely with efficiency and professionalism.' }, date: { pt: '19 de Fevereiro, 2026', en: 'February 19, 2026' }, readTime: '13 min', path: { pt: '/artigos/trabalho-remoto-preparacao', en: '/en-us/articles/remote-work-preparation' }, tags: { pt: ['Trabalho Remoto', 'Carreira', 'Profissionalismo'], en: ['Remote Work', 'Career', 'Professionalism'] }, publishedDate: '2026-02-19' },
  ...careerGrowthExpansionArticles.map((article) => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    readTime: article.readTime,
    path: { pt: `/artigos/${article.slugPt}`, en: `/en-us/articles/${article.slugEn}` },
    tags: article.tags,
    publishedDate: article.publishedDate,
  })),
  ...careerMasteryExpansionArticles.map((article) => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    readTime: article.readTime,
    path: { pt: `/artigos/${article.slugPt}`, en: `/en-us/articles/${article.slugEn}` },
    tags: article.tags,
    publishedDate: article.publishedDate,
  })),
];

/**
 * Get all unique tags across all articles for a given language.
 */
export function getAllTags(lang: 'pt' | 'en'): string[] {
  const tagSet = new Set<string>();
  articles.forEach((a) => a.tags[lang].forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/**
 * Get articles filtered by tag.
 */
export function getArticlesByTag(tag: string, lang: 'pt' | 'en'): ArticleData[] {
  return articles.filter((a) =>
    a.tags[lang].some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Search across all articles (regular + market trail) by title, excerpt, tags, keywords and content.
 */
export function searchArticles(query: string, lang: 'pt' | 'en', trailArticles?: MarketTrailArticle[]): ArticleData[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  // Score regular articles
  const regularResults = articles.map((a) => {
    let score = 0;
    const title = a.title[lang].toLowerCase();
    const excerpt = a.excerpt[lang].toLowerCase();
    const tags = a.tags[lang].map((t) => t.toLowerCase());

    if (title.includes(q)) score += 10;
    if (tags.some((t) => t.includes(q))) score += 5;
    if (excerpt.includes(q)) score += 3;

    return { article: a, score };
  });

  // Score market trail articles if provided
  const trailResults = (trailArticles || []).map((a) => {
    let score = 0;
    const title = (a.title[lang] || '').toLowerCase();
    const excerpt = (a.excerpt[lang] || '').toLowerCase();
    const tags = (a.tags?.[lang] || []).map((t: string) => t.toLowerCase());
    const keywords = (a.keywords?.[lang] || []).map((k: string) => k.toLowerCase());

    if (title.includes(q)) score += 10;
    if (tags.some((t: string) => t.includes(q))) score += 5;
    if (keywords.some((k: string) => k.includes(q))) score += 5;
    if (excerpt.includes(q)) score += 3;

    // Search inside section content
    const contentMatch = (a.sections || []).some((s) =>
      (s.content[lang] || '').toLowerCase().includes(q) || (s.title[lang] || '').toLowerCase().includes(q)
    );
    if (contentMatch) score += 2;

    const converted: ArticleData = {
      id: a.id,
      title: a.title,
      excerpt: a.excerpt,
      date: a.date,
      readTime: a.readTime,
      path: {
        pt: `/artigos/${a.slugPt}`,
        en: `/en-us/articles/${a.slugEn}`,
      },
      tags: a.tags,
      publishedDate: a.publishedDate,
    };

    return { article: converted, score };
  });

  return [...regularResults, ...trailResults]
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.article);
}

/**
 * Generate a slug from a tag name for URL use.
 */
export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Find a tag by its slug.
 */
export function slugToTag(slug: string, lang: 'pt' | 'en'): string | undefined {
  const allTags = getAllTags(lang);
  return allTags.find((t) => tagToSlug(t) === slug);
}
