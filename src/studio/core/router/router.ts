import { createStudioApiErrorResponse, createStudioApiResponse } from "../contracts/response";
import { createNotImplementedError, normalizeStudioApiError, StudioApiError } from "../errors/api-error";
import { findStudioCoreApiRoute } from "./routes";
import type {
  StudioCoreContext,
  StudioCoreHandler,
  StudioCoreMiddleware,
  StudioCoreRequest,
  StudioCoreResponse,
} from "../types/http";

export interface StudioCoreRouter {
  readonly middlewares: readonly StudioCoreMiddleware[];
  handle<TData = unknown>(request: StudioCoreRequest): Promise<StudioCoreResponse<TData>>;
}

export interface StudioCoreRouterOptions {
  middlewares?: readonly StudioCoreMiddleware[];
  handlers?: Record<string, StudioCoreHandler>;
  createRequestId?: () => string;
}

function defaultRequestId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `studio-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function withContextHeaders<TData>(
  response: StudioCoreResponse<TData>,
  context: StudioCoreContext,
): StudioCoreResponse<TData> {
  return {
    ...response,
    headers: {
      ...context.responseHeaders,
      ...response.headers,
    },
  };
}

function compose(
  middlewares: readonly StudioCoreMiddleware[],
  handler: StudioCoreHandler,
  request: StudioCoreRequest,
  context: StudioCoreContext,
): Promise<StudioCoreResponse> {
  let index = -1;

  const dispatch = async (position: number): Promise<StudioCoreResponse> => {
    if (position <= index) {
      throw new StudioApiError("STUDIO_MIDDLEWARE_REENTRY", "Middleware next() called more than once.", 500);
    }

    index = position;
    const middleware = middlewares[position];

    if (!middleware) return handler(request, context);

    return middleware(request, context, () => dispatch(position + 1));
  };

  return dispatch(0);
}

export function createStudioCoreRouter(options: StudioCoreRouterOptions = {}): StudioCoreRouter {
  const middlewares = options.middlewares ?? [];
  const handlers = options.handlers ?? {};
  const createRequestId = options.createRequestId ?? defaultRequestId;

  return {
    middlewares,
    async handle<TData = unknown>(request: StudioCoreRequest): Promise<StudioCoreResponse<TData>> {
      const requestId = request.headers["x-request-id"] ?? createRequestId();
      const route = findStudioCoreApiRoute(request.method, request.path);
      const context: StudioCoreContext = {
        requestId,
        route: route ?? undefined,
        startedAt: Date.now(),
        responseHeaders: {},
        state: {},
      };

      const handler: StudioCoreHandler = async () => {
        if (!route) {
          return {
            ...createStudioApiErrorResponse(requestId, {
              code: "STUDIO_ROUTE_NOT_FOUND",
              message: "Studio API route not found.",
              status: 404,
            }),
            status: 404,
            headers: {},
          };
        }

        const routeHandler = handlers[route.key];
        if (routeHandler) return routeHandler(request, context);

        throw createNotImplementedError(route.key);
      };

      try {
        const response = await compose(middlewares, handler, request, context);
        return withContextHeaders(response, context) as StudioCoreResponse<TData>;
      } catch (error) {
        const apiError = normalizeStudioApiError(error);
        return withContextHeaders({
          ...createStudioApiErrorResponse(requestId, apiError.toPayload()),
          status: apiError.status,
          headers: {},
        }, context) as StudioCoreResponse<TData>;
      }
    },
  };
}

export function createStudioNotImplementedResponse(requestId: string, endpointKey: string) {
  const error = createNotImplementedError(endpointKey);
  return {
    ...createStudioApiErrorResponse(requestId, error.toPayload()),
    status: error.status,
    headers: {},
  };
}

export function createStudioHealthResponse(requestId: string) {
  return {
    ...createStudioApiResponse(requestId, { status: "ok" }),
    status: 200,
    headers: {},
  };
}
