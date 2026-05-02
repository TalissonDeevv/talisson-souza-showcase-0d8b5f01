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

// ── Static page metadata ──────────────────────────────────────────────
const STATIC_PAGES: Record<string, { pt: Omit<PageMeta, 'locale'>; en: Omit<PageMeta, 'locale'> }> = {
  '/': {
    pt: { title: 'Talisson Souza | Engenheiro de Software e Empresário de Tecnologia', description: "Engenheiro de Software e fundador da Cheetah Solutions Network. Atuo há mais de 8 anos com desenvolvimento de sistemas, automações e arquiteturas digitais para empresas e projetos próprios. Autor do livro 'Superando Limites da Rejeição ao Sucesso' e criador de conteúdo sobre tecnologia e programação.", type: 'website' },
    en: { title: 'Talisson Souza | Software Engineer and Technology Entrepreneur', description: "Software Engineer and founder of Cheetah Solutions Network. For over 8 years I have built systems, automations and digital architectures for companies and my own ventures. Author of the book 'Overcoming the Limits from Rejection to Success' and a content creator on technology and programming.", type: 'website' },
  },
  '/sobre': {
    pt: { title: 'Sobre Talisson Souza | Desenvolvedor Full Stack', description: 'Conheça Talisson Souza, desenvolvedor full stack com mais de 8 anos de experiência, CEO da Cheetah Solutions Network e Diretor Estratégico do Werneck Group.', type: 'website' },
    en: { title: 'About Talisson Souza | Full Stack Developer', description: 'Meet Talisson Souza, full stack developer with over 8 years of experience, CEO of Cheetah Solutions Network and Strategic Director of Werneck Group.', type: 'website' },
  },
  '/carreira': {
    pt: { title: 'Carreira | Trajetória de Talisson Souza', description: 'Conheça a trajetória profissional de Talisson Souza, desde os primeiros projetos até se tornar CEO da Cheetah Solutions Network e Diretor Estratégico do Werneck Group.', type: 'website' },
    en: { title: 'Career | Talisson Souza Journey', description: "Discover Talisson Souza's professional journey, from his first projects to becoming CEO of Cheetah Solutions Network and Strategic Director of Werneck Group.", type: 'website' },
  },
  '/projetos': {
    pt: { title: 'Projetos | Portfólio de Talisson Souza', description: 'Conheça os projetos desenvolvidos por Talisson Souza. Sites, aplicações web, sistemas empresariais e soluções digitais.', type: 'website' },
    en: { title: 'Projects | Talisson Souza Portfolio', description: 'Discover the projects developed by Talisson Souza. Websites, web applications, enterprise systems and digital solutions.', type: 'website' },
  },
  '/servicos': {
    pt: { title: 'Serviços de Desenvolvimento | Talisson Souza', description: 'Serviços de desenvolvimento web, mobile, bots, UI/UX design, soluções cloud e consultoria tecnológica.', type: 'website' },
    en: { title: 'Development Services | Talisson Souza', description: 'Web, mobile, bot development, UI/UX design, cloud solutions and technology consulting services.', type: 'website' },
  },
  '/contato': {
    pt: { title: 'Contato | Fale com Talisson Souza', description: 'Entre em contato para discutir seu projeto. Desenvolvimento web, sistemas sob medida, consultoria tecnológica.', type: 'website' },
    en: { title: 'Contact | Talk to Talisson Souza', description: 'Get in touch to discuss your project. Web development, custom systems, technology consulting.', type: 'website' },
  },
  '/artigos': {
    pt: { title: 'Artigos e Guias Técnicos | Talisson Souza', description: 'Artigos e guias técnicos sobre tecnologia, gestão, segurança, projetos digitais e boas práticas profissionais.', type: 'website' },
    en: { title: 'Articles & Technical Guides | Talisson Souza', description: 'Articles and technical guides on technology, management, security, digital projects and professional best practices.', type: 'website' },
  },
  '/livro': {
    pt: { title: 'Livro | Talisson Souza', description: 'Conheça o livro de Talisson Souza sobre tecnologia e empreendedorismo digital.', type: 'website' },
    en: { title: 'Book | Talisson Souza', description: 'Discover the book by Talisson Souza about technology and digital entrepreneurship.', type: 'website' },
  },
  '/faq': {
    pt: { title: 'Perguntas Frequentes | Talisson Souza', description: 'Respostas para as dúvidas mais comuns sobre serviços, processo de trabalho, tecnologias, consultoria, comunidade e formas de contato com Talisson Souza.', type: 'website' },
    en: { title: 'Frequently Asked Questions | Talisson Souza', description: 'Answers to the most common questions about services, work process, technologies, consulting, community and contact with Talisson Souza.', type: 'website' },
  },
  '/feedbacks': {
    pt: { title: 'Feedbacks | Talisson Souza', description: 'Veja o que colegas, parceiros e clientes dizem sobre o trabalho de Talisson Souza. Feedbacks reais de quem já colaborou comigo.', type: 'website' },
    en: { title: 'Feedbacks | Talisson Souza', description: 'See what colleagues, partners and clients say about Talisson Souza\'s work. Real feedback from people who have worked with me.', type: 'website' },
  },
};

