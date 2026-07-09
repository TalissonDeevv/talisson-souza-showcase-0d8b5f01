import { useMemo, useState, type PropsWithChildren } from "react";
import { StudioMockContext, type StudioMockSession, type StudioMockStore } from "./store-context";

export function StudioMockProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<StudioMockSession>({
    userName: "Talisson Souza",
    role: "Owner",
    authenticated: true,
  });
  const [search, setSearch] = useState("");

  const value = useMemo<StudioMockStore>(() => ({
    session,
    search,
    setSearch,
    signIn: () => setSession({ userName: "Talisson Souza", role: "Owner", authenticated: true }),
    signOut: () => setSession((current) => ({ ...current, authenticated: false })),
  }), [session, search]);

  return <StudioMockContext.Provider value={value}>{children}</StudioMockContext.Provider>;
}
