import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  AppWindow,
  Bell,
  CalendarDays,
  FileText,
  Share2,
  Smartphone,
} from "lucide-react";
import {
  SiApple,
  SiExpo,
  SiFirebase,
  SiGoogleplay,
  SiReact,
  SiSupabase,
} from "react-icons/si";
import { Calendar } from "@/components/ui/calendar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getText } from "@/utils/translations";

type MobileBentoGridProps = {
  language: string;
};

type IconComponent = ComponentType<{ className?: string }>;

type MobileBentoFeature = {
  Icon: IconComponent;
  title: string;
  description: string;
  className: string;
  background: JSX.Element;
};

const mobileArtifacts = [
  {
    name: "onboarding.flow",
    body: "Jornada inicial, permissões e primeiro valor do app.",
  },
  {
    name: "home.screen",
    body: "Tela inicial com ações recorrentes e estado claro.",
  },
  {
    name: "push.rules",
    body: "Regras de notificação por contexto e relevância.",
  },
  {
    name: "offline.cache",
    body: "Dados essenciais prontos para conexão instável.",
  },
  {
    name: "release.notes",
    body: "Checklist de loja, versão e publicação assistida.",
  },
];

const MobileArtifactMarquee = ({ language }: MobileBentoGridProps) => {
  const artifacts = language === "pt"
    ? mobileArtifacts
    : [
        { name: "onboarding.flow", body: "Initial journey, permissions and first app value." },
        { name: "home.screen", body: "Home screen with recurring actions and clear state." },
        { name: "push.rules", body: "Notification rules by context and relevance." },
        { name: "offline.cache", body: "Essential data ready for unstable connection." },
        { name: "release.notes", body: "Store, version and assisted release checklist." },
      ];

  return (
    <div className="absolute inset-x-0 top-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_16%,black_84%,transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-3 pr-3"
      >
        {[...artifacts, ...artifacts].map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className="relative w-36 shrink-0 overflow-hidden rounded-xl border border-border/25 bg-background/45 p-4 text-left opacity-75 blur-[0.4px] transition-all duration-300 group-hover:opacity-100 group-hover:blur-0"
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-border/25 bg-foreground/[0.045]">
              <FileText className="h-4 w-4 text-foreground/55" />
            </div>
            <figcaption className="text-xs font-semibold text-foreground">{item.name}</figcaption>
            <blockquote className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted-foreground/70">
              {item.body}
            </blockquote>
          </figure>
        ))}
      </motion.div>
    </div>
  );
};

