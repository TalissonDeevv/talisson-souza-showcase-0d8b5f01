import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { useAuth } from '@/hooks/useAuth';
import { lovable } from '@/integrations/lovable/index';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Login = () => {
  const { language } = useTheme();
  const { user, loading: authLoading } = useAuth();
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  if (authLoading) return null;
  if (user) {
    return <Navigate to={language === 'en' ? '/en-us' : '/'} replace />;
  }

  const handleSignIn = async (provider: 'google' | 'apple') => {
    setLoadingProvider(provider);
    try {
      const { error } = await lovable.auth.signInWithOAuth(provider, {
        redirect_uri: window.location.origin,
      });
      if (error) console.error('Auth error:', error);
    } catch (err) {
      console.error('Sign in failed:', err);
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <Layout>
      <SEO
        title={getText(language, 'Entrar | Talisson Souza', 'Sign In | Talisson Souza')}
        description={getText(language, 'Faça login para participar da conversa.', 'Sign in to join the conversation.')}
      />

      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="bg-card border border-border/40 rounded-2xl p-10 shadow-2xl shadow-black/20">
            <div className="text-center mb-10">
              <h1 className="text-2xl font-serif text-foreground mb-3">
                {getText(language, 'Entre para participar da conversa', 'Sign in to join the conversation')}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {getText(language,
                  'Os comentários são exclusivos para usuários autenticados',
                  'Comments are exclusive to authenticated users'
                )}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleSignIn('google')}
                disabled={!!loadingProvider}
                className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border border-border/60 bg-background hover:bg-secondary/50 transition-all duration-200 text-sm font-medium text-foreground disabled:opacity-50 hover:border-border"
              >
                {loadingProvider === 'google' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FcGoogle className="h-5 w-5" />
                )}
                {getText(language, 'Entrar com Google', 'Sign in with Google')}
              </button>

              <button
                onClick={() => handleSignIn('apple')}
                disabled={!!loadingProvider}
                className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border border-border/60 bg-background hover:bg-secondary/50 transition-all duration-200 text-sm font-medium text-foreground disabled:opacity-50 hover:border-border"
              >
                {loadingProvider === 'apple' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FaApple className="h-5 w-5" />
                )}
                {getText(language, 'Entrar com Apple', 'Sign in with Apple')}
              </button>
            </div>

            <p className="text-xs text-muted-foreground/60 text-center mt-8">
              {getText(language,
                'Não armazenamos dados além do necessário para identificação nos comentários.',
                'We only store data necessary for comment identification.'
              )}
            </p>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Login;
