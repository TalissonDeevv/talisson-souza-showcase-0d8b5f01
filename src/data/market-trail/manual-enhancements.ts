import type { MarketTrailArticle } from './types';

type Lang = 'pt' | 'en';
type Localized = { pt: string; en: string };
type ArticleProfile = {
  career: boolean;
  scene: Localized;
  firstMove: Localized;
  example: Localized;
  interview: Localized;
  exercise: Localized;
};

const minutesFromReadTime = (readTime: string) => {
  const value = Number.parseInt(readTime, 10);
  return Number.isFinite(value) ? value : 10;
};

const firstTag = (article: MarketTrailArticle, lang: Lang) => article.tags[lang][0] ?? 'Carreira';

const hasManualLayer = (article: MarketTrailArticle) =>
  article.sections.some((section) => section.title.pt === 'Como transformar leitura em trabalho');

const textBank = (article: MarketTrailArticle) =>
  [
    article.title.pt,
    article.excerpt.pt,
    ...article.tags.pt,
    ...article.keywords.pt,
    ...article.sections.map((section) => `${section.title.pt} ${section.content.pt}`),
  ]
    .join(' ')
    .toLowerCase();

const careerTerms = [
  'carreira',
  'mercado',
  'vaga',
  'entrevista',
  'linkedin',
  'networking',
  'freelancer',
  'cliente',
  'salário',
  'liderança',
  'reputação',
  'promoção',
  'trabalho remoto',
  'autoridade',
  'burnout',
  'negócios',
  'portfólio',
  'currículo',
  'comunicação',
  'equipe',
];

const isCareerArticle = (article: MarketTrailArticle) => {
  const haystack = textBank(article);
  return careerTerms.some((term) => haystack.includes(term));
};

const includesAny = (haystack: string, terms: string[]) => terms.some((term) => haystack.includes(term));

