import { createContext, useContext, useState, useRef, useCallback, useEffect, ReactNode } from "react";

interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
  isVisible: boolean;
  currentSlug: string | null;
  currentTitle: string | null;
  currentTime: number;
  duration: number;
  playbackRate: number;
}

interface AudioPlayerContextType extends AudioState {
  play: (slug: string, title: string) => void;
  togglePlay: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setRate: (rate: number) => void;
  close: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

const STORAGE_PREFIX = "article-audio-";

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    isLoading: false,
    isVisible: false,
    currentSlug: null,
    currentTitle: null,
    currentTime: 0,
    duration: 0,
    playbackRate: 1,
  });

  // Persist progress to localStorage
  const saveProgress = useCallback(() => {
    if (state.currentSlug && audioRef.current) {
      localStorage.setItem(
        `${STORAGE_PREFIX}${state.currentSlug}`,
        JSON.stringify({ time: audioRef.current.currentTime, rate: state.playbackRate })
      );
    }
  }, [state.currentSlug, state.playbackRate]);

  // Restore saved progress
  const restoreProgress = useCallback((slug: string): { time: number; rate: number } | null => {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}${slug}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  }, []);

  // Sync currentTime periodically
  useEffect(() => {
    if (state.isPlaying) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setState(s => ({ ...s, currentTime: audioRef.current!.currentTime }));
          saveProgress();
        }
      }, 500);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [state.isPlaying, saveProgress]);

  const play = useCallback((slug: string, title: string) => {
    // If same slug, just resume
    if (state.currentSlug === slug && audioRef.current) {
      audioRef.current.play();
      setState(s => ({ ...s, isPlaying: true, isVisible: true }));
      return;
    }

    // New audio
    if (audioRef.current) {
      saveProgress();
      audioRef.current.pause();
      audioRef.current.src = "";
    }

    const audio = new Audio(`/audio/${slug}.mp3`);
    audioRef.current = audio;

    setState(s => ({
      ...s,
      isLoading: true,
      isVisible: true,
      currentSlug: slug,
      currentTitle: title,
      currentTime: 0,
      duration: 0,
    }));

    const saved = restoreProgress(slug);

    audio.addEventListener("loadedmetadata", () => {
      if (saved && saved.time < audio.duration - 2) {
        audio.currentTime = saved.time;
      }
      const rate = saved?.rate || 1;
      audio.playbackRate = rate;
      setState(s => ({
        ...s,
        duration: audio.duration,
        currentTime: audio.currentTime,
        playbackRate: rate,
        isLoading: false,
      }));
      audio.play();
      setState(s => ({ ...s, isPlaying: true }));
    });

    audio.addEventListener("ended", () => {
      setState(s => ({ ...s, isPlaying: false, currentTime: s.duration }));
      localStorage.removeItem(`${STORAGE_PREFIX}${slug}`);
    });

    audio.addEventListener("error", () => {
      setState(s => ({ ...s, isLoading: false, isVisible: false, currentSlug: null }));
    });
  }, [state.currentSlug, saveProgress, restoreProgress]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (state.isPlaying) {
      audioRef.current.pause();
      saveProgress();
      setState(s => ({ ...s, isPlaying: false }));
    } else {
      audioRef.current.play();
      setState(s => ({ ...s, isPlaying: true }));
    }
  }, [state.isPlaying, saveProgress]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      saveProgress();
      setState(s => ({ ...s, isPlaying: false }));
    }
  }, [saveProgress]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setState(s => ({ ...s, currentTime: time }));
    }
  }, []);

  const setRate = useCallback((rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
    setState(s => ({ ...s, playbackRate: rate }));
  }, []);

  const close = useCallback(() => {
    if (audioRef.current) {
      saveProgress();
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    setState(s => ({
      ...s,
      isPlaying: false,
      isVisible: false,
      currentSlug: null,
      currentTitle: null,
      currentTime: 0,
      duration: 0,
    }));
  }, [saveProgress]);

  return (
    <AudioPlayerContext.Provider value={{ ...state, play, togglePlay, pause, seek, setRate, close }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  return ctx;
}
