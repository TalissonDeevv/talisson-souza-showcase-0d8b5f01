import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const DiscordPromotion = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Discord', 'Divulgação', 'Crescimento', 'Estratégia', 'Comunidade']
    : ['Discord', 'Promotion', 'Growth', 'Strategy', 'Community'];

  const sections = language === 'pt' ? [
    {
      title: 'A diferença fundamental entre divulgação e spam',
      content: `Existe uma linha tênue entre divulgação estratégica e spam, e a maioria dos administradores de comunidades e criadores de bots no Discord não apenas não enxerga essa linha como sequer reconhece que ela existe. O resultado é uma prática massiva de autopromoção indiscriminada: entrar em dezenas de servidores, colar a mesma mensagem de convite em todos os canais possíveis, e esperar que o volume compense a falta de estratégia. Essa abordagem não apenas é ineficaz como é ativamente prejudicial. Ela desgasta a reputação do projeto, gera banimentos que limitam o alcance futuro, e contribui para a cultura de desconfiança que faz com que convites legítimos sejam automaticamente ignorados.

A divulgação estratégica parte de um princípio completamente diferente: oferecer valor antes de pedir atenção. O profissional que divulga uma comunidade ou um bot de forma estratégica entende que cada servidor onde ele participa é um ambiente com cultura, regras e expectativas próprias. Ele se integra genuinamente, contribui com conhecimento, constrói relacionamentos, e quando menciona seu projeto, o faz de forma contextualizada e relevante. A diferença de resultado é abismal. Enquanto o spam gera dezenas de entradas que saem no dia seguinte, a divulgação estratégica gera membros engajados que permanecem e que, por sua vez, recomendam o projeto para outros.`
    },
    {
      title: 'Posicionamento e proposta de valor clara',
      content: `Antes de divulgar qualquer comunidade ou bot no Discord, o criador deveria ser capaz de responder com clareza absoluta a uma pergunta simples: por que alguém deveria participar do meu projeto em vez de qualquer outro? Se a resposta é vaga, genérica, ou basicamente igual à de centenas de outros projetos, o problema não está na divulgação. Está no posicionamento. Nenhuma estratégia de marketing compensa a falta de uma proposta de valor diferenciada. E no ecossistema Discord, onde a oferta de servidores e bots é absurdamente abundante, a diferenciação é ainda mais crítica.

Uma proposta de valor clara não precisa ser revolucionária. Pode ser tão simples quanto focar em um nicho específico que é mal atendido, oferecer uma experiência de comunidade com padrão de qualidade superior ao habitual, ou resolver um problema específico que outros projetos ignoram. O importante é que seja genuína, comunicável em uma frase, e perceptível pelo usuário nos primeiros minutos de interação com o projeto. Quando a proposta de valor é clara e real, a divulgação se torna significativamente mais fácil, porque o criador não está vendendo uma promessa vazia. Está apresentando algo que realmente entrega o que promete.`
    },
    {
      title: 'Crescimento orgânico: a única base sustentável',
      content: `O crescimento orgânico é o único tipo de crescimento que constrói uma base sustentável para qualquer projeto no Discord. Membros que chegam por spam ou por promoções artificiais têm taxas de retenção próximas de zero. Eles entram, olham por alguns segundos, e saem. Ou pior: entram e ficam como membros inativos que inflam números mas não contribuem para a saúde da comunidade. O crescimento orgânico, em contraste, acontece quando pessoas encontram o projeto naturalmente, reconhecem valor, e decidem permanecer porque a experiência atende a uma necessidade real.

Construir crescimento orgânico exige paciência e consistência. Significa produzir conteúdo relevante que naturalmente atrai o público-alvo, participar de comunidades relacionadas de forma genuína e construtiva, manter um padrão de qualidade que faça com que os membros existentes recomendem o projeto espontaneamente, e otimizar a experiência de entrada para que novos membros entendam rapidamente o valor do projeto e se sintam acolhidos. Esse tipo de crescimento é mais lento inicialmente, mas cria uma curva exponencial sustentável onde cada membro satisfeito se torna um canal de aquisição. O projeto que cresce organicamente não depende de campanhas de divulgação constantes para sobreviver. Ele se alimenta da própria qualidade.`
    },
    {
      title: 'Construção de autoridade no ecossistema',
      content: `A autoridade no ecossistema Discord não se conquista com números. Conquista-se com reputação. Um servidor com quinhentos membros genuinamente engajados tem mais autoridade do que um servidor com dez mil membros inativos. A autoridade se constrói quando o projeto se torna referência em seu nicho, quando outros criadores e administradores reconhecem a qualidade do trabalho, quando membros da comunidade citam o projeto como exemplo positivo, e quando a marca do projeto é associada a profissionalismo, consistência e confiabilidade.

Para construir essa autoridade, o criador precisa investir na qualidade em todas as dimensões do projeto: conteúdo produzido, experiência do usuário, tratamento da comunidade, transparência nas decisões, e consistência na entrega de valor. A autoridade também se constrói por contraste. Em um ecossistema onde a maioria dos projetos opera com baixo padrão de qualidade, manter um padrão elevado de forma consistente é, por si só, um diferencial poderoso. O projeto que é reconhecido como referência atrai colaboradores qualificados, parceiros estratégicos, e oportunidades que projetos medíocres nunca alcançam, independentemente do seu tamanho.`
    },
    {
      title: 'Erros comuns de quem está começando',
      content: `Os erros mais comuns de iniciantes na divulgação de projetos no Discord seguem padrões previsíveis. O primeiro é a obsessão por números. O criador foca exclusivamente em aumentar o número de membros, sem considerar a qualidade, o engajamento ou a retenção. Essa obsessão leva a práticas como compra de membros, uso de bots para inflar contagens, e promoções que atraem pessoas sem qualquer interesse real no projeto. O resultado é uma ilusão de crescimento que mascara a ausência de uma comunidade genuína.

O segundo erro é a inconsistência. O criador investe intensamente em divulgação por uma semana, depois desaparece por um mês, depois volta com outra explosão de atividade. Essa inconsistência transmite uma mensagem clara de amadorismo e falta de comprometimento. Membros potenciais percebem que o projeto não é levado a sério e decidem não investir seu tempo em algo que pode ser abandonado a qualquer momento. O terceiro erro é ignorar a experiência de entrada. O novo membro chega ao servidor e encontra canais desorganizados, regras confusas ou inexistentes, nenhuma orientação sobre o que fazer ou como participar, e uma atmosfera que não comunica profissionalismo. A primeira impressão define se o membro fica ou vai, e a maioria dos projetos desperdiça essa oportunidade por negligência na experiência inicial.`
    },
    {
      title: 'Mentalidade de longo prazo: projetos que duram',
      content: `A mentalidade que sustenta projetos duradouros no Discord é fundamentalmente diferente da mentalidade que busca resultados rápidos. O criador com visão de longo prazo entende que os primeiros meses são de construção de fundação, não de colheita de resultados. Ele investe em estrutura, em cultura, em processos, e em relacionamentos, sabendo que esses investimentos amadurecem ao longo do tempo e criam uma base que sustenta o crescimento futuro. Ele não se desespera com números baixos no início porque entende que qualidade precede quantidade em qualquer empreendimento sustentável.

Projetos que duram no Discord são construídos por pessoas que tratam suas comunidades e seus bots como empreendimentos profissionais, não como hobbies descartáveis. Isso significa ter visão clara de para onde o projeto está indo, manter padrões de qualidade mesmo quando ninguém está olhando, tomar decisões difíceis quando necessário, e resistir à tentação de atalhos que comprometem a integridade do projeto. A divulgação, nesse contexto, deixa de ser uma atividade separada e se torna uma consequência natural de um projeto bem construído. Quando o trabalho é genuinamente bom e consistente, a comunidade certa encontra caminho até ele. O papel do criador é garantir que, quando isso aconteça, a experiência esteja à altura da expectativa.`
    },
  ] : [
    {
      title: 'The fundamental difference between promotion and spam',
      content: `There's a fine line between strategic promotion and spam, and most Discord community administrators and bot creators not only don't see this line but don't even recognize it exists. The result is a massive practice of indiscriminate self-promotion: joining dozens of servers, pasting the same invite message in every possible channel, and hoping volume compensates for the lack of strategy. This approach is not only ineffective but actively harmful. It wears down the project's reputation, generates bans that limit future reach, and contributes to the culture of distrust that causes legitimate invites to be automatically ignored.

Strategic promotion starts from a completely different principle: offering value before asking for attention. The professional who promotes a community or bot strategically understands that each server they participate in is an environment with its own culture, rules, and expectations. They genuinely integrate, contribute knowledge, build relationships, and when they mention their project, they do so in a contextualized and relevant way. The difference in results is abysmal. While spam generates dozens of entries that leave the next day, strategic promotion generates engaged members who stay and, in turn, recommend the project to others.`
    },
    {
      title: 'Positioning and clear value proposition',
      content: `Before promoting any community or bot on Discord, the creator should be able to answer with absolute clarity a simple question: why should someone join my project instead of any other? If the answer is vague, generic, or basically the same as hundreds of other projects, the problem isn't with promotion. It's with positioning. No marketing strategy compensates for the lack of a differentiated value proposition. And in the Discord ecosystem, where the supply of servers and bots is absurdly abundant, differentiation is even more critical.

A clear value proposition doesn't need to be revolutionary. It can be as simple as focusing on a specific niche that is poorly served, offering a community experience with a quality standard higher than usual, or solving a specific problem that other projects ignore. What matters is that it's genuine, communicable in one sentence, and perceivable by the user within the first minutes of interaction with the project. When the value proposition is clear and real, promotion becomes significantly easier because the creator isn't selling an empty promise. They're presenting something that actually delivers what it promises.`
    },
    {
      title: 'Organic growth: the only sustainable foundation',
      content: `Organic growth is the only type of growth that builds a sustainable foundation for any Discord project. Members who arrive through spam or artificial promotions have retention rates near zero. They enter, look for a few seconds, and leave. Or worse: they enter and stay as inactive members who inflate numbers but don't contribute to community health. Organic growth, in contrast, happens when people find the project naturally, recognize value, and decide to stay because the experience meets a real need.

Building organic growth requires patience and consistency. It means producing relevant content that naturally attracts the target audience, participating in related communities genuinely and constructively, maintaining a quality standard that makes existing members spontaneously recommend the project, and optimizing the onboarding experience so new members quickly understand the project's value and feel welcomed. This type of growth is slower initially but creates a sustainable exponential curve where each satisfied member becomes an acquisition channel. The project that grows organically doesn't depend on constant promotion campaigns to survive. It feeds on its own quality.`
    },
    {
      title: 'Building authority in the ecosystem',
      content: `Authority in the Discord ecosystem isn't won with numbers. It's won with reputation. A server with five hundred genuinely engaged members has more authority than a server with ten thousand inactive members. Authority is built when the project becomes a reference in its niche, when other creators and administrators recognize the quality of the work, when community members cite the project as a positive example, and when the project's brand is associated with professionalism, consistency, and reliability.

To build this authority, the creator needs to invest in quality across all dimensions of the project: content produced, user experience, community treatment, transparency in decisions, and consistency in delivering value. Authority is also built by contrast. In an ecosystem where most projects operate with low quality standards, maintaining a high standard consistently is, by itself, a powerful differentiator. The project recognized as a reference attracts qualified collaborators, strategic partners, and opportunities that mediocre projects never reach, regardless of their size.`
    },
    {
      title: 'Common mistakes beginners make',
      content: `The most common mistakes beginners make when promoting Discord projects follow predictable patterns. The first is the obsession with numbers. The creator focuses exclusively on increasing member count without considering quality, engagement, or retention. This obsession leads to practices like buying members, using bots to inflate counts, and promotions that attract people with no real interest in the project. The result is an illusion of growth that masks the absence of a genuine community.

The second mistake is inconsistency. The creator invests intensely in promotion for a week, then disappears for a month, then returns with another burst of activity. This inconsistency sends a clear message of amateurism and lack of commitment. Potential members perceive that the project isn't taken seriously and decide not to invest their time in something that could be abandoned at any moment. The third mistake is ignoring the onboarding experience. The new member arrives at the server and finds disorganized channels, confusing or nonexistent rules, no guidance on what to do or how to participate, and an atmosphere that doesn't communicate professionalism. The first impression defines whether the member stays or goes, and most projects waste this opportunity through negligence in the initial experience.`
    },
    {
      title: 'Long-term mindset: projects that last',
      content: `The mindset that sustains lasting Discord projects is fundamentally different from the mindset seeking quick results. The creator with long-term vision understands that the first months are for building foundations, not harvesting results. They invest in structure, culture, processes, and relationships, knowing these investments mature over time and create a base that supports future growth. They don't despair over low numbers at the start because they understand that quality precedes quantity in any sustainable endeavor.

Projects that last on Discord are built by people who treat their communities and bots as professional ventures, not disposable hobbies. This means having a clear vision of where the project is heading, maintaining quality standards even when nobody is watching, making difficult decisions when necessary, and resisting the temptation of shortcuts that compromise the project's integrity. Promotion, in this context, stops being a separate activity and becomes a natural consequence of a well-built project. When the work is genuinely good and consistent, the right community finds its way to it. The creator's role is to ensure that when this happens, the experience lives up to expectations.`
    },
  ];

  const articleTitle = getText(language,
    'Como Divulgar Comunidades e Bots no Discord de Forma Estratégica',
    'How to Strategically Promote Discord Communities and Bots'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Como Divulgar Comunidades e Bots no Discord de Forma Estratégica | Talisson Souza',
          'How to Strategically Promote Discord Communities and Bots | Talisson Souza'
        )}
        description={getText(language,
          'Guia estratégico sobre divulgação de comunidades e bots no Discord com foco em crescimento orgânico, posicionamento e autoridade.',
          'Strategic guide on promoting Discord communities and bots focusing on organic growth, positioning, and authority.'
        )}
        canonical={language === 'en' ? '/en-us/articles/discord-promotion' : '/artigos/divulgacao-discord'}
        type="article"
        publishedTime="2025-02-14"
        keywords={language === 'pt'
          ? ['divulgação discord', 'crescimento orgânico discord', 'promover servidor discord', 'marketing discord', 'comunidade discord']
          : ['discord promotion', 'discord organic growth', 'promote discord server', 'discord marketing', 'discord community']
        }
      />

      <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to={language === 'en' ? '/en-us/articles' : '/artigos'} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>
            <div className="max-w-4xl">
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium">
                {getText(language, 'Artigo', 'Article')}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-4">{articleTitle}</AnimatedTitle>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{getText(language, '14 de Fevereiro, 2025', 'February 14, 2025')}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{getText(language, '16 min de leitura', '16 min read')}</span></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground">{tag}</span>))}
              </div>
              <ShareButtons title={articleTitle} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                <p className="text-base text-foreground/90 leading-[1.9]">
                  {getText(language,
                    'Divulgar um projeto no Discord vai muito além de colar convites em servidores. Este artigo explora as diferenças entre divulgação estratégica e spam, a importância do crescimento orgânico e como construir autoridade real no ecossistema.',
                    'Promoting a project on Discord goes far beyond pasting invites in servers. This article explores the differences between strategic promotion and spam, the importance of organic growth, and how to build real authority in the ecosystem.'
                  )}
                </p>
              </div>
            </ScrollReveal>
            <div className="space-y-12">
              {sections.map((section, index) => (
                <ScrollReveal key={index} delay={0.05}>
                  <article className="relative">
                    <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">{section.title}</h2>
                    <div className="text-base text-muted-foreground leading-[1.9] whitespace-pre-line">{section.content}</div>
                    {index < sections.length - 1 && (<div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />)}
                  </article>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-muted-foreground">{getText(language, 'Gostou do artigo? Compartilhe!', 'Enjoyed the article? Share it!')}</p>
                <ShareButtons title={articleTitle} />
              </div>
            </div>
            <ScrollReveal>
              <div className="mt-20 pt-10 border-t border-border/30">
                <div className="flex flex-col items-center text-center">
                  <p className="text-lg font-serif text-foreground mb-1">Talisson Souza</p>
                  <p className="text-sm text-muted-foreground">CEO {getText(language, 'e Fundador da', 'and Founder of')} Cheetah Solutions Network</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscordPromotion;