// ── Article metadata (slug → title/description per language) ──────────
// This covers ALL articles: regular + market trail + trail expansions
const ARTICLE_META: Record<string, { pt: { title: string; description: string }; en: { title: string; description: string } }> = {
  // Regular articles
  'por-que-devs-nao-conseguem-vagas': {
    pt: { title: 'Por Que Desenvolvedores Com Conhecimento Técnico Não Conseguem Vagas', description: 'O problema quase nunca é técnico. A maioria dos desenvolvedores que não consegue vagas está comunicando habilidades, não valor. Descubra como o posicionamento profissional define quem avança.' },
    en: { title: 'Why Technically Skilled Developers Still Can\'t Get Jobs', description: 'The problem is almost never technical. Most developers who can\'t land jobs are communicating skills, not value. Discover how professional positioning defines who advances.' },
  },
  'why-devs-cant-get-jobs': {
    pt: { title: 'Por Que Desenvolvedores Com Conhecimento Técnico Não Conseguem Vagas', description: 'O problema quase nunca é técnico. A maioria dos desenvolvedores que não consegue vagas está comunicando habilidades, não valor. Descubra como o posicionamento profissional define quem avança.' },
    en: { title: 'Why Technically Skilled Developers Still Can\'t Get Jobs', description: 'The problem is almost never technical. Most developers who can\'t land jobs are communicating skills, not value. Discover how professional positioning defines who advances.' },
  },
  'por-que-devs-nao-crescem-financeiramente': {
    pt: { title: 'Por Que a Maioria dos Desenvolvedores Não Consegue Crescer Financeiramente', description: 'Exploramos o paradoxo de desenvolvedores tecnicamente brilhantes que enfrentam estagnação financeira, focando em mentalidade e escolhas de carreira.' },
    en: { title: 'Why Most Developers Fail to Grow Financially', description: 'We delve into the paradox of technically brilliant developers who face financial stagnation, focusing on mindset and career choices.' },
  },
  'why-devs-dont-grow-financially': {
    pt: { title: 'Por Que a Maioria dos Desenvolvedores Não Consegue Crescer Financeiramente', description: 'Exploramos o paradoxo de desenvolvedores tecnicamente brilhantes que enfrentam estagnação financeira, focando em mentalidade e escolhas de carreira.' },
    en: { title: 'Why Most Developers Fail to Grow Financially', description: 'We delve into the paradox of technically brilliant developers who face financial stagnation, focusing on mindset and career choices.' },
  },
  'bots-discord': {
    pt: { title: 'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord', description: 'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord.' },
    en: { title: 'Maturity, Management & Security Guide for Discord Bot Projects', description: 'A comprehensive guide on maturity, management and security in Discord bot projects.' },
  },
  'visao-e-persistencia': {
    pt: { title: 'Se a Gente Consegue Imaginar, É Porque É Possível', description: 'Reflexão sobre visão, persistência e empreendedorismo.' },
    en: { title: "If We Can Imagine It, It's Because It's Possible", description: 'A reflection on vision, persistence and entrepreneurship.' },
  },
  'inpi': {
    pt: { title: 'Como Registrar uma Marca no INPI', description: 'Guia completo sobre como registrar uma marca no INPI. Passo a passo, custos, prazos e erros comuns.' },
    en: { title: 'How to Register a Trademark at INPI', description: 'Complete guide on how to register a trademark at INPI in Brazil.' },
  },
  'bot-profissional-discord': {
    pt: { title: 'Como Criar um Bot Profissional no Discord', description: 'Guia estratégico sobre como criar um bot profissional no Discord com foco em planejamento, qualidade e visão de longo prazo.' },
    en: { title: 'How to Create a Professional Discord Bot', description: 'Strategic guide on how to create a professional Discord bot focusing on planning, quality, and long-term vision.' },
  },
  'aluguel-bots-discord': {
    pt: { title: 'Por que Alugar Bots no Discord Está Cada Vez Mais Nichado', description: 'Análise estratégica sobre o mercado de aluguel de bots no Discord.' },
    en: { title: 'Why Discord Bot Rental Is Becoming Increasingly Niche', description: 'Strategic analysis on the Discord bot rental market.' },
  },
  'monetizar-bots': {
    pt: { title: 'Como Monetizar Bots no Discord Corretamente', description: 'Guia estratégico sobre como monetizar bots no Discord de forma profissional e sustentável.' },
    en: { title: 'How to Monetize Discord Bots Correctly', description: 'Strategic guide on how to monetize Discord bots professionally and sustainably.' },
  },
  'nicho-bot-discord': {
    pt: { title: 'Como Criar um Nicho Para Seu Projeto de Bot no Discord', description: 'Guia estratégico sobre como encontrar e construir um nicho para projetos de bots no Discord.' },
    en: { title: 'How to Create a Niche for Your Discord Bot Project', description: 'Strategic guide on finding and building a niche for Discord bot projects.' },
  },
  'desenvolvimento-full-stack': {
    pt: { title: 'O Que é Desenvolvimento Full Stack?', description: 'Entenda o que realmente significa ser um desenvolvedor full stack e o valor estratégico desse perfil.' },
    en: { title: 'What is Full Stack Development?', description: 'Understand what it really means to be a full stack developer and the strategic value of this profile.' },
  },
  'custo-desenvolvimento-sistema': {
    pt: { title: 'Quanto Custa Desenvolver um Sistema?', description: 'Entenda os fatores que definem o custo de desenvolvimento de um sistema.' },
    en: { title: 'How Much Does It Cost to Develop a System?', description: 'Understand the factors that define system development costs.' },
  },
  'clt-para-freelancer': {
    pt: { title: 'De CLT a Freelancer: Como Fazer a Transição com Estratégia', description: 'Guia estratégico para desenvolvedores CLT que desejam migrar para o mercado freelancer.' },
    en: { title: 'From Employee to Freelancer: How to Make the Transition Strategically', description: 'Strategic guide for employed developers who want to migrate to the freelance market.' },
  },
  'vulnerabilidade-dependencias': {
    pt: { title: 'Vulnerabilidade ao Instalar Dependências: O Risco que Ninguém Leva a Sério', description: 'Análise sobre os riscos de segurança ao instalar dependências em projetos de software.' },
    en: { title: 'Vulnerability When Installing Dependencies: The Risk Nobody Takes Seriously', description: 'Analysis on security risks when installing dependencies in software projects.' },
  },
  'politica-empreendedorismo': {
    pt: { title: 'Política e Empreendedorismo: Por Que Estudar Antes de Opinar', description: 'Reflexão sobre como decisões políticas impactam negócios e tecnologia.' },
    en: { title: 'Politics and Entrepreneurship: Why Study Before Opining', description: 'Reflection on how political decisions impact business and technology.' },
  },
  'fundamentos-tecnologia': {
    pt: { title: 'Fundamentos de Tecnologia: A Lógica Por Trás dos Sistemas', description: 'Reflexão sobre a importância dos fundamentos de tecnologia e raciocínio lógico.' },
    en: { title: 'Technology Fundamentals: The Logic Behind Systems', description: 'Reflection on the importance of technology fundamentals and logical reasoning.' },
  },
  'divulgacao-discord': {
    pt: { title: 'Como Divulgar Comunidades e Bots no Discord de Forma Estratégica', description: 'Guia estratégico sobre divulgação de comunidades e bots no Discord.' },
    en: { title: 'How to Strategically Promote Discord Communities and Bots', description: 'Strategic guide on promoting Discord communities and bots.' },
  },
  'moderacao-discord': {
    pt: { title: 'Moderação, Gestão e Administração de Servidores Discord', description: 'Guia sobre moderação, gestão e administração de servidores Discord.' },
    en: { title: 'Moderation, Management and Administration of Discord Servers', description: 'Guide on Discord server moderation, management, and administration.' },
  },
  'junior-para-estrategico': {
    pt: { title: 'Como Evoluir de Desenvolvedor Júnior para Profissional Estratégico', description: 'Reflexão sobre a jornada de evolução profissional e mentalidade estratégica.' },
    en: { title: 'How to Evolve from Junior Developer to Strategic Professional', description: 'Reflection on the professional evolution journey and strategic mindset.' },
  },
  'o-que-empresas-procuram': {
    pt: { title: 'O Que Empresas Realmente Procuram em um Desenvolvedor', description: 'Análise estratégica sobre o que o mercado realmente valoriza em desenvolvedores.' },
    en: { title: 'What Companies Really Look for in a Developer', description: 'Strategic analysis on what the market truly values in developers.' },
  },
  'construir-portfolio': {
    pt: { title: 'Como Construir Portfólio com Projetos Relevantes', description: 'Guia estratégico sobre como construir um portfólio que demonstre valor real.' },
    en: { title: 'How to Build a Portfolio with Relevant Projects', description: 'Strategic guide on building a portfolio that demonstrates real value.' },
  },
  'seguranca-contas-discord': {
    pt: { title: 'Proteção de Contas no Discord: Segurança para Quem Possui Ativos de Alto Valor', description: 'Guia aprofundado sobre segurança no Discord para donos de servidores e desenvolvedores de bots.' },
    en: { title: 'Discord Account Protection: Security for Those with High-Value Assets', description: 'In-depth guide on Discord security for server owners and bot developers.' },
  },
  'infraestrutura-hospedagem': {
    pt: { title: 'Infraestrutura e Hospedagem: Critérios Técnicos para Desenvolvedores e Empresas', description: 'Análise técnica e estratégica sobre infraestrutura e hospedagem.' },
    en: { title: 'Infrastructure and Hosting: Technical Criteria for Developers and Companies', description: 'Technical and strategic analysis on infrastructure and hosting.' },
  },
  'perfil-linkedin': {
    pt: { title: 'Como Montar um Perfil Estratégico no LinkedIn', description: 'Guia completo sobre como construir um perfil no LinkedIn que gere oportunidades reais.' },
    en: { title: 'How to Build a Strategic LinkedIn Profile', description: 'Complete guide on building a LinkedIn profile that generates real opportunities.' },
  },
  // ── Market Trail Block 1: Fundamentos ──
  'o-que-significa-saber-programar': {
    pt: { title: 'O Que Significa Saber Programar de Verdade', description: 'Análise sobre o que realmente define saber programar além de escrever código.' },
    en: { title: 'What It Really Means to Know How to Program', description: 'Analysis on what truly defines knowing how to program beyond writing code.' },
  },
  'programar-nao-e-decorar-sintaxe': {
    pt: { title: 'Programar Não É Decorar Sintaxe', description: 'Reflexão sobre a diferença entre memorizar comandos e desenvolver pensamento computacional.' },
    en: { title: 'Programming Is Not Memorizing Syntax', description: 'Reflection on the difference between memorizing commands and developing computational thinking.' },
  },
  'logica-mais-importante-que-linguagem': {
    pt: { title: 'Lógica É Mais Importante que Linguagem', description: 'Por que o raciocínio lógico supera a escolha de linguagem de programação.' },
    en: { title: 'Logic Is More Important Than Language', description: 'Why logical reasoning surpasses the choice of programming language.' },
  },
  'como-internet-funciona': {
    pt: { title: 'Como a Internet Realmente Funciona', description: 'Guia sobre como a internet funciona por trás dos bastidores para desenvolvedores.' },
    en: { title: 'How the Internet Really Works', description: 'Guide on how the internet works behind the scenes for developers.' },
  },
  'frontend-backend-infraestrutura': {
    pt: { title: 'Frontend, Backend e Infraestrutura', description: 'Visão estratégica sobre as três camadas do desenvolvimento de software.' },
    en: { title: 'Frontend, Backend and Infrastructure', description: 'Strategic overview of the three layers of software development.' },
  },
  'aprender-codigo-vs-entender-sistemas': {
    pt: { title: 'Aprender Código vs Entender Sistemas', description: 'A diferença entre aprender a escrever código e entender como sistemas funcionam.' },
    en: { title: 'Learning Code vs Understanding Systems', description: 'The difference between learning to write code and understanding how systems work.' },
  },
  // ── Market Trail Block 2: Metodologia ──
  'como-estudar-programacao': {
    pt: { title: 'Como Estudar Programação de Forma Eficiente', description: 'Guia sobre métodos eficientes de estudo para programação.' },
    en: { title: 'How to Study Programming Efficiently', description: 'Guide on efficient study methods for programming.' },
  },
  'curso-faculdade-ou-autodidata': {
    pt: { title: 'Vale a Pena Fazer Faculdade para Trabalhar com Programação?', description: 'Análise estratégica entre ADS, Ciência da Computação, Sistemas de Informação e Engenharia da Computação.' },
    en: { title: 'Is College Worth It for a Programming Career?', description: 'Strategic analysis between IT degrees, Computer Science, Information Systems, and Computer Engineering.' },
  },
  'plano-de-estudo-realista': {
    pt: { title: 'Como Montar um Plano de Estudo Realista', description: 'Guia prático para criar um plano de estudo executável para programação.' },
    en: { title: 'How to Build a Realistic Study Plan', description: 'Practical guide to creating an executable study plan for programming.' },
  },
  'copiar-tutorial-nao-transforma': {
    pt: { title: 'Copiar Tutorial Não Transforma Ninguém em Programador', description: 'Por que seguir tutoriais sem pensar não desenvolve habilidades reais.' },
    en: { title: "Copying Tutorials Won't Transform You Into a Programmer", description: "Why following tutorials without thinking doesn't develop real skills." },
  },
  'aprender-ler-documentacao': {
    pt: { title: 'Aprender a Ler Documentação', description: 'Guia sobre como ler e interpretar documentação técnica de forma eficiente.' },
    en: { title: 'Learning to Read Documentation', description: 'Guide on how to read and interpret technical documentation efficiently.' },
  },
  'aprender-a-pesquisar': {
    pt: { title: 'Aprender a Pesquisar: A Habilidade Mais Subestimada', description: 'Como a capacidade de pesquisar soluções define a qualidade de um desenvolvedor.' },
    en: { title: 'Learning to Search: The Most Underrated Skill', description: 'How the ability to research solutions defines a developer\'s quality.' },
  },
  // ── Market Trail Block 3: Técnico Prático ──
  'basico-que-iniciante-ignora': {
    pt: { title: 'O Básico que Todo Iniciante Ignora', description: 'Fundamentos práticos que iniciantes frequentemente pulam na pressa de aprender frameworks.' },
    en: { title: 'The Basics Every Beginner Ignores', description: 'Practical fundamentals that beginners often skip in the rush to learn frameworks.' },
  },
  'git-versionamento': {
    pt: { title: 'Git e Versionamento: Fundamento Obrigatório', description: 'Guia sobre Git e controle de versão como competência essencial para desenvolvedores.' },
    en: { title: 'Git and Versioning: Mandatory Foundation', description: 'Guide on Git and version control as an essential skill for developers.' },
  },
  'banco-de-dados-pratico': {
    pt: { title: 'Banco de Dados Explicado na Prática', description: 'Guia prático sobre banco de dados para desenvolvedores iniciantes.' },
    en: { title: 'Databases Explained Practically', description: 'Practical guide to databases for beginner developers.' },
  },
  'o-que-e-http': {
    pt: { title: 'O Que é HTTP e Por Que Você Precisa Entender', description: 'Explicação do protocolo HTTP e sua importância para desenvolvedores web.' },
    en: { title: 'What Is HTTP and Why You Need to Understand It', description: 'Explanation of the HTTP protocol and its importance for web developers.' },
  },
  'o-que-sao-apis': {
    pt: { title: 'O Que São APIs e Como Elas Conectam Sistemas', description: 'Guia sobre APIs, como funcionam e por que são fundamentais no desenvolvimento moderno.' },
    en: { title: 'What Are APIs and How They Connect Systems', description: 'Guide on APIs, how they work and why they are fundamental in modern development.' },
  },
  'arquitetura-software-iniciantes': {
    pt: { title: 'Arquitetura de Software para Iniciantes', description: 'Introdução aos conceitos de arquitetura de software para quem está começando.' },
    en: { title: 'Software Architecture for Beginners', description: 'Introduction to software architecture concepts for beginners.' },
  },
  // ── Market Trail Block 4: Mentalidade ──
  'estudante-vs-desenvolvedor': {
    pt: { title: 'A Diferença Entre Estudante e Desenvolvedor', description: 'Reflexão sobre a transição de mentalidade de estudante para profissional de desenvolvimento.' },
    en: { title: 'The Difference Between Student and Developer', description: 'Reflection on the mindset transition from student to development professional.' },
  },
  'pensar-como-programador-profissional': {
    pt: { title: 'Pensar Como Programador Profissional', description: 'Como desenvolver o pensamento estratégico que diferencia programadores amadores de profissionais.' },
    en: { title: 'Think Like a Professional Programmer', description: 'How to develop the strategic thinking that differentiates amateur from professional programmers.' },
  },
  'responsabilidade-tecnica': {
    pt: { title: 'Responsabilidade Técnica: O Peso de Cada Decisão', description: 'Reflexão sobre a responsabilidade que acompanha cada decisão técnica no desenvolvimento de software.' },
    en: { title: 'Technical Responsibility: The Weight of Every Decision', description: 'Reflection on the responsibility that accompanies every technical decision in software development.' },
  },
  'debugar-mais-importante-que-framework': {
    pt: { title: 'Debugar É Mais Importante que Aprender Framework', description: 'Por que a habilidade de debugar supera o conhecimento de qualquer framework específico.' },
    en: { title: 'Debugging Is More Important Than Learning a Framework', description: 'Why debugging ability surpasses knowledge of any specific framework.' },
  },
  'organizacao-codigo-maturidade': {
    pt: { title: 'Organização de Código É Sinal de Maturidade', description: 'Como a organização do código reflete a maturidade profissional de um desenvolvedor.' },
    en: { title: 'Code Organization Is a Sign of Maturity', description: 'How code organization reflects a developer\'s professional maturity.' },
  },
  'seguranca-basica-iniciante': {
    pt: { title: 'Segurança Básica que Todo Iniciante Precisa Saber', description: 'Fundamentos de segurança que todo desenvolvedor iniciante deve conhecer.' },
    en: { title: 'Basic Security Every Beginner Needs to Know', description: 'Security fundamentals every beginner developer should know.' },
  },
  // ── Market Trail Block 5: Portfólio ──
  'portfolio-que-impressiona': {
    pt: { title: 'Portfólio que Realmente Impressiona', description: 'Como construir um portfólio que demonstra competência real e chama atenção de recrutadores.' },
    en: { title: 'Portfolio That Actually Impresses', description: 'How to build a portfolio that demonstrates real competence and catches recruiters\' attention.' },
  },
  'projetos-para-iniciantes': {
    pt: { title: 'Projetos que Fazem Sentido para Iniciantes', description: 'Quais projetos um iniciante deveria construir para demonstrar crescimento real.' },
    en: { title: 'Projects That Make Sense for Beginners', description: 'Which projects a beginner should build to demonstrate real growth.' },
  },
  'o-que-nao-colocar-no-github': {
    pt: { title: 'O Que Não Colocar no GitHub', description: 'Erros comuns que desenvolvedores cometem ao expor código no GitHub publicamente.' },
    en: { title: 'What Not to Put on GitHub', description: 'Common mistakes developers make when publicly exposing code on GitHub.' },
  },
  'readme-profissional': {
    pt: { title: 'Como Escrever um README Profissional', description: 'Guia para criar READMEs que demonstram profissionalismo e facilitam a compreensão do projeto.' },
    en: { title: 'How to Write a Professional README', description: 'Guide to creating READMEs that demonstrate professionalism and facilitate project understanding.' },
  },
  // ── Market Trail Block 6: Empregabilidade ──
  'preparacao-entrevistas-tecnicas': {
    pt: { title: 'Preparação para Entrevistas Técnicas', description: 'Como se preparar estrategicamente para entrevistas técnicas de desenvolvimento.' },
    en: { title: 'Preparing for Technical Interviews', description: 'How to strategically prepare for technical development interviews.' },
  },
  'o-que-empresas-avaliam-iniciantes': {
    pt: { title: 'O Que Empresas Avaliam em Desenvolvedores Iniciantes', description: 'Os critérios reais que empresas usam para avaliar candidatos em início de carreira.' },
    en: { title: 'What Companies Evaluate in Beginner Developers', description: 'The real criteria companies use to evaluate early-career candidates.' },
  },
  // ── Market Trail Block 7: Armadilhas e Direcionamento ──
  'perigo-stack-da-moda': {
    pt: { title: 'O Perigo de Seguir a Stack da Moda', description: 'Por que seguir tendências tecnológicas sem critério pode prejudicar sua carreira.' },
    en: { title: 'The Danger of Following Trend Stacks', description: 'Why following tech trends without criteria can harm your career.' },
  },
  'especializar-cedo-limita': {
    pt: { title: 'Especializar Cedo Demais Pode Limitar Sua Carreira', description: 'Reflexão sobre os riscos da especialização prematura no início da carreira.' },
    en: { title: 'Early Specialization Can Limit Your Career', description: 'Reflection on the risks of premature specialization early in your career.' },
  },
  'ilusao-curso-garante-emprego': {
    pt: { title: 'A Ilusão de que Curso Garante Emprego', description: 'Por que nenhum curso sozinho garante empregabilidade e o que realmente importa.' },
    en: { title: 'The Illusion That a Course Guarantees a Job', description: 'Why no course alone guarantees employability and what really matters.' },
  },
  'trocar-linguagem-atrasa': {
    pt: { title: 'Trocar de Linguagem o Tempo Todo Atrasa Seu Progresso', description: 'Como a troca constante de linguagem impede o desenvolvimento de profundidade técnica.' },
    en: { title: 'Constantly Switching Languages Slows Your Progress', description: 'How constantly switching languages prevents developing technical depth.' },
  },
  'comparacao-excessiva-devs': {
    pt: { title: 'Comparação Excessiva com Outros Devs', description: 'Os perigos da comparação constante e como focar no próprio progresso.' },
    en: { title: 'Excessive Comparison with Other Developers', description: 'The dangers of constant comparison and how to focus on your own progress.' },
  },
  'atalhos-profissao-tecnica': {
    pt: { title: 'Atalhos que Prejudicam na Profissão Técnica', description: 'Atalhos que parecem acelerar mas prejudicam a carreira no longo prazo.' },
    en: { title: 'Shortcuts That Harm a Technical Career', description: 'Shortcuts that seem to accelerate but harm your career in the long run.' },
  },
  'quando-comecar-especializar': {
    pt: { title: 'Quando Começar a Se Especializar', description: 'O momento certo para começar a especialização na carreira de desenvolvimento.' },
    en: { title: 'When to Start Specializing', description: 'The right time to start specializing in a development career.' },
  },
  'backend-frontend-como-decidir': {
    pt: { title: 'Backend ou Frontend: Como Decidir', description: 'Guia estratégico para decidir entre backend e frontend na carreira.' },
    en: { title: 'Backend or Frontend: How to Decide', description: 'Strategic guide for deciding between backend and frontend in your career.' },
  },
  'junior-para-pleno': {
    pt: { title: 'De Júnior para Pleno: O Que Realmente Muda', description: 'O que diferencia um desenvolvedor júnior de um pleno na prática.' },
    en: { title: 'From Junior to Mid-Level: What Really Changes', description: 'What differentiates a junior from a mid-level developer in practice.' },
  },
  'entender-negocios-nao-so-codigo': {
    pt: { title: 'Entender Negócios, Não Só Código', description: 'Por que entender o negócio é tão importante quanto dominar a tecnologia.' },
    en: { title: 'Understanding Business, Not Just Code', description: 'Why understanding business is as important as mastering technology.' },
  },
  'construir-reputacao-mercado': {
    pt: { title: 'Construir Reputação no Mercado', description: 'Como construir uma reputação profissional sólida no mercado de tecnologia.' },
    en: { title: 'Building Market Reputation', description: 'How to build a solid professional reputation in the tech market.' },
  },
  'trabalho-remoto-preparacao': {
    pt: { title: 'Trabalho Remoto: Preparação Real', description: 'Como se preparar de verdade para trabalho remoto na área de tecnologia.' },
    en: { title: 'Remote Work: Real Preparation', description: 'How to truly prepare for remote work in technology.' },
  },
};

