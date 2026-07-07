import { useEffect, useId, useState } from "react";
import { CloudSun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-8.0476&longitude=-34.8770&current=temperature_2m,apparent_temperature,weather_code,is_day";
const CACHE_KEY = "talisson:weather:recife:v1";
const CACHE_TTL_MS = 10 * 60 * 1000;

interface OpenMeteoResponse {
  current?: {
    temperature_2m?: number;
    apparent_temperature?: number;
    weather_code?: number;
    is_day?: number;
  };
}

interface WeatherSnapshot {
  temperature: number;
  apparentTemperature: number;
  weatherCode: number;
  isDay: boolean;
  fetchedAt: number;
}

interface WeatherCache {
  expiresAt: number;
  snapshot: WeatherSnapshot;
}

type WeatherStatus = "loading" | "live" | "unavailable";

let pendingWeatherRequest: Promise<WeatherSnapshot | null> | null = null;

function isSnapshot(value: unknown): value is WeatherSnapshot {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<WeatherSnapshot>;
  return (
    Number.isFinite(item.temperature) &&
    Number.isFinite(item.apparentTemperature) &&
    Number.isFinite(item.weatherCode) &&
    typeof item.isDay === "boolean" &&
    Number.isFinite(item.fetchedAt)
  );
}

function readCache(): WeatherSnapshot | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw) as Partial<WeatherCache>;
    if (
      !Number.isFinite(cached.expiresAt) ||
      Number(cached.expiresAt) <= Date.now() ||
      !isSnapshot(cached.snapshot)
    ) {
      window.localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return cached.snapshot;
  } catch {
    return null;
  }
}

function writeCache(snapshot: WeatherSnapshot): void {
  if (typeof window === "undefined") return;

  try {
    const cache: WeatherCache = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      snapshot,
    };
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Storage may be unavailable in private browsing; the widget still renders.
  }
}

async function loadWeather(): Promise<WeatherSnapshot | null> {
  const cached = readCache();
  if (cached) return cached;
  if (pendingWeatherRequest) return pendingWeatherRequest;

  pendingWeatherRequest = (async () => {
    try {
      const response = await fetch(WEATHER_URL, {
        headers: { Accept: "application/json" },
      });
      if (!response.ok) return null;

      const payload = (await response.json()) as OpenMeteoResponse;
      const current = payload.current;
      if (
        !current ||
        !Number.isFinite(current.temperature_2m) ||
        !Number.isFinite(current.apparent_temperature) ||
        !Number.isFinite(current.weather_code) ||
        (current.is_day !== 0 && current.is_day !== 1)
      ) {
        return null;
      }

      const snapshot: WeatherSnapshot = {
        temperature: Number(current.temperature_2m),
        apparentTemperature: Number(current.apparent_temperature),
        weatherCode: Number(current.weather_code),
        isDay: current.is_day === 1,
        fetchedAt: Date.now(),
      };
      writeCache(snapshot);
      return snapshot;
    } catch {
      return null;
    } finally {
      pendingWeatherRequest = null;
    }
  })();

  return pendingWeatherRequest;
}

function weatherCondition(
  code: number,
  isDay: boolean,
  language: "pt" | "en",
): string {
  const pt = language === "pt";

  if (code === 0) {
    if (pt) return isDay ? "Céu limpo" : "Noite limpa";
    return isDay ? "Clear sky" : "Clear night";
  }

  if ([1, 2].includes(code)) return pt ? "Parcialmente nublado" : "Partly cloudy";
  if (code === 3) return pt ? "Céu nublado" : "Overcast";
  if ([45, 48].includes(code)) return pt ? "Neblina" : "Fog";
  if ([51, 53, 55, 56, 57].includes(code)) return pt ? "Garoa" : "Drizzle";
  if ([61, 63, 65, 66, 67].includes(code)) return pt ? "Chuva" : "Rain";
  if ([71, 73, 75, 77].includes(code)) return pt ? "Neve" : "Snow";
  if ([80, 81, 82].includes(code)) return pt ? "Pancadas de chuva" : "Rain showers";
  if ([85, 86].includes(code)) return pt ? "Pancadas de neve" : "Snow showers";
  if ([95, 96, 99].includes(code)) return pt ? "Trovoadas" : "Thunderstorms";
  return pt ? "Condição variável" : "Variable conditions";
}

const FooterWeather = () => {
  const { language } = useTheme();
  const initialWeather = readCache();
  const [weather, setWeather] = useState<WeatherSnapshot | null>(initialWeather);
  const [status, setStatus] = useState<WeatherStatus>(initialWeather ? "live" : "loading");
  const tooltipId = useId();

  useEffect(() => {
    let active = true;

    const refresh = async () => {
      const snapshot = await loadWeather();
      if (!active) return;

      setWeather(snapshot);
      setStatus(snapshot ? "live" : "unavailable");
    };

    void refresh();
    const timer = window.setInterval(() => void refresh(), CACHE_TTL_MS);

    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const condition = weather
    ? weatherCondition(weather.weatherCode, weather.isDay, language)
    : language === "pt"
      ? "Clima de Recife"
      : "Recife weather";

  const updatedAt = weather
    ? new Intl.DateTimeFormat(language === "pt" ? "pt-BR" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Recife",
      }).format(weather.fetchedAt)
    : null;

  const label = weather
    ? `Recife, PE — ${Math.round(weather.temperature)}°C`
    : language === "pt"
      ? "Recife, PE — clima"
      : "Recife, PE — weather";

  return (
    <div className="group relative">
      <button
        type="button"
        aria-describedby={tooltipId}
        className="inline-flex items-center gap-1.5 rounded-full border border-border/35 bg-card/35 px-2.5 py-1 text-[10px] tracking-[0.03em] text-muted-foreground transition-all duration-200 hover:border-border/60 hover:bg-card/55 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30"
      >
        <CloudSun className="h-3 w-3 text-amber-300/80" />
        <span>{label}</span>
        {status === "loading" && (
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300/70" />
        )}
      </button>
      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full right-0 z-20 mb-3 w-max max-w-[250px] translate-y-1 rounded-lg border border-border/40 bg-popover/95 px-3 py-2.5 text-left opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <p className="text-[11px] font-medium text-foreground">{condition}</p>
        {weather ? (
          <>
            <p className="mt-1 text-[10px] text-muted-foreground">
              {language === "pt" ? "Sensação térmica" : "Feels like"}:{" "}
              {Math.round(weather.apparentTemperature)}°C
            </p>
            <p className="text-[10px] text-muted-foreground/70">
              {language === "pt" ? "Atualizado às" : "Updated at"} {updatedAt}
            </p>
          </>
        ) : (
          <p className="mt-1 text-[10px] text-muted-foreground">
            {status === "loading"
              ? language === "pt"
                ? "Buscando previsão em tempo real..."
                : "Fetching live forecast..."
              : language === "pt"
                ? "Previsão indisponível agora; o widget permanece visível."
                : "Forecast unavailable now; the widget stays visible."}
          </p>
        )}
      </div>
    </div>
  );
};

export default FooterWeather;
