import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import GlassCard from "./GlassCard";

interface NewsletterFormProps {
  variant?: "inline" | "card" | "article-footer";
  className?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error" | "already";

const NewsletterForm = ({ variant = "card", className = "" }: NewsletterFormProps) => {
  const { language } = useTheme();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setStatus("error");
      setMessage(
        getText(language,
          "Você precisa aceitar os termos para se inscrever.",
          "You must accept the terms to subscribe."
        )
      );
      return;
    }

    setStatus("loading");

    try {
      const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: { email: email.trim(), name: name.trim() || null, language, honeypot },
      });

      if (error) throw error;

      if (data?.message?.includes("já está inscrito") || data?.message?.includes("already subscribed")) {
        setStatus("already");
      } else {
        setStatus("success");
      }
      setMessage(data?.message || "");
    } catch (err) {
      console.error("Newsletter subscribe error:", err);
      setStatus("error");
      setMessage(
        getText(language,
          "Erro ao processar inscrição. Tente novamente.",
          "Error processing subscription. Please try again."
        )
      );
    }
  };

  const isCard = variant === "card" || variant === "article-footer";

  const formContent = (
    <div className={className}>
      {variant === "article-footer" && (
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-4 h-4 text-muted-foreground/60" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 font-medium">
            Newsletter
          </span>
        </div>
      )}

      <h3 className="font-serif text-lg lg:text-xl text-foreground mb-2 leading-tight">
        {getText(language,
          "Receba conteúdo direto no seu email",
          "Get content straight to your inbox"
        )}
      </h3>
      <p className="text-sm text-muted-foreground/60 leading-relaxed mb-6 max-w-md">
        {getText(language,
          "Artigos sobre tecnologia, arquitetura de software, carreira e estratégia. Sem spam, cancelamento a qualquer momento.",
          "Articles on technology, software architecture, career and strategy. No spam, unsubscribe anytime."
        )}
      </p>

      <AnimatePresence mode="wait">
        {status === "success" || status === "already" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 p-4 rounded-lg border border-border/20 bg-foreground/[0.03]"
          >
            <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground font-medium mb-1">
                {status === "success"
                  ? getText(language, "Quase lá!", "Almost there!")
                  : getText(language, "Você já está inscrito!", "You are already subscribed!")
                }
              </p>
              <p className="text-xs text-muted-foreground/60">
                {message}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={getText(language, "Seu nome (opcional)", "Your name (optional)")}
                className="flex-1 h-10 px-3 py-2 rounded-md border border-border/30 bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring/30 transition-colors"
                disabled={status === "loading"}
                maxLength={100}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={getText(language, "Seu melhor email", "Your best email")}
                required
                className="flex-1 h-10 px-3 py-2 rounded-md border border-border/30 bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring/30 transition-colors"
                disabled={status === "loading"}
                maxLength={255}
              />
            </div>

            {/* Honeypot anti-spam (hidden from users, visible to bots) */}
            <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            {/* LGPD consent */}
            <label className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (status === "error") setStatus("idle");
                }}
                className="mt-1 h-3.5 w-3.5 rounded-sm border border-border/40 bg-background accent-foreground"
              />
              <span className="text-[11px] text-muted-foreground/50 leading-relaxed">
                {getText(language,
                  "Concordo em receber emails e aceito a ",
                  "I agree to receive emails and accept the "
                )}
                <a
                  href={getText(language, "/politica-de-privacidade", "/en-us/privacy-policy")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground/70 transition-colors"
                >
                  {getText(language, "política de privacidade", "privacy policy")}
                </a>
                {getText(language,
                  ". Posso cancelar a qualquer momento.",
                  ". I can unsubscribe at any time."
                )}
              </span>
            </label>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-red-400"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {message}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="h-10 px-6 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {getText(language, "Inscrevendo...", "Subscribing...")}
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  {getText(language, "Inscrever-se", "Subscribe")}
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );

  if (isCard) {
    return (
      <GlassCard className="p-6 lg:p-8">
        {formContent}
      </GlassCard>
    );
  }

  return formContent;
};

export default NewsletterForm;
