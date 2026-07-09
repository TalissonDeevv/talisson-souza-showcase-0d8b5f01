import { useMemo, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Clock,
  CloudUpload,
  Code2,
  Eye,
  FileText,
  Globe2,
  Image,
  Languages,
  Lock,
  Mail,
  MessageSquare,
  MousePointerClick,
  Newspaper,
  Plus,
  RefreshCw,
  Save,
  Search,
  Send,
  Settings,
  Shield,
  Sparkles,
  Tag,
  Undo2,
  Upload,
  Users,
} from "lucide-react";
import {
  StudioAvatar,
  StudioBadge,
  StudioButton,
  StudioDataTable,
  StudioDialogMock,
  StudioIconButton,
  StudioInput,
  StudioMetric,
  StudioMiniChart,
  StudioPageFrame,
  StudioPagination,
  StudioPanel,
  StudioProgress,
  StudioSearchBar,
  StudioSectionHeader,
  StudioSelectMock,
  StudioSkeleton,
  StudioState,
  StudioTabs,
  StudioTextarea,
} from "../../design-system";
import {
  studioActivities,
  studioArticles,
  studioCampaigns,
  studioChartSeries,
  studioComments,
  studioIntegrations,
  studioMedia,
  studioMetrics,
  studioUsers,
  type StudioArticleMock,
  type StudioCommentMock,
  type StudioMediaMock,
  type StudioUserMock,
} from "../../mock/data";
import { useStudioMockStore } from "../../mock/store-context";
import { studioStaggerItem } from "../../motion";

function statusTone(status: string) {
  if (["Publicado", "Aprovado", "Ativo", "Enviada", "Pronta"].includes(status)) return "success" as const;
  if (["Revisão", "Na fila", "Revisar", "Planejada", "Agendado"].includes(status)) return "warning" as const;
  if (["Oculto", "Arquivado"].includes(status)) return "danger" as const;
  return "neutral" as const;
}

