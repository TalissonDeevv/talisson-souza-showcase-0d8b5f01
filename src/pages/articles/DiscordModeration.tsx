import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleAuthorHeader from "@/components/ui/ArticleAuthorHeader";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import RelatedArticles from "@/components/ui/RelatedArticles";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const DiscordModeration = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Discord', 'Moderação', 'Gestão', 'Liderança', 'Comunidade']
    : ['Discord', 'Moderation', 'Management', 'Leadership', 'Community'];

  const sections = language === 'pt' ? [
    {
      title: 'Poder e responsabilidade: a distinção que define a qualidade da gestão',
      content: `A moderação em servidores Discord é frequentemente tratada como uma função de poder. Quem modera pode silenciar, banir, apagar mensagens e controlar quem fala e quem não fala. Essa visão, além de reducionista, é a raiz da maioria dos problemas que comunidades enfrentam em termos de gestão. O moderador que entende sua função como exercício de poder inevitavelmente abusa dele, seja de forma consciente ou inconsciente. A moderação competente não se define pelo poder que exerce, mas pela responsabilidade que carrega. O moderador é o guardião da cultura da comunidade, o mediador de conflitos, e o representante dos valores que o projeto defende.

A distinção entre poder e responsabilidade não é filosófica. Ela tem consequências práticas diretas na saúde de qualquer comunidade. Moderadores que operam com mentalidade de poder criam ambientes autoritários onde membros têm medo de se expressar, onde as regras são aplicadas de forma arbitrária, e onde o favoritismo determina quem recebe tolerância e quem recebe punição. Moderadores que operam com mentalidade de responsabilidade criam ambientes seguros, previsíveis e respeitosos, onde as regras existem para proteger a experiência de todos e onde a consistência na aplicação dessas regras gera confiança e estabilidade.`
    },
    {
      title: 'Estrutura organizacional da staff: hierarquia com propósito',
      content: `Uma equipe de moderação eficiente precisa de estrutura organizacional clara. Isso não significa criar uma hierarquia rígida e burocrática com dezenas de cargos e níveis de permissão. Significa definir com clareza quem é responsável por quê, quais são os limites de atuação de cada nível, como as decisões são tomadas e escaladas, e como a comunicação interna funciona. A falta de estrutura gera confusão, sobreposição de responsabilidades, decisões contraditórias e, inevitavelmente, conflitos internos que se tornam visíveis para a comunidade.

A estrutura ideal depende do tamanho e da complexidade da comunidade, mas alguns princípios são universais. Primeiro, cada membro da equipe deve saber exatamente quais são suas responsabilidades e seus limites. Segundo, deve existir um canal de comunicação interno exclusivo para a staff onde decisões são discutidas, documentadas e alinhadas. Terceiro, deve haver um processo claro de escalação para situações que excedem a autoridade ou a capacidade de um moderador individual. Quarto, deve existir revisão periódica das decisões tomadas pela equipe para identificar inconsistências e oportunidades de melhoria. Uma equipe sem estrutura é apenas um grupo de pessoas com permissões elevadas, e permissões elevadas sem direção são uma receita para problemas.`
    },
    {
      title: 'Regras claras e cultura interna: o fundamento de tudo',
      content: `As regras de uma comunidade não são apenas um texto legal que ninguém lê. São a expressão codificada da cultura que o projeto deseja cultivar. Regras bem escritas comunicam não apenas o que é proibido, mas por que é proibido. Elas estabelecem expectativas claras sobre o comportamento esperado, sobre o tom das interações, sobre os limites do aceitável, e sobre as consequências de violações. Regras vagas geram interpretações conflitantes. Regras excessivamente detalhadas geram burocracia. O equilíbrio está em regras que são claras o suficiente para serem aplicadas com consistência, mas flexíveis o suficiente para permitir julgamento contextual.

A cultura interna de uma comunidade é muito mais do que suas regras escritas. É o conjunto de comportamentos, valores e expectativas não escritos que definem como as pessoas interagem. A cultura é moldada principalmente pelo exemplo da liderança e da equipe de moderação. Se a equipe de moderação é profissional, respeitosa e consistente, a comunidade tende a refletir esses valores. Se a equipe de moderação é arbitrária, desrespeitosa ou inconsistente, a comunidade absorve esses padrões e os reproduz. Construir uma cultura saudável exige atenção constante, autocrítica, e disposição para corrigir o próprio comportamento antes de exigir padrões dos outros.`
    },
    {
      title: 'Gestão de conflitos: prevenção sobre reação',
      content: `Conflitos são inevitáveis em qualquer comunidade com interação humana significativa. A questão não é se conflitos vão acontecer, mas como serão geridos quando acontecerem. A abordagem mais madura é a preventiva: criar condições que minimizam a ocorrência de conflitos antes que eles se manifestem. Isso inclui regras claras, comunicação transparente, canais adequados para diferentes tipos de interação, e uma cultura onde desentendimentos são resolvidos com diálogo em vez de confronto.

Quando conflitos inevitavelmente surgem, a forma como são geridos define a percepção que a comunidade tem da liderança. Moderadores que reagem emocionalmente, que tomam partido sem investigar, que punem com severidade desproporcional, ou que ignoram conflitos esperando que se resolvam sozinhos, estão falhando na sua responsabilidade fundamental. A gestão competente de conflitos exige escuta ativa, investigação dos fatos, comunicação clara das decisões tomadas e dos motivos por trás delas, e disponibilidade para reconhecer erros e corrigir curso quando necessário. Cada conflito bem gerido fortalece a confiança da comunidade na liderança. Cada conflito mal gerido a enfraquece.`
    },
    {
      title: 'Segurança e organização: proteção do ecossistema',
      content: `A segurança em servidores Discord vai além de configurar permissões de canal. Envolve proteção contra raids, prevenção de phishing e engenharia social, gestão cuidadosa de integrações e bots de terceiros, backup de configurações críticas, e monitoramento contínuo de atividades suspeitas. A maioria dos administradores só pensa em segurança depois de sofrer um incidente, quando os danos já foram causados e a confiança da comunidade já foi comprometida. A abordagem profissional é antecipar ameaças e implementar medidas preventivas antes que sejam necessárias.

A organização do servidor é igualmente crítica para a experiência da comunidade. Canais devem ter propósitos claros e bem definidos. A estrutura de categorias deve ser intuitiva para novos membros. Canais desnecessários ou redundantes devem ser removidos. Informações importantes devem ser facilmente acessíveis. A experiência de um membro que entra pela primeira vez no servidor define se ele vai explorar e se engajar ou se vai sair imediatamente. Servidores desorganizados, com dezenas de canais sem propósito claro, com informações desatualizadas e com navegação confusa, comunicam descuido e amadorismo, independentemente da qualidade do conteúdo que existe em algum canto escondido da estrutura.`
    },
    {
      title: 'O papel estratégico da moderação na longevidade da comunidade',
      content: `A moderação não é uma função operacional secundária. É uma função estratégica que determina a longevidade e a saúde de qualquer comunidade no Discord. Comunidades que sobrevivem por anos e mantêm altos níveis de engajamento invariavelmente têm equipes de moderação competentes, bem estruturadas e alinhadas com a visão do projeto. Comunidades que nascem com grande entusiasmo mas declinam rapidamente quase sempre têm moderação ausente, inconsistente ou abusiva.

O moderador estratégico entende que seu trabalho vai além de reagir a violações de regras. Ele observa tendências de comportamento, identifica riscos antes que se materializem, sugere melhorias nas políticas e processos, contribui para a evolução da cultura da comunidade, e serve como ponte entre a liderança e os membros. Ele entende que a comunidade é um organismo vivo que precisa de cuidado contínuo, adaptação e atenção. O investimento em moderação de qualidade é, possivelmente, o investimento mais importante que um projeto de comunidade pode fazer, porque a qualidade da moderação determina a qualidade da experiência, e a qualidade da experiência determina se as pessoas permanecem ou vão embora. Nenhuma funcionalidade, nenhum bot, e nenhuma campanha de marketing substitui uma equipe de moderação que genuinamente se importa com a comunidade que protege.`
    },
  ] : [
    {
      title: 'Power and responsibility: the distinction that defines management quality',
      content: `Moderation in Discord servers is frequently treated as a power function. Those who moderate can mute, ban, delete messages, and control who speaks and who doesn't. This view, besides being reductionist, is the root of most problems communities face in terms of management. The moderator who understands their role as an exercise of power inevitably abuses it, whether consciously or unconsciously. Competent moderation isn't defined by the power it exercises but by the responsibility it carries. The moderator is the guardian of community culture, the mediator of conflicts, and the representative of the values the project defends.

The distinction between power and responsibility isn't philosophical. It has direct practical consequences on any community's health. Moderators who operate with a power mentality create authoritarian environments where members are afraid to express themselves, where rules are applied arbitrarily, and where favoritism determines who receives tolerance and who receives punishment. Moderators who operate with a responsibility mentality create safe, predictable, and respectful environments where rules exist to protect everyone's experience and where consistency in applying these rules generates trust and stability.`
    },
    {
      title: 'Staff organizational structure: hierarchy with purpose',
      content: `An efficient moderation team needs clear organizational structure. This doesn't mean creating a rigid, bureaucratic hierarchy with dozens of roles and permission levels. It means clearly defining who is responsible for what, what are the limits of each level's authority, how decisions are made and escalated, and how internal communication works. Lack of structure generates confusion, overlapping responsibilities, contradictory decisions, and inevitably internal conflicts that become visible to the community.

The ideal structure depends on the community's size and complexity, but some principles are universal. First, each team member must know exactly what their responsibilities and limits are. Second, there must be an exclusive internal communication channel for staff where decisions are discussed, documented, and aligned. Third, there must be a clear escalation process for situations exceeding an individual moderator's authority or capability. Fourth, there must be periodic review of team decisions to identify inconsistencies and improvement opportunities. A team without structure is just a group of people with elevated permissions, and elevated permissions without direction are a recipe for problems.`
    },
    {
      title: 'Clear rules and internal culture: the foundation of everything',
      content: `A community's rules aren't just legal text nobody reads. They're the codified expression of the culture the project wants to cultivate. Well-written rules communicate not only what is prohibited but why it's prohibited. They establish clear expectations about expected behavior, interaction tone, acceptable limits, and consequences of violations. Vague rules generate conflicting interpretations. Overly detailed rules generate bureaucracy. The balance lies in rules clear enough to be applied consistently but flexible enough to allow contextual judgment.

A community's internal culture is much more than its written rules. It's the set of unwritten behaviors, values, and expectations that define how people interact. Culture is shaped primarily by the example set by leadership and the moderation team. If the moderation team is professional, respectful, and consistent, the community tends to reflect those values. If the moderation team is arbitrary, disrespectful, or inconsistent, the community absorbs those patterns and reproduces them. Building a healthy culture requires constant attention, self-criticism, and willingness to correct one's own behavior before demanding standards from others.`
    },
    {
      title: 'Conflict management: prevention over reaction',
      content: `Conflicts are inevitable in any community with significant human interaction. The question isn't whether conflicts will happen, but how they'll be managed when they do. The most mature approach is preventive: creating conditions that minimize conflict occurrence before they manifest. This includes clear rules, transparent communication, appropriate channels for different types of interaction, and a culture where disagreements are resolved through dialogue rather than confrontation.

When conflicts inevitably arise, how they're managed defines the community's perception of leadership. Moderators who react emotionally, take sides without investigating, punish with disproportionate severity, or ignore conflicts hoping they'll resolve themselves are failing in their fundamental responsibility. Competent conflict management requires active listening, fact investigation, clear communication of decisions made and the reasons behind them, and willingness to acknowledge mistakes and correct course when necessary. Each well-managed conflict strengthens the community's trust in leadership. Each poorly managed conflict weakens it.`
    },
    {
      title: 'Security and organization: ecosystem protection',
      content: `Security in Discord servers goes beyond configuring channel permissions. It involves protection against raids, prevention of phishing and social engineering, careful management of third-party integrations and bots, backup of critical configurations, and continuous monitoring of suspicious activities. Most administrators only think about security after suffering an incident, when damage has already been done and community trust has already been compromised. The professional approach is anticipating threats and implementing preventive measures before they're needed.

Server organization is equally critical for the community experience. Channels must have clear, well-defined purposes. The category structure must be intuitive for new members. Unnecessary or redundant channels should be removed. Important information must be easily accessible. A member's first-time experience entering the server defines whether they'll explore and engage or leave immediately. Disorganized servers with dozens of channels without clear purpose, outdated information, and confusing navigation communicate carelessness and amateurism, regardless of the quality of content that exists in some hidden corner of the structure.`
    },
    {
      title: 'The strategic role of moderation in community longevity',
      content: `Moderation isn't a secondary operational function. It's a strategic function that determines the longevity and health of any Discord community. Communities that survive for years and maintain high engagement levels invariably have competent, well-structured moderation teams aligned with the project's vision. Communities that are born with great enthusiasm but decline rapidly almost always have absent, inconsistent, or abusive moderation.

The strategic moderator understands that their work goes beyond reacting to rule violations. They observe behavioral trends, identify risks before they materialize, suggest improvements to policies and processes, contribute to the evolution of community culture, and serve as a bridge between leadership and members. They understand that the community is a living organism that needs continuous care, adaptation, and attention. The investment in quality moderation is possibly the most important investment a community project can make, because moderation quality determines experience quality, and experience quality determines whether people stay or leave. No feature, no bot, and no marketing campaign replaces a moderation team that genuinely cares about the community it protects.`
    },
  ];

  const articleTitle = getText(language,
    'Moderação, Gestão e Administração de Servidores Discord',
    'Moderation, Management and Administration of Discord Servers'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Moderação, Gestão e Administração de Servidores Discord | Talisson Souza',
          'Moderation, Management and Administration of Discord Servers | Talisson Souza'
        )}
        description={getText(language,
          'Guia sobre moderação, gestão e administração de servidores Discord com foco em responsabilidade, estrutura organizacional, regras e segurança.',
          'Guide on Discord server moderation, management, and administration focusing on responsibility, organizational structure, rules, and security.'
        )}
        canonical={language === 'en' ? '/en-us/articles/discord-moderation' : '/artigos/moderacao-discord'}
        type="article"
        publishedTime="2025-02-14"
        keywords={language === 'pt'
          ? ['moderação discord', 'gestão servidor discord', 'administração discord', 'comunidade discord', 'staff discord']
          : ['discord moderation', 'discord server management', 'discord administration', 'discord community', 'discord staff']
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
              <AnimatedTitle variant="hero" as="h1" className="mb-4">{articleTitle}</AnimatedTitle>              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground">{tag}</span>))}
              </div>
              <ArticleAuthorHeader date="2025-02-14" readingTime={18} />

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
                    'A moderação é a função mais estratégica e menos valorizada em projetos de comunidade no Discord. Este artigo aborda a diferença entre poder e responsabilidade, a importância da estrutura organizacional, gestão de conflitos e o papel da moderação na longevidade de qualquer comunidade.',
                    'Moderation is the most strategic and least valued function in Discord community projects. This article addresses the difference between power and responsibility, the importance of organizational structure, conflict management, and moderation\'s role in any community\'s longevity.'
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
            <ArticleSEOFooter />
            <RelatedArticles currentArticleId="discord-moderation" />
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

export default DiscordModeration;
