import type { MarketTrailArticle } from './types';

export const ecaDigitalArticle: MarketTrailArticle[] = [
  {
    id: 'eca-digital-anpd',
    slugPt: 'eca-digital-anpd-monitoramento',
    slugEn: 'eca-digital-anpd-monitoring',
    title: {
      pt: 'ECA Digital e ANPD: O Que o Monitoramento de Plataformas Significa para o Ecossistema Tecnológico Brasileiro',
      en: 'ECA Digital and ANPD: What Platform Monitoring Means for the Brazilian Tech Ecosystem',
    },
    excerpt: {
      pt: 'Minha análise sobre a ação da ANPD no monitoramento do ECA Digital, o impacto em plataformas e empresas de games, o caso Felca como catalisador do debate, e por que considero esse movimento necessário para o amadurecimento do ecossistema digital brasileiro.',
      en: 'My analysis of ANPD\'s monitoring action on the ECA Digital, the impact on platforms and gaming companies, the Felca case as a catalyst for debate, and why I consider this movement necessary for the maturation of the Brazilian digital ecosystem.',
    },
    date: { pt: '16 de Março, 2026', en: 'March 16, 2026' },
    publishedDate: '2026-03-16',
    readTime: '24 min',
    tags: {
      pt: ['Governança Digital', 'Privacidade', 'Regulação', 'Segurança', 'Estratégia'],
      en: ['Digital Governance', 'Privacy', 'Regulation', 'Security', 'Strategy'],
    },
    keywords: {
      pt: ['eca digital', 'anpd', 'proteção de dados', 'crianças e adolescentes', 'lgpd', 'governança digital', 'privacidade', 'regulação tecnológica', 'plataformas digitais', 'games', 'felca', 'adultização infantil', 'gta vi', 'verificação de idade'],
      en: ['eca digital', 'anpd', 'data protection', 'children and adolescents', 'lgpd', 'digital governance', 'privacy', 'tech regulation', 'digital platforms', 'gaming', 'child protection', 'gta vi', 'age verification'],
    },
    sourceUrl: 'https://www.gov.br/anpd/pt-br/assuntos/noticias/em-acao-de-monitoramento-do-eca-digital-a-anpd-estende-o-prazo-para-que-empresas-prestem-informacoes-sobre-implementacao-das-novas-regras',
    sourceLabel: {
      pt: 'Fonte oficial da notícia (gov.br)',
      en: 'Official news source (gov.br)',
    },
    sections: [
      {
        title: { pt: 'Isso é a minha opinião como profissional da área', en: 'This is my opinion as an industry professional' },
        content: {
          pt: `Preciso começar sendo direto: o que está escrito aqui reflete o meu posicionamento pessoal como desenvolvedor de software e profissional de tecnologia. Não é uma matéria jornalística. Não é uma explicação neutra feita pra agradar todo mundo. É o resultado de ter acompanhado essa pauta desde que a ANPD começou a se movimentar, de ter lido a notícia oficial, pesquisado os desdobramentos e cruzado isso com o que eu observo no dia a dia do mercado.

Minha posição é clara: considero essa iniciativa, no geral, positiva. Existe um problema concreto envolvendo menores de idade no ambiente digital. Plataformas acumularam um nível de influência sobre crianças e adolescentes que simplesmente não existia antes. E quando uma empresa tem esse grau de impacto, é razoável esperar que exista responsabilidade proporcional. Não estou falando de algo radical. É lógica.

Ao mesmo tempo, não vou ignorar os riscos. Regulação pode ser mal feita. Pode criar mais burocracia do que proteção. Pode gerar efeitos colaterais que ninguém previu. E eu vou falar disso aqui também, porque defender uma causa não significa aceitar qualquer solução de olhos fechados.`,
          en: `I need to start by being direct: what is written here reflects my personal position as a software developer and technology professional. This is not a news article. It is not a neutral explanation made to please everyone. It is the result of having followed this topic since ANPD started taking action, having read the official notice, researched the developments, and cross-referenced all of it with what I observe daily in the market.

My position is clear: I consider this initiative, overall, positive. There is a concrete problem involving minors in the digital environment. Platforms have accumulated a level of influence over children and adolescents that simply did not exist before. And when a company has that degree of impact, it is reasonable to expect proportional responsibility. I am not talking about anything radical. It is logic.

At the same time, I will not ignore the risks. Regulation can be poorly done. It can create more bureaucracy than protection. It can generate side effects nobody predicted. And I will talk about that here too, because supporting a cause does not mean accepting any solution blindly.`,
        },
      },
      {
        title: { pt: 'O que impulsionou esse debate recentemente', en: 'What fueled this debate recently' },
        content: {
          pt: `Essa discussao sobre protecao de menores no digital nao surgiu de um vazio institucional. Ela ganhou tracalo concreta por causa de episodios que trouxeram o tema para o centro da atencao publica.

O primeiro momento de virada foi o video publicado pelo influenciador Felca, que trouxe a tona denuncias sobre conteudos relacionados a exposicao e adultizacao de criancas e adolescentes em plataformas digitais. O video gerou uma repercussao massiva. Nao por ser algo novo, mas porque tornou visivel de forma direta e acessivel um problema que existia ha anos dentro de algoritmos, recomendacoes automaticas e lacunas de moderacao. Funcionou como um catalisador. A sociedade viu, reagiu e comecou a cobrar respostas.

Outro episodio que ampliou significativamente a pressao publica envolveu o criador de conteudo Hytalo Santos. Sem entrar em julgamentos ou conclusoes juridicas, o fato e que situacoes envolvendo esse influenciador geraram controvérsias publicas e chamaram atencao para a relacao entre criadores de conteudo, audiencias jovens e a responsabilidade das plataformas que hospedam e monetizam esse tipo de presenca digital. A repercussao negativa em torno do caso reforcou a percepcao de que o ambiente digital estava operando sem limites claros quando o assunto envolve menores.

Esses episodios, somados a relatorios tecnicos sobre coleta abusiva de dados de menores e mecanicas de monetizacao projetadas para explorar vulnerabilidades cognitivas de adolescentes, criaram um cenario onde a inacao institucional nao era mais sustentavel. A pressao veio de varios lados: opiniao publica, organizacoes de protecao a infancia, profissionais de tecnologia e a propria comunidade legislativa.

Foi nesse contexto que a aplicacao mais rigorosa do Estatuto da Crianca e do Adolescente no ambiente digital ganhou forca. Nao como reacao impulsiva, mas como resposta a uma demanda que ja existia e que precisou de visibilidade social para sair do papel.`,
          en: `This discussion about protecting minors in the digital space did not emerge from an institutional vacuum. It gained concrete traction because of episodes that brought the topic to the center of public attention.

The first turning point was the video published by the influencer Felca, which brought to light reports about content related to the exposure and adultification of children and adolescents on digital platforms. The video generated massive repercussion. Not because it was something new, but because it made visible in a direct and accessible way a problem that had existed for years within algorithms, automatic recommendations, and moderation gaps. It worked as a catalyst. Society saw it, reacted, and started demanding answers.

Another episode that significantly amplified public pressure involved the content creator Hytalo Santos. Without making judgments or legal conclusions, the fact is that situations involving this influencer generated public controversies and drew attention to the relationship between content creators, young audiences, and the responsibility of platforms that host and monetize this type of digital presence. The negative repercussion around the case reinforced the perception that the digital environment was operating without clear limits when it comes to minors.

These episodes, combined with technical reports on abusive data collection from minors and monetization mechanics designed to exploit the cognitive vulnerabilities of adolescents, created a scenario where institutional inaction was no longer sustainable. The pressure came from multiple directions: public opinion, child protection organizations, technology professionals, and the legislative community itself.

It was in this context that the more rigorous enforcement of the Child and Adolescent Statute in the digital environment gained momentum. Not as an impulsive reaction, but as a response to a demand that already existed and needed social visibility to materialize.`,
        },
      },
      {
        title: { pt: 'De onde surgiu esse debate', en: 'Where this debate came from' },
        content: {
          pt: `A proteção de menores na internet não virou pauta do dia pra noite. Essa discussão existe há anos, mas ganhou tração real quando casos concretos começaram a estourar publicamente.

Nos últimos meses, o tema da adultização infantil explodiu nas redes sociais. Denúncias sobre crianças sendo expostas a contextos completamente inadequados geraram uma reação em cadeia que forçou instituições a se posicionar. Um dos momentos que mais trouxe visibilidade ao assunto foi o caso envolvendo o influenciador Felca. Sem entrar em detalhes que não me cabem, o que importa entender é o papel que esse episódio teve: funcionou como um catalisador. Mostrou de forma concreta que a exposição de menores no ambiente digital tinha chegado a um ponto que a sociedade não estava mais disposta a ignorar.

Paralelamente, relatórios sobre plataformas coletando dados de menores de forma abusiva, algoritmos empurrando conteúdo inadequado pra crianças e mecânicas de monetização projetadas pra explorar a vulnerabilidade de adolescentes foram se acumulando. O cenário ficou insustentável.

A Lei nº 15.211, chamada de ECA Digital, foi sancionada em setembro de 2025 nesse contexto. Não foi uma decisão isolada ou uma ideia que apareceu do nada. Foi uma resposta a uma pressão crescente que combinou indignação pública, denúncias concretas e uma demanda institucional que já existia, mas que precisava de um empurrão social pra sair do papel.

No início de 2026, a ANPD abriu um processo de monitoramento envolvendo 37 empresas de tecnologia. Google, Apple, Meta, TikTok, Discord, Amazon, Samsung, Spotify, Netflix, entre outras. O prazo para que essas empresas prestassem informações sobre como estão se adequando foi estendido, dada a complexidade das exigências. E é aqui que a coisa começa a ficar interessante do ponto de vista técnico.`,
          en: `The protection of minors on the internet did not become a trending topic overnight. This discussion has existed for years, but it gained real traction when concrete cases started blowing up publicly.

In recent months, the topic of child adultification exploded on social media. Reports of children being exposed to completely inadequate contexts generated a chain reaction that forced institutions to take a stance. One of the moments that brought the most visibility to the issue was the case involving the influencer Felca. Without getting into details that are not mine to tell, what matters is understanding the role that episode played: it worked as a catalyst. It concretely showed that the exposure of minors in the digital environment had reached a point that society was no longer willing to ignore.

In parallel, reports about platforms abusively collecting data from minors, algorithms pushing inappropriate content to children, and monetization mechanics designed to exploit adolescent vulnerability kept piling up. The scenario became unsustainable.

Law No. 15,211, called ECA Digital, was enacted in September 2025 in this context. It was not an isolated decision or an idea that appeared out of nowhere. It was a response to growing pressure that combined public outrage, concrete reports, and an institutional demand that already existed but needed a social push to materialize.

In early 2026, ANPD opened a monitoring process involving 37 technology companies. Google, Apple, Meta, TikTok, Discord, Amazon, Samsung, Spotify, Netflix, among others. The deadline for these companies to provide information about how they are complying was extended, given the complexity of the requirements. And this is where things start getting interesting from a technical perspective.`,
        },
      },
      {
        title: { pt: 'O que é o ECA Digital e o que muda na prática', en: 'What is the ECA Digital and what changes in practice' },
        content: {
          pt: `O ECA Digital é a atualização do Estatuto da Criança e do Adolescente voltada para o ambiente digital. Parte de uma constatação que demorou tempo demais pra virar lei: crianças e adolescentes são usuários intensivos de tecnologia, estão expostos a riscos que o marco legal anterior não cobria, e as plataformas que lucram com esse público precisam responder por isso.

Na prática, a lei exige medidas concretas. Verificação de idade que funcione de verdade, não aquele botão de "tenho mais de 18 anos" que qualquer criança de 10 anos clica sem pensar. Configurações de privacidade restritivas por padrão para menores. Limitação de funcionalidades que estimulem uso compulsivo. Transparência sobre como algoritmos de recomendação se comportam quando o público é jovem. Controles parentais efetivos. Moderação de conteúdo reforçada.

A conexão com a LGPD é direta. O artigo 14 já previa tratamento diferenciado para dados de menores. O ECA Digital amplia isso. Não basta ter uma política de privacidade que mencione crianças numa linha perdida no final do documento. O produto inteiro precisa ser projetado considerando que menores vão usá-lo.

E isso vale pra qualquer empresa. Uma startup com um app educacional para crianças precisa seguir as mesmas diretrizes que a Meta ou o TikTok. A escala muda, a obrigação não.`,
          en: `The ECA Digital is the update to Brazil's Child and Adolescent Statute targeting the digital environment. It starts from an observation that took far too long to become law: children and adolescents are intensive technology users, they are exposed to risks that the previous legal framework did not cover, and platforms profiting from this audience need to be accountable.

In practice, the law requires concrete measures. Age verification that actually works, not that "I am over 18" button any 10-year-old clicks without thinking. Restrictive default privacy settings for minors. Limitation of features that encourage compulsive use. Transparency about how recommendation algorithms behave when the audience is young. Effective parental controls. Enhanced content moderation.

The connection with Brazil's LGPD is direct. Article 14 already provided differentiated treatment for minors' data. The ECA Digital expands this. It is not enough to have a privacy policy mentioning children in a lost line at the end of the document. The entire product needs to be designed considering minors will use it.

And this applies to any company. A startup with an educational app for children must follow the same guidelines as Meta or TikTok. The scale changes, the obligation does not.`,
        },
      },
      {
        title: { pt: 'O que a ANPD está fazendo e por que importa', en: 'What ANPD is doing and why it matters' },
        content: {
          pt: `A ação da ANPD não é punição. É diagnóstico. A Coordenação-Geral de Fiscalização abriu um procedimento de monitoramento pra entender onde as empresas realmente estão no processo de adequação. A lei é recente, muitos detalhes operacionais ainda estão sendo regulamentados, e a ANPD tomou uma decisão inteligente: antes de multar, quer entender o cenário.

Isso, na minha visão, demonstra maturidade regulatória. Um regulador que parte direto pra sanção numa legislação nova corre o risco de ser injusto e de criar precedentes ruins. A ANPD está construindo uma base de informações que vai permitir ações futuras mais precisas. Não significa que vai ser leniente. Significa que vai ser informada. E fiscalização informada é infinitamente mais eficaz do que fiscalização reativa.

As 37 empresas receberam solicitações detalhadas: quais sistemas de verificação de idade implementaram, como estão tratando dados de menores, que tipo de controles parentais oferecem, como seus algoritmos se comportam quando o usuário é criança. A extensão do prazo foi uma decisão sensata, dado o volume e a complexidade das exigências.

O sinal que a ANPD está passando é direto: proteção de menores no digital é prioridade. Não é pauta secundária, não é papo pra depois. Empresas que captarem esse sinal cedo vão estar em vantagem. Empresas que esperarem pra agir depois de notificação vão gastar mais tempo, mais dinheiro e mais reputação resolvendo o que deveria ter sido feito desde o começo.`,
          en: `ANPD's action is not punishment. It is diagnosis. The General Coordination for Enforcement opened a monitoring procedure to understand where companies actually stand in the compliance process. The law is recent, many operational details are still being regulated, and ANPD made a smart decision: before fining, it wants to understand the landscape.

This, in my view, demonstrates regulatory maturity. A regulator that jumps straight to sanctions on new legislation risks being unfair and creating bad precedents. ANPD is building an information base that will enable more precise future actions. It does not mean enforcement will be lenient. It means it will be informed. And informed enforcement is infinitely more effective than reactive enforcement.

The 37 companies received detailed requests: what age verification systems they implemented, how they are treating minors' data, what parental controls they offer, how their algorithms behave when the user is a child. The deadline extension was a sensible decision, given the volume and complexity of the requirements.

The signal ANPD is sending is direct: protecting minors in the digital space is a priority. It is not a secondary agenda, not a conversation for later. Companies that pick up this signal early will be at an advantage. Companies that wait to act after receiving a notification will spend more time, more money, and more reputation fixing what should have been done from the start.`,
        },
      },
      {
        title: { pt: 'O impacto na indústria de games', en: 'The impact on the gaming industry' },
        content: {
          pt: `Se tem uma área que vai sentir isso com força, é a indústria de games. E faz sentido. Jogos online são um dos ambientes digitais onde crianças e adolescentes passam mais tempo. E a grande maioria das plataformas de jogos simplesmente não foi projetada pensando em proteção de menores.

O problema começa na coleta de dados. Jogos online coletam uma quantidade absurda de informações: localização, hábitos de uso, tempo de jogo, interações sociais dentro do jogo, dados de pagamento, padrões de comportamento. Quando o jogador é menor de idade, toda essa coleta se torna exponencialmente mais sensível. A LGPD e o ECA Digital exigem que o tratamento desses dados siga regras específicas. Consentimento parental, finalidade clara, minimização de coleta. E a realidade é que a maioria dos jogos não faz nada disso.

O segundo ponto é monetização. Skins, passes de batalha, loot boxes, moedas virtuais. Essas mecânicas existem porque funcionam. E funcionam especialmente bem com adolescentes, que são mais suscetíveis a mecanismos de recompensa variável e pressão social. Um adolescente que vê os amigos com skins exclusivas sente uma pressão real pra gastar. Isso não é acidente. É design intencional. O ECA Digital coloca em questão até que ponto essas práticas são aceitáveis quando o público inclui menores.

O terceiro ponto é interação social. Muitos jogos online têm sistemas de chat, voz e formação de equipes. Esses ambientes colocam crianças em contato direto com adultos desconhecidos. Sem moderação adequada, sem verificação de idade funcional, sem controles parentais efetivos, o risco é óbvio.

E o quarto ponto é o uso compulsivo. Jogos são projetados pra manter o jogador engajado. Missões diárias, eventos por tempo limitado, rankings competitivos. Todos esses mecanismos incentivam sessões longas e frequentes. Pra um adulto, é escolha. Pra uma criança em formação, pode ser um problema real de saúde mental.

O quinto ponto, e talvez o mais mal compreendido, envolve o conteudo dos proprios jogos e a classificacao indicativa. Existe uma confusao comum que precisa ser corrigida: quando se fala em jogo +18, muita gente associa imediatamente a conteudo sexual ou pornografico. Essa percepcao esta errada. A classificacao indicativa de 18 anos, conforme os criterios do Ministerio da Justica e Seguranca Publica e em consonancia com o Estatuto da Crianca e do Adolescente, abrange categorias muito mais amplas. Violencia explicita e realista. Cenas de assassinato e combate armado detalhado. Representacao e uso de drogas ilicitas. Linguagem pesada e ofensiva. Temas psicologicos intensos e perturbadores. Conteudos que podem causar desconforto emocional significativo.

O problema real nao e a existencia desses jogos. Jogos com conteudo adulto existem, sao legitimos e atendem um publico que tem maturidade pra consumi-los. O problema e que menores de idade acessam esses conteudos sem nenhuma barreira real. Um adolescente de 12 anos pode clicar em "tenho mais de 18" e entrar em um jogo com cenas de tortura, uso de drogas e violencia extrema. O sistema nao diferencia. Nao valida. Nao protege.

Do ponto de vista de arquitetura de produto, a grande maioria dos jogos foi projetada assumindo um usuario generico. Nao existe segmentacao estrutural por faixa etaria na experiencia do usuario. O mesmo ambiente, o mesmo conteudo, as mesmas interacoes estao disponiveis pra qualquer pessoa que crie uma conta. Isso nao e uma falha acidental. E uma decisao de design que priorizou simplicidade e escala em detrimento de responsabilidade sobre quem esta consumindo o produto.

Com o ECA Digital, empresas de games vao precisar lidar com controle de acesso por idade que funcione de verdade, adaptacao de conteudo baseada no perfil do usuario, segmentacao da experiencia para diferentes faixas etarias e responsabilidade direta sobre a exposicao de menores a conteudos incompativeis com sua maturidade. Nao se trata de censurar jogos ou limitar a criatividade. Se trata de garantir que o conteudo certo chegue ao publico certo.

Empresas de games que operam no Brasil vão precisar repensar não só suas políticas de privacidade, mas a própria arquitetura dos seus produtos. Verificação de idade robusta, limitação de tempo de jogo pra menores, restrição de compras sem autorização parental, moderação reforçada. É o que a lei exige. E, sendo honesto, é o que deveria ter sido feito antes mesmo de existir lei.`,
          en: `If there is one area that will feel this hard, it is the gaming industry. And it makes sense. Online games are one of the digital environments where children and adolescents spend the most time. And the vast majority of gaming platforms were simply not designed with minor protection in mind.

The problem starts with data collection. Online games collect an absurd amount of information: location, usage habits, play time, in-game social interactions, payment data, behavior patterns. When the player is a minor, all this collection becomes exponentially more sensitive. The LGPD and ECA Digital require that processing this data follows specific rules. Parental consent, clear purpose, data minimization. And the reality is that most games do none of this.

The second point is monetization. Skins, battle passes, loot boxes, virtual currencies. These mechanics exist because they work. And they work especially well with adolescents, who are more susceptible to variable reward mechanisms and social pressure. A teenager who sees their friends with exclusive skins feels real pressure to spend. This is not accidental. It is intentional design. The ECA Digital questions to what extent these practices are acceptable when the audience includes minors.

The third point is social interaction. Many online games have chat, voice, and team formation systems. These environments put children in direct contact with unknown adults. Without adequate moderation, without functional age verification, without effective parental controls, the risk is obvious.

And the fourth point is compulsive use. Games are designed to keep players engaged. Daily missions, time-limited events, competitive rankings. All these mechanisms encourage long and frequent sessions. For an adult, it is a choice. For a child still developing, it can be a real mental health issue.

The fifth point, and perhaps the most misunderstood, involves the content of the games themselves and age ratings. There is a common confusion that needs to be corrected: when people hear about an 18+ game, many immediately associate it with sexual or pornographic content. This perception is wrong. The 18-year age rating, according to the criteria of the Ministry of Justice and Public Security and in line with the Child and Adolescent Statute, covers much broader categories. Explicit and realistic violence. Murder scenes and detailed armed combat. Representation and use of illicit drugs. Heavy and offensive language. Intense and disturbing psychological themes. Content that can cause significant emotional distress.

The real problem is not the existence of these games. Games with adult content exist, are legitimate, and serve an audience mature enough to consume them. The problem is that minors access this content without any real barrier. A 12-year-old can click "I am over 18" and enter a game with torture scenes, drug use, and extreme violence. The system does not differentiate. Does not validate. Does not protect.

From a product architecture perspective, the vast majority of games were designed assuming a generic user. There is no structural segmentation by age group in the user experience. The same environment, the same content, the same interactions are available to anyone who creates an account. This is not an accidental flaw. It is a design decision that prioritized simplicity and scale over responsibility for who is consuming the product.

With the ECA Digital, gaming companies will need to deal with age-based access controls that actually work, content adaptation based on user profiles, experience segmentation for different age groups, and direct responsibility for exposing minors to content incompatible with their maturity. This is not about censoring games or limiting creativity. It is about ensuring the right content reaches the right audience.

Gaming companies operating in Brazil will need to rethink not only their privacy policies but the very architecture of their products. Robust age verification, play time limits for minors, purchase restrictions without parental authorization, enhanced moderation. It is what the law requires. And, being honest, it is what should have been done before any law even existed.`,
        },
      },
      {
        title: { pt: 'Preocupações reais do mercado', en: 'Real market concerns' },
        content: {
          pt: `Agora preciso falar do outro lado. Porque se eu defendo a regulação sem reconhecer os riscos, estou sendo desonesto. E o mercado tem preocupações legítimas que merecem atenção.

A primeira é o medo de censura e controle excessivo. Existe um receio real de que obrigações amplas de moderação de conteúdo possam limitar a liberdade digital. Sistemas automatizados de moderação erram, e erram bastante. Quando erram, tendem a remover conteúdo legítimo junto com o problemático. Pra adolescentes que usam a internet como espaço de expressão e comunidade, isso pode ser danoso. Não estou dizendo que isso vai acontecer. Estou dizendo que é uma preocupação debatida, e que precisa ser levada a sério no processo de regulamentação.

A segunda é a resistência à verificação de idade. Usuários não querem enviar documentos de identidade pra empresas privadas. E com razão. Centralizar documentos de identidade de milhões de pessoas em servidores corporativos é um convite pra vazamentos. A regulação precisa estabelecer objetivos claros, não prescrever métodos que podem criar novos problemas de privacidade e segurança.

A terceira é o risco de má aplicação. Qualquer lei está sujeita a interpretações ruins. Se a aplicação for excessivamente rígida, pode gerar efeitos colaterais que ninguém planejou. Tecnologia evolui em meses. Legislação leva anos. Requisitos técnicos muito específicos podem estar desatualizados antes de serem implementados. Uma regulação inteligente é baseada em princípios, não em especificações técnicas.

A quarta preocupação envolve a indústria de games diretamente. Já existe especulação no mercado sobre como essas regras podem afetar a distribuição de títulos no Brasil. Grand Theft Auto VI, por exemplo, é um dos lançamentos mais aguardados dos últimos anos, e discussões sobre restrições de acesso pra menores em jogos com conteúdo adulto ganharam força. Não estou afirmando que o jogo vai ser banido ou restrito. Estou dizendo que essas são conversas reais que estão acontecendo em fóruns de desenvolvimento, reuniões de publishers e análises de mercado.

A quinta é a possibilidade de empresas repensarem a operação no Brasil. Aumento de custos com compliance, complexidade regulatória e risco jurídico podem fazer com que empresas menores ou de nicho considerem que o mercado brasileiro não vale o investimento. Isso é ruim pra inovação e pra diversidade de produtos disponíveis no país.

A sexta preocupação atinge diretamente criadores de conteúdo. Streamers e youtubers que produzem conteúdo de games +18 estão preocupados com possíveis restrições que afetem monetização e alcance. Se plataformas passarem a restringir conteúdo de forma agressiva pra se adequar à lei, quem produz conteúdo legítimo pra público adulto pode ser atingido colateralmente.

Nenhuma dessas preocupações invalida a necessidade de regulação. Mas ignorá-las seria tão irresponsável quanto ignorar o problema original.`,
          en: `Now I need to talk about the other side. Because if I defend regulation without acknowledging the risks, I am being dishonest. And the market has legitimate concerns that deserve attention.

The first is the fear of censorship and excessive control. There is a real concern that broad content moderation obligations could limit digital freedom. Automated moderation systems make mistakes, and they make a lot of them. When they err, they tend to remove legitimate content along with the problematic. For adolescents who use the internet as a space for expression and community, this can be harmful. I am not saying this will happen. I am saying it is a debated concern that needs to be taken seriously in the regulatory process.

The second is resistance to age verification. Users do not want to submit identity documents to private companies. And rightfully so. Centralizing identity documents of millions of people on corporate servers is an invitation for breaches. Regulation needs to establish clear objectives, not prescribe methods that could create new privacy and security problems.

The third is the risk of poor enforcement. Any law is subject to bad interpretations. If enforcement is excessively rigid, it can generate side effects nobody planned for. Technology evolves in months. Legislation takes years. Overly specific technical requirements can be outdated before they are implemented. Smart regulation is principles-based, not technically prescriptive.

The fourth concern directly involves the gaming industry. There is already market speculation about how these rules could affect title distribution in Brazil. Grand Theft Auto VI, for example, is one of the most anticipated releases in recent years, and discussions about access restrictions for minors on games with adult content have gained momentum. I am not claiming the game will be banned or restricted. I am saying these are real conversations happening in development forums, publisher meetings, and market analyses.

The fifth is the possibility of companies rethinking their operations in Brazil. Increased compliance costs, regulatory complexity, and legal risk could make smaller or niche companies consider that the Brazilian market is not worth the investment. This is bad for innovation and for the diversity of products available in the country.

The sixth concern directly affects content creators. Streamers and YouTubers who produce 18+ gaming content are worried about potential restrictions that could impact monetization and reach. If platforms start restricting content aggressively to comply with the law, those who produce legitimate content for adult audiences could be collaterally affected.

None of these concerns invalidate the need for regulation. But ignoring them would be as irresponsible as ignoring the original problem.`,
        },
      },
      {
        title: { pt: 'A responsabilidade não é só das plataformas', en: 'The responsibility is not only on platforms' },
        content: {
          pt: `Existe um ponto que fica frequentemente de fora dessas discussões e que eu faço questão de trazer: a proteção de menores na internet não é responsabilidade exclusiva das plataformas.

Digo isso sem nenhuma intenção de aliviar a barra das empresas. Plataformas devem criar ambientes mais seguros. Reguladores devem estabelecer limites claros. Isso é inegociável. Mas nenhuma legislação substitui o acompanhamento familiar. Nenhum algoritmo de moderação substitui uma conversa entre pais e filhos sobre o que é seguro na internet. Nenhum sistema de verificação de idade substitui um responsável que sabe o que seu filho está fazendo online.

Vejo um risco concreto em depositar toda a confiança na regulação e nas plataformas. Isso pode gerar uma falsa sensação de segurança. Pais que acreditam que o ambiente digital ficou seguro "porque agora tem lei" podem relaxar exatamente no ponto onde precisam estar mais atentos. Tecnologia não resolve totalmente um problema que é, em grande parte, comportamental e educacional.

O cenário que faz sentido é uma divisão clara de responsabilidades. Plataformas constroem as ferramentas de proteção. Reguladores definem os padrões mínimos. Pais usam essas ferramentas e mantêm o acompanhamento ativo. Cada ator tem seu papel. E quando qualquer um deles falha, o sistema inteiro fica vulnerável.

Isso não é defender que plataformas façam menos. É defender que pais façam mais. E que a sociedade pare de tratar a proteção de menores online como um problema exclusivamente técnico ou exclusivamente regulatório. É um problema humano. Exige solução integrada.`,
          en: `There is a point that frequently gets left out of these discussions and that I insist on raising: protecting minors on the internet is not the exclusive responsibility of platforms.

I say this with no intention of letting companies off the hook. Platforms must create safer environments. Regulators must establish clear limits. That is non-negotiable. But no legislation replaces family monitoring. No moderation algorithm replaces a conversation between parents and children about what is safe on the internet. No age verification system replaces a guardian who knows what their child is doing online.

I see a concrete risk in placing all trust in regulation and platforms. This can generate a false sense of security. Parents who believe the digital environment became safe "because there is a law now" may relax at exactly the point where they need to be most attentive. Technology does not fully solve a problem that is, in large part, behavioral and educational.

The scenario that makes sense is a clear division of responsibilities. Platforms build protection tools. Regulators define minimum standards. Parents use those tools and maintain active monitoring. Each actor has their role. And when any of them fails, the entire system becomes vulnerable.

This is not defending that platforms do less. It is defending that parents do more. And that society stops treating online child protection as an exclusively technical or exclusively regulatory problem. It is a human problem. It requires an integrated solution.`,
        },
      },
      {
        title: { pt: 'Por que, apesar de tudo, considero o movimento positivo', en: 'Why, despite everything, I consider this movement positive' },
        content: {
          pt: `Depois de colocar os riscos na mesa, preciso reforçar por que considero essa iniciativa necessária.

O problema é real. Crianças de 8, 9, 10 anos passam horas por dia em plataformas projetadas pra maximizar engajamento de adultos. Estão expostas a conteúdo inadequado, mecânicas de monetização que exploram vulnerabilidade e sistemas de interação que as colocam em contato com desconhecidos. Fingir que isso não é um problema é irresponsabilidade.

Plataformas não vão se auto-regular de forma efetiva. Algumas empresas adotam boas práticas por convicção. Outras, por pressão de relações públicas. A maioria não faz nada até ser obrigada. Uma legislação como o ECA Digital cria um piso mínimo que se aplica a todos. Nivela o campo e impede que empresas irresponsáveis ganhem mercado às custas da segurança de menores.

O modelo da ANPD é inteligente. Começar por monitoramento em vez de punição cria espaço pra diálogo. Permite que empresas demonstrem boa-fé. Gera dados que vão tornar a fiscalização futura mais precisa. Esse tipo de abordagem é o que separa regulação funcional de regulação burocrática.

E o argumento de que regulação mata inovação não se sustenta nesse contexto. Inovação construída sobre exploração de dados de menores ou sobre mecanismos que prendem adolescentes em loops de engajamento compulsivo não é inovação. É externalidade negativa travestida de produto. O mercado de tecnologia é criativo o bastante pra construir modelos rentáveis e responsáveis ao mesmo tempo.`,
          en: `After putting the risks on the table, I need to reinforce why I consider this initiative necessary.

The problem is real. Children aged 8, 9, 10 spend hours daily on platforms designed to maximize adult engagement. They are exposed to inadequate content, monetization mechanics that exploit vulnerability, and interaction systems that put them in contact with strangers. Pretending this is not a problem is irresponsibility.

Platforms will not effectively self-regulate. Some companies adopt good practices out of conviction. Others, due to PR pressure. Most do nothing until forced. Legislation like the ECA Digital creates a minimum floor that applies to everyone. It levels the field and prevents irresponsible companies from gaining market share at the expense of minors' safety.

ANPD's model is smart. Starting with monitoring instead of punishment creates space for dialogue. It allows companies to demonstrate good faith. It generates data that will make future enforcement more precise. This kind of approach is what separates functional regulation from bureaucratic regulation.

And the argument that regulation kills innovation does not hold in this context. Innovation built on exploiting minors' data or on mechanisms that trap adolescents in compulsive engagement loops is not innovation. It is a negative externality disguised as a product. The tech market is creative enough to build profitable and responsible models at the same time.`,
        },
      },
      {
        title: { pt: 'O que empresas e devs deveriam estar fazendo agora', en: 'What companies and devs should be doing now' },
        content: {
          pt: `Pra quem constrói produtos digitais, o ECA Digital deveria funcionar como um sinal de que certas práticas precisam ser incorporadas independente de obrigação legal. Porque são práticas que tornam os produtos melhores.

Privacidade por design. Projetar sistemas que, desde o início, minimizem a coleta de dados e protejam a privacidade do usuário. Não é só exigência legal. É decisão de arquitetura que reduz riscos, simplifica compliance e aumenta confiança.

Minimização de coleta. Coletar só o que é estritamente necessário. Dado que não é coletado não vaza, não precisa ser protegido e não gera obrigação de retenção. Pra menores, cada dado coletado é um dado que pode ser explorado por décadas se não for gerenciado corretamente.

Segurança específica para menores. Configurações restritivas por padrão, limitação de contato com desconhecidos, moderação reforçada, interfaces que comuniquem de forma clara como os dados estão sendo usados. Não é criar uma versão infantilizada do produto. É reconhecer que usuários menores têm necessidades diferentes de proteção.

Transparência de verdade. Políticas de privacidade em linguagem jurídica que ninguém lê não resolvem nada. Pra menores, a transparência precisa ser acessível: linguagem simples, recursos visuais, explicações em camadas. Transparência real não é um PDF de 40 páginas. É comunicação honesta.

Essas práticas não são custo. São investimento. Sistemas projetados com privacidade por design são mais seguros, mais eficientes e geram mais confiança. Empresas que demonstram respeito genuíno pela privacidade dos seus usuários, especialmente dos mais vulneráveis, constroem reputação que se traduz em vantagem competitiva de longo prazo.`,
          en: `For those building digital products, the ECA Digital should function as a signal that certain practices need to be incorporated regardless of legal obligation. Because they are practices that make products better.

Privacy by design. Designing systems that, from the start, minimize data collection and protect user privacy. It is not just a legal requirement. It is an architectural decision that reduces risks, simplifies compliance, and increases trust.

Data minimization. Collecting only what is strictly necessary. Data that is not collected cannot leak, does not need to be protected, and does not generate retention obligations. For minors, every piece of data collected is data that can be exploited for decades if not properly managed.

Minor-specific security. Restrictive default settings, limited contact with strangers, enhanced moderation, interfaces that clearly communicate how data is being used. It is not about creating a childish version of the product. It is about recognizing that minor users have different protection needs.

Real transparency. Privacy policies in legal language that nobody reads solve nothing. For minors, transparency needs to be accessible: simple language, visual resources, layered explanations. Real transparency is not a 40-page PDF. It is honest communication.

These practices are not costs. They are investments. Systems designed with privacy by design are more secure, more efficient, and generate more trust. Companies that demonstrate genuine respect for their users' privacy, especially the most vulnerable, build reputation that translates into long-term competitive advantage.`,
        },
      },
      {
        title: { pt: 'Conclusão: a iniciativa faz sentido, mas o impacto real depende de execução', en: 'Conclusion: the initiative makes sense, but real impact depends on execution' },
        content: {
          pt: `A ação da ANPD em relação ao ECA Digital mostra que o ecossistema regulatório brasileiro está amadurecendo. Temos legislação de proteção de dados, autoridade fiscalizadora e marcos legais específicos pra proteção de menores no digital. Isso é relevante.

Mas ferramentas legais são o começo, não o fim. O que define se uma regulação funciona é a capacidade de aplicá-la com inteligência, proporção e consistência. A mesma lei que pode proteger milhões de crianças também pode sufocar inovação, gerar censura e criar burocracia inútil se for mal executada.

Pra quem constrói tecnologia, o cenário exige postura proativa. Esperar pra se adequar depois de receber notificação é estratégia de quem vai gastar mais dinheiro e mais reputação resolvendo problemas que poderiam ter sido evitados. Incorporar proteção de dados e proteção de menores como princípios de design é a abordagem que reduz custos, aumenta confiança e posiciona a empresa como agente responsável.

Os produtos que construímos moldam comportamentos e definem experiências de milhões de pessoas. Muitas delas crianças e adolescentes que ainda estão formando sua capacidade de julgamento. A responsabilidade de quem constrói esses produtos é proporcional ao impacto que eles geram.

O ECA Digital e a atuação da ANPD são lembretes institucionais dessa responsabilidade. Mas o impacto real não depende da lei. Depende de como o mercado, os reguladores e as famílias vão trabalhar juntos. Se cada lado fizer sua parte, o resultado pode ser genuinamente positivo. Se qualquer lado falhar, ou exagerar, o problema vai continuar existindo, só que com mais burocracia em volta.

A minha expectativa? Cautelosa. Mas, no balanço geral, acho que estamos caminhando na direção certa.`,
          en: `ANPD's action regarding the ECA Digital shows that Brazil's regulatory ecosystem is maturing. We have data protection legislation, an enforcement authority, and specific legal frameworks for protecting minors in the digital space. That is relevant.

But legal tools are the beginning, not the end. What defines whether regulation works is the ability to apply it with intelligence, proportion, and consistency. The same law that can protect millions of children can also stifle innovation, generate censorship, and create useless bureaucracy if poorly executed.

For those building technology, this scenario demands a proactive stance. Waiting to comply after receiving a notification is a strategy for those who will spend more money and more reputation solving problems that could have been avoided. Incorporating data protection and minor protection as design principles is the approach that reduces costs, increases trust, and positions the company as a responsible agent.

The products we build shape behaviors and define experiences for millions of people. Many of them children and adolescents still forming their capacity for judgment. The responsibility of those building these products is proportional to the impact they generate.

The ECA Digital and ANPD's actions are institutional reminders of this responsibility. But real impact does not depend on the law. It depends on how the market, regulators, and families will work together. If each side does its part, the result can be genuinely positive. If any side fails, or overreaches, the problem will continue to exist, just with more bureaucracy around it.

My expectation? Cautious. But, on balance, I think we are heading in the right direction.`,
        },
      },
    ],
  },
];
