import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  FileText,
  Globe2,
  Image,
  Inbox,
  Lock,
  Mail,
  MessageSquare,
  Newspaper,
  Settings,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export type StudioStatus = "Publicado" | "Rascunho" | "Revisão" | "Agendado" | "Arquivado";
export type StudioPriority = "Crítico" | "Alto" | "Médio" | "Baixo";

export interface StudioNavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  group: "Operação" | "Conteúdo" | "Crescimento" | "Comunidade" | "Sistema";
}

export interface StudioArticleMock {
  id: string;
  title: string;
  slug: string;
  status: StudioStatus;
  author: string;
  category: string;
  readingTime: string;
  seoScore: number;
  updatedAt: string;
  traffic: string;
}

export interface StudioMediaMock {
  id: string;
  name: string;
  type: "Imagem" | "PDF" | "Video";
  folder: string;
  size: string;
  dimensions: string;
  alt: string;
  usedIn: string;
}

export interface StudioCommentMock {
  id: string;
  author: string;
  article: string;
  content: string;
  sentiment: "positivo" | "neutro" | "risco";
  status: "Na fila" | "Aprovado" | "Oculto";
  source: "Discord" | "Site";
}

export interface StudioUserMock {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Editor" | "Moderador" | "Analista";
  status: "Ativo" | "Convite" | "Revisar";
  lastSeen: string;
}

export interface StudioActivityMock {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
  priority: StudioPriority;
}

export interface StudioCampaignMock {
  id: string;
  name: string;
  status: "Planejada" | "Pronta" | "Enviada";
  audience: string;
  openRate: string;
  scheduledFor: string;
}

export const studioNavItems: readonly StudioNavItem[] = [
  { label: "Dashboard", path: "/studio", icon: BarChart3, group: "Operação" },
  { label: "Artigos", path: "/studio/articles", icon: Newspaper, group: "Conteúdo" },
  { label: "Editor", path: "/studio/articles/editor", icon: FileText, group: "Conteúdo" },
  { label: "Mídia", path: "/studio/media", icon: Image, group: "Conteúdo" },
  { label: "SEO", path: "/studio/seo", icon: Globe2, group: "Crescimento" },
  { label: "Newsletter", path: "/studio/newsletter", icon: Mail, group: "Crescimento" },
  { label: "Comentários", path: "/studio/comments", icon: MessageSquare, group: "Comunidade" },
  { label: "Analytics", path: "/studio/analytics", icon: Activity, group: "Crescimento" },
  { label: "Usuários", path: "/studio/users", icon: Users, group: "Sistema" },
  { label: "Configurações", path: "/studio/settings", icon: Settings, group: "Sistema" },
];

export const studioMetrics = [
  { label: "Conteúdos ativos", value: "128", delta: "+12%", tone: "success" },
  { label: "Leitura média", value: "6m 42s", delta: "+8%", tone: "success" },
  { label: "Comentários na fila", value: "19", delta: "4 urgentes", tone: "warning" },
  { label: "Saúde do sistema", value: "98%", delta: "estável", tone: "info" },
] as const;

export const studioArticles: readonly StudioArticleMock[] = [
  {
    id: "art-001",
    title: "Por que comunidades no Discord morrem tão rápido",
    slug: "comunidades-discord-morrem-rapido",
    status: "Revisão",
    author: "Talisson Souza",
    category: "Comunidades",
    readingTime: "18 min",
    seoScore: 92,
    updatedAt: "há 12 min",
    traffic: "4.8k",
  },
  {
    id: "art-002",
    title: "Como monetizar uma comunidade no Discord sem depender de anúncios",
    slug: "monetizar-comunidade-discord",
    status: "Rascunho",
    author: "Talisson Souza",
    category: "Negócios",
    readingTime: "22 min",
    seoScore: 88,
    updatedAt: "há 44 min",
    traffic: "2.1k",
  },
  {
    id: "art-003",
    title: "Como empresas avaliam um desenvolvedor full stack",
    slug: "empresas-avaliam-desenvolvedor-fullstack",
    status: "Publicado",
    author: "Talisson Souza",
    category: "Carreira",
    readingTime: "13 min",
    seoScore: 96,
    updatedAt: "ontem",
    traffic: "9.7k",
  },
  {
    id: "art-004",
    title: "Checklist de segurança para comunidades com login Discord",
    slug: "checklist-seguranca-discord",
    status: "Agendado",
    author: "Equipe TS",
    category: "Segurança",
    readingTime: "9 min",
    seoScore: 84,
    updatedAt: "sexta",
    traffic: "1.3k",
  },
];

