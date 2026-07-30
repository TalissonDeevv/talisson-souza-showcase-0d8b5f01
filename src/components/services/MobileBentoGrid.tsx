import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  ClipboardCheck,
  DatabaseBackup,
  type LucideIcon,
  Network,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getText } from "@/utils/translations";

type MobileBentoGridProps = {
  language: string;
};

type MobileBentoFeature = {
  Icon: LucideIcon;
  title: string;
  description: string;
  className: string;
  background: JSX.Element;
};

const MobileStateMarquee = ({ language }: MobileBentoGridProps) => {
  const stateItems = language === "pt"
    ? [
        { name: "Sessão ativa", body: "Login, preferências e permissões continuam consistentes entre telas." },
        { name: "Cache offline", body: "Dados importantes ficam disponíveis mesmo com conexão instável." },
        { name: "Progresso salvo", body: "O usuário volta ao ponto certo sem repetir caminho." },
        { name: "Fila de sync", body: "Ações pendentes são enviadas quando a rede volta." },
        { name: "Preferências", body: "Tema, filtros e escolhas respeitam o uso real." },
      ]
    : [
        { name: "Active session", body: "Login, preferences and permissions stay consistent across screens." },
        { name: "Offline cache", body: "Important data remains available with unstable connection." },
        { name: "Saved progress", body: "Users return to the right point without repeating steps." },
        { name: "Sync queue", body: "Pending actions are sent when the network returns." },
        { name: "Preferences", body: "Theme, filters and choices respect real usage." },
      ];

  return (
    <div className="absolute inset-x-4 top-6 h-[172px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="space-y-3"
      >
        {[...stateItems, ...stateItems].map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className="border border-border/20 bg-background/45 p-4 opacity-70 transition-all duration-300 group-hover:opacity-100"
          >
            <figcaption className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <DatabaseBackup className="h-3.5 w-3.5 text-foreground/45" />
              {item.name}
            </figcaption>
            <blockquote className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground/70">
              {item.body}
            </blockquote>
          </figure>
        ))}
      </motion.div>
    </div>
  );
};

const MobileNotificationStack = ({ language }: MobileBentoGridProps) => {
  const notifications = language === "pt"
    ? [
        { title: "Pedido atualizado", text: "Status mudou e o usuário sabe o próximo passo.", time: "agora" },
        { title: "Ação pendente", text: "Lembrete útil sem virar ruído na rotina.", time: "12 min" },
        { title: "Mensagem recebida", text: "Conteúdo priorizado por contexto e relevância.", time: "1 h" },
        { title: "Sincronização feita", text: "Feedback claro quando os dados chegam ao app.", time: "2 h" },
      ]
    : [
        { title: "Order updated", text: "Status changed and the user knows the next step.", time: "now" },
        { title: "Pending action", text: "A useful reminder without adding noise.", time: "12 min" },
        { title: "Message received", text: "Content prioritized by context and relevance.", time: "1 h" },
        { title: "Sync complete", text: "Clear feedback when data reaches the app.", time: "2 h" },
      ];

  return (
    <div className="absolute right-4 top-5 w-[calc(100%-2rem)] space-y-3 transition-transform duration-300 group-hover:translate-y-[-6px]">
      {notifications.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="flex items-start gap-3 border border-border/20 bg-background/55 p-3 shadow-[0_18px_45px_hsl(var(--foreground)/0.025)]"
          style={{ marginLeft: index % 2 ? 30 : 0 }}
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-border/25 bg-foreground/[0.035]">
            <Bell className="h-3.5 w-3.5 text-foreground/55" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-xs font-semibold text-foreground">{item.title}</p>
              <span className="shrink-0 text-[10px] text-muted-foreground/50">{item.time}</span>
            </div>
            <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground/70">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const MobileIntegrationMap = ({ language }: MobileBentoGridProps) => {
  const labels = language === "pt"
    ? [
        { label: "Auth", className: "left-3 top-7" },
        { label: "API", className: "right-3 top-7" },
        { label: "Push", className: "left-8 bottom-8" },
        { label: "Dados", className: "right-8 bottom-8" },
      ]
    : [
        { label: "Auth", className: "left-3 top-7" },
        { label: "API", className: "right-3 top-7" },
        { label: "Push", className: "left-8 bottom-8" },
        { label: "Data", className: "right-8 bottom-8" },
      ];

  return (
    <div className="absolute inset-5">
      <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-border/20" />
      <div className="absolute bottom-[24%] left-1/2 top-[22%] w-px bg-border/20" />
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-[22%] top-[30%] h-px w-[56%] origin-left bg-foreground/30"
      />
      <motion.span
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute left-1/2 top-[30%] h-[44%] w-px origin-top bg-foreground/25"
      />

      <div className="absolute left-1/2 top-1/2 flex h-24 w-[78px] -translate-x-1/2 -translate-y-1/2 flex-col border border-border/25 bg-background/55 p-2">
        <span className="mx-auto mb-2 h-1 w-7 rounded-full bg-foreground/15" />
        <div className="flex flex-1 flex-col justify-between border border-border/15 bg-foreground/[0.025] p-2">
          <span className="h-2 w-3/4 bg-foreground/12" />
          <span className="h-8 bg-foreground/[0.07]" />
          <span className="h-2 w-1/2 bg-foreground/10" />
        </div>
      </div>

      {labels.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.86 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.36 + index * 0.06 }}
          className={`absolute flex h-12 w-12 items-center justify-center border border-border/25 bg-background/60 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70 ${item.className}`}
        >
          {item.label}
        </motion.div>
      ))}
    </div>
  );
};

