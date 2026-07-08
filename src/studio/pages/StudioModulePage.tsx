import { getStudioModule } from "../modules/registry";
import { StudioShell } from "../layouts/StudioShell";

interface StudioModulePageProps {
  moduleKey: string;
}

export function StudioModulePage({ moduleKey }: StudioModulePageProps) {
  const moduleDefinition = getStudioModule(moduleKey);

  return (
    <StudioShell>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {moduleDefinition?.area ?? "module"}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground">
          {moduleDefinition?.name ?? "Unknown module"}
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          {moduleDefinition?.summary ?? "This TS Studio module is not registered."}
        </p>
      </header>
    </StudioShell>
  );
}
