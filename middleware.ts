// Vercel Edge Middleware — no external imports needed

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
  'Applebot',
  'Baiduspider',
  'bingbot',
  'Googlebot',
  'Storebot-Google',
];

const BASE_URL = 'https://www.talissonsouza.com.br';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Talisson Souza';

interface PageMeta {
  title: string;
  description: string;
  locale: string;
  type: string;
}

function getMetaForPath(pathname: string): PageMeta {
  const isEnglish = pathname.startsWith('/en-us');

  // Default / Home
  if (pathname === '/' || pathname === '/en-us' || pathname === '/en-us/') {
    return isEnglish
      ? {
          title: 'Talisson Souza | Full Stack Developer & CEO',
          description: 'Full Stack Developer with over 8 years of experience. CEO of Cheetah Network, specialist in custom web systems, APIs, React, Node.js and digital solutions for businesses.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Talisson Souza | Desenvolvedor Full Stack & CEO',
          description: 'Desenvolvedor Full Stack com mais de 8 anos de experiência. CEO da Cheetah Network, especialista em sistemas web sob medida, APIs, React, Node.js e soluções digitais para empresas.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // About
  if (pathname === '/sobre' || pathname === '/en-us/about') {
    return isEnglish
      ? {
          title: 'About Talisson Souza | Full Stack Developer',
          description: 'Meet Talisson Souza, full stack developer with over 8 years of experience, CEO of Cheetah Network and Strategic Director of Werneck Group.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Sobre Talisson Souza | Desenvolvedor Full Stack',
          description: 'Conheça Talisson Souza, desenvolvedor full stack com mais de 8 anos de experiência, CEO da Cheetah Network e Diretor Estratégico do Werneck Group.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Career
  if (pathname === '/carreira' || pathname === '/en-us/career') {
    return isEnglish
      ? {
          title: 'Career | Talisson Souza Journey',
          description: "Discover Talisson Souza's professional journey, from his first projects to becoming CEO of Cheetah Network and Strategic Director of Werneck Group.",
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Carreira | Trajetória de Talisson Souza',
          description: 'Conheça a trajetória profissional de Talisson Souza, desde os primeiros projetos até se tornar CEO da Cheetah Network e Diretor Estratégico do Werneck Group.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Projects
  if (pathname === '/projetos' || pathname === '/en-us/projects') {
    return isEnglish
      ? {
          title: 'Projects | Talisson Souza Portfolio',
          description: 'Discover the projects developed by Talisson Souza. Websites, web applications, enterprise systems and digital solutions.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Projetos | Portfólio de Talisson Souza',
          description: 'Conheça os projetos desenvolvidos por Talisson Souza. Sites, aplicações web, sistemas empresariais e soluções digitais.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Services
  if (pathname === '/servicos' || pathname === '/en-us/services') {
    return isEnglish
      ? {
          title: 'Development Services | Talisson Souza',
          description: 'Web, mobile, bot development, UI/UX design, cloud solutions and technology consulting services.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Serviços de Desenvolvimento | Talisson Souza',
          description: 'Serviços de desenvolvimento web, mobile, bots, UI/UX design, soluções cloud e consultoria tecnológica.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Contact
  if (pathname === '/contato' || pathname === '/en-us/contact') {
    return isEnglish
      ? {
          title: 'Contact | Talk to Talisson Souza',
          description: 'Get in touch to discuss your project. Web development, custom systems, technology consulting.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Contato | Fale com Talisson Souza',
          description: 'Entre em contato para discutir seu projeto. Desenvolvimento web, sistemas sob medida, consultoria tecnológica.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Articles listing
  if (pathname === '/artigos' || pathname === '/en-us/articles') {
    return isEnglish
      ? {
          title: 'Articles & Technical Guides | Talisson Souza',
          description: 'Articles and technical guides on technology, management, security, digital projects and professional best practices.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Artigos e Guias Técnicos | Talisson Souza',
          description: 'Artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Discord Bots Guide article
  if (pathname === '/artigos/bots-discord' || pathname === '/en-us/articles/discord-bots') {
    return isEnglish
      ? {
          title: 'Maturity, Management & Security Guide for Discord Bot Projects | Talisson Souza',
          description: 'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions and professional conduct.',
          locale: 'en_US',
          type: 'article',
        }
      : {
          title: 'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord | Talisson Souza',
          description: 'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord, abordando boas práticas, permissões e postura profissional.',
          locale: 'pt_BR',
          type: 'article',
        };
  }

  // Vision and Persistence article
  if (pathname === '/artigos/visao-e-persistencia' || pathname === '/en-us/articles/vision-and-persistence') {
    return isEnglish
      ? {
          title: 'If We Can Imagine It, It\'s Because It\'s Possible | Talisson Souza',
          description: 'A reflection on vision, persistence and entrepreneurship. Every great company started with someone imagining something that didn\'t exist yet.',
          locale: 'en_US',
          type: 'article',
        }
      : {
          title: 'Se a Gente Consegue Imaginar, É Porque É Possível | Talisson Souza',
          description: 'Reflexão sobre visão, persistência e empreendedorismo. Toda grande empresa começou com alguém imaginando algo que ainda não existia.',
          locale: 'pt_BR',
          type: 'article',
        };
  }

  // INPI article
  if (pathname === '/artigos/inpi' || pathname === '/en-us/articles/inpi') {
    return isEnglish
      ? {
          title: 'How to Register a Trademark at INPI | Talisson Souza',
          description: 'Complete guide on how to register a trademark at INPI in Brazil. Step by step, costs, deadlines and common mistakes for entrepreneurs and businesses.',
          locale: 'en_US',
          type: 'article',
        }
      : {
          title: 'Como Registrar uma Marca no INPI | Talisson Souza',
          description: 'Guia completo sobre como registrar uma marca no INPI. Passo a passo, custos, prazos e erros comuns para empreendedores e empresas.',
          locale: 'pt_BR',
          type: 'article',
        };
  }

  // Book
  if (pathname === '/livro' || pathname === '/en-us/book') {
    return isEnglish
      ? {
          title: 'Book | Talisson Souza',
          description: 'Discover the book by Talisson Souza about technology and digital entrepreneurship.',
          locale: 'en_US',
          type: 'website',
        }
      : {
          title: 'Livro | Talisson Souza',
          description: 'Conheça o livro de Talisson Souza sobre tecnologia e empreendedorismo digital.',
          locale: 'pt_BR',
          type: 'website',
        };
  }

  // Fallback
  return isEnglish
    ? {
        title: 'Talisson Souza | Full Stack Developer & CEO',
        description: 'Full Stack Developer with over 8 years of experience. CEO of Cheetah Network.',
        locale: 'en_US',
        type: 'website',
      }
    : {
        title: 'Talisson Souza | Desenvolvedor Full Stack & CEO',
        description: 'Desenvolvedor Full Stack com mais de 8 anos de experiência. CEO da Cheetah Network.',
        locale: 'pt_BR',
        type: 'website',
      };
}

function buildOgHtml(meta: PageMeta, url: string): string {
  const lang = meta.locale === 'en_US' ? 'en-US' : 'pt-BR';
  
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <meta name="author" content="Talisson Souza" />
  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="${meta.type}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:secure_url" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:alt" content="${meta.title}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:locale" content="${meta.locale}" />
  <meta property="og:locale:alternate" content="${meta.locale === 'pt_BR' ? 'en_US' : 'pt_BR'}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@talinhozx" />
  <meta name="twitter:creator" content="@talinhozx" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <meta name="twitter:image:alt" content="${meta.title}" />
</head>
<body>
  <h1>${meta.title}</h1>
  <p>${meta.description}</p>
  <script>window.location.href="${url}";</script>
</body>
</html>`;
}

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  const isCrawler = CRAWLER_USER_AGENTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (!isCrawler) {
    return;
  }

  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = `${BASE_URL}${pathname}`;

  const meta = getMetaForPath(pathname);
  const html = buildOgHtml(meta, canonicalUrl);

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|og-image.png|robots.txt|sitemap.xml|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot)).*)'],
};