function CompactList({
  items,
}: {
  items: readonly { title: string; description: string; meta?: string; icon?: ReactNode }[];
}) {
  return (
    <div className="divide-y divide-border/45">
      {items.map((item) => (
        <motion.div key={item.title} variants={studioStaggerItem} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border/50 bg-foreground/[0.04] text-muted-foreground">
            {item.icon ?? <Sparkles className="h-4 w-4" />}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium tracking-normal text-foreground">{item.title}</p>
            <p className="mt-1 text-xs leading-5 tracking-normal text-muted-foreground">{item.description}</p>
            {item.meta ? <p className="mt-2 text-[11px] tracking-normal text-muted-foreground/75">{item.meta}</p> : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function StudioLoginPage() {
  const navigate = useNavigate();
  const { signIn } = useStudioMockStore();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 text-foreground">
      <div className="pointer-events-none absolute inset-0 texture-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="grid w-full max-w-5xl gap-6 lg:grid-cols-[1fr_420px]"
      >
        <div className="hidden rounded-lg border border-border/45 bg-card/55 p-8 backdrop-blur-xl lg:block">
          <StudioBadge>TS Studio</StudioBadge>
          <h1 className="mt-6 max-w-xl font-serif text-5xl font-semibold leading-tight tracking-normal">
            O centro editorial do ecossistema Talisson Souza.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 tracking-normal text-muted-foreground">
            Um painel administrativo refinado para conteúdo, comunidade, SEO, mídia, segurança e crescimento.
            Nesta fase, a experiência navega com dados de prévia para validar produto, fluxo e qualidade visual.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Conteúdo", "Comunidade", "SEO"].map((item) => (
              <div key={item} className="rounded-md border border-border/45 bg-foreground/[0.035] p-3">
                <p className="text-xs tracking-normal text-muted-foreground">{item}</p>
                <p className="mt-2 font-serif text-2xl font-semibold tracking-normal">100%</p>
              </div>
            ))}
          </div>
        </div>

        <StudioPanel className="p-6">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-normal text-foreground">Entrar no Studio</h2>
              <p className="text-xs tracking-normal text-muted-foreground">Ambiente administrativo</p>
            </div>
          </div>
          <div className="space-y-4">
            <StudioInput value="talisson@studio.local" readOnly leftIcon={<Mail className="h-4 w-4" />} />
            <StudioInput value="••••••••••••" readOnly type="password" leftIcon={<Lock className="h-4 w-4" />} />
            <div className="rounded-md border border-border/45 bg-foreground/[0.035] p-3 text-xs leading-5 tracking-normal text-muted-foreground">
              Autenticação real será conectada depois da aprovação da experiência.
            </div>
            <StudioButton
              className="w-full"
              icon={<ArrowRight className="h-4 w-4" />}
              onClick={() => {
                signIn();
                navigate("/studio");
              }}
            >
              Acessar preview
            </StudioButton>
          </div>
        </StudioPanel>
      </motion.div>
    </section>
  );
}

export function StudioDashboardPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Operação"
        title="Visão executiva"
        description="Resumo de conteúdo, comunidade, SEO, mídia e sinais operacionais do site em ambiente de prévia."
        action={<StudioButton icon={<Plus className="h-4 w-4" />}>Novo item</StudioButton>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {studioMetrics.map((metric) => (
          <StudioMetric key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <StudioPanel>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold tracking-normal">Engajamento editorial</h2>
              <p className="mt-1 text-sm tracking-normal text-muted-foreground">Leituras, cliques e retorno dos últimos ciclos.</p>
            </div>
            <StudioBadge tone="info">analytics</StudioBadge>
          </div>
          <StudioMiniChart values={studioChartSeries} />
        </StudioPanel>
        <StudioPanel>
          <h2 className="text-lg font-semibold tracking-normal">Atividade</h2>
          <CompactList
            items={studioActivities.map((activity) => ({
              title: `${activity.actor} ${activity.action}`,
              description: activity.target,
              meta: `${activity.time} · ${activity.priority}`,
              icon: <Clock className="h-4 w-4" />,
            }))}
          />
        </StudioPanel>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <StudioPanel>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-normal">Últimos artigos</h2>
            <Link to="/studio/articles" className="text-sm tracking-normal text-muted-foreground hover:text-foreground">
              Ver todos
            </Link>
          </div>
          <StudioDataTable
            data={studioArticles.slice(0, 3)}
            getKey={(item) => item.id}
            columns={[
              { key: "title", header: "Título", render: (item) => <span className="font-medium">{item.title}</span> },
              { key: "status", header: "Status", render: (item) => <StudioBadge tone={statusTone(item.status)}>{item.status}</StudioBadge> },
              { key: "seo", header: "SEO", render: (item) => <span>{item.seoScore}%</span> },
            ]}
          />
        </StudioPanel>
        <StudioPanel>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-normal">Comentários recentes</h2>
            <StudioBadge tone="warning">3 sinais</StudioBadge>
          </div>
          <CompactList
            items={studioComments.map((comment) => ({
              title: comment.author,
              description: comment.content,
              meta: `${comment.article} · ${comment.source}`,
              icon: <MessageSquare className="h-4 w-4" />,
            }))}
          />
        </StudioPanel>
      </div>
    </StudioPageFrame>
  );
}

export function StudioArticlesPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Todos");
  const articles = useMemo(() => {
    return studioArticles.filter((article) => {
      const matchesQuery = article.title.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = active === "Todos" || article.status === active;
      return matchesQuery && matchesStatus;
    });
  }, [active, query]);

  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Conteúdo"
        title="Artigos"
        description="Lista editorial com busca, filtros, status, autores, categorias e saúde de SEO."
        action={<StudioButton icon={<FileText className="h-4 w-4" />} onClick={() => navigate("/studio/articles/editor")}>Abrir editor</StudioButton>}
      />
      <StudioPanel>
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <StudioTabs tabs={["Todos", "Publicado", "Rascunho", "Revisão", "Agendado"]} active={active} onChange={setActive} />
          <div className="lg:w-[360px]">
            <StudioSearchBar value={query} onChange={setQuery} placeholder="Buscar artigos" />
          </div>
        </div>
        <StudioDataTable<StudioArticleMock>
          data={articles}
          getKey={(item) => item.id}
          columns={[
            {
              key: "title",
              header: "Artigo",
              render: (item) => (
                <div>
                  <p className="font-medium tracking-normal">{item.title}</p>
                  <p className="mt-1 text-xs tracking-normal text-muted-foreground">/{item.slug}</p>
                </div>
              ),
            },
            { key: "status", header: "Status", render: (item) => <StudioBadge tone={statusTone(item.status)}>{item.status}</StudioBadge> },
            { key: "category", header: "Categoria", render: (item) => item.category },
            { key: "author", header: "Autor", render: (item) => item.author },
            { key: "seo", header: "SEO", render: (item) => <StudioProgress value={item.seoScore} /> },
            { key: "updated", header: "Atualizado", render: (item) => item.updatedAt },
          ]}
        />
        <div className="mt-4">
          <StudioPagination page={1} totalPages={4} />
        </div>
      </StudioPanel>
    </StudioPageFrame>
  );
}

export function StudioArticleEditorPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Editor"
        title="Edição refinada"
        description="Editor visual com metadados, preview e checklist editorial para validação do fluxo."
        action={
          <>
            <StudioButton variant="secondary" icon={<Eye className="h-4 w-4" />}>Preview</StudioButton>
            <StudioButton icon={<Save className="h-4 w-4" />} onClick={() => setDialogOpen(true)}>Salvar rascunho</StudioButton>
          </>
        }
      />
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <StudioPanel className="space-y-4">
          <StudioInput defaultValue="Por que comunidades no Discord morrem tão rápido" />
          <StudioTextarea defaultValue="Um servidor cheio nem sempre é uma comunidade. O problema começa quando a estrutura do Discord tenta compensar a falta de cultura, liderança e propósito..." className="min-h-[380px]" />
          <div className="grid gap-3 md:grid-cols-3">
            <StudioSelectMock label="Categoria" options={["Comunidades"]} />
            <StudioSelectMock label="Autor" options={["Talisson Souza"]} />
            <StudioSelectMock label="Status" options={["Revisão"]} />
          </div>
        </StudioPanel>
        <div className="space-y-4">
          <StudioPanel>
            <h2 className="text-lg font-semibold tracking-normal">Checklist</h2>
            <div className="mt-4 space-y-3">
              {[
                ["SEO title", 100],
                ["Meta description", 86],
                ["Open Graph", 92],
                ["Links internos", 74],
              ].map(([label, value]) => (
                <div key={label.toString()}>
                  <div className="mb-2 flex items-center justify-between text-sm tracking-normal">
                    <span>{label}</span>
                    <span className="text-muted-foreground">{value}%</span>
                  </div>
                  <StudioProgress value={Number(value)} />
                </div>
              ))}
            </div>
          </StudioPanel>
          <StudioPanel>
            <h2 className="text-lg font-semibold tracking-normal">Preview do artigo</h2>
            <div className="mt-4 rounded-lg border border-border/45 bg-background/48 p-4">
              <StudioBadge>Comunidades</StudioBadge>
              <h3 className="mt-4 text-xl font-semibold tracking-normal">Por que comunidades no Discord morrem tão rápido</h3>
              <p className="mt-3 text-sm leading-6 tracking-normal text-muted-foreground">
                Uma análise prática sobre cultura, engajamento e retenção dentro de servidores profissionais.
              </p>
            </div>
          </StudioPanel>
        </div>
      </div>
      <AnimatePresence>
        {dialogOpen ? (
          <StudioDialogMock
            title="Rascunho salvo visualmente"
            description="A experiência visual foi validada. Persistência real entra na fase de conexão."
            onClose={() => setDialogOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </StudioPageFrame>
  );
}

export function StudioMediaPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Mídia"
        title="Biblioteca visual"
        description="Grid de mídia, upload, pastas e preview para validar a experiência antes do storage real."
        action={<StudioButton icon={<Upload className="h-4 w-4" />}>Upload</StudioButton>}
      />
      <div className="grid gap-4 xl:grid-cols-[320px_1fr]">
        <StudioPanel>
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-dashed border-border/60 bg-foreground/[0.025] p-6 text-center">
            <CloudUpload className="h-8 w-8 text-muted-foreground" />
            <h2 className="mt-4 text-base font-semibold tracking-normal">Arraste arquivos aqui</h2>
            <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
              Área de upload preparada para validação de MIME, limites e storage.
            </p>
            <StudioButton className="mt-5" variant="secondary">Selecionar arquivos</StudioButton>
          </div>
        </StudioPanel>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {studioMedia.map((media) => (
            <StudioPanel key={media.id} className="p-3">
              <div className="flex aspect-video items-center justify-center rounded-md border border-border/45 bg-foreground/[0.04]">
                {media.type === "Imagem" ? <Image className="h-8 w-8 text-muted-foreground" /> : <FileText className="h-8 w-8 text-muted-foreground" />}
              </div>
              <div className="mt-3">
                <p className="truncate text-sm font-medium tracking-normal">{media.name}</p>
                <p className="mt-1 text-xs tracking-normal text-muted-foreground">{media.folder} · {media.size}</p>
                <p className="mt-3 text-xs leading-5 tracking-normal text-muted-foreground">{media.alt}</p>
              </div>
            </StudioPanel>
          ))}
        </div>
      </div>
    </StudioPageFrame>
  );
}

export function StudioSeoPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Crescimento"
        title="SEO e metadados"
        description="Governança visual para title, description, Open Graph, robots, sitemap e Schema.org."
        action={<StudioButton icon={<RefreshCw className="h-4 w-4" />}>Revalidar</StudioButton>}
      />
      <div className="grid gap-4 xl:grid-cols-[1fr_420px]">
        <StudioPanel className="space-y-4">
          <StudioInput defaultValue="Por que comunidades no Discord morrem tão rápido" leftIcon={<Globe2 className="h-4 w-4" />} />
          <StudioTextarea defaultValue="Entenda por que servidores no Discord perdem engajamento e como criar uma comunidade com cultura, propósito e participação contínua." />
          <div className="grid gap-3 md:grid-cols-3">
            {["Robots liberado", "Sitemap pronto", "Schema Article"].map((item) => (
              <div key={item} className="rounded-md border border-border/45 bg-foreground/[0.035] p-3">
                <Check className="h-4 w-4 text-emerald-100" />
                <p className="mt-3 text-sm font-medium tracking-normal">{item}</p>
              </div>
            ))}
          </div>
        </StudioPanel>
        <StudioPanel>
          <h2 className="text-lg font-semibold tracking-normal">Open Graph</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-border/45 bg-background/60">
            <div className="flex aspect-[1.91/1] items-center justify-center bg-foreground/[0.05]">
              <Image className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="p-4">
              <p className="text-xs tracking-normal text-muted-foreground">talissonsouza.com.br</p>
              <h3 className="mt-2 text-base font-semibold tracking-normal">Por que comunidades no Discord morrem tão rápido</h3>
              <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">Um guia profundo para manter comunidades ativas.</p>
            </div>
          </div>
        </StudioPanel>
      </div>
    </StudioPageFrame>
  );
}

