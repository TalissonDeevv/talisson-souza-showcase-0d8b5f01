import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const PoliticsEntrepreneurship = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Política', 'Empreendedorismo', 'Pensamento Crítico', 'Responsabilidade', 'Formação']
    : ['Politics', 'Entrepreneurship', 'Critical Thinking', 'Responsibility', 'Education'];

  const sections = language === 'pt' ? [
    {
      title: 'A interseção inevitável entre política e negócios',
      content: `Existe uma crença difundida entre profissionais de tecnologia e empreendedores de que política é um assunto separado dos negócios, algo que pertence a outra esfera e que não deveria interferir nas decisões empresariais. Essa crença, além de ingênua, é perigosa. Decisões políticas definem marcos regulatórios, políticas tributárias, incentivos fiscais, regras de proteção de dados, políticas de importação de equipamentos, legislação trabalhista, e uma infinidade de fatores que impactam diretamente a operação, a viabilidade e a competitividade de qualquer empreendimento. O profissional que ignora política não está sendo neutro. Está sendo negligente com variáveis que afetam diretamente o seu negócio.

A história recente está repleta de exemplos em que mudanças políticas transformaram indústrias inteiras da noite para o dia. Regulamentações sobre privacidade de dados forçaram empresas a reestruturar completamente seus modelos de negócio. Políticas de incentivo fiscal criaram ecossistemas de inovação em regiões que antes eram irrelevantes no cenário tecnológico. Mudanças na legislação trabalhista redefiniram o custo e a viabilidade de contratar equipes locais versus remotas. Ignorar essas dinâmicas é aceitar ser surpreendido por forças que poderiam ter sido antecipadas com estudo e atenção.`
    },
    {
      title: 'O dever de estudar antes de opinar',
      content: `Em uma era de informação instantânea e redes sociais que premiam a velocidade sobre a profundidade, opinar se tornou mais fácil do que estudar. Qualquer pessoa pode publicar uma análise política em segundos, e a pressão social para se posicionar sobre temas complexos é constante. O problema é que opiniões formadas sem estudo aprofundado não apenas são inúteis, mas podem ser ativamente prejudiciais. Quando um profissional com audiência, seja um empreendedor, um desenvolvedor com seguidores, ou um líder de comunidade, emite opiniões rasas sobre temas políticos complexos, ele está desinformando seu público e contribuindo para a degradação do debate.

O pensamento crítico começa com a humildade de reconhecer a própria ignorância sobre um tema antes de formar uma opinião. Isso significa ler fontes diversas, entender os argumentos de diferentes perspectivas, analisar dados em vez de anedotas, e ser capaz de separar emoção de análise. O profissional que se posiciona publicamente sobre temas políticos sem ter feito esse trabalho prévio não está exercendo liberdade de expressão. Está exercendo irresponsabilidade, porque o impacto da sua voz é proporcional ao tamanho da sua audiência, e a responsabilidade deveria acompanhar esse impacto.`
    },
    {
      title: 'Pensamento crítico como competência profissional',
      content: `O pensamento crítico não é uma habilidade abstrata ou acadêmica. É uma competência profissional essencial que afeta diretamente a qualidade das decisões que um empreendedor toma. O profissional que desenvolve pensamento crítico é capaz de avaliar fontes de informação, identificar vieses, questionar premissas, considerar consequências de segunda e terceira ordem, e tomar decisões baseadas em análise e não em reação emocional. Essas habilidades são tão relevantes para avaliar uma proposta de negócio quanto para avaliar uma proposta política.

A falta de pensamento crítico se manifesta de formas previsíveis: adesão acrítica a narrativas partidárias, rejeição automática de qualquer informação que contradiga crenças prévias, incapacidade de considerar nuances, e tendência a simplificar problemas complexos em dicotomias falsas. Quando essa postura se transfere para o ambiente profissional, as consequências são igualmente previsíveis: decisões baseadas em modismos, incapacidade de avaliar riscos reais, e vulnerabilidade a discursos persuasivos que carecem de substância. O empreendedor que não cultiva pensamento crítico está condenado a tomar decisões medíocres em todas as esferas da sua vida profissional.`
    },
    {
      title: 'Responsabilidade ao produzir conteúdo',
      content: `Produzir conteúdo é um ato de influência. Quando um profissional publica um artigo, grava um vídeo, ou posta uma opinião em redes sociais, ele está exercendo influência sobre pessoas que confiam na sua expertise. Essa confiança é um capital precioso que pode ser construído ao longo de anos e destruído em segundos com uma declaração irresponsável. O profissional que mistura conteúdo técnico com opiniões políticas superficiais não está apenas arriscando sua reputação pessoal. Está comprometendo a credibilidade de todo o conteúdo que produziu anteriormente.

A responsabilidade ao produzir conteúdo começa com a distinção clara entre fato e opinião, entre análise fundamentada e especulação, entre posicionamento informado e reação emocional. O profissional que decide abordar temas políticos em seus canais deveria aplicar o mesmo rigor que aplica ao seu trabalho técnico: pesquisa aprofundada, verificação de fontes, consideração de múltiplas perspectivas, e honestidade sobre as limitações do seu próprio conhecimento. Conteúdo político produzido com rigor pode ser valioso e necessário. Conteúdo político produzido com preguiça intelectual é ruído que polui o ambiente informacional e mina a confiança do público.`
    },
    {
      title: 'O impacto na formação intelectual e no público',
      content: `Todo conteúdo que consumimos e produzimos contribui para a formação da nossa visão de mundo e da visão de mundo do nosso público. Um empreendedor que consome exclusivamente conteúdo que confirma suas crenças prévias está construindo uma câmara de eco que limita sua capacidade de inovação, de adaptação e de compreensão do mercado. Da mesma forma, um profissional que produz conteúdo sem rigor intelectual está contribuindo para a formação de uma audiência igualmente limitada, incapaz de pensamento independente e vulnerável a manipulação.

A formação intelectual é um investimento de longo prazo que vai muito além de habilidades técnicas específicas. Inclui a capacidade de ler criticamente, de argumentar com lógica, de reconhecer falácias, de dialogar com ideias diferentes das suas sem sentir que sua identidade está sendo ameaçada. O empreendedor que investe na sua formação intelectual ampla está investindo na qualidade das suas decisões futuras, na robustez da sua visão estratégica e na profundidade da sua capacidade de liderança. Tecnologia muda constantemente. A capacidade de pensar com clareza, rigor e independência é um ativo que nunca se deprecia.`
    },
    {
      title: 'Maturidade é saber quando calar e quando falar',
      content: `A maturidade profissional se manifesta não apenas no que dizemos, mas no que escolhemos não dizer. O impulso de opinar sobre tudo, de reagir a cada acontecimento político com um post ou um comentário, é uma tentação constante em uma cultura digital que recompensa a presença contínua e a controvérsia. Resistir a esse impulso quando não se tem conhecimento suficiente sobre o tema não é covardia ou omissão. É responsabilidade. O silêncio informado é infinitamente mais respeitável do que a opinião desinformada.

O profissional que entende a interseção entre política e empreendedorismo, que estuda antes de opinar, que produz conteúdo com rigor e responsabilidade, e que reconhece os limites do seu próprio conhecimento está construindo algo muito mais valioso do que uma presença digital ativa. Está construindo uma reputação de integridade intelectual que atrai respeito, confiança e oportunidades de longo prazo. Em um mercado saturado de vozes que competem por atenção a qualquer custo, a voz ponderada, informada e responsável se destaca não pelo volume, mas pela substância. E substância, ao contrário de viralidade, é um ativo que se valoriza com o tempo.`
    },
  ] : [
    {
      title: 'The inevitable intersection between politics and business',
      content: `There's a widespread belief among technology professionals and entrepreneurs that politics is a separate matter from business, something that belongs to another sphere and shouldn't interfere with business decisions. This belief, besides being naive, is dangerous. Political decisions define regulatory frameworks, tax policies, fiscal incentives, data protection rules, equipment import policies, labor legislation, and countless factors that directly impact the operation, viability, and competitiveness of any enterprise. The professional who ignores politics isn't being neutral. They're being negligent with variables that directly affect their business.

Recent history is full of examples where political changes transformed entire industries overnight. Data privacy regulations forced companies to completely restructure their business models. Tax incentive policies created innovation ecosystems in regions that were previously irrelevant in the technology landscape. Changes in labor legislation redefined the cost and viability of hiring local versus remote teams. Ignoring these dynamics means accepting being surprised by forces that could have been anticipated with study and attention.`
    },
    {
      title: 'The duty to study before opining',
      content: `In an era of instant information and social media that rewards speed over depth, opining has become easier than studying. Anyone can publish a political analysis in seconds, and the social pressure to take a position on complex topics is constant. The problem is that opinions formed without deep study are not only useless but can be actively harmful. When a professional with an audience, whether an entrepreneur, a developer with followers, or a community leader, issues shallow opinions on complex political topics, they're misinforming their audience and contributing to the degradation of debate.

Critical thinking begins with the humility to recognize one's own ignorance on a topic before forming an opinion. This means reading diverse sources, understanding arguments from different perspectives, analyzing data instead of anecdotes, and being able to separate emotion from analysis. The professional who publicly positions themselves on political topics without having done this prior work isn't exercising freedom of expression. They're exercising irresponsibility, because the impact of their voice is proportional to the size of their audience, and responsibility should accompany that impact.`
    },
    {
      title: 'Critical thinking as a professional competency',
      content: `Critical thinking is not an abstract or academic skill. It's an essential professional competency that directly affects the quality of decisions an entrepreneur makes. The professional who develops critical thinking is able to evaluate information sources, identify biases, question assumptions, consider second and third-order consequences, and make decisions based on analysis rather than emotional reaction. These skills are as relevant for evaluating a business proposal as they are for evaluating a political proposal.

The lack of critical thinking manifests in predictable ways: uncritical adherence to partisan narratives, automatic rejection of any information that contradicts prior beliefs, inability to consider nuances, and tendency to simplify complex problems into false dichotomies. When this posture transfers to the professional environment, the consequences are equally predictable: decisions based on trends, inability to assess real risks, and vulnerability to persuasive discourse lacking substance. The entrepreneur who doesn't cultivate critical thinking is condemned to making mediocre decisions in all spheres of their professional life.`
    },
    {
      title: 'Responsibility when producing content',
      content: `Producing content is an act of influence. When a professional publishes an article, records a video, or posts an opinion on social media, they're exercising influence over people who trust their expertise. This trust is precious capital that can be built over years and destroyed in seconds with an irresponsible statement. The professional who mixes technical content with superficial political opinions isn't just risking their personal reputation. They're compromising the credibility of all the content they've previously produced.

Responsibility when producing content begins with the clear distinction between fact and opinion, between substantiated analysis and speculation, between informed positioning and emotional reaction. The professional who decides to address political topics in their channels should apply the same rigor they apply to their technical work: in-depth research, source verification, consideration of multiple perspectives, and honesty about the limitations of their own knowledge. Political content produced with rigor can be valuable and necessary. Political content produced with intellectual laziness is noise that pollutes the informational environment and undermines public trust.`
    },
    {
      title: 'The impact on intellectual formation and the audience',
      content: `All content we consume and produce contributes to shaping our worldview and our audience's worldview. An entrepreneur who exclusively consumes content that confirms their prior beliefs is building an echo chamber that limits their capacity for innovation, adaptation, and market understanding. Similarly, a professional who produces content without intellectual rigor is contributing to forming an equally limited audience, incapable of independent thought and vulnerable to manipulation.

Intellectual formation is a long-term investment that goes far beyond specific technical skills. It includes the ability to read critically, to argue with logic, to recognize fallacies, to dialogue with ideas different from your own without feeling that your identity is being threatened. The entrepreneur who invests in their broad intellectual formation is investing in the quality of their future decisions, the robustness of their strategic vision, and the depth of their leadership capacity. Technology changes constantly. The ability to think with clarity, rigor, and independence is an asset that never depreciates.`
    },
    {
      title: 'Maturity is knowing when to be silent and when to speak',
      content: `Professional maturity manifests not only in what we say but in what we choose not to say. The impulse to opine on everything, to react to every political event with a post or comment, is a constant temptation in a digital culture that rewards continuous presence and controversy. Resisting this impulse when you don't have sufficient knowledge on the topic isn't cowardice or omission. It's responsibility. Informed silence is infinitely more respectable than uninformed opinion.

The professional who understands the intersection between politics and entrepreneurship, who studies before opining, who produces content with rigor and responsibility, and who recognizes the limits of their own knowledge is building something much more valuable than an active digital presence. They're building a reputation of intellectual integrity that attracts respect, trust, and long-term opportunities. In a market saturated with voices competing for attention at any cost, the measured, informed, and responsible voice stands out not by volume but by substance. And substance, unlike virality, is an asset that appreciates over time.`
    },
  ];

  const articleTitle = getText(language,
    'Política e Empreendedorismo: Por Que Estudar Antes de Opinar',
    'Politics and Entrepreneurship: Why Study Before Opining'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Política e Empreendedorismo: Por Que Estudar Antes de Opinar | Talisson Souza',
          'Politics and Entrepreneurship: Why Study Before Opining | Talisson Souza'
        )}
        description={getText(language,
          'Reflexão sobre como decisões políticas impactam negócios e tecnologia, a importância do pensamento crítico e a responsabilidade ao produzir conteúdo.',
          'Reflection on how political decisions impact business and technology, the importance of critical thinking, and responsibility when producing content.'
        )}
        canonical={language === 'en' ? '/en-us/articles/politics-entrepreneurship' : '/artigos/politica-empreendedorismo'}
        type="article"
        publishedTime="2025-02-14"
        keywords={language === 'pt'
          ? ['política e empreendedorismo', 'pensamento crítico', 'responsabilidade digital', 'formação intelectual', 'negócios e política']
          : ['politics and entrepreneurship', 'critical thinking', 'digital responsibility', 'intellectual formation', 'business and politics']
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
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{getText(language, '17 min de leitura', '17 min read')}</span></div>
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
                    'Política e empreendedorismo são esferas inseparáveis. Este artigo explora como decisões políticas impactam diretamente negócios e tecnologia, a necessidade de pensamento crítico e a responsabilidade que todo profissional com audiência carrega ao se posicionar publicamente.',
                    'Politics and entrepreneurship are inseparable spheres. This article explores how political decisions directly impact business and technology, the need for critical thinking, and the responsibility every professional with an audience carries when taking public positions.'
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

export default PoliticsEntrepreneurship;
