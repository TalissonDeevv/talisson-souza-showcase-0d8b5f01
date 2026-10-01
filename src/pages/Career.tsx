import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Building2, CalendarDays, ExternalLink, Handshake, Megaphone, Network, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import Timeline from "@/components/ui/timeline";
import { useTheme } from "@/contexts/ThemeContext";
import { getCareerJourneyItems } from "@/data/career-journey";
import { getText } from "@/utils/translations";
import signatureTrajetoria from "@/assets/signature-trajetoria.png";
import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import rocketLogo from "@/assets/logos/rocketseat.png";
import squareLogo from "@/assets/logos/square-cloud.png";
import splendoriLogo from "@/assets/logos/splendori.png";
import hostingerLogo from "@/assets/logos/hostinger.png";
import shopeeLogo from "@/assets/logos/shopee.png";
import mynexisLogo from "@/assets/logos/mynexis.png";

const ease = [0.16, 1, 0.3, 1] as const;

const Career = () => {
  const { language } = useTheme();
  const careerJourneyItems = getCareerJourneyItems(language);

  const experiences = language === "pt"
    ? [
        {
          icon: Building2,
          role: "Fundador e CEO",
          company: "Cheetah Solutions",
          logo: cheetahLogo,
          period: "mai 2020 - presente",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Fundador e CEO da Cheetah Solutions, empresa especializada no desenvolvimento de soluções tecnológicas para negócios que exigem performance, confiabilidade e crescimento sustentável.",
            "Atuo na definição da visão, estratégia e direcionamento técnico da empresa, liderando a construção de sistemas, aplicações e plataformas digitais com foco em automação de processos, eficiência operacional e arquitetura escalável.",
            "Minha atuação envolve tomada de decisões estratégicas, liderança de projetos multidisciplinares e acompanhamento da entrega desde a concepção até a sustentação.",
          ],
          skills: ["Liderança estratégica", "Gestão de projetos", "Arquitetura de software", "Automação de processos", "Estratégia de negócios"],
        },
        {
          icon: Megaphone,
          role: "Criador de Conteúdo de Tecnologia e Ex-Parceiro",
          company: "Rocketseat",
          logo: rocketLogo,
          period: "nov 2025 - mai 2026",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Contribuição para o fortalecimento do ecossistema dev através de conteúdo estratégico, comunicação digital e produção voltada à comunidade de tecnologia.",
            "Responsável pela criação de conteúdo relacionado a programação, desenvolvimento de software, carreira tech e transformação digital.",
          ],
          skills: ["Criação de conteúdo digital", "Publicidade", "Comunicação técnica"],
        },
        {
          icon: Handshake,
          role: "Ex-parceiro estratégico",
          company: "Square Cloud",
          logo: squareLogo,
          period: "set 2025 - 15 de setembro de 2026",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Parceria estratégica encerrada em 15/09/2026, mantida aqui como registro histórico da atuação.",
            "Colaborei em projetos de desenvolvimento, suporte e estratégias para comunidade e clientes.",
            "Fornecimento de feedback e sugestões sobre sistemas, programas de engajamento e melhorias na experiência do usuário.",
          ],
          skills: ["Parcerias estratégicas", "Divulgação pública", "Estratégia"],
        },
        {
          icon: Sparkles,
          role: "Parceiro Estratégico",
          company: "Splendori",
          logo: splendoriLogo,
          period: "mar 2026 - presente",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Atuação como parceiro estratégico em iniciativas de tecnologia e desenvolvimento de produtos digitais.",
            "Colaboração em projetos envolvendo desenvolvimento web, landing pages, automações e criação de soluções SaaS voltadas para crescimento e inovação digital.",
          ],
          skills: ["Parcerias estratégicas", "Desenvolvimento web", "Soluções SaaS", "Automação", "Produto digital"],
        },
        {
          icon: Megaphone,
          role: "Afiliado e criador de conteúdo",
          company: "Hostinger",
          logo: hostingerLogo,
          period: "06 de julho de 2026 - presente",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Atuação como afiliado e criador de conteúdo voltado à tecnologia, com foco na divulgação de produtos, serviços e soluções do setor.",
          ],
          skills: ["Afiliados", "Criação de conteúdo", "Tecnologia", "Divulgação"],
        },
        {
          icon: Megaphone,
          role: "Afiliado",
          company: "Shopee",
          logo: shopeeLogo,
          period: "11 de julho de 2026 - presente",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Atuação como afiliado, com foco na divulgação de produtos, acessórios, itens para setups e outros achados relacionados à tecnologia e ao universo gamer.",
          ],
          skills: ["Afiliados", "Setups", "Tecnologia gamer", "Curadoria de produtos"],
        },
        {
          icon: Users,
          role: "Ex Supervisor de Conteúdo",
          company: "Mynexis",
          logo: mynexisLogo,
          period: "17 de agosto de 2026 - atuação encerrada",
          place: "Recife, Pernambuco · Remoto",
          description: [
            "Atuei como Supervisor de Conteúdo na Mynexis, com participação de auxílio operacional na comunidade AGON by AOC.",
            "A atuação foi encerrada e permanece aqui apenas como registro histórico de experiência envolvendo relatórios, reuniões pontuais e suporte na organização de eventos em comunidades do Discord.",
          ],
          skills: ["Supervisão de conteúdo", "Relatórios", "Apoio operacional", "Comunidades no Discord"],
        },
      ]
    : [
        {
          icon: Building2,
          role: "Founder and CEO",
          company: "Cheetah Solutions",
          logo: cheetahLogo,
          period: "May 2020 - Present",
          place: "Recife, Pernambuco · Remote",
          description: ["Founder and CEO of Cheetah Solutions, focused on digital solutions for businesses that need performance, reliability and sustainable growth.", "I lead technical direction, systems, applications and digital platforms with focus on automation, operational efficiency and scalable architecture."],
          skills: ["Strategic leadership", "Project management", "Software architecture", "Process automation", "Business strategy"],
        },
        {
          icon: Megaphone,
          role: "Technology Content Creator and Former Partner",
          company: "Rocketseat",
          logo: rocketLogo,
          period: "Nov 2025 - May 2026",
          place: "Recife, Pernambuco · Remote",
          description: ["Contribution to the dev ecosystem through strategic content, digital communication and community-oriented production."],
          skills: ["Digital content", "Advertising", "Technical communication"],
        },
        {
          icon: Handshake,
          role: "Former Strategic Partner",
          company: "Square Cloud",
          logo: squareLogo,
          period: "Sep 2025 - September 15, 2026",
          place: "Recife, Pernambuco · Remote",
          description: [
            "Strategic partnership ended on September 15, 2026 and remains here as a historical record.",
            "Collaboration on development, support and community/client strategies.",
            "Feedback and suggestions for systems, engagement programs and user experience improvements.",
          ],
          skills: ["Strategic partnerships", "Public promotion", "Strategy"],
        },
        {
          icon: Sparkles,
          role: "Strategic Partner",
          company: "Splendori",
          logo: splendoriLogo,
          period: "Mar 2026 - Present",
          place: "Recife, Pernambuco · Remote",
          description: ["Strategic partnership in technology initiatives and digital product development.", "Collaboration on web development, landing pages, automations and SaaS solutions."],
          skills: ["Strategic partnerships", "Web development", "SaaS", "Automation", "Digital product"],
        },
        {
          icon: Megaphone,
          role: "Affiliate and Content Creator",
          company: "Hostinger",
          logo: hostingerLogo,
          period: "Jul 06, 2026 - Present",
          place: "Recife, Pernambuco · Remote",
          description: ["Work as an affiliate and technology-focused content creator, promoting products, services and solutions in the sector."],
          skills: ["Affiliate marketing", "Content creation", "Technology", "Promotion"],
        },
        {
          icon: Megaphone,
          role: "Affiliate",
          company: "Shopee",
          logo: shopeeLogo,
          period: "Jul 11, 2026 - Present",
          place: "Recife, Pernambuco · Remote",
          description: ["Affiliate work focused on products, accessories, setup items and technology or gaming finds."],
          skills: ["Affiliate marketing", "Setups", "Gaming technology", "Product curation"],
        },
        {
          icon: Users,
          role: "Former Content Supervisor",
          company: "Mynexis",
          logo: mynexisLogo,
          period: "Aug 17, 2026 - ended",
          place: "Recife, Pernambuco · Remote",
          description: [
            "I worked as a Content Supervisor at Mynexis, with operational support participation in the AGON by AOC community.",
            "The role has ended and remains here only as a historical record of experience involving reports, occasional meetings and support organizing Discord community events.",
          ],
          skills: ["Content supervision", "Reports", "Operational support", "Discord communities"],
        },
      ];

  const whatIDo = language === "pt"
    ? [
        { title: "Arquitetura e sistemas", text: "Transformo problemas de negócio em sistemas, plataformas, integrações e automações com estrutura para crescer." },
        { title: "Direção técnica", text: "Ajudo empresas a decidir stack, escopo, prioridades, riscos e caminhos antes de sair construindo." },
        { title: "Comunidade e conteúdo", text: "Crio pontes entre tecnologia, comunicação e comunidade para tornar conhecimento mais acessível e prático." },
      ]
    : [
        { title: "Architecture and systems", text: "I turn business problems into systems, platforms, integrations and automations structured to grow." },
        { title: "Technical direction", text: "I help companies decide stack, scope, priorities, risks and paths before building." },
        { title: "Community and content", text: "I connect technology, communication and community to make knowledge more accessible and practical." },
      ];

  const certificates = [
    {
      title: getText(language, "Administração no Século 21", "Administration in the 21st Century"),
      issuer: "Fundação Bradesco",
      date: "2025",
      link: "https://drive.google.com/file/d/1uNq5H26X0WbQf2Ohxr3hWJ_bzHMnMT9Y",
    },
    {
      title: getText(language, "Estratégia de Negócios", "Business Strategy"),
      issuer: "Fundação Bradesco",
      date: "2025",
      link: "https://drive.google.com/file/d/1Mel2pK_6ajyFOHQIuvFF5XbljNjY40TA/view?usp=drive_link",
    },
    {
      title: getText(language, "Gestão de Projetos", "Project Management"),
      issuer: "Fundação Bradesco",
      date: "2023",
      link: "https://drive.google.com/file/d/1Y454v0F4R4G91iR2ZBC8ps1vfUNh-gHI/view?usp=drive_link",
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Carreira | O que Talisson Souza faz", "Career | What Talisson Souza Does")}
        description={getText(
          language,
          "Trajetória profissional de Talisson Souza, com experiências, atuação em software, liderança, conteúdo, comunidades, parcerias e certificações.",
          "Talisson Souza's professional journey, including software, leadership, content, communities, partnerships and certifications."
        )}
        canonical={language === "en" ? "/en-us/career" : "/carreira"}
        keywords={language === "pt" ? ["carreira", "Talisson Souza", "engenheiro de software", "Cheetah Solutions", "experiências"] : ["career", "Talisson Souza", "software engineer", "Cheetah Solutions", "experience"]}
      />

      <PageHero
        compact
        signature={signatureTrajetoria}
        signatureAlt="Trajetória"
        title={getText(language, "Carreira", "Career")}
        subtitle={getText(
          language,
          "O que faço, onde atuei e como minha experiência combina software, estratégia, comunidade e construção de negócios digitais.",
          "What I do, where I worked and how my experience combines software, strategy, community and digital business building."
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: "2018", label: getText(language, "início prático", "practical start") },
              { value: "06", label: getText(language, "frentes", "tracks") },
              { value: "CEO", label: getText(language, "empresa", "company") },
            ]}
          />
        }
      />


      <section id="atuacao" className="relative scroll-mt-28 overflow-hidden py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <ScrollReveal>
              <div className="sticky top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Atuação", "Practice")}
                </span>
                <h2 className="font-serif text-4xl leading-[1.02] text-foreground lg:text-6xl">
                  {getText(language, "O que eu faço na prática.", "What I do in practice.")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-border/20 border-y border-border/20">
              {whatIDo.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.08}>
                  <motion.div
                    whileInView={{ "--line": "100%" } as Record<string, string>}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease }}
                    className="relative grid gap-4 py-7 sm:grid-cols-[100px_1fr]"
                    style={{ "--line": "0%" } as Record<string, string>}
                  >
                    <div className="absolute bottom-0 left-0 h-px w-[var(--line)] bg-foreground/20" />
                    <span className="font-serif text-4xl leading-none text-foreground/18">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Timeline
        sectionId="experiencias"
        items={careerJourneyItems}
        eyebrow={getText(language, "Trajetória profissional", "Professional journey")}
        title={getText(language, "Onde essa atuação foi construída.", "Where this practice was built.")}
        description={getText(
          language,
          "Empresas e frentes nas quais atuei, com função, período e contexto apresentados de forma direta.",
          "Companies and initiatives where I worked, with role, period and context presented directly."
        )}
        periodLabel={getText(language, "2020 - presente", "2020 - present")}
        duration={1.2}
      />

      <section id="certificacoes" className="relative scroll-mt-28 overflow-hidden py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <ScrollReveal>
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Base complementar", "Complementary base")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "Certificações e repertório de negócio.", "Certifications and business repertoire.")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-border/20 border-y border-border/20">
              {certificates.map((cert, index) => (
                <ScrollReveal key={cert.title} delay={index * 0.06}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-4 py-6 sm:grid-cols-[80px_1fr_auto] sm:items-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                      <Award className="h-5 w-5 text-foreground/65" />
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-foreground">{cert.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/60 transition-colors group-hover:text-foreground">
                      {cert.date}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <IdentityPanel hover={false} className="p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                    <ShieldCheck className="h-5 w-5 text-foreground/70" />
                  </div>
                  <h2 className="font-serif text-3xl leading-tight text-foreground">
                    {getText(language, "Carreira, mas sem vitrine artificial.", "Career, without artificial showcase.")}
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {getText(
                      language,
                      "O ponto não é colecionar cargos. É mostrar onde minhas decisões foram testadas em produto, empresa, comunidade, conteúdo, parceria e operação real.",
                      "The point is not collecting titles. It is showing where my decisions were tested across product, company, community, content, partnership and real operations."
                    )}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to={language === "en" ? "/en-us/services" : "/servicos"}
                      className="group inline-flex items-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
                    >
                      <Network className="h-4 w-4" />
                      {getText(language, "Ver serviços", "See services")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      to={language === "en" ? "/en-us/contact" : "/contato"}
                      className="group inline-flex items-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
                    >
                      <Users className="h-4 w-4" />
                      {getText(language, "Conversar", "Talk")}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </IdentityPanel>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
