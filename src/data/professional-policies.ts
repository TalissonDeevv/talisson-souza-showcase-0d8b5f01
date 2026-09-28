import { contactEmails } from "./contact-channels";

type TextPair = {
  pt: string;
  en: string;
};

type PolicyBlock = TextPair & {
  heading?: TextPair;
};

type ProfessionalPolicy = {
  id: string;
  title: TextPair;
  paragraphs: PolicyBlock[];
};

const introduction = (pt: string, en: string): PolicyBlock => ({ pt, en });

const chapter = (
  number: number,
  titlePt: string,
  titleEn: string,
  pt: string,
  en: string
): PolicyBlock => ({
  heading: {
    pt: `${number}. ${titlePt}`,
    en: `${number}. ${titleEn}`,
  },
  pt,
  en,
});

export const whatIDoPolicy: ProfessionalPolicy = {
  id: "o-que-faco",
  title: { pt: "O Que Eu Faço", en: "What I Do" },
  paragraphs: [
    introduction(
      `Minha atuação profissional transforma necessidades de negócio, operação e comunicação em soluções digitais planejadas, implementadas e documentadas. O trabalho pode envolver desenvolvimento de software, sistemas web, APIs, dashboards, automações, integrações, bots, arquitetura, refatoração, consultoria, auditoria técnica, segurança, infraestrutura e experiências institucionais. Esta política explica o que cada frente representa e quais critérios orientam minha decisão técnica. Ela não substitui a proposta ou o contrato de um projeto específico: somente os serviços, entregáveis e responsabilidades expressamente aprovados nesses documentos integram a contratação.`,
      `My professional work turns business, operational, and communication needs into planned, implemented, and documented digital solutions. The work may involve software development, web systems, APIs, dashboards, automation, integrations, bots, architecture, refactoring, consulting, technical audits, security, infrastructure, and institutional experiences. This policy explains what each area means and the criteria that guide my technical decisions. It does not replace the proposal or contract for a specific project: only the services, deliverables, and responsibilities expressly approved in those documents are part of the engagement.`
    ),
    chapter(
      1,
      "Finalidade e natureza da atuação",
      "Purpose and nature of the work",
      `Meu trabalho não se limita a escrever código. Antes da implementação, procuro compreender o problema, o público, o fluxo operacional, as restrições, os riscos e o resultado esperado. A entrega pode abranger diagnóstico, planejamento, desenho de arquitetura, desenvolvimento, testes, documentação e implantação, conforme o escopo. O objetivo é produzir uma solução tecnicamente coerente, operável e compatível com a realidade do cliente. Resultado comercial, aumento de faturamento, aquisição de usuários ou qualquer efeito de negócio dependente de fatores externos não são presumidos nem garantidos apenas pela existência do software.`,
      `My work is not limited to writing code. Before implementation, I seek to understand the problem, audience, operational flow, constraints, risks, and expected outcome. Delivery may include diagnosis, planning, architecture design, development, testing, documentation, and deployment, depending on scope. The objective is to produce a technically coherent, operable solution compatible with the client's reality. Commercial results, increased revenue, user acquisition, or any business outcome dependent on external factors are neither presumed nor guaranteed merely because the software exists.`
    ),
    chapter(
      2,
      "Serviços disponíveis e escopo contratado",
      "Available services and contracted scope",
      `A relação de serviços desta página demonstra capacidade de atuação, e não um pacote automático. Um projeto de dashboard não inclui, por consequência, aplicativo móvel, migração de infraestrutura, produção de conteúdo, identidade visual, monitoramento contínuo ou suporte ilimitado. Da mesma forma, uma integração pode exigir contratação separada de provedor, credenciais, homologação e manutenção. A proposta e o contrato devem indicar funcionalidades, entregáveis, exclusões, premissas, dependências, ambientes, testes, documentação, cronograma e critérios de aceite. O que não estiver incluído de forma expressa será avaliado como possível ajuste ou novo escopo.`,
      `The list of services on this page demonstrates areas in which I can work; it is not an automatic package. A dashboard project does not inherently include a mobile app, infrastructure migration, content production, visual identity, continuous monitoring, or unlimited support. Likewise, an integration may require a separate provider agreement, credentials, certification, and maintenance. The proposal and contract should identify features, deliverables, exclusions, assumptions, dependencies, environments, tests, documentation, timeline, and acceptance criteria. Anything not expressly included will be assessed as a possible adjustment or new scope.`
    ),
    chapter(
      3,
      "Desenvolvimento sob medida e solução personalizada",
      "Custom development and personalized solutions",
      `Desenvolvimento sob medida significa construir ou adaptar uma solução a requisitos aprovados, ao contexto operacional e às restrições do projeto. Solução personalizada não significa que todo componente será criado do zero: bibliotecas, frameworks, serviços gerenciados e componentes de código aberto podem ser utilizados quando forem adequados, seguros e compatíveis com suas licenças. A personalização está na combinação de arquitetura, regras de negócio, integrações, interface e operação. Sempre que uma solução existente atender melhor à necessidade, posso recomendar configuração, extensão ou integração em vez de uma reconstrução desnecessária.`,
      `Custom development means building or adapting a solution to approved requirements, the operational context, and project constraints. A personalized solution does not mean every component will be created from scratch: libraries, frameworks, managed services, and open-source components may be used when appropriate, secure, and license-compatible. Personalization lies in the combination of architecture, business rules, integrations, interface, and operation. Whenever an existing solution better meets the need, I may recommend configuration, extension, or integration rather than unnecessary reconstruction.`
    ),
    chapter(
      4,
      "Diagnóstico e análise de viabilidade",
      "Diagnosis and feasibility analysis",
      `Antes de assumir uma implementação, avalio objetivo, usuários, volume esperado, dados envolvidos, integrações, infraestrutura, prazo, orçamento, riscos regulatórios e capacidade de manutenção. A viabilidade pode ser técnica, operacional, financeira e temporal. Um projeto tecnicamente possível pode não ser razoável dentro do prazo, custo ou estrutura disponíveis. O diagnóstico pode resultar em aprovação, redimensionamento, prova de conceito, entrega por fases, recomendação de terceiro ou recusa fundamentada. Estimativas iniciais não substituem o levantamento completo e podem ser revisadas quando surgirem informações relevantes que não estavam disponíveis.`,
      `Before committing to implementation, I assess the objective, users, expected volume, data involved, integrations, infrastructure, schedule, budget, regulatory risks, and maintenance capacity. Feasibility may be technical, operational, financial, and time-related. A technically possible project may not be reasonable within the available schedule, cost, or structure. Diagnosis may lead to approval, resizing, a proof of concept, phased delivery, a third-party recommendation, or a reasoned refusal. Initial estimates do not replace full discovery and may be revised when relevant information that was not previously available emerges.`
    ),
    chapter(
      5,
      "Sistemas web e sistemas administrativos",
      "Web and administrative systems",
      `Desenvolvo aplicações web, portais, áreas restritas, plataformas operacionais, sistemas internos e painéis administrativos. O trabalho pode envolver autenticação, perfis de acesso, fluxos de aprovação, cadastros, relatórios, pesquisa, notificações, importação e exportação de dados. A profundidade de cada módulo depende dos requisitos aprovados. Recursos críticos, como segregação de acesso, trilhas de auditoria, disponibilidade elevada ou processamento financeiro, exigem análise específica e não devem ser presumidos em um sistema administrativo básico.`,
      `I develop web applications, portals, restricted areas, operational platforms, internal systems, and administrative panels. The work may involve authentication, access profiles, approval workflows, records, reports, search, notifications, and data import and export. The depth of each module depends on approved requirements. Critical capabilities such as access segregation, audit trails, high availability, or financial processing require specific analysis and should not be assumed in a basic administrative system.`
    ),
    chapter(
      6,
      "APIs, backends e tratamento de dados",
      "APIs, backends, and data processing",
      `Posso projetar APIs, serviços de backend, bancos de dados e rotinas de processamento para conectar interfaces, parceiros e sistemas internos. A contratação pode abranger modelagem de dados, autenticação, autorização, validação, versionamento, documentação, limites de uso, logs e testes. Requisitos de privacidade, retenção, residência de dados, desempenho ou compatibilidade precisam ser informados no levantamento. Uma API não é considerada completa apenas porque responde: ela deve possuir contrato de uso, tratamento de erros e controles proporcionais ao risco do projeto.`,
      `I can design APIs, backend services, databases, and processing routines to connect interfaces, partners, and internal systems. The engagement may cover data modeling, authentication, authorization, validation, versioning, documentation, usage limits, logs, and tests. Privacy, retention, data residency, performance, or compatibility requirements must be disclosed during discovery. An API is not considered complete merely because it responds: it should have a usage contract, error handling, and controls proportionate to project risk.`
    ),
    chapter(
      7,
      "Dashboards, relatórios e visualização",
      "Dashboards, reports, and visualization",
      `Dashboards e relatórios são desenvolvidos a partir de fontes, métricas e regras de cálculo definidas. Posso organizar indicadores, filtros, séries históricas, exportações e diferentes níveis de acesso. A qualidade da visualização depende da qualidade, disponibilidade e significado dos dados fornecidos. Não presumo que bases externas estejam corretas nem certifico informações contábeis, jurídicas ou estatísticas sem contratação e competência específicas. Quando houver divergência entre fontes, ela deve ser documentada e resolvida com o responsável de negócio antes da homologação.`,
      `Dashboards and reports are developed from defined sources, metrics, and calculation rules. I can organize indicators, filters, historical series, exports, and different access levels. Visualization quality depends on the quality, availability, and meaning of the data provided. I do not assume external datasets are correct, nor do I certify accounting, legal, or statistical information without a specific engagement and appropriate competence. When sources conflict, the discrepancy must be documented and resolved with the business owner before acceptance.`
    ),
    chapter(
      8,
      "Automações e integrações",
      "Automation and integrations",
      `Automatizo tarefas repetitivas e conecto sistemas quando isso reduz esforço manual, erros e tempo operacional. A solução pode envolver webhooks, filas, agendas, notificações, sincronização, importação, exportação e APIs de terceiros. Cada automação precisa de regras para exceções, reprocessamento, logs e falhas parciais. O serviço externo continua sujeito aos próprios limites, preços e disponibilidade. Mudanças feitas pelo provedor podem exigir adaptação futura, que somente estará incluída quando houver manutenção contratada ou previsão expressa no escopo.`,
      `I automate repetitive tasks and connect systems when doing so reduces manual effort, errors, and operational time. A solution may involve webhooks, queues, schedules, notifications, synchronization, import, export, and third-party APIs. Each automation needs rules for exceptions, reprocessing, logs, and partial failures. The external service remains subject to its own limits, pricing, and availability. Provider changes may require future adaptation, which is included only when maintenance is contracted or expressly provided for in scope.`
    ),
    chapter(
      9,
      "Bots e ferramentas para comunidades",
      "Bots and community tools",
      `Desenvolvo bots e ferramentas para Discord e outros contextos de comunidade, incluindo moderação, registros, tickets, onboarding, formulários, permissões, notificações e integrações. A automação apoia a operação, mas não substitui políticas, treinamento, supervisão humana ou decisões responsáveis. Recursos devem respeitar os termos da plataforma e as permissões concedidas. Tokens, credenciais, dados de membros e ações de moderação exigem controles próprios. A continuidade do bot também depende de hospedagem, API da plataforma, limites de uso e manutenção compatível.`,
      `I develop bots and tools for Discord and other community contexts, including moderation, records, tickets, onboarding, forms, permissions, notifications, and integrations. Automation supports operations but does not replace policies, training, human oversight, or responsible decisions. Features must comply with platform terms and granted permissions. Tokens, credentials, member data, and moderation actions require dedicated controls. Bot continuity also depends on hosting, the platform API, usage limits, and suitable maintenance.`
    ),
    chapter(
      10,
      "Sites institucionais e landing pages",
      "Institutional websites and landing pages",
      `Desenvolvo sites e páginas de campanha com atenção a conteúdo, hierarquia, responsividade, acessibilidade, desempenho e mecanismos de conversão definidos no projeto. SEO técnico pode incluir metadados, semântica, sitemap, dados estruturados e práticas de indexação, mas posicionamento em buscadores depende também de concorrência, conteúdo, autoridade, decisões das plataformas e continuidade editorial. Produção de texto, fotografia, ilustração, mídia paga, identidade visual ou pesquisa de marca somente integra a entrega quando estiver prevista.`,
      `I develop institutional websites and campaign pages with attention to content, hierarchy, responsiveness, accessibility, performance, and the conversion mechanisms defined in the project. Technical SEO may include metadata, semantics, sitemaps, structured data, and indexing practices, but search ranking also depends on competition, content, authority, platform decisions, and editorial continuity. Copywriting, photography, illustration, paid media, visual identity, or brand research is included only when expressly provided for.`
    ),
    chapter(
      11,
      "Arquitetura de software",
      "Software architecture",
      `Arquitetura é a organização das decisões que permitem ao sistema funcionar, evoluir e ser operado. Posso atuar na separação de responsabilidades, contratos entre módulos, modelo de dados, integrações, implantação, observabilidade e estratégia de evolução. Não existe arquitetura universalmente perfeita; existe arquitetura proporcional ao risco, escala, equipe, orçamento e horizonte do produto. Decisões são registradas quando relevantes, inclusive seus motivos e consequências, para que a equipe possa revisar o caminho no futuro sem depender de memória informal.`,
      `Architecture is the organization of decisions that allow a system to operate, evolve, and be maintained. I may work on separation of concerns, contracts between modules, data models, integrations, deployment, observability, and evolution strategy. There is no universally perfect architecture; there is architecture proportionate to the product's risk, scale, team, budget, and horizon. Relevant decisions are recorded, including their reasons and consequences, so the team can review them later without relying on informal memory.`
    ),
    chapter(
      12,
      "Refatoração, modernização e migração",
      "Refactoring, modernization, and migration",
      `Em sistemas existentes, posso reorganizar código, reduzir dívida técnica, atualizar dependências, separar módulos, revisar modelos de dados ou planejar migrações. Refatoração busca preservar o comportamento aprovado enquanto melhora a estrutura; mudança de comportamento é tratada como requisito funcional. Sistemas legados podem conter dependências ocultas, documentação incompleta e falhas preexistentes. Por isso, a estimativa pode exigir auditoria, testes de caracterização, inventário e execução em fases. Migrações devem prever validação, rollback, compatibilidade e janela operacional conforme o risco.`,
      `For existing systems, I may reorganize code, reduce technical debt, update dependencies, separate modules, review data models, or plan migrations. Refactoring seeks to preserve approved behavior while improving structure; behavior changes are treated as functional requirements. Legacy systems may contain hidden dependencies, incomplete documentation, and pre-existing defects. Estimates may therefore require an audit, characterization tests, inventory, and phased execution. Migrations should provide for validation, rollback, compatibility, and an operational window proportionate to risk.`
    ),
    chapter(
      13,
      "Consultoria, auditoria e parecer técnico",
      "Consulting, audits, and technical opinions",
      `A consultoria pode apoiar decisões de produto, arquitetura, segurança, infraestrutura, contratação, modernização e planejamento. Auditorias são limitadas ao ambiente, período, evidências e profundidade contratados; uma amostra ou revisão de código não equivale a certificação integral do sistema. Os achados podem ser classificados por impacto, probabilidade e prioridade, acompanhados de recomendações. A decisão de aceitar, mitigar, transferir ou corrigir um risco é registrada com o cliente. Pareceres técnicos não substituem assessoria jurídica, contábil ou regulatória especializada.`,
      `Consulting may support decisions involving product, architecture, security, infrastructure, hiring, modernization, and planning. Audits are limited to the contracted environment, period, evidence, and depth; a sample or code review is not equivalent to full system certification. Findings may be classified by impact, likelihood, and priority, with recommendations. The decision to accept, mitigate, transfer, or remediate a risk is recorded with the client. Technical opinions do not replace specialized legal, accounting, or regulatory advice.`
    ),
    chapter(
      14,
      "Segurança como requisito proporcional",
      "Security as a proportionate requirement",
      `Considero autenticação, autorização, validação, menor privilégio, proteção de segredos, atualização de dependências, registros e tratamento de falhas conforme o contexto. Projetos que processam dados sensíveis, pagamentos, credenciais ou operações críticas exigem controles e orçamento compatíveis. Nenhuma solução pode ser declarada inviolável ou livre de vulnerabilidades. Segurança é um processo contínuo que depende também de configuração, infraestrutura, usuários, fornecedores, monitoramento e manutenção após a entrega. Testes especializados, pentest e resposta contínua a incidentes somente integram o projeto quando contratados e autorizados.`,
      `I consider authentication, authorization, validation, least privilege, secret protection, dependency updates, logging, and failure handling according to context. Projects that process sensitive data, payments, credentials, or critical operations require compatible controls and budget. No solution can be declared invulnerable or free of vulnerabilities. Security is an ongoing process that also depends on configuration, infrastructure, users, vendors, monitoring, and post-delivery maintenance. Specialized testing, penetration testing, and continuous incident response are included only when contracted and authorized.`
    ),
    chapter(
      15,
      "Infraestrutura, implantação e observabilidade",
      "Infrastructure, deployment, and observability",
      `Posso configurar ambientes, pipelines, containers, hospedagem, domínio, DNS, CDN, bancos de dados, logs, métricas e alertas quando isso fizer parte do escopo. A titularidade das contas e a responsabilidade financeira por provedores devem ser definidas antes da implantação. Sempre que possível, recomendo que contas essenciais permaneçam sob controle do cliente e que acessos sejam concedidos pelo menor privilégio necessário. Disponibilidade elevada, recuperação de desastre, backup gerenciado, plantão e SLA exigem desenho, orçamento e responsabilidades específicos.`,
      `I may configure environments, pipelines, containers, hosting, domains, DNS, CDNs, databases, logs, metrics, and alerts when included in scope. Account ownership and financial responsibility for providers must be defined before deployment. Whenever possible, I recommend that essential accounts remain under client control and that access be granted with the minimum necessary privilege. High availability, disaster recovery, managed backups, on-call coverage, and SLAs require specific design, budget, and responsibilities.`
    ),
    chapter(
      16,
      "Escolha de tecnologias",
      "Technology selection",
      `A tecnologia é escolhida pela adequação ao problema, maturidade, segurança, comunidade, disponibilidade de profissionais, custo de operação, compatibilidade, desempenho e capacidade de manutenção. Preferência pessoal ou popularidade momentânea não bastam. Quando o cliente impõe uma tecnologia, avalio os impactos e registro riscos relevantes. Dependências com licenças, preços variáveis, lock-in ou ciclo de vida curto devem ser conhecidas. A escolha aprovada reflete as informações disponíveis no momento e pode precisar de revisão quando requisitos ou fornecedores mudarem.`,
      `Technology is selected based on fitness for purpose, maturity, security, ecosystem, talent availability, operating cost, compatibility, performance, and maintainability. Personal preference or temporary popularity is not enough. When the client mandates a technology, I assess the consequences and record relevant risks. Dependencies with licensing, variable pricing, lock-in, or short life cycles should be understood. The approved choice reflects the information available at the time and may require review when requirements or providers change.`
    ),
    chapter(
      17,
      "Performance, capacidade e disponibilidade",
      "Performance, capacity, and availability",
      `Metas de desempenho precisam de critérios mensuráveis: volume, concorrência, tempo de resposta, tamanho de dados, dispositivo, região e condições de teste. Otimização sem referência pode aumentar custo e complexidade sem benefício real. Posso propor medições, testes de carga e orçamento de capacidade quando necessários. Resultados de laboratório não garantem comportamento idêntico em produção, especialmente quando a solução depende de rede, dispositivo, serviço externo ou pico não informado. Metas e limites somente são vinculantes quando documentados como requisitos e acompanhados das dependências correspondentes.`,
      `Performance goals need measurable criteria: volume, concurrency, response time, data size, device, region, and test conditions. Optimization without a reference point may increase cost and complexity without real benefit. I can propose measurement, load testing, and capacity budgeting where needed. Laboratory results do not guarantee identical production behavior, especially when the solution depends on networks, devices, external services, or undisclosed peaks. Targets and limits are binding only when documented as requirements together with their dependencies.`
    ),
    chapter(
      18,
      "Manutenibilidade e documentação",
      "Maintainability and documentation",
      `Busco produzir código legível, estrutura coerente, decisões rastreáveis e documentação proporcional ao projeto. A documentação pode incluir visão de arquitetura, instalação, configuração, variáveis de ambiente, implantação, operação, APIs e procedimentos críticos. O conteúdo exato é definido no escopo; documentação completa não significa registrar cada linha óbvia de código. Manutenibilidade também depende de atualização periódica. Um documento entregue pode se tornar desatualizado quando o cliente, terceiros ou fornecedores alteram o sistema sem atualizar os registros correspondentes.`,
      `I seek to produce readable code, coherent structure, traceable decisions, and documentation proportionate to the project. Documentation may include architecture overview, installation, configuration, environment variables, deployment, operations, APIs, and critical procedures. Exact content is defined in scope; complete documentation does not mean documenting every obvious line of code. Maintainability also depends on periodic updates. A delivered document may become outdated when the client, third parties, or vendors change the system without updating the corresponding records.`
    ),
    chapter(
      19,
      "Escalabilidade e custo operacional",
      "Scalability and operating cost",
      `Escalabilidade não significa preparar todo projeto para milhões de usuários. Significa permitir crescimento coerente com projeções, gargalos conhecidos e orçamento. Uma arquitetura excessiva pode ser tão prejudicial quanto uma arquitetura insuficiente. Considero custos de hospedagem, bancos, filas, armazenamento, tráfego, observabilidade, licenças e suporte. Estimativas de custo dependem do uso e das tabelas dos fornecedores, podendo mudar. Quando houver cenários de expansão, proponho marcos técnicos para revisar capacidade antes que a operação seja afetada.`,
      `Scalability does not mean preparing every project for millions of users. It means enabling growth consistent with projections, known bottlenecks, and budget. Excessive architecture can be as harmful as insufficient architecture. I consider hosting, database, queue, storage, traffic, observability, licensing, and support costs. Cost estimates depend on usage and vendor pricing and may change. Where growth scenarios exist, I propose technical milestones to review capacity before operations are affected.`
    ),
    chapter(
      20,
      "Qualidade, testes e homologação",
      "Quality, testing, and acceptance",
      `A estratégia de qualidade é definida pelo risco. Pode combinar revisão, análise estática, testes unitários, integração, ponta a ponta, acessibilidade, segurança e validação manual. Nem todo projeto exige a mesma cobertura, mas funcionalidades críticas precisam de evidência compatível. A homologação do cliente confirma aderência às regras de negócio e aos critérios aprovados; ela não transfere para o cliente a responsabilidade de corrigir defeitos técnicos. Cenários, ambientes, massas de teste e responsabilidades devem ser combinados para que a validação seja reproduzível.`,
      `The quality strategy is based on risk. It may combine review, static analysis, unit, integration, end-to-end, accessibility, security, and manual testing. Not every project requires the same coverage, but critical features need proportionate evidence. Client acceptance confirms adherence to business rules and approved criteria; it does not transfer responsibility for correcting technical defects to the client. Scenarios, environments, test data, and responsibilities should be agreed so validation can be reproduced.`
    ),
    chapter(
      21,
      "Dependências e participação do cliente",
      "Dependencies and client participation",
      `O cliente participa fornecendo informações corretas, materiais, acessos, responsáveis de decisão, validações e aprovações no prazo combinado. Também deve informar restrições legais, contratuais, de marca, privacidade ou segurança conhecidas. Posso orientar a organização desses insumos, mas não consigo substituir o conhecimento do negócio nem autorizar uso de dados, marcas ou sistemas pertencentes a terceiros. Atrasos, informações incompletas ou decisões contraditórias podem exigir replanejamento. A conclusão de cada etapa depende tanto da execução técnica quanto da colaboração prevista.`,
      `The client participates by providing accurate information, materials, access, decision-makers, validations, and approvals within the agreed time. The client must also disclose known legal, contractual, brand, privacy, or security restrictions. I can help organize these inputs, but I cannot replace business knowledge or authorize the use of third-party data, brands, or systems. Delays, incomplete information, or conflicting decisions may require replanning. Completion of each stage depends on both technical execution and the expected collaboration.`
    ),
    chapter(
      22,
      "Proposta, contrato e condições específicas",
      "Proposal, contract, and specific terms",
      `Esta política apresenta princípios gerais. Cada contratação deve definir o que será realizado, por quem, em qual prazo, por qual valor e sob quais critérios. Condições específicas expressamente acordadas na proposta ou no contrato podem complementar ou modificar estas regras gerais. Em caso de divergência, prevalece o documento específico para aquela contratação, respeitada a legislação aplicável e os direitos que não possam ser afastados por acordo. Nenhuma conversa informal amplia automaticamente o escopo. Alterações relevantes precisam ser registradas e aprovadas pelos canais oficiais.`,
      `This policy states general principles. Each engagement must define what will be done, by whom, within what period, for what price, and under which criteria. Specific terms expressly agreed in the proposal or contract may supplement or modify these general rules. In the event of conflict, the specific document for that engagement prevails, subject to applicable law and rights that cannot be waived by agreement. Informal conversations do not automatically expand scope. Relevant changes must be recorded and approved through official channels.`
    ),
    chapter(
      23,
      "Vigência, revisão e orientação jurídica",
      "Effective date, review, and legal guidance",
      `Última atualização: 21 de setembro de 2026. Esta política é pública, orientativa e deve ser lida com “Como Eu Trabalho”, “O Que Eu Não Faço”, a proposta e o contrato aplicável. Ela não constitui parecer jurídico, certificação ou promessa de conformidade automática. Projetos regulados, internacionais, que tratem dados sensíveis ou que envolvam risco elevado podem exigir advogado, DPA, NDA, avaliação de impacto ou especialistas adicionais. A versão publicada pode ser atualizada para refletir mudanças operacionais, técnicas ou legais, sem alterar retroativamente contratos já celebrados salvo acordo ou exigência aplicável.`,
      `Last updated: September 21, 2026. This policy is public and informative and should be read together with “How I Work,” “What I Don't Do,” the proposal, and the applicable contract. It is not legal advice, certification, or a promise of automatic compliance. Regulated, international, sensitive-data, or high-risk projects may require legal counsel, a DPA, an NDA, an impact assessment, or additional specialists. The published version may be updated to reflect operational, technical, or legal changes without retroactively changing signed contracts except by agreement or applicable requirement.`
    ),
  ],
};

