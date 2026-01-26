import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Loader2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import GlassCard from "./GlassCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { language } = useTheme();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: getText(language, "Email inválido", "Invalid email"),
        description: getText(language, "Por favor, insira um email válido.", "Please enter a valid email."),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.toLowerCase().trim() });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: getText(language, "Já inscrito!", "Already subscribed!"),
            description: getText(language, "Este email já está cadastrado.", "This email is already registered."),
          });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        setEmail("");
        toast({
          title: getText(language, "Inscrição confirmada!", "Subscription confirmed!"),
          description: getText(language, "Você receberá novidades em breve.", "You'll receive updates soon."),
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: getText(language, "Erro", "Error"),
        description: getText(language, "Tente novamente mais tarde.", "Please try again later."),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Newsletter
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
              {getText(language, 'Fique por dentro', 'Stay updated')}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
              {getText(
                language,
                'Receba dicas de desenvolvimento, novidades sobre projetos e insights exclusivos diretamente no seu email.',
                'Get development tips, project updates, and exclusive insights delivered to your inbox.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="p-6 lg:p-8">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-4 gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {getText(language, 'Inscrição confirmada!', 'You\'re subscribed!')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {getText(language, 'Fique de olho no seu email.', 'Keep an eye on your inbox.')}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={getText(language, 'Seu melhor email', 'Your best email')}
                      className="w-full pl-11 pr-4 py-3.5 text-sm bg-background/50 border border-border/40 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all duration-300"
                      disabled={isLoading}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-primary-foreground bg-foreground rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                    }}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        {getText(language, 'Inscrever', 'Subscribe')}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              <p className="text-xs text-muted-foreground/60 text-center mt-4">
                {getText(
                  language,
                  'Sem spam. Cancele quando quiser.',
                  'No spam. Unsubscribe anytime.'
                )}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
