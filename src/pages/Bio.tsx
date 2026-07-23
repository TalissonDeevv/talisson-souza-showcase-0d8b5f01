import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Github,
  Globe2,
  Mail,
  Newspaper,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FaDiscord, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import portrait from "@/assets/talisson-portrait.png";
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";

const ease = [0.16, 1, 0.3, 1] as const;

const primaryLinks = [
  {
    label: "Website",
    href: "https://www.talissonsouza.com.br",
    icon: Globe2,
    external: true,
  },
  {
    label: "Newsletter",
    href: "https://newsletter.talissonsouza.com.br",
    icon: Newspaper,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/talissondevv",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/TalinhoDev",
    icon: Github,
    external: true,
  },
  {
    label: "Contato",
    href: "/contato",
    icon: Mail,
    external: false,
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/talissondevv", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/TalinhoDev", icon: Github },
  { label: "Instagram", href: "https://instagram.com/talisson.dev", icon: FaInstagram },
  { label: "Discord", href: "https://discord.talissonsouza.com.br", icon: FaDiscord },
  { label: "X", href: "https://x.com/talissondev", icon: FaXTwitter },
];

const communityAssets = {
  escritorioLogo: "/images/discord/escritorio-logo.png",
  agonLogo: "/images/discord/agon-logo.png",
  dunecoLogo: "/images/discord/duneco-logo.png",
  hytaleLogo: "/images/discord/hytale-logo.gif",
  modsclubLogo: "/images/discord/modsclub-logo.png",
  elixirLogo: "/images/discord/elixir-lab-logo.png",
};