// ── Trail pages metadata ──────────────────────────────────────────────
const TRAIL_META: Record<string, { pt: { title: string; description: string }; en: { title: string; description: string } }> = {
  'seguranca-digital': {
    pt: { title: 'Trilha de Segurança Digital', description: 'Conteúdos sobre proteção de contas, engenharia social, vulnerabilidades e boas práticas de segurança.' },
    en: { title: 'Digital Security Trail', description: 'Content on account protection, social engineering, vulnerabilities and security best practices.' },
  },
  'arquitetura-infraestrutura': {
    pt: { title: 'Trilha de Arquitetura & Infraestrutura', description: 'Conteúdos sobre hospedagem, deploy, escalabilidade e decisões arquiteturais.' },
    en: { title: 'Architecture & Infrastructure Trail', description: 'Content on hosting, deploy, scalability and architectural decisions.' },
  },
  'gestao-de-comunidades': {
    pt: { title: 'Trilha de Gestão de Comunidades', description: 'Conteúdos sobre moderação, administração de servidores e crescimento estruturado.' },
    en: { title: 'Community Management Trail', description: 'Content on moderation, server administration and structured growth.' },
  },
  'estrategia-mentalidade': {
    pt: { title: 'Trilha de Estratégia & Mentalidade', description: 'Conteúdos sobre pensamento crítico, empreendedorismo digital e decisão estratégica.' },
    en: { title: 'Strategy & Mindset Trail', description: 'Content on critical thinking, digital entrepreneurship and strategic decision-making.' },
  },
  'mercado-programacao': {
    pt: { title: 'Trilha: Entrando no Mercado de Programação', description: 'Trilha completa com mais de 40 artigos sobre como entrar e evoluir no mercado de programação.' },
    en: { title: 'Trail: Entering the Programming Market', description: 'Complete trail with over 40 articles on how to enter and evolve in the programming market.' },
  },
};

