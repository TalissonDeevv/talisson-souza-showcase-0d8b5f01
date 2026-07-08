import type { StudioApiEndpoint } from "../types/core";

export const STUDIO_API_BASE_PATH = "/api/studio";

export const STUDIO_API_ENDPOINTS = [
  {
    key: "dashboard.summary",
    method: "GET",
    path: "/api/studio/dashboard/summary",
    moduleKey: "dashboard",
    requiredPermission: "dashboard.read",
    description: "Returns aggregate CMS, community and infrastructure health summaries.",
  },
  {
    key: "content.list",
    method: "GET",
    path: "/api/studio/content",
    moduleKey: "content",
    requiredPermission: "content.read",
    description: "Lists content items with filtering by module, locale, status and author.",
  },
  {
    key: "content.write",
    method: "POST",
    path: "/api/studio/content",
    moduleKey: "content",
    requiredPermission: "content.write",
    description: "Creates a draft content item and records an audit event.",
    auditAction: "content.create",
  },
  {
    key: "content.publish",
    method: "POST",
    path: "/api/studio/content/:id/publish",
    moduleKey: "content",
    requiredPermission: "content.publish",
    description: "Publishes an approved content item.",
    auditAction: "content.publish",
  },
  {
    key: "media.write",
    method: "POST",
    path: "/api/studio/media",
    moduleKey: "media",
    requiredPermission: "media.write",
    description: "Registers a media asset after Storage upload validation.",
    auditAction: "media.register",
  },
  {
    key: "discord.moderate",
    method: "POST",
    path: "/api/studio/discord/comments/:id/moderate",
    moduleKey: "discord",
    requiredPermission: "discord.moderate",
    description: "Applies a moderation action to a comment or reaction.",
    auditAction: "discord.comment.moderate",
  },
  {
    key: "security.audit",
    method: "GET",
    path: "/api/studio/security/audit-events",
    moduleKey: "security",
    requiredPermission: "security.read",
    description: "Reads filtered administrative audit events.",
  },
] as const satisfies readonly StudioApiEndpoint[];

export interface StudioApiRequest<TBody = Record<string, unknown>> {
  endpointKey: string;
  actorId: string;
  requestId: string;
  body?: TBody;
}

export interface StudioApiResponse<TData = unknown> {
  ok: boolean;
  data?: TData;
  error?: {
    code: string;
    message: string;
  };
}

export function getStudioApiEndpoint(endpointKey: string): StudioApiEndpoint | null {
  return STUDIO_API_ENDPOINTS.find((endpoint) => endpoint.key === endpointKey) ?? null;
}