export function StudioNewsletterPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Newsletter"
        title="Campanhas e inscritos"
        description="Planejamento visual de envios, segmentação e métricas para conexão posterior com email."
        action={<StudioButton icon={<Send className="h-4 w-4" />}>Preparar envio</StudioButton>}
      />
      <div className="grid gap-4 md:grid-cols-3">
        <StudioMetric label="Inscritos" value="4.280" delta="+6%" tone="success" />
        <StudioMetric label="Abertura média" value="44%" delta="+3%" tone="success" />
        <StudioMetric label="Segmentos" value="8" delta="prévia" tone="info" />
      </div>
      <StudioPanel>
        <StudioDataTable
          data={studioCampaigns}
          getKey={(item) => item.id}
          columns={[
            { key: "name", header: "Campanha", render: (item) => <span className="font-medium">{item.name}</span> },
            { key: "status", header: "Status", render: (item) => <StudioBadge tone={statusTone(item.status)}>{item.status}</StudioBadge> },
            { key: "audience", header: "Audiência", render: (item) => item.audience },
            { key: "open", header: "Abertura", render: (item) => item.openRate },
            { key: "date", header: "Agenda", render: (item) => item.scheduledFor },
          ]}
        />
      </StudioPanel>
    </StudioPageFrame>
  );
}

