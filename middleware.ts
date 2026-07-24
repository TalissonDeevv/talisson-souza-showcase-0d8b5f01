import { articles, tagToSlug, trails } from './src/data/articles';
import { checklists } from './src/data/checklists';
import { policiesPageMeta, policySections } from './src/data/policies-content';

const CRAWLER_USER_AGENTS = [
  'facebookexternalhit',
  'Facebot',
  'Twitterbot',
  'WhatsApp',
  'TelegramBot',
  'Discordbot',
  'LinkedInBot',
  'Slackbot',
  'Embedly',
  'Quora Link Preview',
  'Showyoubot',
  'outbrain',
  'pinterest',
  'vkShare',
  'W3C_Validator',
  'redditbot',
  'Instagram',
  'Threads',
  'Applebot',
  'Baiduspider',
  'bingbot',
  'Googlebot',
  'Storebot-Google',
];

const BASE_URL = 'https://www.talissonsouza.com.br';
const SITE_NAME = 'Talisson Souza';

type Lang = 'pt' | 'en';

interface PageMeta {
  title: string;
  description: string;
  locale: 'pt_BR' | 'en_US';
  type: 'website' | 'article';
  imagePath: string;
}

const serviceMeta: Record<string, { pt: { title: string; description: string }; en: { title: string; description: string } }> = {
  'web-development': {
    pt: {
      title: 'Desenvolvimento Web sob medida | Talisson Souza',
      description: 'Sites, aplicações e sistemas web com estratégia, performance, arquitetura limpa e operação preparada para crescer.',
    },
    en: {
      title: 'Custom Web Development | Talisson Souza',
      description: 'Websites, applications and web systems with strategy, performance, clean architecture and operations ready to grow.',
    },
  },
  'mobile-development': {
    pt: {
      title: 'Desenvolvimento Mobile | Talisson Souza',
      description: 'Aplicativos pensados para uso recorrente, fluxos claros, dados sincronizados e experiência simples de manter.',
    },
    en: {
      title: 'Mobile Development | Talisson Souza',
      description: 'Mobile apps designed for repeated use, clear flows, synced data and an experience that remains simple to maintain.',
    },
  },
  'bot-development': {
    pt: {
      title: 'Desenvolvimento de Bots | Talisson Souza',
      description: 'Bots para Discord e operações digitais com automação, moderação, integração, segurança e lógica de comunidade.',
    },
    en: {
      title: 'Bot Development | Talisson Souza',
      description: 'Bots for Discord and digital operations with automation, moderation, integration, safety and community logic.',
    },
  },
  'uiux-design': {
    pt: {
      title: 'UI/UX Design | Talisson Souza',
      description: 'Diagnóstico, fluxo, interface, protótipo e handoff para produtos digitais que precisam ser claros antes do código.',
    },
    en: {
      title: 'UI/UX Design | Talisson Souza',
      description: 'Diagnosis, flows, interfaces, prototypes and handoff for digital products that need clarity before code.',
    },
  },
  'cloud-solutions': {
    pt: {
      title: 'Cloud Solutions | Talisson Souza',
      description: 'Ambientes, deploy, monitoramento, backup e infraestrutura preparados para estabilidade e evolução contínua.',
    },
    en: {
      title: 'Cloud Solutions | Talisson Souza',
      description: 'Environments, deploy, monitoring, backup and infrastructure prepared for stability and continuous evolution.',
    },
  },
  consulting: {
    pt: {
      title: 'Consultoria Tech | Talisson Souza',
      description: 'Leitura técnica, arquitetura, prioridade, risco e direção para empresas que precisam decidir melhor antes de executar.',
    },
    en: {
      title: 'Tech Consulting | Talisson Souza',
      description: 'Technical reading, architecture, priorities, risk and direction for companies that need better decisions before execution.',
    },
  },
};

