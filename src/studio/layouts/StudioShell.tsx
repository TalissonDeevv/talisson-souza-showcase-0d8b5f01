import type { PropsWithChildren } from "react";
import { STUDIO_ROUTES } from "../routes/registry";

export function StudioShell({ children }: PropsWithChildren) {
  return (
    <section className="min-h-screen bg-background text-foreground">
      <aside className="border-b border-border/40 px-6 py-4">
        <div className="flex flex-wrap items-center gap-3">
          <strong className="text-sm">TS Studio</strong>
          {STUDIO_ROUTES.slice(0, 8).map((route) => (
            <span key={route.path} className="text-xs text-muted-foreground">
              {route.label}
            </span>
          ))}
        </div>
      </aside>
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </section>
  );
}
