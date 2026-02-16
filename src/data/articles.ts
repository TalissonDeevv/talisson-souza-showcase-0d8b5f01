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

export const articles: ArticleData[] = [
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
 * Simple client-side search across title, excerpt, and tags.
 */
export function searchArticles(query: string, lang: 'pt' | 'en'): ArticleData[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return articles
    .map((a) => {
      let score = 0;
      const title = a.title[lang].toLowerCase();
      const excerpt = a.excerpt[lang].toLowerCase();
      const tags = a.tags[lang].map((t) => t.toLowerCase());

      if (title.includes(q)) score += 10;
      if (tags.some((t) => t.includes(q))) score += 5;
      if (excerpt.includes(q)) score += 3;

      return { article: a, score };
    })
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
