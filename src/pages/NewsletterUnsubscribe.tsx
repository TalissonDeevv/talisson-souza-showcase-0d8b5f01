import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

type UnsubStatus = "loading" | "success" | "already" | "error";

const NewsletterUnsubscribe = () => {
  const { language } = useTheme();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<UnsubStatus>("loading");
  const [message, setMessage] = useState("");

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage(getText(language, "Token ausente.", "Missing token."));
      return;
    }

    const unsubscribe = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("newsletter-unsubscribe", {
          body: { token, language },
        });

        if (error) throw error;

        if (data?.already_unsubscribed) {
          setStatus("already");
        } else if (data?.unsubscribed) {
          setStatus("success");
        } else {
          setStatus("error");
        }
        setMessage(data?.message || data?.error || "");
      } catch {
        setStatus("error");
        setMessage(
          getText(language, "Erro ao cancelar inscrição.", "Error unsubscribing.")
        );
      }
    };

    unsubscribe();
  }, [token, language]);

  const icon = {
    loading: <Loader2 className="w-12 h-12 text-muted-foreground animate-spin" />,
    success: <CheckCircle className="w-12 h-12 text-foreground/60" />,
    already: <CheckCircle className="w-12 h-12 text-foreground/60" />,
    error: <XCircle className="w-12 h-12 text-red-400" />,
  };

  const title = {
    loading: getText(language, "Processando...", "Processing..."),
    success: getText(language, "Inscrição cancelada", "Unsubscribed"),
    already: getText(language, "Já cancelado", "Already unsubscribed"),
    error: getText(language, "Erro", "Error"),
  };

  return (
    <Layout>
      <SEO
        title={getText(language, "Cancelar Newsletter | Talisson Souza", "Unsubscribe Newsletter | Talisson Souza")}
        description={getText(language, "Cancelamento da newsletter.", "Newsletter unsubscribe.")}
      />
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <GlassCard className="p-8 lg:p-10 text-center">
            <div className="mb-6">{icon[status]}</div>
            <h1 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
              {title[status]}
            </h1>
            <p className="text-sm text-muted-foreground/60 leading-relaxed">
              {message}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NewsletterUnsubscribe;
