import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

interface Props {
  onSignIn: () => void;
  loading?: boolean;
}

const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.161.29-.35.68-.481 1a18.27 18.27 0 0 0-5.155 0 12.51 12.51 0 0 0-.49-1 19.86 19.86 0 0 0-3.76 1.37C2.79 8.06 2.05 11.65 2.42 15.18a19.94 19.94 0 0 0 5.99 3.03c.48-.66.91-1.36 1.28-2.1a12.9 12.9 0 0 1-2.02-.98c.17-.13.34-.26.5-.4 3.9 1.8 8.12 1.8 11.98 0 .17.14.34.27.5.4-.65.38-1.33.7-2.03.98.37.74.8 1.44 1.28 2.1a19.9 19.9 0 0 0 6-3.03c.44-4.1-.75-7.66-3.58-10.81ZM9.34 13.45c-1.18 0-2.16-1.08-2.16-2.4 0-1.32.96-2.4 2.16-2.4 1.21 0 2.18 1.09 2.16 2.4 0 1.32-.96 2.4-2.16 2.4Zm5.32 0c-1.18 0-2.16-1.08-2.16-2.4 0-1.32.96-2.4 2.16-2.4 1.21 0 2.18 1.09 2.16 2.4 0 1.32-.95 2.4-2.16 2.4Z"/>
  </svg>
);

const DiscordLoginPrompt = ({ onSignIn, loading }: Props) => {
  const { language } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md p-6 md:p-8"
    >
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
        {getText(language, "Quer participar da discussão?", "Want to join the discussion?")}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {getText(
          language,
          "Faça login com sua conta do Discord para comentar nos artigos. Ao continuar, você também entrará automaticamente na comunidade oficial do Talisson e receberá o cargo Leitor dos Artigos.",
          "Sign in with your Discord account to comment on articles. By continuing, you also automatically join Talisson's official community and receive the Article Reader role.",
        )}
      </p>
      <button
        type="button"
        onClick={onSignIn}
        disabled={loading}
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium bg-[#5865F2] text-white hover:bg-[#4752c4] active:bg-[#3c45a5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={getText(language, "Entrar com Discord", "Sign in with Discord")}
      >
        <DiscordIcon className="w-5 h-5" />
        {loading
          ? getText(language, "Conectando…", "Connecting…")
          : getText(language, "Entrar com Discord", "Sign in with Discord")}
      </button>
    </motion.div>
  );
};

export default DiscordLoginPrompt;
