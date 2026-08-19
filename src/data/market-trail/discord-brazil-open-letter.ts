import type { MarketTrailArticle } from './types';

const same = (value: string) => ({ pt: value, en: value });

const section = (title: string, content: string) => ({
  title: same(title),
  content: same(content),
});

export const discordBrazilOpenLetterArticle: MarketTrailArticle[] = [
  {
    id: 'discord-brazil-open-letter',
    slugPt: 'carta-aberta-discord-brasil',
    slugEn: 'open-letter-discord-brazil',
    showDisclaimer: true,
    disclaimerText: {
      pt: 'Esta carta aberta expressa uma opinião pessoal sobre tecnologia, segurança, comunidades digitais e medidas regulatórias no Brasil. O texto não substitui investigação oficial, decisão judicial, orientação jurídica ou análise técnica da autoridade competente.',
      en: 'Esta carta aberta expressa uma opinião pessoal sobre tecnologia, segurança, comunidades digitais e medidas regulatórias no Brasil. O texto não substitui investigação oficial, decisão judicial, orientação jurídica ou análise técnica da autoridade competente.',
    },
    title: {
      pt: 'Minha opinião sobre o Discord no Brasil e a discussão que ficou grande demais para ser tratada no grito',
      en: 'Minha opinião sobre o Discord no Brasil e a discussão que ficou grande demais para ser tratada no grito',
    },
    excerpt: {
      pt: 'Uma carta aberta sobre o caso envolvendo o Discord no Brasil, a suspensão do Go Live, a proteção de menores e o cuidado necessário para não transformar uma tragédia em uma discussão rasa.',
      en: 'Uma carta aberta sobre o caso envolvendo o Discord no Brasil, a suspensão do Go Live, a proteção de menores e o cuidado necessário para não transformar uma tragédia em uma discussão rasa.',
    },
    date: { pt: '19 de Agosto, 2026', en: '19 de Agosto, 2026' },
    publishedDate: '2026-08-19',
    readTime: '24 min',
    tags: {
      pt: ['Discord', 'Comunidades', 'Segurança', 'Regulação', 'Opinião'],
      en: ['Discord', 'Comunidades', 'Segurança', 'Regulação', 'Opinião'],
    },
    keywords: {
      pt: [
        'discord brasil',
        'anpd discord',
        'go live discord brasil',
        'segurança no discord',
        'moderação no discord',
        'proteção de menores online',
        'comunidades digitais',
        'eca digital',
      ],
      en: [
        'discord brasil',
        'anpd discord',
        'go live discord brasil',
        'segurança no discord',
        'moderação no discord',
        'proteção de menores online',
        'comunidades digitais',
        'eca digital',
      ],
    },
    sourceUrl: 'https://www.gov.br/anpd/pt-br/assuntos/noticias/em-medida-preventiva-anpd-determina-que-discord-suspenda-transmissoes-ao-vivo-no-brasil',
    sourceLabel: {
      pt: 'Fonte oficial da ANPD sobre a medida preventiva',
      en: 'Fonte oficial da ANPD sobre a medida preventiva',
    },
    sections: [
      section(
        'Por que eu resolvi escrever isso',
        `Eu quero deixar uma coisa muito clara antes de qualquer coisa. Eu não estou falando sobre o Discord como alguém que abriu a plataforma recentemente, viu uma notícia pesada e resolveu comentar porque o assunto ficou em alta. Eu uso Discord desde 2018. São anos entrando quase todos os dias, administrando servidores, organizando canais, lidando com permissões, cargos, bots, automações, denúncias, moderação, conflitos e decisões que nem sempre são simples.

Então quando eu vejo tudo que está acontecendo no Brasil, minha reação não é só de alguém que acompanha tecnologia de fora. Eu conheço a plataforma por dentro. Conheço coisas boas, coisas ruins, limitações técnicas, problemas de cultura, dificuldades de moderação e também a importância real que o Discord tem para muita gente que usa aquilo como ferramenta de trabalho, estudo, comunidade, suporte e convivência.

E talvez seja justamente por conhecer a plataforma há tanto tempo que essa discussão me incomoda. Não porque eu ache que o Discord não possa ser criticado. Pode. Deve. Qualquer plataforma grande precisa ser cobrada quando existem falhas sérias. O que me incomoda é quando a discussão vira uma briga simples demais para um problema que claramente não é simples.

Eu não estou defendendo criminosos. Não estou defendendo gente que alicia menores, manipula adolescentes, incentiva automutilação, violência, suicídio ou qualquer coisa parecida. Para mim, esse tipo de pessoa precisa ser investigado e responsabilizado com seriedade. O caso da adolescente de 13 anos é uma tragédia. Não tem como tratar isso como detalhe, como exagero ou como mais uma polêmica de internet.

O que eu questiono é outra coisa. Eu questiono a proporcionalidade de restringir uma funcionalidade do Discord em razão de um problema que envolveu múltiplas plataformas e cuja responsabilidade precisa ser apurada. Isso é diferente de dizer que o Discord não tem responsabilidade. Eu não estou dizendo isso. Estou dizendo que, antes de transformar uma plataforma inteira em símbolo do problema, precisamos entender melhor onde o problema começou, por onde ele passou, o que falhou e o que realmente pode impedir que algo parecido aconteça de novo.`
      ),
      section(
        'O Discord não é só uma rede social qualquer',
        `Uma das coisas que mais vejo nessa discussão é gente falando do Discord como se fosse uma rede social comum. Eu entendo de onde vem essa visão, porque para quem olha de fora parece tudo a mesma coisa. Tem perfil, mensagem, grupo, chamada de voz, vídeo, comunidade e gente conversando. Mas, na prática, o Discord funciona de um jeito bem diferente de plataformas como Instagram, TikTok ou X.

O Discord é muito mais próximo de uma infraestrutura de comunicação. Existem servidores públicos, servidores privados, canais de texto, canais de voz, permissões específicas, cargos, bots, sistemas de automação, integrações, logs, moderação distribuída e comunidades que funcionam de formas completamente diferentes umas das outras. Um servidor de estudos não se comporta como um servidor de jogos. Um servidor de suporte não se comporta como uma comunidade de criadores. Um servidor de empresa não se comporta como um grupo de amigos.

Eu já vi Discord sendo usado para comunidade de programação, atendimento, estudo, jogos, projetos independentes, organização de equipes, networking, aulas, eventos, suporte técnico, comunidades profissionais e até processos internos que antes aconteceriam em ferramentas muito mais caras. Para muita gente, o Discord não é um lugar aleatório para conversar. É onde a comunidade existe.

Por isso eu tenho dificuldade quando vejo uma parte da discussão tratando a plataforma como se ela fosse um espaço dominado por crime. Isso não corresponde à realidade que eu vejo todos os dias. Existem problemas graves dentro do Discord, assim como existem em outras plataformas grandes. Mas também existem milhões de usos legítimos, produtivos e saudáveis. Colocar tudo no mesmo saco pode até gerar uma manchete forte, mas não ajuda a resolver nada.

Na minha experiência, uma comunidade no Discord pode ser extremamente organizada. Pode ter regras claras, equipe treinada, canais bem definidos, automações, sistemas de denúncia, filtros, registros internos e processos de resposta a incidentes. Também pode ser uma bagunça completa. Essa diferença não depende apenas da plataforma. Depende de quem administra, de quem modera, da cultura da comunidade, das ferramentas disponíveis e da forma como a própria plataforma reage quando algo passa dos limites.`
      ),
      section(
        'A tragédia precisa ser tratada como tragédia',
        `Eu tenho muito cuidado para falar do caso da adolescente, porque não quero transformar a dor de uma família em argumento barato. Também não quero repetir detalhe sensível, especular sobre o que aconteceu ou usar a morte de uma menina para ganhar razão em debate público. Isso seria desrespeitoso e completamente desnecessário.

O que dá para dizer com responsabilidade é que existe uma investigação, existe uma medida preventiva da ANPD, existe uma cobrança sobre a proteção de crianças e adolescentes e existe uma discussão séria sobre a atuação de criminosos em ambientes digitais. A ANPD afirmou ter identificado falhas na implementação de medidas estruturais e procedimentos para prevenir e combater violações graves contra crianças e adolescentes. Essa é uma informação pública, está no comunicado oficial da própria autoridade e precisa ser levada a sério.

Ao mesmo tempo, o caso não aconteceu exclusivamente no Discord. O Instagram e outras plataformas também aparecem no contexto das investigações e das informações divulgadas. Esse ponto importa muito, porque muda a forma como a gente enxerga a resposta necessária. Se o problema circula entre plataformas, a solução não pode ser pensada como se uma única ferramenta fosse o começo e o fim de tudo.

Na minha visão, a prioridade precisa ser responsabilizar quem cometeu crime, entender como essas pessoas chegaram até a vítima, mapear os canais usados, identificar onde houve falha de denúncia, onde houve falha de prevenção, onde houve falha de resposta e quais mecanismos precisam melhorar. Se a resposta ficar só na suspensão de uma funcionalidade, eu tenho medo de que a sociedade sinta que algo foi resolvido quando, na prática, a estrutura criminosa pode simplesmente migrar para outro lugar.

Eu não quero diminuir a importância da medida. Também não quero agir como se qualquer ação do governo fosse automaticamente ruim. Só acho que uma tragédia desse tamanho exige mais do que uma resposta visível. Exige uma resposta que funcione.`
      ),
      section(
        'A minha dúvida sobre a suspensão do Go Live',
        `Quando a ANPD determinou a suspensão preventiva da funcionalidade Go Live no Brasil, a primeira pergunta que me veio foi simples. Isso realmente ataca o problema do jeito certo? Eu entendo a lógica da autoridade. Transmissões ao vivo em servidores fechados podem criar risco, especialmente quando envolvem menores e quando a plataforma não consegue demonstrar mecanismos suficientes de proteção. Olhando por esse lado, faz sentido querer reduzir risco imediato.

Mas eu também olho para isso como alguém que usa Discord de verdade. Go Live não é usado apenas para coisa errada. Muita gente usa para estudar junto, transmitir tela em call de projeto, ajudar alguém com código, fazer suporte, jogar com amigos, revisar design, explicar configuração, fazer aula, orientar equipe e criar presença em comunidade. Suspender uma funcionalidade assim afeta usos legítimos também.

É aqui que entra a minha crítica. Eu não estou dizendo que nada deveria ser feito. Estou dizendo que a medida precisa ser proporcional, tecnicamente clara e acompanhada de um plano real para corrigir o problema. Se a suspensão vira apenas uma resposta de emergência sem critérios objetivos para retorno, quem usa corretamente fica no escuro. Administradores sérios também são afetados, mesmo quando fazem o possível para manter comunidades seguras.

Talvez alguém leia isso e pense que estou preocupado demais com uma função da plataforma. Mas para quem administra comunidade, ferramentas importam. Quando uma funcionalidade some de uma hora para outra, fluxos inteiros precisam ser adaptados. Eventos mudam. Aulas mudam. Suporte muda. Rotinas mudam. E tudo isso acontece mesmo em servidores que nunca tiveram relação com o caso investigado.

Por isso eu volto ao ponto central. Cobrar o Discord é necessário. Suspender algo pode ser defensável em uma situação de risco. Mas a discussão não pode terminar aí. Se terminar aí, a medida vira um símbolo. E símbolo não protege ninguém sozinho.`
      ),
      section(
        'Segurança existe, mas não existe segurança perfeita',
        `Também me incomoda quando vejo pessoas dizendo que o Discord simplesmente não tem segurança. Eu não consigo concordar com isso. Eu uso a plataforma desde 2018 e acompanhei várias mudanças ao longo dos anos. O Discord não começou a pensar em segurança agora porque o assunto virou manchete no Brasil.

A plataforma tem AutoMod, filtros, ferramentas de denúncia, controles para administradores, sistemas contra spam, regras contra self-bots, mecanismos de detecção de abuso, configurações de privacidade, restrição de conteúdo por idade e mudanças recentes voltadas para usuários no Brasil. A própria documentação do Discord fala sobre configurações mais protetivas para adolescentes brasileiros e sobre verificação de idade para acesso a determinados conteúdos e espaços.

Agora, reconhecer que esses mecanismos existem não significa dizer que eles são suficientes. Essa é a diferença que muita gente perde. Uma coisa é afirmar que a plataforma não tem nada. Outra coisa é afirmar que a plataforma tem mecanismos, mas que eles podem ter falhado, podem ser insuficientes ou podem não acompanhar a complexidade dos abusos que acontecem na prática.

Eu prefiro discutir dessa forma, porque é mais honesto. Sistemas de segurança falham. Moderação falha. Automação falha. Denúncia falha. Equipe humana falha. E quando falha envolvendo criança ou adolescente, a consequência pode ser grave demais para ser tratada como erro operacional comum.

Então sim, eu acho que o Discord precisa ser cobrado. Precisa explicar melhor como identifica risco, como responde denúncias, como trata servidores fechados, como lida com contas suspeitas, como aplica medidas envolvendo menores, como melhora age assurance e como comunica isso ao público. Só não acho correto fingir que nada existe e que a plataforma estava completamente parada. Essa versão parece simples, mas não me parece precisa.`
      ),
      section(
        'A idade mínima também precisa entrar na conversa',
        `Outro ponto que quase sempre aparece de forma confusa é a idade mínima. O Discord não é uma plataforma oficialmente aberta para qualquer criança. Para países que não possuem regra específica diferente na lista de idade mínima da própria plataforma, o acesso começa aos 13 anos. No Brasil, a discussão pública em torno do caso envolve justamente uma adolescente de 13 anos, então isso não elimina a responsabilidade da plataforma. Mas ajuda a entender que existe uma camada de regra, verificação e proteção que precisa ser analisada com mais cuidado.

Uma criança de 11 ou 12 anos, por exemplo, não deveria sequer manter uma conta no Discord se não atende à idade mínima aplicável. Isso não significa que isso nunca aconteça. A gente sabe que menores podem mentir idade, usar conta de terceiros, burlar fluxo de cadastro e passar por sistemas automatizados. Esse é um problema real de praticamente toda plataforma digital.

Na minha visão, a pergunta mais útil não é apenas se existe idade mínima. A pergunta é como essa idade é verificada, quando a verificação acontece, quais sinais são usados para detectar inconsistência, como denúncias de usuário menor são tratadas e o que ocorre quando uma conta não atende aos requisitos. O Discord já vem fazendo mudanças no Brasil, mas a existência de mudança não encerra o assunto. O que precisa ser analisado é se essas mudanças funcionam.

Também existe outro lado delicado. Verificação de idade pode envolver dados sensíveis, documentos, biometria, estimativas faciais e fornecedores externos. Muita gente quer proteção, mas não quer entregar dado pessoal demais para plataforma nenhuma. Eu entendo essa preocupação. Eu mesmo acho que qualquer solução de idade precisa equilibrar proteção de menores com privacidade dos usuários.

Esse equilíbrio é difícil. Mas fingir que ele não existe não ajuda. Se a solução for fraca, menores continuam vulneráveis. Se a solução for invasiva demais, usuários legítimos ficam expostos a outro tipo de risco. Essa é uma discussão técnica, jurídica e social. Não cabe em frase de efeito.`
      ),
      section(
        'Administrar comunidade não é controlar a plataforma inteira',
        `Também acho perigoso quando a conversa coloca administradores de servidores como se eles tivessem controle absoluto sobre tudo que acontece. Eu administro comunidades e posso falar com tranquilidade que isso não funciona assim. Um administrador consegue criar regras, definir permissões, configurar bots, treinar moderadores, organizar canais, estabelecer processos e responder denúncias dentro do seu espaço. Isso já dá trabalho demais.

Mas ele não enxerga tudo. Não controla conversas privadas entre usuários. Não sabe o que acontece em outros servidores. Não tem acesso ao backend da plataforma. Não consegue identificar sozinho todas as contas falsas, contas comprometidas, redes coordenadas ou comportamentos que começam fora do servidor. Existe uma diferença enorme entre administrar uma comunidade e ser responsável por toda a camada de segurança da plataforma.

Isso não significa que administradores não tenham responsabilidade. Têm. Quem cria uma comunidade precisa cuidar dela. Precisa pensar em regra, equipe, cultura, proteção, canais de denúncia, logs, punições proporcionais e resposta rápida quando algo foge do controle. Eu inclusive acho que muita comunidade grande trata moderação de forma amadora demais.

Mas também precisamos ser justos. Em muitos casos, administradores sérios estão tentando fazer o melhor com as ferramentas que têm. Eles dependem de recursos da plataforma, de documentação, de APIs, de alertas, de suporte, de políticas claras e de mecanismos de denúncia que funcionem. Quando a plataforma falha nesse nível, a comunidade local fica limitada.

Na prática, segurança em comunidade digital é uma responsabilidade distribuída. Tem parte que é do usuário. Tem parte que é dos pais ou responsáveis quando estamos falando de menores. Tem parte que é da administração da comunidade. Tem parte que é da plataforma. Tem parte que é das autoridades. Quando alguém tenta jogar tudo nas costas de um único lado, a resposta costuma ficar injusta e incompleta.`
      ),
      section(
        'O que eu vejo acontecer em servidores reais',
        `Quem olha para o Discord de fora talvez imagine que administrar servidor é só criar canais e escolher moderadores. Mas quem já esteve por dentro sabe que é bem mais complicado. Você precisa lidar com gente que chega para causar confusão, membro que testa limite, conflito entre grupos, denúncia mal explicada, print fora de contexto, conta recém criada, tentativa de golpe, invasão de bot, vazamento de informação, abuso de permissão e moderador que às vezes toma decisão errada.

Em comunidades grandes, tudo isso escala rápido. Uma decisão ruim pode virar briga pública. Uma punição mal aplicada pode gerar desconfiança. Um moderador despreparado pode piorar uma situação que já era sensível. Uma regra escrita de forma vaga pode abrir espaço para interpretações completamente diferentes. Um canal sem monitoramento pode virar problema antes da equipe perceber.

É por isso que eu falo tanto sobre processo. Não porque eu queira transformar comunidade em empresa, porque não é a mesma coisa. Uma empresa tem responsabilidades jurídicas, financeiras, tributárias, contratuais e operacionais muito maiores. Mas uma comunidade grande também precisa de organização. Precisa de padrão. Precisa de treinamento. Precisa de documentação. Precisa de gente madura tomando decisão.

Quando uma comunidade cresce, improviso começa a custar caro. O moderador não pode punir porque acordou irritado. Não pode proteger amigo. Não pode usar cargo para fazer piada com membro. Não pode apagar evidência porque ficou com medo. Não pode tomar decisão grave sem entender o contexto. Isso parece óbvio, mas na prática não é. Já vi muita gente boa errar por falta de orientação, não por maldade.

Por isso eu acho que o debate sobre Discord no Brasil também deveria passar por formação de administradores e moderadores. A plataforma pode e deve melhorar ferramentas. Mas comunidades também precisam amadurecer por dentro.`
      ),
      section(
        'Criminoso troca de plataforma se o problema não for enfrentado na origem',
        `Esse talvez seja o ponto que mais me preocupa. Se uma pessoa usa o Discord para cometer crime e a resposta é restringir uma ferramenta, ela pode tentar migrar para outro lugar. Pode usar Telegram. Pode usar Instagram. Pode usar TikTok. Pode usar grupo fechado em outra plataforma. Pode usar chamada externa. Pode mudar o método. Criminoso não deixa de ser criminoso porque perdeu um botão.

É claro que reduzir uma superfície de risco pode fazer sentido. Se uma funcionalidade está sendo usada de forma perigosa e a plataforma não demonstra controle suficiente, uma medida preventiva pode reduzir dano imediato. Eu entendo essa lógica. O meu receio é quando isso vira substituto de investigação profunda.

O foco precisa estar nas pessoas que cometeram crime, nos grupos que coordenam abuso, nos fluxos usados para aliciar vítimas, nos métodos de contato, na circulação de conteúdo, nas falhas de denúncia, nas contas envolvidas e na cooperação entre plataformas. Se a rede criminosa usou mais de um ambiente, a resposta precisa acompanhar essa rede. Caso contrário, a gente só muda o endereço do problema.

Na minha visão, o debate público muitas vezes gosta de escolher um vilão único porque isso simplifica a raiva. Mas crimes digitais quase nunca funcionam de forma tão limpa. Eles atravessam plataformas, contas, grupos, mensagens privadas, convites, links, perfis falsos e brechas de confiança. Resolver isso exige mais do que apontar para uma marca e dizer que ela representa tudo que está errado.

Eu não estou dizendo que a plataforma não tem responsabilidade. Estou dizendo que a plataforma não é a única camada do problema. E se a resposta pública ignorar isso, a chance de errar aumenta.`
      ),
      section(
        'Onde eu concordo com a cobrança',
        `Eu concordo que plataformas precisam ser pressionadas quando crianças e adolescentes estão em risco. Concordo que uma empresa do tamanho do Discord não pode simplesmente dizer que moderar servidores fechados é difícil e parar por aí. Dificuldade técnica não elimina responsabilidade. Se uma plataforma oferece recurso sensível, principalmente para público jovem, ela precisa provar que pensou nos riscos desde o desenho do produto.

Também concordo que ferramentas de denúncia precisam ser melhores. Quem administra comunidade sabe como denúncia ruim atrapalha, mas também sabe como denúncia boa pode salvar uma situação. O problema é que muitos usuários não sabem o que enviar, não sabem onde denunciar, não recebem retorno claro e acabam desistindo. Isso cria uma sensação de abandono.

Concordo ainda que idade mínima e proteção de adolescentes precisam sair do papel. Não adianta ter texto bonito em política pública se a experiência real permite que menores acessem qualquer coisa, conversem com qualquer pessoa e participem de espaços de risco sem camada de proteção proporcional.

Eu também acho que o Discord precisa melhorar a comunicação com administradores. Muita gente que cuida de servidor grande precisa de orientação mais clara sobre incidentes graves, contas comprometidas, ameaças, golpes, denúncias envolvendo menor, preservação de evidência e resposta a crises. Existem materiais, sim, mas nem sempre eles chegam de forma prática para quem realmente está moderando no dia a dia.

Então, quando eu critico a forma como a medida foi recebida ou aplicada, não é porque eu ache que está tudo bem. Não está. Eu só não quero que a cobrança vire uma solução simplista.`
      ),
      section(
        'Onde eu discordo do jeito que a conversa virou',
        `Eu discordo quando a discussão começa a tratar todos os usuários do Discord como suspeitos. Discord não é sinônimo de crime. Servidor fechado não é automaticamente ambiente criminoso. Comunidade gamer não é automaticamente perigosa. Administrador de servidor não é automaticamente negligente. Esse tipo de generalização é ruim porque prejudica quem usa a plataforma de forma legítima e ainda atrapalha a análise do problema real.

Também discordo quando vejo gente pedindo bloqueio total da plataforma como se isso fosse uma resposta madura. Talvez para algumas pessoas pareça uma solução rápida. Para mim, parece uma medida que afetaria milhões de usuários legítimos e empurraria problemas para outros lugares sem resolver a raiz. Bloquear tudo pode dar sensação de controle, mas sensação de controle não é controle.

Outra coisa que me incomoda é a falta de cuidado com quem trabalha com comunidade. Tem administrador que dedica anos a construir espaços seguros. Tem moderador voluntário que passa madrugada resolvendo conflito. Tem servidor de estudo ajudando gente a aprender. Tem comunidade de programação conectando pessoas. Tem projeto sério que depende da plataforma. Quando a discussão pública joga todos esses usos para o canto, ela perde humanidade também.

Eu entendo a indignação. Eu também fico indignado quando vejo crime envolvendo menor. Só acho que indignação precisa ser acompanhada de precisão. Quando a raiva decide sozinha, a chance de atingir gente errada é enorme.

Talvez outras pessoas enxerguem diferente. Tudo bem. Mas essa é a parte que eu não consigo ignorar.`
      ),
      section(
        'O que eu faria se a decisão fosse minha',
        `Se dependesse da minha visão, eu não trataria isso como uma guerra entre governo e plataforma. Eu trataria como um problema de segurança digital com camadas diferentes. Primeiro, investigação séria contra os criminosos. Sem isso, qualquer medida vira maquiagem. Segundo, exigência técnica clara para a plataforma mostrar o que faz, o que falhou e o que vai mudar. Terceiro, prazos objetivos, critérios de retorno e acompanhamento público dentro do que puder ser divulgado sem prejudicar a investigação.

Também cobraria melhoria em canais de denúncia. Não apenas botão escondido. Fluxo real. Orientação para usuário. Orientação para administrador. Resposta adequada quando envolve menor, violência, coerção, ameaça, golpe ou risco imediato. Esse tipo de denúncia não pode cair em uma fila comum como se fosse spam.

Eu também cobraria mais ferramentas para comunidades. Administradores deveriam ter formas melhores de identificar padrões de abuso sem violar privacidade de todo mundo. Alertas mais úteis, logs mais claros, recursos de quarentena para conta suspeita, proteção contra invasão coordenada, melhores filtros para links perigosos e materiais de treinamento mais práticos para moderação.

Além disso, eu cobraria cooperação entre plataformas. Se o caso envolve Instagram, Discord, Telegram, TikTok ou qualquer outra plataforma, cada uma precisa colaborar dentro da lei. Não adianta uma plataforma agir e outra virar abrigo do mesmo grupo. Crimes digitais atravessam fronteiras de produto. A resposta precisa atravessar também.

E, por fim, eu cobraria educação. Parece chato falar isso, mas é real. Usuário precisa entender golpe. Responsável precisa entender risco. Moderador precisa entender procedimento. Administrador precisa entender limite. Plataforma precisa entender que segurança não é só recurso técnico, é experiência inteira.`
      ),
      section(
        'O papel das comunidades nessa história',
        `Eu não quero terminar essa carta como se tudo dependesse apenas do Discord e do governo. Comunidades também precisam olhar para dentro. Se você administra um servidor, principalmente com muitos adolescentes, precisa levar isso a sério. Não dá para tratar regra como enfeite, moderação como cargo de status e denúncia como incômodo.

Uma comunidade minimamente madura precisa saber como agir quando alguém denuncia golpe, ameaça, assédio, chantagem, comportamento predatório ou risco envolvendo menor. Precisa ter registro. Precisa preservar evidência. Precisa evitar exposição desnecessária da vítima. Precisa saber quando banir, quando limitar acesso, quando acionar a plataforma e quando orientar a pessoa a procurar ajuda fora do servidor.

Também precisa treinar moderador. Não adianta chamar alguém legal, dar cargo e esperar que a pessoa saiba lidar com crise. Moderação envolve julgamento. Envolve calma. Envolve comunicação. Envolve saber ouvir sem acreditar em tudo imediatamente. Envolve agir sem humilhar. Envolve corrigir erro. Envolve reconhecer limite.

Eu vejo muita comunidade grande funcionando com processo pequeno demais para o tamanho que tem. Enquanto está tudo bem, ninguém percebe. Quando acontece um problema sério, aparece a fragilidade. Aí todo mundo descobre que não tinha fluxo, não tinha padrão, não tinha documentação, não tinha pessoa responsável e não tinha clareza sobre o que fazer.

Isso também faz parte da discussão. Segurança não começa apenas quando uma autoridade aparece. Segurança começa quando quem cria um espaço entende que pessoas reais vão circular por ali.`
      ),
      section(
        'Eu posso estar errado em alguns pontos',
        `Eu posso estar errado em alguns pontos. Posso estar olhando para isso muito influenciado pela minha experiência usando o Discord todos os dias. Posso estar dando peso demais para o impacto em comunidades legítimas. Posso estar deixando passar alguma coisa que alguém da área jurídica, de proteção infantil ou de investigação criminal enxergaria melhor do que eu.

E tudo bem. Essa carta não é para dizer que eu tenho a verdade. É para colocar minha visão na mesa. Eu estou escrevendo como desenvolvedor, empreendedor digital e administrador de comunidades que conhece bem o Discord, mas que também sabe que esse assunto passa por áreas que vão além da minha vivência.

O que eu não quero é fingir neutralidade. Eu acho que criminosos precisam ser responsabilizados. Acho que o Discord precisa melhorar e prestar esclarecimentos. Acho que autoridades precisam agir. Também acho que medidas precisam ser proporcionais, tecnicamente bem explicadas e pensadas para resolver o problema, não apenas para mostrar reação rápida.

Essa é a linha que eu tento seguir. Cobrança sem histeria. Defesa de usuários legítimos sem passar pano para falha grave. Proteção de menores sem transformar a internet inteira em resposta improvisada. Talvez seja uma linha difícil de sustentar, mas é a que me parece mais honesta.

Se alguém discorda, eu realmente quero ouvir. Principalmente se administra servidor, modera comunidade, trabalha com segurança, é pai, mãe, responsável, advogado, desenvolvedor ou simplesmente usa Discord há anos e viu essa discussão com outros olhos.`
      ),
      section(
        'A conversa precisa continuar melhor do que começou',
        `No fim, o Discord continua sendo uma plataforma. Importante, enorme, cheia de camadas, mas ainda uma plataforma. O problema real não cabe dentro de um único aplicativo. Ele envolve crime, vulnerabilidade, moderação, tecnologia, responsabilidade empresarial, atuação do Estado, educação digital, proteção de menores, privacidade e a forma como comunidades funcionam quando ninguém está olhando.

Eu não quero que essa carta vire defesa cega do Discord. Também não quero que ela seja usada como argumento para minimizar a tragédia. O que aconteceu é grave. O que precisa ser investigado deve ser investigado. Quem cometeu crime precisa responder. A plataforma precisa colaborar e melhorar. As autoridades precisam agir com firmeza e responsabilidade.

Mas eu também não quero aceitar uma discussão onde basta escolher um culpado visível e seguir em frente. Isso seria confortável demais. E talvez seja justamente esse conforto que impeça soluções melhores.

Eu continuo achando que grandes comunidades digitais merecem ser olhadas com mais maturidade. Existem riscos, sim. Existem abusos, sim. Existem criminosos tentando usar qualquer ferramenta disponível, sim. Mas também existem pessoas estudando, criando, trabalhando, ensinando, aprendendo, formando equipes, construindo projetos e encontrando pertencimento em espaços que só existem porque plataformas como o Discord permitem esse tipo de organização.

Essa é a minha opinião neste momento. Não precisa ser a sua. Se você concorda, discorda ou enxerga algo que eu não considerei, comenta sua visão. Eu prefiro uma conversa difícil, com gente pensando de verdade, do que mais uma discussão onde todo mundo escolhe um lado e para de escutar.`
      ),
    ],
  },
];