const profileArticle = (article: MarketTrailArticle): ArticleProfile => {
  const haystack = textBank(article);
  const career = isCareerArticle(article);

  if (career) {
    return {
      career,
      scene: {
        pt: 'Pense em uma pessoa tentando sair do estudo solto e entrar em um ritmo profissional. Ela abre o LinkedIn, compara a própria trajetória com a de outras pessoas, olha o GitHub, tenta melhorar o portfólio e sente que sempre falta alguma coisa. A parte difícil não é apenas estudar mais. É organizar evidências de evolução. É mostrar que existe critério, constância e capacidade de lidar com problemas reais sem transformar tudo em ansiedade.',
        en: 'Think of someone trying to move from scattered study into a professional rhythm. They open LinkedIn, compare their path with other people, look at GitHub, try to improve the portfolio and feel that something is always missing. The hard part is not only studying more. It is organizing evidence of growth. It is showing judgment, consistency and the ability to handle real problems without turning everything into anxiety.',
      },
      firstMove: {
        pt: 'Eu começaria olhando para sinais concretos. Projetos explicados com clareza, decisões registradas, conversas mais objetivas, capacidade de pedir ajuda com contexto e pequenas entregas que mostram continuidade. Carreira não melhora apenas porque a pessoa passa mais horas estudando. Melhora quando cada semana deixa algum rastro confiável.',
        en: 'I would start by looking at concrete signals. Projects explained with clarity, recorded decisions, more objective conversations, the ability to ask for help with context and small deliveries that show continuity. A career does not improve only because someone spends more hours studying. It improves when each week leaves a reliable trace.',
      },
      example: {
        pt: 'Um exemplo simples. Em vez de escrever no currículo que você é dedicado, mostre um projeto com problema bem descrito, decisões explicadas e limitações assumidas. Em vez de dizer que sabe trabalhar em equipe, escreva um pull request que outra pessoa consiga revisar sem adivinhar sua intenção. Em vez de pedir oportunidade dizendo que aprende rápido, deixe público um histórico pequeno de aprendizado aplicado.',
        en: 'A simple example. Instead of writing in a resume that you are dedicated, show a project with a clearly described problem, explained decisions and acknowledged limits. Instead of saying you work well with teams, write a pull request someone else can review without guessing your intention. Instead of asking for an opportunity by saying you learn fast, make a small history of applied learning visible.',
      },
      interview: {
        pt: 'Em entrevista, isso aparece quando alguém pergunta sobre um projeto, uma dificuldade ou uma decisão. A resposta fraca lista ferramentas. A resposta melhor explica o problema, o que estava em jogo, quais opções existiam, por que uma escolha foi feita e o que você faria diferente hoje. Essa diferença muda a leitura que a pessoa faz do seu nível.',
        en: 'In interviews, this appears when someone asks about a project, a difficulty or a decision. A weak answer lists tools. A better answer explains the problem, what was at stake, which options existed, why one choice was made and what you would do differently today. That difference changes how the person reads your level.',
      },
      exercise: {
        pt: 'Escolha uma situação profissional recente ou um projeto pessoal. Escreva em dez linhas o que você queria alcançar, o que fez, o que deu errado, o que aprendeu e qual evidência ficou. Se a evidência não existe, transforme isso em tarefa. Um README melhor, um post curto, uma issue bem aberta, um commit explicado ou uma conversa mais clara já contam.',
        en: 'Choose a recent professional situation or a personal project. Write ten lines about what you wanted to achieve, what you did, what went wrong, what you learned and which evidence remained. If the evidence does not exist, turn that into a task. A better README, a short post, a well opened issue, an explained commit or a clearer conversation already counts.',
      },
    };
  }

  if (includesAny(haystack, ['segurança', 'token', 'senha', 'vulnerabilidade', 'lgpd', 'phishing'])) {
    return {
      career,
      scene: {
        pt: 'Imagine uma aplicação pequena com login, formulário de contato, integração externa e algumas variáveis de ambiente. Para muita gente, isso parece simples demais para exigir cuidado. Só que ataque automatizado não pergunta se o projeto é pequeno. Ele procura token vazando, rota sem validação, dependência antiga, senha fraca e log expondo dado que não deveria aparecer.',
        en: 'Imagine a small application with login, contact form, external integration and a few environment variables. For many people, that looks too simple to require care. Automated attacks do not ask whether the project is small. They look for leaked tokens, routes without validation, old dependencies, weak passwords and logs exposing data that should not appear.',
      },
      firstMove: {
        pt: 'Eu começaria pelo que pode causar dano mesmo em projeto simples. Dados sensíveis, autenticação, autorização, entrada do usuário, logs, dependências e segredos. Se alguma dessas partes depende de confiança cega, existe um problema esperando o momento certo para aparecer.',
        en: 'I would start with what can cause damage even in a simple project. Sensitive data, authentication, authorization, user input, logs, dependencies and secrets. If any of these parts depends on blind trust, there is a problem waiting for the right moment to appear.',
      },
      example: {
        pt: 'Um exemplo direto. Um formulário recebe texto do usuário e salva no banco. O caminho feliz funciona. O problema começa quando alguém envia HTML, script, payload estranho ou texto enorme. Segurança aparece nesse detalhe. Validar no frontend ajuda a experiência, mas não protege o sistema. O servidor precisa tratar a entrada como não confiável.',
        en: 'A direct example. A form receives user text and saves it in the database. The happy path works. The problem starts when someone sends HTML, script, a strange payload or huge text. Security appears in that detail. Frontend validation helps the experience, but it does not protect the system. The server must treat input as untrusted.',
      },
      interview: {
        pt: 'Em entrevista, segurança aparece quando perguntam como você protegeria uma rota, guardaria credenciais ou lidaria com dados pessoais. Uma resposta madura não promete blindagem total. Ela mostra camadas, limites e revisão contínua. Segurança boa é menos pose e mais disciplina repetida.',
        en: 'In interviews, security appears when someone asks how you would protect a route, store credentials or handle personal data. A mature answer does not promise total protection. It shows layers, limits and continuous review. Good security is less posture and more repeated discipline.',
      },
      exercise: {
        pt: 'Abra um projeto seu e procure três coisas. Variáveis sensíveis fora do código, validação no servidor e logs sem dado privado. Depois rode uma auditoria de dependências e leia pelo menos um alerta até entender o risco. Não aceite a ferramenta como oráculo. Use a ferramenta para aprender a investigar.',
        en: 'Open one of your projects and look for three things. Sensitive variables outside the code, server validation and logs without private data. Then run a dependency audit and read at least one alert until you understand the risk. Do not treat the tool as an oracle. Use the tool to learn how to investigate.',
      },
    };
  }

  if (includesAny(haystack, ['banco', 'dados', 'sql', 'query', 'modelagem', 'postgres', 'database'])) {
    return {
      career,
      scene: {
        pt: 'Pense em um sistema que começou com uma tabela simples. Depois entrou histórico, relatório, permissão, cobrança, auditoria e integração. O que parecia apenas guardar informação virou a base de várias decisões. Banco de dados cobra caro quando é tratado como gaveta. Ele precisa representar relações, estados e regras que vão sobreviver ao primeiro protótipo.',
        en: 'Think of a system that started with a simple table. Then came history, reports, permissions, billing, audit and integration. What looked like only storing information became the foundation for many decisions. Databases get expensive when treated like drawers. They need to represent relationships, states and rules that survive the first prototype.',
      },
      firstMove: {
        pt: 'Eu começaria pelo fluxo da informação. Quem cria o dado, quem altera, quem lê, quem depende dele e o que acontece quando ele muda. Antes de pensar no nome da tabela, eu tentaria entender o ciclo de vida daquele dado.',
        en: 'I would start with the flow of information. Who creates the data, who changes it, who reads it, who depends on it and what happens when it changes. Before thinking about the table name, I would try to understand the life cycle of that data.',
      },
      example: {
        pt: 'Um exemplo comum é status de pedido. Parece só um campo. Depois você descobre que precisa saber quando mudou, quem mudou, por que mudou e quais integrações foram disparadas. Se tudo vira apenas uma string sobrescrita, você perde histórico e começa a reconstruir verdade por achismo.',
        en: 'A common example is order status. It looks like only one field. Then you discover you need to know when it changed, who changed it, why it changed and which integrations were triggered. If everything becomes only an overwritten string, you lose history and start rebuilding truth by guessing.',
      },
      interview: {
        pt: 'Em entrevista, esse tema aparece quando pedem para modelar uma entidade, otimizar uma consulta ou explicar uma lentidão. A resposta boa não começa com SQL bonito. Começa entendendo cardinalidade, volume, índice, leitura, escrita e consequência para o produto.',
        en: 'In interviews, this subject appears when someone asks you to model an entity, optimize a query or explain slowness. A good answer does not start with pretty SQL. It starts by understanding cardinality, volume, indexes, reads, writes and product consequence.',
      },
      exercise: {
        pt: 'Pegue uma tabela de um projeto seu e escreva a história daquele dado. Quando nasce, quando muda, quando deixa de ser útil e quem sofreria se ele estivesse errado. Depois veja se a modelagem atual conta essa história ou se apenas guarda campos soltos.',
        en: 'Take one table from a project and write the story of that data. When it is born, when it changes, when it stops being useful and who would suffer if it were wrong. Then see whether the current model tells that story or only stores loose fields.',
      },
    };
  }

  if (includesAny(haystack, ['api', 'http', 'integração', 'endpoint', 'backend', 'contrato'])) {
    return {
      career,
      scene: {
        pt: 'Imagine duas partes de um sistema tentando conversar. Uma espera um formato, a outra envia outro. Uma entende erro de um jeito, a outra responde uma mensagem genérica. No começo parece detalhe. Depois vira suporte, retrabalho e medo de alterar qualquer coisa. API boa não é apenas endpoint funcionando. É contrato claro.',
        en: 'Imagine two parts of a system trying to talk. One expects one format, the other sends another. One understands errors in one way, the other returns a generic message. At first it looks like a detail. Later it becomes support, rework and fear of changing anything. A good API is not only a working endpoint. It is a clear contract.',
      },
      firstMove: {
        pt: 'Eu começaria olhando para o acordo entre as partes. Entrada, saída, erro, autenticação, limite, paginação, versão e exemplo real. Se só o caminho feliz está documentado, a integração ainda está incompleta.',
        en: 'I would start by looking at the agreement between the parts. Input, output, error, authentication, limits, pagination, versioning and a real example. If only the happy path is documented, the integration is still incomplete.',
      },
      example: {
        pt: 'Um exemplo simples. O frontend chama uma rota de pagamento. Quando dá certo, tudo bem. Quando falha, ele precisa saber se o cartão foi recusado, se a sessão expirou, se o usuário precisa tentar depois ou se o suporte deve ser acionado. Erro genérico faz a interface parecer perdida.',
        en: 'A simple example. The frontend calls a payment route. When it works, fine. When it fails, it needs to know whether the card was declined, the session expired, the user should try later or support should be called. A generic error makes the interface look lost.',
      },
      interview: {
        pt: 'Em entrevista, integração aparece quando pedem para desenhar um fluxo entre serviços. Uma resposta forte fala de contrato, idempotência, erro, observabilidade, autenticação e compatibilidade. Não precisa complicar. Precisa mostrar que você sabe onde sistemas costumam quebrar.',
        en: 'In interviews, integration appears when someone asks you to design a flow between services. A strong answer talks about contract, idempotency, errors, observability, authentication and compatibility. It does not need to be complicated. It needs to show you know where systems tend to break.',
      },
      exercise: {
        pt: 'Escolha uma API que você já criou. Escreva um exemplo de sucesso e três exemplos de falha. Depois veja se quem consome a API conseguiria agir corretamente em cada caso. Se não conseguir, o contrato ainda está falando pouco.',
        en: 'Choose an API you created. Write one success example and three failure examples. Then see whether whoever consumes the API could act correctly in each case. If not, the contract is still saying too little.',
      },
    };
  }

  if (includesAny(haystack, ['frontend', 'interface', 'ui', 'ux', 'react', 'usuário', 'experiência'])) {
    return {
      career,
      scene: {
        pt: 'Pense em uma tela que funciona, mas ninguém entende de primeira. O botão existe, a informação está lá, a regra foi implementada. Mesmo assim o usuário erra, abandona ou precisa perguntar. Interface não é decoração. É a parte do sistema onde a decisão técnica encontra a vida real de alguém.',
        en: 'Think of a screen that works, but nobody understands at first. The button exists, the information is there, the rule was implemented. Even so, the user makes mistakes, leaves or needs to ask. Interface is not decoration. It is the part of the system where technical decisions meet someone real life.',
      },
      firstMove: {
        pt: 'Eu começaria observando o fluxo antes do componente. O que a pessoa quer fazer, o que ela precisa saber, que erro pode cometer e qual sinal a tela dá em cada estado. Se o componente é bonito, mas o fluxo confunde, o problema continua.',
        en: 'I would start by observing the flow before the component. What the person wants to do, what they need to know, which mistake they may make and which signal the screen gives in each state. If the component is beautiful but the flow confuses, the problem remains.',
      },
      example: {
        pt: 'Um exemplo comum é formulário. Não basta ter campos alinhados. A pessoa precisa entender o que preencher, por que algo deu erro, se a ação foi salva e o que acontece depois. Uma boa experiência reduz dúvida sem precisar explicar tudo em texto enorme.',
        en: 'A common example is a form. It is not enough to have aligned fields. The person needs to understand what to fill, why something failed, whether the action was saved and what happens next. A good experience reduces doubt without needing to explain everything in huge text.',
      },
      interview: {
        pt: 'Em entrevista, esse tema aparece quando pedem para melhorar uma tela ou pensar em estados. Resposta boa fala de vazio, carregamento, erro, sucesso, acessibilidade, responsividade e prioridade visual. Não é só saber usar React. É saber proteger a experiência.',
        en: 'In interviews, this subject appears when someone asks you to improve a screen or think about states. A good answer talks about empty state, loading, error, success, accessibility, responsiveness and visual priority. It is not only knowing React. It is knowing how to protect the experience.',
      },
      exercise: {
        pt: 'Abra uma tela sua e force três estados. Sem dado, com erro e durante carregamento. Se a tela ficar estranha, silenciosa ou confusa, você encontrou trabalho real de frontend. Depois ajuste sem encher a interface de explicação.',
        en: 'Open one of your screens and force three states. No data, with error and while loading. If the screen becomes strange, silent or confusing, you found real frontend work. Then adjust without filling the interface with explanations.',
      },
    };
  }

  if (includesAny(haystack, ['deploy', 'cloud', 'infra', 'linux', 'devops', 'docker', 'logs', 'observabilidade'])) {
    return {
      career,
      scene: {
        pt: 'Imagine uma aplicação que roda perfeita na sua máquina e falha quando chega ao servidor. A diferença está em variável, build, permissão, porta, cache, memória, rede ou alguma configuração que ninguém documentou. Operação ensina uma verdade simples. Código só vira produto quando consegue viver fora do ambiente confortável do desenvolvedor.',
        en: 'Imagine an application that runs perfectly on your machine and fails when it reaches the server. The difference is in variables, build, permissions, ports, cache, memory, network or some configuration nobody documented. Operations teaches a simple truth. Code only becomes product when it can live outside the developer comfortable environment.',
      },
      firstMove: {
        pt: 'Eu começaria mapeando o caminho do código até o usuário. Build, variáveis, banco, arquivos, logs, rollback e monitoramento mínimo. Se você não consegue explicar esse caminho, qualquer plataforma vira uma caixa preta.',
        en: 'I would start by mapping the path from code to user. Build, variables, database, files, logs, rollback and minimum monitoring. If you cannot explain that path, any platform becomes a black box.',
      },
      example: {
        pt: 'Um exemplo realista. O deploy falha porque uma variável existe localmente e não existe em produção. A correção não é apenas criar a variável. É entender onde as configurações ficam, quem pode alterar, como validar antes de publicar e como perceber rápido se algo saiu errado.',
        en: 'A realistic example. Deploy fails because a variable exists locally and does not exist in production. The fix is not only creating the variable. It is understanding where configurations live, who can change them, how to validate before publishing and how to notice quickly if something went wrong.',
      },
      interview: {
        pt: 'Em entrevista, operação aparece quando perguntam como você publicaria, monitoraria ou investigaria uma aplicação. Uma resposta madura não depende de uma plataforma específica. Ela explica etapas, riscos e pontos de observação.',
        en: 'In interviews, operations appears when someone asks how you would publish, monitor or investigate an application. A mature answer does not depend on one specific platform. It explains steps, risks and observation points.',
      },
      exercise: {
        pt: 'Desenhe o fluxo de deploy de um projeto seu em uma página. Do commit ao usuário. Marque onde pode falhar e onde você veria o erro. Se não souber onde olhar, esse é o próximo estudo mais útil.',
        en: 'Draw the deploy flow of one project on one page. From commit to user. Mark where it can fail and where you would see the error. If you do not know where to look, that is the next most useful study.',
      },
    };
  }

  return {
    career,
    scene: {
      pt: 'Imagine um projeto que começa pequeno. Uma rota, uma tela, uma regra, uma integração. No primeiro dia tudo parece simples. O problema é que software raramente fica parado. Uma decisão tomada sem muito critério pode reaparecer meses depois como bug difícil, retrabalho, lentidão ou medo de mexer no próprio código.',
      en: 'Imagine a project that starts small. One route, one screen, one rule, one integration. On the first day everything looks simple. The problem is that software rarely stays still. A decision made without much judgment can return months later as a hard bug, rework, slowness or fear of changing the code itself.',
    },
    firstMove: {
      pt: 'Eu começaria perguntando qual problema essa decisão tenta resolver e qual custo ela cria para o futuro. Quase toda escolha técnica tem troca. Se você só enxerga o benefício imediato, ainda não viu a decisão inteira.',
      en: 'I would start by asking which problem this decision tries to solve and which cost it creates for the future. Almost every technical choice has a tradeoff. If you only see the immediate benefit, you have not seen the whole decision yet.',
    },
    example: {
      pt: 'Um exemplo comum. Você copia uma estrutura pronta porque parece profissional. No começo ela funciona. Depois cada alteração exige abrir arquivos demais, entender abstrações que não resolvem nada e explicar para outra pessoa uma complexidade que não precisava existir. Às vezes o erro não é falta de arquitetura. É arquitetura antes da hora.',
      en: 'A common example. You copy a ready structure because it looks professional. At first it works. Later every change requires opening too many files, understanding abstractions that solve nothing and explaining to another person a complexity that did not need to exist. Sometimes the mistake is not lack of architecture. It is architecture too early.',
    },
    interview: {
      pt: 'Em entrevista, esse tipo de assunto aparece quando pedem para explicar uma decisão técnica. Resposta boa mostra contexto, alternativa, consequência e limite. Resposta fraca tenta parecer absoluta. Engenharia de software raramente recompensa respostas absolutas.',
      en: 'In interviews, this kind of subject appears when someone asks you to explain a technical decision. A good answer shows context, alternative, consequence and limit. A weak answer tries to sound absolute. Software engineering rarely rewards absolute answers.',
    },
    exercise: {
      pt: 'Escolha uma decisão técnica de um projeto seu. Escreva por que ela foi tomada, que alternativa existia, qual risco ela criou e quando você revisaria essa escolha. Se você não consegue responder, talvez a decisão tenha sido mais automática do que consciente.',
      en: 'Choose a technical decision from one of your projects. Write why it was made, which alternative existed, which risk it created and when you would review that choice. If you cannot answer, maybe the decision was more automatic than conscious.',
    },
  };
};

