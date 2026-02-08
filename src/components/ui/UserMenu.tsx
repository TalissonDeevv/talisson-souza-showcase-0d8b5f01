import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const UserMenu = () => {
  const { user, loading, signOut } = useAuth();
  const { language } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (loading) return null;

  if (!user) {
    return (
      <Link
        to={language === 'en' ? '/en-us/login' : '/login'}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {getText(language, 'Entrar', 'Sign in')}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center">
        {user.avatar_url ? (
          <img src={user.avatar_url} alt="" className="w-8 h-8 rounded-full border border-border/40 hover:border-border transition-colors" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground border border-border/40">
            {(user.full_name || user.user_name || 'U').charAt(0).toUpperCase()}
          </div>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border/40 rounded-lg shadow-xl shadow-black/20 py-1 z-50">
          <div className="px-3 py-2 border-b border-border/20">
            <p className="text-sm font-medium text-foreground truncate">{user.full_name || user.user_name}</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <button
            onClick={() => { signOut(); setOpen(false); }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            {getText(language, 'Sair', 'Sign out')}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