function getMetaForPath(pathname: string): PageMeta {
  const isEnglish = pathname.startsWith('/en-us');
  const lang = isEnglish ? 'en' : 'pt';
  const locale = isEnglish ? 'en_US' : 'pt_BR';

  // Normalize: remove /en-us prefix for matching
  const normalizedPath = isEnglish
    ? pathname.replace(/^\/en-us/, '').replace(/^\//, '/') || '/'
    : pathname;

  // Map English page paths to Portuguese equivalents for lookup
  const enToLocalMap: Record<string, string> = {
    '/about': '/sobre',
    '/career': '/carreira',
    '/projects': '/projetos',
    '/services': '/servicos',
    '/contact': '/contato',
    '/articles': '/artigos',
    '/book': '/livro',
  };

  const lookupPath = isEnglish ? (enToLocalMap[normalizedPath] || normalizedPath) : pathname;

  // 1. Check static pages
  if (STATIC_PAGES[lookupPath]) {
    const meta = STATIC_PAGES[lookupPath][lang];
    return { ...meta, locale };
  }

  // 2. Check article pages: /artigos/{slug} or /en-us/articles/{slug}
  const articleMatch = pathname.match(/^(?:\/en-us\/articles|\/artigos)\/([^/]+)$/);
  if (articleMatch) {
    const slug = articleMatch[1];

    // Check if we have specific meta for this slug
    if (ARTICLE_META[slug]) {
      const meta = ARTICLE_META[slug][lang];
      return {
        title: `${meta.title} | Talisson Souza`,
        description: meta.description,
        locale,
        type: 'article',
      };
    }

    // Fallback for unknown article slugs — still mark as article
    const readableTitle = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      title: `${readableTitle} | Talisson Souza`,
      description: lang === 'pt'
        ? 'Artigo técnico sobre tecnologia, carreira e desenvolvimento de software por Talisson Souza.'
        : 'Technical article on technology, career and software development by Talisson Souza.',
      locale,
      type: 'article',
    };
  }

  // 3. Check trail pages: /trilhas/{slug} or /en-us/trails/{slug}
  const trailMatch = pathname.match(/^(?:\/en-us\/trails|\/trilhas)\/([^/]+)$/);
  if (trailMatch) {
    const slug = trailMatch[1];

    // Map English trail slugs to Portuguese for lookup
    const enTrailMap: Record<string, string> = {
      'digital-security': 'seguranca-digital',
      'architecture-infrastructure': 'arquitetura-infraestrutura',
      'community-management': 'gestao-de-comunidades',
      'strategy-mindset': 'estrategia-mentalidade',
      'market-programming': 'mercado-programacao',
    };

    const trailSlug = isEnglish ? (enTrailMap[slug] || slug) : slug;

    if (TRAIL_META[trailSlug]) {
      const meta = TRAIL_META[trailSlug][lang];
      return {
        title: `${meta.title} | Talisson Souza`,
        description: meta.description,
        locale,
        type: 'website',
      };
    }
  }

  // 4. Check tag pages: /artigos/tag/{slug} or /en-us/articles/tag/{slug}
  const tagMatch = pathname.match(/^(?:\/en-us\/articles|\/artigos)\/tag\/([^/]+)$/);
  if (tagMatch) {
    const tag = tagMatch[1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      title: lang === 'pt' ? `Artigos sobre ${tag} | Talisson Souza` : `Articles about ${tag} | Talisson Souza`,
      description: lang === 'pt'
        ? `Artigos e guias técnicos sobre ${tag} por Talisson Souza.`
        : `Technical articles and guides about ${tag} by Talisson Souza.`,
      locale,
      type: 'website',
    };
  }

  // 5. Fallback
  return isEnglish
    ? { title: 'Talisson Souza | Full Stack Developer & CEO', description: 'Full Stack Developer with over 8 years of experience. CEO of Cheetah Solutions Network.', locale: 'en_US', type: 'website' }
    : { title: 'Talisson Souza | Desenvolvedor Full Stack & CEO', description: 'Desenvolvedor Full Stack com mais de 8 anos de experiência. CEO da Cheetah Solutions Network.', locale: 'pt_BR', type: 'website' };
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