export const whatIDontDoPolicy: ProfessionalPolicy = {
  id: "o-que-nao-faco",
  title: { pt: "O Que Eu Não Faço", en: "What I Don't Do" },
  paragraphs: [
    introduction(
      `Esta política estabelece critérios de seleção, segurança e execução de projetos. Ela não foi escrita para hostilizar clientes nem para proibir genericamente áreas técnicas legítimas. Seu objetivo é evitar trabalhos ilegais, prejudiciais, indefinidos ou incompatíveis com uma relação profissional responsável. A avaliação considera finalidade, autorização, riscos, contexto, documentação e legislação aplicável. Mesmo quando uma categoria de serviço é aceitável, a contratação somente ocorre se houver condições técnicas, comerciais, jurídicas e operacionais adequadas.`,
      `This policy establishes project selection, safety, and delivery criteria. It is not intended to antagonize clients or broadly prohibit legitimate technical fields. Its purpose is to prevent illegal, harmful, undefined, or professionally incompatible work. Assessment considers purpose, authorization, risk, context, documentation, and applicable law. Even when a category of service is acceptable, an engagement proceeds only where technical, commercial, legal, and operational conditions are appropriate.`
    ),
    chapter(
      1,
      "Finalidade dos limites",
      "Purpose of these limits",
      `Limites claros protegem o cliente, o projeto, usuários, terceiros e a qualidade da entrega. Uma recusa pode decorrer de risco jurídico, falta de autorização, prazo inviável, orçamento incompatível, conflito ético, ausência de informações ou especialidade que exija outro profissional. A recusa não representa julgamento pessoal. Quando for possível, explico o motivo e indico o que precisaria mudar para uma nova avaliação. Não sou obrigado a aceitar todo pedido, e o cliente também permanece livre para contratar outro fornecedor antes da formalização.`,
      `Clear boundaries protect the client, the project, users, third parties, and delivery quality. A refusal may result from legal risk, lack of authorization, an unworkable schedule, incompatible budget, ethical conflict, missing information, or a specialty requiring another professional. Refusal is not a personal judgment. Where possible, I explain the reason and what would need to change for reassessment. I am not required to accept every request, and the client remains free to choose another provider before formal engagement.`
    ),
    chapter(
      2,
      "Atividades ilegais, fraudulentas ou prejudiciais",
      "Illegal, fraudulent, or harmful activities",
      `Não desenvolvo, adapto, hospedo, integro ou oriento sistemas destinados a fraude, golpe, phishing, malware, ransomware, roubo de credenciais, invasão, acesso não autorizado, exploração sem autorização, DDoS, botnet, manipulação fraudulenta, evasão de controles, abuso de sistemas, violação de privacidade, uso indevido de dados ou dano a pessoas, serviços ou infraestrutura. Também não participo de operações cuja finalidade principal dependa de enganar usuários, ocultar responsabilidade, falsificar identidade, contornar obrigações legais ou obter vantagem indevida. Se a finalidade real divergir da apresentada, o trabalho poderá ser recusado ou suspenso conforme contrato e legislação aplicável.`,
      `I do not develop, adapt, host, integrate, or advise on systems intended for fraud, scams, phishing, malware, ransomware, credential theft, intrusion, unauthorized access, unauthorized exploitation, DDoS, botnets, fraudulent manipulation, control evasion, system abuse, privacy violations, data misuse, or harm to people, services, or infrastructure. I also do not participate in operations whose primary purpose depends on deceiving users, hiding accountability, impersonating others, circumventing legal duties, or obtaining improper advantage. If the real purpose differs from what was represented, work may be refused or suspended in accordance with the contract and applicable law.`
    ),
    chapter(
      3,
      "Conteúdo sexual adulto e serviços +18",
      "Adult sexual content and 18+ services",
      `Não desenvolvo, adapto, mantenho, hospedo, integro ou presto consultoria para sites, aplicativos, plataformas, comunidades, sistemas de assinatura, lojas, áreas de membros, serviços de transmissão, automações ou infraestrutura cuja finalidade principal seja produzir, publicar, vender, distribuir, promover ou intermediar conteúdo sexual explícito, pornografia, serviços eróticos ou experiências classificadas como adultas (+18). A recusa também se aplica a recursos acessórios criados especificamente para viabilizar essa operação, como cobrança, catálogo, moderação, entrega de mídia ou gestão de criadores. Esta é uma regra de seleção profissional e comercial, inclusive quando o conteúdo envolver apenas adultos e for apresentado como consensual ou legal. Ela não equipara educação sexual, saúde, prevenção, pesquisa ou proteção de vítimas a entretenimento sexual; demandas legítimas dessas áreas ainda dependem de escopo, finalidade, segurança, privacidade e conformidade adequados.`,
      `I do not develop, adapt, maintain, host, integrate, or consult on websites, applications, platforms, communities, subscription systems, stores, member areas, streaming services, automation, or infrastructure whose primary purpose is to produce, publish, sell, distribute, promote, or broker explicit sexual content, pornography, erotic services, or adult-rated (18+) experiences. This refusal also covers supporting features built specifically to enable such an operation, including payments, catalogs, moderation, media delivery, or creator management. It is a professional and commercial selection rule even where the content is presented as involving consenting adults and as lawful. It does not equate sexual education, healthcare, prevention, research, or victim protection with sexual entertainment; legitimate requests in those fields still require appropriate scope, purpose, security, privacy, and compliance.`
    ),
    chapter(
      4,
      "Exploração sexual de crianças e adolescentes e denúncia formal",
      "Child sexual exploitation and formal reporting",
      `Existe tolerância zero para qualquer solicitação, material ou operação relacionada à sexualização, exploração, abuso ou aliciamento de crianças ou adolescentes. Não desenvolvo nem mantenho recursos destinados a criar, armazenar, localizar, classificar, transmitir, comercializar, ocultar ou ampliar material de abuso sexual infantil, conteúdo sexual envolvendo menores, grooming, sextorsão, tráfico, facilitação de encontros ou qualquer forma de exploração. Diante de indícios concretos recebidos durante uma conversa ou projeto, recuso ou interrompo imediatamente a atividade afetada, limito o acesso e evito copiar, baixar, reenviar ou divulgar o material. Preservo somente as informações mínimas que possam ser tratadas com segurança e legitimidade e formalizo denúncia pelos canais oficiais cabíveis, que podem incluir a plataforma, provedor, hospedagem, meio de pagamento e autoridades competentes, conforme o caso e a legislação aplicável. A proteção da vítima e a integridade da apuração prevalecem sobre sigilo comercial ou continuidade contratual; não confronto o suspeito nem conduzo investigação particular.`,
      `There is zero tolerance for any request, material, or operation involving the sexualization, exploitation, abuse, or grooming of a child or adolescent. I do not develop or maintain features intended to create, store, locate, classify, transmit, commercialize, conceal, or amplify child sexual abuse material, sexual content involving minors, grooming, sextortion, trafficking, meeting facilitation, or any form of exploitation. Where concrete indicators arise during a conversation or project, I refuse or immediately stop the affected activity, restrict access, and avoid copying, downloading, forwarding, or disclosing the material. I preserve only the minimum information that can be handled safely and lawfully and submit a formal report through the appropriate official channels, which may include the platform, provider, host, payment service, and competent authorities depending on the circumstances and applicable law. Victim protection and the integrity of an official investigation take precedence over commercial confidentiality or contract continuity; I do not confront the suspected person or conduct a private investigation.`
    ),
    chapter(
      5,
      "Cybersecurity legítima e autorização",
      "Legitimate cybersecurity and authorization",
      `Cybersecurity não é proibida de forma genérica. Posso avaliar pentest autorizado, auditoria, análise defensiva, pesquisa, bug bounty, testes controlados, engenharia reversa legalmente permitida e desenvolvimento de ferramentas de segurança. Essas atividades exigem finalidade legítima, autorização verificável do titular do ambiente, escopo, alvos, janela, limites, tratamento de evidências e canal de incidente. Um programa público de bug bounty deve ser respeitado exatamente nos termos publicados. A mera afirmação de que o cliente “tem permissão” pode ser insuficiente quando o teste apresentar risco relevante.`,
      `Cybersecurity is not broadly prohibited. I may consider authorized penetration testing, audits, defensive analysis, research, bug bounty work, controlled testing, legally permitted reverse engineering, and security tool development. These activities require a legitimate purpose, verifiable authorization from the environment owner, scope, targets, timing, limits, evidence handling, and an incident channel. A public bug bounty program must be followed exactly as published. A simple claim that the client “has permission” may be insufficient where testing presents meaningful risk.`
    ),
    chapter(
      6,
      "Testes sem autorização e acesso indevido",
      "Unauthorized testing and improper access",
      `Não executo testes em sistemas, contas, redes, dispositivos, APIs, bancos de dados ou comunidades sem autorização clara e compatível com a atividade. Credenciais encontradas, vazadas ou compartilhadas por pessoa sem competência não concedem autorização. Também não ajudo a manter acesso obtido indevidamente, exfiltrar dados, apagar rastros ou explorar vulnerabilidade fora dos limites aprovados. Quando um achado inesperado surgir durante trabalho legítimo, a conduta deve priorizar contenção, preservação mínima de evidências e comunicação responsável ao contato autorizado.`,
      `I do not test systems, accounts, networks, devices, APIs, databases, or communities without clear authorization compatible with the activity. Credentials that are found, leaked, or shared by an unauthorized person do not create permission. I also do not help maintain improperly obtained access, exfiltrate data, erase traces, or exploit a vulnerability outside approved limits. When an unexpected finding arises during legitimate work, the response should prioritize containment, minimal evidence preservation, and responsible disclosure to the authorized contact.`
    ),
    chapter(
      7,
      "Privacidade, vigilância e uso de dados",
      "Privacy, surveillance, and data use",
      `Não construo mecanismos de coleta clandestina, perseguição, vigilância abusiva, doxxing, perfilamento discriminatório ou compartilhamento de dados sem fundamento compatível. Solicitações envolvendo dados pessoais precisam indicar finalidade, origem, base de autorização, retenção, destinatários e responsabilidades. Dados publicamente acessíveis não se tornam automaticamente livres para qualquer tratamento. Quando o projeto exigir interpretação jurídica, definição de base legal, dados sensíveis ou monitoramento de trabalhadores e usuários, a contratação pode depender de orientação jurídica e documentação específica.`,
      `I do not build mechanisms for covert collection, stalking, abusive surveillance, doxxing, discriminatory profiling, or data sharing without a compatible basis. Requests involving personal data must identify purpose, source, authorization basis, retention, recipients, and responsibilities. Publicly accessible data does not automatically become free for any use. Where a project requires legal interpretation, legal-basis determination, sensitive data, or employee and user monitoring, the engagement may depend on legal guidance and specific documentation.`
    ),
    chapter(
      8,
      "Manipulação, falsidade e padrões enganosos",
      "Manipulation, impersonation, and deceptive patterns",
      `Não implemento interfaces ou automações cujo objetivo seja induzir consentimento, assinatura, pagamento, instalação ou compartilhamento de dados por engano. Também não participo de falsificação de avaliações, métricas, seguidores, identidades, documentos, provas ou comunicações. Técnicas de conversão podem ser legítimas quando transparentes e compatíveis com a legislação, mas não quando ocultam custos, dificultam cancelamento, simulam urgência inexistente ou exploram vulnerabilidade do usuário. A fronteira é analisada pela finalidade e pelo efeito prático, não apenas pelo nome dado ao recurso.`,
      `I do not implement interfaces or automation intended to trick users into consent, subscription, payment, installation, or data sharing. I also do not participate in fabricating reviews, metrics, followers, identities, documents, evidence, or communications. Conversion techniques may be legitimate when transparent and lawful, but not when they conceal costs, obstruct cancellation, manufacture urgency, or exploit user vulnerability. The boundary is assessed by purpose and practical effect, not merely by the label given to a feature.`
    ),
    chapter(
      9,
      "Propriedade intelectual de terceiros",
      "Third-party intellectual property",
      `Não copio projetos, interfaces, marcas, imagens, textos, bancos de dados ou código de terceiros sem autorização ou licença compatível. Referências visuais e funcionais podem orientar pesquisa, mas não autorizam reprodução de elementos protegidos nem falsa associação. Não utilizo software pirata, chaves irregulares, bibliotecas incompatíveis ou ativos cuja origem não possa ser razoavelmente demonstrada. O cliente é responsável por possuir direitos sobre materiais fornecidos e deve informar limitações de uso. Quando houver dúvida relevante, o item poderá ser excluído até regularização.`,
      `I do not copy third-party projects, interfaces, brands, images, text, databases, or code without authorization or a compatible license. Visual and functional references may guide research, but do not authorize reproduction of protected elements or false association. I do not use pirated software, illicit keys, incompatible libraries, or assets whose provenance cannot reasonably be shown. The client is responsible for having rights to supplied materials and must disclose usage limitations. Where meaningful doubt exists, the item may be excluded until resolved.`
    ),
    chapter(
      10,
      "Projetos sem proposta ou contrato",
      "Projects without a proposal or contract",
      `Não inicio projeto comercial apenas com promessa verbal ou conversa dispersa. A contratação precisa registrar partes, escopo, preço, prazo, pagamento, entregáveis, responsabilidades, propriedade intelectual, licença, aceite, suporte e encerramento conforme a complexidade. Uma proposta aceita pode integrar o contrato quando isso estiver previsto. Provas de conceito ou diagnósticos também podem exigir documento próprio. A formalização não elimina confiança; ela preserva o entendimento comum e fornece referência quando pessoas, prioridades ou circunstâncias mudam.`,
      `I do not begin commercial projects based solely on a verbal promise or scattered conversation. The engagement must record the parties, scope, price, timeline, payment, deliverables, responsibilities, intellectual property, license, acceptance, support, and termination as appropriate to complexity. An accepted proposal may form part of the contract where provided. Proofs of concept or diagnostics may also require their own document. Formalization does not replace trust; it preserves shared understanding when people, priorities, or circumstances change.`
    ),
    chapter(
      11,
      "Escopo indefinido ou execução sem direção",
      "Undefined scope or directionless execution",
      `Não aceito o modelo “vai fazendo e depois vemos” como projeto fechado. Descoberta e experimentação podem ser contratadas, mas precisam de objetivo, limite de horas ou orçamento, entregável de aprendizado, responsáveis e critério de encerramento. Sem isso, o cliente não consegue avaliar custo e eu não consigo planejar capacidade. Requisitos podem evoluir, desde que exista um processo de mudança. A flexibilidade adequada é administrada por prioridades e decisões registradas, não pela ausência de qualquer referência.`,
      `I do not accept “keep building and we will see later” as a fixed project model. Discovery and experimentation may be contracted, but they need an objective, time or budget limit, learning deliverable, responsible parties, and completion criterion. Without these, the client cannot assess cost and I cannot plan capacity. Requirements may evolve, provided there is a change process. Appropriate flexibility is managed through priorities and recorded decisions, not by having no reference at all.`
    ),
    chapter(
      12,
      "Prazos tecnicamente inviáveis",
      "Technically unworkable schedules",
      `Não assumo datas que eliminem etapas essenciais de diagnóstico, segurança, testes ou validação sem que riscos, redução de escopo e responsabilidades sejam formalmente avaliados. Uma urgência pode ser atendida por fase menor, protótipo, entrega progressiva ou equipe adicional, se viável. Pressa do cliente não transforma uma estimativa impossível em compromisso técnico. Quando o prazo colocar pessoas, dados, operação ou reputação em risco desproporcional e não houver alternativa aceitável, o projeto será recusado.`,
      `I do not accept dates that remove essential diagnosis, security, testing, or validation without formally assessing risks, scope reduction, and responsibilities. An urgent need may be addressed through a smaller phase, prototype, progressive delivery, or additional staff where feasible. Client urgency does not turn an impossible estimate into a technical commitment. Where the schedule places people, data, operations, or reputation at disproportionate risk and no acceptable alternative exists, the project will be declined.`
    ),
    chapter(
      13,
      "Trabalho gratuito por promessa de exposição",
      "Unpaid work in exchange for exposure",
      `Não substituo remuneração por promessa genérica de divulgação, portfólio ou oportunidade futura. Parcerias, projetos sociais, pesquisa e contribuições de código aberto podem existir, mas dependem de decisão consciente, escopo próprio e contrapartidas claras; não são exigíveis como condição para “provar” competência. Custos de descoberta, planejamento e reserva de agenda existem mesmo quando ainda não há código em produção. Qualquer exceção deve ser expressa e não cria obrigação de repetição em outros projetos.`,
      `I do not replace compensation with a generic promise of exposure, portfolio value, or future opportunity. Partnerships, social projects, research, and open-source contributions may exist, but depend on a deliberate decision, their own scope, and clear consideration; they cannot be demanded as a condition to “prove” competence. Discovery, planning, and schedule reservation have costs even before code reaches production. Any exception must be explicit and does not create an obligation to repeat it in other projects.`
    ),
    chapter(
      14,
      "Condições financeiras incompatíveis",
      "Incompatible financial conditions",
      `Não inicio trabalho com pagamento futuro indefinido, orçamento incompatível com o risco ou dependência exclusiva de resultado comercial que não controlo. O modelo padrão utiliza 50% na contratação e 50% na entrega, sujeito à proposta e ao contrato. Projetos maiores podem adotar marcos diferentes. Condições devem cobrir diagnóstico, execução, tributos, ferramentas, fornecedores e disponibilidade reservada. Quando o orçamento não comportar o escopo, proponho redução, fases ou alternativas. Não reduzo silenciosamente qualidade, segurança ou documentação para caber em um valor sem informar as consequências.`,
      `I do not begin work with undefined future payment, a budget incompatible with risk, or payment solely dependent on a commercial outcome I do not control. The standard model uses 50% upon engagement and 50% upon delivery, subject to the proposal and contract. Larger projects may use different milestones. Terms should cover diagnosis, execution, taxes, tools, vendors, and reserved capacity. When the budget cannot support scope, I propose reduction, phases, or alternatives. I do not silently reduce quality, security, or documentation to fit a figure without explaining the consequences.`
    ),
    chapter(
      15,
      "Microgerenciamento e autonomia técnica",
      "Micromanagement and technical autonomy",
      `Não aceito controle de cada decisão ou linha de código de forma incompatível com a autonomia técnica contratada. Isso não elimina governança do cliente: prioridades, orçamento, requisitos, riscos e critérios de aceite continuam sujeitos a alinhamento. Revisões técnicas, pair programming e padrões internos são possíveis quando previstos. O problema surge quando instruções contraditórias, aprovações excessivas ou interferências sem responsável tornam inviável a entrega. Nessa situação, o fluxo deve ser reorganizado com papéis e autoridade de decisão definidos.`,
      `I do not accept control over every decision or line of code where it is incompatible with the contracted technical autonomy. This does not remove client governance: priorities, budget, requirements, risks, and acceptance criteria remain subject to alignment. Technical reviews, pair programming, and internal standards are possible when planned. The problem arises when conflicting instructions, excessive approvals, or interference without accountability make delivery unworkable. In that situation, the workflow must be reorganized with defined roles and decision authority.`
    ),
    chapter(
      16,
      "Revisões ilimitadas",
      "Unlimited revisions",
      `Não ofereço revisões ilimitadas ou alterações sucessivas que substituam o requisito aprovado. A proposta deve indicar rodadas, janelas ou critérios de ajuste. Uma correção de desconformidade não consome necessariamente a mesma categoria de revisão de uma preferência nova; cada pedido é classificado pelo seu conteúdo. Mudanças fora do escopo podem ser avaliadas por solicitação de mudança, com impacto em preço, prazo, testes e documentação. Esse limite evita que uma entrega validada permaneça indefinidamente aberta.`,
      `I do not offer unlimited revisions or successive changes that replace an approved requirement. The proposal should specify rounds, windows, or adjustment criteria. Correcting a nonconformity does not necessarily fall into the same category as a new preference; each request is classified by substance. Out-of-scope changes may be assessed through a change request with impact on price, schedule, testing, and documentation. This limit prevents an accepted delivery from remaining indefinitely open.`
    ),
    chapter(
      17,
      "Suporte ilimitado ou não contratado",
      "Unlimited or uncontracted support",
      `Não presumo suporte contínuo, plantão, monitoramento, manutenção evolutiva ou SLA dentro do preço de desenvolvimento. A garantia técnica cobre falhas relacionadas ao escopo e pelo período aplicável; suporte orienta uso ou investiga ocorrências; manutenção altera ou preserva o sistema ao longo do tempo. São serviços diferentes. Emergências fora do horário dependem de disponibilidade e contratação específica. Sem plano ativo, novas intervenções recebem estimativa e prioridade próprias. Isso permite que expectativa de resposta seja realista e que a operação crítica tenha cobertura adequada.`,
      `I do not assume continuous support, on-call coverage, monitoring, evolutionary maintenance, or an SLA is included in development pricing. A technical warranty covers scope-related defects for the applicable period; support assists use or investigates incidents; maintenance changes or preserves the system over time. These are different services. After-hours emergencies depend on availability and a specific agreement. Without an active plan, new interventions receive their own estimate and priority. This keeps response expectations realistic and gives critical operations appropriate coverage.`
    ),
    chapter(
      18,
      "Trabalho e aprovações fora dos canais oficiais",
      "Work and approvals outside official channels",
      `Não considero mensagem isolada em perfil pessoal, comentário público, áudio sem contexto ou recado de pessoa não autorizada como alteração automática de contrato. Comunicação cotidiana pode ocorrer em canal combinado, mas decisões sobre escopo, preço, prazo, aceite, licença e pagamento precisam ser registradas de forma recuperável. Não executo solicitação sensível enviada por contato que não possa ser confirmado. Essa disciplina reduz fraude, conflito de versão e decisões atribuídas à pessoa errada.`,
      `I do not treat an isolated message to a personal profile, public comment, context-free audio, or message from an unauthorized person as an automatic contract change. Daily communication may occur through an agreed channel, but decisions about scope, price, timing, acceptance, license, and payment must be recorded in a retrievable form. I do not execute sensitive requests from a contact that cannot be verified. This discipline reduces fraud, version conflicts, and decisions attributed to the wrong person.`
    ),
    chapter(
      19,
      "Credenciais, acessos e práticas inseguras",
      "Credentials, access, and unsafe practices",
      `Não recomendo compartilhamento de senha pessoal quando o provedor permite usuário próprio, função, chave restrita ou acesso temporário. Não armazeno credenciais em código ou documento aberto deliberadamente. Também não aceito como requisito a desativação permanente de controles essenciais sem justificativa e aprovação de risco. O cliente deve fornecer acessos legítimos e revogá-los quando deixarem de ser necessários. Se o ambiente não permitir um nível mínimo de segurança, a atividade pode ser limitada até que a condição seja corrigida.`,
      `I do not recommend sharing a personal password where a provider supports a dedicated user, role, restricted key, or temporary access. I do not deliberately store credentials in code or open documents. I also do not accept permanent disabling of essential controls as a requirement without justification and risk approval. The client must provide legitimate access and revoke it when no longer needed. If an environment cannot support a minimum security level, the activity may be limited until the condition is corrected.`
    ),
    chapter(
      20,
      "Promessas fora do controle técnico",
      "Promises beyond technical control",
      `Não garanto faturamento, lucro, conversão, posição em buscadores, aprovação em loja, disponibilidade absoluta, ausência total de vulnerabilidades ou continuidade de serviço terceiro. Posso assumir critérios técnicos mensuráveis quando documentados, testar o que está sob meu controle e comunicar riscos. Resultados também dependem de conteúdo, operação, mercado, infraestrutura, usuários, fornecedores e decisões do cliente. A ausência de garantia comercial não reduz o dever de executar o escopo com diligência nem de corrigir desconformidades abrangidas pela garantia aplicável.`,
      `I do not guarantee revenue, profit, conversion, search ranking, app-store approval, absolute availability, complete absence of vulnerabilities, or continuity of third-party services. I can commit to documented, measurable technical criteria, test what is under my control, and communicate risks. Outcomes also depend on content, operations, market conditions, infrastructure, users, providers, and client decisions. The absence of a commercial guarantee does not reduce the duty to perform the scope diligently or correct nonconformities covered by the applicable warranty.`
    ),
    chapter(
      21,
      "Abuso de plataformas e violação de termos",
      "Platform abuse and terms violations",
      `Não desenvolvo automações para spam, criação abusiva de contas, evasão de banimento, compra artificial de engajamento, contorno de limites, coleta proibida ou violação deliberada de termos de plataforma. Integrações devem utilizar meios autorizados sempre que disponíveis. Quando um requisito depender de técnica que possa levar ao bloqueio de conta, quebra de contrato com provedor ou prejuízo a terceiros, ele será recusado ou substituído. Mudanças nos termos da plataforma podem exigir interrupção ou adaptação do recurso.`,
      `I do not develop automation for spam, abusive account creation, ban evasion, artificial engagement purchasing, limit circumvention, prohibited collection, or deliberate platform-terms violations. Integrations should use authorized means whenever available. Where a requirement depends on a technique that may lead to account suspension, breach of a provider agreement, or harm to others, it will be declined or replaced. Changes to platform terms may require a feature to be suspended or adapted.`
    ),
    chapter(
      22,
      "Suspensão, recusa e encerramento responsável",
      "Responsible suspension, refusal, and termination",
      `Se durante o projeto surgir risco relevante, finalidade diferente da informada, inadimplência, falta de autorização, agressão, violação de segurança ou solicitação ilegal, posso interromper a atividade afetada e solicitar esclarecimento. Suspensão e encerramento devem observar notificação, contrato, proporcionalidade, preservação de evidências e legislação aplicável. Sempre que for seguro, busco permitir transição organizada e definir o tratamento dos materiais produzidos. A regra não autoriza abandono arbitrário de obrigação nem retenção indevida de dados pertencentes ao cliente.`,
      `If a material risk, undisclosed purpose, non-payment, lack of authorization, abuse, security violation, or illegal request emerges during a project, I may pause the affected activity and seek clarification. Suspension and termination must follow notice, contract terms, proportionality, evidence preservation, and applicable law. Where safe, I seek an orderly transition and define the handling of work produced. This rule does not authorize arbitrary abandonment of obligations or improper retention of client-owned data.`
    ),
    chapter(
      23,
      "Respeito, disponibilidade e comunicação",
      "Respect, availability, and communication",
      `Não mantenho relação de trabalho baseada em assédio, discriminação, ameaça, exposição indevida ou cobrança permanente fora dos horários combinados. Mensagens podem ser enviadas de forma assíncrona, mas expectativa de resposta segue o canal e a janela definidos. Urgências reais devem utilizar o procedimento contratado; declarar toda demanda como urgente não cria plantão. Divergências são tratadas com registro, fatos e tentativa de solução. Condutas graves ou repetidas podem justificar medidas previstas no contrato, sem eliminar deveres já constituídos.`,
      `I do not maintain a working relationship based on harassment, discrimination, threats, improper exposure, or constant demands outside agreed hours. Messages may be sent asynchronously, but response expectations follow the defined channel and window. Genuine emergencies must use the contracted procedure; labeling every request urgent does not create on-call coverage. Disagreements are handled through records, facts, and an attempt at resolution. Serious or repeated misconduct may justify contractual measures without erasing existing obligations.`
    ),
    chapter(
      24,
      "Exceções, contrato e validação jurídica",
      "Exceptions, contract, and legal review",
      `Uma exceção precisa ser expressa, limitada e compatível com a lei; tolerância pontual não altera automaticamente esta política. A proposta e o contrato podem detalhar ou adaptar limites para um projeto específico, mas não tornam lícita uma atividade proibida nem afastam direitos indisponíveis. As recusas relativas a conteúdo sexual adulto e à exploração sexual de crianças ou adolescentes não são flexibilizadas por proposta comercial. Situações envolvendo segurança ofensiva, dados sensíveis, regulação, consumidores, menores, propriedade intelectual complexa ou operação internacional podem depender de validação jurídica e documental adicional. Última atualização: 28 de setembro de 2026.`,
      `An exception must be express, limited, and lawful; one-time tolerance does not automatically amend this policy. The proposal and contract may detail or adapt limits for a particular project, but cannot make prohibited conduct lawful or waive non-waivable rights. The refusals concerning adult sexual content and the sexual exploitation of children or adolescents are not relaxed by a commercial proposal. Matters involving offensive security, sensitive data, regulation, consumers, minors, complex intellectual property, or international operations may require additional legal and documentary review. Last updated: September 28, 2026.`
    ),
  ],
};