const MobileRoutineCalendar = ({ language }: MobileBentoGridProps) => {
  const days = language === "pt" ? ["S", "T", "Q", "Q", "S", "S", "D"] : ["M", "T", "W", "T", "F", "S", "S"];
  const activeDays = [4, 6, 10, 11, 17, 19, 24, 25, 29];

  return (
    <div className="absolute right-4 top-6 w-[225px] origin-top bg-background/45 p-4 transition-transform duration-300 group-hover:scale-[1.04] sm:right-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-foreground">
            {getText(language, "Rotina mobile", "Mobile routine")}
          </p>
          <p className="mt-1 text-[10px] text-muted-foreground/60">
            {getText(language, "uso recorrente", "recurring use")}
          </p>
        </div>
        <Activity className="h-4 w-4 text-foreground/40" />
      </div>

      <div className="grid grid-cols-7 gap-1.5 text-center">
        {days.map((day, index) => (
          <span key={`${day}-${index}`} className="text-[10px] font-medium text-muted-foreground/55">
            {day}
          </span>
        ))}
        {Array.from({ length: 35 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.18 }}
            whileInView={{ opacity: activeDays.includes(index) ? 0.75 : 0.25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.008 }}
            className={`aspect-square border border-border/20 ${activeDays.includes(index) ? "bg-foreground/24" : "bg-foreground/[0.035]"}`}
          />
        ))}
      </div>
    </div>
  );
};

const BentoFeatureCard = ({ feature, index }: { feature: MobileBentoFeature; index: number }) => {
  const Icon = feature.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`group relative min-h-[250px] overflow-hidden rounded-xl border border-border/20 bg-card/25 p-5 shadow-[0_24px_70px_hsl(var(--foreground)/0.025)] transition-colors duration-300 hover:border-foreground/20 hover:bg-foreground/[0.025] ${feature.className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.026)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.026)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-foreground/[0.035] to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-background via-background/85 to-transparent" />

      <div className="relative z-0 h-[172px] overflow-hidden">
        {feature.background}
      </div>

      <div className="relative z-20 mt-5">
        <span className="mb-4 flex h-9 w-9 items-center justify-center border border-border/25 bg-background/50 text-foreground/65">
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
      Icon: ClipboardCheck,
      title: getText(language, "Estado que acompanha o usuário", "State that follows the user"),
      description: getText(
        language,
        "Sessão, preferências, cache e progresso pensados para o app não quebrar a rotina.",
        "Session, preferences, cache and progress designed so the app does not break the routine."
      ),
      className: "md:col-span-1",
      background: <MobileStateMarquee language={language} />,
    },
    {
      Icon: Bell,
      title: getText(language, "Notificações com contexto", "Context-aware notifications"),
      description: getText(
        language,
        "Alertas entram como retorno útil, não como barulho empurrado para o usuário.",
        "Alerts work as useful feedback, not noise pushed to the user."
      ),
      className: "md:col-span-2",
      background: <MobileNotificationStack language={language} />,
    },
    {
      Icon: Network,
      title: getText(language, "Integrações conectadas", "Connected integrations"),
      description: getText(
        language,
        "Auth, APIs, dados, push e analytics conversam com o app de forma previsível.",
        "Auth, APIs, data, push and analytics talk to the app in a predictable way."
      ),
      className: "md:col-span-2",
      background: <MobileIntegrationMap language={language} />,
    },
    {
      Icon: Activity,
      title: getText(language, "Rotina e recorrência", "Routine and recurrence"),
      description: getText(
        language,
        "A experiência considera retorno diário, ações frequentes e momentos certos de reengajamento.",
        "The experience considers daily return, frequent actions and the right re-engagement moments."
      ),
      className: "md:col-span-1",
      background: <MobileRoutineCalendar language={language} />,
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
              {getText(language, "Mobile que funciona na rotina real", "Mobile that works in real routines")}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              "O aplicativo nasce como um conjunto de fluxos, estados, integrações e retornos que fazem sentido no uso diário.",
              "The app starts as a set of flows, states, integrations and feedback that make sense in daily use."
            )}
          </p>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <BentoFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            getText(language, "offline primeiro", "offline first"),
            getText(language, "push útil", "useful push"),
            getText(language, "backend consistente", "consistent backend"),
            getText(language, "publicação assistida", "guided release"),
          ].map((item) => (
            <span
              key={item}
              className="border border-border/25 bg-background/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default MobileBentoGrid;
