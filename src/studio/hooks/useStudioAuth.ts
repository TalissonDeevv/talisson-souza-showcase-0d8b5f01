import { useContext } from "react";
import { StudioAuthContext } from "../contexts/StudioAuthContext";

export function useStudioAuth() {
  const context = useContext(StudioAuthContext);

  if (!context) {
    throw new Error("useStudioAuth must be used inside StudioAuthProvider.");
  }

  return context;
}