export function StudioCommentsPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Comunidade"
        title="Comentários e Discord"
        description="Fila de moderação, sinais de risco e contexto por artigo em ambiente de prévia."
        action={<StudioButton icon={<Bot className="h-4 w-4" />}>Ver Discord</StudioButton>}
      />
      <StudioPanel>
        <StudioDataTable<StudioCommentMock>
          data={studioComments}
          getKey={(item) => item.id}
          columns={[
            { key: "author", header: "Autor", render: (item) => <div className="flex items-center gap-2"><StudioAvatar name={item.author} /><span>{item.author}</span></div> },
            { key: "content", header: "Comentário", render: (item) => <span className="line-clamp-2">{item.content}</span> },
            { key: "article", header: "Artigo", render: (item) => item.article },
            { key: "status", header: "Status", render: (item) => <StudioBadge tone={statusTone(item.status)}>{item.status}</StudioBadge> },
            { key: "source", header: "Origem", render: (item) => item.source },
          ]}
        />
      </StudioPanel>
      <div className="grid gap-4 md:grid-cols-3">
        <StudioState kind="success" title="Fila sob controle" description="A experiência mostra feedback claro para moderação diária." />
        <StudioState kind="error" title="Links suspeitos" description="Estado de risco visual para futuro motor de abuso e rate limit." />
        <StudioState kind="empty" title="Sem denúncias abertas" description="Empty state preparado para quando a fila estiver limpa." />
      </div>
    </StudioPageFrame>
  );
}

