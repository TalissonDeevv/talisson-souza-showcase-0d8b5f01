import type { StudioPermission, StudioRoleKey, StudioUserSession } from "../../types/core";
import type { StudioCoreApiResponse } from "../contracts/response";

export type StudioHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";

export type StudioCoreRouteStatus = "planned" | "active" | "disabled";

export interface StudioActor {
  id: string;
  email?: string;
  roles: readonly StudioRoleKey[];
  permissions: readonly string[];
}

export interface StudioCoreRequest<TBody = unknown> {
  method: StudioHttpMethod;
  path: string;
  headers: Record<string, string | undefined>;
  body?: TBody;
  query?: Record<string, string | readonly string[] | undefined>;
  params?: Record<string, string>;
  origin?: string;
  ipAddress?: string;
}

export interface StudioCoreResponse<TData = unknown> extends StudioCoreApiResponse<TData> {
  status: number;
  headers: Record<string, string>;
}

export interface StudioCoreEndpointDefinition {
  key: string;
  method: StudioHttpMethod;
  path: string;
  moduleKey: string;
  requiredPermission?: string;
  auditAction?: string;
  authRequired: boolean;
  csrfRequired: boolean;
  idempotencyRequired: boolean;
  featureFlag?: string;
  description: string;
  status: StudioCoreRouteStatus;
}

export interface StudioCoreContext {
  requestId: string;
  startedAt: number;
  route?: StudioCoreEndpointDefinition;
  actor?: StudioActor;
  session?: StudioUserSession;
  responseHeaders: Record<string, string>;
  permissions?: readonly StudioPermission[];
  state: Record<string, unknown>;
}

export type StudioCoreHandler<TBody = unknown, TData = unknown> = (
  request: StudioCoreRequest<TBody>,
  context: StudioCoreContext,
) => Promise<StudioCoreResponse<TData>>;

export type StudioCoreNext = () => Promise<StudioCoreResponse>;

export type StudioCoreMiddleware = (
  request: StudioCoreRequest,
  context: StudioCoreContext,
  next: StudioCoreNext,
) => Promise<StudioCoreResponse>;

export interface StudioCoreRequestValidationResult {
  valid: boolean;
  errors: readonly {
    field: string;
    message: string;
    code: string;
  }[];
}
