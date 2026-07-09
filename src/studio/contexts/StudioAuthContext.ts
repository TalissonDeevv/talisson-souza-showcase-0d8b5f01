import { createContext } from "react";
import type { Session } from "@supabase/supabase-js";
import type { StudioAuthResult, StudioAuthStatus, StudioLoginCredentials } from "../types/auth";

export interface StudioAuthContextValue {
  status: StudioAuthStatus;
  supabaseSession: Session | null;
  csrfToken: string;
  error: string | null;
  login(credentials: Omit<StudioLoginCredentials, "requestId" | "origin" | "csrfToken"> & Partial<StudioLoginCredentials>): Promise<StudioAuthResult>;
  logout(reason?: "user" | "expired" | "invalidated"): Promise<void>;
  refresh(): Promise<Session | null>;
  recover(): Promise<Session | null>;
}

export const StudioAuthContext = createContext<StudioAuthContextValue | null>(null);
