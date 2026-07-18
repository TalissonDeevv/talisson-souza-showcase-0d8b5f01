import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, MessageSquare, ShieldCheck } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import SEO from "@/components/SEO";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import illustration from "@/assets/404-illustration.svg";

const DISCORD_LINK = "https://discord.talissonsouza.com.br";
const ease = [0.16, 1, 0.3, 1] as const;

const NotFound = () => {
  const { language } = useTheme();

  const homePath = language === "en" ? "/en-us" : "/";
  const contactPath = language === "en" ? "/en-us/contact" : "/contato";

  return (
    <main
      className="relative flex min-h-dvh items-center overflow-hidden bg-background text-foreground"
      onContextMenu={(event) => event.preventDefault()}
    >
      <SEO
        title={getText(language, "Pagina nao encontrada | Talisson Souza", "Page not found | Talisson Souza")}
        description={getText(
          language,
          "O conteudo que voce procura nao existe ou foi movido. Continue navegando pelo site oficial de Talisson Souza.",
          "The content you are looking for does not exist or has moved. Continue through Talisson Souza's official website."
        )}
        canonical="https://www.talissonsouza.com.br/404"
        image="/og/home.png"
      />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-[10%] top-[20%] hidden h-[620px] w-[620px] rounded-full bg-foreground/[0.03] blur-3xl md:block" />
        <div className="absolute bottom-[12%] right-[8%] hidden h-[520px] w-[520px] rounded-full bg-foreground/[0.022] blur-3xl md:block" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border/35 bg-card/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-foreground/70" />
              {getText(language, "Rota segura", "Safe route")}
            </div>

            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.38em] text-muted-foreground/60">
              {getText(language, "Erro 404", "404 Error")}
            </p>

            <h1 className="mx-auto max-w-2xl text-balance font-serif text-[clamp(2.8rem,9vw,5.9rem)] leading-[0.94] text-foreground lg:mx-0">
              {getText(language, "Nada por aqui.", "Nothing here.")}
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {getText(
                language,
                "O endereco pode ter mudado, expirado ou nunca ter existido. Use um dos caminhos abaixo para voltar para uma area confiavel do site.",
                "This address may have changed, expired or never existed. Use one of the paths below to return to a reliable area of the site."
              )}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to={homePath}
                className="group inline-flex h-12 min-w-[176px] items-center justify-center gap-3 rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-[0_0_30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <Home className="h-4 w-4" />
                {getText(language, "Voltar para a Home", "Back to Home")}
              </Link>

              <Link
                to={contactPath}
                className="group inline-flex h-12 min-w-[176px] items-center justify-center gap-3 rounded-full border border-border/35 bg-card/30 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/[0.06]"
              >
                <MessageSquare className="h-4 w-4" />
                {getText(language, "Relatar erro", "Report error")}
              </Link>

              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 min-w-[176px] items-center justify-center gap-3 rounded-full border border-border/35 bg-card/30 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/[0.06]"
              >
                <SiDiscord className="h-4 w-4" />
                Discord
              </a>
            </div>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {getText(language, "Voltar a pagina anterior", "Go back to previous page")}
            </button>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="order-1 flex items-center justify-center lg:order-2"
          >
            <div className="relative w-full max-w-[520px] select-none sm:max-w-[640px] lg:max-w-[720px]">
              <div className="absolute -left-4 top-8 z-20 hidden rounded-full border border-border/35 bg-background/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground backdrop-blur-sm sm:block">
                404
              </div>
              <div className="absolute inset-0 rounded-[2rem] bg-foreground/[0.035] blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/25 bg-card/[0.18] p-5 shadow-[0_34px_120px_hsl(0_0%_0%/0.42)] backdrop-blur-sm sm:p-7">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.08] via-transparent to-background/60" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.026]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
                <img
                  src={illustration}
                  alt={getText(language, "Ilustracao de pagina nao encontrada", "Page not found illustration")}
                  draggable={false}
                  className="relative z-10 mx-auto w-full max-w-full opacity-95 [user-select:none]"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