export const howIWorkPolicy: ProfessionalPolicy = {
  id: "como-trabalho",
  title: { pt: "Como Eu Trabalho", en: "How I Work" },
  paragraphs: [
    introduction(
      `Meu processo organiza um projeto desde o primeiro contato até o encerramento, com responsabilidades, documentos, dependências e critérios de conclusão visíveis. O fluxo pode ser simplificado ou ampliado conforme o porte e o risco, mas diagnóstico, escopo, comunicação, validação e registro permanecem essenciais. Esta política reúne condições gerais; proposta, contrato, anexos técnicos, DPA, NDA e SLA podem complementar ou modificar pontos específicos. Em caso de divergência, prevalece o documento expressamente aplicável à contratação, sempre respeitados a legislação e os direitos que não possam ser afastados.`,
      `My process organizes a project from first contact through closure, with visible responsibilities, documents, dependencies, and completion criteria. The workflow may be simplified or expanded according to size and risk, but diagnosis, scope, communication, validation, and records remain essential. This policy contains general terms; the proposal, contract, technical schedules, DPA, NDA, and SLA may supplement or modify specific points. In case of conflict, the document expressly applicable to the engagement prevails, always subject to applicable law and rights that cannot be waived.`
    ),
    chapter(
      1,
      "Primeiro contato",
      "First contact",
      `O primeiro contato serve para identificar o solicitante, o problema, o objetivo, o estágio atual e a urgência real. Minha responsabilidade é ouvir, fazer perguntas iniciais e indicar se a demanda parece compatível com minha atuação. A responsabilidade do interessado é apresentar o contexto de boa-fé, sem omitir riscos, restrições ou terceiros relevantes. Nesta etapa não existe obrigação de contratação, reserva de agenda ou estimativa definitiva. Ela se conclui quando há informação suficiente para encaminhar orçamento, diagnóstico ou recusa fundamentada.`,
      `The first contact identifies the requester, problem, objective, current stage, and genuine urgency. My responsibility is to listen, ask initial questions, and indicate whether the request appears compatible with my work. The prospective client's responsibility is to present the context in good faith without omitting relevant risks, constraints, or third parties. This stage creates no obligation to engage, reserve time, or provide a final estimate. It concludes when enough information exists to proceed to a quote, diagnosis, or reasoned refusal.`
    ),
    chapter(
      2,
      "Solicitação de orçamento",
      "Quote request",
      `Solicitações de orçamento começam pelo formulário oficial indicado no site. Dúvidas objetivas sobre escopo, estimativas ou pedido já enviado podem ser encaminhadas a ${contactEmails.budget}. O solicitante deve informar contato, objetivo, funcionalidades, prazo desejado, referências, sistemas envolvidos e orçamento disponível quando possível. Uma resposta inicial pode pedir complementos ou recomendar diagnóstico pago antes da proposta. O envio do formulário não garante aceite nem fixa preço. A etapa termina quando a demanda possui dados mínimos para levantamento ou é encerrada por incompatibilidade.`,
      `Quote requests begin through the official form identified on the website. Objective questions about scope, estimates, or a submitted request may be sent to ${contactEmails.budget}. The requester should provide contact details, objective, features, desired timing, references, systems involved, and available budget where possible. An initial response may request additional information or recommend paid discovery before a proposal. Submitting the form does not guarantee acceptance or fix a price. The stage ends when the request has minimum information for discovery or is closed as incompatible.`
    ),
    chapter(
      3,
      "Levantamento de requisitos",
      "Requirements discovery",
      `O levantamento transforma a necessidade em requisitos verificáveis. Minha responsabilidade é identificar usuários, fluxos, regras de negócio, dados, integrações, permissões, exceções e critérios de sucesso. O cliente indica pessoas capazes de decidir, fornece materiais e valida a compreensão. Podem ser usados questionários, reuniões, documentos, protótipos e inventários. Informações contraditórias ou ausentes são registradas como pendências. A etapa é concluída quando há base suficiente para estimar e delimitar o projeto, não quando toda possibilidade futura foi antecipada.`,
      `Discovery turns a need into verifiable requirements. My responsibility is to identify users, workflows, business rules, data, integrations, permissions, exceptions, and success criteria. The client appoints decision-makers, supplies materials, and validates the shared understanding. Questionnaires, meetings, documents, prototypes, and inventories may be used. Missing or conflicting information is recorded as an issue. The stage concludes when there is enough basis to estimate and delimit the project, not when every future possibility has been predicted.`
    ),
    chapter(
      4,
      "Diagnóstico",
      "Diagnosis",
      `No diagnóstico, comparo o estado atual ao objetivo e identifico causas, dependências, riscos e alternativas. Posso revisar processos, arquitetura, código, dados, infraestrutura ou ferramentas dentro da profundidade acordada. O cliente deve disponibilizar acesso legítimo e explicar o funcionamento real, inclusive improvisos conhecidos. O resultado pode ser um relatório, mapa de riscos, recomendação ou base de escopo. Achados são limitados às evidências e ao período analisados. A etapa termina com apresentação das conclusões e registro das decisões necessárias.`,
      `During diagnosis, I compare the current state with the objective and identify causes, dependencies, risks, and alternatives. I may review processes, architecture, code, data, infrastructure, or tools to the agreed depth. The client must provide legitimate access and explain actual operation, including known workarounds. The result may be a report, risk map, recommendation, or scope baseline. Findings are limited to the evidence and period reviewed. The stage ends with presentation of conclusions and a record of the decisions required.`
    ),
    chapter(
      5,
      "Análise de viabilidade",
      "Feasibility analysis",
      `A viabilidade considera tecnologia, prazo, orçamento, equipe, operação, segurança, legislação conhecida e dependência de terceiros. Minha responsabilidade é apontar limitações e opções; o cliente decide prioridades e tolerância a risco dentro do que for aceitável. Provas de conceito podem ser recomendadas quando uma premissa essencial não puder ser confirmada por documentação. Um parecer favorável depende das informações disponíveis e não garante comportamento de fornecedor externo. A etapa se encerra com decisão de prosseguir, redimensionar, fasear, testar ou não executar.`,
      `Feasibility considers technology, schedule, budget, team, operations, security, known legal constraints, and third-party dependencies. My responsibility is to identify limitations and options; the client decides priorities and risk tolerance within acceptable boundaries. A proof of concept may be recommended where an essential assumption cannot be confirmed by documentation. A favorable assessment depends on available information and does not guarantee third-party behavior. The stage ends with a decision to proceed, resize, phase, test, or decline.`
    ),
    chapter(
      6,
      "Definição do escopo",
      "Scope definition",
      `O escopo registra objetivos, funcionalidades, entregáveis, exclusões, dependências, premissas, ambientes, documentação, testes e critérios de aceite. Minha responsabilidade é redigir uma fronteira tecnicamente compreensível; o cliente revisa regras de negócio e confirma prioridades. Termos vagos devem ser acompanhados de exemplo ou critério. O escopo não precisa prever toda evolução do produto, mas precisa permitir saber se a entrega está ou não conforme. Ele é concluído quando as partes aprovam uma versão base, sujeita ao processo formal de mudança.`,
      `Scope records objectives, features, deliverables, exclusions, dependencies, assumptions, environments, documentation, tests, and acceptance criteria. My responsibility is to define a technically understandable boundary; the client reviews business rules and confirms priorities. Vague terms should be accompanied by examples or criteria. Scope need not predict every future product evolution, but must make it possible to determine whether delivery conforms. It is complete when the parties approve a baseline version subject to formal change control.`
    ),
    chapter(
      7,
      "Proposta comercial",
      "Commercial proposal",
      `A proposta converte o escopo em preço, cronograma, forma de pagamento, validade, entregáveis e condições. Pode apresentar opções ou fases. Minha responsabilidade é explicitar o que está incluído e as principais exclusões; o cliente deve avaliar capacidade de pagamento, disponibilidade interna e aderência. Estimativas dependentes de fornecedor, volume ou descoberta adicional são identificadas. A proposta não deve ser interpretada isoladamente de seus anexos e premissas. A etapa termina por aceite dentro da validade, negociação documentada ou expiração sem contratação.`,
      `The proposal converts scope into price, timeline, payment terms, validity, deliverables, and conditions. It may present options or phases. My responsibility is to state what is included and the main exclusions; the client must assess payment capacity, internal availability, and fit. Estimates dependent on a provider, volume, or additional discovery are identified. The proposal should not be read separately from its schedules and assumptions. The stage ends through acceptance within validity, documented negotiation, or expiry without engagement.`
    ),
    chapter(
      8,
      "Contratação",
      "Contracting",
      `A contratação formaliza partes, representantes, escopo, preço, prazo, pagamentos, propriedade intelectual, licença, confidencialidade, dados, aceite, garantia, suporte, responsabilidade, suspensão e encerramento. O cliente deve conferir seus dados e a autoridade de quem assina. Minha responsabilidade é não iniciar execução substantiva antes de haver documento aplicável, salvo diagnóstico separado. Proposta, anexos e políticas podem integrar o contrato por referência quando isso estiver claro. A etapa é concluída com assinatura ou aceite juridicamente adequado e cumprimento das condições de início.`,
      `Contracting formalizes the parties, representatives, scope, price, timing, payments, intellectual property, license, confidentiality, data, acceptance, warranty, support, liability, suspension, and termination. The client must verify its details and the signatory's authority. My responsibility is not to begin substantive delivery before an applicable document exists, except for a separately engaged diagnosis. The proposal, schedules, and policies may be incorporated by reference where clear. The stage concludes with signature or legally appropriate acceptance and satisfaction of start conditions.`
    ),
    chapter(
      9,
      "Pagamento inicial",
      "Initial payment",
      `O modelo comercial padrão é 50% na contratação e 50% na entrega, salvo condição diferente na proposta ou no contrato. A parcela inicial remunera e viabiliza reserva de agenda, mobilização, diagnóstico contratado, planejamento e início da execução. Seu tratamento em cancelamento ou reembolso depende do trabalho realizado, capacidade reservada, custos não recuperáveis, contrato e legislação aplicável; não existe aqui uma renúncia automática a direitos. O cronograma somente começa quando o pagamento devido e as demais condições de início forem confirmados.`,
      `The standard commercial model is 50% upon engagement and 50% upon delivery, unless the proposal or contract provides otherwise. The initial installment compensates and enables schedule reservation, mobilization, contracted diagnosis, planning, and the start of work. Its treatment upon cancellation or refund depends on work performed, capacity reserved, nonrecoverable costs, the contract, and applicable law; this policy does not create an automatic waiver of rights. The schedule begins only when the payment due and other start conditions are confirmed.`
    ),
    chapter(
      10,
      "Planejamento",
      "Planning",
      `O planejamento decompõe o escopo em etapas, dependências, responsáveis, riscos e pontos de validação. Minha responsabilidade é propor uma sequência executável e manter visibilidade sobre progresso e impedimentos. O cliente deve disponibilizar decisões, materiais e acessos nas datas combinadas. O plano pode usar marcos, backlog ou calendário, conforme o projeto. Datas intermediárias são reavaliadas quando uma premissa falha ou uma mudança é aprovada. A etapa se conclui com prioridades, responsáveis e condições da primeira execução claramente definidos.`,
      `Planning breaks scope into stages, dependencies, owners, risks, and validation points. My responsibility is to propose an executable sequence and maintain visibility over progress and blockers. The client must provide decisions, materials, and access on agreed dates. The plan may use milestones, a backlog, or a calendar depending on the project. Intermediate dates are reassessed when an assumption fails or a change is approved. The stage concludes with clear priorities, owners, and conditions for the first execution cycle.`
    ),
    chapter(
      11,
      "Arquitetura",
      "Architecture",
      `A arquitetura define componentes, dados, integrações, ambientes, controles e decisões com impacto duradouro. Minha responsabilidade é escolher uma solução proporcional e registrar decisões relevantes; o cliente informa padrões internos, fornecedores obrigatórios e restrições. Quando houver alternativas, apresento benefícios, custos e riscos. Algumas decisões podem permanecer reversíveis até uma prova de conceito. A etapa é concluída quando existe base suficiente para desenvolver sem improvisar contratos essenciais, ainda que detalhes locais continuem evoluindo.`,
      `Architecture defines components, data, integrations, environments, controls, and decisions with lasting impact. My responsibility is to choose a proportionate solution and record relevant decisions; the client discloses internal standards, mandatory providers, and constraints. Where alternatives exist, I present benefits, costs, and risks. Some decisions may remain reversible until a proof of concept. The stage concludes when there is enough foundation to develop without improvising essential contracts, even though local details may continue to evolve.`
    ),
    chapter(
      12,
      "Desenvolvimento",
      "Development",
      `O desenvolvimento implementa o escopo aprovado em ciclos rastreáveis. Minha responsabilidade é produzir código e configurações coerentes, comunicar impedimentos e não ocultar desvios relevantes. O cliente participa esclarecendo regras e avaliando demonstrações nos pontos previstos, sem transformar cada detalhe interno em aprovação obrigatória. Funcionalidades podem ser entregues progressivamente em ambiente de desenvolvimento ou homologação. A etapa de cada item termina quando os critérios técnicos e funcionais definidos estão atendidos e o item está pronto para teste ou validação.`,
      `Development implements approved scope in traceable cycles. My responsibility is to produce coherent code and configuration, communicate blockers, and not conceal material deviations. The client participates by clarifying rules and reviewing demonstrations at planned points without turning every internal detail into a mandatory approval. Features may be delivered progressively in development or staging. Each item is complete when its defined technical and functional criteria are met and it is ready for testing or validation.`
    ),
    chapter(
      13,
      "Controle de versão e rastreabilidade",
      "Version control and traceability",
      `Uso controle de versão desde o início aplicável, com histórico de alterações e separação adequada de trabalho. Branches, revisões, tags e estratégia de integração variam conforme equipe e risco. O repositório pode pertencer ao cliente ou permanecer sob minha administração temporária, conforme contrato. Segredos não devem ser versionados deliberadamente. Acesso de terceiros precisa ser autorizado. A etapa não é isolada: acompanha todo o desenvolvimento e se considera atendida quando o código entregue possui versão identificável e histórico compatível com o processo contratado.`,
      `I use version control from the applicable start, with change history and appropriate work separation. Branches, reviews, tags, and integration strategy vary by team and risk. The repository may belong to the client or remain temporarily under my administration according to contract. Secrets should not be deliberately committed. Third-party access must be authorized. This is not an isolated stage: it spans development and is satisfied when delivered code has an identifiable version and history compatible with the contracted process.`
    ),
    chapter(
      14,
      "Testes",
      "Testing",
      `Os testes verificam comportamento, integrações e riscos dentro do escopo. Minha responsabilidade é executar a estratégia combinada e registrar defeitos relevantes; o cliente fornece cenários de negócio, contas, dados adequados e disponibilidade de sistemas externos quando necessários. Podem existir testes unitários, integração, ponta a ponta, regressão, acessibilidade, desempenho ou segurança. Ausência de determinado teste não deve ser presumida como aprovação de risco desconhecido. A etapa termina quando critérios acordados passam, falhas conhecidas estão corrigidas ou formalmente aceitas e a versão está pronta para homologação.`,
      `Testing verifies behavior, integrations, and risks within scope. My responsibility is to perform the agreed strategy and record material defects; the client supplies business scenarios, accounts, suitable data, and external-system availability where needed. Tests may include unit, integration, end-to-end, regression, accessibility, performance, or security. The absence of a particular test should not be treated as approval of an unknown risk. The stage ends when agreed criteria pass, known issues are fixed or formally accepted, and the version is ready for acceptance testing.`
    ),
    chapter(
      15,
      "Homologação",
      "Acceptance testing",
      `Na homologação, o cliente verifica a entrega em relação aos requisitos e critérios aprovados. Minha responsabilidade é fornecer versão identificada, instruções e ambiente quando contratados; o cliente deve testar fluxos relevantes, reunir feedback e indicar evidências reproduzíveis. Preferências novas não são classificadas automaticamente como defeito. Se houver desconformidade, corrijo o que estiver abrangido e submeto à nova validação. A etapa termina com aceite expresso, esgotamento do procedimento contratual de validação ou outro critério legalmente adequado, sem afastar direitos indisponíveis.`,
      `During acceptance testing, the client checks delivery against approved requirements and criteria. My responsibility is to provide an identified version, instructions, and environment where contracted; the client must test relevant workflows, consolidate feedback, and provide reproducible evidence. New preferences are not automatically defects. If there is a nonconformity, I correct covered items and resubmit them. The stage ends through express acceptance, completion of the contractual validation process, or another legally appropriate criterion, without waiving non-waivable rights.`
    ),
    chapter(
      16,
      "Ajustes",
      "Adjustments",
      `Ajustes refinam uma entrega dentro dos limites aprovados, como correção de conteúdo, espaçamento ou comportamento menor que não substitua requisito. A quantidade de rodadas ou janela aplicável consta da proposta. Minha responsabilidade é classificar e executar o que estiver incluído; o cliente deve consolidar pedidos, evitar instruções conflitantes e aprovar a versão resultante. Bug, melhoria e nova funcionalidade seguem tratamento próprio. A etapa termina quando os ajustes previstos são concluídos ou quando pedidos adicionais são transferidos para uma solicitação de mudança.`,
      `Adjustments refine a delivery within approved boundaries, such as correcting content, spacing, or minor behavior without replacing a requirement. The applicable number of rounds or window appears in the proposal. My responsibility is to classify and perform included items; the client must consolidate requests, avoid conflicting instructions, and approve the resulting version. Bugs, improvements, and new features follow their own treatment. The stage ends when planned adjustments are complete or additional requests are moved to a change request.`
    ),
    chapter(
      17,
      "Aceite",
      "Acceptance",
      `O aceite registra que a entrega corresponde ao escopo e pode seguir para conclusão ou produção. O prazo padrão de manifestação é de 5 dias úteis após disponibilização adequada, salvo documento específico. O cliente deve aprovar ou apresentar desconformidades objetivas nesse período. O silêncio pode produzir o efeito contratual de aceite para organização do cronograma quando isso estiver previsto, mas não representa renúncia a garantia, vício oculto ou direito legalmente indisponível. Contestação fundamentada suspende o aceite do item afetado até correção e nova validação.`,
      `Acceptance records that delivery matches scope and may proceed to completion or production. The standard response period is five business days after proper availability, unless a specific document provides otherwise. The client should approve or identify objective nonconformities during that period. Silence may have the contractual effect of acceptance for scheduling purposes where provided, but does not waive warranty, latent-defect, or other non-waivable rights. A substantiated dispute suspends acceptance of the affected item until correction and revalidation.`
    ),
    chapter(
      18,
      "Entrega",
      "Delivery",
      `A entrega pode ocorrer por repositório, arquivos, ambiente, publicação, documentação ou combinação definida no contrato. O pagamento final padrão de 50% vence na entrega ou no marco previsto, observadas as condições específicas. Minha responsabilidade é disponibilizar os entregáveis aprovados e orientar a transição contratada; o cliente deve confirmar recebimento, manter contas e proteger acessos. Instalação, migração, publicação em loja, operação e treinamento somente estão incluídos quando previstos. A conclusão é registrada por termo, e-mail oficial, aceite do marco ou outro meio acordado.`,
      `Delivery may occur through a repository, files, environment, publication, documentation, or the combination defined in the contract. The standard final 50% payment is due upon delivery or the stated milestone, subject to specific terms. My responsibility is to make approved deliverables available and provide the contracted transition guidance; the client must confirm receipt, maintain accounts, and protect access. Installation, migration, app-store publication, operations, and training are included only where specified. Completion is recorded through a term, official email, milestone acceptance, or another agreed method.`
    ),
    chapter(
      19,
      "Garantia",
      "Warranty",
      `A garantia técnica padrão é de 30 dias a partir do aceite ou marco definido, sem afastar garantias obrigatórias aplicáveis. Ela cobre correção de falha reproduzível que impeça o funcionamento conforme requisito original aprovado. Não inclui nova funcionalidade, mudança de requisito, redesign, preferência estética posterior, uso incompatível, problema sem relação com minha entrega, falha de hospedagem ou API externa, nem defeito causado por alteração do cliente ou de terceiro. A exclusão por alteração somente se aplica quando houver relação entre a intervenção e a falha.`,
      `The standard technical warranty is 30 days from acceptance or the defined milestone, without excluding mandatory warranties under applicable law. It covers correction of a reproducible defect that prevents operation according to an originally approved requirement. It does not include a new feature, requirement change, redesign, later aesthetic preference, incompatible use, an issue unrelated to my delivery, hosting or external API failure, or a defect caused by a client or third-party change. Exclusion due to modification applies only where the intervention is related to the defect.`
    ),
    chapter(
      20,
      "Suporte",
      "Support",
      `Suporte auxilia dúvidas de uso, triagem e investigação de ocorrências dentro do canal, horário e prazo contratados. Não se confunde com garantia nem manutenção. O plano pode estabelecer volume, prioridade, contatos autorizados e SLA. Sem plano contínuo, solicitações posteriores são avaliadas conforme disponibilidade e podem gerar orçamento. Suporte emergencial e atendimento fora do horário dependem de contratação específica; enviar mensagem com urgência não cria obrigação de plantão. A etapa de um chamado termina com orientação, solução, encaminhamento ou classificação como manutenção, terceiro ou novo escopo.`,
      `Support assists with usage questions, triage, and incident investigation through the contracted channel, schedule, and response time. It is distinct from warranty and maintenance. A plan may define volume, priority, authorized contacts, and SLA. Without a continuing plan, later requests are assessed according to availability and may require a quote. Emergency and after-hours support require a specific agreement; marking a message urgent does not create on-call coverage. A ticket ends with guidance, resolution, referral, or classification as maintenance, third-party responsibility, or new scope.`
    ),
    chapter(
      21,
      "Manutenção",
      "Maintenance",
      `Manutenção corretiva trata falhas fora da garantia ou em condições não cobertas; manutenção evolutiva acrescenta ou altera funcionalidades; manutenção preventiva atualiza dependências, infraestrutura e controles para reduzir risco. Cada modalidade precisa de escopo, prioridade, acesso e critérios próprios. Minha responsabilidade é executar o plano contratado; o cliente mantém pagamentos, contas, backups e aprovações que lhe couberem. Sem manutenção, o sistema pode continuar operando, mas mudanças de navegador, provedor, API, dependência ou ameaça podem exigir intervenção futura não incluída na entrega original.`,
      `Corrective maintenance addresses defects outside warranty or under uncovered conditions; evolutionary maintenance adds or changes features; preventive maintenance updates dependencies, infrastructure, and controls to reduce risk. Each mode needs its own scope, priority, access, and criteria. My responsibility is to execute the contracted plan; the client maintains payments, accounts, backups, and required approvals. Without maintenance, a system may continue operating, but browser, provider, API, dependency, or threat changes may require future intervention not included in the original delivery.`
    ),
    chapter(
      22,
      "Encerramento",
      "Closure",
      `O encerramento consolida entregáveis, pagamentos, acessos, documentos, pendências, garantia e próximos responsáveis. Minha responsabilidade é disponibilizar o que foi contratado e remover ou devolver acessos conforme combinado; o cliente deve receber materiais, atualizar credenciais, manter backups e indicar responsáveis. Dados e cópias de trabalho são retidos somente pelo período necessário ou previsto, observadas obrigações legais, exercício de direitos e instruções válidas. O encerramento não elimina confidencialidade, licenças, pagamentos, garantias e demais obrigações que devam sobreviver por sua natureza.`,
      `Closure consolidates deliverables, payments, access, documents, outstanding matters, warranty, and future owners. My responsibility is to provide what was contracted and remove or return access as agreed; the client must receive materials, rotate credentials, maintain backups, and appoint owners. Data and working copies are retained only for the necessary or stated period, subject to legal obligations, exercise of rights, and valid instructions. Closure does not end confidentiality, licenses, payments, warranties, and other obligations that survive by their nature.`
    ),
    chapter(
      23,
      "Escopo, premissas e exclusões",
      "Scope, assumptions, and exclusions",
      `Escopo inicial é a versão aprovada de requisitos e entregáveis. Premissas são fatos usados para estimar, como disponibilidade de uma API; dependências são recursos ou decisões necessários; exclusões são itens deliberadamente não incluídos. Se uma premissa se mostrar falsa, analiso impacto antes de continuar. O cliente não deve presumir inclusão por semelhança com outro projeto ou por ser tecnicamente possível. Exemplos, protótipos e referências ajudam a interpretação, mas somente substituem texto do escopo quando essa função estiver documentada.`,
      `Initial scope is the approved version of requirements and deliverables. Assumptions are facts used for estimation, such as API availability; dependencies are required resources or decisions; exclusions are deliberately omitted items. If an assumption proves false, I assess the impact before proceeding. The client should not assume inclusion because another project had a feature or because something is technically possible. Examples, prototypes, and references aid interpretation, but replace written scope only where that role is documented.`
    ),
    chapter(
      24,
      "Solicitação de mudança",
      "Change requests",
      `Mudanças são permitidas por solicitação de mudança, ou change request. O registro descreve pedido, motivo, impacto em arquitetura, segurança, dados, preço, prazo, testes, documentação e entregáveis já aprovados. Minha responsabilidade é avaliar; o cliente decide se aprova, adia ou rejeita. Trabalho adicional começa após aprovação formal e, quando aplicável, pagamento. Uma mudança urgente pode exigir interrupção e replanejamento de itens em curso. Sem aprovação, permanece válida a linha de base anterior.`,
      `Changes are allowed through a change request. The record describes the request, reason, and impact on architecture, security, data, price, schedule, testing, documentation, and previously approved deliverables. My responsibility is to assess it; the client decides whether to approve, defer, or reject it. Additional work starts after formal approval and, where applicable, payment. An urgent change may require interrupting and replanning work in progress. Without approval, the previous baseline remains valid.`
    ),
    chapter(
      25,
      "Bug, ajuste, melhoria e nova funcionalidade",
      "Bug, adjustment, improvement, and new feature",
      `Bug é desconformidade reproduzível entre a implementação e o requisito aprovado. Ajuste é refinamento limitado que preserva o requisito. Melhoria aumenta qualidade, desempenho ou experiência sem ser necessária para cumprir a versão aprovada. Nova funcionalidade cria capacidade que não existia no escopo. Bug coberto é corrigido sem novo preço; ajuste segue rodadas previstas; melhoria e nova funcionalidade exigem avaliação de custo e prazo. Todas podem demandar testes e documentação proporcionais. O nome usado no pedido não define a categoria: prevalecem o requisito e o efeito técnico.`,
      `A bug is a reproducible mismatch between implementation and an approved requirement. An adjustment is a limited refinement that preserves the requirement. An improvement increases quality, performance, or experience without being necessary to meet the approved version. A new feature creates capability absent from scope. A covered bug is fixed without a new fee; an adjustment follows the planned rounds; an improvement or new feature requires cost and schedule assessment. All may require proportionate testing and documentation. The label used in a request does not determine its category; the requirement and technical effect do.`
    ),
    chapter(
      26,
      "Alteração de requisito, infraestrutura ou integração",
      "Requirement, infrastructure, or integration changes",
      `Alteração de requisito muda regra, fluxo, público ou critério anteriormente aprovado. Alteração de infraestrutura muda ambiente, região, provedor, topologia, capacidade ou operação. Alteração de integração decorre de novo sistema, contrato, autenticação, versão ou comportamento de API. Mesmo sem interface nova, essas mudanças podem afetar arquitetura, segurança, migração, testes, documentação, custo e cronograma. Quando provocadas por terceiro, não se tornam automaticamente bug da entrega. Avalio causa, urgência, alternativas e responsabilidade antes de definir o tratamento.`,
      `A requirement change alters a previously approved rule, workflow, audience, or criterion. An infrastructure change alters environment, region, provider, topology, capacity, or operation. An integration change results from a new system, contract, authentication method, version, or API behavior. Even without a new interface, these changes may affect architecture, security, migration, testing, documentation, cost, and schedule. When caused by a third party, they do not automatically become a defect in my delivery. I assess cause, urgency, alternatives, and responsibility before deciding treatment.`
    ),
    chapter(
      27,
      "Pagamentos, inadimplência e liberação",
      "Payments, default, and release",
      `Pagamentos seguem proposta e contrato. Em caso de atraso, notifico o cliente e posso suspender trabalho, novos deploys, suporte não emergencial ou entrega ainda não devida, na medida permitida pelo contrato e pela lei. Suspensão pode deslocar o cronograma e exigir nova disponibilidade. Não desativo sistema em produção nem retenho dado do cliente de forma arbitrária. Licença, cessão, acesso ao repositório e entrega final seguem as condições expressas; a quitação pode ser condição para liberação quando validamente acordada. Juros, multas e consequências dependem do instrumento aplicável.`,
      `Payments follow the proposal and contract. In the event of delay, I notify the client and may suspend work, new deployments, non-emergency support, or delivery not yet due to the extent permitted by contract and law. Suspension may move the schedule and require new availability. I do not arbitrarily disable a production system or retain client data. Licensing, assignment, repository access, and final release follow express terms; full payment may be a release condition where validly agreed. Interest, penalties, and consequences depend on the applicable instrument.`
    ),
    chapter(
      28,
      "Prazos, colaboração e eventos externos",
      "Schedules, collaboration, and external events",
      `O prazo começa após contratação, pagamento inicial devido, recebimento das informações, acessos e materiais indispensáveis e definição dos responsáveis. Atrasos de validação, mudança de escopo, acesso inválido, indisponibilidade de fornecedor, força maior ou evento fora do controle razoável podem justificar pausa ou revisão proporcional. Comunico impacto assim que identificável e proponho novo plano. O cliente também deve avisar impedimentos internos. Cronograma é compromisso compartilhado, não contagem isolada da execução técnica. Datas críticas precisam de folga e contingência compatíveis com o risco.`,
      `The schedule begins after contracting, any initial payment due, receipt of indispensable information, access, and materials, and designation of responsible parties. Validation delays, scope changes, invalid access, provider outages, force majeure, or events beyond reasonable control may justify a proportionate pause or revision. I communicate impact once identifiable and propose a new plan. The client must also disclose internal blockers. A timeline is a shared commitment, not an isolated count of technical execution. Critical dates need contingency proportionate to risk.`
    ),
    chapter(
      29,
      "Cancelamento, reembolso e ausência do cliente",
      "Cancellation, refunds, and client absence",
      `Cancelamento e reembolso são avaliados conforme contrato, etapa executada, entregáveis aproveitáveis, capacidade reservada, custos não recuperáveis e legislação aplicável. Não presumo perda automática de todo valor pago nem devolução integral independentemente do trabalho. Se o cliente deixar de responder, envio notificação e posso pausar o cronograma, arquivar o projeto e liberar a agenda. Após 30 dias consecutivos sem insumo essencial, o contrato pode prever encerramento ou reativação. A taxa comercial de reativação atualmente usada como referência é 15%, somente quando expressa no documento aplicável e sujeita à proporcionalidade.`,
      `Cancellation and refunds are assessed under the contract, work completed, usable deliverables, reserved capacity, nonrecoverable costs, and applicable law. I do not assume automatic forfeiture of every amount paid or a full refund regardless of work. If the client stops responding, I provide notice and may pause the schedule, archive the project, and release reserved capacity. After 30 consecutive days without essential input, the contract may provide for termination or reactivation. The current commercial reference for a reactivation fee is 15%, only where stated in the applicable document and subject to proportionality.`
    ),
    chapter(
      30,
      "Propriedade intelectual e autoria",
      "Intellectual property and authorship",
      `Autoria identifica quem criou uma obra; titularidade patrimonial define quem pode explorá-la; licença autoriza usos determinados; cessão transfere direitos nos limites acordados. Código específico do projeto, código preexistente, bibliotecas, frameworks, ferramentas internas, know-how, arquitetura, documentação, conteúdo, marca e dados não têm necessariamente o mesmo regime. O contrato deve separar esses elementos. Componentes de terceiros permanecem sujeitos às próprias licenças. Conteúdo, marca e dados fornecidos pelo cliente continuam sob os direitos de seus titulares. Nenhuma redação genérica deve ser interpretada como transferência além do que foi expressamente contratado e legalmente possível.`,
      `Authorship identifies who created a work; economic ownership identifies who may exploit it; a license authorizes specified uses; an assignment transfers rights within agreed limits. Project-specific code, pre-existing code, libraries, frameworks, internal tools, know-how, architecture, documentation, content, brand, and data do not necessarily share the same legal treatment. The contract should distinguish them. Third-party components remain subject to their own licenses. Client-provided content, brands, and data remain subject to their owners' rights. No general wording should be read as transferring more than what was expressly contracted and legally possible.`
    ),
    chapter(
      31,
      "Licença de uso",
      "License to use",
      `Quando a entrega ocorrer por licença, o contrato define finalidade, ambientes, entidades autorizadas, prazo, território e possibilidade de transferência, sublicenciamento, revenda, adaptação ou reutilização. A licença deve permitir operação legítima pelo cliente, seus empregados e prestadores autorizados, incluindo hospedagem, cópias de segurança e uso interno necessários. Limitações existem para impedir redistribuição, exploração fora do acordo ou remoção indevida de obrigações, não para inviabilizar o sistema. Cessão integral, exclusividade ou direito de revenda exigem previsão e preço próprios.`,
      `When delivery is licensed, the contract defines purpose, environments, authorized entities, term, territory, and whether transfer, sublicensing, resale, adaptation, or reuse is permitted. The license should enable legitimate operation by the client, its employees, and authorized contractors, including necessary hosting, backups, and internal use. Limitations exist to prevent redistribution, out-of-agreement exploitation, or improper removal of obligations, not to make the system unusable. Full assignment, exclusivity, or resale rights require their own terms and price.`
    ),
    chapter(
      32,
      "Crédito de autoria e white label",
      "Authorship credit and white label",
      `O orçamento padrão pode considerar crédito “Desenvolvido por Talisson Souza” ou equivalente no local aprovado. White label permite omitir esse crédito mediante contratação prévia. A referência comercial atual é adicional de 30% sobre o valor do projeto, mas ela não é obrigação legal e pode ser modificada na proposta ou no contrato. A remoção unilateral pode caracterizar descumprimento se o crédito integrar a licença contratada; notificação, regularização, cobrança ou outras medidas dependem do instrumento e da lei. A garantia não é cancelada automaticamente por mera remoção sem relação com o defeito.`,
      `Standard pricing may account for a “Developed by Talisson Souza” credit or equivalent in the approved location. White label permits omission of that credit through prior agreement. The current commercial reference is an additional 30% of the project price, but this is not a legal requirement and may be changed in the proposal or contract. Unilateral removal may constitute breach where credit forms part of the contracted license; notice, cure, charges, or other remedies depend on the instrument and law. Warranty is not automatically cancelled merely because a credit was removed where that has no relation to a defect.`
    ),
    chapter(
      33,
      "Segurança da informação",
      "Information security",
      `Aplico controles proporcionais, como menor privilégio, contas individuais, autenticação adequada, autorização por função, proteção de segredos, criptografia quando pertinente, validação, logs, backups definidos, versionamento, separação de ambientes e atualização de dependências. Cliente e fornecedores também possuem responsabilidades. Credenciais devem ser enviadas por meio adequado e revogadas após uso. Não prometo segurança absoluta. Vulnerabilidades e incidentes são tratados por prioridade, impacto, escopo contratado e deveres aplicáveis. Pentest, SOC, monitoramento contínuo e resposta 24 horas exigem contratação específica.`,
      `I apply proportionate controls such as least privilege, individual accounts, appropriate authentication, role-based authorization, secret protection, encryption where relevant, validation, logging, defined backups, versioning, environment separation, and dependency updates. The client and providers also have responsibilities. Credentials should be shared through suitable means and revoked after use. I do not promise absolute security. Vulnerabilities and incidents are handled according to priority, impact, contracted scope, and applicable duties. Penetration testing, SOC services, continuous monitoring, and 24-hour response require a specific agreement.`
    ),
    chapter(
      34,
      "LGPD e proteção de dados",
      "LGPD and data protection",
      `Quando houver dados pessoais, as partes devem definir finalidades, categorias, necessidade, retenção, exclusão, acesso, segurança, terceiros e transferências internacionais. Controlador é quem decide finalidades e elementos essenciais; operador trata dados em nome do controlador; suboperadores podem integrar a cadeia conforme o caso concreto. Minha função não é presumida: depende das atividades efetivas. O cliente normalmente deve fornecer instruções lícitas e informações aos titulares quando atuar como controlador. Contrato ou DPA pode detalhar papéis, incidentes, auditoria e devolução. Esta política não substitui aviso de privacidade, DPA ou avaliação jurídica.`,
      `Where personal data is involved, the parties should define purposes, categories, necessity, retention, deletion, access, security, third parties, and international transfers. A controller decides purposes and essential means; a processor handles data on the controller's behalf; subprocessors may form part of the chain depending on the facts. My role is not presumed and depends on actual activities. The client will ordinarily provide lawful instructions and notices to individuals when acting as controller. A contract or DPA may detail roles, incidents, audits, and return of data. This policy does not replace a privacy notice, DPA, or legal assessment.`
    ),
    chapter(
      35,
      "Incidentes, vulnerabilidades e continuidade",
      "Incidents, vulnerabilities, and continuity",
      `Suspeitas de incidente, acesso indevido ou vazamento de dados devem ser comunicadas rapidamente pelo canal definido, com fatos disponíveis e preservação razoável de evidências. As partes cooperam para conter, investigar, corrigir e avaliar impacto dentro de seus papéis. Quando houver dados pessoais, cabe ao controlador avaliar deveres de comunicação, com apoio do operador conforme contrato e regulação aplicável. Nem toda vulnerabilidade é incidente, e nem todo incidente exige a mesma resposta. Planos de continuidade, recuperação, RTO, RPO e testes de desastre somente existem quando definidos e mantidos; backup sem teste de restauração não equivale a garantia de recuperação.`,
      `Suspected incidents, unauthorized access, or data breaches should be reported promptly through the defined channel with available facts and reasonable evidence preservation. The parties cooperate to contain, investigate, remediate, and assess impact within their roles. Where personal data is involved, the controller assesses notification duties with processor support as defined by contract and applicable regulation. Not every vulnerability is an incident, and not every incident requires the same response. Continuity plans, recovery, RTO, RPO, and disaster tests exist only where defined and maintained; an untested backup is not a guarantee of recovery.`
    ),
    chapter(
      36,
      "Serviços e fornecedores de terceiros",
      "Third-party services and providers",
      `Hospedagem, cloud, APIs, gateways, autenticação, e-mail, analytics, DNS, domínio, CDN, bancos e outros fornecedores operam sob seus próprios contratos, preços, limites e disponibilidade. Identifico dependências conhecidas e implemento integrações conforme documentação vigente, mas não controlo mudanças, falhas ou encerramento do serviço. O cliente deve manter contas, pagamentos e termos quando forem de sua responsabilidade. Uma indisponibilidade externa pode afetar prazo ou produção e exigir contingência, adaptação ou fornecedor alternativo. Esse trabalho adicional depende do escopo ou plano de manutenção aplicável.`,
      `Hosting, cloud, APIs, gateways, authentication, email, analytics, DNS, domains, CDNs, databases, and other providers operate under their own contracts, pricing, limits, and availability. I identify known dependencies and implement integrations according to current documentation, but do not control changes, outages, or discontinuation. The client must maintain accounts, payments, and terms where responsible. An external outage may affect schedule or production and require contingency, adaptation, or an alternative provider. Such additional work depends on the applicable scope or maintenance plan.`
    ),
    chapter(
      37,
      "Confidencialidade e NDA",
      "Confidentiality and NDAs",
      `Informação confidencial pode incluir código não público, arquitetura, credenciais, dados, documentos, preços, estratégia e segredo empresarial identificado ou razoavelmente compreendido como sigiloso. Cada parte deve limitar acesso a quem precisa conhecer e usar a informação apenas para o projeto. Não são confidenciais informações públicas sem violação, já conhecidas legitimamente, recebidas de terceiro autorizado ou desenvolvidas de forma independente. Divulgação exigida por lei ou autoridade deve observar o procedimento aplicável e, quando permitido, aviso à outra parte. Um NDA específico pode complementar ou substituir estas regras conforme seu texto.`,
      `Confidential information may include non-public code, architecture, credentials, data, documents, pricing, strategy, and trade secrets identified or reasonably understood as confidential. Each party should limit access to those who need to know and use information only for the project. Information is not confidential where it is public without breach, lawfully known, received from an authorized third party, or independently developed. Disclosure required by law or authority follows the applicable process and, where permitted, notice to the other party. A specific NDA may supplement or replace these rules according to its terms.`
    ),
    chapter(
      38,
      "Responsabilidades das partes",
      "Responsibilities of the parties",
      `Minha responsabilidade é executar o escopo com diligência técnica, seguir requisitos aprovados, comunicar riscos relevantes e corrigir desconformidades abrangidas. O cliente deve fornecer informações, acessos, materiais e validações; pagar; manter infraestrutura sob sua gestão; proteger credenciais; respeitar licenças; e controlar alterações próprias ou de terceiros. Responsabilidade por perda de dados, indisponibilidade, ataque, API externa, força maior, lucro cessante ou dano indireto depende de causa, controle, contrato e lei. Nenhuma limitação desta política exclui dolo, obrigação legal ou responsabilidade que não possa ser limitada.`,
      `My responsibility is to perform scope with technical diligence, follow approved requirements, communicate material risks, and correct covered nonconformities. The client must provide information, access, materials, and validations; pay; maintain infrastructure under its control; protect credentials; comply with licenses; and manage changes by itself or third parties. Responsibility for data loss, downtime, attacks, external APIs, force majeure, lost profits, or indirect damage depends on cause, control, contract, and law. Nothing in this policy excludes willful misconduct, legal duties, or liability that cannot lawfully be limited.`
    ),
    chapter(
      39,
      "Comunicação e registros oficiais",
      "Official communications and records",
      `Orçamentos e dúvidas de escopo usam ${contactEmails.budget}. Negociações comerciais e oportunidades institucionais usam ${contactEmails.commercial}. Pagamentos, cobranças e documentos financeiros usam ${contactEmails.finance}. O projeto pode possuir ferramenta própria para tarefas e registros. Aprovação, mudança de escopo, aceite, notificação e decisão financeira precisam ser recuperáveis e emitidos por pessoa autorizada. Mensagens informais ajudam o trabalho cotidiano, mas não alteram automaticamente contrato, preço, prazo ou licença. Em caso de conflito, busco consolidar o entendimento por escrito antes de executar.`,
      `Quotes and scope questions use ${contactEmails.budget}. Commercial negotiations and institutional opportunities use ${contactEmails.commercial}. Payments, billing, and financial documents use ${contactEmails.finance}. A project may have its own task and record system. Approval, scope changes, acceptance, notices, and financial decisions must be retrievable and issued by an authorized person. Informal messages support daily work but do not automatically amend the contract, price, schedule, or license. In case of conflict, I seek to consolidate the understanding in writing before execution.`
    ),
    chapter(
      40,
      "Clientes internacionais",
      "International clients",
      `Projetos internacionais podem exigir contrato específico para idioma, moeda, câmbio, impostos, faturamento, lei aplicável, foro, arbitragem, propriedade intelectual, exportação, sanções, proteção de dados e transferência internacional. Nenhuma legislação estrangeira é presumida como única regra para todos os casos. As partes devem identificar onde estão, onde o serviço e os dados operam e quais obrigações incidem. Traduções devem indicar versão prevalente. DPA, cláusulas de transferência e assessoria local podem ser condições do projeto. Custos bancários, retenções e tributos devem ser alocados expressamente.`,
      `International projects may require a specific contract covering language, currency, exchange rates, taxes, invoicing, governing law, venue, arbitration, intellectual property, exports, sanctions, data protection, and international transfers. No foreign law is assumed to be the single rule for every case. The parties should identify where they are located, where services and data operate, and which duties apply. Translations should identify the controlling version. A DPA, transfer clauses, and local advice may be project conditions. Banking fees, withholding, and taxes should be expressly allocated.`
    ),
    chapter(
      41,
      "Hierarquia documental e solução de divergências",
      "Document hierarchy and dispute handling",
      `Estas políticas são condições gerais públicas. O contrato individual deve estabelecer escopo, preço, prazo, entregáveis, licença, propriedade intelectual, suporte, SLA, dados, responsabilidades, cancelamento e condições específicas. Proposta, ordem de serviço, anexos, DPA e NDA podem integrar o conjunto. Condição específica expressa pode complementar ou modificar regra geral. Em divergência, primeiro verifico a hierarquia indicada no contrato e os registros aprovados. As partes devem tentar esclarecer fatos, versão, requisito e impacto antes de escalar a controvérsia, sem impedir acesso a medidas legalmente cabíveis.`,
      `These policies are public general terms. The individual contract should establish scope, price, schedule, deliverables, license, intellectual property, support, SLA, data, responsibilities, cancellation, and specific conditions. The proposal, statement of work, schedules, DPA, and NDA may form part of the set. An express specific term may supplement or modify a general rule. In a conflict, I first review the hierarchy stated in the contract and approved records. The parties should seek to clarify facts, version, requirement, and impact before escalating the dispute, without preventing access to lawful remedies.`
    ),
    chapter(
      42,
      "Revisão, vigência e validação jurídica",
      "Review, effective date, and legal validation",
      `Última atualização: 21 de setembro de 2026. A política foi revisada para reduzir ambiguidades em pagamento, aceite, garantia, propriedade intelectual, white label, segurança, dados, terceiros, cancelamento e responsabilidade. Ela não é contrato universal nem parecer jurídico. Cláusulas sobre reembolso, penalidade, rescisão, aceite tácito, limitação de responsabilidade, cessão, licença, foro, arbitragem, consumidores, transferência internacional, DPA e NDA precisam ser adaptadas ao caso e validadas por advogado quando relevantes. Atualizações públicas não alteram retroativamente contratos já celebrados, salvo acordo ou exigência legal.`,
      `Last updated: September 21, 2026. This policy was reviewed to reduce ambiguity around payment, acceptance, warranty, intellectual property, white label, security, data, third parties, cancellation, and liability. It is not a universal contract or legal opinion. Clauses on refunds, penalties, termination, deemed acceptance, liability limits, assignment, licensing, venue, arbitration, consumers, international transfers, DPAs, and NDAs must be adapted to the case and reviewed by counsel where relevant. Public updates do not retroactively amend signed contracts except by agreement or legal requirement.`
    ),
  ],
};
