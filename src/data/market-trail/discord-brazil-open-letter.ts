import type { MarketTrailArticle } from './types';

const same = (value: string) => ({ pt: value, en: value });

const section = (title: string, content: string) => ({
  title: same(title),
  content: same(content),
});

const englishSection = (title: string, content: string) => ({ title, content });

const withEnglishSections = (
  sections: ReturnType<typeof section>[],
  englishSections: ReturnType<typeof englishSection>[]
) =>
  sections.map((item, index) => ({
    title: {
      pt: item.title.pt,
      en: englishSections[index]?.title ?? item.title.en,
    },
    content: {
      pt: item.content.pt,
      en: englishSections[index]?.content ?? item.content.en,
    },
  }));

export const discordBrazilOpenLetterArticle: MarketTrailArticle[] = [
  {
    id: 'discord-brazil-open-letter',
    slugPt: 'carta-aberta-discord-brasil',
    slugEn: 'open-letter-discord-brazil',
    showDisclaimer: true,
    disclaimerText: {
      pt: 'Esta carta aberta expressa uma opinião pessoal sobre tecnologia, segurança, comunidades digitais e medidas regulatórias no Brasil. O texto não substitui investigação oficial, decisão judicial, orientação jurídica ou análise técnica da autoridade competente.',
      en: 'This open letter expresses a personal opinion about technology, safety, digital communities and regulatory measures in Brazil. It does not replace an official investigation, a court decision, legal advice or a technical analysis from the competent authority.',
    },
    title: {
      pt: 'Minha opinião sobre o Discord no Brasil e a discussão que ficou grande demais para ser tratada no grito',
      en: 'My opinion on Discord in Brazil and a discussion that became too big to be handled by shouting',
    },
    excerpt: {
      pt: 'Uma carta aberta sobre o caso envolvendo o Discord no Brasil, a suspensão do Go Live, a proteção de menores e o cuidado necessário para não transformar uma tragédia em uma discussão rasa.',
      en: 'An open letter about the case involving Discord in Brazil, the suspension of Go Live, the protection of minors and the care needed to avoid turning a tragedy into a shallow argument.',
    },
    date: { pt: '19 de Agosto, 2026', en: 'August 19, 2026' },
    publishedDate: '2026-08-19',
    readTime: '28 min',
    tags: {
      pt: ['Discord', 'Comunidades', 'Segurança', 'Regulação', 'Opinião'],
      en: ['Discord', 'Communities', 'Safety', 'Regulation', 'Opinion'],
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
        'discord brazil',
        'anpd discord',
        'go live discord brazil',
        'discord safety',
        'discord moderation',
        'online child safety',
        'digital communities',
        'digital child protection law brazil',
      ],
    },
    sourceUrl: 'https://www.gov.br/anpd/pt-br/assuntos/noticias/em-medida-preventiva-anpd-determina-que-discord-suspenda-transmissoes-ao-vivo-no-brasil',
    sourceLabel: {
      pt: 'Fonte oficial da ANPD sobre a medida preventiva',
      en: 'Official ANPD source about the preventive measure',
    },
    sections: withEnglishSections([
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
        'Quando a restrição vira caminho de contorno',
        `Tem outro ponto que eu acho que precisa entrar nessa conversa. Depois que as funções de vídeo do Discord foram suspensas no Brasil, foi divulgado que a Proton VPN registrou um aumento de 800% em novos cadastros de usuários brasileiros. A leitura mais óbvia é que muita gente passou a procurar VPN para tentar recuperar o acesso ao Go Live.

Eu não estou trazendo isso para ensinar ninguém a burlar nada. Pelo contrário. Estou trazendo porque esse tipo de reação mostra um efeito colateral que precisa ser discutido. Quando uma funcionalidade muito usada desaparece de uma hora para outra, parte das pessoas procura outro caminho. Isso não significa que todo usuário de VPN esteja fazendo algo errado. VPN pode ser usada por privacidade, segurança, trabalho e várias razões legítimas. Mas, nesse caso específico, o aumento divulgado apareceu justamente ligado à suspensão das funções de vídeo do Discord no país.

A pergunta que eu faço é simples. Se alguém mal intencionado decide continuar usando transmissão por meio de VPN, a investigação fica mais fácil ou mais difícil? Na minha visão, tende a ficar mais difícil. Não porque VPN seja crime, porque não é. Mas porque qualquer camada adicional de contorno pode dificultar leitura de comportamento, identificação de origem, resposta da plataforma e cooperação com autoridades.

E é aí que a discussão fica menos confortável. A intenção da medida pode ser proteger menores. Eu entendo essa intenção e acho que proteção de menores precisa ser levada a sério. Mas se a consequência prática é empurrar uma parte dos usuários para ferramentas de contorno, a gente precisa perguntar se a resposta está reduzindo risco ou apenas mudando o problema de lugar.

Também tenho visto tutoriais circulando em redes sociais ensinando formas de recuperar transmissões ou contornar a limitação. Não vou citar nomes, links ou métodos, porque isso não ajuda em nada e ainda pode dar palco para conteúdo ruim. Mas o simples fato desse tipo de tutorial aparecer já mostra uma coisa. Remover uma funcionalidade não encerra o problema. Muitas vezes cria uma corrida entre bloqueio e contorno.

Esse é o ponto que eu queria deixar claro. Nenhuma plataforma é 100% segura. Discord não é. Instagram não é. TikTok não é. X não é. WhatsApp não é. Telegram não é. Nenhuma. Toda plataforma grande vai atrair uso legítimo e também gente tentando usar seus recursos de forma criminosa. Colocar uma trava nova pode reduzir risco, mas sempre vai existir alguém tentando burlar.

Por isso eu acho perigoso vender qualquer medida isolada como se fosse solução definitiva. Talvez ela ajude em algo. Talvez seja necessária por um período. Mas se ela não vier acompanhada de investigação, melhoria técnica, cooperação entre plataformas, educação digital e resposta contra quem realmente comete crime, a gente corre o risco de apenas trocar o caminho usado por quem já queria fazer coisa errada.`
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
    ], [
      englishSection(
        'Why I decided to write this',
        `I want to make one thing very clear before anything else. I am not talking about Discord as someone who opened the platform recently, saw a heavy news story and decided to comment because the topic became popular. I have used Discord since 2018. That means years of logging in almost every day, managing servers, organizing channels, dealing with permissions, roles, bots, automations, reports, moderation, conflicts and decisions that are not always simple.

So when I look at everything happening in Brazil, my reaction is not just the reaction of someone watching technology from the outside. I know the platform from the inside. I know the good parts, the bad parts, the technical limits, the cultural problems, the moderation difficulties and also the real importance Discord has for many people who use it as a work tool, a study space, a community hub, a support channel and a place to belong.

And maybe that is exactly why this whole discussion bothers me. Not because I think Discord should not be criticized. It can be criticized. It should be. Any large platform needs to be held accountable when serious failures happen. What bothers me is when the discussion turns into a fight that is too simple for a problem that is clearly not simple.

I am not defending criminals. I am not defending people who groom minors, manipulate teenagers, encourage self harm, violence, suicide or anything like that. In my view, people who do that need to be investigated and held accountable seriously. The case involving the 13 year old girl is a tragedy. There is no way to treat it as a detail, an exaggeration or just another internet controversy.

What I question is something else. I question the proportionality of restricting a Discord feature because of a problem that involved multiple platforms and whose responsibility still needs to be properly investigated. That is different from saying Discord has no responsibility. I am not saying that. I am saying that before turning an entire platform into the symbol of the problem, we need to understand where the problem started, where it went, what failed and what can actually prevent something like this from happening again.`
      ),
      englishSection(
        'Discord is not just another social network',
        `One of the things I see most in this discussion is people talking about Discord as if it were a regular social network. I understand why that happens, because from the outside everything can look the same. There is a profile, messages, groups, voice calls, video, communities and people talking. But in practice, Discord works very differently from platforms like Instagram, TikTok or X.

Discord is much closer to communication infrastructure. There are public servers, private servers, text channels, voice channels, specific permissions, roles, bots, automation systems, integrations, logs, distributed moderation and communities that operate in completely different ways. A study server does not behave like a gaming server. A support server does not behave like a creator community. A company server does not behave like a group of friends.

I have seen Discord being used for programming communities, support, study, games, independent projects, team organization, networking, classes, events, technical support, professional communities and even internal processes that would normally happen inside much more expensive tools. For many people, Discord is not some random place to chat. It is where the community exists.

That is why I struggle when part of the debate treats the platform as if it were a space dominated by crime. That does not match the reality I see every day. There are serious problems inside Discord, just as there are inside other large platforms. But there are also millions of legitimate, productive and healthy uses. Putting everything in the same bag may create a strong headline, but it does not help solve anything.

In my experience, a Discord community can be extremely organized. It can have clear rules, a trained team, well defined channels, automations, reporting systems, filters, internal records and incident response processes. It can also be a complete mess. That difference does not depend only on the platform. It depends on who manages it, who moderates it, the culture of the community, the tools available and the way the platform itself reacts when something crosses the line.`
      ),
      englishSection(
        'The tragedy needs to be treated as a tragedy',
        `I am very careful when talking about the case involving the teenager, because I do not want to turn a family's pain into a cheap argument. I also do not want to repeat sensitive details, speculate about what happened or use the death of a girl to win a public debate. That would be disrespectful and completely unnecessary.

What can be said responsibly is that there is an investigation, there is a preventive measure from ANPD, there is pressure around the protection of children and teenagers and there is a serious discussion about criminals acting in digital environments. ANPD stated that it identified failures in the implementation of structural measures and procedures to prevent and fight serious violations against children and teenagers. That is public information, it is in the authority's official statement and it needs to be taken seriously.

At the same time, the case did not happen exclusively on Discord. Instagram and other platforms also appear in the context of the investigations and the information that has been made public. This matters a lot, because it changes how we should think about the response. If the problem moves across platforms, the solution cannot be designed as if a single tool were the beginning and the end of everything.

In my view, the priority should be to hold the people who committed crimes accountable, understand how they reached the victim, map the channels that were used, identify where reports failed, where prevention failed, where response failed and which mechanisms need to improve. If the response stays only at the suspension of a feature, I am afraid society may feel that something was solved when, in practice, the criminal structure can simply move somewhere else.

I do not want to reduce the importance of the measure. I also do not want to act as if any government action is automatically bad. I just think a tragedy of this size demands more than a visible response. It demands a response that works.`
      ),
      englishSection(
        'My doubt about the Go Live suspension',
        `When ANPD ordered the preventive suspension of Go Live in Brazil, the first question that came to my mind was simple. Does this really attack the problem in the right way? I understand the authority's logic. Live streams inside closed servers can create risk, especially when minors are involved and when the platform cannot demonstrate enough protection mechanisms. From that angle, wanting to reduce immediate risk makes sense.

But I also look at this as someone who actually uses Discord. Go Live is not used only for bad things. A lot of people use it to study together, share a screen during a project call, help someone with code, provide support, play with friends, review design, explain configuration, teach a class, guide a team and create presence inside a community. Suspending a feature like that affects legitimate uses too.

This is where my criticism begins. I am not saying nothing should have been done. I am saying the measure needs to be proportional, technically clear and connected to a real plan for fixing the problem. If the suspension becomes only an emergency response without objective criteria for returning the feature, people who use it correctly are left in the dark. Serious administrators are affected too, even when they do everything they can to keep their communities safe.

Maybe someone reads this and thinks I care too much about one platform feature. But for someone who manages a community, tools matter. When a feature disappears from one moment to another, entire routines need to be adapted. Events change. Classes change. Support changes. Workflows change. And all of that happens even in servers that had no connection at all with the investigated case.

That is why I return to the central point. Holding Discord accountable is necessary. Suspending something can be defensible in a risk situation. But the discussion cannot end there. If it ends there, the measure becomes a symbol. And a symbol does not protect anyone by itself.`
      ),
      englishSection(
        'When restriction becomes a way around it',
        `There is another point I think needs to be part of this conversation. After Discord's video functions were suspended in Brazil, it was reported that Proton VPN saw an 800% increase in new Brazilian signups. The most obvious reading is that many people started looking for a VPN to try to recover access to Go Live.

I am not bringing this up to teach anyone how to bypass anything. Quite the opposite. I am bringing it up because this kind of reaction shows a side effect that needs to be discussed. When a heavily used feature disappears from one moment to another, some people look for another path. That does not mean every VPN user is doing something wrong. VPNs can be used for privacy, security, work and many legitimate reasons. But in this specific case, the reported increase appeared precisely linked to the suspension of Discord's video functions in the country.

The question I ask is simple. If someone with bad intentions decides to keep streaming through a VPN, does the investigation become easier or harder? In my view, it tends to become harder. Not because using a VPN is a crime, because it is not. But because any additional layer of circumvention can make behavior analysis, origin identification, platform response and cooperation with authorities more difficult.

And that is where the discussion becomes less comfortable. The intention behind the measure may be to protect minors. I understand that intention and I think child safety needs to be taken seriously. But if the practical consequence is pushing some users toward circumvention tools, we need to ask whether the response is reducing risk or just moving the problem somewhere else.

I have also seen tutorials circulating on social networks teaching ways to restore streams or bypass the limitation. I will not mention names, links or methods, because that helps nothing and can even give visibility to bad content. But the simple fact that this kind of tutorial appears already shows one thing. Removing a feature does not end the problem. Many times it creates a race between blocking and bypassing.

That is the point I wanted to make clear. No platform is 100% safe. Discord is not. Instagram is not. TikTok is not. X is not. WhatsApp is not. Telegram is not. None of them are. Every large platform will attract legitimate use and also people trying to use its resources for crime. Adding a new restriction may reduce risk, but there will always be someone trying to bypass it.

That is why I think it is dangerous to sell any isolated measure as if it were a definitive solution. Maybe it helps with something. Maybe it is necessary for a period. But if it does not come together with investigation, technical improvement, cooperation between platforms, digital education and a response against the people actually committing crimes, we risk only changing the path used by those who already wanted to do something wrong.`
      ),
      englishSection(
        'Safety exists but perfect safety does not',
        `It also bothers me when I see people saying Discord simply has no safety. I cannot agree with that. I have used the platform since 2018 and I have followed many changes over the years. Discord did not start thinking about safety now because the topic became news in Brazil.

The platform has AutoMod, filters, reporting tools, controls for administrators, anti spam systems, rules against self bots, abuse detection mechanisms, privacy settings, age based content restrictions and recent changes aimed at users in Brazil. Discord's own documentation talks about more protective settings for Brazilian teenagers and age verification for access to certain content and spaces.

Now, recognizing that these mechanisms exist does not mean saying they are enough. That is the difference many people miss. One thing is saying the platform has nothing. Another thing is saying the platform has mechanisms, but they may have failed, may be insufficient or may not keep up with the complexity of real abuse.

I prefer discussing it this way, because it is more honest. Safety systems fail. Moderation fails. Automation fails. Reporting fails. Human teams fail. And when the failure involves a child or teenager, the consequence can be far too serious to be treated as a common operational mistake.

So yes, I think Discord needs to be held accountable. It needs to explain better how it identifies risk, how it responds to reports, how it treats closed servers, how it handles suspicious accounts, how it applies measures involving minors, how it improves age assurance and how it communicates this to the public. I just do not think it is correct to pretend nothing exists and that the platform was completely idle. That version is simple, but it does not seem accurate to me.`
      ),
      englishSection(
        'Minimum age also needs to be part of the conversation',
        `Another point that almost always appears in a confused way is minimum age. Discord is not officially open to every child. For countries that do not have a different specific rule in the platform's own minimum age list, access begins at 13. In Brazil, the public discussion around the case involves a 13 year old teenager, so this does not remove the platform's responsibility. But it helps us understand that there is a layer of rules, verification and protection that needs to be analyzed more carefully.

A child who is 11 or 12, for example, should not even maintain a Discord account if they do not meet the applicable minimum age. That does not mean it never happens. We know minors can lie about age, use someone else's account, bypass signup flows and pass through automated systems. This is a real problem for almost every digital platform.

In my view, the more useful question is not only whether a minimum age exists. The question is how that age is verified, when verification happens, which signals are used to detect inconsistency, how reports involving younger users are handled and what happens when an account does not meet the requirements. Discord has been making changes in Brazil, but the existence of change does not end the subject. What needs to be analyzed is whether those changes work.

There is also another delicate side. Age verification can involve sensitive data, documents, biometrics, facial estimation and external providers. Many people want protection, but they do not want to give too much personal data to any platform. I understand that concern. I also think any age solution needs to balance child safety with user privacy.

That balance is difficult. But pretending it does not exist does not help. If the solution is weak, minors remain vulnerable. If the solution is too invasive, legitimate users become exposed to another kind of risk. This is a technical, legal and social discussion. It does not fit into a catchy phrase.`
      ),
      englishSection(
        'Managing a community is not controlling the entire platform',
        `I also think it is dangerous when the conversation treats server administrators as if they had absolute control over everything that happens. I manage communities and I can say calmly that this is not how it works. An administrator can create rules, define permissions, configure bots, train moderators, organize channels, establish processes and respond to reports inside their space. That alone is already a lot of work.

But they do not see everything. They do not control private conversations between users. They do not know what happens in other servers. They do not have access to the platform backend. They cannot identify all fake accounts, compromised accounts, coordinated networks or behaviors that begin outside the server on their own. There is a huge difference between managing a community and being responsible for the entire safety layer of the platform.

That does not mean administrators have no responsibility. They do. Whoever creates a community needs to take care of it. They need to think about rules, team, culture, protection, reporting channels, logs, proportional punishments and fast response when something goes out of control. I actually think many large communities handle moderation in a way that is too amateur.

But we also need to be fair. In many cases, serious administrators are trying to do the best they can with the tools they have. They depend on platform resources, documentation, APIs, alerts, support, clear policies and reporting mechanisms that actually work. When the platform fails at that level, the local community is limited.

In practice, safety in a digital community is a shared responsibility. Part of it belongs to the user. Part of it belongs to parents or guardians when minors are involved. Part of it belongs to the community administration. Part of it belongs to the platform. Part of it belongs to the authorities. When someone tries to put everything on one side only, the response usually becomes unfair and incomplete.`
      ),
      englishSection(
        'What I see happening in real servers',
        `Someone looking at Discord from the outside may imagine that managing a server is just creating channels and choosing moderators. But anyone who has been inside knows it is more complicated. You need to deal with people who join just to cause trouble, members who test limits, conflicts between groups, poorly explained reports, screenshots without context, newly created accounts, scam attempts, bot raids, leaks of information, permission abuse and moderators who sometimes make the wrong decision.

In large communities, all of this scales quickly. A bad decision can become a public fight. A poorly applied punishment can create distrust. An unprepared moderator can make an already sensitive situation worse. A rule written in a vague way can open space for completely different interpretations. A channel without monitoring can become a problem before the team notices.

That is why I talk so much about process. Not because I want to turn a community into a company, because they are not the same thing. A company has much larger legal, financial, tax, contractual and operational responsibilities. But a large community also needs organization. It needs standards. It needs training. It needs documentation. It needs mature people making decisions.

When a community grows, improvisation starts to cost more. A moderator cannot punish someone just because they woke up irritated. They cannot protect a friend. They cannot use their role to joke around with members. They cannot delete evidence because they got scared. They cannot make a serious decision without understanding the context. This may sound obvious, but in practice it is not. I have seen many good people make mistakes because they lacked guidance, not because they had bad intentions.

That is why I think the debate about Discord in Brazil should also talk about training administrators and moderators. The platform can and should improve its tools. But communities also need to mature from the inside.`
      ),
      englishSection(
        'Criminals change platforms if the root problem is not addressed',
        `This may be the point that worries me the most. If someone uses Discord to commit a crime and the response is to restrict one tool, that person may try to move somewhere else. They may use Telegram. They may use Instagram. They may use TikTok. They may use a closed group on another platform. They may use an external call. They may change the method. A criminal does not stop being a criminal because they lost one button.

Of course, reducing a risk surface can make sense. If a feature is being used in a dangerous way and the platform does not demonstrate enough control, a preventive measure can reduce immediate harm. I understand that logic. My concern is when this becomes a substitute for deeper investigation.

The focus needs to be on the people who committed crimes, the groups coordinating abuse, the flows used to reach victims, the contact methods, the circulation of content, the reporting failures, the accounts involved and cooperation between platforms. If the criminal network used more than one environment, the response needs to follow that network. Otherwise, we are only changing the address of the problem.

In my view, public debate often likes to choose one villain because it makes anger easier to organize. But digital crimes almost never work that cleanly. They cross platforms, accounts, groups, private messages, invites, links, fake profiles and breaches of trust. Solving this takes more than pointing at a brand and saying it represents everything that is wrong.

I am not saying the platform has no responsibility. I am saying the platform is not the only layer of the problem. And if the public response ignores that, the chance of getting it wrong increases.`
      ),
      englishSection(
        'Where I agree with the pressure',
        `I agree that platforms need to be pressured when children and teenagers are at risk. I agree that a company the size of Discord cannot simply say moderating closed servers is hard and stop there. Technical difficulty does not erase responsibility. If a platform offers a sensitive feature, especially to a young audience, it needs to prove that it thought about the risks from the design of the product.

I also agree that reporting tools need to be better. Anyone who manages a community knows that bad reports get in the way, but also knows that a good report can save a situation. The problem is that many users do not know what to send, do not know where to report, do not receive clear feedback and end up giving up. This creates a feeling of abandonment.

I also agree that minimum age and teen protection need to move beyond text. It is not enough to have beautiful wording in a policy if the real experience allows minors to access anything, talk to anyone and join risky spaces without proportional protection.

I also think Discord needs to improve communication with administrators. Many people who manage large servers need clearer guidance on serious incidents, compromised accounts, threats, scams, reports involving minors, preservation of evidence and crisis response. Materials do exist, yes, but they do not always arrive in a practical way for the people actually moderating every day.

So when I criticize the way the measure was received or applied, it is not because I think everything is fine. It is not. I just do not want accountability to become a simplistic solution.`
      ),
      englishSection(
        'Where I disagree with how the conversation turned',
        `I disagree when the discussion starts treating every Discord user as suspicious. Discord is not a synonym for crime. A closed server is not automatically a criminal environment. A gaming community is not automatically dangerous. A server administrator is not automatically negligent. This kind of generalization is bad because it harms people who use the platform legitimately and still gets in the way of understanding the real problem.

I also disagree when I see people asking for a total block of the platform as if that were a mature response. Maybe for some people it feels like a quick solution. To me, it looks like a measure that would affect millions of legitimate users and push problems elsewhere without solving the root. Blocking everything may create a feeling of control, but a feeling of control is not control.

Another thing that bothers me is the lack of care toward people who work with communities. There are administrators who spend years building safe spaces. There are volunteer moderators who stay up late solving conflicts. There are study servers helping people learn. There are programming communities connecting people. There are serious projects that depend on the platform. When public discussion pushes all those uses aside, it loses humanity too.

I understand the outrage. I also feel outraged when I see a crime involving a minor. I just think outrage needs precision. When anger decides alone, the chance of hitting the wrong people is huge.

Maybe other people see it differently. That is fine. But this is the part I cannot ignore.`
      ),
      englishSection(
        'What I would do if the decision were mine',
        `If it depended on my view, I would not treat this as a war between government and platform. I would treat it as a digital safety problem with different layers. First, serious investigation against the criminals. Without that, any measure becomes makeup. Second, clear technical requirements for the platform to show what it does, what failed and what will change. Third, objective deadlines, return criteria and public follow up within what can be disclosed without harming the investigation.

I would also demand improvements in reporting channels. Not just a hidden button. A real flow. Guidance for users. Guidance for administrators. Proper response when a report involves a minor, violence, coercion, threat, scam or immediate risk. This kind of report cannot fall into a common queue as if it were spam.

I would also demand better tools for communities. Administrators should have better ways to identify abuse patterns without violating everyone's privacy. More useful alerts, clearer logs, quarantine resources for suspicious accounts, protection against coordinated raids, better filters for dangerous links and more practical training materials for moderation.

Besides that, I would demand cooperation between platforms. If the case involves Instagram, Discord, Telegram, TikTok or any other platform, each one needs to cooperate within the law. It does not help if one platform acts and another becomes shelter for the same group. Digital crimes cross product boundaries. The response needs to cross them too.

And finally, I would demand education. It sounds boring to say this, but it is real. Users need to understand scams. Guardians need to understand risk. Moderators need to understand procedure. Administrators need to understand limits. Platforms need to understand that safety is not just a technical resource, it is the whole experience.`
      ),
      englishSection(
        'The role of communities in this story',
        `I do not want to end this letter as if everything depended only on Discord and the government. Communities also need to look inward. If you manage a server, especially one with many teenagers, you need to take this seriously. Rules cannot be decoration, moderation cannot be a status role and reports cannot be treated as an inconvenience.

A minimally mature community needs to know how to act when someone reports a scam, threat, harassment, blackmail, predatory behavior or risk involving a minor. It needs records. It needs to preserve evidence. It needs to avoid unnecessary exposure of the victim. It needs to know when to ban, when to limit access, when to contact the platform and when to guide the person to seek help outside the server.

It also needs to train moderators. It is not enough to call someone nice, give them a role and expect them to know how to handle a crisis. Moderation involves judgment. It involves calm. It involves communication. It involves listening without immediately believing everything. It involves acting without humiliating. It involves correcting mistakes. It involves recognizing limits.

I see many large communities operating with processes that are too small for their size. While everything is fine, nobody notices. When a serious problem happens, the fragility appears. Then everyone discovers there was no flow, no standard, no documentation, no responsible person and no clarity about what to do.

This is also part of the discussion. Safety does not begin only when an authority appears. Safety begins when whoever creates a space understands that real people will move through it.`
      ),
      englishSection(
        'I may be wrong on some points',
        `I may be wrong on some points. I may be looking at this too much through my own experience using Discord every day. I may be giving too much weight to the impact on legitimate communities. I may be missing something that someone from law, child protection or criminal investigation would see better than I can.

And that is fine. This letter is not meant to say I own the truth. It is meant to put my view on the table. I am writing as a developer, digital entrepreneur and community administrator who knows Discord well, but who also understands that this subject goes beyond my own experience.

What I do not want is to pretend neutrality. I think criminals need to be held accountable. I think Discord needs to improve and provide explanations. I think authorities need to act. I also think measures need to be proportional, technically well explained and designed to solve the problem, not just to show a quick reaction.

That is the line I try to follow. Accountability without hysteria. Defense of legitimate users without excusing a serious failure. Protection of minors without turning the entire internet into an improvised response. Maybe it is a difficult line to sustain, but it feels like the most honest one to me.

If someone disagrees, I genuinely want to hear it. Especially if they manage a server, moderate a community, work with safety, are a parent or guardian, are a lawyer, developer or simply use Discord for years and saw this discussion from another angle.`
      ),
      englishSection(
        'The conversation needs to continue better than it started',
        `In the end, Discord is still a platform. Important, huge, full of layers, but still a platform. The real problem does not fit inside one single app. It involves crime, vulnerability, moderation, technology, corporate responsibility, state action, digital education, child safety, privacy and the way communities work when nobody is watching.

I do not want this letter to become blind defense of Discord. I also do not want it to be used as an argument to minimize the tragedy. What happened is serious. What needs to be investigated should be investigated. Whoever committed a crime needs to answer for it. The platform needs to cooperate and improve. Authorities need to act with firmness and responsibility.

But I also do not want to accept a discussion where it is enough to choose one visible culprit and move on. That would be too comfortable. And maybe that comfort is exactly what prevents better solutions.

I still think large digital communities deserve to be looked at with more maturity. There are risks, yes. There are abuses, yes. There are criminals trying to use any available tool, yes. But there are also people studying, creating, working, teaching, learning, forming teams, building projects and finding belonging in spaces that only exist because platforms like Discord allow this kind of organization.

This is my opinion right now. It does not have to be yours. If you agree, disagree or see something I did not consider, leave your view. I prefer a difficult conversation with people actually thinking over another debate where everyone chooses a side and stops listening.`
      ),
    ]),
  },
];
