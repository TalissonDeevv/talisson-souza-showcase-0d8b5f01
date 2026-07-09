import { useStudioSession } from "./useStudioSession";

export function useStudioUser() {
  const { session } = useStudioSession();

  return session
    ? {
      id: session.userId,
      email: session.email,
      displayName: session.displayName,
      roles: session.roles,
      permissions: session.permissions ?? [],
    }
    : null;
}
