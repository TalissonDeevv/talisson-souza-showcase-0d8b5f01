import { createContext, useContext } from "react";

export interface StudioMockSession {
  userName: string;
  role: string;
  authenticated: boolean;
}

export interface StudioMockStore {
  session: StudioMockSession;
  search: string;
  setSearch: (value: string) => void;
  signIn: () => void;
  signOut: () => void;
}

export const StudioMockContext = createContext<StudioMockStore | null>(null);

export function useStudioMockStore() {
  const context = useContext(StudioMockContext);
  if (!context) throw new Error("useStudioMockStore must be used inside StudioMockProvider.");
  return context;
}
