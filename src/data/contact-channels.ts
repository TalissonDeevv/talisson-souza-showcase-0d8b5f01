export const contactEmails = {
  contact: "contato@talissonsouza.com.br",
  budget: "orcamento@talissonsouza.com.br",
  commercial: "comercial@talissonsouza.com.br",
  finance: "financeiro@talissonsouza.com.br",
  legal: "juridico@talissonsouza.com.br",
  partnerships: "parcerias@talissonsouza.com.br",
  book: "livro@talissonsouza.com.br",
  portfolio: "portfolio@talissonsouza.com.br",
  privacy: "privacidade@talissonsouza.com.br",
  security: "seguranca@talissonsouza.com.br",
  newsletter: "newsletter@talissonsouza.com.br",
} as const;

export type ContactEmailKey = keyof typeof contactEmails;

export const budgetFormUrl = "https://forms.gle/qcXb2P6UDjWYa1Qi8";

export const contactEmailChannels: Array<{
  key: ContactEmailKey;
  label: { pt: string; en: string };
  description: { pt: string; en: string };
}> = [
  {
    key: "contact",
    label: { pt: "Contato Talisson Souza", en: "Contact Talisson Souza" },
    description: { pt: "Dúvidas gerais e primeiro contato.", en: "General questions and first contact." },
  },
  {
    key: "budget",
    label: { pt: "Orçamentos Talisson Souza", en: "Quotes Talisson Souza" },
    description: { pt: "Novos projetos, escopo e estimativas.", en: "New projects, scope and estimates." },
  },
  {
    key: "commercial",
    label: { pt: "Comercial Talisson Souza", en: "Commercial Talisson Souza" },
    description: { pt: "Conversas comerciais e oportunidades.", en: "Commercial conversations and opportunities." },
  },
  {
    key: "finance",
    label: { pt: "Financeiro Talisson Souza", en: "Finance Talisson Souza" },
    description: { pt: "Pagamentos, cobranças e notas.", en: "Payments, billing and invoices." },
  },
  {
    key: "legal",
    label: { pt: "Jurídico Talisson Souza", en: "Legal Talisson Souza" },
    description: { pt: "Demandas formais, contratos e direitos.", en: "Formal requests, contracts and rights." },
  },
  {
    key: "partnerships",
    label: { pt: "Parcerias Talisson Souza", en: "Partnerships Talisson Souza" },
    description: { pt: "Parcerias, afiliados e indicações.", en: "Partnerships, affiliates and referrals." },
  },
  {
    key: "book",
    label: { pt: "Superando Limites Talisson Souza", en: "Overcoming Limits Talisson Souza" },
    description: { pt: "Dúvidas sobre compra, obra e canais oficiais.", en: "Questions about purchase, the book and official channels." },
  },
  {
    key: "portfolio",
    label: { pt: "Portfólio Talisson Souza", en: "Portfolio Talisson Souza" },
    description: { pt: "Cases, autorizações e apresentação de projetos.", en: "Cases, approvals and project presentation." },
  },
  {
    key: "privacy",
    label: { pt: "Privacidade Talisson Souza", en: "Privacy Talisson Souza" },
    description: { pt: "LGPD, dados pessoais e solicitações de titulares.", en: "LGPD, personal data and data subject requests." },
  },
  {
    key: "security",
    label: { pt: "Segurança Talisson Souza", en: "Security Talisson Souza" },
    description: { pt: "Incidentes, golpes, phishing e perfis falsos.", en: "Incidents, scams, phishing and impersonation." },
  },
  {
    key: "newsletter",
    label: { pt: "Newsletter Talisson Souza", en: "Newsletter Talisson Souza" },
    description: { pt: "Dúvidas sobre publicações e assinatura.", en: "Questions about posts and subscription." },
  },
];

const normalizeSubject = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const getContactRecipientForSubject = (subject: string) => {
  const normalized = normalizeSubject(subject);

  if (normalized.includes("parceria") || normalized.includes("partnership")) {
    return contactEmails.partnerships;
  }

  if (
    normalized.includes("orcamento") ||
    normalized.includes("novo projeto") ||
    normalized.includes("new project") ||
    normalized.includes("consultoria") ||
    normalized.includes("consulting") ||
    normalized.includes("freelance")
  ) {
    return contactEmails.budget;
  }

  if (normalized.includes("comercial") || normalized.includes("commercial")) {
    return contactEmails.commercial;
  }

  if (
    normalized.includes("financeiro") ||
    normalized.includes("finance") ||
    normalized.includes("pagamento") ||
    normalized.includes("payment") ||
    normalized.includes("cobranca") ||
    normalized.includes("billing") ||
    normalized.includes("reembolso") ||
    normalized.includes("refund")
  ) {
    return contactEmails.finance;
  }

  if (
    normalized.includes("juridico") ||
    normalized.includes("legal") ||
    normalized.includes("contrato") ||
    normalized.includes("contract")
  ) {
    return contactEmails.legal;
  }

  if (
    normalized.includes("livro") ||
    normalized.includes("book") ||
    normalized.includes("superando limites") ||
    normalized.includes("overcoming limits")
  ) {
    return contactEmails.book;
  }

  if (
    normalized.includes("portfolio") ||
    normalized.includes("portifolio") ||
    normalized.includes("case")
  ) {
    return contactEmails.portfolio;
  }

  if (
    normalized.includes("privacidade") ||
    normalized.includes("privacy") ||
    normalized.includes("lgpd") ||
    normalized.includes("dados pessoais") ||
    normalized.includes("personal data")
  ) {
    return contactEmails.privacy;
  }

  if (
    normalized.includes("seguranca") ||
    normalized.includes("security") ||
    normalized.includes("phishing") ||
    normalized.includes("golpe") ||
    normalized.includes("scam") ||
    normalized.includes("incidente") ||
    normalized.includes("incident")
  ) {
    return contactEmails.security;
  }

  if (normalized.includes("newsletter")) {
    return contactEmails.newsletter;
  }

  return contactEmails.contact;
};

export const mailtoHref = (email: string, subject?: string) =>
  `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
