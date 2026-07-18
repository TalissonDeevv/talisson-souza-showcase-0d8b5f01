import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, MessageSquare, SearchX } from "lucide-react";
import SEO from "@/components/SEO";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import logo from "@/assets/logo.png";

const ease = [0.16, 1, 0.3, 1] as const;

const NotFound = () => {
  const { language } = useTheme();

  const homePath = language === "en" ? "/en-us" : "/";
  const contactPath = language === "en" ? "/en-us/contact" : "/contato";
  const articlesPath = language === "en" ? "/en-us/articles" : "/artigos";

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-background text-foreground">
      <SEO
        title={getText(language, "Pagina nao encontrada | Talisson Souza", "Page not found | Talisson Souza")}
        description={getText(
          language,
          "Essa pagina nao existe mais ou foi movida. Continue pelo site oficial de Talisson Souza.",
          "This page no longer exists or has moved. Continue through Talisson Souza's official website."
        )}
        canonical="https://www.talissonsouza.com.br/404"
        image="/og/home.png"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div
          className="absolute inset-0 opacity-[0.026]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute left-1/2 top-20 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <section className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full border border-border/30 bg-card/35 shadow-[0_32px_90px_hsl(0_0%_0%/0.45)] lg:max-w-[440px]">
            <div className="absolute -inset-6 rounded-full border border-border/10" />
            <div className="absolute inset-8 rounded-full border border-border/20" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-foreground/[0.08] via-transparent to-background/55" />
            <img src={logo} alt="Talisson Souza" className="relative z-10 h-16 w-auto opacity-95 sm:h-20" />
            <span className="absolute bottom-16 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/60">
              404
            </span>
          </section>

          <section className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border/35 bg-foreground/[0.035] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              <SearchX className="h-4 w-4" />
              {getText(language, "Caminho nao encontrado", "Path not found")}
            </div>

            <h1 className="text-balance font-serif text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
              {getText(language, "Essa pagina saiu do ar.", "This page is not here.")}
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {getText(
                language,
                "O link pode ter mudado, expirado ou simplesmente nao existir. Em vez de cair numa tela fria, te deixei alguns caminhos seguros para continuar.",
                "The link may have changed, expired or never existed. Instead of a cold error screen, here are safe paths to keep going."
              )}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <Link
                to={homePath}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-border/35 bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <Home className="h-4 w-4" />
                {getText(language, "Voltar para a Home", "Back to Home")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to={contactPath}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-border/35 bg-background/45 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/[0.06]"
              >
                <MessageSquare className="h-4 w-4" />
                {getText(language, "Falar comigo", "Contact me")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 text-sm sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {getText(language, "Voltar uma pagina", "Go back")}
              </button>
              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/35 sm:block" />
              <Link to={articlesPath} className="text-muted-foreground transition-colors hover:text-foreground">
                {getText(language, "Explorar artigos", "Explore articles")}
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
