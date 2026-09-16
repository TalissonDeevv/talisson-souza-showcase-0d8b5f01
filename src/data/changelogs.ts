export type ChangelogLocale = "pt" | "en";

export type LocalizedText = Record<ChangelogLocale, string>;

export type ChangelogType =
  | "novo"
  | "atualizacao"
  | "melhoria"
  | "correcao"
  | "alteracao"
  | "remocao"
  | "seguranca"
  | "descontinuacao";

export interface ChangelogCategory {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  seoDescription: LocalizedText;
  path: LocalizedText;
}

export interface ChangelogLink {
  label: LocalizedText;
  href: string;
  external?: boolean;
}

export interface ChangelogEntry {
  id: string;
  slug: string;
  categorySlug: string;
  date: string;
  time: string;
  title: LocalizedText;
  type: ChangelogType;
  description: LocalizedText[];
  impact?: LocalizedText;
  status?: LocalizedText;
  effectiveDate?: string;
  relatedDocument?: LocalizedText;
  relatedLinks?: ChangelogLink[];
  important?: boolean;
}

export const changelogCategories: ChangelogCategory[] = [
  {
    slug: "servicos",
    title: {
      pt: "Serviços",
      en: "Services",
    },
    description: {
      pt: "Atualizações ligadas aos serviços oferecidos, incluindo desenvolvimento, automações, integrações, suporte e manutenção técnica.",
      en: "Updates related to offered services, including development, automations, integrations, support and technical maintenance.",
    },
    seoDescription: {
      pt: "Histórico oficial de mudanças nos serviços de Talisson Souza, incluindo desenvolvimento, automações, integrações, suporte e manutenção.",
      en: "Official change history for Talisson Souza's services, including development, automations, integrations, support and maintenance.",
    },
    path: {
      pt: "/changelogs/servicos",
      en: "/en-us/changelogs/servicos",
    },
  },
  {
    slug: "infraestrutura",
    title: {
      pt: "Infraestrutura",
      en: "Infrastructure",
    },
    description: {
      pt: "Mudanças em hospedagem, disponibilidade, segurança técnica, deploy, domínio e operação.",
      en: "Changes in hosting, availability, technical security, deployment, domain and operation.",
    },
    seoDescription: {
      pt: "Histórico oficial de mudanças de infraestrutura, disponibilidade, segurança técnica e operação do ecossistema Talisson Souza.",
      en: "Official change history for infrastructure, availability, technical security and operation in the Talisson Souza ecosystem.",
    },
    path: {
      pt: "/changelogs/infraestrutura",
      en: "/en-us/changelogs/infraestrutura",
    },
  },
  {
    slug: "site",
    title: {
      pt: "Site",
      en: "Website",
    },
    description: {
      pt: "Alterações no site, experiência de leitura, páginas públicas, navegação e apresentação do conteúdo.",
      en: "Changes to the website, reading experience, public pages, navigation and content presentation.",
    },
    seoDescription: {
      pt: "Histórico oficial de mudanças no site de Talisson Souza, incluindo páginas, navegação, tema visual e experiência de leitura.",
      en: "Official change history for Talisson Souza's website, including pages, navigation, visual theme and reading experience.",
    },
    path: {
      pt: "/changelogs/site",
      en: "/en-us/changelogs/site",
    },
  },
  {
    slug: "politicas",
    title: {
      pt: "Políticas",
      en: "Policies",
    },
    description: {
      pt: "Atualizações em políticas, canais oficiais, regras de contato, documentos e processos que afetam usuários ou clientes.",
      en: "Updates to policies, official channels, contact rules, documents and processes that affect users or clients.",
    },
    seoDescription: {
      pt: "Histórico oficial de mudanças em políticas, canais oficiais, regras de contato e processos públicos de Talisson Souza.",
      en: "Official change history for policies, official channels, contact rules and public processes from Talisson Souza.",
    },
    path: {
      pt: "/changelogs/politicas",
      en: "/en-us/changelogs/politicas",
    },
  },
];

