import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, BriefcaseBusiness, Github, Globe2, Mail, Newspaper, ShieldCheck, Users } from "lucide-react";
import { FaDiscord, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import portrait from "@/assets/talisson-portrait.png";
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";

const ease = [0.16, 1, 0.3, 1] as const;

type IconComponent = ComponentType<{ className?: string }>;

type BioTweetLink = {
  title: string;
  handle: string;
  text: string;
  url: string;
  href: string;
  external: boolean;
  icon?: IconComponent;
  image?: string;
};

const communityAssets = {
  escritorioLogo: "/images/discord/escritorio-logo.png",
  agonLogo: "/images/discord/agon-logo.png",
  dunecoLogo: "/images/discord/duneco-logo.png",
  hytaleLogo: "/images/discord/hytale-logo.gif",
  modsclubLogo: "/images/discord/modsclub-logo.png",
  elixirLogo: "/images/discord/elixir-lab-logo.png",
};

const AvatarSlot = ({ item, large = false }: { item: BioTweetLink; large?: boolean }) => {
  const Icon = item.icon;
  const size = large ? "h-20 w-20" : "h-14 w-14";
  const iconSize = large ? "h-8 w-8" : "h-5 w-5";

  if (item.image) {
    return (
      <span className={`${size} flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.035]`}>
        <img src={item.image} alt="" className="h-full w-full object-cover" loading={large ? "eager" : "lazy"} />
      </span>
    );
  }

  return (
    <span className={`${size} flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white/82`}>
      {Icon && <Icon className={iconSize} />}
    </span>
  );
};

const TweetShell = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.58, delay, ease }}
    className={`relative rounded-[22px] border border-white/10 bg-[#101010] text-white shadow-[0_24px_90px_hsl(0_0%_0%/0.38)] ${className}`}
  >
    {children}
  </motion.article>
);

const BioTweetCard = ({ item, index }: { item: BioTweetLink; index: number }) => {
  const card = (
    <TweetShell delay={index * 0.035} className="h-full p-5 transition-colors duration-300 hover:border-white/18 hover:bg-[#131313] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3.5">
          <AvatarSlot item={item} />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-base font-semibold leading-tight text-white">{item.title}</p>
              <BadgeCheck className="h-4 w-4 shrink-0 fill-[#1d9bf0] text-white" aria-hidden="true" />
            </div>
            <p className="mt-1 truncate text-sm leading-tight text-white/54">@{item.handle}</p>
          </div>
        </div>
        <FaXTwitter className="mt-1 h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
      </div>

      <p className="mt-5 text-[15.5px] leading-[1.6] text-white/90">
        {item.text} <span className="text-white/46">{item.url}</span>
      </p>
    </TweetShell>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.title} className="block h-full">
        {card}
      </a>
    );
  }

  return (
    <Link to={item.href} aria-label={item.title} className="block h-full">
      {card}
    </Link>
  );
};

