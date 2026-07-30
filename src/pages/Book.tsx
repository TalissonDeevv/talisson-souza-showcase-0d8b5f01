import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Feather, FileText, ShieldCheck, ShoppingBag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { bookOfficial } from "@/data/book-official";
import bookMockup from "@/assets/book-mockup-opt.jpg";

const physicalBookUrl = bookOfficial.links.physical;
const digitalBookUrl = bookOfficial.links.digital;

const ease = [0.16, 1, 0.3, 1] as const;

const Book = () => {
  const { language } = useTheme();
  const bookTitle = getText(language, "Superando Limites", "Overcoming Limits");
  const bookSubtitle = getText(language, "Da Rejeição ao Sucesso", "From Rejection to Success");
  const policyBase = language === "en" ? "/en-us/policies" : "/politicas";
  const registrationStatus = getText(language, bookOfficial.registration.protocolStatus.pt, bookOfficial.registration.protocolStatus.en);
  const registrationClarification = getText(language, bookOfficial.registration.clarification.pt, bookOfficial.registration.clarification.en);

  const chapters = [
    {
      title: getText(language, "Rejeição", "Rejection"),
      text: getText(language, "O ponto de partida não é romantizado. Ele aparece como ferida, resposta e decisão.", "The starting point is not romanticized. It appears as wound, response and decision."),
    },
    {
      title: getText(language, "Disciplina", "Discipline"),
      text: getText(language, "A obra troca motivação vazia por repetição, postura e responsabilidade diária.", "The book replaces empty motivation with repetition, posture and daily responsibility."),
    },
    {
      title: getText(language, "Construção", "Building"),
      text: getText(language, "Empreender, estudar e continuar mesmo quando a validação externa não vem.", "Entrepreneurship, study and continuation even when external validation does not come."),
    },
    {
      title: getText(language, "Legado", "Legacy"),
      text: getText(language, "A pergunta final não é só vencer. É o que continua fazendo sentido depois disso.", "The final question is not only winning. It is what still makes sense after that."),
    },
  ];

  const policyLinks = [
    { label: getText(language, "Disclaimer do livro", "Book disclaimer"), path: "disclaimer-livro" },
    { label: getText(language, "Termos de compra e acesso", "Purchase and access terms"), path: "livro-termos-de-compra" },
    { label: getText(language, "Política de reembolso", "Refund policy"), path: "livro-politica-de-reembolso" },
    { label: getText(language, "Direitos autorais", "Copyright"), path: "livro-direitos-autorais" },
  ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${bookTitle} - ${bookSubtitle} | Talisson Souza`}
        description={getText(
          language,
          "Livro autoral de Talisson Souza sobre rejeição, disciplina, resiliência, empreendedorismo e construção de caminho próprio.",
          "Talisson Souza's original book about rejection, discipline, resilience, entrepreneurship and building your own path."
        )}
        canonical={language === "en" ? "/en-us/book" : "/livro"}
        type="website"
        keywords={["Superando Limites", "Talisson Souza", "livro", "resiliência", "empreendedorismo", "disciplina"]}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Obra autoral", "Original work")}
        title={bookTitle}
        subtitle={
          <>
            <span className="mb-2 block text-xl text-foreground/75 md:text-2xl">{bookSubtitle}</span>
            {getText(
              language,
              "Um livro escrito por quem transformou rejeição, deficiência, trabalho e tecnologia em uma forma própria de continuar construindo.",
              "A book written by someone who turned rejection, disability, work and technology into a personal way of continuing to build."
            )}
          </>
        }
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={physicalBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              <BookOpen className="h-4 w-4" />
              {getText(language, "Livro físico", "Physical book")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={digitalBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              <ShoppingBag className="h-4 w-4" />
              {getText(language, "Livro digital", "Digital book")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        }
      />


      <section id="nota" className="scroll-mt-28 py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 border-y border-border/20 py-10 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                  <Feather className="h-5 w-5 text-foreground/70" />
                </div>
                <span className="block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Nota do autor", "Author note")}
                </span>
              </div>
              <p className="max-w-4xl font-serif text-2xl leading-[1.48] text-foreground lg:text-3xl">
                {getText(
                  language,
                "Este livro não tenta vender uma vida perfeita. Ele organiza uma trajetória real feita de rejeição, limitação, disciplina, trabalho e da decisão de continuar construindo quando seria mais fácil parar.",
                  "This book does not try to sell a perfect life. It organizes a real journey made of rejection, limitation, discipline, work and the decision to keep building when stopping would be easier."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="registro" className="scroll-mt-28 pb-12 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 border-y border-border/20 py-10 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                  <FileText className="h-5 w-5 text-foreground/70" />
                </div>
                <span className="block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Registro da obra", "Work registration")}
                </span>
              </div>
              <div className="max-w-4xl">
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "Pedido protocolado na Fundação Biblioteca Nacional.", "Request filed with Fundação Biblioteca Nacional.")}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {registrationStatus}
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-[220px_1fr]">
                  <div className="border-l border-foreground/25 pl-5">
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">
                      {getText(language, "Protocolo", "Protocol")}
                    </span>
                    <span className="mt-2 block font-mono text-sm text-foreground">
                      {bookOfficial.registration.protocol}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {registrationClarification}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="obra" className="relative scroll-mt-28 overflow-hidden py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <ScrollReveal>
              <div className="sticky top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Dentro da obra", "Inside the work")}
                </span>
                <h2 className="font-serif text-4xl leading-[1.02] text-foreground lg:text-6xl">
                  {getText(language, "Superação sem frase pronta.", "Overcoming without ready-made phrases.")}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "Mais de 120 capítulos curtos, diretos e pessoais. A leitura foi pensada para pausa, reflexão e retomada.",
                    "More than 120 short, direct and personal chapters. The reading was designed for pause, reflection and return."
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-border/20 border-y border-border/20">
              {chapters.map((chapter, index) => (
                <ScrollReveal key={chapter.title} delay={index * 0.06}>
                  <motion.div
                    whileInView={{ "--line": "100%" } as Record<string, string>}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.75, delay: index * 0.06, ease }}
                    className="relative grid gap-5 py-7 sm:grid-cols-[90px_1fr]"
                    style={{ "--line": "0%" } as Record<string, string>}
                  >
                    <div className="absolute bottom-0 left-0 h-px w-[var(--line)] bg-foreground/18" />
                    <span className="font-serif text-4xl leading-none text-foreground/16">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-foreground">{chapter.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{chapter.text}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="formatos" className="scroll-mt-28 py-14 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-10 border-y border-border/20 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <ScrollReveal>
              <div>
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Formatos", "Formats")}
                </span>
                <h2 className="font-serif text-4xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "Escolha o formato. A obra é a mesma.", "Choose the format. The work is the same.")}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "O livro está disponível em formato físico e digital pela Amazon. Antes da compra, as regras de acesso, reembolso e uso ficam reunidas nas políticas oficiais.",
                    "The book is available in physical and digital formats through Amazon. Before purchasing, access, refund and usage rules are gathered in the official policies."
                  )}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={physicalBookUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
                    <BookOpen className="h-4 w-4" />
                    {getText(language, "Comprar físico", "Buy physical")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href={digitalBookUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
                    <ShoppingBag className="h-4 w-4" />
                    {getText(language, "Comprar digital", "Buy digital")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-8 rounded-full bg-foreground/[0.05] blur-3xl" />
                <img
                  src={bookMockup}
                  alt={`${bookTitle} - ${bookSubtitle}`}
                  className="relative z-10 mx-auto w-60 drop-shadow-[0_28px_70px_hsl(var(--foreground)/0.16)] sm:w-72"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="politicas-livro" className="scroll-mt-28 pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 border-y border-border/20 py-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
                  <ShieldCheck className="h-5 w-5 text-foreground/70" />
                </div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Compra com clareza", "Clear purchase")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "As regras do livro ficam no mesmo lugar.", "The book rules live in one place.")}
                </h2>
              </div>

              <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
                {policyLinks.map((item, index) => (
                  <Link key={item.path} to={`${policyBase}/${item.path}`} className="group bg-background/94 p-5 transition-colors hover:bg-foreground/[0.035]">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-serif text-3xl leading-none text-foreground/14">{String(index + 1).padStart(2, "0")}</span>
                      <FileText className="h-4 w-4 text-foreground/35 transition-colors group-hover:text-foreground/70" />
                    </div>
                    <span className="block text-sm font-medium text-foreground">{item.label}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/60">
                      {getText(language, "Ler política", "Read policy")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-14">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground/50">
            {getText(
              language,
              "© Talisson Souza. Obra autoral. O conteúdo não substitui acompanhamento psicológico, psiquiátrico, jurídico, financeiro ou qualquer forma de orientação profissional especializada.",
              "© Talisson Souza. Original work. The content does not replace psychological, psychiatric, legal, financial or any specialized professional guidance."
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
