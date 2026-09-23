import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, LockKeyhole, ShieldCheck, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const conceptImage = "/images/projects/saudemais-concept.png";
const ease = [0.16, 1, 0.3, 1] as const;

const SaudeMais = () => {
  const { language } = useTheme();
  const pt = language === "pt";
  const projectsPath = pt ? "/projetos" : "/en-us/projects";
  const contactPath = pt ? "/contato" : "/en-us/contact";
  const canonicalPath = pt ? "/projeto/saudemais" : "/en-us/project/saudemais";

  const principles = pt
    ? [
        {
          title: "Histórico acima do retrato do dia",
          text: "A proposta é preservar contexto e continuidade, para que consultas, exames, tratamentos, documentos e registros cotidianos não fiquem isolados.",
        },
        {
          title: "Dados reais acima de inferências",
          text: "O produto organiza informações registradas. Não transforma ausência de dado em conclusão e não apresenta cálculo ou resumo como verdade clínica.",
        },
        {
          title: "Usuário no controle",
          text: "A pessoa decide o que registrar, revisar, exportar e compartilhar. Ações relevantes precisam ser explícitas, compreensíveis e rastreáveis.",
        },
      ]
    : [
        {
          title: "History over a snapshot of the day",
          text: "The proposal is to preserve context and continuity so appointments, exams, treatments, documents and daily records do not remain isolated.",
        },
        {
          title: "Real data over inference",
          text: "The product organizes recorded information. It does not turn missing data into a conclusion or present a calculation or summary as clinical truth.",
        },
        {
          title: "The user remains in control",
          text: "The person decides what to record, review, export and share. Relevant actions must be explicit, understandable and traceable.",
        },
      ];

  const boundaries = pt
    ? [
        "não realiza diagnóstico ou prescrição",
        "não substitui prontuário institucional",
        "não oferece telemedicina ou atendimento de emergência",
        "não pertence ao SUS nem a qualquer órgão público",
      ]
    : [
        "does not diagnose or prescribe",
        "does not replace an institutional medical record",
        "does not provide telemedicine or emergency care",
        "is not part of Brazil's public health system or any government body",
      ];

  const organizations = pt
    ? [
        {
          icon: Building2,
          title: "Empresas e organizações de saúde",
          text: "Conversas sobre validação institucional, contexto de uso e caminhos responsáveis para um produto privado de saúde digital.",
        },
        {
          icon: Stethoscope,
          title: "Profissionais e grupos clínicos",
          text: "Revisão da utilidade das informações, da linguagem e dos limites que evitam confundir organização pessoal com orientação médica.",
        },
        {
          icon: ShieldCheck,
          title: "Privacidade e governança",
          text: "Diálogo com organizações que tratam proteção de dados, segurança e governança como requisitos do produto, não como acabamento posterior.",
        },
      ]
    : [
        {
          icon: Building2,
          title: "Healthcare companies and organizations",
          text: "Conversations about institutional validation, use context and responsible paths for a private digital health product.",
        },
        {
          icon: Stethoscope,
          title: "Clinical professionals and groups",
          text: "Review of information usefulness, language and limits that prevent personal organization from being mistaken for medical guidance.",
        },
        {
          icon: ShieldCheck,
          title: "Privacy and governance",
          text: "Dialogue with organizations that treat data protection, security and governance as product requirements, not a later finishing touch.",
        },
      ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: pt ? "Início" : "Home",
          item: pt ? "https://www.talissonsouza.com.br" : "https://www.talissonsouza.com.br/en-us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pt ? "Projetos" : "Projects",
          item: `https://www.talissonsouza.com.br${projectsPath}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Saúde+",
          item: `https://www.talissonsouza.com.br${canonicalPath}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Saúde+",
      applicationCategory: "HealthApplication",
      description: getText(
        language,
        "Aplicativo pessoal e privado, ainda em desenvolvimento, para organizar a trajetória de saúde do usuário.",
        "A private personal application, currently in development, for organizing the user's health history."
      ),
      creator: {
        "@type": "Person",
        name: "Talisson Souza",
        url: "https://www.talissonsouza.com.br",
      },
      url: `https://www.talissonsouza.com.br${canonicalPath}`,
      image: `https://www.talissonsouza.com.br${conceptImage}`,
    },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Saúde+ | Projeto de saúde digital", "Saúde+ | Digital health project")}
        description={getText(
          language,
          "Conheça o Saúde+, aplicativo pessoal e privado em desenvolvimento para organizar a trajetória de saúde com clareza, privacidade e revisão responsável.",
          "Discover Saúde+, a private personal application in development for organizing health history with clarity, privacy and responsible review."
        )}
        canonical={canonicalPath}
        image={conceptImage}
        keywords={pt
          ? ["Saúde+", "aplicativo de saúde", "saúde digital", "histórico de saúde", "privacidade em saúde"]
          : ["Saúde+", "health application", "digital health", "health history", "health privacy"]}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={getText(language, "Projeto autoral em desenvolvimento", "Independent project in development")}
        title="Saúde+"
        subtitle={getText(
          language,
          "Um aplicativo pessoal e privado pensado para organizar a história de saúde do usuário em um só contexto, sem assumir o lugar de médicos, prontuários ou serviços públicos.",
          "A private personal application designed to organize the user's health history in one context, without taking the place of doctors, medical records or public services."
        )}
        visualPlacement="side"
        contentClassName="max-w-3xl"
        visualClassName="lg:justify-self-end"
        meta={
          <div className="grid max-w-2xl grid-cols-1 border-y border-border/25 sm:grid-cols-3">
            {[
              getText(language, "Em desenvolvimento", "In development"),
              getText(language, "Produto privado", "Private product"),
              getText(language, "Revisão responsável", "Responsible review"),
            ].map((item, index) => (
              <div key={item} className="border-b border-border/20 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0">
                <span className="block font-serif text-2xl leading-none text-foreground/30">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        }
        actions={
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to={contactPath}
              className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {getText(language, "Conversar sobre o projeto", "Discuss the project")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href="#visao"
              className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-border/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
            >
              {getText(language, "Conhecer a visão", "Explore the vision")}
            </a>
          </div>
        }
      >
        <figure className="m-0 flex w-full flex-col items-center lg:items-end">
          <img
            src={conceptImage}
            alt={getText(language, "Demonstração conceitual do aplicativo Saúde+", "Concept demonstration of the Saúde+ application")}
            width={1254}
            height={1254}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="max-h-[680px] w-full max-w-[620px] object-contain"
          />
          <figcaption className="mt-3 max-w-xl text-center text-xs leading-relaxed text-muted-foreground/70 lg:text-right">
            {getText(
              language,
              "Demonstração de apresentação gerada com IA. Não representa a interface final e não contém dados reais de pacientes.",
              "AI-generated presentation concept. It does not represent the final interface and contains no real patient data."
            )}
          </figcaption>
        </figure>
      </PageHero>

      <section className="border-y border-border/25 bg-card/15">
        <div className="container mx-auto px-6 py-8 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[auto_1fr] md:items-start md:gap-7">
            <ShieldCheck className="h-6 w-6 text-foreground/65" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl leading-tight text-foreground">
                {getText(language, "Iniciativa privada e independente.", "A private and independent initiative.")}
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                {getText(
                  language,
                  "O Saúde+ não pertence ao SUS, ao Ministério da Saúde ou a qualquer órgão público. Também não oferece atendimento médico, diagnóstico, prescrição ou resposta a emergências.",
                  "Saúde+ is not part of Brazil's public health system, the Ministry of Health or any government body. It also does not provide medical care, diagnosis, prescriptions or emergency response."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="visao" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                {getText(language, "A origem", "The origin")}
              </span>
              <h2 className="mt-5 max-w-md font-serif text-4xl uppercase leading-[0.98] text-foreground lg:text-5xl">
                {getText(language, "A saúde acontece em muitos lugares. O histórico não deveria se perder entre eles.", "Healthcare happens in many places. Its history should not be lost between them.")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="space-y-6 text-base leading-8 text-muted-foreground">
                <p>
                  {getText(
                    language,
                    "Consultas, fisioterapia, exames, medicamentos, documentos e registros da rotina costumam ficar espalhados. Quando chega uma nova consulta, reconstruir o que aconteceu exige memória, arquivos separados e explicações repetidas.",
                    "Appointments, physiotherapy, exams, medications, documents and daily records are often scattered. When a new appointment arrives, reconstructing what happened requires memory, separate files and repeated explanations."
                  )}
                </p>
                <p>
                  {getText(
                    language,
                    "O Saúde+ nasce para transformar esse conjunto em uma história navegável. O foco não é dizer ao usuário o que ele tem ou o que deve fazer, mas ajudá-lo a chegar a conversas de saúde com informações mais organizadas e com a origem de cada registro preservada.",
                    "Saúde+ is intended to turn that collection into a navigable history. Its focus is not telling users what they have or what they should do, but helping them enter healthcare conversations with better organized information and the source of each record preserved."
                  )}
                </p>
                <p className="border-l border-foreground/25 pl-5 text-foreground/85">
                  {getText(
                    language,
                    "O projeto continua em desenvolvimento. Esta página apresenta sua intenção institucional, não uma versão disponível para uso.",
                    "The project remains in development. This page presents its institutional intent, not a version currently available for use."
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border/20 py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                {getText(language, "Princípios do produto", "Product principles")}
              </span>
              <h2 className="mt-5 font-serif text-4xl uppercase leading-[0.98] text-foreground lg:text-5xl">
                {getText(language, "Organizar sem ocupar o lugar do cuidado.", "Organize without taking the place of care.")}
              </h2>
            </div>

            <div className="mt-12 border-t border-border/25">
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease }}
                  className="grid gap-4 border-b border-border/25 py-8 md:grid-cols-[5rem_minmax(220px,0.72fr)_1fr] md:items-start md:gap-8"
                >
                  <span className="font-serif text-4xl leading-none text-foreground/15">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-2xl leading-tight text-foreground">{principle.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{principle.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                {getText(language, "Limites claros", "Clear boundaries")}
              </span>
              <h2 className="mt-5 font-serif text-4xl uppercase leading-[0.98] text-foreground lg:text-5xl">
                {getText(language, "O que o Saúde+ é. E o que não pretende ser.", "What Saúde+ is, and what it is not intended to be.")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                {getText(
                  language,
                  "É um arquivo pessoal, privado e longitudinal para organizar informações do próprio acompanhamento de saúde. Ele preserva contexto e prepara informação para conversas com profissionais.",
                  "It is a private personal longitudinal archive for organizing information from one's own health follow-up. It preserves context and prepares information for conversations with professionals."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="border-t border-border/25">
                {boundaries.map((boundary, index) => (
                  <div key={boundary} className="grid grid-cols-[3rem_1fr] items-start border-b border-border/25 py-5">
                    <span className="font-serif text-xl text-foreground/25">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-7 text-foreground/80">{boundary}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border/20 bg-card/15 py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <ScrollReveal>
                <LockKeyhole className="h-6 w-6 text-foreground/65" aria-hidden="true" />
                <h2 className="mt-6 font-serif text-4xl uppercase leading-[0.98] text-foreground lg:text-5xl">
                  {getText(language, "Privacidade antes da exposição.", "Privacy before exposure.")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="space-y-6 text-sm leading-7 text-muted-foreground">
                  <p>
                    {getText(
                      language,
                      "Dados de saúde são dados pessoais sensíveis. Por isso, telas reais, dados, fluxos internos e materiais operacionais do aplicativo não são exibidos publicamente. A imagem desta página é uma demonstração conceitual gerada com IA, criada apenas para apresentar a direção do produto.",
                      "Health data is sensitive personal data. For that reason, real screens, data, internal flows and operational materials are not publicly displayed. The image on this page is an AI-generated concept created only to present the product direction."
                    )}
                  </p>
                  <p>
                    {getText(
                      language,
                      "A especificação considera minimização de dados, controle de acesso, registro da origem da informação e compartilhamento somente por ação do usuário. Esses princípios não equivalem, por si só, a uma declaração de conformidade jurídica automática.",
                      "The specification considers data minimization, access control, information-source records and sharing only through user action. These principles do not, by themselves, amount to a claim of automatic legal compliance."
                    )}
                  </p>
                  <div className="border-l border-foreground/25 pl-5 text-foreground/85">
                    {getText(
                      language,
                      "Antes de uma disponibilização definitiva, limites clínicos, linguagem e riscos de interpretação deverão passar por revisão e autorização formal de profissionais médicos. Aspectos jurídicos, regulatórios e de LGPD exigem validação própria; a autorização médica não substitui assessoria jurídica nem transfere aos profissionais a responsabilidade integral pelo projeto.",
                      "Before any definitive release, clinical boundaries, language and interpretation risks must undergo formal medical review and authorization. Legal, regulatory and data-protection matters require their own validation; medical authorization does not replace legal counsel or transfer full project responsibility to healthcare professionals."
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/65">
                  {getText(language, "Conversa institucional", "Institutional conversation")}
                </span>
                <h2 className="mt-5 font-serif text-4xl uppercase leading-[0.98] text-foreground lg:text-5xl">
                  {getText(language, "O projeto está aberto a organizações que possam qualificá-lo.", "The project is open to organizations that can help strengthen it.")}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-muted-foreground lg:justify-self-end">
                {getText(
                  language,
                  "A divulgação do Saúde+ não anuncia um lançamento. Ela abre espaço para empresas, organizações e profissionais que enxerguem valor em uma iniciativa privada de saúde digital construída com limites claros.",
                  "Publishing Saúde+ does not announce a launch. It opens space for companies, organizations and professionals who see value in a private digital health initiative built with clear boundaries."
                )}
              </p>
            </div>

            <div className="mt-12 border-t border-border/25">
              {organizations.map((organization, index) => {
                const Icon = organization.icon;
                return (
                  <motion.article
                    key={organization.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease }}
                    className="grid gap-4 border-b border-border/25 py-7 md:grid-cols-[4rem_0.72fr_1fr] md:items-start md:gap-8"
                  >
                    <Icon className="h-5 w-5 text-foreground/55" aria-hidden="true" />
                    <h3 className="font-serif text-xl leading-tight text-foreground sm:text-2xl">{organization.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{organization.text}</p>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-7 border-y border-border/25 py-9 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/65">
                  {getText(language, "Status atual", "Current status")}
                </p>
                <p className="mt-2 font-serif text-2xl text-foreground">
                  {getText(language, "Em desenvolvimento e validação.", "In development and validation.")}
                </p>
              </div>
              <Link
                to={contactPath}
                className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                {getText(language, "Iniciar uma conversa", "Start a conversation")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <Link
              to={projectsPath}
              className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {getText(language, "Voltar aos projetos", "Back to projects")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SaudeMais;