const staticPages: Record<string, { pt: { title: string; description: string }; en: { title: string; description: string } }> = {
  '/': {
    pt: {
      title: 'Talisson Souza | Engenheiro de Software e Empresario de Tecnologia',
      description: 'Engenheiro e Arquiteto de Software, fundador da Cheetah Solutions Network. Sistemas, automacoes e solucoes digitais para empresas que precisam crescer com estrutura.',
    },
    en: {
      title: 'Talisson Souza | Software Engineer and Technology Entrepreneur',
      description: 'Software Engineer and Architect, founder of Cheetah Solutions Network. Systems, automations and digital solutions for companies that need structured growth.',
    },
  },
  '/bio': {
    pt: {
      title: 'Bio Oficial | Talisson Souza',
      description: 'Pagina oficial de bio de Talisson Souza com links, projetos, redes sociais e canais profissionais.',
    },
    en: {
      title: 'Official Bio | Talisson Souza',
      description: 'Official bio page for Talisson Souza with links, projects, social networks and professional channels.',
    },
  },
  '/sobre': {
    pt: {
      title: 'Sobre Talisson Souza | Engenheiro e Arquiteto de Software',
      description: 'Quem e Talisson Souza, sua relacao com tecnologia, a origem da Cheetah Solutions Network e a forma como constroi software para durar.',
    },
    en: {
      title: 'About Talisson Souza | Software Engineer and Architect',
      description: 'Who Talisson Souza is, his relationship with technology, the origin of Cheetah Solutions Network and how he builds software to last.',
    },
  },
  '/carreira': {
    pt: {
      title: 'Carreira | O que Talisson Souza faz',
      description: 'Atuacao profissional de Talisson Souza em engenharia de software, arquitetura, automacao, conteudo, comunidades e direcao tecnica.',
    },
    en: {
      title: 'Career | What Talisson Souza Does',
      description: 'Talisson Souza professional work in software engineering, architecture, automation, content, communities and technical direction.',
    },
  },
  '/projetos': {
    pt: {
      title: 'Portfolio em Curadoria | Talisson Souza',
      description: 'Projetos em curadoria privada, com prioridade para confidencialidade, autorizacao dos clientes e apresentacao responsavel de cases.',
    },
    en: {
      title: 'Curated Portfolio | Talisson Souza',
      description: 'Privately curated projects with priority on confidentiality, client authorization and responsible case presentation.',
    },
  },
  '/servicos': {
    pt: {
      title: 'Servicos de Desenvolvimento | Talisson Souza',
      description: 'Desenvolvimento web, mobile, bots, UI/UX, cloud e consultoria tecnica para transformar problemas em operacao digital clara.',
    },
    en: {
      title: 'Development Services | Talisson Souza',
      description: 'Web, mobile, bots, UI/UX, cloud and technical consulting to turn problems into clear digital operations.',
    },
  },
  '/contato': {
    pt: {
      title: 'Contato | Talisson Souza',
      description: 'Conte o essencial sobre seu projeto, desafio tecnico ou parceria. A conversa comeca pelo problema e pelo resultado esperado.',
    },
    en: {
      title: 'Contact | Talisson Souza',
      description: 'Share the essentials about your project, technical challenge or partnership. The conversation starts with the problem and expected outcome.',
    },
  },
  '/artigos': {
    pt: {
      title: 'Artigos e Guias Tecnicos | Talisson Souza',
      description: 'Textos para ajudar pessoas em tecnologia, carreira, comunidades, seguranca, arquitetura, estrategia e desenvolvimento profissional.',
    },
    en: {
      title: 'Articles and Technical Guides | Talisson Souza',
      description: 'Writing to help people with technology, career, communities, security, architecture, strategy and professional development.',
    },
  },
  '/livro': {
    pt: {
      title: 'Superando Limites | Talisson Souza',
      description: 'Livro de Talisson Souza sobre rejeicao, disciplina, construcao pessoal e a trajetoria por tras de uma vida em movimento.',
    },
    en: {
      title: 'Overcoming Limits | Talisson Souza',
      description: 'Talisson Souza book about rejection, discipline, personal construction and the journey behind a life in motion.',
    },
  },
  '/principios': {
    pt: {
      title: 'Principios | Talisson Souza',
      description: 'Principios que orientam escolhas tecnicas, postura profissional, construcao de reputacao e responsabilidade no trabalho.',
    },
    en: {
      title: 'Principles | Talisson Souza',
      description: 'Principles that guide technical choices, professional posture, reputation building and responsibility at work.',
    },
  },
  '/checklists': {
    pt: {
      title: 'Checklists | Talisson Souza',
      description: 'Protocolos praticos para revisar seguranca, bots em producao, servidores publicos e infraestrutura minima de projetos digitais.',
    },
    en: {
      title: 'Checklists | Talisson Souza',
      description: 'Practical protocols to review security, production bots, public servers and minimum infrastructure for digital projects.',
    },
  },
  '/faq': {
    pt: {
      title: 'Perguntas Frequentes | Talisson Souza',
      description: 'Respostas diretas sobre servicos, processo de trabalho, prazos, manutencao, escopo e a forma de iniciar uma conversa.',
    },
    en: {
      title: 'Frequently Asked Questions | Talisson Souza',
      description: 'Direct answers about services, work process, timelines, maintenance, scope and how to start a conversation.',
    },
  },
  '/feedbacks': {
    pt: {
      title: 'Feedbacks | Talisson Souza',
      description: 'Depoimentos reais de colegas, parceiros e clientes sobre trabalho, disciplina, entrega, colaboracao e qualidade tecnica.',
    },
    en: {
      title: 'Feedbacks | Talisson Souza',
      description: 'Real testimonials from colleagues, partners and clients about work, discipline, delivery, collaboration and technical quality.',
    },
  },
  '/seja-afiliado': {
    pt: {
      title: 'Programa de Parceiros | Talisson Souza',
      description: 'Indique clientes para os meus servicos e receba comissao por cada projeto fechado pelo Programa de Parceiros.',
    },
    en: {
      title: 'Partner Program | Talisson Souza',
      description: 'Refer clients to my services and receive commission for each project closed through the Partner Program.',
    },
  },
  '/sugestoes-artigos': {
    pt: {
      title: 'Sugestoes de Artigos | Talisson Souza',
      description: 'Envie sugestoes de temas para novos artigos e ajude a orientar conteudos uteis para tecnologia, carreira e desenvolvimento profissional.',
    },
    en: {
      title: 'Article Suggestions | Talisson Souza',
      description: 'Send topic suggestions for new articles and help guide useful content about technology, career and professional development.',
    },
  },
  '/politicas': {
    pt: {
      title: policiesPageMeta.title.pt,
      description: policiesPageMeta.description.pt,
    },
    en: {
      title: policiesPageMeta.title.en,
      description: policiesPageMeta.description.en,
    },
  },
  '/politica-de-privacidade': {
    pt: {
      title: 'Politica de Privacidade | Talisson Souza',
      description: 'Como dados de contato, preferencias, comentarios autenticados via Discord e informacoes tecnicas sao tratados neste site.',
    },
    en: {
      title: 'Privacy Policy | Talisson Souza',
      description: 'How contact data, preferences, Discord-authenticated comments and technical information are handled on this site.',
    },
  },
  '/como-trabalho': {
    pt: {
      title: 'Como Trabalho | Talisson Souza',
      description: 'Meu processo para entender contexto, definir escopo, reduzir ruido e transformar decisao tecnica em entrega confiavel.',
    },
    en: {
      title: 'How I Work | Talisson Souza',
      description: 'My process to understand context, define scope, reduce noise and turn technical decisions into reliable delivery.',
    },
  },
  '/decisoes-tecnicas': {
    pt: {
      title: 'Decisoes Tecnicas | Talisson Souza',
      description: 'Reflexoes sobre escolhas de stack, trade-offs reais, maturidade tecnica e decisoes que protegem produtos no longo prazo.',
    },
    en: {
      title: 'Technical Decisions | Talisson Souza',
      description: 'Reflections on stack choices, real trade-offs, technical maturity and decisions that protect products over time.',
    },
  },
  '/acessibilidade': {
    pt: {
      title: 'Acessibilidade | Talisson Souza',
      description: 'Compromissos de acessibilidade, responsividade, contraste, navegacao por teclado e experiencia inclusiva no site.',
    },
    en: {
      title: 'Accessibility | Talisson Souza',
      description: 'Commitments to accessibility, responsiveness, contrast, keyboard navigation and inclusive site experience.',
    },
  },
};