export function StudioAnalyticsPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Analytics"
        title="Métricas editoriais"
        description="Visitantes, CTR, performance e eventos com visual de produto pronto para dados reais."
      />
      <div className="grid gap-4 md:grid-cols-4">
        <StudioMetric label="Visitantes" value="38.4k" delta="+18%" tone="success" />
        <StudioMetric label="CTR médio" value="7.9%" delta="+1.1" tone="success" />
        <StudioMetric label="INP" value="142ms" delta="bom" tone="info" />
        <StudioMetric label="Eventos" value="612" delta="24h" tone="neutral" />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <StudioPanel>
          <h2 className="text-lg font-semibold tracking-normal">Curva de leitura</h2>
          <p className="mt-1 text-sm tracking-normal text-muted-foreground">Série temporal em prévia para validar charts.</p>
          <div className="mt-6">
            <StudioMiniChart values={[24, 42, 38, 52, 61, 75, 72, 86, 91, 88, 96, 104]} />
          </div>
        </StudioPanel>
        <StudioPanel>
          <h2 className="text-lg font-semibold tracking-normal">Eventos recentes</h2>
          <CompactList
            items={[
              { title: "Clique em CTA", description: "Artigo de comunidades", meta: "312 eventos", icon: <MousePointerClick className="h-4 w-4" /> },
              { title: "Scroll profundo", description: "Trilha de carreira", meta: "68%", icon: <ArrowRight className="h-4 w-4" /> },
              { title: "Busca interna", description: "Termo: Discord bots", meta: "94 consultas", icon: <Search className="h-4 w-4" /> },
            ]}
          />
        </StudioPanel>
      </div>
    </StudioPageFrame>
  );
}

