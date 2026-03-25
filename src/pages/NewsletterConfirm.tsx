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

type ConfirmStatus = "loading" | "success" | "already" | "error";

const NewsletterConfirm = () => {
  const { language } = useTheme();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<ConfirmStatus>("loading");
  const [message, setMessage] = useState("");

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage(
        getText(language, "Token de confirmação ausente.", "Missing confirmation token.")
      );
      return;
    }

    const confirm = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("newsletter-confirm", {
          body: { token, language },
        });

        if (error) throw error;

        if (data?.already_confirmed) {
          setStatus("already");
        } else if (data?.confirmed) {
          setStatus("success");
        } else {
          setStatus("error");
        }
        setMessage(data?.message || data?.error || "");
      } catch {
        setStatus("error");
        setMessage(
          getText(language, "Erro ao confirmar inscrição.", "Error confirming subscription.")
        );
      }
    };

    confirm();
  }, [token, language]);

  const icon = {
    loading: <Loader2 className="w-12 h-12 text-muted-foreground animate-spin" />,
    success: <CheckCircle className="w-12 h-12 text-green-400" />,
    already: <CheckCircle className="w-12 h-12 text-foreground/60" />,
    error: <XCircle className="w-12 h-12 text-red-400" />,
  };

  const title = {
    loading: getText(language, "Confirmando...", "Confirming..."),
    success: getText(language, "Inscrição confirmada!", "Subscription confirmed!"),
    already: getText(language, "Já confirmado", "Already confirmed"),
    error: getText(language, "Erro na confirmação", "Confirmation error"),
  };

  return (
    <Layout>
      <SEO
        title={getText(language, "Confirmar Newsletter | Talisson Souza", "Confirm Newsletter | Talisson Souza")}
        description={getText(language, "Confirmação de inscrição na newsletter.", "Newsletter subscription confirmation.")}
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
            <p className="text-sm text-muted-foreground/60 leading-relaxed mb-6">
              {message}
            </p>
            {(status === "success" || status === "already") && (
              <a
                href={getText(language, "/artigos", "/en-us/articles")}
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-all duration-200"
              >
                {getText(language, "Explorar artigos", "Explore articles")}
              </a>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NewsletterConfirm;
