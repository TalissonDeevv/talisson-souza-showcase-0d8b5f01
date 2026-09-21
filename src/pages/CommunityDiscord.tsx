import { ArrowRight, ArrowUpRight, Bot, GraduationCap, Handshake, LifeBuoy, LockKeyhole, MessageCircle, Network, Search, ShieldCheck, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";
import CommunityShowcase, { type CommunityShowcaseItem } from "@/components/services/CommunityShowcase";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { budgetFormUrl } from "@/data/contact-channels";

const discordImages = {
  agonLogo: "/images/discord/agon-logo.png",
  agonBanner: "/images/discord/agon-banner.png",
  elixirLogo: "/images/discord/elixir-lab-logo.png",
  elixirBanner: "/images/discord/elixir-lab-banner.png",
  dunecoLogo: "/images/discord/duneco-logo.png",
  dunecoBanner: "/images/discord/duneco-banner.png",
  bpsLogo: "/images/discord/bps-logo.gif",
  bpsBanner: "/images/discord/bps-banner.png",
  epfLogo: "/images/discord/epf-logo.png",
  epfBanner: "/images/discord/epf-banner.png",
};

const CommunityDiscord = () => {
  const { language } = useTheme();
  const pt = language === "pt";
  const botsPath = pt ? "/servicos/bot-development" : "/en-us/services/bot-development";
  const contactPath = pt ? "/contato" : "/en-us/contact";

  const areas = pt
    ? [
        { icon: Users, title: "Administração", text: "Estruturação da operação, organização da equipe, responsabilidades, processos internos e acompanhamento da comunidade." },
        { icon: ShieldCheck, title: "Moderação", text: "Aplicação de regras, análise de denúncias, mediação de conflitos e suporte para decisões consistentes." },
        { icon: GraduationCap, title: "Equipe e treinamento", text: "Recrutamento, onboarding, treinamento e procedimentos para que novos moderadores entrem com contexto." },
        { icon: LockKeyhole, title: "Segurança", text: "Revisão de permissões, prevenção de raids e abusos, ferramentas e procedimentos para incidentes." },
        { icon: Network, title: "Estrutura", text: "Organização de canais, cargos, permissões, tickets, fluxos internos e documentação operacional." },
        { icon: MessageCircle, title: "Engajamento", text: "Planejamento de eventos e iniciativas que respondam ao comportamento real da comunidade, sem forçar atividade artificial." },
        { icon: Bot, title: "Automação", text: "Bots e automações para logs, tickets, moderação e tarefas repetitivas quando tecnologia realmente ajuda." },
      ]
    : [
        { icon: Users, title: "Administration", text: "Operational structure, team organization, responsibilities, internal processes and community follow-up." },
        { icon: ShieldCheck, title: "Moderation", text: "Rule enforcement, report review, conflict mediation and support for consistent decisions." },
        { icon: GraduationCap, title: "Team and training", text: "Recruitment, onboarding, training and procedures so new moderators join with context." },
        { icon: LockKeyhole, title: "Security", text: "Permission reviews, raid and abuse prevention, tooling and incident procedures." },
        { icon: Network, title: "Structure", text: "Organization of channels, roles, permissions, tickets, internal flows and operational documentation." },
        { icon: MessageCircle, title: "Engagement", text: "Events and participation initiatives grounded in the community's real behavior, without forced activity." },
        { icon: Bot, title: "Automation", text: "Bots and automations for logs, tickets, moderation and repetitive tasks when technology is actually useful." },
      ];

  const problems = pt
    ? ["conflitos entre membros e denúncias sem fluxo claro", "spam, raids e contas mal-intencionadas", "moderadores respondendo de formas diferentes", "permissões, canais e tickets difíceis de acompanhar", "equipe sobrecarregada, sem documentação ou treinamento", "baixa participação, crises internas e comunicação ruim"]
    : ["member conflicts and reports without a clear flow", "spam, raids and bad-faith accounts", "moderators responding in different ways", "permissions, channels and tickets that are hard to follow", "an overloaded team without documentation or training", "low participation, internal crises and poor communication"];

  const showcaseItems: CommunityShowcaseItem[] = pt
    ? [
        { name: "AGON by AOC", role: "Ex-Supervisor de Conteúdo", status: "Experiência anterior", context: "Comunidade de marca", description: "Atuei como Supervisor de Conteúdo na comunidade da AGON by AOC, marca global de monitores e periféricos gamer da AOC, com linhas voltadas de jogadores casuais a atletas de esports. A comunidade era administrada pela Mynexis, agência especializada em gestão de comunidades e marketing digital que também administra os servidores oficiais da LOUD e do Brancoala. Minha experiência foi específica nessa operação e não representa vínculo empregatício com essas marcas.", logo: discordImages.agonLogo, banner: discordImages.agonBanner, link: "https://discord.gg/McePEZx3hk", cta: "Visitar comunidade", featured: true },
        { name: "Elixir Lab", role: "Ex-Moderador", status: "Experiência anterior", context: "Comunidade brasileira", description: "Atuei anteriormente como moderador do Elixir Lab, uma das maiores comunidades brasileiras no Discord e um ponto de encontro voltado a socialização, jogos, entretenimento, bots, programação e tecnologia. A comunidade foi criada por Artur \"Dune\" Pompílio, conhecido como @DuneDiscord.", logo: discordImages.elixirLogo, banner: discordImages.elixirBanner, link: "https://discord.gg/elixirlab", cta: "Visitar comunidade" },
        { name: "Brasil Play Shox", shortName: "BPS", role: "Ex-Moderador", status: "Experiência anterior", context: "Comunidade gamer", description: "Atuei anteriormente como moderador da comunidade do Brasil Play Shox no Discord. O BPS é um dos maiores e mais tradicionais servidores e comunidades de GTA San Andreas Multiplayer da América Latina, com foco na modalidade RPG.", logo: discordImages.bpsLogo, banner: discordImages.bpsBanner, link: "https://discord.gg/bps", cta: "Visitar comunidade" },
        { name: "DuneCo Dungeons", role: "Criador Independente Verificado", status: "Participação em ecossistema", context: "Rede de comunidades", description: "Atuo como Criador Independente Verificado na DuneCo Dungeons, uma rede no Discord que reúne milhares de comunidades, incluindo grandes operações. O ecossistema da DuneCo apresenta marcas como Netflix Brasil, Samsung Brasil, Epic Games e Disney+. Essas marcas e cases pertencem à DuneCo; não são meus clientes nem trabalhos atribuídos a mim.", logo: discordImages.dunecoLogo, banner: discordImages.dunecoBanner, link: "https://duneco.gg/", cta: "Conhecer a DuneCo" },
        { name: "Elite Penguin Force", shortName: "EPF", role: "Proprietário", status: "Atual", context: "Comunidade própria", description: "Sou proprietário da EPF, comunidade registrada nesse ecossistema e criada para aproximar pessoas que desenvolvem, administram, moderam ou criam aplicações para comunidades no Discord. A rede também reúne comunidades ligadas a criadores como Mikeedev, Felca e Dune Discord; essa referência contextualiza o ecossistema e não representa parceria formal com a EPF.", logo: discordImages.epfLogo, banner: discordImages.epfBanner, link: "https://discord.gg/hT868BCY32", cta: "Conhecer a comunidade" },
      ]
    : [
        { name: "AGON by AOC", role: "Former Content Supervisor", status: "Previous experience", context: "Brand community", description: "I worked as a Content Supervisor in the AGON by AOC community, AOC's global gaming monitor and peripherals brand, with product lines for audiences ranging from casual players to esports athletes. The community was administered by Mynexis, a community management and digital marketing agency that also administers the official LOUD and Brancoala servers. My experience was specific to this operation and does not represent employment by those brands.", logo: discordImages.agonLogo, banner: discordImages.agonBanner, link: "https://discord.gg/McePEZx3hk", cta: "Visit community", featured: true },
        { name: "Elixir Lab", role: "Former Moderator", status: "Previous experience", context: "Brazilian community", description: "I previously worked as a moderator at Elixir Lab, one of Brazil's largest Discord communities and a meeting point focused on social interaction, games, entertainment, bots, programming and technology. The community was created by Artur \"Dune\" Pompílio, known as @DuneDiscord.", logo: discordImages.elixirLogo, banner: discordImages.elixirBanner, link: "https://discord.gg/elixirlab", cta: "Visit community" },
        { name: "Brasil Play Shox", shortName: "BPS", role: "Former Moderator", status: "Previous experience", context: "Gaming community", description: "I previously worked as a moderator for the Brasil Play Shox Discord community. BPS is one of Latin America's largest and most established GTA San Andreas Multiplayer servers and communities, focused on its RPG format.", logo: discordImages.bpsLogo, banner: discordImages.bpsBanner, link: "https://discord.gg/bps", cta: "Visit community" },
        { name: "DuneCo Dungeons", role: "Verified Independent Creator", status: "Ecosystem participation", context: "Community network", description: "I work as a Verified Independent Creator within DuneCo Dungeons, a Discord network that brings together thousands of communities, including major operations. DuneCo's ecosystem presents brands such as Netflix Brazil, Samsung Brazil, Epic Games and Disney+. Those brands and cases belong to DuneCo; they are not my clients or work attributed to me.", logo: discordImages.dunecoLogo, banner: discordImages.dunecoBanner, link: "https://duneco.gg/", cta: "Discover DuneCo" },
        { name: "Elite Penguin Force", shortName: "EPF", role: "Owner", status: "Current", context: "Own community", description: "I own EPF, a community registered in this ecosystem and created to connect people who build, administer, moderate or develop applications for Discord communities. The network also includes communities connected to creators such as Mikeedev, Felca and Dune Discord; this reference provides ecosystem context and does not represent a formal partnership with EPF.", logo: discordImages.epfLogo, banner: discordImages.epfBanner, link: "https://discord.gg/hT868BCY32", cta: "Discover community" },
      ];

  const formats = pt
    ? [{ icon: Search, title: "Diagnóstico", text: "Leitura da estrutura atual e dos problemas de organização, moderação, segurança, equipe e processos." }, { icon: Wrench, title: "Estruturação", text: "Organização ou reorganização de canais, cargos, permissões, regras, processos e ferramentas." }, { icon: LifeBuoy, title: "Operação", text: "Participação contínua na administração ou moderação conforme o escopo definido." }, { icon: GraduationCap, title: "Treinamento", text: "Estruturação de equipes, procedimentos e materiais internos para moderadores." }, { icon: Handshake, title: "Consultoria", text: "Acompanhamento estratégico para administradores e equipes que seguem na operação diária." }]
    : [{ icon: Search, title: "Diagnosis", text: "Reading the current structure and problems in organization, moderation, security, team and processes." }, { icon: Wrench, title: "Structuring", text: "Organizing or reorganizing channels, roles, permissions, rules, processes and tools." }, { icon: LifeBuoy, title: "Operations", text: "Ongoing participation in administration or moderation according to the defined scope." }, { icon: GraduationCap, title: "Training", text: "Structuring teams, procedures and internal materials for moderators." }, { icon: Handshake, title: "Consulting", text: "Strategic support for administrators and teams that remain responsible for daily operations." }];

  const process = pt
    ? ["Entender a comunidade", "Diagnosticar a operação", "Planejar prioridades", "Executar o escopo", "Acompanhar quando contratado"]
    : ["Understand the community", "Diagnose the operation", "Plan priorities", "Execute the scope", "Follow up when contracted"];

  const processDescriptions = pt
    ? ["Tamanho, objetivo, público, equipe atual e principais dificuldades entram na primeira conversa.", "Analiso estrutura, processos, moderação, segurança e os pontos críticos do escopo.", "Definimos o que precisa acontecer primeiro e qual formato de atuação faz sentido.", "Mudanças, procedimentos e ferramentas são implementados conforme o escopo acordado.", "Em uma atuação contínua, acompanho a operação e ajusto o plano conforme a comunidade evolui."]
    : ["Size, purpose, audience, current team and main difficulties enter the first conversation.", "I review structure, processes, moderation, security and the scope's critical points.", "We define what needs to happen first and which format makes sense.", "Changes, procedures and tools are implemented according to the agreed scope.", "With ongoing work, I follow the operation and adjust the plan as the community evolves."];

  const faqItems: FaqProItem[] = pt
    ? [
        { id: "alone", question: "Você administra a comunidade sozinho?", answer: "Não necessariamente. Posso atuar diretamente na operação, integrar uma equipe existente ou ajudar a organizar quem já administra a comunidade. O formato depende do escopo e da rotina necessária." },
        { id: "moderator", question: "Você também pode atuar somente como moderador?", answer: "Sim. A atuação pode ser focada em moderação, análise de denúncias, mediação e aplicação de procedimentos, sem assumir a administração inteira." },
        { id: "analysis", question: "É possível contratar apenas uma análise da comunidade?", answer: "Sim. Um diagnóstico pode ser uma entrega própria, com leitura da estrutura, processos, permissões, equipe e pontos prioritários." },
        { id: "team", question: "Você ajuda a contratar e treinar novos moderadores?", answer: "Posso ajudar a definir perfil, processo de entrada, treinamento, materiais e procedimentos para a equipe. A contratação final fica com o responsável pela comunidade." },
        { id: "structure", question: "Você configura cargos, canais e permissões?", answer: "Sim, quando isso fizer parte do escopo. A configuração vem acompanhada da leitura de responsabilidades, segurança e operação para não virar apenas uma reorganização visual." },
        { id: "security", question: "Você trabalha com segurança e prevenção de raids?", answer: "Sim. Posso revisar permissões, fluxos de entrada, ferramentas, logs, procedimentos de resposta e pontos de abuso. O nível de proteção depende do cenário e das ferramentas disponíveis." },
        { id: "bots", question: "Você também desenvolve bots para a comunidade?", answer: "Sim, quando uma automação resolver um problema real de operação. Isso pode envolver logs, tickets, denúncias, onboarding, alertas, métricas e outros fluxos. O desenvolvimento de bots tem uma página própria no site." },
        { id: "small", question: "Você trabalha com comunidades pequenas?", answer: "Sim. O tamanho muda a necessidade, mas não impede o trabalho. Em comunidades menores, muitas vezes a prioridade é criar uma base simples que não fique pesada para a equipe." },
        { id: "brands", question: "Você pode atuar em comunidades de marcas e empresas?", answer: "Sim, desde que o escopo, as responsabilidades e os acessos sejam definidos com clareza. A atuação pode ser de diagnóstico, suporte à equipe, moderação ou operação." },
        { id: "quote", question: "Como funciona o orçamento?", answer: "O pedido de orçamento é feito pelo Google Forms oficial. A proposta depende da necessidade, dimensão da comunidade, duração e formato de atuação; não há um preço fixo nesta página." },
        { id: "permission", question: "Você precisa receber permissão de administrador?", answer: "Nem sempre. Algumas análises podem começar com informações e acessos limitados. Para configurar estrutura, permissões, bots ou operar diretamente, o nível de acesso necessário é combinado antes." },
      ]
    : [
        { id: "alone", question: "Do you administer the community alone?", answer: "Not necessarily. I can work directly in operations, join an existing team or help organize the people already running the community. The format depends on the scope and routine needed." },
        { id: "moderator", question: "Can you work only as a moderator?", answer: "Yes. The work can focus on moderation, report review, mediation and procedure enforcement without taking over the whole administration." },
        { id: "analysis", question: "Can I hire only a community analysis?", answer: "Yes. A diagnosis can be a standalone delivery covering structure, processes, permissions, team and priorities." },
        { id: "team", question: "Do you help recruit and train new moderators?", answer: "I can help define the profile, onboarding process, training, materials and procedures. Final hiring remains with the community owner." },
        { id: "structure", question: "Do you configure roles, channels and permissions?", answer: "Yes, when included in the scope. Configuration is connected to responsibilities, security and operations so it is not just a visual reorganization." },
        { id: "security", question: "Do you work with security and raid prevention?", answer: "Yes. I can review permissions, entry flows, tools, logs, response procedures and abuse points. Protection level depends on the scenario and available tools." },
        { id: "bots", question: "Do you also develop bots for communities?", answer: "Yes, when automation solves a real operational problem. This can include logs, tickets, reports, onboarding, alerts, metrics and other flows. Bot development has its own page on the site." },
        { id: "small", question: "Do you work with small communities?", answer: "Yes. Size changes the need but does not prevent the work. For smaller communities, the priority is often creating a simple base that does not burden the team." },
        { id: "brands", question: "Can you work with brand and company communities?", answer: "Yes, as long as scope, responsibilities and access are clearly defined. The work can be diagnosis, team support, moderation or operations." },
        { id: "quote", question: "How does the quote work?", answer: "Quote requests go through the official Google Forms. The proposal depends on the community's needs, size, duration and format; this page does not publish a fixed price." },
        { id: "permission", question: "Do you need administrator permissions?", answer: "Not always. Some analyses can begin with limited information and access. To configure structure, permissions, bots or work directly, the required access level is agreed beforehand." },
      ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pt ? "Administração e moderação de comunidades no Discord" : "Discord community administration and moderation",
    serviceType: pt ? "Administração de comunidade Discord" : "Discord community administration",
    description: pt ? "Administração, moderação, estruturação e suporte estratégico para comunidades no Discord." : "Administration, moderation, structuring and strategic support for Discord communities.",
    provider: { "@type": "Person", name: "Talisson Souza", url: "https://www.talissonsouza.com.br" },
    url: `https://www.talissonsouza.com.br${pt ? "/servicos/comunidade-discord" : "/en-us/services/community-discord"}`,
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={pt ? "Administração de Comunidade Discord | Talisson Souza" : "Discord Community Administration | Talisson Souza"}
        description={pt ? "Administração, moderação, estruturação e suporte estratégico para comunidades no Discord, com foco em pessoas, processos, segurança e operação." : "Administration, moderation, structuring and strategic support for Discord communities, focused on people, processes, security and operations."}
        canonical={pt ? "/servicos/comunidade-discord" : "/en-us/services/community-discord"}
        keywords={pt ? ["administração de comunidade Discord", "moderação Discord", "gestão de comunidade Discord", "segurança para servidor Discord", "equipe de moderação Discord"] : ["Discord community administration", "Discord moderation", "Discord community management", "Discord server security", "Discord moderation team"]}
        image="/og/servicos.png"
        jsonLd={serviceJsonLd}
      />

      <PageHero
        compact
        uppercase={false}
        eyebrow={pt ? "Serviço / Comunidades" : "Service / Communities"}
        title={pt ? "Administração e moderação de comunidades no Discord" : "Discord community administration and moderation"}
        subtitle={pt ? "Comunidades crescem. Quando isso acontece, regras, equipe, segurança e rotina deixam de caber no improviso. Eu atuo na estruturação, administração e moderação conforme o problema e a dimensão de cada comunidade." : "Communities grow. When they do, rules, teams, security and routines no longer fit improvisation. I work on structure, administration and moderation according to each community's problem and scale."}
        meta={<MotionRail className="max-w-3xl" items={[{ value: "01", label: pt ? "operação" : "operations" }, { value: "05", label: pt ? "formatos" : "formats" }, { value: "Discord", label: pt ? "contexto" : "context" }]} />}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a href={budgetFormUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85">
              {pt ? "Solicitar orçamento" : "Request a quote"}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link to={contactPath} className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
              {pt ? "Entrar em contato" : "Get in touch"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        }
      />

      <section id="realidade" className="relative scroll-mt-28 border-t border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "A operação real" : "The real operation"}</span>
                <h2 className="max-w-md font-serif text-4xl leading-[1.02] text-foreground lg:text-6xl">{pt ? "Administrar não é só criar canais e cargos." : "Administration is more than creating channels and roles."}</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="right">
              <div>
                <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{pt ? "Quando uma comunidade cresce, a parte difícil aparece no cotidiano: decidir, registrar, comunicar e manter uma equipe inteira olhando para a mesma regra." : "As a community grows, the hard part appears in everyday work: deciding, recording, communicating and keeping an entire team aligned around the same rule."}</p>
                <div className="mt-10 grid gap-x-8 border-y border-border/20 sm:grid-cols-2">
                  {problems.map((problem, index) => (
                    <div key={problem} className="flex gap-4 border-b border-border/15 py-5 last:border-0">
                      <span className="font-serif text-2xl text-foreground/20">{String(index + 1).padStart(2, "0")}</span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{problem}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">{pt ? "Uma boa operação combina pessoas, processos, tecnologia e comunicação. O serviço pode começar por uma frente pequena ou acompanhar a comunidade de forma contínua; o escopo é definido pelo cenário, não por um pacote fechado." : "Good operations combine people, processes, technology and communication. The service can start with one focused area or follow the community continuously; scope is defined by the situation, not a fixed package."}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="frentes" className="scroll-mt-28 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-5 border-y border-border/20 py-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Frentes de atuação" : "Areas of work"}</span>
                <h2 className="font-serif text-4xl leading-tight text-foreground lg:text-5xl">{pt ? "O trabalho muda conforme a comunidade." : "The work changes with the community."}</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{pt ? "Uma comunidade pequena, uma marca e uma operação com centenas de milhares de membros não pedem a mesma estrutura." : "A small community, a brand and an operation with hundreds of thousands of members do not need the same structure."}</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 md:grid-cols-2">
            {areas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.04} className={index === areas.length - 1 ? "md:col-span-2" : ""}>
                <div className="group flex h-full gap-5 bg-background/95 p-6 transition-colors hover:bg-card/55 lg:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border/25 bg-background/45 text-foreground/65"><area.icon className="h-5 w-5" /></span>
                  <div><h3 className="font-serif text-2xl text-foreground">{area.title}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{area.text}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <ScrollReveal>
              <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Visão de moderação" : "Moderation philosophy"}</span>
              <h2 className="max-w-lg font-serif text-4xl leading-[1.04] text-foreground lg:text-6xl">{pt ? "Moderação não é apenas punir." : "Moderation is not just punishment."}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="right">
              <div className="border-l border-foreground/20 pl-6 lg:pl-10">
                <p className="max-w-2xl text-xl leading-relaxed text-foreground/85">{pt ? "Uma boa moderação cria previsibilidade. Membros entendem as regras, moderadores sabem como agir e administradores conseguem acompanhar decisões importantes." : "Good moderation creates predictability. Members understand the rules, moderators know how to act and administrators can follow important decisions."}</p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{pt ? "Processos não eliminam o julgamento humano. Eles dão contexto para que situações semelhantes não recebam respostas completamente diferentes e para que a equipe consiga aprender com o que acontece." : "Processes do not remove human judgment. They give context so similar situations do not receive completely different responses and so the team can learn from what happens."}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="showcase" className="scroll-mt-28 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl">
              <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">Showcase</span>
              <h2 className="font-serif text-4xl leading-tight text-foreground lg:text-5xl">{pt ? "Experiência em ambientes diferentes." : "Experience across different environments."}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{pt ? "Comunidades gamers, sociais, de tecnologia, marcas e ecossistemas de criadores me colocaram diante de públicos, equipes e problemas de operação diferentes. Cada item abaixo identifica a relação exata, sem transformar toda experiência em cliente." : "Gaming, social, technology, brand and creator communities have exposed me to different audiences, teams and operational problems. Each item below identifies the exact relationship without turning every experience into a client relationship."}</p>
            </div>
          </ScrollReveal>
          <CommunityShowcase items={showcaseItems} externalLabel={pt ? "abre em nova aba" : "opens in a new tab"} />
        </div>
      </section>

      <section id="formatos" className="scroll-mt-28 border-t border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Formatos de atuação" : "Engagement formats"}</span>
                <h2 className="font-serif text-4xl leading-[1.04] text-foreground lg:text-6xl">{pt ? "Uma frente de cada vez, ou uma operação inteira." : "One area at a time, or a whole operation."}</h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{pt ? "O escopo depende da necessidade e da dimensão da comunidade. Não há preço fixo nesta página." : "Scope depends on the community's needs and size. There is no fixed price on this page."}</p>
              </div>
            </ScrollReveal>
            <div className="divide-y divide-border/20 border-y border-border/20">
              {formats.map((format, index) => (
                <ScrollReveal key={format.title} delay={index * 0.06}>
                  <div className="grid gap-4 py-6 sm:grid-cols-[64px_1fr] sm:items-start">
                    <div className="flex items-center gap-3"><span className="font-serif text-3xl text-foreground/18">{String(index + 1).padStart(2, "0")}</span><format.icon className="h-4 w-4 text-foreground/50" /></div>
                    <div><h3 className="font-serif text-2xl text-foreground">{format.title}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{format.text}</p></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="automacao" className="relative overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="p-7 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div><span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Tecnologia na operação" : "Technology in operations"}</span><h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">{pt ? "Automação entra quando reduz trabalho de verdade." : "Automation belongs when it removes real work."}</h2></div>
                <div><p className="text-base leading-relaxed text-muted-foreground">{pt ? "Minha atuação com software e bots para Discord ajuda a identificar quando um problema operacional pode ser reduzido com logs, tickets, moderação, permissões, denúncias, formulários, onboarding, alertas, métricas ou processos internos." : "My work with software and Discord bots helps identify when an operational problem can be reduced with logs, tickets, moderation, permissions, reports, forms, onboarding, alerts, metrics or internal processes."}</p><Link to={botsPath} className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">{pt ? "Conhecer desenvolvimento de bots" : "See bot development"}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link></div>
              </div>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>

      <section id="processo" className="scroll-mt-28 border-y border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal><div className="mb-10 max-w-2xl"><span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Processo" : "Process"}</span><h2 className="font-serif text-4xl leading-tight text-foreground lg:text-5xl">{pt ? "A contratação começa pela leitura do cenário." : "The engagement starts by reading the situation."}</h2></div></ScrollReveal>
          <div className="divide-y divide-border/20 border-y border-border/20">
            {process.map((step, index) => (
              <ScrollReveal key={step} delay={index * 0.06}>
                <div className="grid gap-4 py-6 sm:grid-cols-[96px_0.72fr_1.28fr] sm:items-start"><span className="font-serif text-4xl leading-none text-foreground/18">{String(index + 1).padStart(2, "0")}</span><h3 className="font-serif text-2xl text-foreground">{step}</h3><p className="text-sm leading-relaxed text-muted-foreground">{processDescriptions[index]}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <ScrollReveal><div className="lg:sticky lg:top-28"><span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">FAQ</span><h2 className="font-serif text-4xl leading-[1.04] text-foreground lg:text-6xl">{pt ? "Perguntas que mudam o escopo." : "Questions that change the scope."}</h2><p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{pt ? "As respostas dependem do contexto, mas estas são as perguntas que ajudam a começar uma conversa objetiva." : "Answers depend on context, but these are the questions that help start an objective conversation."}</p></div></ScrollReveal>
            <ScrollReveal delay={0.1} direction="right"><FaqPro className="w-full max-w-4xl" defaultOpenFirst items={faqItems} searchPlaceholder={pt ? "Buscar perguntas..." : "Search questions..."} emptyText={pt ? "Nenhuma pergunta encontrada." : "No questions found."} /></ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">{pt ? "Próximo passo" : "Next step"}</span><h2 className="max-w-3xl font-serif text-4xl leading-[1.04] text-foreground lg:text-6xl">{pt ? "Sua comunidade precisa de mais estrutura?" : "Does your community need more structure?"}</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{pt ? "Se a moderação está sobrecarregada, os processos não estão claros ou a comunidade cresceu mais rápido que a equipe, podemos analisar o cenário e definir o formato de atuação." : "If moderation is overloaded, processes are unclear or the community grew faster than the team, we can review the situation and define the right format."}</p></div>
              <a href={budgetFormUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-sm font-medium text-foreground">{pt ? "Solicitar orçamento" : "Request a quote"}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityDiscord;
