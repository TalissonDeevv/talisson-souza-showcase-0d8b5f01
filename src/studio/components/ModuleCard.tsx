import type { StudioModuleDefinition } from "../types/core";

interface ModuleCardProps {
  moduleDefinition: StudioModuleDefinition;
}

export function ModuleCard({ moduleDefinition }: ModuleCardProps) {
  return (
    <article className="rounded-lg border border-border/40 bg-card/40 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">{moduleDefinition.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{moduleDefinition.summary}</p>
        </div>
        <span className="rounded-full border border-border/40 px-2 py-1 text-xs text-muted-foreground">
          {moduleDefinition.status}
        </span>
      </div>
    </article>
  );
}
