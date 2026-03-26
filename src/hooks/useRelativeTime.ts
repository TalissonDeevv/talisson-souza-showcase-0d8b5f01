import { useState, useEffect, useCallback } from 'react';

export function getRelativeTime(date: Date | string, language: 'pt' | 'en' = 'pt'): string {
  const now = new Date();
  const published = typeof date === 'string' ? new Date(date) : date;
  const diffMs = now.getTime() - published.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMinutes < 1) {
    return language === 'pt' ? 'agora mesmo' : 'just now';
  }
  if (diffMinutes < 60) {
    return language === 'pt'
      ? `há ${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`
      : `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  if (diffHours < 24) {
    return language === 'pt'
      ? `há ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`
      : `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  }
  if (diffDays < 7) {
    return language === 'pt'
      ? `há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`
      : `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  }

  return published.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function useRelativeTime(date: Date | string, language: 'pt' | 'en' = 'pt'): string {
  const [relativeTime, setRelativeTime] = useState(() => getRelativeTime(date, language));

  const update = useCallback(() => {
    setRelativeTime(getRelativeTime(date, language));
  }, [date, language]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [update]);

  return relativeTime;
}
