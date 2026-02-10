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

const VisionAndPersistence = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Empreendedorismo', 'Visão', 'Persistência', 'Mentalidade', 'Cheetah Solutions']
    : ['Entrepreneurship', 'Vision', 'Persistence', 'Mindset', 'Cheetah Solutions'];

  const sections = language === 'pt' ? [
    {
      title: '1. Toda grande empresa começou com alguém imaginando algo que ainda não existia',
      content: `Eu tava observando esses prédios comerciais grandes, bem estruturados, e me bateu uma reflexão. Do nada me veio a imagem da Cheetah Solutions tendo um prédio nesse nível um dia.

E aí eu pensei: isso não vale só pra mim. Vale pra todos nós que temos empresa, projeto, sonho, ideia.

Às vezes a gente desanima, pensa em desistir, acha que tá andando devagar demais. Mas toda empresa grande começou exatamente assim: com alguém imaginando algo que ainda não existia.

Quis mandar essa mensagem só pra lembrar vocês que não desistam dos objetivos de vocês. Continuem, mesmo cansados, mesmo sem ver resultado agora.

Se a gente consegue imaginar, é porque é possível. Uma hora a gente chega lá.`
    },
    {
      title: '2. A distância entre o sonho e a realidade é o tempo e a consistência',
      content: `Muita gente olha pra uma empresa consolidada e pensa que foi da noite pro dia. Mas a verdade é que por trás de cada marca forte existe uma história de noites mal dormidas, decisões difíceis, momentos de dúvida e muita insistência.

O que separa quem consegue de quem desiste não é talento, é persistência. É acordar todo dia e escolher continuar, mesmo quando ninguém tá vendo, mesmo quando os números ainda não fazem sentido.

A Cheetah Solutions não nasceu grande. Nasceu de uma ideia, de um computador, de muita vontade de fazer diferente. E cada passo dado, por menor que parecesse, construiu o caminho até aqui.`
    },
    {
      title: '3. Desistir é a única forma garantida de não chegar lá',
      content: `Quando você tá no meio do processo, parece que nada tá funcionando. Parece que os outros tão na frente, que você tá atrasado, que não vai dar certo. Mas isso é parte do caminho.

Os momentos mais difíceis são justamente os que mais ensinam. Cada problema resolvido te prepara pro próximo nível. Cada "não" que você recebe te fortalece pra quando o "sim" vier.

Desistir é a única forma garantida de não chegar lá. Enquanto você tiver tentando, existe chance. E chance é tudo que a gente precisa.`
    },
    {
      title: '4. Cerque-se de pessoas que entendem a jornada',
      content: `Uma das coisas mais importantes no empreendedorismo é o ambiente. Se você tá cercado de pessoas que não entendem o que você tá construindo, que duvidam, que desmotivam, vai ser muito mais difícil continuar.

Procure pessoas que estão na mesma caminhada. Que entendem o sacrifício, que celebram as pequenas vitórias, que te puxam pra cima quando você quer desistir.

Comunidade importa. Networking importa. Não como algo superficial, mas como troca genuína entre pessoas que acreditam no que estão fazendo.`
    },
    {
      title: '5. O progresso nem sempre é visível, mas está acontecendo',
      content: `Tem dias que você trabalha 12 horas e parece que nada mudou. Tem semanas que o faturamento não sai do lugar. Tem meses que você se pergunta se valeu a pena.

Mas o progresso nem sempre é visível no momento em que acontece. Cada linha de código, cada reunião, cada decisão tomada com responsabilidade está construindo algo maior do que você consegue ver agora.

Plante as sementes certas, regue com consistência, e os resultados vão aparecer. Não no tempo que você quer, mas no tempo certo.`
    },
    {
      title: '6. A visão precisa ser maior que o medo',
      content: `Medo de falhar, medo de julgamento, medo de investir e perder, medo de não ser bom o suficiente. Todo empreendedor lida com isso. A diferença é que quem vai longe não deixa o medo decidir por ele.

A visão precisa ser maior que o medo. Quando você tem clareza do que quer construir, quando você sabe por que está fazendo o que faz, o medo vira combustível, não obstáculo.

Não estou dizendo que é fácil. Estou dizendo que é possível. E que vale a pena cada segundo de luta.`
    },
    {
      title: '7. Construa um legado, não apenas um negócio',
      content: `No final das contas, o que fica não é quanto dinheiro você fez ou quantos funcionários você teve. O que fica é o impacto que você gerou, as pessoas que você ajudou, a diferença que você fez no mercado.

Construa algo que você tenha orgulho de assinar. Algo que quando alguém perguntar "quem fez isso?", você possa levantar a mão sem hesitar.

Empreender é sobre deixar o mundo melhor do que você encontrou. Uma empresa de cada vez, um projeto de cada vez, um dia de cada vez.

Se a gente consegue imaginar, é porque é possível. Uma hora a gente chega lá.`
    },
  ] : [
    {
      title: '1. Every great company started with someone imagining something that didn\'t exist yet',
      content: `I was observing these large commercial buildings, well structured, and it hit me with a reflection. Out of nowhere, the image of Cheetah Solutions having a building at that level one day came to my mind.

And then I thought: this isn't just for me. It's for all of us who have a company, a project, a dream, an idea.

Sometimes we get discouraged, think about giving up, feel like we're moving too slowly. But every big company started exactly like this: with someone imagining something that didn't exist yet.

I wanted to send this message just to remind you not to give up on your goals. Keep going, even when tired, even without seeing results now.

If we can imagine it, it's because it's possible. We'll get there eventually.`
    },
    {
      title: '2. The distance between the dream and reality is time and consistency',
      content: `Many people look at a consolidated company and think it happened overnight. But the truth is that behind every strong brand there's a story of sleepless nights, difficult decisions, moments of doubt, and a lot of persistence.

What separates those who succeed from those who give up isn't talent, it's persistence. It's waking up every day and choosing to continue, even when nobody's watching, even when the numbers still don't make sense.

Cheetah Solutions wasn't born big. It was born from an idea, a computer, and a lot of desire to do things differently. And every step taken, no matter how small it seemed, built the path to where we are today.`
    },
    {
      title: '3. Giving up is the only guaranteed way to not get there',
      content: `When you're in the middle of the process, it feels like nothing is working. It feels like others are ahead, that you're behind, that it won't work out. But that's part of the journey.

The hardest moments are precisely the ones that teach the most. Every problem solved prepares you for the next level. Every "no" you receive strengthens you for when the "yes" comes.

Giving up is the only guaranteed way to not get there. As long as you're trying, there's a chance. And a chance is all we need.`
    },
    {
      title: '4. Surround yourself with people who understand the journey',
      content: `One of the most important things in entrepreneurship is the environment. If you're surrounded by people who don't understand what you're building, who doubt, who demotivate, it will be much harder to continue.

Look for people who are on the same path. Who understand the sacrifice, who celebrate small victories, who pull you up when you want to give up.

Community matters. Networking matters. Not as something superficial, but as genuine exchange between people who believe in what they're doing.`
    },
    {
      title: '5. Progress isn\'t always visible, but it\'s happening',
      content: `There are days when you work 12 hours and it seems like nothing changed. There are weeks when revenue doesn't budge. There are months when you wonder if it was worth it.

But progress isn't always visible at the moment it happens. Every line of code, every meeting, every decision made with responsibility is building something bigger than you can see right now.

Plant the right seeds, water with consistency, and the results will come. Not in the time you want, but at the right time.`
    },
    {
      title: '6. The vision needs to be bigger than the fear',
      content: `Fear of failing, fear of judgment, fear of investing and losing, fear of not being good enough. Every entrepreneur deals with this. The difference is that those who go far don't let fear decide for them.

The vision needs to be bigger than the fear. When you have clarity about what you want to build, when you know why you're doing what you do, fear becomes fuel, not an obstacle.

I'm not saying it's easy. I'm saying it's possible. And that every second of the fight is worth it.`
    },
    {
      title: '7. Build a legacy, not just a business',
      content: `At the end of the day, what remains isn't how much money you made or how many employees you had. What remains is the impact you generated, the people you helped, the difference you made in the market.

Build something you're proud to sign. Something that when someone asks "who did this?", you can raise your hand without hesitation.

Entrepreneurship is about leaving the world better than you found it. One company at a time, one project at a time, one day at a time.

If we can imagine it, it's because it's possible. We'll get there eventually.`
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

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{getText(language, '10 de Fevereiro, 2025', 'February 10, 2025')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getText(language, '8 min de leitura', '8 min read')}</span>
                </div>
              </div>

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