const englishPathMap: Record<string, string> = {
  '/en-us': '/',
  '/en-us/bio': '/bio',
  '/en-us/about': '/sobre',
  '/en-us/career': '/carreira',
  '/en-us/projects': '/projetos',
  '/en-us/services': '/servicos',
  '/en-us/contact': '/contato',
  '/en-us/articles': '/artigos',
  '/en-us/book': '/livro',
  '/en-us/principles': '/principios',
  '/en-us/checklists': '/checklists',
  '/en-us/faq': '/faq',
  '/en-us/feedbacks': '/feedbacks',
  '/en-us/affiliate-program': '/seja-afiliado',
  '/en-us/article-suggestions': '/sugestoes-artigos',
  '/en-us/policies': '/politicas',
  '/en-us/privacy-policy': '/politica-de-privacidade',
  '/en-us/how-i-work': '/como-trabalho',
  '/en-us/tech-decisions': '/decisoes-tecnicas',
  '/en-us/accessibility': '/acessibilidade',
};

const legacyArticleSlugAliases: Record<string, { pt: string; en: string }> = {
  'o-que-o-monitoramento-da-discord-pelo-stf-significa-para-quem-cria-comunidades': {
    pt: 'eca-digital-anpd-monitoramento',
    en: 'eca-digital-anpd-monitoring',
  },
};

