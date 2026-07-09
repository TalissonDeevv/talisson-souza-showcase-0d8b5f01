import type { CSSProperties, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "../utils/classnames";
import { studioHover, studioPress, studioStaggerContainer, studioStaggerItem } from "../motion";

type StudioTone = "neutral" | "success" | "warning" | "danger" | "info";

const toneClass: Record<StudioTone, string> = {
  neutral: "border-border/60 bg-foreground/[0.035] text-foreground/80",
  success: "border-emerald-300/15 bg-emerald-300/[0.07] text-emerald-100",
  warning: "border-amber-300/15 bg-amber-300/[0.07] text-amber-100",
  danger: "border-red-300/15 bg-red-300/[0.07] text-red-100",
  info: "border-sky-300/15 bg-sky-300/[0.07] text-sky-100",
};

export function StudioPageFrame({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      variants={studioStaggerContainer}
      initial="initial"
      animate="animate"
      className={cn("space-y-6", className)}
    >
      {children}
    </motion.div>
  );
}

export function StudioPanel({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.section
      variants={studioStaggerItem}
      whileHover={studioHover}
      className={cn(
        "rounded-lg border border-border/55 bg-card/72 p-4 shadow-[0_20px_60px_hsl(0_0%_0%/0.16)] backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(180deg,hsl(var(--foreground)/0.045),transparent_42%)]",
        "relative overflow-hidden",
        className,
      )}
    >
      <div className="relative">{children}</div>
    </motion.section>
  );
}

export function StudioCard({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-lg border border-border/50 bg-foreground/[0.035] p-4", className)}>
      {children}
    </div>
  );
}

export function StudioSectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <motion.header variants={studioStaggerItem} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-6 tracking-normal text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
    </motion.header>
  );
}

type StudioButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  icon?: ReactNode;
};

export function StudioButton({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: StudioButtonProps) {
  const variants = {
    primary: "border-foreground/18 bg-foreground text-background hover:bg-foreground/90",
    secondary: "border-border/65 bg-foreground/[0.055] text-foreground hover:bg-foreground/[0.09]",
    ghost: "border-transparent bg-transparent text-muted-foreground hover:bg-foreground/[0.055] hover:text-foreground",
    danger: "border-red-300/20 bg-red-400/10 text-red-100 hover:bg-red-400/15",
  };

  return (
    <motion.button
      whileHover={studioHover}
      whileTap={studioPress}
      className={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium tracking-normal transition-colors disabled:pointer-events-none disabled:opacity-45",
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}

type StudioIconButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  label: string;
};

export function StudioIconButton({
  children,
  className,
  label,
  ...props
}: StudioIconButtonProps) {
  return (
    <motion.button
      aria-label={label}
      title={label}
      whileHover={studioHover}
      whileTap={studioPress}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/55 bg-foreground/[0.035] text-muted-foreground transition-colors hover:bg-foreground/[0.075] hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function StudioInput({
  className,
  leftIcon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { leftIcon?: ReactNode }) {
  return (
    <label className="relative block">
      {leftIcon ? <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leftIcon}</span> : null}
      <input
        className={cn(
          "h-10 w-full rounded-md border border-border/55 bg-background/48 px-3 text-sm tracking-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground/72 focus:border-foreground/24 focus:bg-background/72",
          leftIcon ? "pl-9" : "",
          className,
        )}
        {...props}
      />
    </label>
  );
}

export function StudioTextarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-none rounded-md border border-border/55 bg-background/48 px-3 py-3 text-sm leading-6 tracking-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground/72 focus:border-foreground/24 focus:bg-background/72",
        className,
      )}
      {...props}
    />
  );
}

export function StudioBadge({
  children,
  tone = "neutral",
  className,
}: HTMLAttributes<HTMLSpanElement> & { tone?: StudioTone }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border px-2 text-[11px] font-medium tracking-normal",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StudioAvatar({ name, src, className }: { name: string; src?: string; className?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-border/55 bg-foreground/[0.05] text-xs font-semibold", className)}>
      {src ? <img src={src} alt={name} className="h-full w-full object-cover" /> : initials}
    </div>
  );
}

export function StudioMetric({
  label,
  value,
  delta,
  tone = "neutral",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: StudioTone;
}) {
  return (
    <StudioPanel className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-normal text-muted-foreground">{label}</p>
          <p className="mt-2 font-serif text-3xl font-semibold tracking-normal text-foreground">{value}</p>
        </div>
        {delta ? <StudioBadge tone={tone}>{delta}</StudioBadge> : null}
      </div>
    </StudioPanel>
  );
}

