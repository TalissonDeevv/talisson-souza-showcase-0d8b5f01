import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, ShieldCheck, X, Loader2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { useToast } from "@/hooks/use-toast";

type Step = "closed" | "notice" | "form" | "sent";

const MAX_FILE_MB = 10;

interface Props {
  open: boolean;
  onClose: () => void;
}

const ClientPortalDialog = ({ open, onClose }: Props) => {
  const { language } = useTheme();
  const { toast } = useToast();
  const [step, setStep] = useState<Step>("notice");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", projectName: "", message: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  const close = () => {
    setStep("notice");
    setFile(null);
    setFileError(null);
    setForm({ fullName: "", email: "", projectName: "", message: "" });
    onClose();
  };

  const handleFile = (f: File | null) => {
    setFileError(null);
    if (!f) { setFile(null); return; }
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(getText(language, `Arquivo excede ${MAX_FILE_MB}MB.`, `File exceeds ${MAX_FILE_MB}MB.`));
      return;
    }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setFileError(getText(
        language,
        "É necessário anexar o contrato do projeto para que possamos validar a solicitação.",
        "You must attach the project contract so we can validate the request."
      ));
      return;
    }
    if (!form.fullName.trim() || !form.email.trim() || !form.projectName.trim()) return;
    setSubmitting(true);
    // Presentation-only submission: opens the user's mail client with the details.
    // The contract file cannot be auto-attached via mailto — the user must attach it manually.
    try {
      const subject = encodeURIComponent(
        getText(language, "Autorização de publicação de projeto", "Project publication authorization")
      );
      const body = encodeURIComponent(
        [
          getText(language, "Nome / Razão social:", "Full name / Company:") + " " + form.fullName,
          getText(language, "E-mail de contratação:", "Contracting e-mail:") + " " + form.email,
          getText(language, "Nome do projeto:", "Project name:") + " " + form.projectName,
          "",
          getText(language, "Mensagem:", "Message:"),
          form.message || "-",
          "",
          getText(
            language,
            `Anexo obrigatório: contrato "${file.name}" (por favor anexe este arquivo antes de enviar).`,
            `Required attachment: contract "${file.name}" (please attach this file before sending).`
          ),
        ].join("\n")
      );
      window.location.href = `mailto:contato@talissonsouza.com?subject=${subject}&body=${body}`;
      setStep("sent");
      toast({
        title: getText(language, "Rascunho de e-mail aberto", "E-mail draft opened"),
        description: getText(
          language,
          "Anexe o contrato no seu cliente de e-mail antes de enviar.",
          "Attach the contract in your mail client before sending."
        ),
      });
    } finally {
      setSubmitting(false);
    }
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
        onClick={close}
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
            onClick={close}
            className="absolute top-4 right-4 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition"
            aria-label={getText(language, "Fechar", "Close")}
          >
            <X className="w-4 h-4" />
          </button>

          {step === "notice" && (
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
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {getText(
                  language,
                  "Para prosseguir, será necessário anexar uma cópia do contrato firmado entre as partes, que será utilizada apenas para validar a titularidade do projeto. Solicitações sem documentação comprobatória poderão ser desconsideradas.",
                  "To proceed, you must attach a copy of the signed contract between the parties. It will be used only to validate ownership of the project. Requests without supporting documentation may be disregarded."
                )}
              </p>
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-3">
                <button
                  onClick={close}
                  className="px-6 py-2.5 text-sm font-medium text-foreground border border-border/40 bg-card/40 rounded-full hover:border-foreground/20 transition"
                >
                  {getText(language, "Cancelar", "Cancel")}
                </button>
                <button
                  onClick={() => setStep("form")}
                  className="px-6 py-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-full hover:opacity-90 transition"
                >
                  {getText(language, "Prosseguir", "Proceed")}
                </button>
              </div>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleSubmit} className="p-8">
              <h3 className="font-serif text-2xl text-foreground mb-2 leading-tight">
                {getText(language, "Autorizar publicação de projeto", "Authorize project publication")}
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                {getText(language, "Campos com * são obrigatórios.", "Fields marked with * are required.")}
              </p>

              <div className="space-y-4">
                <Field
                  label={getText(language, "Nome completo ou razão social *", "Full name or company *")}
                  value={form.fullName}
                  onChange={(v) => setForm({ ...form, fullName: v })}
                  required
                />
                <Field
                  label={getText(language, "E-mail utilizado durante a contratação *", "E-mail used at contracting *")}
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <Field
                  label={getText(language, "Nome do projeto *", "Project name *")}
                  value={form.projectName}
                  onChange={(v) => setForm({ ...form, projectName: v })}
                  required
                />

                {/* Contract upload */}
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    {getText(language, "Contrato do projeto *", "Project contract *")}
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-border/50 bg-card/30 hover:border-foreground/30 text-left transition"
                  >
                    <Paperclip className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-foreground truncate">
                      {file ? file.name : getText(language, "Anexar contrato (PDF, DOC, imagem)", "Attach contract (PDF, DOC, image)")}
                    </span>
                  </button>
                  {fileError && (
                    <p className="mt-1.5 text-xs text-destructive">{fileError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    {getText(language, "Mensagem (opcional)", "Message (optional)")}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, 800) })}
                    rows={3}
                    className="w-full rounded-xl border border-border/40 bg-card/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-foreground/30 resize-y"
                    maxLength={800}
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border/40 bg-foreground/[0.03] p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  {getText(
                    language,
                    "O contrato será utilizado exclusivamente para validação da solicitação. Nenhuma informação será divulgada ou compartilhada, sendo utilizada apenas para confirmar que o solicitante é o contratante do projeto.",
                    "The contract will be used solely to validate the request. No information will be disclosed or shared; it is used only to confirm that the requester is the contracting party of the project."
                  )}
                </p>
              </div>

              <div className="mt-6 flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={close}
                  className="px-6 py-2.5 text-sm font-medium text-foreground border border-border/40 bg-card/40 rounded-full hover:border-foreground/20 transition"
                >
                  {getText(language, "Cancelar", "Cancel")}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-full hover:opacity-90 disabled:opacity-60 transition"
                >
                  {submitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {getText(language, "Enviar solicitação", "Submit request")}
                </button>
              </div>
            </form>
          )}

          {step === "sent" && (
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {getText(language, "Solicitação preparada", "Request prepared")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {getText(
                  language,
                  "Abri um rascunho de e-mail com os dados. Anexe o contrato no seu cliente de e-mail e envie para finalizar.",
                  "I opened an e-mail draft with the data. Attach the contract in your mail client and send it to finalize."
                )}
              </p>
              <button
                onClick={close}
                className="px-6 py-2.5 text-sm font-medium text-primary-foreground bg-foreground rounded-full hover:opacity-90 transition"
              >
                {getText(language, "Fechar", "Close")}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Field = ({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <div>
    <label className="block text-xs font-medium text-foreground mb-1.5">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-border/40 bg-card/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-foreground/30"
    />
  </div>
);

export default ClientPortalDialog;
