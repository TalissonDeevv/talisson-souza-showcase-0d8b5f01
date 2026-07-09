import { createContext } from "react";
import type { StudioUserSession } from "../types/core";
import type { StudioAuthStatus } from "../types/auth";

export interface StudioSessionContextValue {
  status: StudioAuthStatus;
  session: StudioUserSession | null;
  isExpired: boolean;
  markSeen(): void;
  expire(reason?: "expired" | "invalidated"): Promise<void>;
}

export const StudioSessionContext = createContext<StudioSessionContextValue | null>(null);