const Bio = () => {
  const { language } = useTheme();

  const projects = [
    {
      title: "Cheetah Solutions Network",
      description: getText(
        language,
        "Software house especializada em sistemas, automação e infraestrutura para operações digitais.",
        "Software house focused on systems, automation and infrastructure for digital operations."
      ),
      href: "https://www.cheetahsolutions.com.br",
      external: true,
      visual: (
        <img
          src={cheetahLogo}
          alt=""
          className="h-9 w-auto max-w-[170px] object-contain opacity-85"
          loading="lazy"
        />
      ),
    },
    {
      title: "Square Cloud",
      description: getText(
        language,
        "Infraestrutura para hospedar aplicações, bots e APIs com deploy simples e operação contínua.",
        "Infrastructure to host applications, bots and APIs with simple deploys and continuous operation."
      ),
      href: "https://squarecloud.app",
      external: true,
      visual: (
        <img
          src={squareCloudLogo}
          alt=""
          className="h-10 w-auto max-w-[160px] object-contain opacity-85"
          loading="lazy"
        />
      ),
    },
    {
      title: getText(language, "Artigos", "Articles"),
      description: getText(
        language,
        "Guias sobre desenvolvimento, negócios, carreira e tecnologia escritos com aplicação prática.",
        "Guides on development, business, career and technology written with practical use in mind."
      ),
      href: language === "en" ? "/en-us/trails/market-programming" : "/trilhas/mercado-programacao",
      external: false,
      visual: (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/35 bg-foreground/[0.04]">
          <Newspaper className="h-5 w-5 text-foreground/75" />
        </div>
      ),
    },
  ];

  const communities = [
    {
      name: "Escritório do Talisson",
      role: getText(language, "Proprietário", "Owner"),
      description: getText(
        language,
        "Espaço oficial onde concentro comunidade, projetos e conteúdo sobre tecnologia e negócios.",
        "Official space for my community, projects and content about technology and business."
      ),
      logo: communityAssets.escritorioLogo,
      href: "https://discord.gg/DzZN6tUJKq",
    },
    {
      name: "AGON by AOC",
      role: getText(language, "Ex Moderador", "Former Moderator"),
      description: getText(
        language,
        "Servidor oficial da AGON by AOC no Discord Brasil, com foco em performance e comunidade gamer.",
        "Official AGON by AOC server on Discord Brazil, focused on performance and gamer community."
      ),
      logo: communityAssets.agonLogo,
      href: "https://discord.gg/yBy8Vu79J3",
    },
    {
      name: "DuneCo Dungeons",
      role: getText(language, "Criador Independente Verificado", "Verified Independent Creator"),
      description: getText(
        language,
        "Ecossistema para marcas, criadores e projetos que querem explorar comunidades no Discord.",
        "Ecosystem for brands, creators and projects exploring Discord communities."
      ),
      logo: communityAssets.dunecoLogo,
      href: "https://discord.gg/SyEnrAknqA",
    },
    {
      name: "Hytale Brasil",
      role: getText(language, "Desenvolvedor Interno", "Internal Developer"),
      description: getText(
        language,
        "Comunidade brasileira dedicada a Hytale, reunindo jogadores, notícias e estrutura interna.",
        "Brazilian Hytale community bringing players, news and internal structure together."
      ),
      logo: communityAssets.hytaleLogo,
      href: "https://discord.gg/x2SvJd2NsZ",
    },
    {
      name: "ModsClub",
      role: getText(language, "Especialista em Comunidades", "Community Specialist"),
      description: getText(
        language,
        "Comunidade para moderadores, administradores e proprietários de comunidades brasileiras.",
        "Community for moderators, administrators and owners of Brazilian communities."
      ),
      logo: communityAssets.modsclubLogo,
      href: "https://discord.gg/uuHdJUNYQs",
    },
    {
      name: "Elixir Lab",
      role: getText(language, "Ex Moderador", "Former Moderator"),
      description: getText(
        language,
        "Comunidade de entrada para Discord, bots, jogos e suporte no ecossistema brasileiro.",
        "Gateway community for Discord, bots, games and support in the Brazilian ecosystem."
      ),
      logo: communityAssets.elixirLogo,
      href: "https://discord.gg/elixirlab",
    },
  ];

  const renderLink = (link: (typeof primaryLinks)[number], className: string) => {
    const Icon = link.icon;
    const content = (
      <>
        <Icon className="h-4 w-4" />
        <span>{link.label}</span>
        <ArrowRight className="ml-auto h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
      </>
    );

    if (link.external) {
      return (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      );
    }

    return (
      <Link key={link.label} to={link.href} className={className}>
        {content}
      </Link>
    );
  };

  return (
    <Layout withPadding={false} showChrome={false}>
      <SEO
        title="Bio Oficial | Talisson Souza"
        description={getText(
          language,
          "Página oficial de bio de Talisson Souza com links, projetos, redes sociais e canais profissionais.",
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
            sameAs: socialLinks.map((item) => item.href),
          },
        }}
      />

      <section className="relative min-h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-20 pt-28 lg:px-8 lg:pt-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
            >
              <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/75">
                {getText(language, "Bio oficial", "Official bio")}
              </p>

              <h1 className="text-balance font-serif text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
                Talisson Souza
              </h1>

              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {["Software Engineer", "Founder", "Entrepreneur"].map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-border/35 bg-foreground/[0.035] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                {getText(
                  language,
                  "Construindo empresas, software e conteúdo sobre tecnologia com clareza, responsabilidade e visão de longo prazo.",
                  "Building companies, software and technology content with clarity, responsibility and long-term thinking."
                )}
              </p>

              <motion.article
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.16, ease }}
                className="relative mx-auto mt-8 max-w-xl overflow-hidden rounded-2xl border border-border/35 bg-card/45 text-left shadow-[0_18px_70px_hsl(0_0%_0%/0.22)] backdrop-blur-sm lg:mx-0"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.018]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-border/35 bg-background">
                      <img
                        src={portrait}
                        alt=""
                        className="h-full w-full object-cover object-[50%_24%] grayscale"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-semibold text-foreground">Talisson Souza</p>
                        <BadgeCheck className="h-4 w-4 text-foreground/70" />
                      </div>
                      <p className="text-xs text-muted-foreground">@talisson.dev</p>
                    </div>
                    <span className="ml-auto rounded-full border border-border/30 bg-background/45 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {getText(language, "fixado", "pinned")}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                    <p>
                      {getText(
                        language,
                        "Eu gosto de construir coisas que continuam fazendo sentido depois da empolgação inicial.",
                        "I like building things that still make sense after the first wave of excitement fades."
                      )}
                    </p>
                    <p>
                      {getText(
                        language,
                        "Software, empresas, conteúdo e comunidades acabam passando pelo mesmo filtro: entender o problema, organizar as decisões e cuidar do que permanece.",
                        "Software, companies, content and communities end up going through the same filter: understand the problem, organize decisions and care about what remains."
                      )}
                    </p>
                  </div>
                </div>
              </motion.article>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {primaryLinks.map((link) =>
                  renderLink(
                    link,
                    "group inline-flex h-14 items-center gap-3 rounded-2xl border border-border/35 bg-background/45 px-5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/[0.06]"
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="relative mx-auto w-full max-w-[360px] lg:max-w-[430px]"
            >
              <div className="absolute -inset-8 rounded-full border border-border/10" />
              <div className="absolute -inset-3 rounded-full border border-border/20" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-foreground/[0.08] via-transparent to-transparent opacity-70 blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-full border border-border/35 bg-card/45 shadow-[0_30px_90px_hsl(0_0%_0%/0.45)]">
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />
                <img
                  src={portrait}
                  alt="Talisson Souza"
                  className="relative h-full w-full object-cover object-[50%_20%] grayscale"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/70 via-background/25 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/20 bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/70">
                  {getText(language, "Projetos principais", "Main projects")}
                </p>
                <h2 className="max-w-2xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                  {getText(language, "Caminhos oficiais para conhecer meu trabalho.", "Official paths to understand my work.")}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  "Poucos links, escolhidos com intenção. O suficiente para chegar rápido no que importa.",
                  "A few intentional links. Enough to reach what matters quickly."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => {
              const card = (
                <motion.article
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.58, delay: index * 0.08, ease }}
                  whileHover={{ y: -5 }}
                  className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-border/35 bg-card/55 p-6 transition-colors duration-300 hover:border-foreground/20"
                >
                  <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-10 flex min-h-12 items-center justify-between gap-4">
                      {project.visual}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-2xl text-foreground">{project.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        {getText(language, "Conhecer", "Open")}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );

              if (project.external) {
                return (
                  <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                );
              }

              return (
                <Link key={project.title} to={project.href}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/70">
                  Trust & Safety
                </p>
                <h2 className="max-w-2xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                  {getText(
                    language,
                    "Comunidades também fazem parte do meu trabalho.",
                    "Communities are also part of my work."
                  )}
                </h2>
              </div>
              <div className="rounded-2xl border border-border/25 bg-card/35 p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-foreground/[0.035] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {getText(language, "Especialista em Trust & Safety", "Trust & Safety Specialist")}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-foreground/[0.035] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    {getText(language, "Gerente de Comunidade no Discord", "Discord Community Manager")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "Além de software, atuo com segurança, moderação, processos e organização de comunidades digitais. Essa experiência aparece em servidores, equipes de moderação, automações, prevenção de abuso, resposta a incidentes e construção de ambientes mais saudáveis.",
                    "Beyond software, I work with safety, moderation, processes and digital community organization. This experience appears in servers, moderation teams, automations, abuse prevention, incident response and healthier community environments."
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((community, index) => (
              <motion.a
                key={community.name}
                href={community.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.52, delay: index * 0.05, ease }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/45 p-5 transition-colors duration-300 hover:border-foreground/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/25 bg-background/45">
                    <img
                      src={community.logo}
                      alt=""
                      className="h-9 w-9 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg leading-tight text-foreground">{community.name}</h3>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
                      {community.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {community.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/70">
                {getText(language, "Redes sociais", "Social")}
              </p>
              <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
                {getText(language, "Onde acompanhar.", "Where to follow.")}
              </h2>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/35 bg-foreground/[0.035] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/[0.07] hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/20 bg-background py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-border/25 bg-card/35 px-6 py-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
                {getText(language, "Contato direto", "Direct contact")}
              </p>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                {getText(
                  language,
                  "Para projetos, parcerias e conversas profissionais, comece pelo contexto.",
                  "For projects, partnerships and professional conversations, start with context."
                )}
              </p>
            </div>
            <Link
              to={language === "en" ? "/en-us/contact" : "/contato"}
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-border/35 bg-background/45 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/[0.06]"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              {getText(language, "Conversar", "Contact")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bio;
