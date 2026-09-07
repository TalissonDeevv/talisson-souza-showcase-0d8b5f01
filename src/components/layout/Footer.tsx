import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, ExternalLink, Music, Pause, Play } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import FooterWeather from "@/components/ui/FooterWeather";
import { contactEmails, mailtoHref } from "@/data/contact-channels";
import signatureReduzida from "@/assets/signature-reduzida.png";

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const homePath = language === "en" ? "/en-us" : "/";
  const root = language === "en" ? "/en-us" : "";

  const mainLinks = [
    { name: getText(language, "Sobre", "About"), path: `${root}/sobre`.replace("/en-us/sobre", "/en-us/about") },
    { name: getText(language, "Carreira", "Career"), path: `${root}/carreira`.replace("/en-us/carreira", "/en-us/career") },
    { name: getText(language, "Serviços", "Services"), path: `${root}/servicos`.replace("/en-us/servicos", "/en-us/services") },
    { name: "Changelogs", path: language === "en" ? "/en-us/changelogs" : "/changelogs" },
    { name: getText(language, "Parceiros", "Partners"), path: language === "en" ? "/en-us/affiliate-program" : "/seja-afiliado" },
    { name: getText(language, "Livro", "Book"), path: `${root}/livro`.replace("/en-us/livro", "/en-us/book") },
    { name: getText(language, "Políticas", "Policies"), path: `${root}/politicas`.replace("/en-us/politicas", "/en-us/policies") },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/TalinhoDev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho" },
    { name: "YouTube", href: "https://www.youtube.com/TalissonSouza" },
  ];

  const handlePlayPause = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/congratulations.mp3");
      audioRef.current.volume = 0.35;
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    audioRef.current.play();
    setIsPlaying(true);
  }, [isPlaying]);

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-border/25 bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.006]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-44 w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.015] blur-3xl" />

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="border-b border-border/20 py-6">
          <Link to={homePath} className="mb-5 block w-[160px] text-foreground/90 transition-opacity hover:opacity-75 sm:w-[220px]">
            <span className="sr-only">Talisson Souza</span>
            <img
              src={signatureReduzida}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="site-brand-signature h-auto w-full object-contain"
              loading="lazy"
            />
          </Link>

          <div>
            <p className="max-w-2xl font-serif text-2xl leading-[1.08] text-foreground sm:text-3xl">
              {getText(language, "Tecnologia. Sistemas. Decisões.", "Technology. Systems. Decisions.")}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {getText(
                language,
                "Um site direto para conhecer meu trabalho, minha história e meus critérios profissionais.",
                "A direct site to understand my work, my story and my professional criteria."
              )}
            </p>
          </div>
        </div>

        <div className="grid gap-5 border-b border-border/20 py-5 lg:grid-cols-[1fr_auto] lg:items-start">
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap" aria-label={getText(language, "Links principais", "Main links")}>
            {mainLinks.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3 border-b border-border/20 py-4 md:grid-cols-2 md:items-center">
          <motion.button
            onClick={handlePlayPause}
            whileTap={{ scale: 0.97 }}
            className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-border/35 bg-background/35 px-4 py-2.5 text-xs text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground md:justify-start"
          >
            <Music className="h-3.5 w-3.5" />
            <span>Congratulations</span>
            <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-foreground/5">
              {isPlaying ? <Pause className="h-2.5 w-2.5" /> : <Play className="ml-px h-2.5 w-2.5" />}
            </span>
          </motion.button>

          <div className="flex flex-col gap-2 md:ml-auto md:items-end">
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7445971461145677824"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-full items-center justify-center rounded-full bg-[#0A66C2] px-[7px] text-center text-sm font-semibold text-[#fff] transition-colors hover:bg-[#0958a8] sm:w-[200px]"
            >
              {getText(language, "Assinar no LinkedIn", "Subscribe on LinkedIn")}
            </a>
            <a
              href={mailtoHref(contactEmails.newsletter, "Newsletter Talisson Souza")}
              className="break-all text-center text-xs text-muted-foreground transition-colors hover:text-foreground md:text-right"
            >
              {contactEmails.newsletter}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4 text-[11px] text-muted-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Talisson Souza. {getText(language, "Construído para durar.", "Built to last.")}</p>
          <div className="flex items-center gap-3">
            <FooterWeather />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-muted-foreground/60 transition-colors hover:border-border/60 hover:text-foreground"
              aria-label={getText(language, "Voltar ao topo", "Back to top")}
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
