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

const VisionAndPersistence = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Empreendedorismo', 'Visão', 'Persistência', 'Mentalidade', 'Cheetah Solutions']
    : ['Entrepreneurship', 'Vision', 'Persistence', 'Mindset', 'Cheetah Solutions'];

  const sections = language === 'pt' ? [
    {
      title: 'O prédio que ainda não existe',
      content: `Outro dia eu estava passando por uma região comercial da cidade, observando aqueles prédios corporativos enormes, bem estruturados, com fachadas que transmitem solidez e presença. E no meio desse percurso, quase sem querer, me veio uma imagem à cabeça: a Cheetah Solutions num lugar assim, com um andar inteiro, uma equipe consolidada, projetos de impacto rodando em paralelo. Não foi um delírio nem um momento de euforia. Foi algo mais silencioso, mais profundo. Uma visão. E o que me chamou atenção não foi a imagem em si, mas o fato de que ela pareceu possível. Não fácil, não próxima, mas possível. E aí eu percebi que esse sentimento não é exclusivo meu. Qualquer pessoa que empreende, que constrói algo do zero, que aposta numa ideia antes de ter qualquer validação externa, já sentiu isso em algum momento. A diferença entre quem segue e quem para está justamente na forma como cada um lida com essa visão quando o dia a dia aperta.`
    },
    {
      title: 'A ilusão do sucesso repentino',
      content: `Existe uma narrativa muito comum, especialmente nas redes sociais, de que empresas de sucesso surgiram da noite para o dia. Alguém postou um vídeo, viralizou, e de repente está faturando milhões. Essa narrativa é perigosa porque cria uma expectativa completamente desconectada da realidade. O que não aparece nos posts são os anos de tentativa, os meses sem faturamento, as noites em que o fundador se perguntou se estava no caminho certo, as decisões difíceis tomadas com informação incompleta e sob pressão. A Cheetah Solutions, por exemplo, não nasceu como empresa. Nasceu como vontade. Nasceu de um computador, de madrugadas escrevendo código, de projetos que não deram certo e de lições que só o erro ensina. Cada pequeno passo, por mais invisível que parecesse na época, foi construindo algo. E é exatamente essa construção silenciosa que separa quem empreende de verdade de quem apenas fantasia sobre empreender.`
    },
    {
      title: 'Persistência não é romantismo',
      content: `É comum ouvir que "persistência é a chave do sucesso", como se fosse um mantra mágico que resolve qualquer problema. Mas persistência, na prática, é muito menos glamourosa do que parece. Persistir é abrir o computador na segunda-feira sabendo que a semana vai ser difícil. É responder e-mails que não vão gerar retorno imediato. É investir tempo em algo que ainda não paga as contas. É ouvir "não" repetidamente e continuar ajustando a rota sem perder a direção. Quando você está no meio do processo, parece que nada está funcionando. Parece que os outros estão na frente, que você está atrasado, que não vai dar certo. Mas essa sensação é parte do caminho, não o sinal para parar. Os momentos mais difíceis são justamente os que mais ensinam, porque cada problema resolvido te prepara para o próximo nível de complexidade. Desistir é a única forma garantida de não chegar lá. Enquanto você estiver tentando, existe chance. E chance é tudo que qualquer empreendedor precisa.`
    },
    {
      title: 'O ambiente define o ritmo',
      content: `Uma coisa que aprendi ao longo dos últimos anos é que o ambiente em que você está inserido influencia diretamente a sua capacidade de continuar. Se você está cercado de pessoas que não entendem o que você está construindo, que duvidam das suas escolhas, que minimizam seu esforço ou que simplesmente não compartilham da mesma mentalidade, o peso de cada dia fica desproporcional. Por outro lado, quando você encontra pessoas que estão na mesma caminhada, que entendem o sacrifício envolvido, que celebram as pequenas vitórias e que te puxam pra cima quando o cansaço bate, tudo muda. Comunidade importa. Networking importa. Não como algo superficial ou transacional, mas como troca genuína entre pessoas que acreditam no que estão fazendo e que sabem que construir algo relevante exige tempo, paciência e consistência.`
    },
    {
      title: 'A visão como combustível',
      content: `Medo de falhar, medo de julgamento, medo de investir e perder, medo de não ser bom o suficiente. Todo empreendedor lida com isso, independentemente do estágio em que está. A diferença é que quem vai longe não deixa o medo tomar as decisões. A visão precisa ser maior que o medo. Quando você tem clareza do que quer construir, quando entende por que está fazendo o que faz, o medo deixa de ser um obstáculo e passa a ser combustível. Ele te mantém alerta, te obriga a ser melhor, te impede de ficar confortável demais. E talvez esse seja o ponto central de tudo: empreender não é sobre ausência de medo, é sobre agir apesar dele. Tem dias que você trabalha doze horas e parece que nada mudou. Tem semanas que o faturamento não sai do lugar. Tem meses que você se pergunta se valeu a pena. Mas o progresso nem sempre é visível no momento em que acontece. Cada linha de código, cada reunião, cada decisão tomada com responsabilidade está construindo algo maior do que você consegue ver agora. Plante as sementes certas, regue com consistência, e os resultados aparecem. Não no tempo que você quer, mas no tempo certo.`
    },
    {
      title: 'Legado, não apenas negócio',
      content: `No final das contas, o que fica não é quanto dinheiro você fez ou quantos funcionários teve. O que fica é o impacto que você gerou, as pessoas que ajudou a crescer, a diferença que fez no mercado e na vida de quem cruzou o seu caminho. Construa algo que você tenha orgulho de assinar. Algo que, quando alguém perguntar "quem fez isso?", você possa levantar a mão sem hesitar. Empreender é, no fundo, sobre deixar o mundo um pouco melhor do que você encontrou. Uma empresa de cada vez, um projeto de cada vez, um dia de cada vez. Se a gente consegue imaginar, é porque é possível. E se é possível, a única variável que falta é o tempo. Uma hora a gente chega lá.`
    },
  ] : [
    {
      title: 'The building that doesn\'t exist yet',
      content: `The other day I was walking through a commercial district, observing those enormous corporate buildings, well-structured, with facades that convey solidity and presence. And somewhere along the way, almost involuntarily, an image came to mind: Cheetah Solutions in a place like that, with an entire floor, a consolidated team, impactful projects running in parallel. It wasn't a delusion or a moment of euphoria. It was something quieter, deeper. A vision. What struck me wasn't the image itself, but the fact that it felt possible. Not easy, not close, but possible. And then I realized that this feeling isn't exclusive to me. Anyone who builds something from scratch, who bets on an idea before having any external validation, has felt this at some point. The difference between those who keep going and those who stop lies precisely in how each person handles that vision when daily life gets tough.`
    },
    {
      title: 'The illusion of overnight success',
      content: `There's a very common narrative, especially on social media, that successful companies emerged overnight. Someone posted a video, it went viral, and suddenly they're making millions. This narrative is dangerous because it creates expectations completely disconnected from reality. What doesn't show up in the posts are the years of trying, the months without revenue, the nights when the founder wondered if they were on the right path, the difficult decisions made with incomplete information and under pressure. Cheetah Solutions, for example, wasn't born as a company. It was born as desire. It came from a computer, from late nights writing code, from projects that didn't work out and lessons that only failure teaches. Every small step, no matter how invisible it seemed at the time, was building something. And it's precisely this silent construction that separates those who truly build from those who merely fantasize about building.`
    },
    {
      title: 'Persistence isn\'t romanticism',
      content: `It's common to hear that "persistence is the key to success," as if it were a magic mantra that solves everything. But persistence, in practice, is far less glamorous than it sounds. Persisting means opening your computer on Monday knowing the week will be tough. It means answering emails that won't generate immediate returns. It means investing time in something that doesn't yet pay the bills. It means hearing "no" repeatedly and continuing to adjust course without losing direction. When you're in the middle of the process, it feels like nothing is working. It feels like others are ahead, that you're behind, that it won't work out. But that feeling is part of the path, not the signal to stop. The hardest moments are precisely the ones that teach the most, because every problem solved prepares you for the next level of complexity. Giving up is the only guaranteed way to not get there. As long as you're trying, there's a chance. And a chance is all any entrepreneur needs.`
    },
    {
      title: 'The environment sets the pace',
      content: `One thing I've learned over the past few years is that the environment you're in directly influences your ability to keep going. If you're surrounded by people who don't understand what you're building, who doubt your choices, who minimize your effort or who simply don't share the same mindset, the weight of each day becomes disproportionate. On the other hand, when you find people who are on the same journey, who understand the sacrifice involved, who celebrate small victories and pull you up when exhaustion hits, everything changes. Community matters. Networking matters. Not as something superficial or transactional, but as genuine exchange between people who believe in what they're doing and who know that building something relevant requires time, patience, and consistency.`
    },
    {
      title: 'Vision as fuel',
      content: `Fear of failing, fear of judgment, fear of investing and losing, fear of not being good enough. Every entrepreneur deals with this, regardless of the stage they're at. The difference is that those who go far don't let fear make the decisions. The vision needs to be bigger than the fear. When you have clarity about what you want to build, when you understand why you're doing what you do, fear stops being an obstacle and becomes fuel. It keeps you alert, forces you to be better, prevents you from getting too comfortable. And perhaps that's the central point of everything: entrepreneurship isn't about the absence of fear, it's about acting despite it. There are days when you work twelve hours and it seems like nothing changed. There are weeks when revenue doesn't budge. There are months when you wonder if it was worth it. But progress isn't always visible at the moment it happens. Every line of code, every meeting, every decision made with responsibility is building something bigger than you can see right now. Plant the right seeds, water with consistency, and the results will come. Not in the time you want, but at the right time.`
    },
    {
      title: 'Legacy, not just business',
      content: `At the end of the day, what remains isn't how much money you made or how many employees you had. What remains is the impact you generated, the people you helped grow, the difference you made in the market and in the lives of those who crossed your path. Build something you're proud to sign. Something that when someone asks "who did this?", you can raise your hand without hesitation. Entrepreneurship is, at its core, about leaving the world a little better than you found it. One company at a time, one project at a time, one day at a time. If we can imagine it, it's because it's possible. And if it's possible, the only variable left is time. We'll get there eventually.`
    },
  ];

  const articleTitle = getText(language,
    'Se a Gente Consegue Imaginar, É Porque É Possível',
    'If We Can Imagine It, It\'s Because It\'s Possible'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Se a Gente Consegue Imaginar, É Porque É Possível | Talisson Souza',
          'If We Can Imagine It, It\'s Because It\'s Possible | Talisson Souza'
        )}
        description={getText(language,
          'Reflexão sobre visão, persistência e empreendedorismo. Toda grande empresa começou com alguém imaginando algo que ainda não existia.',
          'A reflection on vision, persistence and entrepreneurship. Every great company started with someone imagining something that didn\'t exist yet.'
        )}
        canonical={language === 'en' ? '/en-us/articles/vision-and-persistence' : '/artigos/visao-e-persistencia'}
        type="article"
        publishedTime="2025-02-10"
        keywords={language === 'pt'
          ? ['empreendedorismo', 'visão', 'persistência', 'mentalidade empreendedora', 'cheetah solutions', 'motivação']
          : ['entrepreneurship', 'vision', 'persistence', 'entrepreneurial mindset', 'cheetah solutions', 'motivation']
        }
      />

      {/* Hero Section */}
      <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link
              to={language === 'en' ? '/en-us/articles' : '/artigos'}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>

            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium"
              >
                {getText(language, 'Artigo', 'Article')}
              </motion.span>

              <AnimatedTitle variant="hero" as="h1" className="mb-4">
                {articleTitle}
              </AnimatedTitle>

              <ArticleAuthorHeader date="2025-02-10" readingTime={8} />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <ShareButtons title={articleTitle} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <ScrollReveal>
              <div className="mb-16 p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                <p className="text-base text-foreground/90 leading-[1.9]">
                  {getText(language,
                    'Empreender é, antes de tudo, um ato de imaginação. É olhar para o mundo como ele é e enxergar como ele poderia ser. Este artigo é uma reflexão pessoal sobre visão, persistência e a coragem de continuar construindo, mesmo quando o caminho parece longo demais.',
                    'Entrepreneurship is, above all, an act of imagination. It\'s looking at the world as it is and seeing how it could be. This article is a personal reflection on vision, persistence, and the courage to keep building, even when the path seems too long.'
                  )}
                </p>
              </div>
            </ScrollReveal>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <ScrollReveal key={index} delay={0.05}>
                  <article className="relative">
                    <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <div className="text-base text-muted-foreground leading-[1.9] whitespace-pre-line">
                      {section.content}
                    </div>
                    {index < sections.length - 1 && (
                      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* Central Message */}
            <ScrollReveal>
              <div className="my-16 p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm text-center">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                  {getText(language, 'Mensagem Final', 'Final Message')}
                </h2>
                <p className="text-base text-muted-foreground leading-[1.9] max-w-2xl mx-auto mb-4">
                  {getText(language,
                    'Não importa onde você está agora. O que importa é que você continua. Cada dia que você escolhe não desistir, você está mais perto do que imaginou.',
                    'It doesn\'t matter where you are now. What matters is that you keep going. Every day you choose not to give up, you\'re closer to what you imagined.'
                  )}
                </p>
                <p className="text-base text-foreground/90 font-medium leading-[1.9] max-w-2xl mx-auto">
                  {getText(language,
                    'Se a gente consegue imaginar, é porque é possível. Uma hora a gente chega lá.',
                    'If we can imagine it, it\'s because it\'s possible. We\'ll get there eventually.'
                  )}
                </p>
              </div>
            </ScrollReveal>

            {/* Share at end */}
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {getText(language, 'Gostou do artigo? Compartilhe!', 'Enjoyed the article? Share it!')}
                </p>
                <ShareButtons title={articleTitle} />
              </div>
            </div>

            {/* Signature */}
            <ArticleSEOFooter />
            <RelatedArticles currentArticleId="vision-and-persistence" />
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

export default VisionAndPersistence;
