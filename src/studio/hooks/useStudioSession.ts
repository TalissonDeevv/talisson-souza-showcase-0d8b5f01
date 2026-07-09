import { useContext } from "react";
import { StudioSessionContext } from "../contexts/StudioSessionContext";

export function useStudioSession() {
  const context = useContext(StudioSessionContext);

  if (!context) {
    throw new Error("useStudioSession must be used inside StudioSessionProvider.");
  }

  return context;
}
