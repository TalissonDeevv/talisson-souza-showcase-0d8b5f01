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
import { tagToSlug } from "@/data/articles";

const WhatCompaniesSeek = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Carreira', 'Mercado', 'Profissionalismo', 'Gestão', 'Estratégia']
    : ['Career', 'Market', 'Professionalism', 'Management', 'Strategy'];

  const tagBasePath = language === 'en' ? '/en-us/articles/tag' : '/artigos/tag';

  const sections = language === 'pt' ? [
    {
      title: 'O mito do desenvolvedor perfeito',
      content: `O mercado de tecnologia criou uma narrativa perigosa sobre o desenvolvedor ideal: alguém que domina múltiplas linguagens, frameworks de ponta, metodologias ágeis, DevOps, cloud computing, inteligência artificial e ainda mantém um perfil impecável no GitHub com contribuições diárias. Essa imagem, amplificada por redes sociais e conteúdos superficiais, gera ansiedade em profissionais de todos os níveis e distorce completamente a realidade do que as empresas realmente valorizam quando tomam decisões de contratação.

Na prática, as empresas que constroem produtos sérios e sustentáveis não procuram desenvolvedores que saibam tudo. Procuram profissionais que resolvam problemas reais com consistência, que se comuniquem com clareza, que assumam responsabilidade sobre suas entregas e que demonstrem capacidade de aprendizado contínuo dentro do contexto específico em que atuam. A obsessão por acumular tecnologias no currículo frequentemente mascara uma carência mais fundamental: a falta de profundidade em resolver problemas complexos dentro de um domínio específico.`
    },
    {
      title: 'Resolução de problemas acima de domínio de ferramentas',
      content: `Uma das frustrações mais comuns entre recrutadores e líderes técnicos é receber candidatos que listam dezenas de tecnologias no currículo mas não conseguem articular como resolveram um problema real com nenhuma delas. O domínio de ferramentas é importante, mas é secundário em relação à capacidade de entender um problema, decompô-lo em partes gerenciáveis, avaliar possíveis soluções e implementar a mais adequada considerando as restrições do contexto.

O desenvolvedor que sabe pensar antes de codificar é infinitamente mais valioso do que aquele que apenas codifica rápido. Empresas maduras entendem que a tecnologia é um meio, não um fim. O que importa é a capacidade do profissional de usar a tecnologia certa, da forma certa, para resolver o problema certo. Essa competência exige experiência prática com projetos reais, exposição a consequências de decisões técnicas e uma mentalidade que prioriza resultado sobre processo. Não se trata de desprezar boas práticas, mas de entender que práticas só têm valor quando aplicadas ao contexto correto.`
    },
    {
      title: 'Confiabilidade e consistência nas entregas',
      content: `Se existe uma qualidade que empresas valorizam acima de quase todas as outras em um desenvolvedor, é a confiabilidade. O profissional confiável é aquele que, quando assume um compromisso, entrega. Não entrega perfeito, não entrega surpreendente, mas entrega o que prometeu, no prazo combinado, com a qualidade esperada. Essa consistência, aparentemente simples, é surpreendentemente rara no mercado e tem um valor enorme para qualquer organização.

A confiabilidade se manifesta em comportamentos cotidianos: comunicar proativamente quando identifica um risco de atraso, ser transparente sobre limitações, pedir ajuda antes que o problema se torne crítico, documentar decisões para que outros possam continuar o trabalho. O profissional que cultiva essas práticas constrói uma reputação que transcende qualquer competência técnica específica. Empresas preferem trabalhar com alguém previsível e confiável do que com um gênio técnico que é inconsistente, imprevisível ou que desaparece quando a pressão aumenta.`
    },
    {
      title: 'Capacidade de trabalhar em contextos imperfeitos',
      content: `Nenhuma empresa opera em condições ideais. Os projetos reais têm código legado, documentação incompleta, prazos apertados, mudanças de requisito no meio do caminho e stakeholders com expectativas conflitantes. O desenvolvedor que só funciona em cenários controlados, com requisitos perfeitamente definidos e tecnologias de ponta, tem utilidade limitada no mundo real. As empresas procuram profissionais que saibam operar dentro de restrições, que consigam produzir resultados mesmo quando as condições estão longe do ideal.

Isso não significa aceitar caos sem questionamento. Significa ter a maturidade de distinguir entre o que pode ser melhorado imediatamente e o que precisa ser tolerado temporariamente. Significa propor melhorias incrementais em vez de exigir reformas completas antes de começar a trabalhar. Significa adaptar-se sem perder os padrões de qualidade. Essa flexibilidade estratégica é uma das competências mais difíceis de desenvolver e mais valorizadas em ambientes profissionais reais.`
    },
    {
      title: 'Mentalidade de propriedade e responsabilidade',
      content: `O conceito de ownership é frequentemente citado mas raramente praticado de forma genuína. Ter mentalidade de propriedade significa tratar cada projeto, cada funcionalidade, cada linha de código como se o sucesso ou fracasso dependesse exclusivamente de você. Não significa fazer tudo sozinho, mas significa não se esconder atrás de processos, hierarquias ou justificativas burocráticas quando algo precisa ser feito.

Empresas valorizam profissionais que enxergam além da sua tarefa imediata. Que percebem um bug em uma parte do sistema que não é "deles" e tomam a iniciativa de reportar ou corrigir. Que identificam riscos que ninguém mencionou e levantam a questão antes que se tornem problemas. Que se preocupam com a qualidade do produto como um todo, não apenas com o pedaço que lhes foi designado. Essa postura de dono transforma o papel do desenvolvedor de executor técnico para agente de qualidade e inovação dentro da organização.`
    },
    {
      title: 'O valor invisível da postura profissional',
      content: `Existe um conjunto de qualidades que não aparece em nenhuma descrição de vaga mas que influencia profundamente as decisões de contratação, promoção e retenção. Pontualidade em reuniões, respeito por prazos acordados, comunicação educada e direta, disposição para ajudar colegas, capacidade de receber feedback sem defensividade, humildade para reconhecer erros. Essas qualidades parecem triviais quando listadas, mas a combinação delas em um único profissional é extraordinariamente rara.

A postura profissional comunica mais do que qualquer certificação ou portfólio. Ela revela se o profissional é alguém com quem as pessoas querem trabalhar diariamente, se é alguém em quem se pode confiar decisões importantes, se é alguém que eleva o ambiente ao seu redor ou que drena a energia da equipe. Empresas que aprenderam a priorizar postura profissional na contratação consistentemente constroem equipes mais produtivas, mais estáveis e mais satisfeitas. A competência técnica pode ser desenvolvida, mas a postura profissional reflete valores pessoais que são muito mais difíceis de mudar.`
    },
  ] : [
    {
      title: 'The myth of the perfect developer',
      content: `The tech market has created a dangerous narrative about the ideal developer: someone who masters multiple languages, cutting-edge frameworks, agile methodologies, DevOps, cloud computing, artificial intelligence, and still maintains an impeccable GitHub profile with daily contributions. This image, amplified by social media and superficial content, generates anxiety among professionals of all levels and completely distorts the reality of what companies truly value when making hiring decisions.

In practice, companies building serious and sustainable products don't look for developers who know everything. They look for professionals who solve real problems consistently, communicate clearly, take responsibility for their deliveries, and demonstrate continuous learning capability within the specific context they operate in. The obsession with accumulating technologies on a resume often masks a more fundamental deficiency: the lack of depth in solving complex problems within a specific domain.`
    },
    {
      title: 'Problem-solving over tool mastery',
      content: `One of the most common frustrations among recruiters and technical leaders is receiving candidates who list dozens of technologies on their resume but can't articulate how they solved a real problem with any of them. Tool mastery is important, but it's secondary to the ability to understand a problem, decompose it into manageable parts, evaluate possible solutions, and implement the most suitable one considering contextual constraints.

The developer who knows how to think before coding is infinitely more valuable than one who merely codes fast. Mature companies understand that technology is a means, not an end. What matters is the professional's ability to use the right technology, in the right way, to solve the right problem. This competency requires hands-on experience with real projects, exposure to consequences of technical decisions, and a mindset that prioritizes results over process. It's not about disregarding best practices, but understanding that practices only have value when applied to the correct context.`
    },
    {
      title: 'Reliability and consistency in deliveries',
      content: `If there's one quality companies value above almost all others in a developer, it's reliability. The reliable professional is the one who, when they commit to something, delivers. Not perfectly, not surprisingly, but what they promised, on the agreed timeline, with the expected quality. This consistency, seemingly simple, is surprisingly rare in the market and has enormous value for any organization.

Reliability manifests in everyday behaviors: proactively communicating when identifying a delay risk, being transparent about limitations, asking for help before the problem becomes critical, documenting decisions so others can continue the work. The professional who cultivates these practices builds a reputation that transcends any specific technical competency. Companies prefer working with someone predictable and reliable over a technical genius who is inconsistent, unpredictable, or who disappears when pressure increases.`
    },
    {
      title: 'Ability to work in imperfect contexts',
      content: `No company operates under ideal conditions. Real projects have legacy code, incomplete documentation, tight deadlines, mid-course requirement changes, and stakeholders with conflicting expectations. The developer who only functions in controlled scenarios, with perfectly defined requirements and cutting-edge technologies, has limited utility in the real world. Companies look for professionals who know how to operate within constraints, who can produce results even when conditions are far from ideal.

This doesn't mean accepting chaos without questioning. It means having the maturity to distinguish between what can be improved immediately and what needs to be temporarily tolerated. It means proposing incremental improvements instead of demanding complete reforms before starting work. It means adapting without losing quality standards. This strategic flexibility is one of the hardest competencies to develop and most valued in real professional environments.`
    },
    {
      title: 'Ownership mindset and responsibility',
      content: `The concept of ownership is frequently cited but rarely practiced genuinely. Having an ownership mindset means treating every project, every feature, every line of code as if success or failure depended exclusively on you. It doesn't mean doing everything alone, but it means not hiding behind processes, hierarchies, or bureaucratic justifications when something needs to be done.

Companies value professionals who see beyond their immediate task. Who notice a bug in a part of the system that isn't "theirs" and take the initiative to report or fix it. Who identify risks nobody mentioned and raise the issue before they become problems. Who care about product quality as a whole, not just the piece assigned to them. This ownership posture transforms the developer's role from technical executor to quality and innovation agent within the organization.`
    },
    {
      title: 'The invisible value of professional conduct',
      content: `There's a set of qualities that doesn't appear in any job description but profoundly influences hiring, promotion, and retention decisions. Punctuality in meetings, respect for agreed deadlines, polite and direct communication, willingness to help colleagues, ability to receive feedback without defensiveness, humility to acknowledge mistakes. These qualities seem trivial when listed, but the combination of them in a single professional is extraordinarily rare.

Professional conduct communicates more than any certification or portfolio. It reveals whether the professional is someone people want to work with daily, someone who can be trusted with important decisions, someone who elevates the environment around them or drains the team's energy. Companies that have learned to prioritize professional conduct in hiring consistently build more productive, more stable, and more satisfied teams. Technical competency can be developed, but professional conduct reflects personal values that are much harder to change.`
    },
  ];

  const articleTitle = getText(language,
    'O Que Empresas Realmente Procuram em um Desenvolvedor',
    'What Companies Really Look for in a Developer'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'O Que Empresas Realmente Procuram em um Desenvolvedor | Talisson Souza',
          'What Companies Really Look for in a Developer | Talisson Souza'
        )}
        description={getText(language,
          'Análise estratégica sobre o que o mercado realmente valoriza em desenvolvedores, além das competências técnicas e frameworks da moda.',
          'Strategic analysis on what the market truly values in developers, beyond technical skills and trendy frameworks.'
        )}
        canonical={language === 'en' ? '/en-us/articles/what-companies-seek' : '/artigos/o-que-empresas-procuram'}
        type="article"
        publishedTime="2025-02-15"
        keywords={language === 'pt'
          ? ['o que empresas procuram', 'desenvolvedor profissional', 'carreira ti', 'postura profissional', 'mercado tecnologia']
          : ['what companies seek', 'professional developer', 'it career', 'professional conduct', 'tech market']
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
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{getText(language, '15 de Fevereiro, 2025', 'February 15, 2025')}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{getText(language, '15 min de leitura', '15 min read')}</span></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Link key={tag} to={`${tagBasePath}/${tagToSlug(tag)}`} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground hover:text-foreground hover:border-border/50 transition-all duration-200">
                    {tag}
                  </Link>
                ))}
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
                    'O que diferencia um desenvolvedor que é disputado pelo mercado de um que envia dezenas de currículos sem resposta? Este artigo analisa as competências reais que empresas maduras valorizam, muito além do domínio de frameworks e linguagens de programação.',
                    'What differentiates a developer sought after by the market from one who sends dozens of resumes without response? This article analyzes the real competencies that mature companies value, far beyond framework and programming language mastery.'
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

export default WhatCompaniesSeek;
