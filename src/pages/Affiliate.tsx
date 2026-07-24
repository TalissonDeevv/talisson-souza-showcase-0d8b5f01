import { useState } from "react";
import { ArrowRight, Check, MessageCircle, Route, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const DISCORD_URL = "https://discord.talissonsouza.com.br";

const flowSteps = [
  {
    label: "01",
    title: "Você faz a indicação",
    text: "Quando surgir alguém precisando de site, sistema, automação, bot para Discord ou outra solução tecnológica, você me encaminha esse contato pelo canal oficial do programa.",
  },
  {
    label: "02",
    title: "Eu conduzo a conversa",
    text: "A partir daí, eu assumo a análise do problema, a negociação, o escopo, o desenvolvimento, a entrega e o suporte. Você não precisa vender nem participar da execução.",
  },
  {
    label: "03",
    title: "O projeto é fechado",
    text: "Se a indicação virar um projeto contratado e o pagamento do cliente for confirmado, a comissão fica registrada conforme as regras do programa.",
  },
  {
    label: "04",
    title: "A comissão é liberada",
    text: "Depois da confirmação financeira e validação da indicação, o repasse acontece pelo fluxo combinado dentro do servidor oficial.",
  },
];

const flowStepsEn = [
  {
    label: "01",
    title: "You make the referral",
    text: "When someone needs a website, system, automation, Discord bot or another technology solution, you send me that contact through the official program channel.",
  },
  {
    label: "02",
    title: "I handle the conversation",
    text: "From there, I take care of the problem analysis, negotiation, scope, development, delivery and support. You do not need to sell or participate in execution.",
  },
  {
    label: "03",
    title: "The project is closed",
    text: "If the referral becomes a contracted project and the client's payment is confirmed, the commission is registered according to the program rules.",
  },
  {
    label: "04",
    title: "The commission is released",
    text: "After financial confirmation and referral validation, the payout follows the flow agreed inside the official server.",
  },
];

const participantProfiles = [
  "Pessoas que trabalham com tecnologia",
  "Designers",
  "Social medias",
  "Gestores",
  "Donos de comunidade",
  "Criadores de conteúdo",
  "Pessoas com uma boa rede de contatos",
];

const participantProfilesEn = [
  "People who work with technology",
  "Designers",
  "Social media professionals",
  "Managers",
  "Community owners",
  "Content creators",
  "People with a strong contact network",
];

const partnerBenefits = [
  "Comissão sobre cada projeto fechado através das suas indicações.",
  'Cargo exclusivo "Parceiro" no servidor oficial do Discord.',
  "Link individual de convite do servidor, vinculado ao cargo de indicação e à identificação do parceiro, para registrar quando alguém chegar através da sua indicação.",
  "Acesso a um canal exclusivo para parceiros, onde serão compartilhadas oportunidades, novidades e materiais.",
  "Materiais de divulgação prontos para facilitar a prospecção, como mensagens, abordagens, banners e conteúdos.",
  "Suporte direto para esclarecer dúvidas sobre o programa e acompanhar suas indicações.",
  "Reconhecimento dentro da comunidade pelos resultados obtidos.",
  "Possibilidade de participar do ranking de parceiros com maior volume de comissões, de forma opcional e mediante autorização.",
  "Acompanhamento transparente do status de cada indicação enviada.",
  "Oportunidade de construir uma parceria de longo prazo, indicando clientes de forma recorrente.",
];

const partnerBenefitsEn = [
  "Commission on every project closed through your referrals.",
  'Exclusive "Partner" role in the official Discord server.',
  "Individual server invite link tied to your referral role and partner identification, so referrals can be tracked properly.",
  "Access to an exclusive partner channel where opportunities, updates and materials will be shared.",
  "Ready-to-use outreach materials, including messages, approaches, banners and content.",
  "Direct support to clarify doubts about the program and follow your referrals.",
  "Recognition inside the community for the results achieved.",
  "Optional participation in the ranking of partners with the highest commission volume, with prior authorization.",
  "Transparent tracking of each submitted referral status.",
  "Opportunity to build a long-term partnership by referring clients recurrently.",
];

const partnerRequirements = [
  {
    label: "01",
    title: "Ter capacidade para participar do Programa de Parceiros conforme a legislação brasileira.",
    text: "A participação precisa respeitar as condições legais aplicáveis a cada pessoa, inclusive capacidade civil, responsabilidade pelas informações enviadas e possibilidade de receber comissões.",
  },
  {
    label: "02",
    title: "Participantes maiores de 18 anos podem participar normalmente.",
    text: "A participação depende da aceitação do Regulamento do Programa, dos Termos de Uso e da Política de Privacidade.",
  },
  {
    label: "03",
    title: "Fazer parte do servidor oficial do Discord.",
    text: "O servidor será o canal oficial de comunicação do programa, acompanhamento das indicações, avisos e suporte aos parceiros.",
  },
  {
    label: "04",
    title: "Concordar com as regras oficiais.",
    text: "A participação depende da concordância integral com o Regulamento do Programa de Parceiros, os Termos de Uso e a Política de Privacidade.",
  },
  {
    label: "05",
    title: "Realizar apenas indicações legítimas, espontâneas e de boa-fé.",
    text: "Não são permitidas práticas de spam, abordagens enganosas, compra de leads, uso de informações obtidas ilegalmente ou qualquer conduta que prejudique terceiros ou a reputação do programa.",
  },
  {
    label: "06",
    title: "Respeitar a legislação brasileira aplicável.",
    text: "As indicações devem observar as normas de proteção de dados, incluindo a LGPD, direitos do consumidor e demais leis pertinentes.",
  },
  {
    label: "07",
    title: "As informações fornecidas precisam ser verdadeiras.",
    text: "Ao participar do programa, o participante declara que os dados enviados são corretos e autoriza as validações necessárias para cumprimento das obrigações legais.",
  },
  {
    label: "08",
    title: "A participação não cria vínculo além do previsto no regulamento.",
    text: "O programa não gera vínculo empregatício, representação comercial, sociedade, franquia, exclusividade ou qualquer outra relação não prevista expressamente no Regulamento.",
  },
  {
    label: "09",
    title: "Formalização da participação.",
    text: "A participação no Programa de Parceiros não é automática. Depois de entrar no servidor oficial do Discord e demonstrar interesse, o candidato poderá passar por uma análise inicial. Caso seja aprovado, a entrada será formalizada por meio de um Contrato de Parceria para Indicação de Clientes, com regras sobre comissões, pagamentos, validação das indicações, confidencialidade, proteção de dados, encerramento da parceria e demais condições do programa.",
  },
  {
    label: "10",
    title: "Canais oficiais de contato.",
    text: "Toda comunicação sobre o programa deve acontecer exclusivamente por e-mail, WhatsApp ou servidor oficial do Discord. Indicações feitas apenas por Instagram, TikTok, LinkedIn, Facebook, X ou plataformas semelhantes não serão consideradas válidas para fins de validação ou pagamento de comissão. Essa centralização mantém histórico, organização, segurança e transparência para todos os envolvidos.",
  },
];

const partnerRequirementsEn = [
  {
    label: "01",
    title: "Have the legal capacity to participate in the Partner Program under Brazilian law.",
    text: "Participation must respect the legal conditions applicable to each person, including civil capacity, responsibility for submitted information and ability to receive commissions.",
  },
  {
    label: "02",
    title: "Participants over 18 may participate normally.",
    text: "Participation depends on acceptance of the Program Rules, Terms of Use and Privacy Policy.",
  },
  {
    label: "03",
    title: "Be part of the official Discord server.",
    text: "The server is the official communication channel for the program, referral follow-up, notices and partner support.",
  },
  {
    label: "04",
    title: "Agree with the official rules.",
    text: "Participation depends on full agreement with the Partner Program Rules, Terms of Use and Privacy Policy.",
  },
  {
    label: "05",
    title: "Only make legitimate, voluntary and good-faith referrals.",
    text: "Spam, misleading approaches, purchased leads, use of illegally obtained information or any conduct that harms third parties or the program reputation are not allowed.",
  },
  {
    label: "06",
    title: "Respect applicable Brazilian law.",
    text: "Referrals must observe data protection rules, including LGPD, consumer rights and other applicable laws.",
  },
  {
    label: "07",
    title: "The information provided must be true.",
    text: "By participating in the program, the participant declares that the submitted data is correct and authorizes the validations needed to comply with legal obligations.",
  },
  {
    label: "08",
    title: "Participation does not create any relationship beyond the program rules.",
    text: "The program does not create an employment relationship, commercial representation, company partnership, franchise, exclusivity or any other relationship not expressly provided in the Rules.",
  },
  {
    label: "09",
    title: "Participation formalization.",
    text: "Participation in the Partner Program is not automatic. After joining the official Discord server and showing interest, the candidate may go through an initial review. If approved, entry will be formalized through a Client Referral Partnership Agreement, covering commissions, payments, referral validation, confidentiality, data protection, partnership termination and other program conditions.",
  },
  {
    label: "10",
    title: "Official contact channels.",
    text: "All communication about the program must happen exclusively by e-mail, WhatsApp or the official Discord server. Referrals made only through Instagram, TikTok, LinkedIn, Facebook, X or similar platforms will not be considered valid for validation or commission payment. This centralization preserves history, organization, security and transparency for everyone involved.",
  },
];

const minorParticipationItems = [
  {
    label: "01",
    title: "Participantes com 16 ou 17 anos somente poderão participar mediante autorização expressa do responsável legal.",
    text: "Essa autorização será tratada conforme a legislação brasileira aplicável e as regras internas do Programa de Parceiros.",
  },
  {
    label: "02",
    title: "A organização poderá solicitar documentação para validar a participação.",
    text: "A documentação poderá comprovar idade do participante, identidade do responsável legal, autorização do responsável e vínculo entre ambos.",
  },
  {
    label: "03",
    title: "O pagamento de comissões poderá ser feito ao responsável legal.",
    text: "O repasse também poderá seguir outra forma permitida pela legislação brasileira e pelas regras do Programa, desde que a situação esteja regularizada.",
  },
  {
    label: "04",
    title: "A participação poderá ser recusada ou suspensa caso a documentação não esteja regular.",
    text: "Isso vale quando os documentos não forem apresentados, forem inconsistentes ou não atenderem aos requisitos legais do programa.",
  },
];

const minorParticipationItemsEn = [
  {
    label: "01",
    title: "Participants aged 16 or 17 may only participate with express authorization from their legal guardian.",
    text: "This authorization will be handled according to applicable Brazilian law and the internal rules of the Partner Program.",
  },
  {
    label: "02",
    title: "The organization may request documents to validate participation.",
    text: "The documents may verify the participant's age, the legal guardian's identity, the guardian's authorization and the relationship between them.",
  },
  {
    label: "03",
    title: "Commission payments may be made to the legal guardian.",
    text: "The payout may also follow another method allowed by Brazilian law and the Program rules, as long as the situation is regularized.",
  },
  {
    label: "04",
    title: "Participation may be refused or suspended if the documentation is not regular.",
    text: "This applies when documents are not presented, are inconsistent or do not meet the legal requirements of the program.",
  },
];

const parseCurrencyValue = (value: string) => {
  const normalized = value
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");

  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : 0;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);

const Affiliate = () => {
  const { language } = useTheme();
  const [projectAmount, setProjectAmount] = useState("5000");
  const amount = parseCurrencyValue(projectAmount);
  const commission = amount * 0.1;
  const isPt = language === "pt";
  const canonicalPath = isPt ? "/seja-afiliado" : "/en-us/affiliate-program";
  const localizedFlowSteps = isPt ? flowSteps : flowStepsEn;
  const localizedParticipantProfiles = isPt ? participantProfiles : participantProfilesEn;
  const localizedPartnerBenefits = isPt ? partnerBenefits : partnerBenefitsEn;
  const localizedPartnerRequirements = isPt ? partnerRequirements : partnerRequirementsEn;
  const localizedMinorParticipationItems = isPt ? minorParticipationItems : minorParticipationItemsEn;
  const seoTitle = getText(language, "Programa de Parceiros | Talisson Souza", "Partner Program | Talisson Souza");
  const seoDescription = getText(
    language,
    "Indique clientes para os meus serviços e receba comissão por cada projeto fechado. Conheça o Programa de Parceiros da Talisson Souza.",
    "Refer clients to my services and receive a commission for every closed project. Learn about Talisson Souza's Partner Program."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: getText(language, "Programa de Parceiros", "Partner Program"),
    description: seoDescription,
    url: `https://www.talissonsouza.com.br${canonicalPath}`,
    publisher: {
      "@type": "Person",
      name: "Talisson Souza",
    },
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalPath}
        image="/og/seja-afiliado.png"
        keywords={[
          getText(language, "programa de parceiros", "partner program"),
          getText(language, "afiliados", "affiliates"),
          getText(language, "indicação de clientes", "client referrals"),
          getText(language, "serviços de tecnologia", "technology services"),
          "Talisson Souza",
        ]}
        jsonLd={jsonLd}
      />

      <main className="relative overflow-hidden">
        <PageHero
          className="min-h-[72svh] pb-14 lg:pb-18"
          eyebrow={getText(language, "parcerias", "partners")}
          title={getText(language, "Programa de Parceiros", "Partner Program")}
          subtitle={getText(
            language,
            "Muitas pessoas já me perguntaram se existia alguma forma de ganhar dinheiro indicando clientes para os meus serviços. Agora isso é possível.",
            "A lot of people have asked me if there was a way to earn money by referring clients to my services. Now there is."
          )}
          actions={
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-foreground/20 bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 sm:w-auto"
            >
              {getText(language, "Entrar no servidor", "Join the server")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          }
          meta={
            <MotionRail
              className="max-w-2xl"
              items={[
                { value: "01", label: getText(language, "indicação", "referral") },
                { value: "02", label: getText(language, "projeto fechado", "closed project") },
                { value: "03", label: getText(language, "comissão", "commission") },
              ]}
            />
          }
        />

        <section className="border-y border-border/20 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Como funciona", "How it works")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    {getText(
                      language,
                      "Uma indicação simples, com processo claro depois dela.",
                      "A simple referral, with a clear process after it."
                    )}
                  </h2>
                  <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <p>
                      {getText(
                        language,
                        "Se você conhece alguém que está precisando de um site, sistema, automação, bot para Discord ou qualquer outra solução tecnológica, pode fazer essa indicação para mim. Se o projeto for fechado, você recebe uma comissão.",
                        "If you know someone who needs a website, system, automation, Discord bot or any other technology solution, you can refer that person to me. If the project is closed, you receive a commission."
                      )}
                    </p>
                    <p>
                      {getText(
                        language,
                        "Você faz a indicação e eu cuido de toda a negociação, desenvolvimento, entrega e suporte. Depois que o pagamento do cliente for confirmado, a sua comissão é liberada conforme as regras do programa.",
                        "You make the referral and I take care of the negotiation, development, delivery and support. Once the client's payment is confirmed, your commission is released according to the program rules."
                      )}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-border/20 border-y border-border/20">
                {localizedFlowSteps.map((step, index) => (
                  <ScrollReveal key={step.title} delay={index * 0.06}>
                    <div className="grid gap-5 py-7 sm:grid-cols-[64px_1fr] sm:items-start lg:py-8">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 bg-background font-serif text-sm text-foreground/60">
                        {step.label}
                      </span>
                      <div>
                        <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-foreground">{step.title}</h3>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-5xl border-y border-border/25 py-10 lg:py-14">
                <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                      {getText(language, "Exemplo", "Example")}
                    </span>
                    <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                      {getText(language, "O cálculo sem mistério.", "The math without mystery.")}
                    </h2>
                  </div>
                  <div className="max-w-2xl space-y-6">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {getText(
                        language,
                        "Um projeto de R$ 5.000 com comissão de 10% gera R$ 500 para quem fez a indicação validada. Se quiser simular outro valor, basta digitar abaixo.",
                        "A R$ 5,000 project with a 10% commission generates R$ 500 for the person who made the validated referral. If you want to simulate another value, just type it below."
                      )}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-[1fr_220px] sm:items-end">
                      <label className="block">
                        <span className="text-[10px] uppercase tracking-[0.26em] text-muted-foreground/55">
                          {getText(language, "Valor do projeto", "Project value")}
                        </span>
                        <input
                          value={projectAmount}
                          onChange={(event) => setProjectAmount(event.target.value)}
                          inputMode="decimal"
                          aria-label={getText(
                            language,
                            "Valor do projeto para calcular comissão",
                            "Project value to calculate commission"
                          )}
                          placeholder={getText(language, "Exemplo 5000", "Example 5000")}
                          className="mt-3 h-12 w-full rounded-full border border-border/25 bg-background/90 px-5 text-base font-medium text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/35 focus:border-foreground/45"
                        />
                      </label>
                      <div className="rounded-[2rem] border border-border/20 bg-foreground px-5 py-4 text-background">
                        <span className="text-[10px] uppercase tracking-[0.22em] opacity-65">
                          {getText(language, "Você receberia", "You would receive")}
                        </span>
                        <strong className="mt-2 block font-serif text-3xl leading-none">
                          {formatCurrency(commission)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-3">
                  {[
                    { label: getText(language, "Projeto", "Project"), value: formatCurrency(amount) },
                    { label: getText(language, "Comissão", "Commission"), value: "10%" },
                    { label: getText(language, "Você recebe", "You receive"), value: formatCurrency(commission) },
                  ].map((item, index) => (
                    <IdentityPanel
                      key={item.label}
                      hover={false}
                      delay={index * 0.06}
                      className="rounded-none border-0 bg-background/92 px-6 py-7 shadow-none"
                    >
                      <span className="text-[10px] uppercase tracking-[0.26em] text-muted-foreground/55">
                        {item.label}
                      </span>
                      <strong className="mt-4 block font-serif text-4xl font-semibold leading-none text-foreground sm:text-5xl">
                        {item.value}
                      </strong>
                    </IdentityPanel>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-y border-border/20 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <ScrollReveal>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Quem pode participar", "Who can participate")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    {getText(
                      language,
                      "Qualquer pessoa com uma boa indicação pode participar.",
                      "Anyone with a good referral can participate."
                    )}
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "Não é necessário vender, negociar ou desenvolver o projeto. O programa existe para reconhecer quem aproxima uma necessidade real de uma entrega técnica que eu posso assumir com responsabilidade.",
                      "You do not need to sell, negotiate or develop the project. The program exists to recognize people who connect a real need with a technical delivery I can take on responsibly."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-border/20 border-y border-border/20">
                {localizedParticipantProfiles.map((item, index) => (
                  <ScrollReveal key={item} delay={index * 0.035}>
                    <div className="grid gap-4 py-5 sm:grid-cols-[72px_1fr] sm:items-center">
                      <span className="font-serif text-3xl leading-none text-foreground/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base font-medium text-foreground">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/20 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-10">
              <ScrollReveal>
                <div className="max-w-2xl">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Benefícios", "Benefits")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    {getText(language, "Benefícios de ser um parceiro.", "Benefits of being a partner.")}
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "A ideia é manter um programa simples, mas com vantagens reais para quem indica com responsabilidade e acompanha o relacionamento com clareza.",
                      "The idea is to keep the program simple, but with real advantages for people who refer responsibly and follow the relationship with clarity."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="overflow-hidden border border-border/20 bg-border/20">
                <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {localizedPartnerBenefits.map((benefit, index) => (
                    <ScrollReveal
                      key={benefit}
                      delay={Math.min(index * 0.03, 0.16)}
                      className="h-full"
                    >
                      <div className="h-full w-full bg-background/92 p-5 xl:p-5">
                        <span className="font-serif text-2xl leading-none text-foreground/20">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                          {benefit}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <ScrollReveal delay={0.16}>
                  <div className="border-t border-border/20 bg-background/95 p-5 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-[40px_1fr] sm:items-start">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-foreground/55">
                        <Check className="h-4 w-4" />
                      </span>
                      <p className="max-w-3xl text-sm font-medium leading-relaxed text-foreground">
                        {getText(
                          language,
                          "O programa continuará recebendo novos benefícios ao longo do tempo, conforme a operação amadurecer e novas oportunidades fizerem sentido para os parceiros.",
                          "The program will keep receiving new benefits over time as the operation matures and new opportunities make sense for partners."
                        )}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.18}>
                <div className="relative overflow-hidden border-y border-border/20 py-8 sm:py-10">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:44px_44px]" />
                  <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/60">
                        {getText(language, "Aprendizado", "Learning")}
                      </span>
                      <h3 className="mt-5 max-w-md font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                        {getText(
                          language,
                          "Conhecimento para além das indicações.",
                          "Knowledge beyond referrals."
                        )}
                      </h3>
                    </div>

                    <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <p>
                        {getText(
                          language,
                          "Outro objetivo do programa é compartilhar conhecimento. Além de criar uma forma de gerar renda através das indicações, quero construir um ambiente onde os parceiros também possam aprender e evoluir profissionalmente.",
                          "Another goal of the program is to share knowledge. Beyond creating a way to generate income through referrals, I want to build an environment where partners can also learn and grow professionally."
                        )}
                      </p>
                      <p>
                        {getText(
                          language,
                          "No canal exclusivo dos parceiros, vou compartilhar conteúdos sobre prospecção de clientes, geração e qualificação de leads, networking, abordagem comercial, comunicação, posicionamento profissional, marketing, negociação, construção de relacionamentos, atendimento e boas práticas na captação de oportunidades.",
                          "In the exclusive partner channel, I will share content about client prospecting, lead generation and qualification, networking, outreach, communication, professional positioning, marketing, negotiation, relationship building, service and good practices for finding opportunities."
                        )}
                      </p>
                      <p>
                        {getText(
                          language,
                          "Também pretendo disponibilizar materiais prontos para facilitar a prospecção, como modelos de mensagens para WhatsApp e e-mail, scripts de abordagem, apresentações, banners, respostas para objeções e outros recursos que possam ajudar no dia a dia de quem faz indicações.",
                          "I also plan to provide ready-to-use materials to make outreach easier, such as WhatsApp and e-mail message templates, approach scripts, presentations, banners, objection responses and other resources that can help people who make referrals."
                        )}
                      </p>
                      <p className="border-t border-border/20 pt-5 text-foreground/85">
                        {getText(
                          language,
                          "A ideia é que esse conhecimento vá além do Programa de Parceiros. Quem tem negócio próprio, trabalha como freelancer, oferece serviços, cria conteúdo ou pretende empreender no futuro pode aplicar esses aprendizados para encontrar clientes, construir relacionamentos profissionais e desenvolver suas próprias estratégias de crescimento.",
                          "The idea is for this knowledge to go beyond the Partner Program. People with their own business, freelancers, service providers, content creators or future entrepreneurs can apply these lessons to find clients, build professional relationships and develop their own growth strategies."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border/20 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-10">
              <ScrollReveal>
                <div className="max-w-2xl">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Requisitos", "Requirements")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    {getText(language, "Requisitos para participar.", "Requirements to participate.")}
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "O programa precisa ser simples para participar, mas seguro para todos os envolvidos. Por isso, algumas regras básicas existem antes de qualquer indicação ser validada.",
                      "The program needs to be simple to join, but safe for everyone involved. That is why a few basic rules exist before any referral is validated."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="overflow-hidden border border-border/20 bg-border/20">
                <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {localizedPartnerRequirements.map((requirement, index) => (
                    <ScrollReveal
                      key={requirement.title}
                      delay={Math.min(index * 0.03, 0.16)}
                      className="h-full"
                    >
                      <div className="h-full w-full bg-background/92 p-5 xl:p-5">
                        <span className="font-serif text-2xl leading-none text-foreground/20">
                          {requirement.label}
                        </span>
                        <div className="mt-5 max-w-xl">
                          <h4 className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
                            {requirement.title}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {requirement.text}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <ScrollReveal delay={0.16}>
                  <div className="border-t border-border/20 bg-background/95 p-5 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-[40px_1fr] sm:items-start">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-foreground/55">
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        <p>
                          {getText(
                            language,
                            "Todas as indicações passam por um processo de validação antes da liberação da comissão. O objetivo é garantir transparência, segurança e uma relação de confiança entre o parceiro, o cliente e a organização do programa. As regras completas estão disponíveis no Regulamento do Programa de Parceiros.",
                            "All referrals go through a validation process before the commission is released. The goal is to preserve transparency, security and trust between the partner, the client and the program organization. The complete rules are available in the Partner Program Rules."
                          )}
                        </p>
                        <p>
                          {getText(
                            language,
                            "A participação no programa não gera vínculo empregatício, societário, representação comercial, franquia, agência ou exclusividade. Trata-se apenas de um programa de indicação de clientes, sujeito às regras do regulamento.",
                            "Participation in the program does not create employment, company partnership, commercial representation, franchise, agency or exclusivity. It is only a client referral program, subject to the program rules."
                          )}
                        </p>
                        <p className="text-foreground/85">
                          {getText(
                            language,
                            "Os requisitos para participação poderão ser alterados para atender mudanças na legislação ou aperfeiçoamentos do Programa de Parceiros.",
                            "Participation requirements may be updated to follow legal changes or improvements to the Partner Program."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/20 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Menores de idade", "Minors")}
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    {getText(language, "Participação de menores de idade.", "Participation by minors.")}
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "A participação de pessoas com 16 ou 17 anos exige cuidado adicional. O objetivo é proteger o participante, o responsável legal, o cliente indicado e a organização do programa.",
                      "Participation by people aged 16 or 17 requires additional care. The goal is to protect the participant, the legal guardian, the referred client and the program organization."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
                {localizedMinorParticipationItems.map((item, index) => (
                  <ScrollReveal key={item.title} delay={Math.min(index * 0.04, 0.16)}>
                    <div className="h-full bg-background/92 p-5 sm:p-6">
                      <span className="font-serif text-2xl leading-none text-foreground/20">{item.label}</span>
                      <div className="mt-5 max-w-xl">
                        <h3 className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <ScrollReveal>
                <div className="border-y border-border/25 py-9">
                  <MessageCircle className="mb-6 h-5 w-5 text-foreground/70" />
                  <h2 className="max-w-lg font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    {getText(language, "Você indica. Eu cuido do restante.", "You refer. I handle the rest.")}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "A indicação precisa ser feita com contexto e pelo canal certo. Depois disso, o relacionamento com o cliente, a proposta, o contrato, o escopo e a entrega continuam sob minha responsabilidade.",
                      "The referral needs context and the right channel. After that, the client relationship, proposal, contract, scope and delivery remain under my responsibility."
                    )}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {getText(
                      language,
                      "Também não existe horário para cumprir prospecção. A indicação pode acontecer quando surgir uma oportunidade real, sem escala, rotina fixa ou obrigação de abordagem diária.",
                      "There is also no schedule to follow for prospecting. A referral can happen when a real opportunity appears, with no shift, fixed routine or daily outreach obligation."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08} className="w-full">
                <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    getText(language, "Sem obrigação de vender", "No obligation to sell"),
                    getText(language, "Sem participar da negociação", "No need to join the negotiation"),
                    getText(language, "Sem responsabilidade técnica pela entrega", "No technical responsibility for delivery"),
                    getText(language, "Sem horário fixo de prospecção", "No fixed prospecting schedule"),
                  ].map((item, index) => (
                    <IdentityPanel
                      key={item}
                      hover={false}
                      delay={index * 0.06}
                      className="rounded-none border-0 bg-background/92 shadow-none"
                    >
                      <div className="flex min-h-36 flex-col items-center justify-center gap-5 p-6 text-center">
                        <Check className="h-4 w-4 text-foreground/55" />
                        <p className="max-w-[180px] text-sm font-medium leading-relaxed text-foreground">{item}</p>
                      </div>
                    </IdentityPanel>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="border-t border-border/20 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <Route className="mx-auto mb-6 h-5 w-5 text-foreground/70" />
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Como participar", "How to join")}
                </span>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  {getText(language, "O processo começa no servidor oficial.", "The process starts on the official server.")}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {getText(
                    language,
                    "Atualmente, todo o fluxo do Programa de Parceiros acontece pelo meu servidor oficial no Discord. Para participar, entre no servidor, abra um atendimento e informe que deseja fazer parte do programa.",
                    "Today, the entire Partner Program flow happens inside my official Discord server. To participate, join the server, open a support request and say you want to be part of the program."
                  )}
                </p>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-foreground/20 bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 sm:w-auto"
                >
                  {getText(language, "Entrar no servidor", "Join the server")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl border-t border-border/20 pt-8">
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:flex-row md:items-start md:justify-between">
                <p className="max-w-2xl">
                  {getText(
                    language,
                    "O programa depende de indicação identificável, cliente real, projeto fechado e pagamento confirmado. As regras operacionais podem ser ajustadas dentro do servidor para preservar clareza entre todos os envolvidos.",
                    "The program depends on an identifiable referral, a real client, a closed project and confirmed payment. Operational rules may be adjusted inside the server to preserve clarity for everyone involved."
                  )}
                </p>
                <div className="flex items-center gap-2 text-foreground/70">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.22em]">
                    {getText(language, "processo oficial", "official process")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Affiliate;
