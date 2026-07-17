import type { MarketTrailArticle } from './types';

const minutesFromReadTime = (readTime: string) => {
  const value = Number.parseInt(readTime, 10);
  return Number.isFinite(value) ? value : 10;
};

const firstTag = (article: MarketTrailArticle, lang: 'pt' | 'en') => article.tags[lang][0] ?? 'Carreira';

const hasManualLayer = (article: MarketTrailArticle) =>
  article.sections.some((section) => section.title.pt === 'Como levar isso para a prática');

const buildManualSections = (article: MarketTrailArticle): MarketTrailArticle['sections'] => {
  const titlePt = article.title.pt;
  const titleEn = article.title.en;
  const tagPt = firstTag(article, 'pt').toLowerCase();
  const tagEn = firstTag(article, 'en').toLowerCase();

  return [
    {
      title: { pt: 'Como levar isso para a prática', en: 'How to put this into practice' },
      content: {
        pt: `A forma mais simples de usar este artigo não é tentar decorar tudo. É pegar a ideia central de ${titlePt} e transformar em uma decisão pequena no próximo projeto, estudo ou conversa técnica.\n\nQuando o assunto envolve ${tagPt}, muita gente entende o conceito enquanto lê, mas volta ao mesmo comportamento quando precisa agir. Por isso, a prática precisa ser visível. Anote o que você faria diferente hoje, escolha um exemplo real e teste essa mudança em algo pequeno. Pode ser um repositório pessoal, uma tarefa do trabalho, um texto no LinkedIn, uma conversa com outro desenvolvedor ou uma revisão de código.\n\nSe depois de aplicar você conseguir explicar o motivo da decisão sem depender de frase pronta, o artigo cumpriu o papel dele. Conhecimento técnico só vira maturidade quando muda a forma como você decide.`,
        en: `The simplest way to use this article is not to memorize everything. It is to take the central idea of ${titleEn} and turn it into a small decision in your next project, study session or technical conversation.\n\nWhen the subject involves ${tagEn}, many people understand the concept while reading, but return to the same behavior when they need to act. Practice needs to be visible. Write down what you would do differently today, choose a real example and test that change in something small.\n\nIf after applying it you can explain the decision without relying on a memorized phrase, the article did its job. Technical knowledge becomes maturity only when it changes the way you decide.`,
      },
    },
    {
      title: { pt: 'Um exemplo que vale testar', en: 'An example worth testing' },
      content: {
        pt: `Pegue um projeto que você já fez ou está construindo agora. Abra o código, a documentação, o histórico de commits ou o planejamento e procure um ponto onde a ideia deste artigo apareça. Não precisa ser um projeto grande. Projetos pequenos mostram problemas com mais clareza porque não existe tanta coisa escondendo a decisão principal.\n\nFaça três perguntas. O que eu fiz apenas porque era o jeito mais rápido. O que eu fiz porque realmente entendi o problema. O que uma pessoa nova no projeto entenderia sem me perguntar nada.\n\nEssas três perguntas costumam revelar mais do que uma lista enorme de ferramentas. Elas mostram se você está acumulando tecnologia ou desenvolvendo julgamento profissional.`,
        en: `Take a project you already built or are building now. Open the code, documentation, commit history or plan and look for one place where the idea of this article appears. It does not need to be a large project. Small projects show problems more clearly because there is less noise hiding the main decision.\n\nAsk three questions. What did I do only because it was faster. What did I do because I truly understood the problem. What would a new person understand without asking me anything.\n\nThese questions reveal more than a long list of tools. They show whether you are collecting technology or developing professional judgment.`,
      },
    },
    {
      title: { pt: 'Erros que aparecem no mercado', en: 'Mistakes that appear in the market' },
      content: {
        pt: `O erro mais comum é tratar esse tema como algo isolado. A pessoa lê, concorda e segue para o próximo conteúdo, mas não conecta a ideia com o modo como trabalha. No mercado, isso aparece em pequenas falhas repetidas. Uma tarefa mal entendida, uma decisão que ninguém documentou, um prazo aceito sem critério, um código difícil de revisar, uma conversa técnica que poderia ter sido mais clara.\n\nOutro erro é procurar uma regra universal. Desenvolvimento de software quase nunca funciona assim. A resposta certa depende do contexto, do risco, do momento do produto, da equipe e da consequência da decisão. O que diferencia um profissional melhor não é ter uma opinião forte sobre tudo. É saber explicar por que aquela escolha faz sentido naquele cenário.`,
        en: `The most common mistake is treating this subject as isolated. The person reads, agrees and moves to the next piece of content, but never connects the idea with the way they work. In the market, this appears as repeated small failures. A poorly understood task, an undocumented decision, a deadline accepted without judgment, code that is hard to review, a technical conversation that could have been clearer.\n\nAnother mistake is looking for a universal rule. Software development rarely works that way. The right answer depends on context, risk, product stage, team and consequence. What separates a better professional is not having a strong opinion about everything. It is knowing why a choice makes sense in that specific scenario.`,
      },
    },
    {
      title: { pt: 'Checklist antes de seguir', en: 'Checklist before moving on' },
      content: {
        pt: `Antes de ir para o próximo artigo, faça uma checagem honesta.\n\nVocê consegue explicar esse assunto com suas próprias palavras. Você consegue mostrar um exemplo real. Você sabe onde esse tema aparece em um projeto de verdade. Você entende o erro mais comum. Você sabe qual pequena mudança pode aplicar esta semana. Você consegue conectar este conteúdo com outro ponto da sua carreira.\n\nSe a resposta for não para quase tudo, não tem problema. Volte um passo. Releia com calma. A pressa para terminar a trilha não pode ser maior do que a intenção de sair dela mais preparado.`,
        en: `Before moving to the next article, do an honest check.\n\nCan you explain this subject in your own words. Can you show a real example. Do you know where it appears in a real project. Do you understand the most common mistake. Do you know one small change you can apply this week. Can you connect this content with another part of your career.\n\nIf the answer is no to almost everything, that is fine. Take one step back. Read it again calmly. The rush to finish the trail cannot be bigger than the intention to leave it better prepared.`,
      },
    },
    {
      title: { pt: 'Exercício de evolução', en: 'Growth exercise' },
      content: {
        pt: `Escolha uma situação real e escreva uma explicação curta sobre ela. Pode ser uma decisão técnica, uma dúvida de estudo, um problema de arquitetura, um trecho de código, uma conversa com cliente ou uma dificuldade de carreira. O objetivo é transformar pensamento solto em clareza.\n\nDepois disso, revise o texto como se fosse enviar para alguém da equipe. Corte o que estiver confuso. Troque generalizações por exemplos. Explique o motivo da decisão. Esse exercício parece simples, mas treina uma habilidade que acompanha toda a carreira. Desenvolvedor que pensa bem e comunica bem costuma resolver problemas antes que eles virem ruído.`,
        en: `Choose a real situation and write a short explanation about it. It can be a technical decision, a study doubt, an architecture problem, a piece of code, a client conversation or a career difficulty. The goal is to turn loose thinking into clarity.\n\nThen review the text as if you were sending it to someone on the team. Cut what is confusing. Replace generalizations with examples. Explain the reason behind the decision. This exercise seems simple, but it trains a skill that follows the entire career. A developer who thinks clearly and communicates clearly usually solves problems before they become noise.`,
      },
    },
    {
      title: { pt: 'Perguntas para reler depois', en: 'Questions to revisit later' },
      content: {
        pt: `O que mudou na minha forma de pensar depois deste artigo. Onde esse assunto aparece no meu projeto atual. Que decisão eu tenho evitado por falta de clareza. Que parte eu entendi na teoria, mas ainda não provei na prática. Quem poderia se beneficiar se eu explicasse isso de forma simples.\n\nEssas perguntas ajudam a transformar a trilha em manual de consulta, não apenas em sequência de leitura. Em fases diferentes da carreira, o mesmo artigo pode bater de outro jeito. O iniciante enxerga uma camada. O júnior enxerga outra. O pleno percebe outra. O sênior volta e percebe que o básico bem feito ainda sustenta tudo.`,
        en: `What changed in my thinking after this article. Where does this subject appear in my current project. What decision have I been avoiding because I lack clarity. What did I understand in theory but have not proven in practice yet. Who could benefit if I explained this in simple language.\n\nThese questions help turn the trail into a reference manual, not just a reading sequence. At different stages of the career, the same article can hit differently. The beginner sees one layer. The junior sees another. The mid-level developer sees another. The senior comes back and notices that well executed fundamentals still support everything.`,
      },
    },
  ];
};

export const enhanceManualArticle = (article: MarketTrailArticle): MarketTrailArticle => {
  if (!article.id.startsWith('mt-') || hasManualLayer(article)) return article;

  const minutes = minutesFromReadTime(article.readTime) + 18;

  return {
    ...article,
    readTime: `${minutes} min`,
    sections: [...article.sections, ...buildManualSections(article)],
  };
};