const Bio = () => {
  const { language } = useTheme();

  const mainTweet = language === "pt"
    ? "Construo sistemas, empresas, conteudo e comunidades para transformar ideias em estruturas que continuam funcionando depois da primeira entrega. Software Engineer, founder e empreendedor, com foco em produto, automacao, infraestrutura e comunidades digitais."
    : "I build systems, companies, content and communities to turn ideas into structures that keep working after the first delivery. Software Engineer, founder and entrepreneur focused on product, automation, infrastructure and digital communities.";

  const primaryLinks: BioTweetLink[] = [
    {
      title: "Portfolio Oficial",
      handle: "talissondev",
      text: getText(
        language,
        "Projetos, servicos, artigos e caminhos oficiais para entender meu trabalho com tecnologia.",
        "Projects, services, articles and official paths to understand my work in technology."
      ),
      url: "talissonsouza.com.br",
      href: "https://www.talissonsouza.com.br",
      external: true,
      icon: Globe2,
    },
    {
      title: "Cheetah Solutions Network",
      handle: "cheetahsolutions",
      text: getText(
        language,
        "Software house para sistemas, automacao, bots, infraestrutura e operacoes digitais.",
        "Software house for systems, automation, bots, infrastructure and digital operations."
      ),
      url: "cheetahsolutions.com.br",
      href: "https://www.cheetahsolutions.com.br",
      external: true,
      image: cheetahLogo,
    },
    {
      title: "Square Cloud",
      handle: "squarecloud",
      text: getText(
        language,
        "Infraestrutura para hospedar aplicacoes, bots e APIs com deploy simples e operacao continua.",
        "Infrastructure to host apps, bots and APIs with simple deploys and continuous operation."
      ),
      url: "squarecloud.app",
      href: "https://squarecloud.app",
      external: true,
      image: squareCloudLogo,
    },
    {
      title: "Newsletter",
      handle: "talissondev",
      text: getText(
        language,
        "Leituras sobre desenvolvimento, carreira, negocios e tecnologia com contexto pratico.",
        "Reads about development, career, business and technology with practical context."
      ),
      url: "newsletter.talissonsouza.com.br",
      href: "https://newsletter.talissonsouza.com.br",
      external: true,
      icon: Newspaper,
    },
    {
      title: getText(language, "Contato Profissional", "Professional Contact"),
      handle: "talissondev",
      text: getText(
        language,
        "Para projetos, parcerias e conversas profissionais, comece pelo contexto.",
        "For projects, partnerships and professional conversations, start with context."
      ),
      url: language === "en" ? "talissonsouza.com.br/en-us/contact" : "talissonsouza.com.br/contato",
      href: language === "en" ? "/en-us/contact" : "/contato",
      external: false,
      icon: Mail,
    },
    {
      title: getText(language, "Artigos e Trilhas", "Articles and Trails"),
      handle: "talissondev",
      text: getText(
        language,
        "Guias sobre programacao, mercado, carreira e decisoes tecnicas sem promessa facil.",
        "Guides on programming, market, career and technical decisions without easy promises."
      ),
      url: language === "en" ? "talissonsouza.com.br/en-us/trails/market-programming" : "talissonsouza.com.br/trilhas/mercado-programacao",
      href: language === "en" ? "/en-us/trails/market-programming" : "/trilhas/mercado-programacao",
      external: false,
      icon: BriefcaseBusiness,
    },
  ];

  const socialLinks: BioTweetLink[] = [
    {
      title: "LinkedIn",
      handle: "talissondevv",
      text: getText(language, "Carreira, projetos, conteudo tecnico e atualizacoes profissionais.", "Career, projects, technical content and professional updates."),
      url: "linkedin.com/in/talissondevv",
      href: "https://linkedin.com/in/talissondevv",
      external: true,
      icon: FaLinkedinIn,
    },
    {
      title: "GitHub",
      handle: "TalinhoDev",
      text: getText(language, "Repositorios, estudos, experimentos e projetos publicos.", "Repositories, studies, experiments and public projects."),
      url: "github.com/TalinhoDev",
      href: "https://github.com/TalinhoDev",
      external: true,
      icon: Github,
    },
    {
      title: "Instagram",
      handle: "talisson.dev",
      text: getText(language, "Bastidores, rotina, projetos e presenca mais direta.", "Behind the scenes, routine, projects and a more direct presence."),
      url: "instagram.com/talisson.dev",
      href: "https://instagram.com/talisson.dev",
      external: true,
      icon: FaInstagram,
    },
    {
      title: "X",
      handle: "talissondev",
      text: getText(language, "Ideias curtas, comentarios e atualizacoes rapidas.", "Short ideas, comments and quick updates."),
      url: "x.com/talissondev",
      href: "https://x.com/talissondev",
      external: true,
      icon: FaXTwitter,
    },
    {
      title: "Discord",
      handle: "talissondev",
      text: getText(language, "Comunidade oficial, conversas e ecossistema em volta dos meus projetos.", "Official community, conversations and the ecosystem around my projects."),
      url: "discord.talissonsouza.com.br",
      href: "https://discord.talissonsouza.com.br",
      external: true,
      icon: FaDiscord,
    },
  ];

  const communityLinks: BioTweetLink[] = [
    {
      title: "Escritorio do Talisson",
      handle: "discord",
      text: getText(language, "Meu servidor oficial para comunidade, projetos e conteudo sobre tecnologia.", "My official server for community, projects and technology content."),
      url: "discord.gg/DzZN6tUJKq",
      href: "https://discord.gg/DzZN6tUJKq",
      external: true,
      image: communityAssets.escritorioLogo,
    },
    {
      title: "AGON by AOC",
      handle: "discord",
      text: getText(language, "Experiencia como ex moderador em comunidade gamer oficial no Brasil.", "Experience as a former moderator in an official Brazilian gamer community."),
      url: "discord.gg/yBy8Vu79J3",
      href: "https://discord.gg/yBy8Vu79J3",
      external: true,
      image: communityAssets.agonLogo,
    },
    {
      title: "ModsClub",
      handle: "discord",
      text: getText(language, "Comunidade para moderadores, administradores e donos de servidores brasileiros.", "Community for moderators, administrators and Brazilian server owners."),
      url: "discord.gg/uuHdJUNYQs",
      href: "https://discord.gg/uuHdJUNYQs",
      external: true,
      image: communityAssets.modsclubLogo,
    },
    {
      title: "Hytale Brasil",
      handle: "discord",
      text: getText(language, "Comunidade brasileira dedicada a Hytale, estrutura interna e organizacao.", "Brazilian community dedicated to Hytale, internal structure and organization."),
      url: "discord.gg/x2SvJd2NsZ",
      href: "https://discord.gg/x2SvJd2NsZ",
      external: true,
      image: communityAssets.hytaleLogo,
    },
    {
      title: "DuneCo Dungeons",
      handle: "discord",
      text: getText(language, "Ecossistema para marcas, criadores e projetos que exploram comunidades no Discord.", "Ecosystem for brands, creators and projects exploring Discord communities."),
      url: "discord.gg/SyEnrAknqA",
      href: "https://discord.gg/SyEnrAknqA",
      external: true,
      image: communityAssets.dunecoLogo,
    },
    {
      title: "Elixir Lab",
      handle: "discord",
      text: getText(language, "Comunidade de entrada para Discord, bots, jogos e suporte no ecossistema brasileiro.", "Gateway community for Discord, bots, games and support in the Brazilian ecosystem."),
      url: "discord.gg/elixirlab",
      href: "https://discord.gg/elixirlab",
      external: true,
      image: communityAssets.elixirLogo,
    },
  ];

  const sameAs = [
    "https://linkedin.com/in/talissondevv",
    "https://github.com/TalinhoDev",
    "https://instagram.com/talisson.dev",
    "https://x.com/talissondev",
    "https://discord.talissonsouza.com.br",
  ];

  return (
    <Layout withPadding={false} showChrome={false}>
      <SEO
        title="Bio Oficial | Talisson Souza"
        description={getText(
          language,
          "Pagina oficial de bio de Talisson Souza com links, projetos, redes sociais e canais profissionais.",
          "Official bio page for Talisson Souza with links, projects, social media and professional channels."
        )}
        canonical="https://bio.talissonsouza.com.br"
        image="/og/home.png"
        keywords={["bio Talisson Souza", "Talisson Souza links", "Cheetah Solutions Network", "Square Cloud"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: "Bio Oficial | Talisson Souza",
          url: "https://bio.talissonsouza.com.br",
          mainEntity: {
            "@type": "Person",
            name: "Talisson Souza",
            jobTitle: "Software Engineer",
            url: "https://www.talissonsouza.com.br",
            sameAs,
          },
        }}
      />

      <main className="relative min-h-screen overflow-hidden bg-background px-5 py-10 text-foreground sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.006]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-12 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-foreground/[0.026] blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5">
          <TweetShell className="mx-auto w-full max-w-[760px] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.035] sm:h-24 sm:w-24">
                  <img
                    src={portrait}
                    alt="Talisson Souza"
                    className="h-full w-full object-cover object-[58%_24%]"
                    loading="eager"
                    fetchPriority="high"
                  />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h1 className="truncate text-2xl font-semibold leading-tight text-white sm:text-3xl">Talisson Souza</h1>
                    <BadgeCheck className="h-5 w-5 shrink-0 fill-[#1d9bf0] text-white sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-base leading-tight text-white/55 sm:text-lg">@talissondev</p>
                </div>
              </div>
              <FaXTwitter className="mt-1 h-6 w-6 shrink-0 text-white/52" aria-hidden="true" />
            </div>

            <p className="mt-7 text-[18px] leading-[1.62] text-white/92 sm:text-[21px]">
              {mainTweet} <span className="text-white/46">talissonsouza.com.br/bio</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                getText(language, "software", "software"),
                getText(language, "automacao", "automation"),
                getText(language, "infraestrutura", "infrastructure"),
                getText(language, "comunidades", "communities"),
              ].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/58">
                  {tag}
                </span>
              ))}
            </div>
          </TweetShell>

          <section className="mx-auto w-full max-w-[760px]">
            <p className="mb-3 px-2 text-[11px] uppercase tracking-[0.28em] text-white/40">
              {getText(language, "links principais", "main links")}
            </p>
            <div className="grid gap-3">
              {primaryLinks.map((item, index) => (
                <BioTweetCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-[760px]">
            <p className="mb-3 px-2 text-[11px] uppercase tracking-[0.28em] text-white/40">
              {getText(language, "redes", "social")}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {socialLinks.map((item, index) => (
                <BioTweetCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-[760px]">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                {getText(language, "comunidades e trust & safety", "communities and trust & safety")}
              </p>
              <span className="inline-flex items-center gap-2 text-xs text-white/44">
                <ShieldCheck className="h-3.5 w-3.5" />
                {getText(language, "Discord Community Manager", "Discord Community Manager")}
                <Users className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {communityLinks.map((item, index) => (
                <BioTweetCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Bio;