function routeImageKey(pathname: string): string {
  const normalized = normalizePath(pathname);

  if (/^\/(?:en-us\/articles|artigos)\/tag\//.test(normalized)) {
    return normalized.startsWith('/en-us') ? 'en-us-articles' : 'artigos';
  }

  if (normalized === '/') return 'home';

  return normalized
    .replace(/^\/+|\/+$/g, '')
    .replace(/\//g, '--')
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function socialImagePath(pathname: string): string {
  return `/og/${routeImageKey(pathname)}.png`;
}

function normalizePath(pathname: string): string {
  const withoutTrailingSlash = pathname.replace(/\/+$/, '');
  return withoutTrailingSlash || '/';
}

function stripColonTone(value: string): string {
  return value.replace(/\s*:\s*/g, '. ');
}

function truncate(value: string, max = 180): string {
  const clean = stripColonTone(value).replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}...`;
}

function articleByPath(pathname: string, lang: Lang) {
  const match = pathname.match(/^(?:\/en-us\/articles|\/artigos)\/([^/]+)$/);
  if (!match) return undefined;

  const slug = match[1];
  const alias = legacyArticleSlugAliases[slug];
  const resolvedSlug = alias ? alias[lang] : slug;

  return articles.find((article) => {
    const path = lang === 'en' ? article.path.en : article.path.pt;
    return path.split('/').pop() === resolvedSlug;
  });
}

function getMetaForPath(pathname: string): PageMeta {
  const normalized = normalizePath(pathname);
  const lang: Lang = normalized.startsWith('/en-us') ? 'en' : 'pt';
  const locale = lang === 'en' ? 'en_US' : 'pt_BR';
  const localPath = lang === 'en' ? ((englishPathMap[normalized] ?? normalized.replace(/^\/en-us/, '')) || '/') : normalized;

  const article = articleByPath(normalized, lang);
  if (article) {
    return {
      title: `${stripColonTone(article.title[lang])} | Talisson Souza`,
      description: truncate(article.excerpt[lang]),
      locale,
      type: 'article',
      imagePath: socialImagePath(normalized),
    };
  }

  const trailMatch = normalized.match(/^(?:\/en-us\/trails|\/trilhas)\/([^/]+)$/);
  if (trailMatch) {
    const trail = trails.find((item) => item.path[lang] === normalized);
    if (trail) {
      return {
        title: `${stripColonTone(trail.title[lang])} | Talisson Souza`,
        description: truncate(trail.description[lang]),
        locale,
        type: 'website',
        imagePath: socialImagePath(normalized),
      };
    }
  }

  const tagMatch = normalized.match(/^(?:\/en-us\/articles|\/artigos)\/tag\/([^/]+)$/);
  if (tagMatch) {
    const tagSlug = tagMatch[1];
    const tag = Array.from(new Set(articles.flatMap((article) => article.tags[lang]))).find((item) => tagToSlug(item) === tagSlug) ?? tagSlug.replace(/-/g, ' ');
    return {
      title: lang === 'pt' ? `Artigos sobre ${tag} | Talisson Souza` : `Articles about ${tag} | Talisson Souza`,
      description: lang === 'pt' ? `Conteudos publicados sobre ${tag} por Talisson Souza.` : `Published writing about ${tag} by Talisson Souza.`,
      locale,
      type: 'website',
      imagePath: socialImagePath(lang === 'en' ? '/en-us/articles' : '/artigos'),
    };
  }

  const checklist = checklists.find((item) => item.path[lang] === normalized);
  if (checklist) {
    return {
      title: `${stripColonTone(checklist.title[lang])} | Talisson Souza`,
      description: truncate(checklist.description[lang]),
      locale,
      type: 'website',
      imagePath: socialImagePath(normalized),
    };
  }

  const policyMatch = normalized.match(/^(?:\/en-us\/policies|\/politicas)\/([^/]+)$/);
  if (policyMatch) {
    const section = policySections.find((item) => item.id === policyMatch[1]);
    if (section) {
      return {
        title: `${section.title[lang]} | Talisson Souza`,
        description: truncate(section.paragraphs[0]?.[lang] ?? policiesPageMeta.description[lang]),
        locale,
        type: 'website',
        imagePath: socialImagePath(normalized),
      };
    }
  }

  const serviceMatch = normalized.match(/^(?:\/en-us\/services|\/servicos)\/([^/]+)$/);
  if (serviceMatch) {
    const service = serviceMeta[serviceMatch[1]];
    if (service) {
      return {
        ...service[lang],
        locale,
        type: 'website',
        imagePath: socialImagePath(normalized),
      };
    }
  }

  const staticMeta = staticPages[localPath];
  if (staticMeta) {
    return {
      ...staticMeta[lang],
      locale,
      type: 'website',
      imagePath: socialImagePath(normalized),
    };
  }

  return {
    ...(lang === 'en' ? staticPages['/'].en : staticPages['/'].pt),
    locale,
    type: 'website',
    imagePath: socialImagePath('/'),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildOgHtml(meta: PageMeta, url: string): string {
  const lang = meta.locale === 'en_US' ? 'en-US' : 'pt-BR';
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const safeUrl = escapeHtml(url);
  const safeOgImage = escapeHtml(`${BASE_URL}${meta.imagePath}`);
  const safeSiteName = escapeHtml(SITE_NAME);
  const alternateLocale = meta.locale === 'pt_BR' ? 'en_US' : 'pt_BR';
  const redirectUrl = JSON.stringify(url).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="Talisson Souza" />
  <link rel="canonical" href="${safeUrl}" />

  <meta property="og:type" content="${escapeHtml(meta.type)}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${safeUrl}" />
  <meta property="og:image" content="${safeOgImage}" />
  <meta property="og:image:secure_url" content="${safeOgImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:alt" content="${title}" />
  <meta property="og:site_name" content="${safeSiteName}" />
  <meta property="og:locale" content="${meta.locale}" />
  <meta property="og:locale:alternate" content="${alternateLocale}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@talissondev" />
  <meta name="twitter:creator" content="@talissondev" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${safeOgImage}" />
  <meta name="twitter:image:alt" content="${title}" />
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <script>window.location.href=${redirectUrl};</script>
</body>
</html>`;
}

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';

  const isCrawler = CRAWLER_USER_AGENTS.some((bot) => userAgent.toLowerCase().includes(bot.toLowerCase()));

  if (!isCrawler) {
    return;
  }

  const url = new URL(request.url);
  const pathname = normalizePath(url.pathname);
  const canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;
  const meta = getMetaForPath(pathname);

  return new Response(buildOgHtml(meta, canonicalUrl), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|og|og-image.png|robots.txt|sitemap.xml|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot)).*)'],
};
