import type { StudioApiOperation } from "../types/auth";

export const STUDIO_API_QUERIES = [
  {
    key: "auth.session.current",
    kind: "query",
    moduleKey: "security",
    requiredPermission: "security.read",
  },
  {
    key: "auth.permissions.current",
    kind: "query",
    moduleKey: "security",
    requiredPermission: "security.read",
  },
  {
    key: "auth.audit.events",
    kind: "query",
    moduleKey: "security",
    requiredPermission: "security.read",
  },
] as const satisfies readonly StudioApiOperation[];
