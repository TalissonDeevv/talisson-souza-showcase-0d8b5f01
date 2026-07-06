import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, X, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const GOOGLE_FORM_URL = "https://forms.gle/S4EoazxMh9XBoxVS9";

interface Props {
  open: boolean;
  onClose: () => void;
}

/**
 * Portal do cliente — aviso de escopo restrito seguido de redirecionamento
 * para o formulário oficial no Google Forms. Sem coleta de dados no site:
 * evita superfície de e-mail/anexos e mantém a validação centralizada.
 */
const ClientPortalDialog = ({ open, onClose }: Props) => {
  const { language } = useTheme();
  if (!open) return null;

  const goToForm = () => {
    // noopener + noreferrer: evita reverse-tabnabbing e vazamento de referrer.
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl my-8 rounded-2xl border border-border/40 bg-card/95 backdrop-blur-xl shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition"
            aria-label={getText(language, "Fechar", "Close")}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              {getText(language, "Portal do cliente", "Client portal")}
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-4 leading-tight">
              {getText(language, "Área restrita a clientes", "Restricted to clients")}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {getText(
                language,
                "Esta área é destinada exclusivamente a clientes que já possuem um projeto desenvolvido comigo e desejam autorizar sua publicação em meu portfólio.",
                "This area is intended solely for clients who already have a project delivered by me and want to authorize its publication in my portfolio."
              )}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {getText(
                language,
                "No próximo passo você será direcionado ao formulário oficial no Google Forms, onde deverá anexar uma cópia do contrato firmado entre as partes.",
                "In the next step you will be redirected to the official Google Forms, where you must attach a copy of the signed contract between the parties."
              )}
            </p>

            <div className="rounded-xl border border-border/40 bg-foreground/[0.03] p-4 mb-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                {getText(
                  language,
                  "O contrato será utilizado exclusivamente para validação da solicitação. Nenhuma informação será divulgada ou compartilhada, sendo utilizada apenas para confirmar que o solicitante é o contratante do projeto.",
                  "The contract will be used solely to validate the request. No information will be disclosed or shared; it is used only to confirm that the requester is the contracting party of the project."
                )}
              </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-sm font-medium text-foreground border border-border/40 bg-card/40 rounded-full hover:border-foreground/20 transition"
              >
                {getText(language, "Cancelar", "Cancel")}
              </button>
              <button
                onClick={goToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-full hover:opacity-90 transition"
              >
                {getText(language, "Ir para o formulário", "Go to the form")}
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientPortalDialog;