export const changelogTypeLabels: Record<ChangelogType, LocalizedText> = {
  novo: { pt: "Novo", en: "New" },
  atualizacao: { pt: "Atualização", en: "Update" },
  melhoria: { pt: "Melhoria", en: "Improvement" },
  correcao: { pt: "Correção", en: "Fix" },
  alteracao: { pt: "Alteração", en: "Change" },
  remocao: { pt: "Remoção", en: "Removal" },
  seguranca: { pt: "Segurança", en: "Security" },
  descontinuacao: { pt: "Descontinuação", en: "Deprecation" },
};

export const changelogEntries: ChangelogEntry[] = [
  {
    id: "site-home-faq-carreira-timeline-2026-09-16",
    slug: "home-faq-carreira-timeline",
    categorySlug: "site",
    date: "2026-09-16",
    time: "09:41",
    title: {
      pt: "Home, FAQs e carreira atualizados",
      en: "Home, FAQs and career updated",
    },
    type: "melhoria",
    description: [
      {
        pt: "O destaque narrativo da Home foi atualizado para um bloco com foto, linhas editoriais e a frase autoral sobre software e permanência.",
        en: "The Home narrative highlight was updated to a block with photo, editorial lines and the authorial quote about software and permanence.",
      },
      {
        pt: "Os blocos de FAQ do site passaram a usar o novo componente com busca, expansão animada e melhor organização visual.",
        en: "FAQ blocks across the site now use the new component with search, animated expansion and improved visual organization.",
      },
      {
        pt: "A página de carreira recebeu timeline animada e a atuação com a Square Cloud foi marcada como encerrada em 15/09/2026.",
        en: "The career page received an animated timeline and the Square Cloud work was marked as ended on September 15, 2026.",
      },
    ],
    impact: {
      pt: "A leitura da Home, das dúvidas frequentes e da trajetória profissional fica mais clara, consistente e atualizada.",
      en: "The Home, FAQ and professional journey reading experience is clearer, more consistent and up to date.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-16",
    relatedLinks: [
      {
        label: { pt: "Página inicial", en: "Home" },
        href: "/",
      },
      {
        label: { pt: "Carreira", en: "Career" },
        href: "/carreira",
      },
      {
        label: { pt: "FAQ", en: "FAQ" },
        href: "/faq",
      },
    ],
  },
  {
    id: "site-home-depoimentos-editorial-2026-09-15",
    slug: "home-depoimentos-editorial",
    categorySlug: "site",
    date: "2026-09-15",
    time: "12:25",
    title: {
      pt: "Depoimentos da Home em formato editorial",
      en: "Home testimonials in editorial format",
    },
    type: "melhoria",
    description: [
      {
        pt: "A seção de depoimentos da página inicial foi redesenhada em um formato editorial, com número em destaque, fala principal, autor, cargo e navegação por linhas.",
        en: "The home testimonials section was redesigned into an editorial format, with a highlighted number, main quote, author, role and line-based navigation.",
      },
      {
        pt: "A navegação usa botões dedicados de anterior e próximo, sem cursor customizado ou clique escondido na área inteira.",
        en: "Navigation uses dedicated previous and next buttons, without a custom cursor or hidden whole-area click.",
      },
    ],
    impact: {
      pt: "A Home passa a apresentar os feedbacks com uma leitura mais elegante, controlada e consistente em desktop e mobile.",
      en: "The Home page now presents feedback with a more elegant, controlled and consistent reading experience across desktop and mobile.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-15",
    relatedLinks: [
      {
        label: { pt: "Página inicial", en: "Home" },
        href: "/",
      },
      {
        label: { pt: "Feedbacks", en: "Feedbacks" },
        href: "/feedbacks",
      },
    ],
  },
  {
    id: "site-home-depoimentos-marquee-2026-09-15",
    slug: "home-depoimentos-marquee-continuo",
    categorySlug: "site",
    date: "2026-09-15",
    time: "07:18",
    title: {
      pt: "Depoimentos da Home em marquee contínuo",
      en: "Home testimonials in continuous marquee",
    },
    type: "melhoria",
    description: [
      {
        pt: "A seção de depoimentos da página inicial foi atualizada para um carrossel horizontal em marquee, com cartões compactos, avatar, cargo e texto do feedback.",
        en: "The home testimonials section was updated to a horizontal marquee carousel with compact cards, avatar, role and feedback text.",
      },
      {
        pt: "A animação pausa ao passar o mouse e utiliza os depoimentos reais já cadastrados no site.",
        en: "The animation pauses on hover and uses the real testimonials already registered on the website.",
      },
    ],
    impact: {
      pt: "A leitura dos feedbacks fica mais dinâmica na Home, mantendo o acesso para a página completa de depoimentos.",
      en: "Feedback reading is more dynamic on the Home page while keeping access to the full testimonials page.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-15",
    relatedLinks: [
      {
        label: { pt: "Página inicial", en: "Home" },
        href: "/",
      },
      {
        label: { pt: "Feedbacks", en: "Feedbacks" },
        href: "/feedbacks",
      },
    ],
  },
  {
    id: "site-home-depoimentos-split-2026-09-15",
    slug: "home-depoimentos-split-interativo",
    categorySlug: "site",
    date: "2026-09-15",
    time: "06:42",
    title: {
      pt: "Depoimentos da Home em formato split",
      en: "Home testimonials in split format",
    },
    type: "melhoria",
    description: [
      {
        pt: "A seção de depoimentos da página inicial foi redesenhada com leitura em destaque, imagem lateral e navegação interativa por clique.",
        en: "The home testimonials section was redesigned with a highlighted reading layout, side image and click-based interactive navigation.",
      },
      {
        pt: "O novo componente usa os feedbacks reais já publicados no site e substitui o carrossel anterior por uma experiência mais focada.",
        en: "The new component uses the real feedback already published on the website and replaces the previous carousel with a more focused experience.",
      },
    ],
    impact: {
      pt: "A Home passa a destacar cada depoimento com mais presença visual, mantendo acesso para a página completa de feedbacks.",
      en: "The Home page now highlights each testimonial with more visual presence while keeping access to the full feedback page.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-15",
    relatedLinks: [
      {
        label: { pt: "Página inicial", en: "Home" },
        href: "/",
      },
      {
        label: { pt: "Feedbacks", en: "Feedbacks" },
        href: "/feedbacks",
      },
    ],
  },
  {
    id: "site-colaboracoes-remove-logo-agon-2026-09-14",
    slug: "remove-logo-agon-colaboracoes",
    categorySlug: "site",
    date: "2026-09-14",
    time: "18:10",
    title: {
      pt: "Logo da AGON removida de Colaborações",
      en: "AGON logo removed from Collaborations",
    },
    type: "alteracao",
    description: [
      {
        pt: "A logo da AGON by AOC foi removida da seção Colaborações & Atuações da página inicial.",
        en: "The AGON by AOC logo was removed from the Collaborations & Activities section on the home page.",
      },
      {
        pt: "A alteração evita interpretar a marca como uma colaboração ativa nessa seção, mantendo eventuais menções históricas apenas nos contextos apropriados.",
        en: "The change avoids presenting the brand as an active collaboration in that section, while keeping any historical mentions only in the appropriate contexts.",
      },
    ],
    impact: {
      pt: "A seção de colaborações fica mais precisa e alinhada ao contexto atual de atuação.",
      en: "The collaborations section is now more accurate and aligned with the current activity context.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-14",
    relatedLinks: [
      {
        label: { pt: "Página inicial", en: "Home" },
        href: "/",
      },
      {
        label: { pt: "Changelog do site", en: "Website changelog" },
        href: "/changelogs/site",
      },
    ],
  },
  {
    id: "politicas-inspiracao-visual-identidade-autoral-2026-09-14",
    slug: "politica-inspiracao-visual-logo-assinatura",
    categorySlug: "politicas",
    date: "2026-09-14",
    time: "18:07",
    title: {
      pt: "Escopo da política inclui logo e assinatura",
      en: "Policy scope now includes logo and signature",
    },
    type: "atualizacao",
    description: [
      {
        pt: "A política de inspiração visual foi ajustada para deixar claro que também cobre logo, assinatura, assinatura reduzida, marca pessoal, símbolos e elementos de identidade autoral.",
        en: "The visual inspiration policy was adjusted to clarify that it also covers logo, signature, reduced signature, personal brand, symbols and authorial identity elements.",
      },
      {
        pt: "O texto passou a proibir de forma direta qualquer cópia da logo e da assinatura, incluindo redesenho, vetorização, recorte, recoloração, uso como base, variação reconhecível ou aplicação em outro projeto sem autorização expressa.",
        en: "The text now directly prohibits any copying of the logo and signature, including redrawing, vectorizing, cropping, recoloring, use as a basis, recognizable variation or application in another project without express authorization.",
      },
    ],
    impact: {
      pt: "A política deixa de ser apenas sobre layout e passa a proteger de forma explícita a identidade visual completa associada ao nome Talisson Souza.",
      en: "The policy is no longer only about layout and now explicitly protects the full visual identity associated with the Talisson Souza name.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-14",
    relatedLinks: [
      {
        label: { pt: "Política de inspiração visual", en: "Visual inspiration policy" },
        href: "/politicas/inspiracao-visual",
      },
    ],
    important: true,
  },
  {
    id: "politicas-inspiracao-visual-juridica-2026-09-14",
    slug: "politica-inspiracao-visual-ampliada",
    categorySlug: "politicas",
    date: "2026-09-14",
    time: "13:01",
    title: {
      pt: "Política de inspiração visual ampliada",
      en: "Visual inspiration policy expanded",
    },
    type: "atualizacao",
    description: [
      {
        pt: "A política de inspiração visual foi ampliada com linguagem mais jurídica, regras de crédito, limites de uso e orientações sobre remoção ou regularização.",
        en: "The visual inspiration policy was expanded with more legal language, credit rules, usage limits and guidance on removal or regularization.",
      },
      {
        pt: "A URL preferida da política passa a seguir o padrão das demais políticas em /politicas/inspiracao-visual.",
        en: "The preferred policy URL now follows the same pattern as other policies at /politicas/inspiracao-visual.",
      },
      {
        pt: "Também foram incluídos modelos de crédito para footer, página de créditos, página Sobre, documentação e repositório público.",
        en: "Credit models were also added for footer, credits page, About page, documentation and public repository.",
      },
    ],
    impact: {
      pt: "Projetos que usarem o site como referência têm regras mais claras sobre crédito, falsa associação, cópia substancial, templates, uso de elementos protegidos e formas aceitáveis de atribuição pública.",
      en: "Projects using the website as a reference now have clearer rules on credit, false association, substantial copying, templates, use of protected elements and acceptable forms of public attribution.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-14",
    relatedLinks: [
      {
        label: { pt: "Política de inspiração visual", en: "Visual inspiration policy" },
        href: "/politicas/inspiracao-visual",
      },
    ],
    important: true,
  },
  {
    id: "site-agon-mynexis-registro-historico-2026-09-14",
    slug: "agon-mynexis-registro-historico",
    categorySlug: "site",
    date: "2026-09-14",
    time: "12:55",
    title: {
      pt: "Registro histórico de AGON by AOC e Mynexis",
      en: "Historical record for AGON by AOC and Mynexis",
    },
    type: "alteracao",
    description: [
      {
        pt: "As referências a AGON by AOC e Mynexis foram restauradas no site como histórico de atuação, sem indicar vínculo atual.",
        en: "References to AGON by AOC and Mynexis were restored on the website as a historical record, without indicating a current role.",
      },
      {
        pt: "Os textos foram ajustados para deixar claro que a participação foi encerrada e permanece apenas como registro de experiência.",
        en: "The copy was adjusted to make clear that the participation has ended and remains only as an experience record.",
      },
    ],
    impact: {
      pt: "As áreas públicas voltam a mostrar esse histórico sem sugerir parceria, cargo atual ou representação oficial ativa.",
      en: "Public areas show this history again without suggesting a partnership, current position or active official representation.",
    },
    status: {
      pt: "Publicado",
      en: "Published",
    },
    effectiveDate: "2026-09-14",
    relatedLinks: [
      {
        label: { pt: "Página inicial", en: "Home" },
        href: "/",
      },
      {
        label: { pt: "Carreira", en: "Career" },
        href: "/carreira",
      },
    ],
  },
  {
    id: "politicas-afiliados-comissao-50-2026-09-14",
    slug: "comissao-afiliados-50-por-cento",
    categorySlug: "politicas",
    date: "2026-09-14",
    time: "06:30",
    title: {
      pt: "Comissão de afiliados em 50%",
      en: "Affiliate commission set to 50%",
    },
    type: "alteracao",
    description: [
      {
        pt: "A página de afiliados foi atualizada para informar que indicações válidas recebem 50% do valor do projeto.",
        en: "The affiliate page was updated to state that valid referrals receive 50% of the project value.",
      },
      {
        pt: "A regra foi descrita como aplicável após a validação da indicação e a finalização do projeto indicado.",
        en: "The rule was described as applying after referral validation and completion of the referred project.",
      },
    ],
    impact: {
      pt: "Afiliados passam a ter uma comunicação mais direta sobre porcentagem, condição de liberação e cálculo estimado.",
      en: "Affiliates now have clearer communication about percentage, release condition and estimated calculation.",
    },
    status: {
      pt: "Ativo",
      en: "Active",
    },
    effectiveDate: "2026-09-14",
    relatedLinks: [
      {
        label: { pt: "Página de afiliados", en: "Affiliate page" },
        href: "/seja-afiliado",
      },
    ],
    important: true,
  },
  {
    id: "site-changelogs-hierarquicos-2026-09-06",
    slug: "central-de-changelogs-por-area",
    categorySlug: "site",
    date: "2026-09-06",
    time: "17:12",
    title: {
      pt: "Central de changelogs por área",
      en: "Changelog hub by area",
    },
    type: "novo",
    description: [
      {
        pt: "Foi criada uma área pública para registrar mudanças relevantes do site e do ecossistema de forma mais organizada.",
        en: "A public area was created to register relevant changes to the website and ecosystem in a more organized way.",
      },
      {
        pt: "A estrutura separa os registros por área, com uma rota própria para cada contexto. Isso evita misturar mudanças de site, políticas, infraestrutura e serviços em uma única lista.",
        en: "The structure separates records by area, with a dedicated route for each context. This avoids mixing website, policy, infrastructure and service changes in a single list.",
      },
    ],
    impact: {
      pt: "Quem acompanha o site consegue entender rapidamente o que mudou e em qual área a mudança se aplica.",
      en: "People following the website can quickly understand what changed and which area the change applies to.",
    },
    status: {
      pt: "Disponível",
      en: "Available",
    },
    relatedLinks: [
      {
        label: { pt: "Índice de changelogs", en: "Changelog index" },
        href: "/changelogs",
      },
    ],
    important: true,
  },
  {
    id: "politicas-orcamentos-google-forms-2026-09-06",
    slug: "orcamentos-pelo-google-forms",
    categorySlug: "politicas",
    date: "2026-09-06",
    time: "16:55",
    title: {
      pt: "Pedidos de orçamento pelo Google Forms",
      en: "Quote requests through Google Forms",
    },
    type: "alteracao",
    description: [
      {
        pt: "A página própria de orçamento foi removida. Pedidos de orçamento passam a ser direcionados para o Google Forms oficial.",
        en: "The dedicated quote page was removed. Quote requests are now directed to the official Google Forms.",
      },
      {
        pt: "A página de contato passou a exibir uma frase curta indicando esse caminho, sem transformar o contato geral em um formulário de orçamento.",
        en: "The contact page now displays a short note indicating that path, without turning the general contact form into a quote form.",
      },
    ],
    impact: {
      pt: "O processo de orçamento fica concentrado no formulário já utilizado oficialmente, reduzindo duplicidade de canais.",
      en: "The quote process stays concentrated in the form already used officially, reducing channel duplication.",
    },
    status: {
      pt: "Ativo",
      en: "Active",
    },
    effectiveDate: "2026-09-06",
    relatedLinks: [
      {
        label: { pt: "Formulário oficial", en: "Official form" },
        href: "https://forms.gle/qcXb2P6UDjWYa1Qi8",
        external: true,
      },
      {
        label: { pt: "Página de contato", en: "Contact page" },
        href: "/contato",
      },
    ],
  },
  {
    id: "politicas-emails-oficiais-2026-09-06",
    slug: "emails-oficiais-por-finalidade",
    categorySlug: "politicas",
    date: "2026-09-06",
    time: "16:20",
    title: {
      pt: "Emails oficiais por finalidade",
      en: "Official email addresses by purpose",
    },
    type: "atualizacao",
    description: [
      {
        pt: "Os canais de email foram organizados por finalidade, incluindo contato geral, orçamentos, comercial, financeiro, jurídico, parcerias, livro, portfólio, privacidade, segurança e newsletter.",
        en: "Email channels were organized by purpose, including general contact, quotes, commercial, finance, legal, partnerships, book, portfolio, privacy, security and newsletter.",
      },
      {
        pt: "A lista completa deixou de aparecer na página de contato. Cada email específico passa a ficar no contexto adequado, como políticas, livro, portfólio, privacidade, parcerias e segurança.",
        en: "The full list no longer appears on the contact page. Each specific email now stays in the appropriate context, such as policies, book, portfolio, privacy, partnerships and security.",
      },
    ],
    impact: {
      pt: "A página de contato fica mais objetiva e os canais oficiais continuam documentados sem misturar todos os assuntos em um único bloco.",
      en: "The contact page becomes more focused and official channels remain documented without mixing every subject into one block.",
    },
    status: {
      pt: "Ativo",
      en: "Active",
    },
    effectiveDate: "2026-09-06",
    relatedDocument: {
      pt: "Canais oficiais de comunicação",
      en: "Official communication channels",
    },
    relatedLinks: [
      {
        label: { pt: "Página de contato", en: "Contact page" },
        href: "/contato",
      },
      {
        label: { pt: "Políticas", en: "Policies" },
        href: "/politicas",
      },
    ],
  },
  {
    id: "site-logos-colaboracoes-clicaveis-2026-09-04",
    slug: "logos-de-colaboracoes-clicaveis",
    categorySlug: "site",
    date: "2026-09-04",
    time: "11:28",
    title: {
      pt: "Logos de colaborações clicáveis",
      en: "Clickable collaboration logos",
    },
    type: "correcao",
    description: [
      {
        pt: "As logos exibidas em colaborações passaram a funcionar como links em todos os pontos da seção, não apenas quando apareciam no centro da área.",
        en: "Logos displayed in collaborations now work as links across the whole section, not only when they appear in the center of the area.",
      },
      {
        pt: "Também foi removida a animação de subida no hover para manter a área mais direta e estável.",
        en: "The upward hover animation was also removed to keep the area more direct and stable.",
      },
    ],
    impact: {
      pt: "Visitantes conseguem acessar os links oficiais das empresas com menos tentativa e erro.",
      en: "Visitors can access the companies' official links with less trial and error.",
    },
    status: {
      pt: "Corrigido",
      en: "Fixed",
    },
    relatedLinks: [
      {
        label: { pt: "Carreira", en: "Career" },
        href: "/carreira",
      },
    ],
  },
  {
    id: "site-tema-claro-2026-08-29",
    slug: "tema-claro-com-ajustes-de-contraste",
    categorySlug: "site",
    date: "2026-08-29",
    time: "18:59",
    title: {
      pt: "Tema claro com ajustes de contraste",
      en: "Light theme with contrast adjustments",
    },
    type: "melhoria",
    description: [
      {
        pt: "O site recebeu suporte a tema claro com ajustes para textos, assinatura, logos e elementos visuais que precisavam manter contraste.",
        en: "The site received light theme support with adjustments for text, signature, logos and visual elements that needed to keep contrast.",
      },
      {
        pt: "A mudança foi feita com cuidado para preservar a identidade visual no tema escuro e evitar elementos transparentes ou apagados no tema claro.",
        en: "The change was made carefully to preserve the visual identity in dark mode and avoid transparent or faded elements in light mode.",
      },
    ],
    impact: {
      pt: "Quem prefere navegar em tema claro passa a ter uma experiência mais legível sem perder a identidade do site.",
      en: "People who prefer browsing in light mode now have a more readable experience without losing the site's identity.",
    },
    status: {
      pt: "Ativo",
      en: "Active",
    },
  },
  {
    id: "site-assinatura-visual-2026-08-26",
    slug: "assinatura-visual-atualizada",
    categorySlug: "site",
    date: "2026-08-26",
    time: "16:32",
    title: {
      pt: "Assinatura visual atualizada",
      en: "Visual signature updated",
    },
    type: "atualizacao",
    description: [
      {
        pt: "A assinatura principal da home foi substituída por uma nova versão autoral.",
        en: "The main home signature was replaced with a new authorial version.",
      },
      {
        pt: "Navbar e rodapé passaram a usar a versão reduzida da assinatura, substituindo o símbolo antigo.",
        en: "Navbar and footer now use the reduced signature version, replacing the old symbol.",
      },
    ],
    impact: {
      pt: "A identidade visual ficou mais alinhada ao branding atual do site.",
      en: "The visual identity is now more aligned with the current site branding.",
    },
    status: {
      pt: "Ativo",
      en: "Active",
    },
  },
  {
    id: "site-qr-code-livro-2026-08-21",
    slug: "qr-code-de-compra-no-livro",
    categorySlug: "site",
    date: "2026-08-21",
    time: "19:55",
    title: {
      pt: "QR Code de compra na página do livro",
      en: "Purchase QR Code on the book page",
    },
    type: "melhoria",
    description: [
      {
        pt: "A página do livro recebeu uma seção com QR Code para facilitar a compra pelo celular.",
        en: "The book page received a QR Code section to make mobile purchase easier.",
      },
      {
        pt: "Depois, o fundo branco externo do QR Code foi removido para manter a composição visual mais limpa.",
        en: "Later, the external white background around the QR Code was removed to keep the visual composition cleaner.",
      },
    ],
    impact: {
      pt: "A compra pelo celular fica mais direta, principalmente para quem acessa a página em outro dispositivo.",
      en: "Mobile purchase becomes more direct, especially for people viewing the page on another device.",
    },
    status: {
      pt: "Ativo",
      en: "Active",
    },
    relatedLinks: [
      {
        label: { pt: "Página do livro", en: "Book page" },
        href: "/livro",
      },
    ],
  },
];

const timestampFor = (entry: ChangelogEntry) => Date.parse(`${entry.date}T${entry.time}:00-03:00`);

export const sortChangelogsByDate = (entries: ChangelogEntry[]) =>
  [...entries].sort((a, b) => timestampFor(b) - timestampFor(a));

export const getChangelogCategory = (slug: string | undefined) =>
  changelogCategories.find((category) => category.slug === slug);

export const getChangelogsByCategory = (categorySlug: string) =>
  sortChangelogsByDate(changelogEntries.filter((entry) => entry.categorySlug === categorySlug));

export const getLatestChangelogForCategory = (categorySlug: string) =>
  getChangelogsByCategory(categorySlug)[0];

export const getChangelogEntryPath = (entry: ChangelogEntry, locale: ChangelogLocale) => {
  const category = getChangelogCategory(entry.categorySlug);
  const categoryPath = category?.path[locale] ?? `/changelogs/${entry.categorySlug}`;
  return `${categoryPath}/${entry.slug}`;
};

export const formatChangelogDate = (date: string, locale: ChangelogLocale) =>
  new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00-03:00`));

export const formatChangelogTime = (time: string, locale: ChangelogLocale) =>
  locale === "pt" ? `${time} BRT` : `${time} BRT`;

export const getChangelogTypeLabel = (type: ChangelogType, locale: ChangelogLocale) =>
  changelogTypeLabels[type][locale];

export const CHANGELOG_SEARCH_MIN_ITEMS = 5;