const buildManualSections = (article: MarketTrailArticle): MarketTrailArticle['sections'] => {
  const titlePt = article.title.pt;
  const titleEn = article.title.en;
  const tagPt = firstTag(article, 'pt').toLowerCase();
  const tagEn = firstTag(article, 'en').toLowerCase();
  const profile = profileArticle(article);

  return [
    {
      title: { pt: 'Como transformar leitura em trabalho', en: 'How to turn reading into work' },
      content: {
        pt: `Eu gosto de ler artigo técnico como quem está revisando uma decisão. Não como quem procura uma frase bonita para repetir depois. ${titlePt} precisa servir para alguma coisa fora da página. Precisa ajudar você a estudar melhor, construir melhor, conversar melhor ou evitar um erro que já custou tempo para muita gente.\n\nA melhor forma de ler este capítulo é devagar o suficiente para perceber onde ele encosta na sua rotina. Se você está começando, talvez ele apareça em um projeto pequeno. Se já trabalha com desenvolvimento, talvez apareça em uma reunião, em uma tarefa mal descrita ou em um código que você não tem coragem de alterar. Se já tem mais experiência, talvez apareça na forma como você orienta outra pessoa.\n\nNão leia tentando concordar com tudo. Leia tentando encontrar uso. Quando uma ideia parecer óbvia, pergunte se ela já aparece no seu trabalho. Muita coisa parece simples enquanto está no texto. A diferença aparece quando você precisa aplicar com prazo, pressão e gente dependendo da sua entrega.`,
        en: `I like reading technical articles as if I were reviewing a decision. Not as if I were looking for a pretty sentence to repeat later. ${titleEn} needs to be useful outside the page. It needs to help you study better, build better, communicate better or avoid a mistake that has already cost many people time.\n\nThe best way to read this chapter is slowly enough to notice where it touches your routine. If you are starting out, maybe it appears in a small project. If you already work with development, maybe it appears in a meeting, in a poorly described task or in code you are afraid to change. If you have more experience, maybe it appears in the way you guide someone else.\n\nDo not read trying to agree with everything. Read trying to find use. When an idea sounds obvious, ask whether it already appears in your work. Many things look simple while they are in the text. The difference appears when you need to apply them with deadlines, pressure and people depending on your delivery.`,
      },
    },
    {
      title: { pt: 'A cena real por trás do tema', en: 'The real scene behind the subject' },
      content: {
        pt: `${profile.scene.pt}\n\nÉ por isso que ${titlePt} não deveria ser tratado como mais um conteúdo salvo para depois. O valor está em melhorar a forma como você enxerga uma situação antes de agir. Quase sempre, o problema começa antes do código, da mensagem, da entrevista ou da decisão final. Começa no jeito como você interpreta o cenário.`,
        en: `${profile.scene.en}\n\nThat is why ${titleEn} should not be treated as just another saved piece of content. The value is in improving the way you see a situation before acting. Most of the time, the problem starts before the code, the message, the interview or the final decision. It starts in the way you interpret the scenario.`,
      },
    },
    {
      title: { pt: 'O que eu olharia primeiro', en: 'What I would look at first' },
      content: {
        pt: `${profile.firstMove.pt}\n\nQuando o assunto envolve ${tagPt}, é fácil cair na pressa de procurar ferramenta, curso, biblioteca ou opinião pronta. Eu tentaria fazer o contrário. Primeiro entenderia o problema. Depois olharia para as alternativas. Só então escolheria o caminho mais proporcional.\n\nIsso evita um erro comum em programação. Resolver com força o problema errado. Você escreve bastante, estuda bastante, organiza bastante, mas a pergunta inicial estava ruim. Uma pergunta ruim puxa uma solução ruim mesmo quando o código parece bem feito.`,
        en: `${profile.firstMove.en}\n\nWhen the subject involves ${tagEn}, it is easy to rush into tools, courses, libraries or ready opinions. I would try to do the opposite. First understand the problem. Then look at alternatives. Only then choose the most proportional path.\n\nThis avoids a common mistake in programming. Solving the wrong problem with force. You write a lot, study a lot, organize a lot, but the initial question was weak. A weak question pulls a weak solution even when the code looks well written.`,
      },
    },
    {
      title: { pt: 'Um exemplo sem enfeite', en: 'A plain example' },
      content: {
        pt: `${profile.example.pt}\n\nEsse tipo de exemplo vale mais do que uma explicação bonita porque coloca o assunto em um lugar verificável. Você consegue abrir o projeto, revisar a conversa, olhar o commit, ler o README, testar a tela ou comparar duas decisões. O aprendizado fica menos abstrato.\n\nUma coisa que vejo acontecer com frequência é a pessoa entender o conceito enquanto lê, mas continuar tomando a mesma decisão quando trabalha. Isso acontece porque entendimento passivo é confortável. Aplicação exige desconforto. Exige olhar para algo que você mesmo fez e admitir que poderia ser mais claro, mais simples ou mais responsável.`,
        en: `${profile.example.en}\n\nThis kind of example is worth more than a beautiful explanation because it puts the subject in a verifiable place. You can open the project, review the conversation, look at the commit, read the README, test the screen or compare two decisions. Learning becomes less abstract.\n\nSomething I often see is someone understanding the concept while reading, but taking the same old decision when working. That happens because passive understanding is comfortable. Application is uncomfortable. It requires looking at something you built and admitting it could be clearer, simpler or more responsible.`,
      },
    },
    {
      title: { pt: 'O erro que parece pequeno', en: 'The mistake that looks small' },
      content: {
        pt: `O erro que mais atrasa a evolução nesse assunto é tratar ${titlePt} como teoria separada da rotina. A pessoa lê, concorda, talvez até compartilhe, mas não muda nenhuma decisão pequena. No fim, o conteúdo vira sensação de progresso.\n\nNo mercado, quase nada quebra de uma vez. O prejuízo costuma aparecer em sinais menores. Uma dúvida que ninguém registrou. Um prazo aceito sem escopo. Um código que só funciona no caminho feliz. Um projeto que parece bom, mas não explica nada para quem chega depois. Uma entrevista em que a pessoa sabe a ferramenta, mas não sabe explicar decisão.\n\nO perigo dos erros pequenos é que eles parecem administráveis. Só que eles se acumulam. E quando acumulam, viram uma reputação, um sistema difícil de manter ou uma carreira que anda muito, mas sai pouco do lugar.`,
        en: `The mistake that most slows growth in this subject is treating ${titleEn} as theory separated from routine. The person reads, agrees, maybe even shares it, but changes no small decision. In the end, the content becomes a feeling of progress.\n\nIn the market, almost nothing breaks all at once. Damage usually appears in smaller signals. A doubt nobody recorded. A deadline accepted without scope. Code that only works on the happy path. A project that looks good, but explains nothing to whoever arrives later. An interview where the person knows the tool, but cannot explain a decision.\n\nThe danger of small mistakes is that they look manageable. But they accumulate. And when they accumulate, they become a reputation, a system that is hard to maintain or a career that moves a lot, but advances very little.`,
      },
    },
    {
      title: { pt: 'Como isso aparece em entrevista ou reunião', en: 'How this appears in interviews or meetings' },
      content: {
        pt: `${profile.interview.pt}\n\nEm reunião acontece algo parecido. Uma pessoa pede uma solução. Outra traz uma limitação. Alguém pressiona por prazo. O desenvolvedor imaturo tenta encerrar rápido para parecer seguro. O desenvolvedor mais preparado faz a pergunta que faltava, separa fato de hipótese e explica o risco sem transformar a conversa em disputa.\n\nIsso não significa falar muito. Às vezes maturidade é justamente falar menos, mas falar com mais precisão. A pergunta certa no momento certo economiza mais do que uma semana de código escrito em cima de uma suposição fraca.`,
        en: `${profile.interview.en}\n\nIn meetings something similar happens. Someone asks for a solution. Another person brings a limitation. Someone pushes for a deadline. An immature developer tries to close it quickly to look confident. A better prepared developer asks the missing question, separates fact from hypothesis and explains risk without turning the conversation into a dispute.\n\nThis does not mean talking a lot. Sometimes maturity is speaking less, but with more precision. The right question at the right moment saves more than a week of code written on top of a weak assumption.`,
      },
    },
    {
      title: { pt: 'Exercício para esta semana', en: 'Exercise for this week' },
      content: {
        pt: `${profile.exercise.pt}\n\nDepois faça uma segunda leitura, mas agora procurando o ponto mais fraco da sua própria explicação. Não para se punir. Para encontrar a próxima melhoria concreta. Pode ser uma palavra vaga, uma decisão sem motivo, uma parte do fluxo que você não entendeu ou uma promessa que você não consegue sustentar.\n\nSe quiser deixar o exercício mais sério, peça para outra pessoa ler sem você explicar nada antes. Se ela entender o problema, a decisão e o próximo passo, você ganhou clareza. Se ela precisar perguntar o básico, ainda existe trabalho de comunicação.`,
        en: `${profile.exercise.en}\n\nThen read it a second time, now looking for the weakest point in your own explanation. Not to punish yourself. To find the next concrete improvement. It can be a vague word, a decision without reason, a part of the flow you did not understand or a promise you cannot sustain.\n\nIf you want to make the exercise more serious, ask someone else to read without you explaining anything first. If they understand the problem, the decision and the next step, you gained clarity. If they need to ask the basics, there is still communication work to do.`,
      },
    },
    {
      title: { pt: 'Checklist que realmente ajuda', en: 'A checklist that actually helps' },
      content: {
        pt: `Antes de seguir para o próximo artigo, confira se você consegue explicar ${titlePt} sem repetir frases decoradas. Confira se consegue apontar um exemplo real no seu estudo, trabalho ou portfólio. Confira se existe uma pequena ação que você pode executar ainda esta semana. Confira se você sabe qual erro quer evitar daqui para frente.\n\nUm checklist bom não existe para dar sensação de tarefa concluída. Ele existe para revelar ausência de evidência. Se você marcou tudo, mas nada mudou no projeto, na conversa ou na rotina, talvez tenha marcado rápido demais.\n\nO sinal mais confiável de aprendizado é mudança observável. Uma explicação melhor. Um commit mais claro. Uma dúvida melhor formulada. Um README menos confuso. Uma decisão registrada. Um teste criado porque fazia sentido. Uma conversa profissional conduzida com menos improviso.`,
        en: `Before moving to the next article, check whether you can explain ${titleEn} without repeating memorized phrases. Check whether you can point to a real example in your study, work or portfolio. Check whether there is a small action you can execute this week. Check whether you know which mistake you want to avoid from now on.\n\nA good checklist does not exist to create the feeling of a finished task. It exists to reveal lack of evidence. If you checked everything, but nothing changed in the project, conversation or routine, maybe you checked too quickly.\n\nThe most reliable sign of learning is observable change. A better explanation. A clearer commit. A better formulated doubt. A less confusing README. A recorded decision. A test created because it made sense. A professional conversation handled with less improvisation.`,
      },
    },
    {
      title: { pt: 'Mitos que atrapalham', en: 'Myths that get in the way' },
      content: {
        pt: `Um mito comum é achar que profundidade vem apenas com muitos anos. Tempo ajuda, mas não garante reflexão. Tem gente que repete a mesma forma de trabalhar por anos e chama isso de experiência. Experiência real precisa deixar você mais preciso, não apenas mais acostumado.\n\nOutro mito é acreditar que todo assunto precisa virar processo pesado. Não precisa. Às vezes uma anotação bem feita resolve. Uma pergunta antes de codar resolve. Um exemplo no README resolve. Uma validação simples resolve. Maturidade não é complicar tudo. É saber onde o cuidado faz diferença.\n\nTambém existe o mito de que aprender mais significa consumir mais. Em muitos momentos, aprender mais significa aplicar melhor o que você já leu. A trilha fica mais valiosa quando você volta aos artigos depois de encontrar problemas reais. A segunda leitura quase sempre ensina mais do que a primeira.`,
        en: `A common myth is believing depth comes only with many years. Time helps, but does not guarantee reflection. Some people repeat the same way of working for years and call it experience. Real experience needs to make you more precise, not only more used to things.\n\nAnother myth is believing every subject needs to become a heavy process. It does not. Sometimes a good note solves it. A question before coding solves it. An example in the README solves it. A simple validation solves it. Maturity is not making everything complicated. It is knowing where care makes a difference.\n\nThere is also the myth that learning more means consuming more. In many moments, learning more means applying better what you already read. The trail becomes more valuable when you return to articles after finding real problems. The second reading almost always teaches more than the first.`,
      },
    },
    {
      title: { pt: 'Perguntas para revisar depois', en: 'Questions to revisit later' },
      content: {
        pt: `Que decisão eu tomaria diferente depois deste artigo. Onde esse assunto apareceu na minha rotina nos últimos trinta dias. Que parte eu entendi na teoria, mas ainda não provei na prática. Que erro antigo eu consigo reconhecer melhor agora. Que exemplo meu explicaria esse tema para alguém menos experiente.\n\nEssas perguntas transformam a trilha em material de consulta. Não é necessário responder tudo hoje. Algumas respostas só aparecem quando você encontra o problema de verdade. O importante é manter uma forma de voltar, revisar e perceber se sua leitura está virando repertório.\n\nQuando você começa a responder melhor essas perguntas, a evolução fica menos dependente de motivação. Você passa a ter sinais. E sinais são mais úteis do que sensação.`,
        en: `Which decision would I make differently after this article. Where did this subject appear in my routine in the last thirty days. Which part did I understand in theory, but have not proven in practice yet. Which old mistake can I recognize better now. Which example of mine would explain this subject to someone less experienced.\n\nThese questions turn the trail into reference material. You do not need to answer everything today. Some answers only appear when you meet the real problem. What matters is having a way to return, review and notice whether your reading is becoming repertoire.\n\nWhen you start answering these questions better, growth becomes less dependent on motivation. You start having signals. And signals are more useful than feeling.`,
      },
    },
    {
      title: { pt: 'Quando voltar neste capítulo', en: 'When to return to this chapter' },
      content: {
        pt: `Volte para este artigo quando ${profile.career ? 'uma decisão de carreira parecer nebulosa, quando uma conversa profissional ficar difícil ou quando você sentir que está se movimentando muito sem criar evidência real de evolução' : 'um projeto começar a ficar confuso, quando uma decisão técnica parecer automática ou quando você perceber que está escolhendo solução antes de entender o problema'}.\n\nA função de uma trilha longa não é ser lida uma vez e esquecida. É acompanhar fases diferentes. O mesmo texto que hoje parece básico pode ficar mais profundo quando você tiver um projeto maior, uma equipe, um cliente, uma entrevista difícil ou uma responsabilidade que ainda não existia.\n\nSe ${titlePt} fizer você tomar uma decisão pequena com mais clareza, já valeu. Não precisa virar uma revolução. Carreira e engenharia melhoram muito mais por ajustes consistentes do que por grandes promessas que duram dois dias.`,
        en: `Return to this article when ${profile.career ? 'a career decision feels unclear, when a professional conversation becomes difficult or when you feel you are moving a lot without creating real evidence of growth' : 'a project starts becoming confusing, when a technical decision feels automatic or when you notice you are choosing a solution before understanding the problem'}.\n\nThe function of a long trail is not to be read once and forgotten. It is to follow different phases. The same text that looks basic today can become deeper when you have a bigger project, a team, a client, a hard interview or a responsibility that did not exist before.\n\nIf ${titleEn} makes you take one small decision with more clarity, it was already worth it. It does not need to become a revolution. Career and engineering improve much more through consistent adjustments than through big promises that last two days.`,
      },
    },
    {
      title: { pt: 'A ponte para o próximo tema', en: 'The bridge to the next subject' },
      content: {
        pt: `A próxima leitura deve continuar a partir de uma pergunta simples. O que este artigo deixou aberto. Talvez seja uma dúvida técnica. Talvez seja uma conversa de carreira. Talvez seja uma falha que você percebeu no próprio portfólio. Essa dúvida é útil porque mostra onde seu repertório ainda precisa crescer.\n\nNão trate programação, mercado e carreira como assuntos separados. Na prática eles se misturam. Uma decisão técnica afeta confiança. Uma comunicação ruim afeta entrega. Um projeto mal explicado afeta oportunidade. Uma rotina de estudo mal feita afeta sua autonomia.\n\nEssa é a intenção da trilha. Construir uma biblioteca para voltar sempre que uma nova fase exigir mais clareza. Artigo por artigo, o objetivo não é parecer que você leu muito. É fazer você trabalhar melhor.`,
        en: `The next reading should continue from a simple question. What did this article leave open. Maybe it is a technical doubt. Maybe it is a career conversation. Maybe it is a failure you noticed in your own portfolio. That doubt is useful because it shows where your repertoire still needs to grow.\n\nDo not treat programming, market and career as separate subjects. In practice they mix. A technical decision affects trust. Poor communication affects delivery. A poorly explained project affects opportunity. A weak study routine affects autonomy.\n\nThat is the intention of the trail. To build a library you can return to whenever a new phase requires more clarity. Article by article, the goal is not to look like you read a lot. It is to make you work better.`,
      },
    },
  ];
};

export const enhanceManualArticle = (article: MarketTrailArticle): MarketTrailArticle => {
  if (!article.id.startsWith('mt-') || hasManualLayer(article)) return article;

  const minutes = minutesFromReadTime(article.readTime) + 96;

  return {
    ...article,
    readTime: `${minutes} min`,
    sections: [...article.sections, ...buildManualSections(article)],
  };
};
