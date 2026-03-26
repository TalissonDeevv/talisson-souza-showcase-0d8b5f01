import { useState, useEffect, useCallback } from 'react';

export function getRelativeTime(date: Date | string, language: 'pt' | 'en' = 'pt'): string {
  const now = new Date();
  const published = typeof date === 'string' ? new Date(date) : date;
  const diffMs = now.getTime() - published.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  const prefix = language === 'pt' ? 'Postado há' : 'Posted';
  const suffix = language === 'en' ? 'ago' : '';

  if (diffMinutes < 1) {
    return language === 'pt' ? 'Postado agora mesmo' : 'Posted just now';
  }
  if (diffMinutes < 60) {
    const unit = language === 'pt'
      ? (diffMinutes === 1 ? 'minuto' : 'minutos')
      : (diffMinutes === 1 ? 'minute' : 'minutes');
    return language === 'pt' ? `${prefix} ${diffMinutes} ${unit}` : `${prefix} ${diffMinutes} ${unit} ${suffix}`;
  }
  if (diffHours < 24) {
    const unit = language === 'pt'
      ? (diffHours === 1 ? 'hora' : 'horas')
      : (diffHours === 1 ? 'hour' : 'hours');
    return language === 'pt' ? `${prefix} ${diffHours} ${unit}` : `${prefix} ${diffHours} ${unit} ${suffix}`;
  }
  if (diffDays < 7) {
    const unit = language === 'pt'
      ? (diffDays === 1 ? 'dia' : 'dias')
      : (diffDays === 1 ? 'day' : 'days');
    return language === 'pt' ? `${prefix} ${diffDays} ${unit}` : `${prefix} ${diffDays} ${unit} ${suffix}`;
  }
  if (diffWeeks < 5) {
    const unit = language === 'pt'
      ? (diffWeeks === 1 ? 'semana' : 'semanas')
      : (diffWeeks === 1 ? 'week' : 'weeks');
    return language === 'pt' ? `${prefix} ${diffWeeks} ${unit}` : `${prefix} ${diffWeeks} ${unit} ${suffix}`;
  }
  if (diffMonths < 12) {
    const unit = language === 'pt'
      ? (diffMonths === 1 ? 'mês' : 'meses')
      : (diffMonths === 1 ? 'month' : 'months');
    return language === 'pt' ? `${prefix} ${diffMonths} ${unit}` : `${prefix} ${diffMonths} ${unit} ${suffix}`;
  }

  const unit = language === 'pt'
    ? (diffYears === 1 ? 'ano' : 'anos')
    : (diffYears === 1 ? 'year' : 'years');
  return language === 'pt' ? `${prefix} ${diffYears} ${unit}` : `${prefix} ${diffYears} ${unit} ${suffix}`;
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
