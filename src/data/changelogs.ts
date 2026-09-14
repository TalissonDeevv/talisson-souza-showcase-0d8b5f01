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
