import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
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
import rocketseatLogo from "@/assets/logos/rocketseat.png";
import splendoriLogo from "@/assets/logos/splendori.png";

const ease = [0.16, 1, 0.3, 1] as const;

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/talissondevv", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/TalinhoDev", icon: Github },
  { label: "Instagram", href: "https://instagram.com/talisson.dev", icon: FaInstagram },
  { label: "Discord", href: "https://discord.talissonsouza.com.br", icon: FaDiscord },
  { label: "X", href: "https://x.com/talissondev", icon: FaXTwitter },
  { label: "Contato", href: "/contato", icon: Mail, internal: true },
];

const brandMarks = [
  { name: "Cheetah Solutions Network", logo: cheetahLogo },
  { name: "Square Cloud", logo: squareCloudLogo },
  { name: "Rocketseat", logo: rocketseatLogo },
  { name: "Splendori", logo: splendoriLogo },
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
  const isEnglish = language === "en";

  const navItems = [
    { label: getText(language, "Site", "Website"), href: isEnglish ? "/en-us" : "/" },
    { label: getText(language, "Sobre", "About"), href: isEnglish ? "/en-us/about" : "/sobre" },
    { label: getText(language, "Artigos", "Articles"), href: isEnglish ? "/en-us/articles" : "/artigos" },
    { label: getText(language, "Contato", "Contact"), href: isEnglish ? "/en-us/contact" : "/contato" },
  ];

  const quickLinks = [
    {
      label: "Website",
      description: getText(language, "Site principal e caminhos oficiais.", "Main website and official paths."),
      href: "https://www.talissonsouza.com.br",
      icon: Globe2,
      external: true,
    },
    {
      label: "Newsletter",
      description: getText(language, "Leituras e publicações profissionais.", "Professional readings and publications."),
      href: "https://newsletter.talissonsouza.com.br",
      icon: Newspaper,
      external: true,
    },
    {
      label: "Cheetah Solutions",
      description: getText(language, "Software, automações e infraestrutura.", "Software, automations and infrastructure."),
      href: "https://www.cheetahsolutions.com.br",
      icon: BriefcaseBusiness,
      external: true,
    },
  ];

  const communities = [
    {
      name: "Escritório do Talisson",
      role: getText(language, "Comunidade oficial", "Official community"),
      logo: communityAssets.escritorioLogo,
      href: "https://discord.gg/DzZN6tUJKq",
    },
    {
      name: "AGON by AOC",
      role: getText(language, "Ex Moderador", "Former Moderator"),
      logo: communityAssets.agonLogo,
      href: "https://discord.gg/yBy8Vu79J3",
    },
    {
      name: "DuneCo Dungeons",
      role: getText(language, "Criador verificado", "Verified Creator"),
      logo: communityAssets.dunecoLogo,
      href: "https://discord.gg/SyEnrAknqA",
    },
    {
      name: "Hytale Brasil",
      role: getText(language, "Desenvolvedor interno", "Internal Developer"),
      logo: communityAssets.hytaleLogo,
      href: "https://discord.gg/x2SvJd2NsZ",
    },
    {
      name: "ModsClub",
      role: getText(language, "Especialista em comunidades", "Community Specialist"),
      logo: communityAssets.modsclubLogo,
      href: "https://discord.gg/uuHdJUNYQs",
    },
    {
      name: "Elixir Lab",
      role: getText(language, "Ex Moderador", "Former Moderator"),
      logo: communityAssets.elixirLogo,
      href: "https://discord.gg/elixirlab",
    },
  ];

  return (
    <Layout withPadding={false} showChrome={false}>
      <SEO
        title="Bio Oficial | Talisson Souza"
        description={getText(
          language,
          "Página oficial de bio de Talisson Souza com links, projetos, redes sociais, comunidades e canais profissionais.",
          "Official bio page for Talisson Souza with links, projects, social media, communities and professional channels."
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
            sameAs: socialLinks.filter((item) => !item.internal).map((item) => item.href),
          },
        }}
      />

      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.026]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-8 sm:px-8 lg:py-10">
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6"
          >
            <Link to={isEnglish ? "/en-us" : "/"} className="text-sm font-semibold text-foreground">
              Talisson Souza
            </Link>

            <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="transition-colors duration-300 hover:text-foreground">
                  {item.label}
                </Link>
              ))}
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
                {isEnglish ? "EN" : "PT"}
              </span>
            </nav>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-start pt-5 pb-8 sm:pt-7"
          >
            <div className="w-full">
              <div className="flex flex-col items-start justify-center gap-0 text-left">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border/35 bg-card/50 shadow-[0_26px_70px_hsl(0_0%_0%/0.36)] sm:h-16 sm:w-16">
                  <img
                    src={portrait}
                    alt="Talisson Souza"
                    className="h-full w-full object-cover object-[50%_18%] grayscale"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-75">
                  {brandMarks.map((brand) => (
                    <img
                      key={brand.name}
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-6 w-auto max-w-[118px] object-contain grayscale"
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className="sr-only">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.36em] text-muted-foreground/70">
                    {getText(language, "Bio oficial", "Official bio")}
                  </p>

                  <h1 className="whitespace-nowrap font-serif text-[clamp(2.25rem,7.2vw,4.75rem)] leading-[0.9] tracking-[-0.02em] text-foreground">
                    Talisson Souza
                  </h1>

                  <p className="mt-4 whitespace-nowrap font-mono text-[clamp(0.56rem,1.4vw,0.76rem)] uppercase tracking-[clamp(0.1em,0.55vw,0.22em)] text-muted-foreground">
                    Software Engineer · Founder · Entrepreneur
                  </p>
                </div>
              </div>

              <div className="mt-6 h-px w-24 bg-foreground/65" />

              <div className="mt-6 max-w-3xl space-y-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p className="max-w-3xl font-serif text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.14] tracking-[-0.01em] text-foreground">
                  {getText(
                    language,
                    "Construindo software, empresas e conteúdo que continuam fazendo sentido depois da primeira entrega.",
                    "Building software, companies and content that keep making sense after the first delivery."
                  )}
                </p>

                <p>
                  {getText(
                    language,
                    "Minha atuação passa por engenharia de software, arquitetura, automações, produtos digitais e estratégia. Gosto de entender o problema com calma e transformar decisões confusas em sistemas claros, úteis e sustentáveis.",
                    "My work moves through software engineering, architecture, automations, digital products and strategy. I like understanding the problem carefully and turning messy decisions into clear, useful and sustainable systems."
                  )}
                </p>

                <div className="flex flex-wrap items-center gap-7 pt-1">
                  {socialLinks.map(({ label, href, icon: Icon, internal }) => {
                    const className =
                      "text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground";

                    if (internal) {
                      return (
                        <Link key={label} to={isEnglish ? "/en-us/contact" : href} aria-label={label} className={className}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </Link>
                      );
                    }

                    return (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="hidden">
              <div className="mx-auto max-w-3xl border-y border-border/20 py-6">
                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  {getText(language, "Canais oficiais", "Official channels")}
                </p>

                <div className="space-y-1">
                  {quickLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 py-3 text-sm transition-colors duration-300 hover:text-foreground"
                      >
                        <span className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                          <Icon className="h-4 w-4" />
                          <span>{link.label}</span>
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-7 border-t border-border/15 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">Trust & Safety</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {getText(
                      language,
                      "Comunidades, moderação e operações digitais também fazem parte da forma como eu construo.",
                      "Communities, moderation and digital operations are also part of the way I build."
                    )}
                  </p>
                </div>
              </div>
            </aside>
          </motion.section>
        </div>

        <section className="relative z-10 border-t border-border/20 bg-background/85 py-12">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/70">
                    {getText(language, "Empresas", "Companies")}
                  </p>
                  <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Ecossistema profissional.", "Professional ecosystem.")}
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {getText(
                      language,
                      "Algumas frentes aparecem como empresa, outras como parceria, conteúdo ou produto. Todas fazem parte do mesmo caminho: construir tecnologia com consistência, reputação e visão de longo prazo.",
                      "Some fronts appear as companies, others as partnerships, content or products. They all belong to the same path: building technology with consistency, reputation and long-term vision."
                    )}
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {[
                      getText(language, "Sistemas", "Systems"),
                      getText(language, "Comunidades", "Communities"),
                      getText(language, "Conteúdo", "Content"),
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/30 bg-foreground/[0.035] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="relative overflow-hidden border-y border-border/15 py-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.58, ease }}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0%, transparent 8%, black 16%, black 84%, transparent 92%, transparent 100%)",
                    maskImage:
                      "linear-gradient(90deg, transparent 0%, transparent 8%, black 16%, black 84%, transparent 92%, transparent 100%)",
                  }}
                >
                  <motion.div
                    className="flex w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                  >
                    {[...brandMarks, ...brandMarks].map((brand, index) => (
                      <div
                        key={`${brand.name}-${index}`}
                        className="flex min-h-16 w-[190px] shrink-0 items-center justify-center px-7 sm:w-[220px]"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-9 w-auto max-w-[150px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative z-10 border-t border-border/20 bg-background/80 py-16 md:hidden">
          <div className="mx-auto grid w-full max-w-3xl gap-4 px-6 sm:px-8">
            <ScrollReveal>
              <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/70">
                {getText(language, "Para chegar rápido", "Quick paths")}
              </p>
            </ScrollReveal>

            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.52, delay: index * 0.06, ease }}
                  className="group flex items-center justify-between gap-5 border-b border-border/20 py-5 text-left transition-colors duration-300 hover:border-foreground/30"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card/45 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-base font-medium text-foreground">{link.label}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{link.description}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </motion.a>
              );
            })}
          </div>
        </section>

        <section className="relative z-10 border-t border-border/20 bg-background py-16 lg:py-20">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-muted-foreground/70">
                    Trust & Safety
                  </p>
                  <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Comunidades também fazem parte do trabalho.", "Communities are part of the work too.")}
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {getText(
                      language,
                      "Também atuo como especialista em Trust & Safety e gerente de comunidades no Discord. Isso envolve moderação, processos, prevenção de abuso, resposta a incidentes, automações e cuidado com ambientes digitais que precisam crescer sem perder controle.",
                      "I also work as a Trust & Safety specialist and Discord community manager. That includes moderation, processes, abuse prevention, incident response, automations and care for digital spaces that need to grow without losing control."
                    )}
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-foreground/[0.035] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Trust & Safety
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-foreground/[0.035] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      Discord
                    </span>
                  </div>
                </div>

                <div className="grid gap-x-6 gap-y-1 border-y border-border/15 py-5 sm:grid-cols-2 lg:grid-cols-3">
                  {communities.map((community, index) => (
                    <motion.a
                      key={community.name}
                      href={community.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: 0.48, delay: index * 0.04, ease }}
                      className="group flex items-center gap-4 border-b border-border/15 py-4 transition-colors duration-300 hover:border-foreground/25 lg:[&:nth-last-child(-n+3)]:border-b-0"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/25 bg-card/45">
                        <img src={community.logo} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">{community.name}</span>
                        <span className="mt-1 block truncate text-xs uppercase tracking-[0.14em] text-muted-foreground/70">
                          {community.role}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Bio;