export function StudioDataTable<TItem>({
  columns,
  data,
  getKey,
  className,
}: {
  columns: readonly {
    key: string;
    header: string;
    render: (item: TItem) => ReactNode;
    className?: string;
  }[];
  data: readonly TItem[];
  getKey: (item: TItem) => string;
  className?: string;
}) {
  const gridStyle = {
    "--studio-table-columns": `repeat(${columns.length}, minmax(0, 1fr))`,
  } as CSSProperties;

  return (
    <div className={cn("overflow-hidden rounded-lg border border-border/50", className)}>
      <div className="hidden border-b border-border/50 bg-foreground/[0.035] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground md:grid md:[grid-template-columns:var(--studio-table-columns)]" style={gridStyle}>
        {columns.map((column) => (
          <div key={column.key} className={column.className}>{column.header}</div>
        ))}
      </div>
      <div className="divide-y divide-border/45">
        {data.map((item) => (
          <motion.div
            key={getKey(item)}
            variants={studioStaggerItem}
            className="grid gap-3 px-4 py-4 text-sm tracking-normal text-foreground md:items-center md:[grid-template-columns:var(--studio-table-columns)]"
            style={gridStyle}
          >
            {columns.map((column) => (
              <div key={column.key} className={cn("min-w-0", column.className)}>
                {column.render(item)}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function StudioSearchBar({
  value,
  onChange,
  placeholder = "Buscar no Studio",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <StudioInput
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        leftIcon={<Search className="h-4 w-4" />}
      />
      <StudioButton variant="secondary" icon={<SlidersHorizontal className="h-4 w-4" />}>
        Filtros
      </StudioButton>
    </div>
  );
}

export function StudioFilterPill({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <button className={cn(
      "h-8 rounded-md border px-3 text-xs font-medium tracking-normal transition-colors",
      active
        ? "border-foreground/20 bg-foreground/10 text-foreground"
        : "border-border/55 bg-foreground/[0.035] text-muted-foreground hover:text-foreground",
    )}>
      {children}
    </button>
  );
}

export function StudioTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly string[];
  active: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-lg border border-border/55 bg-foreground/[0.035] p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "relative h-8 whitespace-nowrap rounded-md px-3 text-xs font-medium tracking-normal text-muted-foreground transition-colors",
            active === tab && "text-foreground",
          )}
        >
          {active === tab ? (
            <motion.span
              layoutId="studio-tab-active"
              className="absolute inset-0 rounded-md bg-foreground/[0.085]"
              transition={{ duration: 0.16 }}
            />
          ) : null}
          <span className="relative">{tab}</span>
        </button>
      ))}
    </div>
  );
}

export function StudioPagination({ page, totalPages }: { page: number; totalPages: number }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
      <span>
        Página {page} de {totalPages}
      </span>
      <div className="flex items-center gap-2">
        <StudioIconButton label="Página anterior">
          <ChevronLeft className="h-4 w-4" />
        </StudioIconButton>
        <StudioIconButton label="Próxima página">
          <ChevronRight className="h-4 w-4" />
        </StudioIconButton>
      </div>
    </div>
  );
}

export function StudioLoading({ label = "Carregando" }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm tracking-normal text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>{label}</span>
    </div>
  );
}

export function StudioSkeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-foreground/[0.075]", className)} />;
}

export function StudioState({
  kind,
  title,
  description,
}: {
  kind: "loading" | "empty" | "error" | "success";
  title: string;
  description: string;
}) {
  const icon = {
    loading: <Loader2 className="h-4 w-4 animate-spin" />,
    empty: <Search className="h-4 w-4" />,
    error: <AlertCircle className="h-4 w-4" />,
    success: <Check className="h-4 w-4" />,
  }[kind];

  return (
    <StudioPanel className="p-6 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md border border-border/55 bg-foreground/[0.04] text-muted-foreground">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-medium tracking-normal text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 tracking-normal text-muted-foreground">{description}</p>
    </StudioPanel>
  );
}

export function StudioProgress({ value }: { value: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-foreground/[0.07]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="h-full rounded-full bg-foreground/70"
      />
    </div>
  );
}

export function StudioMiniChart({ values }: { values: readonly number[] }) {
  const maxValue = Math.max(...values, 1);

  return (
    <div className="flex h-28 items-end gap-2">
      {values.map((value, index) => (
        <motion.div
          key={`${value}-${index}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: `${Math.max(8, (value / maxValue) * 100)}%`, opacity: 1 }}
          transition={{ duration: 0.24, delay: index * 0.02 }}
          className="w-full rounded-t-md border border-foreground/10 bg-foreground/[0.18]"
        />
      ))}
    </div>
  );
}

export function StudioDialogMock({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 12, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 8, scale: 0.98 }}
        className="w-full max-w-md rounded-lg border border-border/60 bg-card p-5 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-normal">{title}</h3>
            <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">{description}</p>
          </div>
          <StudioIconButton label="Fechar" onClick={onClose}>
            <X className="h-4 w-4" />
          </StudioIconButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function StudioSheetMock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-lg border border-border/55 bg-card/72 p-4 shadow-xl backdrop-blur-xl">
      <h3 className="text-sm font-semibold tracking-normal text-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </aside>
  );
}

export function StudioTooltip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border/55 bg-popover px-2 py-1 text-[11px] tracking-normal text-popover-foreground shadow-xl group-hover:block">
        {label}
      </span>
    </span>
  );
}

export function StudioToastPreview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border/55 bg-card/86 p-3 shadow-xl backdrop-blur-xl">
      <p className="text-sm font-medium tracking-normal text-foreground">{title}</p>
      <p className="mt-1 text-xs leading-5 tracking-normal text-muted-foreground">{description}</p>
    </div>
  );
}

export function StudioSelectMock({ label, options }: { label: string; options: readonly string[] }) {
  return (
    <button className="flex h-10 w-full items-center justify-between rounded-md border border-border/55 bg-background/48 px-3 text-left text-sm tracking-normal text-foreground">
      <span>{label}</span>
      <span className="flex items-center gap-2 text-muted-foreground">
        {options[0]}
        <ChevronDown className="h-4 w-4" />
      </span>
    </button>
  );
}

export const StudioDropdownMock = StudioSelectMock;
export const StudioDataGrid = StudioDataTable;