const MobileNotificationList = ({ language }: MobileBentoGridProps) => {
  const notifications = language === "pt"
    ? [
        { title: "Pedido atualizado", text: "Status mudou e o usuário sabe o próximo passo.", time: "agora" },
        { title: "Ação pendente", text: "Lembrete útil sem virar ruído na rotina.", time: "12 min" },
        { title: "Mensagem recebida", text: "Conteúdo priorizado por contexto e relevância.", time: "1 h" },
        { title: "Sync concluído", text: "Feedback claro quando os dados chegam ao app.", time: "2 h" },
      ]
    : [
        { title: "Order updated", text: "Status changed and the user knows the next step.", time: "now" },
        { title: "Pending action", text: "A useful reminder without adding noise.", time: "12 min" },
        { title: "Message received", text: "Content prioritized by context and relevance.", time: "1 h" },
        { title: "Sync complete", text: "Clear feedback when data reaches the app.", time: "2 h" },
      ];

  return (
    <div className="absolute right-3 top-4 h-[240px] w-[calc(100%-1.5rem)] overflow-hidden [mask-image:linear-gradient(to_top,transparent_5%,black_28%,black_100%)]">
      <motion.div
        animate={{ y: [0, -44, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        className="space-y-2.5 transition-transform duration-300 group-hover:scale-[1.04]"
      >
        {notifications.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="flex items-start gap-3 rounded-xl border border-border/25 bg-background/55 px-3 py-2.5 shadow-[0_18px_45px_hsl(var(--foreground)/0.035)]"
            style={{ marginLeft: index % 2 ? 34 : 0 }}
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/25 bg-foreground/[0.045]">
              <Bell className="h-3.5 w-3.5 text-foreground/55" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-xs font-semibold text-foreground">{item.title}</p>
                <span className="shrink-0 text-[10px] text-muted-foreground/50">{item.time}</span>
              </div>
              <p className="mt-1 line-clamp-1 text-[11px] leading-relaxed text-muted-foreground/70">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const appNodes: Array<{ label: string; Icon: IconComponent; className: string }> = [
  { label: "React", Icon: SiReact, className: "left-[7%] top-[18%]" },
  { label: "Expo", Icon: SiExpo, className: "right-[8%] top-[18%]" },
  { label: "Firebase", Icon: SiFirebase, className: "left-[12%] bottom-[20%]" },
  { label: "Supabase", Icon: SiSupabase, className: "right-[13%] bottom-[20%]" },
  { label: "iOS", Icon: SiApple, className: "left-[35%] top-[7%]" },
  { label: "Play", Icon: SiGoogleplay, className: "right-[35%] bottom-[8%]" },
];

const MobileIntegrationBeams = () => (
  <div className="absolute inset-5 transition-transform duration-300 group-hover:scale-[1.03]">
    <span className="absolute left-[16%] right-[16%] top-1/2 h-px bg-border/25" />
    <span className="absolute bottom-[20%] left-1/2 top-[18%] w-px bg-border/25" />
    <span className="absolute left-[22%] top-[28%] h-px w-[58%] origin-left rotate-[18deg] bg-border/20" />
    <span className="absolute left-[22%] bottom-[28%] h-px w-[58%] origin-left -rotate-[18deg] bg-border/20" />
    <motion.span
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-[17%] right-[17%] top-1/2 h-px origin-left bg-foreground/45"
    />
    <motion.span
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-[21%] left-1/2 top-[19%] w-px origin-top bg-foreground/35"
    />

    <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border/25 bg-background/70 shadow-[0_20px_60px_hsl(var(--foreground)/0.045)]">
      <Smartphone className="h-8 w-8 text-foreground/70" />
    </div>

    {appNodes.map(({ label, Icon, className }, index) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, scale: 0.82 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.35 + index * 0.05 }}
        className={`absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-border/25 bg-background/60 text-foreground/70 shadow-[0_18px_45px_hsl(var(--foreground)/0.035)] ${className}`}
        title={label}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
    ))}
  </div>
);

const MobileReleaseCalendar = ({ language }: MobileBentoGridProps) => (
  <div className="absolute right-0 top-4 origin-top scale-[0.78] transition-transform duration-300 group-hover:scale-[0.84] sm:right-4">
    <Calendar
      mode="single"
      selected={new Date(2026, 6, 30)}
      month={new Date(2026, 6, 1)}
      className="rounded-xl border border-border/25 bg-background/55 text-muted-foreground shadow-[0_22px_60px_hsl(var(--foreground)/0.035)]"
      classNames={{
        day_selected: "bg-foreground text-background hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background",
        day_today: "bg-foreground/10 text-foreground",
      }}
      aria-label={getText(language, "Calendário de publicação mobile", "Mobile release calendar")}
    />
  </div>
);

const BentoFeatureCard = ({ feature, index }: { feature: MobileBentoFeature; index: number }) => {
  const Icon = feature.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className={`group relative col-span-1 min-h-[318px] overflow-hidden rounded-xl border border-border/20 bg-card/25 p-6 shadow-[0_24px_70px_hsl(var(--foreground)/0.025)] transition-colors duration-300 hover:border-foreground/20 hover:bg-foreground/[0.025] ${feature.className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.026)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.026)_1px,transparent_1px)] bg-[size:34px_34px] opacity-45" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-foreground/[0.035] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background via-background/88 to-transparent" />

      <div className="relative z-0 h-[192px] overflow-hidden">
        {feature.background}
      </div>

      <div className="relative z-20 mt-3">
        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border/25 bg-background/55 text-foreground/65">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-[15px] font-semibold leading-snug text-foreground">{feature.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground/75">{feature.description}</p>
      </div>
    </motion.article>
  );
};

const MobileBentoGrid = ({ language }: MobileBentoGridProps) => {
  const features: MobileBentoFeature[] = [
    {
      Icon: FileText,
      title: getText(language, "Fluxos e telas salvos", "Saved flows and screens"),
      description: getText(
        language,
        "O app nasce com telas, estados, permissões e regras de uso documentadas desde o começo.",
        "The app starts with screens, states, permissions and usage rules documented from the beginning."
      ),
      className: "lg:col-span-1",
      background: <MobileArtifactMarquee language={language} />,
    },
    {
      Icon: Bell,
      title: getText(language, "Notificações úteis", "Useful notifications"),
      description: getText(
        language,
        "Alertas, lembretes e retornos aparecem no momento certo para manter o usuário no fluxo.",
        "Alerts, reminders and feedback appear at the right moment to keep the user in the flow."
      ),
      className: "lg:col-span-2",
      background: <MobileNotificationList language={language} />,
    },
    {
      Icon: Share2,
      title: getText(language, "Ecossistema conectado", "Connected ecosystem"),
      description: getText(
        language,
        "React Native, Expo, backend, autenticação, push e lojas entram no mesmo desenho técnico.",
        "React Native, Expo, backend, authentication, push and stores enter the same technical design."
      ),
      className: "lg:col-span-2",
      background: <MobileIntegrationBeams />,
    },
    {
      Icon: CalendarDays,
      title: getText(language, "Publicação planejada", "Planned release"),
      description: getText(
        language,
        "Versões, testes, permissões e publicação são tratados como parte do produto, não como improviso final.",
        "Versions, tests, permissions and release are treated as part of the product, not final improvisation."
      ),
      className: "lg:col-span-1",
      background: <MobileReleaseCalendar language={language} />,
    },
  ];

  return (
    <ScrollReveal>
      <div id="mobile-bento-grid" className="mx-auto mt-10 max-w-6xl scroll-mt-28 border-y border-border/20 py-8 lg:py-10">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
              {getText(language, "Sistema do app", "App system")}
            </span>
            <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
              {getText(language, "Mobile que funciona como produto", "Mobile that works as a product")}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              "Cada card representa uma parte do app: fluxos, notificações, integrações e publicação caminhando juntos.",
              "Each card represents part of the app: flows, notifications, integrations and release moving together."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {features.map((feature, index) => (
            <BentoFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default MobileBentoGrid;