export const studioMedia: readonly StudioMediaMock[] = [
  {
    id: "med-001",
    name: "discord-community-cover.webp",
    type: "Imagem",
    folder: "Artigos",
    size: "428 KB",
    dimensions: "1600x900",
    alt: "Interface de comunidade profissional no Discord",
    usedIn: "2 artigos",
  },
  {
    id: "med-002",
    name: "ts-studio-audit-report.pdf",
    type: "PDF",
    folder: "Downloads",
    size: "1.8 MB",
    dimensions: "A4",
    alt: "Relatório técnico do TS Studio",
    usedIn: "1 página",
  },
  {
    id: "med-003",
    name: "seo-open-graph-preview.png",
    type: "Imagem",
    folder: "SEO",
    size: "312 KB",
    dimensions: "1200x630",
    alt: "Prévia Open Graph de artigo técnico",
    usedIn: "5 artigos",
  },
  {
    id: "med-004",
    name: "community-analytics-loop.mp4",
    type: "Video",
    folder: "Motion",
    size: "7.2 MB",
    dimensions: "1920x1080",
    alt: "Animação de métricas da comunidade",
    usedIn: "não publicado",
  },
];

export const studioComments: readonly StudioCommentMock[] = [
  {
    id: "com-001",
    author: "Marcos.dev",
    article: "Comunidades no Discord",
    content: "A parte sobre excesso de canais explicou exatamente o problema do meu servidor.",
    sentiment: "positivo",
    status: "Aprovado",
    source: "Discord",
  },
  {
    id: "com-002",
    author: "Luana",
    article: "Monetização no Discord",
    content: "Vale complementar com uma seção sobre comunidades B2B pequenas.",
    sentiment: "neutro",
    status: "Na fila",
    source: "Site",
  },
  {
    id: "com-003",
    author: "ghost-user",
    article: "Segurança de contas Discord",
    content: "Comentário repetido com link suspeito removido da prévia.",
    sentiment: "risco",
    status: "Oculto",
    source: "Discord",
  },
];

export const studioUsers: readonly StudioUserMock[] = [
  { id: "usr-001", name: "Talisson Souza", email: "talisson@studio.local", role: "Owner", status: "Ativo", lastSeen: "agora" },
  { id: "usr-002", name: "Editor Convidado", email: "editor@studio.local", role: "Editor", status: "Ativo", lastSeen: "há 2h" },
  { id: "usr-003", name: "Moderação", email: "mod@studio.local", role: "Moderador", status: "Revisar", lastSeen: "ontem" },
  { id: "usr-004", name: "Analista SEO", email: "seo@studio.local", role: "Analista", status: "Convite", lastSeen: "pendente" },
];

export const studioActivities: readonly StudioActivityMock[] = [
  { id: "act-001", actor: "Talisson", action: "revisou o SEO", target: "Comunidades no Discord", time: "há 8 min", priority: "Médio" },
  { id: "act-002", actor: "Sistema", action: "gerou prévia OG", target: "Monetização no Discord", time: "há 18 min", priority: "Baixo" },
  { id: "act-003", actor: "Moderação", action: "ocultou comentário", target: "Segurança Discord", time: "há 31 min", priority: "Alto" },
  { id: "act-004", actor: "Analytics", action: "detectou queda de CTR", target: "Artigos de carreira", time: "há 1h", priority: "Médio" },
];

export const studioCampaigns: readonly StudioCampaignMock[] = [
  { id: "camp-001", name: "Carta semanal para criadores técnicos", status: "Planejada", audience: "4.280 inscritos", openRate: "42%", scheduledFor: "sexta 09:00" },
  { id: "camp-002", name: "Checklist de comunidade segura", status: "Pronta", audience: "1.120 segmentados", openRate: "novo", scheduledFor: "segunda 08:30" },
  { id: "camp-003", name: "Trilha de Discord profissional", status: "Enviada", audience: "3.906 inscritos", openRate: "47%", scheduledFor: "ontem" },
];

export const studioChartSeries = [42, 48, 45, 61, 58, 64, 72, 69, 78, 82, 79, 86];

export const studioNotifications = [
  { id: "not-001", icon: Bell, title: "Prévia de SEO atualizada", description: "Open Graph pronto para revisão.", time: "2 min" },
  { id: "not-002", icon: Shield, title: "Permissão sensível", description: "Alteração de role aguardando revisão.", time: "18 min" },
  { id: "not-003", icon: Inbox, title: "Novos comentários", description: "3 itens entraram na fila de moderação.", time: "1h" },
];

export const studioIntegrations = [
  { name: "Supabase Principal", status: "Pronto para conexão", icon: Lock },
  { name: "Supabase Comentários", status: "Pronto para conexão", icon: MessageSquare },
  { name: "Discord OAuth", status: "Pronto para conexão", icon: Bot },
  { name: "Resend", status: "Pronto para conexão", icon: Mail },
  { name: "Sitemap", status: "Pronto visual", icon: BookOpen },
  { name: "Remotion exports", status: "Estrutura pronta", icon: Sparkles },
] as const;
