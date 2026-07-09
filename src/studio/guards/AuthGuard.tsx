import type { ReactNode } from "react";
import { useStudioSession } from "../hooks/useStudioSession";

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function AuthGuard({ children, fallback = null }: AuthGuardProps) {
  const { session, isExpired, status } = useStudioSession();

  if (status === "loading") return fallback;
  if (!session || isExpired) return fallback;

  return <>{children}</>;
}
