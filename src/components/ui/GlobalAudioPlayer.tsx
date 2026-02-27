import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { Play, Pause, X } from "lucide-react";

const GlobalAudioPlayer = () => {
  const { isVisible, isPlaying, isLoading, currentTitle, togglePlay, close } = useAudioPlayer();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/50 bg-card/95 backdrop-blur-md shadow-lg max-w-[280px]">
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
      </button>

      <span className="text-xs font-medium text-foreground truncate min-w-0">
        {currentTitle}
      </span>

      <button
        onClick={close}
        className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default GlobalAudioPlayer;