export function StudioUsersPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Acesso"
        title="Usuários e permissões"
        description="Perfis, roles, convites e permissões em modo visual. Autorização real continua desconectada."
        action={<StudioButton icon={<Users className="h-4 w-4" />}>Convidar</StudioButton>}
      />
      <StudioPanel>
        <StudioDataTable<StudioUserMock>
          data={studioUsers}
          getKey={(item) => item.id}
          columns={[
            { key: "user", header: "Usuário", render: (item) => <div className="flex items-center gap-3"><StudioAvatar name={item.name} /><div><p className="font-medium">{item.name}</p><p className="text-xs text-muted-foreground">{item.email}</p></div></div> },
            { key: "role", header: "Role", render: (item) => <StudioBadge>{item.role}</StudioBadge> },
            { key: "status", header: "Status", render: (item) => <StudioBadge tone={statusTone(item.status)}>{item.status}</StudioBadge> },
            { key: "seen", header: "Último acesso", render: (item) => item.lastSeen },
          ]}
        />
      </StudioPanel>
      <StudioPanel>
        <h2 className="text-lg font-semibold tracking-normal">Matriz RBAC visual</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {["Owner", "Admin", "Editor", "Moderador", "Analista"].map((role, index) => (
            <div key={role} className="rounded-md border border-border/45 bg-foreground/[0.035] p-3">
              <p className="text-sm font-medium tracking-normal">{role}</p>
              <p className="mt-3 font-serif text-2xl tracking-normal">{24 - index * 3}</p>
              <p className="text-xs tracking-normal text-muted-foreground">permissões</p>
            </div>
          ))}
        </div>
      </StudioPanel>
    </StudioPageFrame>
  );
}

export function StudioSettingsPage() {
  const [tab, setTab] = useState("Sistema");

  const content = {
    Sistema: ["Ambiente", "Domínio canônico", "Cache visual"],
    Tema: ["Modo escuro", "Densidade", "Contraste"],
    Idiomas: ["pt-BR principal", "en-US preparado", "Fallback bloqueado"],
    Integrações: studioIntegrations.map((item) => item.name),
    Logs: ["Build preview", "Eventos de auditoria", "Erros de runtime"],
    Segurança: ["CSRF preparado", "RBAC preparado", "Sessão de prévia"],
  }[tab] ?? [];

  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Sistema"
        title="Configurações"
        description="Tema, idiomas, integrações, logs e segurança preparados visualmente para conexão futura."
        action={<StudioButton icon={<Settings className="h-4 w-4" />}>Salvar visual</StudioButton>}
      />
      <StudioPanel>
        <StudioTabs tabs={["Sistema", "Tema", "Idiomas", "Integrações", "Logs", "Segurança"]} active={tab} onChange={setTab} />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.map((item) => (
            <div key={item} className="rounded-lg border border-border/45 bg-foreground/[0.035] p-4">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-border/50 bg-background/60 text-muted-foreground">
                {tab === "Idiomas" ? <Languages className="h-4 w-4" /> : tab === "Segurança" ? <Shield className="h-4 w-4" /> : tab === "Logs" ? <Code2 className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
              </div>
              <p className="text-sm font-medium tracking-normal">{item}</p>
              <p className="mt-2 text-xs leading-5 tracking-normal text-muted-foreground">
                Configuração preparada para conexão posterior com o backend.
              </p>
            </div>
          ))}
        </div>
      </StudioPanel>
      <StudioPanel>
        <h2 className="text-lg font-semibold tracking-normal">Integrações externas</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {studioIntegrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <div key={integration.name} className="rounded-md border border-border/45 bg-background/42 p-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium tracking-normal">{integration.name}</p>
                    <p className="text-xs tracking-normal text-muted-foreground">{integration.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </StudioPanel>
    </StudioPageFrame>
  );
}

export function StudioFallbackPage() {
  return (
    <StudioPageFrame>
      <StudioSectionHeader
        eyebrow="Módulo"
        title="Área preparada"
        description="Esta rota já herda shell, navegação, estados e design system. O conteúdo específico será detalhado na próxima fase."
      />
      <StudioState kind="loading" title="Módulo visual em preparação" description="Skeleton, loading e estados de erro já existem no design system." />
      <div className="grid gap-4 md:grid-cols-3">
        <StudioSkeleton className="h-28" />
        <StudioSkeleton className="h-28" />
        <StudioSkeleton className="h-28" />
      </div>
      <StudioPanel>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-normal">Ação reversível</h2>
            <p className="mt-1 text-sm tracking-normal text-muted-foreground">Undo visual preparado para fluxos administrativos.</p>
          </div>
          <StudioButton variant="secondary" icon={<Undo2 className="h-4 w-4" />}>Desfazer</StudioButton>
        </div>
      </StudioPanel>
    </StudioPageFrame>
  );
}
