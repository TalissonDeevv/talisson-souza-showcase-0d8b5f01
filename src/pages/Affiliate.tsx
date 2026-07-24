import { ArrowRight, Check, MessageCircle, Route, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";

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

const participantProfiles = [
  "Pessoas que trabalham com tecnologia",
  "Designers",
  "Social medias",
  "Gestores",
  "Donos de comunidade",
  "Criadores de conteúdo",
  "Pessoas com uma boa rede de contatos",
];

const partnerBenefits = [
  "Comissão sobre cada projeto fechado através das suas indicações.",
  'Cargo exclusivo "Parceiro" no servidor oficial do Discord.',
  "Acesso a um canal exclusivo para parceiros, onde serão compartilhadas oportunidades, novidades e materiais.",
  "Materiais de divulgação prontos para facilitar a prospecção, como mensagens, abordagens, banners e conteúdos.",
  "Suporte direto para esclarecer dúvidas sobre o programa e acompanhar suas indicações.",
  "Reconhecimento dentro da comunidade pelos resultados obtidos.",
  "Possibilidade de participar do ranking de parceiros com maior volume de comissões, de forma opcional e mediante autorização.",
  "Acompanhamento transparente do status de cada indicação enviada.",
  "Oportunidade de construir uma parceria de longo prazo, indicando clientes de forma recorrente.",
];

const Affiliate = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Programa de Parceiros",
    description:
      "Indique clientes para os meus serviços e receba comissão por cada projeto fechado. Conheça o Programa de Parceiros da Talisson Souza.",
    url: "https://www.talissonsouza.com.br/seja-afiliado",
    publisher: {
      "@type": "Person",
      name: "Talisson Souza",
    },
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title="Programa de Parceiros | Talisson Souza"
        description="Indique clientes para os meus serviços e receba comissão por cada projeto fechado. Conheça o Programa de Parceiros da Talisson Souza."
        canonical="/seja-afiliado"
        image="/og/servicos.png"
        keywords={[
          "programa de parceiros",
          "afiliados",
          "indicação de clientes",
          "serviços de tecnologia",
          "Talisson Souza",
        ]}
        jsonLd={jsonLd}
      />

      <main className="relative overflow-hidden">
        <PageHero
          className="min-h-[72svh] pb-14 lg:pb-18"
          eyebrow="parcerias"
          title="Programa de Parceiros"
          subtitle="Muitas pessoas já me perguntaram se existia alguma forma de ganhar dinheiro indicando clientes para os meus serviços. Agora isso é possível."
          actions={
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-foreground/20 bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 sm:w-auto"
            >
              Entrar no servidor
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          }
          meta={
            <MotionRail
              className="max-w-2xl"
              items={[
                { value: "01", label: "indicação" },
                { value: "02", label: "projeto fechado" },
                { value: "03", label: "comissão" },
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
                    Como funciona
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    Uma indicação simples, com processo claro depois dela.
                  </h2>
                  <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <p>
                      Se você conhece alguém que está precisando de um site, sistema, automação, bot para Discord ou
                      qualquer outra solução tecnológica, pode fazer essa indicação para mim. Se o projeto for fechado,
                      você recebe uma comissão.
                    </p>
                    <p>
                      Você faz a indicação e eu cuido de toda a negociação, desenvolvimento, entrega e suporte. Depois que
                      o pagamento do cliente for confirmado, a sua comissão é liberada conforme as regras do programa.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="relative border-l border-border/25 pl-7 md:pl-10">
                {flowSteps.map((step, index) => (
                  <ScrollReveal key={step.title} delay={index * 0.06}>
                    <div className="relative pb-10 last:pb-0">
                      <span className="absolute -left-[2.45rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border/30 bg-background font-serif text-sm text-foreground/60 md:-left-[3.05rem]">
                        {step.label}
                      </span>
                      <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-foreground">{step.title}</h3>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {step.text}
                      </p>
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
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                      Exemplo
                    </span>
                    <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                      O cálculo sem mistério.
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Um projeto de R$ 5.000 com comissão de 10% gera R$ 500 para quem fez a indicação validada. Simples,
                    transparente e sem transformar a página em promessa exagerada.
                  </p>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-3">
                  {[
                    { label: "Projeto", value: "R$ 5.000" },
                    { label: "Comissão", value: "10%" },
                    { label: "Você recebe", value: "R$ 500" },
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
                    Quem pode participar
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    Qualquer pessoa com uma boa indicação pode participar.
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Não é necessário vender, negociar ou desenvolver o projeto. O programa existe para reconhecer quem
                    aproxima uma necessidade real de uma entrega técnica que eu posso assumir com responsabilidade.
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-border/20 border-y border-border/20">
                {participantProfiles.map((item, index) => (
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
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground/65">
                    Benefícios
                  </span>
                  <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    Benefícios de ser um parceiro.
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    A ideia é manter um programa simples, mas com vantagens reais para quem indica com responsabilidade e
                    acompanha o relacionamento com clareza.
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-border/20 border-y border-border/20">
                {partnerBenefits.map((benefit, index) => (
                  <ScrollReveal key={benefit} delay={Math.min(index * 0.035, 0.18)}>
                    <div className="grid gap-4 py-5 sm:grid-cols-[64px_1fr] sm:items-start">
                      <span className="font-serif text-3xl leading-none text-foreground/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {benefit}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.16}>
                  <div className="grid gap-4 py-6 sm:grid-cols-[64px_1fr] sm:items-start">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/30 text-foreground/55">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="max-w-2xl text-sm font-medium leading-relaxed text-foreground">
                      O programa continuará recebendo novos benefícios ao longo do tempo, conforme a operação amadurecer e
                      novas oportunidades fizerem sentido para os parceiros.
                    </p>
                  </div>
                </ScrollReveal>
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
                    Você indica. Eu cuido do restante.
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    A indicação precisa ser feita com contexto e pelo canal certo. Depois disso, o relacionamento com o
                    cliente, a proposta, o contrato, o escopo e a entrega continuam sob minha responsabilidade.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08} className="w-full">
                <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-3">
                  {[
                    "Sem obrigação de vender",
                    "Sem participar da negociação",
                    "Sem responsabilidade técnica pela entrega",
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
                  Como participar
                </span>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  O processo começa no servidor oficial.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Atualmente, todo o fluxo do Programa de Parceiros acontece pelo meu servidor oficial no Discord. Para
                  participar, entre no servidor, abra um atendimento e informe que deseja fazer parte do programa.
                </p>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-foreground/20 bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 sm:w-auto"
                >
                  Entrar no servidor
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
                  O programa depende de indicação identificável, cliente real, projeto fechado e pagamento confirmado. As
                  regras operacionais podem ser ajustadas dentro do servidor para preservar clareza entre todos os envolvidos.
                </p>
                <div className="flex items-center gap-2 text-foreground/70">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.22em]">processo oficial</span>
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
