import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { Play, Pause, X, Headphones } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { useCallback } from "react";

const RATES = [1, 1.25, 1.5, 1.75, 2];

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const GlobalAudioPlayer = () => {
  const {
    isVisible, isPlaying, isLoading, currentTitle,
    currentTime, duration, playbackRate,
    togglePlay, seek, setRate, close,
  } = useAudioPlayer();
  const { language } = useTheme();

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  }, [seek]);

  const cycleRate = useCallback(() => {
    const idx = RATES.indexOf(playbackRate);
    setRate(RATES[(idx + 1) % RATES.length]);
  }, [playbackRate, setRate]);

  if (!isVisible) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-card/95 backdrop-blur-md shadow-lg">
      {/* Progress bar (thin line at top) */}
      <div className="h-0.5 w-full bg-muted">
        <div
          className="h-full bg-primary transition-[width] duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-2.5 flex items-center gap-3 md:gap-4">
        {/* Icon */}
        <Headphones className="w-4 h-4 text-primary shrink-0 hidden sm:block" />

        {/* Title */}
        <span className="text-xs font-medium text-foreground truncate min-w-0 max-w-[120px] sm:max-w-[200px] md:max-w-[300px]">
          {currentTitle}
        </span>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>

        {/* Time */}
        <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap hidden sm:block">
          {formatTime(currentTime)}
        </span>

        {/* Seek bar */}
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1 h-1 accent-primary cursor-pointer min-w-[60px]"
          aria-label={getText(language, "Progresso do áudio", "Audio progress")}
        />

        <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap hidden sm:block">
          {formatTime(duration)}
        </span>

        {/* Speed */}
        <button
          onClick={cycleRate}
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors tabular-nums px-1.5 py-0.5 rounded bg-muted/50 hover:bg-muted shrink-0"
          aria-label={getText(language, "Velocidade de reprodução", "Playback speed")}
        >
          {playbackRate}x
        </button>

        {/* Close */}
        <button
          onClick={close}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={getText(language, "Fechar player", "Close player")}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GlobalAudioPlayer;
