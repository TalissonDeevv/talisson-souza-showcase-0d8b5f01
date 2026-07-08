import { ModuleCard } from "../components/ModuleCard";
import { StudioShell } from "../layouts/StudioShell";
import { useStudioModules } from "../hooks/useStudioModules";

export function StudioDashboardPage() {
  const { modules } = useStudioModules();

  return (
    <StudioShell>
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Foundation</p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground">TS Studio Architecture</h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Administrative foundation for content, community, SEO, security, monitoring and integrations.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((moduleDefinition) => (
          <ModuleCard key={moduleDefinition.key} moduleDefinition={moduleDefinition} />
        ))}
      </div>
    </StudioShell>
  );
}
