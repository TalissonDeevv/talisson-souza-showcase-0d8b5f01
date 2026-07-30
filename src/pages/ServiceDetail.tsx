import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import GlassCard from "@/components/ui/GlassCard";
import { 
  ArrowLeft, Code, Smartphone, Bot, Palette, Cloud, Users,
  CheckCircle, Star, MessageSquare, ArrowUpRight,
  Target, XCircle, TrendingUp, Briefcase, AlertTriangle, BarChart3,
  Gauge, LineChart, ShieldCheck, Monitor, Server, GitBranch,
  Boxes, Bell, RefreshCcw, Store, Fingerprint, Terminal, ShieldAlert,
  Network, Trophy, Activity, KeyRound, PenTool, LayoutGrid, MousePointer2,
  Component, ClipboardCheck, CloudCog, RadioTower, DatabaseBackup, Search,
  Map, Route, FileCheck
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";

type SolutionVisual =
  | "web-conversion"
  | "web-architecture"
  | "web-dashboard"
  | "web-performance"
  | "web-integrations"
  | "web-delivery"
  | "mobile-flow"
  | "mobile-notification"
  | "mobile-sync"
  | "mobile-release"
  | "mobile-daily"
  | "mobile-security"
  | "bot-command"
  | "bot-moderation"
  | "bot-community"
  | "bot-economy"
  | "bot-uptime"
  | "bot-permissions"
  | "ux-diagnosis"
  | "ux-wireframe"
  | "ux-prototype"
  | "ux-system"
  | "ux-metrics"
  | "ux-handoff"
  | "cloud-deploy"
  | "cloud-monitoring"
  | "cloud-capacity"
  | "cloud-backup"
  | "cloud-pipeline"
  | "cloud-scale"
  | "consult-diagnosis"
  | "consult-roadmap"
  | "consult-architecture"
  | "consult-review"
  | "consult-mentoring"
  | "consult-risk";
type SolutionTheme = "product" | "mobile" | "automation" | "design" | "cloud" | "strategy";

type SolutionCard = {
  title: string;
  description: string;
  visual: SolutionVisual;
  className: string;
};

type ServiceBlueprint = {
  principle: string;
  narrative: string;
  stages: string[];
  signals: Array<{ label: string; value: string }>;
  handoff: string[];
  qualities: string[];
};

const themeCardStyles: Record<SolutionTheme, { frame: string; visual: string; grid: string; glow: string }> = {
  product: {
    frame: "rounded-2xl",
    visual: "items-end",
    grid: "opacity-[0.04]",
    glow: "from-foreground/[0.06]",
  },
  mobile: {
    frame: "rounded-[1.8rem]",
    visual: "items-center",
    grid: "opacity-[0.028]",
    glow: "from-foreground/[0.075]",
  },
  automation: {
    frame: "rounded-2xl",
    visual: "items-center",
    grid: "opacity-[0.045]",
    glow: "from-foreground/[0.05]",
  },
  design: {
    frame: "rounded-[1.25rem]",
    visual: "items-start",
    grid: "opacity-[0.035]",
    glow: "from-foreground/[0.065]",
  },
  cloud: {
    frame: "rounded-2xl",
    visual: "items-center",
    grid: "opacity-[0.04]",
    glow: "from-foreground/[0.08]",
  },
  strategy: {
    frame: "rounded-[1.35rem]",
    visual: "items-center",
    grid: "opacity-[0.03]",
    glow: "from-foreground/[0.055]",
  },
};

const visualIconMap = {
  "web-conversion": Monitor,
  "web-architecture": Server,
  "web-dashboard": BarChart3,
  "web-performance": Gauge,
  "web-integrations": Boxes,
  "web-delivery": GitBranch,
  "mobile-flow": Smartphone,
  "mobile-notification": Bell,
  "mobile-sync": RefreshCcw,
  "mobile-release": Store,
  "mobile-daily": Activity,
  "mobile-security": Fingerprint,
  "bot-command": Terminal,
  "bot-moderation": ShieldAlert,
  "bot-community": Network,
  "bot-economy": Trophy,
  "bot-uptime": Activity,
  "bot-permissions": KeyRound,
  "ux-diagnosis": Search,
  "ux-wireframe": LayoutGrid,
  "ux-prototype": MousePointer2,
  "ux-system": Component,
  "ux-metrics": LineChart,
  "ux-handoff": ClipboardCheck,
  "cloud-deploy": CloudCog,
  "cloud-monitoring": RadioTower,
  "cloud-capacity": Gauge,
  "cloud-backup": DatabaseBackup,
  "cloud-pipeline": GitBranch,
  "cloud-scale": Boxes,
  "consult-diagnosis": Search,
  "consult-roadmap": Map,
  "consult-architecture": Route,
  "consult-review": FileCheck,
  "consult-mentoring": Users,
  "consult-risk": AlertTriangle,
} satisfies Record<SolutionVisual, typeof Code>;

const visualFamily = (visual: SolutionVisual) => visual.split("-")[0];

const IconTile = ({ visual, className = "" }: { visual: SolutionVisual; className?: string }) => {
  const Icon = visualIconMap[visual];
  return <Icon className={className || "h-5 w-5 text-foreground/35"} />;
};

const SolutionIllustration = ({ visual, theme }: { visual: SolutionVisual; theme: SolutionTheme }) => {
  const family = visualFamily(visual);

  if (family === "web") {
    const isDashboard = visual === "web-dashboard";
    const isArchitecture = visual === "web-architecture" || visual === "web-integrations";
    return (
      <div className="relative flex h-full w-full items-center justify-center px-5">
        <div className="relative w-full max-w-[410px] rounded-2xl border border-foreground/10 bg-background/25 p-3">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-foreground/25" />
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
            <span className="h-2 w-2 rounded-full bg-foreground/10" />
            <span className="ml-auto h-2 w-16 rounded-full bg-foreground/10" />
          </div>
          {isDashboard ? (
            <div className="grid grid-cols-[1fr_1.4fr] gap-3">
              <div className="space-y-2">
                <span className="block h-8 rounded-lg border border-foreground/10 bg-foreground/[0.04]" />
                <span className="block h-8 rounded-lg border border-foreground/10 bg-foreground/[0.04]" />
                <span className="block h-8 rounded-lg border border-foreground/10 bg-foreground/[0.04]" />
              </div>
              <div className="flex items-end gap-2 rounded-xl border border-foreground/10 bg-background/30 p-3">
                {[26, 42, 34, 58, 70, 48].map((height, index) => (
                  <motion.span
                    key={index}
                    initial={{ height: 10 }}
                    whileInView={{ height }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-t bg-foreground/25"
                  />
                ))}
              </div>
            </div>
          ) : isArchitecture ? (
            <div className="relative grid grid-cols-3 gap-3">
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-20 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.035]"
                >
                  <IconTile visual={visual} className="h-5 w-5 text-foreground/35" />
                </motion.div>
              ))}
              <span className="absolute left-[16%] right-[16%] top-1/2 h-px bg-foreground/10" />
            </div>
          ) : (
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="space-y-2">
                <span className="block h-10 rounded-xl border border-foreground/10 bg-foreground/[0.045]" />
                <span className="block h-7 w-3/4 rounded-lg bg-foreground/10" />
                <span className="block h-7 w-1/2 rounded-lg bg-foreground/10" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-foreground/10 bg-background/35">
                <IconTile visual={visual} className="h-8 w-8 text-foreground/35" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (family === "mobile") {
    if (visual === "mobile-flow") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="relative grid w-full max-w-[340px] grid-cols-3 gap-3">
            <span className="absolute left-[18%] right-[18%] top-1/2 h-px bg-foreground/10" />
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: item === 1 ? -8 : 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: item * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-24 rounded-[1.25rem] border border-foreground/10 bg-background/45 p-2"
              >
                <span className="mx-auto mb-2 block h-1 w-6 rounded-full bg-foreground/15" />
                <span className="mb-2 block h-7 rounded-lg bg-foreground/[0.06]" />
                <span className="block h-3 w-2/3 rounded-full bg-foreground/10" />
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (visual === "mobile-notification") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="w-full max-w-[340px] space-y-2">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/45 px-4 py-3"
                style={{ marginLeft: item === 1 ? 26 : item === 2 ? 54 : 0 }}
              >
                <Bell className="h-4 w-4 text-foreground/35" />
                <span className="h-1.5 flex-1 rounded-full bg-foreground/10" />
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (visual === "mobile-sync") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="relative flex w-full max-w-[340px] items-center justify-between">
            <div className="h-28 w-20 rounded-[1.35rem] border border-foreground/10 bg-background/40 p-2">
              <span className="mx-auto mb-3 block h-1 w-6 rounded-full bg-foreground/15" />
              <span className="block h-14 rounded-xl bg-foreground/[0.055]" />
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: -18, scale: 0.85 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-background/55"
            >
              <RefreshCcw className="h-6 w-6 text-foreground/35" />
            </motion.div>
            <div className="h-28 w-20 rounded-[1.35rem] border border-foreground/10 bg-background/40 p-2">
              <span className="mx-auto mb-3 block h-1 w-6 rounded-full bg-foreground/15" />
              <span className="block h-8 rounded-xl bg-foreground/[0.04]" />
              <span className="mt-2 block h-6 rounded-lg bg-foreground/[0.07]" />
            </div>
          </div>
        </div>
      );
    }

    if (visual === "mobile-release") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="grid w-full max-w-[360px] grid-cols-[0.85fr_1.15fr] gap-3">
            <div className="flex items-center justify-center rounded-2xl border border-foreground/10 bg-background/45">
              <Store className="h-8 w-8 text-foreground/35" />
            </div>
            <div className="space-y-2 rounded-2xl border border-foreground/10 bg-background/35 p-3">
              {["build", "review", "release"].map((label, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="flex items-center gap-2 rounded-xl bg-foreground/[0.035] px-3 py-2"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-foreground/35" />
                  <span className="h-1.5 flex-1 rounded-full bg-foreground/10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (visual === "mobile-daily") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="w-full max-w-[340px] rounded-2xl border border-foreground/10 bg-background/35 p-4">
            <div className="mb-3 flex items-center justify-between">
              <Activity className="h-4 w-4 text-foreground/35" />
              <span className="h-1.5 w-16 rounded-full bg-foreground/10" />
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: 21 }).map((_, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.18 }}
                  whileInView={{ opacity: [3, 6, 9, 13, 18].includes(index) ? 0.48 : 0.22 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.01 }}
                  className="aspect-square rounded-md border border-foreground/10 bg-foreground/[0.055]"
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (visual === "mobile-security") {
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] border border-foreground/10 bg-background/35">
            <span className="absolute inset-5 rounded-full border border-foreground/10" />
            <span className="absolute inset-9 rounded-full border border-foreground/10" />
            <Fingerprint className="h-12 w-12 text-foreground/35" />
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative h-[132px] w-[76px] rounded-[1.5rem] border border-foreground/15 bg-background/30 p-2 shadow-[0_0_40px_hsl(var(--foreground)/0.04)]">
          <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-foreground/15" />
          <div className="h-full rounded-[1.2rem] border border-foreground/10 bg-foreground/[0.025] p-2">
            <div className="grid h-full grid-cols-2 gap-2">
              <span className="rounded-lg bg-foreground/[0.08]" />
              <span className="rounded-lg bg-foreground/[0.04]" />
              <span className="col-span-2 rounded-lg bg-foreground/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (family === "bot") {
    const rowsByVisual: Partial<Record<SolutionVisual, string[]>> = {
      "bot-command": ["/setup", "/roles", "/sync"],
      "bot-moderation": ["scan message", "flag risk", "apply rule"],
      "bot-permissions": ["owner", "staff", "member"],
    };

    if (visual === "bot-community") {
      const nodes = [
        { left: 24, top: 24, icon: Users },
        { left: 76, top: 24, icon: MessageSquare },
        { left: 50, top: 50, icon: Network },
        { left: 24, top: 76, icon: Bot },
        { left: 76, top: 76, icon: ShieldCheck },
      ];

      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="relative h-36 w-full max-w-[260px]">
            <span className="absolute left-[24%] right-[24%] top-1/2 h-px bg-foreground/10" />
            <span className="absolute bottom-[24%] left-1/2 top-[24%] w-px bg-foreground/10" />
            {nodes.map(({ left, top, icon: Icon }, index) => {
              return (
                <motion.div
                  key={`${left}-${top}`}
                  initial={{ opacity: 0, scale: 0.86 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-foreground/10 bg-background/55"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <Icon className="h-5 w-5 text-foreground/35" />
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    if (visual === "bot-economy" || visual === "bot-uptime") {
      const bars = visual === "bot-economy" ? [34, 54, 72, 46, 66] : [28, 68, 40, 82, 52];
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="w-full max-w-[350px] rounded-2xl border border-foreground/10 bg-background/35 p-4">
            <div className="mb-4 flex items-center justify-between">
              <IconTile visual={visual} className="h-6 w-6 text-foreground/35" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45">
                {visual === "bot-economy" ? "rank" : "uptime"}
              </span>
            </div>
            <div className="flex h-20 items-end gap-2">
              {bars.map((height, index) => (
                <motion.span
                  key={index}
                  initial={{ height: 12 }}
                  whileInView={{ height }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-t-lg border border-foreground/10 bg-foreground/[0.09]"
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    const rows = rowsByVisual[visual] ?? ["event", "queue", "done"];
    return (
      <div className="relative flex h-full w-full items-center justify-center px-5">
        <div className="w-full max-w-[360px] rounded-2xl border border-foreground/10 bg-background/35 p-4">
          <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45">
            <Terminal className="h-3.5 w-3.5" />
            runtime
          </div>
          <div className="space-y-2">
            {rows.map((row, index) => (
              <motion.span
                key={row}
                initial={{ width: "40%", opacity: 0 }}
                whileInView={{ width: `${64 + index * 12}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="block rounded-lg border border-foreground/10 bg-foreground/[0.045] px-3 py-2 text-[10px] text-muted-foreground/70"
              >
                {row}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="absolute right-[12%] top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-background/45">
          <IconTile visual={visual} className="h-6 w-6 text-foreground/35" />
        </div>
      </div>
    );
  }

  if (family === "ux") {
    if (visual === "ux-diagnosis") {
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-foreground/10">
            <span className="absolute inset-5 rounded-full border border-foreground/10" />
            <span className="absolute inset-10 rounded-full border border-foreground/10" />
            {[20, 38, 62, 80].map((left, index) => (
              <motion.span
                key={left}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="absolute h-3 w-3 rounded-full border border-foreground/15 bg-background"
                style={{ left: `${left}%`, top: `${index % 2 ? 66 : 34}%` }}
              />
            ))}
            <Search className="h-8 w-8 text-foreground/35" />
          </div>
        </div>
      );
    }

    if (visual === "ux-prototype") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="grid w-full max-w-[360px] grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: item === 1 ? -8 : 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-28 rounded-2xl border border-foreground/10 bg-background/35 p-2"
              >
                <span className="mb-2 block h-3 w-8 rounded-full bg-foreground/10" />
                <span className="block h-12 rounded-xl bg-foreground/[0.05]" />
              </motion.div>
            ))}
          </div>
          <MousePointer2 className="absolute bottom-8 right-[22%] h-7 w-7 text-foreground/35" />
        </div>
      );
    }

    if (visual === "ux-system" || visual === "ux-handoff") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="w-full max-w-[370px] rounded-2xl border border-foreground/10 bg-background/30 p-4">
            <div className="grid grid-cols-3 gap-2">
              {(visual === "ux-system" ? [Component, Palette, LayoutGrid, PenTool, MousePointer2, CheckCircle] : [FileCheck, ClipboardCheck, CheckCircle, Code, LayoutGrid, ArrowUpRight]).map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="flex h-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.035]"
                >
                  <Icon className="h-4 w-4 text-foreground/35" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (visual === "ux-metrics") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="grid w-full max-w-[390px] grid-cols-[0.9fr_1.1fr] gap-3">
            <div className="space-y-2 rounded-2xl border border-foreground/10 bg-background/30 p-3">
              {["Clareza", "Fluxo", "Entrega"].map((label, index) => (
                <div key={label} className="rounded-xl border border-foreground/10 bg-background/35 p-2">
                  <div className="mb-2 flex justify-between text-[9px] text-muted-foreground/45">
                    <span>{label}</span>
                    <span>{index === 0 ? "72%" : index === 1 ? "48%" : "91%"}</span>
                  </div>
                  <span className="block h-1 rounded-full bg-foreground/10">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: index === 0 ? "72%" : index === 1 ? "48%" : "91%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="block h-full rounded-full bg-foreground/35"
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-2 rounded-2xl border border-foreground/10 bg-background/30 p-4">
              {[24, 38, 32, 54, 68].map((height, index) => (
                <span key={index} className="w-full rounded-t bg-foreground/[0.12]" style={{ height }} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex h-full w-full items-center justify-center px-5">
        <div className="grid w-full max-w-[390px] grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-2xl border border-foreground/10 bg-background/30 p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="h-2 w-16 rounded-full bg-foreground/10" />
              <PenTool className="h-4 w-4 text-foreground/25" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="col-span-2 h-10 rounded-xl bg-foreground/[0.06]" />
              <span className="h-16 rounded-xl border border-foreground/10 bg-foreground/[0.035]" />
              <span className="h-16 rounded-xl border border-foreground/10 bg-foreground/[0.035]" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map((item) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-10 rounded-xl border border-foreground/10 bg-background/30"
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 right-[18%] flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/10 bg-background/45">
          <IconTile visual={visual} className="h-5 w-5 text-foreground/35" />
        </div>
      </div>
    );
  }

  if (family === "cloud") {
    if (visual === "cloud-monitoring") {
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center">
            {[0, 1, 2].map((item) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 + item * 0.38 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-8 rounded-full border border-foreground/10"
              />
            ))}
            <RadioTower className="h-9 w-9 text-foreground/35" />
          </div>
        </div>
      );
    }

    if (visual === "cloud-capacity" || visual === "cloud-scale") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="flex w-full max-w-[360px] items-end gap-3 rounded-2xl border border-foreground/10 bg-background/35 p-4">
            {[42, 64, 88, 60, 74].map((height, index) => (
              <motion.span
                key={index}
                initial={{ height: 16 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="w-full rounded-t-xl border border-foreground/10 bg-foreground/[0.08]"
              />
            ))}
          </div>
        </div>
      );
    }

    if (visual === "cloud-backup") {
      return (
        <div className="relative flex h-full w-full items-center justify-center px-5">
          <div className="relative h-28 w-44">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: item * 0.08 }}
                className="absolute left-1/2 flex h-14 w-36 -translate-x-1/2 items-center justify-center rounded-[50%] border border-foreground/10 bg-background/45"
                style={{ top: item * 22 }}
              >
                {item === 1 && <DatabaseBackup className="h-5 w-5 text-foreground/35" />}
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex h-full w-full items-center justify-center px-3">
        <div className="relative h-28 w-full max-w-[240px]">
          <span className="absolute left-6 right-6 top-1/2 h-px bg-foreground/10" />
          {[20, 40, 60, 80].map((left, index) => (
            <motion.div
              key={left}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-foreground/10 bg-background/45 md:h-11 md:w-11 md:rounded-2xl"
              style={{ left: `${left}%` }}
            >
              {index === 1 ? <IconTile visual={visual} className="h-5 w-5 text-foreground/35" /> : <Cloud className="h-5 w-5 text-foreground/25" />}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "consult-roadmap") {
    return (
      <div className="relative flex h-full w-full items-center justify-center px-5">
        <div className="w-full max-w-[360px] space-y-3">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/35 text-[10px] text-muted-foreground/60">0{item + 1}</span>
              <span className="h-px flex-1 bg-foreground/10" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "consult-risk" || visual === "consult-review") {
    return (
      <div className="relative flex h-full w-full items-center justify-center px-5">
        <div className="w-full max-w-[360px] rounded-2xl border border-foreground/10 bg-background/35 p-4">
          {(visual === "consult-risk" ? [AlertTriangle, ShieldCheck, Activity] : [FileCheck, CheckCircle, ClipboardCheck]).map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="mb-2 flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.035] px-3 py-2 last:mb-0"
            >
              <Icon className="h-4 w-4 text-foreground/35" />
              <span className="h-1.5 flex-1 rounded-full bg-foreground/10" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center px-5">
      <div className="grid w-full max-w-[390px] grid-cols-3 gap-3">
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: item * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-24 items-center justify-center rounded-2xl border border-foreground/10 bg-background/30"
          >
            {item === 1 ? <IconTile visual={visual} className="h-6 w-6 text-foreground/35" /> : <span className="h-2 w-2 rounded-full bg-foreground/20" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SolutionShowcaseCard = ({ card, index, theme }: { card: SolutionCard; index: number; theme: SolutionTheme }) => {
  const frame = theme === "mobile" ? "rounded-[1.35rem]" : "rounded-2xl";

  return (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -3 }}
    className={`group relative flex min-h-[168px] flex-col overflow-hidden ${frame} border border-border/25 bg-background/75 p-5 transition-colors duration-300 hover:border-foreground/20 hover:bg-foreground/[0.025] md:min-h-[176px] ${card.className}`}
  >
    <div className="mb-5 flex items-center gap-4">
      <span className="font-serif text-3xl leading-none text-foreground/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="h-px flex-1 bg-border/25" />
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/25 bg-card/25 text-muted-foreground/65 transition-colors duration-300 group-hover:text-foreground/85">
        <IconTile visual={card.visual} className="h-4 w-4" />
      </span>
    </div>
    <h3 className="text-sm font-semibold leading-snug text-foreground">{card.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground/75">{card.description}</p>
  </motion.article>
  );
};

const cloudRadarMetrics = [
  { metric: "Speed", value: 86 },
  { metric: "Quality", value: 90 },
  { metric: "Reliability", value: 94 },
  { metric: "Scalability", value: 88 },
  { metric: "Security", value: 92 },
  { metric: "UX", value: 82 },
];

const radarCenter = 120;
const radarRadius = 78;
const radarLabelRadius = 103;

const getRadarPoint = (index: number, radius: number) => {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / cloudRadarMetrics.length;

  return {
    x: radarCenter + Math.cos(angle) * radius,
    y: radarCenter + Math.sin(angle) * radius,
  };
};

const radarGridLevels = [0.25, 0.5, 0.75, 1];
const radarGridPolygons = radarGridLevels.map((level) =>
  cloudRadarMetrics
    .map((_, index) => {
      const point = getRadarPoint(index, radarRadius * level);
      return `${point.x},${point.y}`;
    })
    .join(" ")
);
const radarDataPoints = cloudRadarMetrics.map((item, index) =>
  getRadarPoint(index, radarRadius * (item.value / 100))
);
const radarDataPolygon = radarDataPoints.map((point) => `${point.x},${point.y}`).join(" ");

const getRadarTextAnchor = (x: number) => {
  if (Math.abs(x - radarCenter) < 6) return "middle";
  return x > radarCenter ? "start" : "end";
};

const getRadarLabelDy = (y: number) => {
  if (y < radarCenter - 72) return "-0.35em";
  if (y > radarCenter + 72) return "0.85em";
  return "0.35em";
};

const ServiceHeroArtifact = ({ cards, label, theme }: { cards: SolutionCard[]; label: string; theme: SolutionTheme }) => {
  const styles = themeCardStyles[theme];
  const primary = cards[0];
  const secondary = cards[1] ?? cards[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`relative hidden overflow-hidden ${styles.frame} border border-border/20 bg-card/25 p-4 backdrop-blur-sm lg:block`}
    >
      <div className={`absolute inset-0 ${styles.grid}`} style={{ backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: "34px 34px" }} />
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${styles.glow} to-transparent opacity-70`} />
      <div className="relative mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
        <span>{label}</span>
        <span className="h-px w-16 bg-foreground/10" />
      </div>
      <div className="relative h-44 overflow-hidden rounded-2xl border border-foreground/10 bg-background/30">
        <SolutionIllustration visual={primary.visual} theme={theme} />
      </div>
      <div className="relative mt-3 grid grid-cols-2 gap-3">
        {[primary, secondary].map((card, index) => (
          <div key={`${card.title}-${index}`} className="rounded-2xl border border-foreground/10 bg-background/35 p-4">
            <span className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45">
              0{index + 1}
            </span>
            <p className="line-clamp-2 text-sm font-medium leading-tight text-foreground">{card.title}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const CloudPerformanceRadar = ({ language }: { language: string }) => (
  <section id="performance-radar" className="relative scroll-mt-28 py-8 lg:py-10">
    <div className="container mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="flex flex-col justify-center">
            <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
              {getText(language, "Radar técnico", "Technical radar")}
            </span>
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground lg:text-4xl">
              {getText(language, "Performance vista como sistema.", "Performance viewed as a system.")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {getText(
                language,
                "Infraestrutura boa equilibra velocidade, segurança, escala, confiabilidade e experiência. O radar ajuda a enxergar onde a solução precisa ser forte desde o primeiro deploy.",
                "Good infrastructure balances speed, security, scale, reliability and experience. The radar helps show where the solution needs to be strong from the first deploy."
              )}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-md rounded-xl border border-[#1e1e1e] bg-[#111111] p-5 sm:p-6"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
                  <CloudCog className="h-4 w-4 text-white/70" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Performance Overview</p>
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    {getText(language, "Leitura operacional", "Operational reading")}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/80">
                89/100
              </span>
            </div>

            <div
              className="h-[250px] w-full sm:h-[280px]"
              role="img"
              aria-label={getText(
                language,
                "Radar de performance com velocidade, qualidade, confiabilidade, escalabilidade, segurança e experiência.",
                "Performance radar with speed, quality, reliability, scalability, security and UX."
              )}
            >
              <svg viewBox="0 0 240 240" className="h-full w-full overflow-visible">
                {radarGridPolygons.map((points, index) => (
                  <polygon
                    key={index}
                    points={points}
                    fill="none"
                    stroke="#1e1e1e"
                    strokeWidth={1}
                  />
                ))}

                {cloudRadarMetrics.map((_, index) => {
                  const point = getRadarPoint(index, radarRadius);

                  return (
                    <line
                      key={index}
                      x1={radarCenter}
                      y1={radarCenter}
                      x2={point.x}
                      y2={point.y}
                      stroke="#1e1e1e"
                      strokeWidth={1}
                    />
                  );
                })}

                <motion.polygon
                  points={radarDataPolygon}
                  fill="rgba(255,255,255,0.13)"
                  stroke="rgba(255,255,255,0.86)"
                  strokeWidth={2}
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${radarCenter}px ${radarCenter}px` }}
                />

                {radarDataPoints.map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={3}
                    fill="#f5f5f5"
                    stroke="#111111"
                    strokeWidth={1}
                    initial={{ opacity: 0, cx: radarCenter, cy: radarCenter }}
                    whileInView={{ opacity: 1, cx: point.x, cy: point.y }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}

                {cloudRadarMetrics.map((item, index) => {
                  const point = getRadarPoint(index, radarLabelRadius);

                  return (
                    <text
                      key={item.metric}
                      x={point.x}
                      y={point.y}
                      textAnchor={getRadarTextAnchor(point.x)}
                      dy={getRadarLabelDy(point.y)}
                      fill="rgba(255,255,255,0.58)"
                      fontSize={10}
                    >
                      {item.metric}
                    </text>
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { language } = useTheme();
  const t = useTranslation(language);

  const serviceDetails = {
    "web-development": {
      icon: Code,
      ...t.servicesPage.categories.webDevelopment,
      requirements: language === 'pt' ? [
        "Definição clara dos objetivos do projeto",
        "Identidade visual ou diretrizes de marca",
        "Conteúdo (textos, imagens, vídeos)",
        "Funcionalidades específicas desejadas",
        "Janela desejada para entrega"
      ] : [
        "Clear definition of project objectives",
        "Visual identity or brand guidelines", 
        "Content (texts, images, videos)",
        "Specific desired functionalities",
        "Desired delivery window"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      idealFor: language === 'pt' ? [
        "Empresas que precisam de presença digital profissional",
        "Startups lançando seu primeiro produto",
        "Negócios que querem automatizar processos",
        "Marcas que buscam diferenciação visual"
      ] : [
        "Companies that need professional digital presence",
        "Startups launching their first product",
        "Businesses looking to automate processes",
        "Brands seeking visual differentiation"
      ],
      notIdealFor: language === 'pt' ? [
        "Quem busca atalhos genéricos sem estratégia",
        "Projetos sem decisor ou escopo mínimo definido",
        "Entregas em menos de 1 semana"
      ] : [
        "Those looking for generic shortcuts without strategy",
        "Projects without a decision maker or minimum defined scope",
        "Deliveries in less than 1 week"
      ],
      included: language === 'pt' ? [
        "Design responsivo para todos os dispositivos",
        "Otimização de performance e SEO",
        "Integração com analytics",
        "Painel administrativo (quando aplicável)",
        "30 dias de suporte pós-entrega"
      ] : [
        "Responsive design for all devices",
        "Performance and SEO optimization",
        "Analytics integration",
        "Admin panel (when applicable)",
        "30 days post-delivery support"
      ],
      expectedResults: language === 'pt' ? [
        "Aumento de 40-60% na taxa de conversão",
        "Melhoria significativa no tempo de carregamento",
        "Melhor posicionamento nos buscadores",
        "Experiência do usuário otimizada"
      ] : [
        "40-60% increase in conversion rate",
        "Significant improvement in loading time",
        "Better search engine ranking",
        "Optimized user experience"
      ],
    },
    "mobile-development": {
      icon: Smartphone,
      ...t.servicesPage.categories.mobileDevelopment,
      requirements: language === 'pt' ? [
        "Conceito e objetivos do aplicativo",
        "Plataformas alvo (iOS, Android ou ambas)",
        "Wireframes ou mockups se disponíveis",
        "Integrações necessárias (APIs, serviços)",
        "Prioridades de lançamento"
      ] : [
        "App concept and objectives",
        "Target platforms (iOS, Android or both)",
        "Wireframes or mockups if available",
        "Required integrations (APIs, services)",
        "Launch priorities"
      ],
      technologies: ["React Native", "TypeScript", "Expo", "Firebase", "Native APIs"],
      idealFor: language === 'pt' ? [
        "Empresas que querem alcançar usuários mobile",
        "Negócios com processos que funcionam melhor em app",
        "Startups validando produto no mercado",
        "Serviços que exigem notificações push"
      ] : [
        "Companies wanting to reach mobile users",
        "Businesses with processes that work better as an app",
        "Startups validating product in the market",
        "Services requiring push notifications"
      ],
      notIdealFor: language === 'pt' ? [
        "MVPs que funcionam bem como site mobile",
        "Projetos sem plano de monetização",
        "Quem precisa de app em menos de 1 mês"
      ] : [
        "MVPs that work well as mobile site",
        "Projects without monetization plan",
        "Those who need an app in less than 1 month"
      ],
      included: language === 'pt' ? [
        "Desenvolvimento para iOS e Android",
        "Publicação nas lojas (App Store e Play Store)",
        "Sistema de autenticação seguro",
        "Integração com backend",
        "60 dias de suporte pós-entrega"
      ] : [
        "Development for iOS and Android",
        "Store publication (App Store and Play Store)",
        "Secure authentication system",
        "Backend integration",
        "60 days post-delivery support"
      ],
      expectedResults: language === 'pt' ? [
        "Engajamento 3x maior que versão web",
        "Retenção de usuários significativamente maior",
        "Notificações push com alta taxa de abertura",
        "Experiência nativa fluida"
      ] : [
        "3x higher engagement than web version",
        "Significantly higher user retention",
        "Push notifications with high open rate",
        "Smooth native experience"
      ],
    },
    "bot-development": {
      icon: Bot,
      ...t.servicesPage.categories.botDevelopment,
      requirements: language === 'pt' ? [
        "Plataformas desejadas: Discord, WhatsApp, Telegram ou combinação entre elas",
        "Objetivo do bot e comportamento que ele precisa provocar",
        "Nicho, público, jornada de uso e rotina atual da operação",
        "Regras, permissões, automações e limites importantes",
        "Integrações, dados, APIs ou painéis necessários"
      ] : [
        "Desired platforms: Discord, WhatsApp, Telegram or a combination of them",
        "Bot goal and behavior it needs to trigger",
        "Niche, audience, user journey and current operation routine",
        "Rules, permissions, automations and important limits",
        "Required integrations, data, APIs or dashboards"
      ],
      technologies: ["Node.js", "TypeScript", "Discord.js", "WhatsApp APIs", "Telegram Bot API", "PostgreSQL", "Redis", "Webhooks", "Dashboards"],
      idealFor: language === 'pt' ? [
        "Comunidades, empresas, lojas e projetos que precisam sair do bot genérico",
        "Quem quer criar funcionalidades próprias para Discord, WhatsApp ou Telegram",
        "Operações que dependem de atendimento, engajamento, organização ou automação recorrente",
        "Projetos que precisam transformar uma ideia específica em fluxo usável",
        "Equipes que querem reduzir improviso sem perder a identidade do nicho"
      ] : [
        "Communities, companies, stores and projects that need to move beyond generic bots",
        "Teams that want custom functionality for Discord, WhatsApp or Telegram",
        "Operations that rely on support, engagement, organization or recurring automation",
        "Projects that need to turn a specific idea into a usable flow",
        "Teams that want less improvisation without losing niche identity"
      ],
      notIdealFor: language === 'pt' ? [
        "Bots que violam termos de serviço das plataformas",
        "Automações sem propósito claro",
        "Projetos que só querem copiar um bot pronto sem adaptar ao contexto",
        "Projetos sem infraestrutura de hospedagem"
      ] : [
        "Bots that violate platform terms of service",
        "Automation without clear purpose",
        "Projects that only want to copy a ready-made bot without adapting it to context",
        "Projects without hosting infrastructure"
      ],
      included: language === 'pt' ? [
        "Desenvolvimento do bot completo sob medida",
        "Desenho criativo das funcionalidades antes do desenvolvimento",
        "Fluxos personalizados para comunidade, atendimento, vendas, suporte ou operação interna",
        "Adaptação para Discord, WhatsApp, Telegram e integrações quando fizer sentido",
        "Regras, permissões, dados, logs e automações alinhadas ao contexto",
        "Dashboard web, APIs e webhooks quando agregarem valor real",
        "Documentação técnica e operacional completa"
      ] : [
        "Complete custom bot development",
        "Creative feature design before development",
        "Custom flows for communities, support, sales, service or internal operations",
        "Adaptation for Discord, WhatsApp, Telegram and integrations when useful",
        "Rules, permissions, data, logs and automations aligned with context",
        "Web dashboards, APIs and webhooks when they add real value",
        "Complete technical and operational documentation"
      ],
      expectedResults: language === 'pt' ? [
        "Bot com identidade própria, não uma cópia de comandos genéricos",
        "Interações pensadas para o público e para a plataforma usada",
        "Atendimento, comunidade ou operação com menos improviso e mais clareza",
        "Automação que resolve o problema real por trás da ideia",
        "Base preparada para evoluir com novos fluxos e integrações"
      ] : [
        "A bot with its own identity, not a copy of generic commands",
        "Interactions designed for the audience and platform being used",
        "Support, community or operations with less improvisation and more clarity",
        "Automation that solves the real problem behind the idea",
        "A base ready to evolve with new flows and integrations"
      ],
    },
    "uiux-design": {
      icon: Palette,
      ...t.servicesPage.categories.uiuxDesign,
      requirements: language === 'pt' ? [
        "Briefing detalhado do projeto",
        "Público-alvo e personas",
        "Referências visuais de preferência",
        "Plataformas e dispositivos alvo",
        "Cronograma do projeto"
      ] : [
        "Detailed project briefing",
        "Target audience and personas",
        "Visual preference references",
        "Target platforms and devices",
        "Project timeline"
      ],
      technologies: ["Figma", "Adobe XD", "Principle", "InVision", "User Research"],
      idealFor: language === 'pt' ? [
        "Produtos digitais que precisam de redesign",
        "Startups criando nova identidade visual",
        "Apps que querem melhorar usabilidade",
        "Empresas investindo em experiência do usuário"
      ] : [
        "Digital products needing redesign",
        "Startups creating new visual identity",
        "Apps wanting to improve usability",
        "Companies investing in user experience"
      ],
      notIdealFor: language === 'pt' ? [
        "Projetos que só precisam de templates",
        "Clientes que não valorizam pesquisa com usuários",
        "Entregas sem iteração"
      ] : [
        "Projects that only need templates",
        "Clients who don't value user research",
        "Deliveries without iteration"
      ],
      included: language === 'pt' ? [
        "Pesquisa de usuário e personas",
        "Wireframes de baixa e alta fidelidade",
        "Design system completo",
        "Protótipos interativos",
        "Handoff para desenvolvimento"
      ] : [
        "User research and personas",
        "Low and high fidelity wireframes",
        "Complete design system",
        "Interactive prototypes",
        "Development handoff"
      ],
      expectedResults: language === 'pt' ? [
        "Interface intuitiva e acessível",
        "Consistência visual em todo o produto",
        "Redução significativa em erros de usuário",
        "Maior satisfação e retenção"
      ] : [
        "Intuitive and accessible interface",
        "Visual consistency across the product",
        "Significant reduction in user errors",
        "Higher satisfaction and retention"
      ],
    },
    "cloud-solutions": {
      icon: Cloud,
      ...t.servicesPage.categories.cloudSolutions,
      requirements: language === 'pt' ? [
        "Aplicação ou sistema atual",
        "Volume de tráfego esperado",
        "Requisitos de segurança",
        "Limites e prioridades operacionais",
        "Preferência de provedor cloud"
      ] : [
        "Current application or system",
        "Expected traffic volume",
        "Security requirements",
        "Operational limits and priorities",
        "Cloud provider preference"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring Tools"],
      idealFor: language === 'pt' ? [
        "Aplicações que precisam escalar",
        "Empresas migrando de hospedagem tradicional",
        "Projetos que exigem alta disponibilidade",
        "Times que querem automatizar deploys"
      ] : [
        "Applications that need to scale",
        "Companies migrating from traditional hosting",
        "Projects requiring high availability",
        "Teams wanting to automate deploys"
      ],
      notIdealFor: language === 'pt' ? [
        "Sites simples que funcionam em hospedagem compartilhada",
        "Projetos sem previsão de crescimento",
        "Operações que ainda não precisam de governança cloud"
      ] : [
        "Simple sites that work on shared hosting",
        "Projects with no growth forecast",
        "Operations that do not yet need cloud governance"
      ],
      included: language === 'pt' ? [
        "Arquitetura cloud otimizada",
        "Pipeline CI/CD automatizado",
        "Monitoramento e alertas",
        "Backup automatizado",
        "Documentação de infraestrutura"
      ] : [
        "Optimized cloud architecture",
        "Automated CI/CD pipeline",
        "Monitoring and alerts",
        "Automated backup",
        "Infrastructure documentation"
      ],
      expectedResults: language === 'pt' ? [
        "Uptime de 99.9%+",
        "Deploy automatizado em minutos",
        "Escalabilidade sob demanda",
        "Infraestrutura dimensionada com critério"
      ] : [
        "99.9%+ uptime",
        "Automated deploy in minutes",
        "On-demand scalability",
        "Infrastructure sized with clear criteria"
      ],
    },
    "consulting": {
      icon: Users,
      ...t.servicesPage.categories.consulting,
      requirements: language === 'pt' ? [
        "Descrição do desafio ou projeto",
        "Tamanho e experiência da equipe",
        "Tecnologias atuais em uso",
        "Prazos e limitações",
        "Objetivos específicos"
      ] : [
        "Challenge or project description",
        "Team size and experience",
        "Current technologies in use",
        "Deadlines and limitations",
        "Specific objectives"
      ],
      technologies: ["Strategic Planning", "Code Review", "Architecture Design", "Team Training"],
      idealFor: language === 'pt' ? [
        "CTOs e tech leads buscando segunda opinião",
        "Startups definindo arquitetura inicial",
        "Times com problemas técnicos complexos",
        "Empresas planejando grandes refatorações"
      ] : [
        "CTOs and tech leads seeking second opinion",
        "Startups defining initial architecture",
        "Teams with complex technical problems",
        "Companies planning major refactors"
      ],
      notIdealFor: language === 'pt' ? [
        "Quem busca apenas execução sem estratégia",
        "Projetos sem clareza de objetivos",
        "Decisões já tomadas que precisam só de validação"
      ] : [
        "Those seeking only execution without strategy",
        "Projects without clarity of objectives",
        "Already made decisions that just need validation"
      ],
      included: language === 'pt' ? [
        "Diagnóstico técnico completo",
        "Recomendações documentadas",
        "Code review detalhado",
        "Sessões de mentoria",
        "Acompanhamento de implementação"
      ] : [
        "Complete technical diagnosis",
        "Documented recommendations",
        "Detailed code review",
        "Mentoring sessions",
        "Implementation follow-up"
      ],
      expectedResults: language === 'pt' ? [
        "Clareza na direção técnica",
        "Identificação de riscos antecipada",
        "Melhoria na qualidade do código",
        "Time mais capacitado"
      ] : [
        "Clarity in technical direction",
        "Early risk identification",
        "Improved code quality",
        "More capable team"
      ],
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-6">
            {language === 'pt' ? 'Serviço não encontrado' : 'Service not found'}
          </h1>
          <Link 
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
          </Link>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;
  const benefits = [
    language === 'pt' ? 'Código limpo e documentado' : 'Clean and documented code',
    language === 'pt' ? 'Suporte pós-entrega' : 'Post-delivery support',
    language === 'pt' ? 'Metodologia ágil' : 'Agile methodology',
    language === 'pt' ? 'Comunicação transparente' : 'Transparent communication'
  ];
  const solutionPresentation: Record<string, { theme: SolutionTheme; eyebrow: string; title: string; description: string; layout: string[] }> = {
    "web-development": {
      theme: "product",
      eyebrow: getText(language, "Arquitetura de produto", "Product architecture"),
      title: getText(language, "Presença digital com operação por trás", "Digital presence with operations behind it"),
      description: getText(
        language,
        "A página não termina na tela bonita. Ela precisa carregar rápido, converter com clareza e sustentar painel, conteúdo, dados e integrações.",
        "The page does not end at a polished screen. It needs to load fast, convert clearly and support dashboards, content, data and integrations."
      ),
      layout: [
        "md:col-span-1 lg:col-span-3",
        "md:col-span-1 lg:col-span-3",
        "md:col-span-2 lg:col-span-6",
        "md:col-span-1 lg:col-span-3",
        "md:col-span-2 lg:col-span-6",
        "md:col-span-1 lg:col-span-3",
      ],
    },
    "mobile-development": {
      theme: "mobile",
      eyebrow: getText(language, "Experiência recorrente", "Recurring experience"),
      title: getText(language, "Aplicativo pensado para voltar todo dia", "An app designed for daily return"),
      description: getText(
        language,
        "No mobile, cada toque precisa ter intenção, fluxo curto, estado claro, dados sincronizados e lançamento sem improviso.",
        "On mobile, every tap needs intent, short flows, clear state, synced data and release without improvisation."
      ),
      layout: [
        "md:col-span-1 lg:col-span-4",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-2 lg:col-span-4",
        "md:col-span-2 lg:col-span-6",
        "md:col-span-1 lg:col-span-3",
        "md:col-span-1 lg:col-span-3",
      ],
    },
    "bot-development": {
      theme: "automation",
      eyebrow: getText(language, "Bots sob medida", "Custom bots"),
      title: getText(language, "Bots que nascem da ideia, não do template", "Bots born from the idea, not the template"),
      description: getText(
        language,
        "Eu uso criatividade e leitura de contexto para criar bots que saem do genérico em Discord, WhatsApp, Telegram e outras integrações. A função nasce do problema, do público e da experiência que precisa existir.",
        "I use creativity and context reading to build bots that move beyond generic templates across Discord, WhatsApp, Telegram and other integrations. The feature starts from the problem, the audience and the experience that needs to exist."
      ),
      layout: [
        "md:col-span-2 lg:col-span-6",
        "md:col-span-1 lg:col-span-3",
        "md:col-span-1 lg:col-span-3",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-2 lg:col-span-4",
      ],
    },
    "uiux-design": {
      theme: "design",
      eyebrow: getText(language, "Decisão visual", "Visual decision"),
      title: getText(language, "Experiência desenhada antes do código", "Experience designed before code"),
      description: getText(
        language,
        "A interface nasce da leitura do problema, com hierarquia, jornada, estados, protótipo e handoff caminhando juntos.",
        "The interface starts from reading the problem, with hierarchy, journey, states, prototype and handoff moving together."
      ),
      layout: [
        "md:col-span-1 lg:col-span-4",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-2 lg:col-span-4",
        "md:col-span-2 lg:col-span-5",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-1 lg:col-span-3",
      ],
    },
    "cloud-solutions": {
      theme: "cloud",
      eyebrow: getText(language, "Infraestrutura viva", "Living infrastructure"),
      title: getText(language, "Deploy, escala e estabilidade no mesmo desenho", "Deploy, scale and stability in the same design"),
      description: getText(
        language,
        "A nuvem precisa ser compreensível, com ambientes, limites, alertas, backup e pipeline funcionando como um sistema só.",
        "Cloud needs to be understandable, with environments, limits, alerts, backup and pipeline working as one system."
      ),
      layout: [
        "md:col-span-1 lg:col-span-3",
        "md:col-span-2 lg:col-span-6",
        "md:col-span-1 lg:col-span-3",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-2 lg:col-span-4",
      ],
    },
    consulting: {
      theme: "strategy",
      eyebrow: getText(language, "Direção técnica", "Technical direction"),
      title: getText(language, "Clareza para decidir antes de executar", "Clarity to decide before executing"),
      description: getText(
        language,
        "Consultoria boa diminui ruído e revela gargalos, prioriza risco, organiza arquitetura e transforma diagnóstico em próxima ação.",
        "Good consulting reduces noise and it reveals bottlenecks, prioritizes risk, organizes architecture and turns diagnosis into the next action."
      ),
      layout: [
        "md:col-span-2 lg:col-span-6",
        "md:col-span-2 lg:col-span-6",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-1 lg:col-span-4",
        "md:col-span-2 lg:col-span-4",
        "md:col-span-2 lg:col-span-12",
      ],
    },
  };
  const solutionContent: Record<string, Array<Omit<SolutionCard, "className">>> = {
    "web-development": [
      {
        title: getText(language, "Interface orientada a conversão", "Conversion-led interface"),
        description: getText(language, "Páginas desenhadas para conduzir decisão, leitura e ação sem ruído.", "Pages designed to guide decision, reading and action without noise."),
        visual: "web-conversion",
      },
      {
        title: getText(language, "Arquitetura escalável", "Scalable architecture"),
        description: getText(language, "Base técnica preparada para crescer sem virar uma coleção de remendos.", "A technical base ready to grow without becoming a patchwork."),
        visual: "web-architecture",
      },
      {
        title: getText(language, "Painéis e operações", "Dashboards and operations"),
        description: getText(language, "Fluxos internos, permissões e dados importantes organizados em uma experiência clara.", "Internal flows, permissions and key data organized into a clear experience."),
        visual: "web-dashboard",
      },
      {
        title: getText(language, "Performance monitorada", "Monitored performance"),
        description: getText(language, "Carregamento, estabilidade e SEO tratados como parte do produto.", "Loading, stability and SEO treated as part of the product."),
        visual: "web-performance",
      },
      {
        title: getText(language, "Integrações sob medida", "Custom integrations"),
        description: getText(language, "APIs, automações e serviços conectados com regras previsíveis.", "APIs, automations and services connected through predictable rules."),
        visual: "web-integrations",
      },
      {
        title: getText(language, "Entrega rastreável", "Traceable delivery"),
        description: getText(language, "Escopo, etapas e decisões técnicas documentadas durante o projeto.", "Scope, stages and technical decisions documented throughout the project."),
        visual: "web-delivery",
      },
    ],
    "mobile-development": [
      {
        title: getText(language, "Fluxos nativos", "Native flows"),
        description: getText(language, "Jornadas pensadas para toque, contexto e uso recorrente.", "Journeys designed for touch, context and recurring use."),
        visual: "mobile-flow",
      },
      {
        title: getText(language, "Retenção e notificação", "Retention and notification"),
        description: getText(language, "Alertas, estados e lembretes com utilidade real, sem excesso.", "Useful alerts, states and reminders, without excess."),
        visual: "mobile-notification",
      },
      {
        title: getText(language, "Dados sincronizados", "Synced data"),
        description: getText(language, "Experiências conectadas ao backend com segurança e consistência.", "Experiences connected to the backend with safety and consistency."),
        visual: "mobile-sync",
      },
      {
        title: getText(language, "Publicação assistida", "Guided release"),
        description: getText(language, "Preparação para lojas, versões, permissões e checklist de lançamento.", "Preparation for stores, versions, permissions and release checklist."),
        visual: "mobile-release",
      },
      {
        title: getText(language, "Design de uso diário", "Daily-use design"),
        description: getText(language, "Interfaces simples o bastante para voltar todo dia sem reaprender.", "Interfaces simple enough to return to daily without relearning."),
        visual: "mobile-daily",
      },
      {
        title: getText(language, "Camada segura", "Secure layer"),
        description: getText(language, "Autenticação, regras de acesso e dados sensíveis tratados com critério.", "Authentication, access rules and sensitive data handled carefully."),
        visual: "mobile-security",
      },
    ],
    "bot-development": [
      {
        title: getText(language, "Fluxos com propósito", "Purposeful flows"),
        description: getText(language, "Cada interação nasce de uma rotina real, não de uma lista genérica de comandos.", "Every interaction starts from a real routine, not from a generic command list."),
        visual: "bot-command",
      },
      {
        title: getText(language, "Criatividade aplicada", "Applied creativity"),
        description: getText(language, "A solução pode virar atendimento, jogo, triagem, integração, ritual de comunidade ou qualquer fluxo útil para o nicho.", "The solution can become support, a game, triage, an integration, a community ritual or any useful flow for the niche."),
        visual: "bot-moderation",
      },
      {
        title: getText(language, "Multi-plataforma", "Multi-platform"),
        description: getText(language, "Discord, WhatsApp e Telegram entram conforme o público usa, com lógica adaptada para cada ambiente.", "Discord, WhatsApp and Telegram are used according to the audience, with logic adapted to each environment."),
        visual: "bot-community",
      },
      {
        title: getText(language, "Interação com identidade", "Interaction with identity"),
        description: getText(language, "Mecânicas, mensagens e respostas são desenhadas para parecerem parte natural do projeto.", "Mechanics, messages and replies are designed to feel like a natural part of the project."),
        visual: "bot-economy",
      },
      {
        title: getText(language, "Operação conectada", "Connected operations"),
        description: getText(language, "Quando precisa, o bot conversa com APIs, bancos, painéis, webhooks e sistemas internos.", "When needed, the bot talks to APIs, databases, dashboards, webhooks and internal systems."),
        visual: "bot-uptime",
      },
      {
        title: getText(language, "Evolução planejada", "Planned evolution"),
        description: getText(language, "A base fica pronta para crescer com novos comportamentos, integrações e regras do negócio.", "The base is prepared to grow with new behaviors, integrations and business rules."),
        visual: "bot-permissions",
      },
    ],
    "uiux-design": [
      {
        title: getText(language, "Diagnóstico de experiência", "Experience diagnosis"),
        description: getText(language, "Leitura crítica de fluxo, atrito, hierarquia e intenção de uso.", "Critical reading of flow, friction, hierarchy and user intent."),
        visual: "ux-diagnosis",
      },
      {
        title: getText(language, "Wireframes objetivos", "Objective wireframes"),
        description: getText(language, "Estrutura antes de estética para evitar decisões bonitas e frágeis.", "Structure before aesthetics to avoid pretty but fragile decisions."),
        visual: "ux-wireframe",
      },
      {
        title: getText(language, "Protótipos navegáveis", "Clickable prototypes"),
        description: getText(language, "Interações testáveis antes do desenvolvimento assumir retrabalho maior.", "Testable interactions before development takes on heavier rework."),
        visual: "ux-prototype",
      },
      {
        title: getText(language, "Design system", "Design system"),
        description: getText(language, "Componentes, estados e padrões para manter consistência no tempo.", "Components, states and patterns to keep consistency over time."),
        visual: "ux-system",
      },
      {
        title: getText(language, "Métricas de usabilidade", "Usability metrics"),
        description: getText(language, "Sinais de clareza, conversão e comportamento mapeados para evolução.", "Clarity, conversion and behavior signals mapped for iteration."),
        visual: "ux-metrics",
      },
      {
        title: getText(language, "Handoff limpo", "Clean handoff"),
        description: getText(language, "Especificação pronta para desenvolvimento sem interpretação solta.", "Specification ready for development without loose interpretation."),
        visual: "ux-handoff",
      },
    ],
    "cloud-solutions": [
      {
        title: getText(language, "Arquitetura de deploy", "Deployment architecture"),
        description: getText(language, "Ambientes, rotas e versões preparados para entrega contínua.", "Environments, routes and versions prepared for continuous delivery."),
        visual: "cloud-deploy",
      },
      {
        title: getText(language, "Monitoramento ativo", "Active monitoring"),
        description: getText(language, "Alertas úteis para agir antes que instabilidade vire incidente.", "Useful alerts to act before instability becomes an incident."),
        visual: "cloud-monitoring",
      },
      {
        title: getText(language, "Capacidade ajustada", "Right-sized capacity"),
        description: getText(language, "Infraestrutura dimensionada para desempenho sem excesso operacional.", "Infrastructure sized for performance without operational excess."),
        visual: "cloud-capacity",
      },
      {
        title: getText(language, "Backup e recuperação", "Backup and recovery"),
        description: getText(language, "Rotinas para proteger dados e reduzir tempo de retomada.", "Routines to protect data and reduce recovery time."),
        visual: "cloud-backup",
      },
      {
        title: getText(language, "Pipeline automatizado", "Automated pipeline"),
        description: getText(language, "Build, teste e publicação fluindo com menos intervenção manual.", "Build, test and release flowing with less manual intervention."),
        visual: "cloud-pipeline",
      },
      {
        title: getText(language, "Escala planejada", "Planned scale"),
        description: getText(language, "Capacidade preparada para picos, crescimento e novas integrações.", "Capacity prepared for spikes, growth and new integrations."),
        visual: "cloud-scale",
      },
    ],
    consulting: [
      {
        title: getText(language, "Diagnóstico técnico", "Technical diagnosis"),
        description: getText(language, "Mapeamento de gargalos, riscos e decisões que travam avanço.", "Mapping bottlenecks, risks and decisions that block progress."),
        visual: "consult-diagnosis",
      },
      {
        title: getText(language, "Prioridade de roadmap", "Roadmap priority"),
        description: getText(language, "Ordem de execução definida por impacto, esforço e dependências.", "Execution order defined by impact, effort and dependencies."),
        visual: "consult-roadmap",
      },
      {
        title: getText(language, "Arquitetura orientada", "Guided architecture"),
        description: getText(language, "Caminho técnico claro para evoluir sem comprometer manutenção.", "A clear technical path to evolve without compromising maintenance."),
        visual: "consult-architecture",
      },
      {
        title: getText(language, "Revisão de qualidade", "Quality review"),
        description: getText(language, "Leitura de código, processos e decisões com recomendações práticas.", "Code, process and decision review with practical recommendations."),
        visual: "consult-review",
      },
      {
        title: getText(language, "Mentoria de execução", "Execution mentoring"),
        description: getText(language, "Acompanhamento para transformar direção técnica em entrega real.", "Guidance to turn technical direction into real delivery."),
        visual: "consult-mentoring",
      },
      {
        title: getText(language, "Riscos visíveis", "Visible risks"),
        description: getText(language, "Sinais de débito técnico, segurança e operação tratados cedo.", "Technical debt, safety and operation signals handled early."),
        visual: "consult-risk",
      },
    ],
  };
  const currentSolution = solutionPresentation[serviceId ?? ""] ?? solutionPresentation.consulting;
  const solutionCards = (solutionContent[serviceId ?? ""] ?? solutionContent.consulting).map((card) => ({
    ...card,
    className: "md:col-span-1 lg:col-span-4",
  }));
  const serviceBlueprints: Record<string, ServiceBlueprint> = {
    "web-development": {
      principle: getText(language, "O site como sistema, não como vitrine solta.", "The website as a system, not a loose showcase."),
      narrative: getText(
        language,
        "Uma entrega web precisa sustentar leitura, conversão, manutenção e operação. Antes de desenhar tela, eu organizo intenção, dados, fluxo editorial e o que precisa continuar funcionando depois do lançamento.",
        "A web delivery needs to support reading, conversion, maintenance and operation. Before drawing screens, I organize intent, data, editorial flow and what must keep working after launch."
      ),
      stages: language === "pt"
        ? ["Leitura do negócio e dos usuários", "Arquitetura de páginas, rotas e estados", "Interface responsiva com performance", "Publicação, documentação e handoff"]
        : ["Business and user reading", "Page, route and state architecture", "Responsive interface with performance", "Release, documentation and handoff"],
      signals: [
        { label: getText(language, "entrada", "input"), value: getText(language, "objetivo + conteúdo", "goal + content") },
        { label: getText(language, "núcleo", "core"), value: getText(language, "UX + front-end", "UX + front-end") },
        { label: getText(language, "saída", "output"), value: getText(language, "produto publicável", "publishable product") },
      ],
      handoff: language === "pt"
        ? ["Estrutura de páginas e componentes", "Critérios de responsividade", "Integrações documentadas", "Base preparada para evolução"]
        : ["Page and component structure", "Responsiveness criteria", "Documented integrations", "Base prepared for evolution"],
      qualities: language === "pt"
        ? ["Carregamento rápido", "Navegação óbvia", "Conteúdo legível", "Manutenção previsível"]
        : ["Fast loading", "Obvious navigation", "Readable content", "Predictable maintenance"],
    },
    "mobile-development": {
      principle: getText(language, "Um app só faz sentido quando vira hábito útil.", "An app only makes sense when it becomes a useful habit."),
      narrative: getText(
        language,
        "No mobile, o usuário não perdoa fluxo confuso. A entrega precisa respeitar toque, contexto, retorno frequente, estados offline e o caminho até publicação.",
        "On mobile, users do not forgive confusing flows. The delivery must respect touch, context, frequent return, offline states and the path to release."
      ),
      stages: language === "pt"
        ? ["Mapeamento de jornada recorrente", "Protótipo dos fluxos principais", "Integração com dados e notificações", "Preparação para loja e evolução"]
        : ["Recurring journey mapping", "Prototype of key flows", "Data and notification integration", "Store and evolution preparation"],
      signals: [
        { label: getText(language, "uso", "usage"), value: getText(language, "toque diário", "daily touch") },
        { label: getText(language, "estado", "state"), value: getText(language, "sincronizado", "synced") },
        { label: getText(language, "lançamento", "release"), value: getText(language, "assistido", "guided") },
      ],
      handoff: language === "pt"
        ? ["Fluxos de tela claros", "Estados e permissões definidos", "Integrações com backend", "Checklist de publicação"]
        : ["Clear screen flows", "Defined states and permissions", "Backend integrations", "Release checklist"],
      qualities: language === "pt"
        ? ["Toque sem fricção", "Retorno com contexto", "Dados consistentes", "Uso simples no dia a dia"]
        : ["Frictionless touch", "Contextual return", "Consistent data", "Simple daily use"],
    },
    "bot-development": {
      principle: getText(language, "Bot bom resolve uma intenção específica, não só responde comando.", "A good bot solves a specific intent, not just a command."),
      narrative: getText(
        language,
        "Eu trato bot como produto de interação. Pode ser para Discord, WhatsApp, Telegram, comunidade, empresa, loja ou suporte: primeiro vem a ideia e o comportamento desejado, depois eu desenho a automação que faz aquilo acontecer sem cair no genérico.",
        "I treat bots as interaction products. It can be for Discord, WhatsApp, Telegram, communities, companies, stores or support: the idea and desired behavior come first, then I design the automation that makes it happen without becoming generic."
      ),
      stages: language === "pt"
        ? ["Leitura do nicho, público e plataforma", "Desenho da experiência e dos fluxos próprios", "Automação com regras, integrações e dados", "Deploy, documentação e evolução planejada"]
        : ["Reading the niche, audience and platform", "Designing the experience and custom flows", "Automation with rules, integrations and data", "Deploy, documentation and planned evolution"],
      signals: [
        { label: getText(language, "ideia", "idea"), value: getText(language, "traduzida", "translated") },
        { label: getText(language, "plataforma", "platform"), value: getText(language, "adaptada", "adapted") },
        { label: getText(language, "fluxo", "flow"), value: getText(language, "próprio", "custom") },
      ],
      handoff: language === "pt"
        ? ["Documentação técnica", "Arquitetura do bot", "Fluxos operacionais", "Manual da equipe", "Comandos e configurações", "Integrações documentadas", "Estrutura do banco de dados", "Roadmap de evolução"]
        : ["Technical documentation", "Bot architecture", "Operational flows", "Team manual", "Commands and settings", "Documented integrations", "Database structure", "Evolution roadmap"],
      qualities: language === "pt"
        ? ["Criatividade aplicada", "Experiência própria", "Automação útil", "Base evolutiva"]
        : ["Applied creativity", "Own experience", "Useful automation", "Evolving base"],
    },
    "uiux-design": {
      principle: getText(language, "Design não é enfeite. É decisão antes do retrabalho.", "Design is not decoration. It is decision before rework."),
      narrative: getText(
        language,
        "A entrega de UI/UX existe para reduzir dúvida antes do desenvolvimento, unindo hierarquia, intenção de uso, estados, protótipo e documentação para execução.",
        "UI/UX delivery exists to reduce doubt before development, connecting hierarchy, usage intent, states, prototype and execution documentation."
      ),
      stages: language === "pt"
        ? ["Diagnóstico de experiência", "Arquitetura de informação", "Protótipo e estados críticos", "Handoff com componentes e regras"]
        : ["Experience diagnosis", "Information architecture", "Prototype and critical states", "Handoff with components and rules"],
      signals: [
        { label: getText(language, "decisão", "decision"), value: getText(language, "visual", "visual") },
        { label: getText(language, "base", "base"), value: getText(language, "sistema", "system") },
        { label: getText(language, "saída", "output"), value: getText(language, "handoff", "handoff") },
      ],
      handoff: language === "pt"
        ? ["Fluxos priorizados", "Componentes e variações", "Estados vazios, erro e sucesso", "Critérios para desenvolvimento"]
        : ["Prioritized flows", "Components and variations", "Empty, error and success states", "Development criteria"],
      qualities: language === "pt"
        ? ["Hierarquia clara", "Atrito reduzido", "Consistência visual", "Entrega interpretável"]
        : ["Clear hierarchy", "Reduced friction", "Visual consistency", "Interpretable delivery"],
    },
    "cloud-solutions": {
      principle: getText(language, "Nuvem boa é a que a equipe entende.", "Good cloud is cloud the team understands."),
      narrative: getText(
        language,
        "Infraestrutura precisa ser previsível, com ambientes, deploy, backup, logs e alerta devem formar uma operação que não dependa de improviso.",
        "Infrastructure needs to be predictable, with environments, deploy, backup, logs and alerts should form an operation that does not depend on improvisation."
      ),
      stages: language === "pt"
        ? ["Mapeamento de ambiente atual", "Desenho de deploy e observabilidade", "Backup, segurança e recuperação", "Documentação operacional"]
        : ["Current environment mapping", "Deploy and observability design", "Backup, security and recovery", "Operational documentation"],
      signals: [
        { label: getText(language, "deploy", "deploy"), value: getText(language, "contínuo", "continuous") },
        { label: getText(language, "dados", "data"), value: getText(language, "protegidos", "protected") },
        { label: getText(language, "alerta", "alert"), value: getText(language, "acionável", "actionable") },
      ],
      handoff: language === "pt"
        ? ["Ambientes organizados", "Pipeline de publicação", "Rotina de backup", "Manual de operação"]
        : ["Organized environments", "Release pipeline", "Backup routine", "Operations manual"],
      qualities: language === "pt"
        ? ["Deploy sem susto", "Logs encontráveis", "Recuperação planejada", "Escala compreensível"]
        : ["Calm deploy", "Findable logs", "Planned recovery", "Understandable scale"],
    },
    consulting: {
      principle: getText(language, "Consultoria boa deixa a próxima decisão mais óbvia.", "Good consulting makes the next decision more obvious."),
      narrative: getText(
        language,
        "A consultoria entra quando existe ruído técnico, produto travado ou crescimento sem base. O objetivo é transformar incerteza em rota, prioridade e critério.",
        "Consulting enters when there is technical noise, stuck product or growth without a base. The goal is to turn uncertainty into route, priority and criteria."
      ),
      stages: language === "pt"
        ? ["Escuta do problema e das restrições", "Diagnóstico técnico e organizacional", "Roadmap por impacto e risco", "Acompanhamento das decisões críticas"]
        : ["Problem and constraint listening", "Technical and organizational diagnosis", "Roadmap by impact and risk", "Critical decision follow-up"],
      signals: [
        { label: getText(language, "leitura", "reading"), value: getText(language, "profunda", "deep") },
        { label: getText(language, "foco", "focus"), value: getText(language, "prioridade", "priority") },
        { label: getText(language, "saída", "output"), value: getText(language, "rota", "route") },
      ],
      handoff: language === "pt"
        ? ["Mapa de riscos", "Recomendações técnicas", "Prioridades de execução", "Critérios para decidir"]
        : ["Risk map", "Technical recommendations", "Execution priorities", "Decision criteria"],
      qualities: language === "pt"
        ? ["Menos achismo", "Risco visível", "Decisão documentada", "Execução com direção"]
        : ["Less guesswork", "Visible risk", "Documented decision", "Directed execution"],
    },
  };
  const blueprint = serviceBlueprints[serviceId ?? ""] ?? serviceBlueprints.consulting;
  const botProcessSteps = language === "pt"
    ? [
        { title: "Diagnóstico", text: "Entendo cenário, rotina, gargalos e oportunidades." },
        { title: "Arquitetura", text: "Desenho módulos, permissões, dados e integrações." },
        { title: "Planejamento", text: "Defino escopo, regras, prioridades e evolução." },
        { title: "Desenvolvimento", text: "Construo fluxos, comandos e automações." },
        { title: "Implantação", text: "Configuro, valido e preparo a operação." },
        { title: "Acompanhamento", text: "Ajusto pontos finos e planejo próximas versões." },
      ]
    : [
        { title: "Diagnosis", text: "I understand context, routine, bottlenecks and opportunities." },
        { title: "Architecture", text: "I design modules, permissions, data and integrations." },
        { title: "Planning", text: "I define scope, rules, priorities and evolution." },
        { title: "Development", text: "I build flows, commands and automations." },
        { title: "Deployment", text: "I configure, validate and prepare operations." },
        { title: "Follow-up", text: "I adjust details and plan next versions." },
      ];
  const botUniquenessFactors = language === "pt"
    ? ["Objetivo", "Membros", "Equipe", "Regras", "Identidade", "Monetização", "Crescimento", "Integrações"]
    : ["Goal", "Members", "Team", "Rules", "Identity", "Monetization", "Growth", "Integrations"];
  const botOperationalFlow = language === "pt"
    ? ["Usuário", "Triagem", "Bot", "Equipe", "Logs", "Feedback"]
    : ["User", "Triage", "Bot", "Team", "Logs", "Feedback"];
  const botMethodHighlights = [
    {
      title: getText(language, "Diagnóstico do Projeto", "Project Diagnosis"),
      text: getText(
        language,
        "Antes do código, entendo estrutura, rotina, gargalos, segurança e experiência dos membros.",
        "Before code, I understand structure, routine, bottlenecks, security and member experience."
      ),
    },
    {
      title: getText(language, "Arquitetura do Bot", "Bot Architecture"),
      text: getText(
        language,
        "O bot ganha mapa de módulos, fluxos, permissões, integrações, dados e comandos.",
        "The bot gets a map of modules, flows, permissions, integrations, data and commands."
      ),
    },
    {
      title: getText(language, "Recomendações Estratégicas", "Strategic Recommendations"),
      text: getText(
        language,
        "Proponho automações, IA, monetização, fidelização, dashboards e integrações quando fizer sentido.",
        "I propose automation, AI, monetization, loyalty, dashboards and integrations when useful."
      ),
    },
    {
      title: getText(language, "Entrega e Evolução", "Delivery and Evolution"),
      text: getText(
        language,
        "Entrego documentação, configuração, implantação assistida e base preparada para novos módulos.",
        "I deliver documentation, setup, guided deployment and a base prepared for new modules."
      ),
    },
  ];

  return (
    <Layout>
      <SEO 
        title={`${service.title} | Serviços - Talisson Souza`}
        description={service.description}
        canonical={language === "en" ? `/en-us/services/${serviceId}` : `/servicos/${serviceId}`}
        keywords={[service.title, 'serviço', 'desenvolvimento', ...service.technologies]}
      />
      
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-2 pb-4 lg:pt-3 lg:pb-5"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
            <div className="absolute top-1/3 right-1/4 w-[360px] h-[360px] bg-gradient-radial from-foreground/[0.012] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              to="/servicos"
              className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'pt' ? 'Voltar aos Serviços' : 'Back to Services'}
            </Link>
            
            <div className="max-w-5xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70"
              >
                {getText(language, 'Serviço', 'Service')}
              </motion.span>
              
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-border/25 bg-card/35 sm:flex"
                >
                  <IconComponent className="h-6 w-6 text-foreground/70" />
                </motion.div>
                <div>
                  <h1 className="mb-2 font-serif text-3xl leading-[1.08] text-foreground lg:text-4xl">
                    {service.title}
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {serviceId === "cloud-solutions" && <CloudPerformanceRadar language={language} />}

      {/* Solution Showcase */}
      <section id="solucoes" className="relative scroll-mt-28 overflow-hidden py-6 lg:py-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.01] blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/65"
              >
                {currentSolution.eyebrow}
              </motion.span>
              <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl lg:text-4xl">
                {currentSolution.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {currentSolution.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
            {solutionCards.map((card, index) => (
              <SolutionShowcaseCard key={card.title} card={card} index={index} theme={currentSolution.theme} />
            ))}
          </div>
        </div>
      </section>

      {serviceId === "bot-development" && (
        <section id="metodo-bot-operacional" className="relative scroll-mt-28 overflow-hidden py-10 lg:py-14">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/20 to-transparent" />
            <div className="absolute left-[8vw] top-28 h-60 w-60 rounded-full bg-foreground/[0.01] blur-3xl" />
          </div>

          <div className="container relative mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Método Bot Operacional", "Operational Bot Method")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-4xl">
                  {getText(
                    language,
                    "Consultoria antes do código.",
                    "Consulting before code."
                  )}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "O bot deixa de ser um conjunto de comandos quando existe diagnóstico, arquitetura, especificação e plano de evolução. A entrega vira parte da operação do servidor, comunidade, loja ou atendimento.",
                    "The bot stops being a set of commands when there is diagnosis, architecture, specification and an evolution plan. The delivery becomes part of the server, community, store or support operation."
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 space-y-12">
              <ScrollReveal>
                <div className="border-y border-border/20 py-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                        {getText(language, "Projeto próprio", "Custom project")}
                      </span>
                      <h3 className="font-serif text-3xl leading-tight text-foreground">
                        {getText(language, "O que torna cada bot único", "What makes each bot unique")}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                      {getText(
                        language,
                        "Cada decisão parte da operação real, do comportamento esperado e da forma como o público usa a plataforma.",
                        "Every decision starts from the real operation, expected behavior and how the audience uses the platform."
                      )}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {botUniquenessFactors.map((factor, index) => (
                      <motion.span
                        key={factor}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.025 }}
                        className="border border-border/25 bg-background/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
                      >
                        {factor}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border-y border-border/20 py-8">
                  <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                        {getText(language, "Processo", "Process")}
                      </span>
                      <h3 className="font-serif text-3xl leading-tight text-foreground">
                        {getText(language, "Da descoberta ao acompanhamento", "From discovery to follow-up")}
                      </h3>
                    </div>
                    <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground/55">
                      {getText(language, "06 etapas", "06 steps")}
                    </span>
                  </div>

                  <div className="overflow-hidden border border-border/20 bg-border/15">
                    <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
                    {botProcessSteps.map((step, index) => (
                      <motion.div
                        key={step.title}
                        whileHover={{ y: -3 }}
                        className="group relative flex h-full min-h-[156px] w-full flex-col bg-background/94 p-5 transition-colors duration-300 hover:bg-foreground/[0.035] sm:p-6"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-3xl leading-none text-foreground/22 transition-colors duration-300 group-hover:text-foreground/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px flex-1 bg-border/25 transition-colors duration-300 group-hover:bg-foreground/25" />
                        </div>
                        <div className="mt-7">
                          <h4 className="text-[15px] font-semibold leading-snug text-foreground">
                            {step.title}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {step.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="overflow-hidden border border-border/20 bg-border/15">
                <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
                  {botMethodHighlights.map((highlight, index) => (
                    <ScrollReveal key={highlight.title} delay={index * 0.035}>
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="group relative flex h-full min-h-[178px] w-full flex-col bg-background/94 p-5 transition-colors duration-300 hover:bg-foreground/[0.035] sm:p-6"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-3xl leading-none text-foreground/22 transition-colors duration-300 group-hover:text-foreground/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px flex-1 bg-border/25 transition-colors duration-300 group-hover:bg-foreground/25" />
                        </div>
                        <div className="mt-7">
                          <h3 className="text-[15px] font-semibold leading-snug text-foreground">
                            {highlight.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {highlight.text}
                          </p>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal>
                <div className="border-y border-border/20 py-8">
                  <div className="mb-7 max-w-2xl">
                    <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                      {getText(language, "Exemplo de fluxo", "Flow example")}
                    </span>
                    <h3 className="font-serif text-3xl leading-tight text-foreground">
                      {getText(language, "Processo visível do começo ao fim", "Visible process from start to finish")}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {getText(
                        language,
                        "Quando o bot organiza uma operação, cada etapa precisa ter regra, responsável, registro e encerramento claro.",
                        "When the bot organizes an operation, each step needs rules, ownership, records and clear closure."
                      )}
                    </p>
                  </div>

                  <div className="overflow-hidden border border-border/20 bg-border/15">
                    <div className="grid gap-px sm:grid-cols-3 lg:grid-cols-6">
                    {botOperationalFlow.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.035 }}
                        className="group relative flex h-full min-h-[122px] w-full flex-col bg-background/94 p-5 transition-colors duration-300 hover:bg-foreground/[0.035]"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-2xl leading-none text-foreground/22 transition-colors duration-300 group-hover:text-foreground/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px flex-1 bg-border/25 transition-colors duration-300 group-hover:bg-foreground/25" />
                        </div>
                        <div className="mt-6">
                          <h4 className="text-[15px] font-semibold leading-snug text-foreground">
                            {step}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Service Blueprint */}
      <section id="leitura" className="relative scroll-mt-28 overflow-hidden py-14 lg:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          <div className="absolute right-[8vw] top-20 h-64 w-64 rounded-full bg-foreground/[0.025] blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Leitura do projeto", "Project reading")}
                </span>
                <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {blueprint.principle}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {blueprint.narrative}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {blueprint.signals.map((signal, index) => (
                  <ScrollReveal key={signal.label} delay={index * 0.05}>
                    <motion.div whileHover={{ y: -4 }} className="border-y border-border/20 py-5">
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">{signal.label}</span>
                      <span className="mt-3 block font-serif text-2xl leading-none text-foreground">{signal.value}</span>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="divide-y divide-border/20 border-y border-border/20">
                {blueprint.stages.map((stage, index) => (
                  <ScrollReveal key={stage} delay={index * 0.06}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="group grid gap-4 py-6 sm:grid-cols-[86px_1fr_auto] sm:items-center"
                    >
                      <span className="font-serif text-4xl leading-none text-foreground/15 transition-colors duration-300 group-hover:text-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-medium leading-tight text-foreground">{stage}</span>
                      <span className="hidden h-px w-16 bg-foreground/12 transition-all duration-300 group-hover:w-24 sm:block" />
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Matrix */}
      <section id="handoff" className="relative scroll-mt-28 py-14 lg:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
            <ScrollReveal>
              <div className="border-y border-border/20 py-8">
                <div className="mb-8 flex items-center justify-between gap-5">
                  <div>
                    <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                      {getText(language, "Handoff", "Handoff")}
                    </span>
                    <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                      {getText(language, "O que sai organizado", "What leaves organized")}
                    </h2>
                  </div>
                  <Briefcase className="h-7 w-7 text-foreground/25" />
                </div>

                <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
                  {blueprint.handoff.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-background/95 p-5"
                    >
                      <span className="mb-6 block font-serif text-3xl text-foreground/14">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-foreground/45" />
                        <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-7">
              <ScrollReveal>
                <div className="border-y border-border/20 py-8">
                  <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Critério", "Criteria")}
                  </span>
                  <div className="space-y-4">
                    {blueprint.qualities.map((quality, index) => (
                      <motion.div
                        key={quality}
                        initial={{ opacity: 0, x: 14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        className="flex items-center gap-4"
                      >
                        <span className="font-serif text-2xl leading-none text-foreground/16">{String(index + 1).padStart(2, "0")}</span>
                        <span className="h-px flex-1 bg-border/25" />
                        <span className="min-w-[42%] text-sm font-medium text-foreground">{quality}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border-y border-border/20 py-8">
                  <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                    {language === "pt" ? "Stack possível" : "Possible stack"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech: string, index: number) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.035 }}
                        className="rounded-full border border-border/25 bg-background/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/65"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex flex-col gap-4 border-y border-border/20 py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-foreground">
                      {serviceId === "bot-development"
                        ? getText(language, "A conversa começa pelo Diagnóstico Operacional.", "The conversation starts with an Operational Diagnosis.")
                        : getText(language, "A conversa começa por contexto.", "The conversation starts with context.")}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {serviceId === "bot-development"
                        ? getText(
                            language,
                            "Antes do desenvolvimento, eu mapeio estrutura, rotina, gargalos, segurança, experiência, dados e oportunidades de automação.",
                            "Before development, I map structure, routine, bottlenecks, security, experience, data and automation opportunities."
                          )
                        : getText(
                            language,
                            "Objetivo, risco, operação atual e critério de sucesso vêm antes de qualquer promessa.",
                            "Goal, risk, current operation and success criteria come before any promise."
                          )}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open("https://wa.me/5581993964261", "_blank", "noopener,noreferrer")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-foreground/10"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {language === "pt" ? "Solicitar diagnóstico" : "Request diagnosis"}
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="hidden" aria-hidden="true">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
              {/* Ideal For */}
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                    <Target className="w-5 h-5 text-foreground/70" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground">
                    {language === 'pt' ? 'Para quem é' : 'Who it\'s for'}
                  </h2>
                </div>
                <div className="space-y-3">
                  {service.idealFor.map((item: string, index: number) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>

              {/* Not Ideal For */}
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-foreground/70" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground">
                    {language === 'pt' ? 'Para quem não é' : 'Who it\'s not for'}
                  </h2>
                </div>
                <div className="space-y-3">
                  {service.notIdealFor.map((item: string, index: number) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <XCircle className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground/70 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="hidden" aria-hidden="true">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What's Included */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl text-foreground">
                      {language === 'pt' ? 'O que está incluso' : 'What\'s included'}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.included.map((item: string, index: number) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-5 h-5 rounded-full border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-foreground/30 transition-colors">
                          <CheckCircle className="w-3 h-3 text-foreground/50" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Expected Results */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl text-foreground">
                      {language === 'pt' ? 'Resultado esperado' : 'Expected results'}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {service.expectedResults.map((result: string, index: number) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 group"
                      >
                        <span className="w-8 h-8 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center text-xs text-foreground/50 font-medium group-hover:border-foreground/30 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Technologies */}
              <ScrollReveal>
                <GlassCard className="p-8" hover={false}>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-6">
                    {language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech: string, index: number) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -2 }}
                        className="text-xs px-4 py-2 rounded-xl border border-border/30 bg-background/50 text-muted-foreground hover:border-foreground/20 hover:text-foreground transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <ScrollReveal>
                <div className="lg:sticky lg:top-32">
                  <GlassCard className="p-6" hover={false} glow>
                    <h3 className="font-serif text-lg text-foreground mb-6">
                      {language === 'pt' ? 'Pronto para começar?' : 'Ready to start?'}
                    </h3>
                    
                    <p className="mb-6 border-b border-border/20 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {getText(
                        language,
                        'A conversa começa por contexto, objetivo, risco, operação atual e critério de sucesso.',
                        'The conversation starts with context, goal, risk, current operation and success criteria.'
                      )}
                    </p>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('https://wa.me/5581993964261', '_blank', 'noopener,noreferrer')}
                      className="w-full group inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-foreground rounded-xl py-3.5 transition-all duration-300 hover:opacity-90 mb-3"
                      style={{
                        boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                      }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      {language === 'pt' ? 'Solicitar diagnóstico' : 'Request diagnosis'}
                    </motion.button>

                    <Link 
                      to="/contato"
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground border border-border/30 rounded-xl py-3.5 hover:bg-card/50 hover:border-foreground/20 transition-all duration-300"
                    >
                      {language === 'pt' ? 'Analisar meu projeto' : 'Analyze my project'}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </GlassCard>

                  {/* Benefits */}
                  <GlassCard className="p-6 mt-6" hover={false}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                        <Star className="w-5 h-5 text-foreground/70" />
                      </div>
                      <h3 className="font-serif text-base text-foreground">
                        {language === 'pt' ? 'Por que escolher?' : 'Why choose?'}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="conversa" className="relative scroll-mt-28 overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div 
                className="relative p-10 lg:p-12 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm text-center"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {getText(language, 'Tem alguma dúvida?', 'Have any questions?')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Solicite uma leitura técnica do seu cenário e descubra o melhor caminho para o projeto.',
                    'Request a technical reading of your scenario and discover the best path for the project.'
                  )}
                </p>
                
                <a 
                  href="https://wa.me/5581993964261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300 hover:opacity-90"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Conversar sobre viabilidade', 'Discuss feasibility')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
