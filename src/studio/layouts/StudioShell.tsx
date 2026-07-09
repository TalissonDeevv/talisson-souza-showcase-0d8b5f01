import { useMemo, useState, type PropsWithChildren } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Command,
  Menu,
  PanelLeftClose,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "../utils/classnames";
import { StudioAvatar, StudioBadge, StudioIconButton, StudioInput } from "../design-system";
import { studioNavItems, studioNotifications } from "../mock/data";
import { useStudioMockStore } from "../mock/store-context";
import { studioEase, studioPageTransition, studioPageVariants } from "../motion";

const groupedNav = studioNavItems.reduce<Record<string, typeof studioNavItems>>((groups, item) => {
  return {
    ...groups,
    [item.group]: [...(groups[item.group] ?? []), item],
  };
}, {});

function StudioSidebar({
  collapsed,
  onClose,
}: {
  collapsed: boolean;
  onClose?: () => void;
}) {
  return (
    <aside className={cn(
      "flex h-full flex-col border-r border-border/45 bg-background/86 backdrop-blur-xl",
      collapsed ? "w-[76px]" : "w-[276px]",
    )}>
      <div className="flex h-16 items-center gap-3 border-b border-border/45 px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-foreground/15 bg-foreground text-background">
          <Sparkles className="h-4 w-4" />
        </div>
        {!collapsed ? (
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-normal text-foreground">TS Studio</p>
            <p className="text-xs tracking-normal text-muted-foreground">Painel Talisson Souza</p>
          </div>
        ) : null}
        {onClose ? (
          <StudioIconButton label="Fechar menu" onClick={onClose} className="ml-auto md:hidden">
            <X className="h-4 w-4" />
          </StudioIconButton>
        ) : null}
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
        {Object.entries(groupedNav).map(([group, items]) => (
          <div key={group}>
            {!collapsed ? (
              <p className="mb-2 px-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/80">
                {group}
              </p>
            ) : null}
            <div className="space-y-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/studio"}
                    className={({ isActive }) => cn(
                      "group relative flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium tracking-normal text-muted-foreground transition-colors",
                      "hover:bg-foreground/[0.055] hover:text-foreground",
                      isActive && "bg-foreground/[0.085] text-foreground",
                      collapsed && "justify-center px-0",
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <motion.span
                            layoutId="studio-sidebar-active"
                            className="absolute inset-0 rounded-md bg-foreground/[0.075]"
                            transition={studioEase}
                          />
                        ) : null}
                        <Icon className="relative h-4 w-4 shrink-0" />
                        {!collapsed ? <span className="relative truncate">{item.label}</span> : null}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border/45 p-3">
        <div className={cn(
          "rounded-lg border border-border/50 bg-foreground/[0.035] p-3",
          collapsed && "flex justify-center p-2",
        )}>
          {collapsed ? (
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-100" />
                <span className="text-xs font-medium tracking-normal text-foreground">Ambiente de prévia</span>
              </div>
              <p className="text-xs leading-5 tracking-normal text-muted-foreground">
                Interface navegável pronta para conexão controlada.
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

function StudioTopbar({
  collapsed,
  onToggleSidebar,
  onOpenMobileMenu,
}: {
  collapsed: boolean;
  onToggleSidebar: () => void;
  onOpenMobileMenu: () => void;
}) {
  const { search, setSearch, session } = useStudioMockStore();
  const location = useLocation();
  const current = useMemo(() => {
    return studioNavItems.find((item) => item.path === location.pathname) ?? studioNavItems[0];
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-border/45 bg-background/82 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 md:px-6">
        <StudioIconButton label="Abrir menu" onClick={onOpenMobileMenu} className="md:hidden">
          <Menu className="h-4 w-4" />
        </StudioIconButton>
        <StudioIconButton label={collapsed ? "Expandir sidebar" : "Recolher sidebar"} onClick={onToggleSidebar} className="hidden md:inline-flex">
          <PanelLeftClose className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </StudioIconButton>

        <div className="hidden min-w-0 md:block">
          <div className="flex items-center gap-2 text-xs tracking-normal text-muted-foreground">
            <span>Studio</span>
            <span>/</span>
            <span className="text-foreground">{current.label}</span>
          </div>
          <p className="mt-0.5 text-[11px] tracking-normal text-muted-foreground/80">Ambiente administrativo em prévia</p>
        </div>

        <div className="ml-auto hidden w-full max-w-md lg:block">
          <StudioInput
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Busca rápida por artigo, mídia ou comentário"
            leftIcon={<Search className="h-4 w-4" />}
            className="h-9"
          />
        </div>

        <StudioIconButton label="Atalhos do Studio">
          <Command className="h-4 w-4" />
        </StudioIconButton>
        <div className="relative">
          <StudioIconButton label="Notificações">
            <Bell className="h-4 w-4" />
          </StudioIconButton>
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-foreground" />
        </div>
        <div className="hidden items-center gap-3 rounded-md border border-border/45 bg-foreground/[0.035] px-2 py-1.5 sm:flex">
          <StudioAvatar name={session.userName} className="h-7 w-7" />
          <div className="hidden lg:block">
            <p className="text-xs font-medium tracking-normal text-foreground">{session.userName}</p>
            <p className="text-[11px] tracking-normal text-muted-foreground">{session.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function StudioNotificationsRail() {
  return (
    <aside className="hidden w-[300px] shrink-0 border-l border-border/45 bg-background/42 px-4 py-5 xl:block">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-normal text-foreground">Sinais recentes</h2>
        <StudioBadge>prévia</StudioBadge>
      </div>
      <div className="space-y-3">
        {studioNotifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <motion.article
              key={notification.id}
              whileHover={{ x: 2 }}
              className="rounded-lg border border-border/45 bg-foreground/[0.032] p-3"
            >
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-background/58 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-normal text-foreground">{notification.title}</p>
                  <p className="mt-1 text-xs leading-5 tracking-normal text-muted-foreground">{notification.description}</p>
                  <p className="mt-2 text-[11px] tracking-normal text-muted-foreground/75">{notification.time}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </aside>
  );
}

export function StudioShell({ children }: PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <section className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute left-1/2 top-0 h-px w-[70vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/18 to-transparent" />
      </div>

      <div className="relative flex min-h-screen">
        <div className="hidden md:block">
          <StudioSidebar collapsed={collapsed} />
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm md:hidden"
            >
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={studioEase}
                className="h-full w-[280px]"
              >
                <StudioSidebar collapsed={false} onClose={() => setMobileOpen(false)} />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex min-w-0 flex-1 flex-col">
          <StudioTopbar
            collapsed={collapsed}
            onToggleSidebar={() => setCollapsed((current) => !current)}
            onOpenMobileMenu={() => setMobileOpen(true)}
          />
          <div className="flex min-h-0 flex-1">
            <main className="min-w-0 flex-1 overflow-y-auto px-4 py-6 md:px-6 lg:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  variants={studioPageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={studioPageTransition}
                  className="mx-auto max-w-[1380px]"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>
            <StudioNotificationsRail />
          </div>
        </div>
      </div>
    </section>
  );
}
