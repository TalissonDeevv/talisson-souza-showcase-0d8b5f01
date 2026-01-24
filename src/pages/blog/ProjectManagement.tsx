import BlogPost from "@/components/ui/BlogPost";
import BlogSection from "@/components/ui/BlogSection";
import CodeTerminal from "@/components/ui/CodeTerminal";
import TechList from "@/components/ui/TechList";
import { useTheme } from "@/contexts/ThemeContext";
import { Users, Target, Zap, Settings } from "lucide-react";

const ProjectManagement = () => {
  const { language } = useTheme();
  
  return (
    <BlogPost
      id="project-management"
      title={language === 'pt' ? "Gestão de Projetos Tecnológicos: Metodologias Ágeis" : "Technology Project Management: Agile Methodologies"}
      date={language === 'pt' ? "29 de Outubro, 2024" : "October 29, 2024"}
      tags={["Gestão", "Ágil", "Scrum", "Projetos"]}
      image="https://i.ibb.co/DPd6rDMn/still-life-business-roles-with-various-mechanism-pieces.jpg"
      content={
        language === 'pt' ? (
        <>
          <BlogSection 
            title="A Revolução Ágil na Gestão de Projetos" 
            icon={<Target className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              A gestão de projetos tecnológicos evoluiu significativamente nas últimas duas décadas, 
              movendo-se de abordagens tradicionais e rígidas para metodologias mais adaptativas e responsivas. 
              Esta mudança não é apenas uma tendência passageira, mas uma resposta necessária à crescente 
              complexidade, velocidade e incerteza do cenário tecnológico atual.
            </p>
            
            <TechList 
              title="Valores do Manifesto Ágil"
              items={[
                "Indivíduos e interações mais que processos e ferramentas",
                "Software funcionando mais que documentação abrangente",
                "Colaboração com cliente mais que negociação de contratos",
                "Responder a mudanças mais que seguir um plano"
              ]}
              variant="benefits"
            />
          </BlogSection>

          <BlogSection 
            title="Scrum: Framework Ágil Dominante" 
            icon={<Users className="w-5 h-5 text-foreground" />}
          >
            <p>O Scrum tornou-se o framework ágil mais popular, adotado por empresas de todos os tamanhos ao redor do mundo.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Papéis</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Product Owner</li>
                  <li>• Scrum Master</li>
                  <li>• Time de Desenvolvimento</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Artefatos</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Product Backlog</li>
                  <li>• Sprint Backlog</li>
                  <li>• Incremento</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Eventos</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Sprint Planning</li>
                  <li>• Daily Scrum</li>
                  <li>• Sprint Review</li>
                  <li>• Sprint Retrospective</li>
                </ul>
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Implementação para Equipes Distribuídas" 
            icon={<Settings className="w-5 h-5 text-foreground" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">Ferramentas e Configuração</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">1. Stack de ferramentas essencial:</p>
                <CodeTerminal 
                  code={`# Gestão de Projetos
- Jira / Azure DevOps / ClickUp

# Comunicação
- Slack / Microsoft Teams
- Zoom / Google Meet

# Colaboração
- Miro / MURAL
- Confluence / Notion

# Desenvolvimento
- Git / GitHub / GitLab
- Docker / Kubernetes
- CI/CD Pipelines`}
                  language="yaml"
                  title="Ferramentas para Equipes Distribuídas"
                />
              </div>

              <div>
                <p className="mb-2">2. Configuração de Sprint automatizada:</p>
                <CodeTerminal 
                  code={`// Automação de criação de Sprint no Jira
const createSprint = async (projectKey, sprintName, startDate, endDate) => {
  const sprintData = {
    name: sprintName,
    startDate: startDate,
    endDate: endDate,
    originBoardId: await getBoardId(projectKey),
    goal: "Entregar incremento de valor com qualidade"
  };
  
  const response = await jiraAPI.post('/sprint', sprintData);
  
  // Adicionar itens do backlog automaticamente
  await addBacklogItemsToSprint(response.data.id, projectKey);
  
  return response.data;
};`}
                  language="javascript"
                  title="Automação Sprint"
                />
              </div>

              <div>
                <p className="mb-2">3. Configuração de Daily Scrum assíncrona:</p>
                <CodeTerminal 
                  code={`// Bot para Daily Scrum no Slack
const dailyStandupBot = {
  schedule: "0 9 * * 1-5", // Segunda a sexta, 9h
  
  async sendDailyQuestions(channel) {
    const questions = [
      "O que você fez ontem?",
      "O que vai fazer hoje?", 
      "Há algum impedimento?"
    ];
    
    await slack.postMessage({
      channel,
      text: "Bom dia time! Hora do Daily Standup 🌟",
      blocks: this.createQuestionsBlocks(questions)
    });
  }
};`}
                  language="javascript"
                  title="Daily Assíncrona"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Kanban: Fluxo Contínuo" 
            icon={<Zap className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>O Kanban oferece uma alternativa focada na visualização do fluxo de trabalho e otimização contínua.</p>
            
            <TechList 
              title="Princípios Fundamentais do Kanban"
              items={[
                "Visualize o fluxo de trabalho",
                "Limite o trabalho em progresso (WIP)",
                "Gerencie o fluxo",
                "Torne as políticas explícitas",
                "Implementar loops de feedback",
                "Melhorar colaborativamente"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <h5 className="font-semibold mb-2">Métricas Importantes:</h5>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Lead Time:</strong> Tempo total do pedido à entrega</li>
                <li><strong>Cycle Time:</strong> Tempo de trabalho ativo</li>
                <li><strong>Throughput:</strong> Itens concluídos por período</li>
                <li><strong>Cumulative Flow:</strong> Visualização do trabalho ao longo do tempo</li>
              </ul>
            </div>
          </BlogSection>

          <BlogSection 
            title="Scrumban: Híbrido Eficiente" 
            icon={<Target className="w-5 h-5 text-accent-blue" />}
          >
            <p>Combina a estrutura do Scrum com a flexibilidade do Kanban para equipes distribuídas.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <TechList 
                title="Do Scrum"
                items={[
                  "Sprints timeboxed",
                  "Planning e Retrospectivas",
                  "Papéis definidos",
                  "Rituais de sincronização"
                ]}
                variant="features"
              />
              
              <TechList 
                title="Do Kanban"
                items={[
                  "Visualização do fluxo",
                  "Limites WIP",
                  "Métricas de fluxo",
                  "Melhoria contínua"
                ]}
                variant="benefits"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Práticas Avançadas" 
            icon={<Users className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">CI/CD para Equipes Ágeis</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">Pipeline automatizado com qualidade:</p>
                <CodeTerminal 
                  code={`# .github/workflows/agile-pipeline.yml
name: Agile Development Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run Tests
        run: |
          npm test -- --coverage
          npm run test:e2e
          
      - name: Code Quality
        run: |
          npm run lint
          npm run security-audit
          
      - name: Deploy to Staging
        if: github.ref == 'refs/heads/develop'
        run: npm run deploy:staging`}
                  language="yaml"
                  title="Pipeline Ágil"
                />
              </div>

              <div>
                <p className="mb-2">Feature flags para deploys seguros:</p>
                <CodeTerminal 
                  code={`// Feature flag system
const FeatureFlags = {
  NEW_CHECKOUT: process.env.FEATURE_NEW_CHECKOUT === 'true',
  BETA_DASHBOARD: process.env.FEATURE_BETA_DASHBOARD === 'true',
  
  isEnabled(flag, userId = null) {
    if (userId && this.isBetaUser(userId)) {
      return true; // Beta users get all features
    }
    return this[flag] || false;
  }
};

// Uso no código
if (FeatureFlags.isEnabled('NEW_CHECKOUT')) {
  return <NewCheckoutComponent />;
}
return <LegacyCheckoutComponent />;`}
                  language="javascript"
                  title="Feature Flags"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection title="Conclusão" variant="highlight">
            <p className="text-lg">
              As metodologias ágeis transformaram a gestão de projetos tecnológicos, especialmente para 
              equipes distribuídas. A combinação de frameworks como Scrum e Kanban, junto com ferramentas 
              modernas de colaboração, permite entregar valor de forma contínua e eficiente.
            </p>
            
            <TechList 
              title="Próximos Passos"
              items={[
                "Avaliar maturidade ágil atual da equipe",
                "Implementar ferramentas de colaboração adequadas",
                "Treinar equipe em práticas ágeis",
                "Estabelecer métricas e KPIs relevantes",
                "Promover cultura de melhoria contínua"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        ) : (
        <>
          <BlogSection 
            title="The Agile Revolution in Project Management" 
            icon={<Target className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              Technology project management has evolved significantly over the past two decades, 
              moving from traditional and rigid approaches to more adaptive and responsive methodologies. 
              This change is not just a passing trend, but a necessary response to the growing 
              complexity, speed, and uncertainty that characterize today's technological landscape.
            </p>
            
            <TechList 
              title="Agile Manifesto Values"
              items={[
                "Individuals and interactions over processes and tools",
                "Working software over comprehensive documentation",
                "Customer collaboration over contract negotiation",
                "Responding to change over following a plan"
              ]}
              variant="benefits"
            />
          </BlogSection>

          <BlogSection 
            title="Scrum: Dominant Agile Framework" 
            icon={<Users className="w-5 h-5 text-accent-blue" />}
          >
            <p>Scrum has become the most popular agile framework, adopted by companies of all sizes around the world.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Roles</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Product Owner</li>
                  <li>• Scrum Master</li>
                  <li>• Development Team</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Artifacts</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Product Backlog</li>
                  <li>• Sprint Backlog</li>
                  <li>• Increment</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Events</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Sprint Planning</li>
                  <li>• Daily Scrum</li>
                  <li>• Sprint Review</li>
                  <li>• Sprint Retrospective</li>
                </ul>
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Implementation for Distributed Teams" 
            icon={<Settings className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">Tools and Configuration</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">1. Essential tool stack:</p>
                <CodeTerminal 
                  code={`# Project Management
- Jira / Azure DevOps / ClickUp

# Communication
- Slack / Microsoft Teams
- Zoom / Google Meet

# Collaboration
- Miro / MURAL
- Confluence / Notion

# Development
- Git / GitHub / GitLab
- Docker / Kubernetes
- CI/CD Pipelines`}
                  language="yaml"
                  title="Tools for Distributed Teams"
                />
              </div>

              <div>
                <p className="mb-2">2. Automated Sprint configuration:</p>
                <CodeTerminal 
                  code={`// Automated Sprint creation in Jira
const createSprint = async (projectKey, sprintName, startDate, endDate) => {
  const sprintData = {
    name: sprintName,
    startDate: startDate,
    endDate: endDate,
    originBoardId: await getBoardId(projectKey),
    goal: "Deliver quality value increment"
  };
  
  const response = await jiraAPI.post('/sprint', sprintData);
  
  // Automatically add backlog items
  await addBacklogItemsToSprint(response.data.id, projectKey);
  
  return response.data;
};`}
                  language="javascript"
                  title="Sprint Automation"
                />
              </div>

              <div>
                <p className="mb-2">3. Asynchronous Daily Scrum setup:</p>
                <CodeTerminal 
                  code={`// Daily Scrum bot for Slack
const dailyStandupBot = {
  schedule: "0 9 * * 1-5", // Monday to Friday, 9am
  
  async sendDailyQuestions(channel) {
    const questions = [
      "What did you do yesterday?",
      "What will you do today?", 
      "Are there any blockers?"
    ];
    
    await slack.postMessage({
      channel,
      text: "Good morning team! Daily Standup time 🌟",
      blocks: this.createQuestionsBlocks(questions)
    });
  }
};`}
                  language="javascript"
                  title="Async Daily"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Kanban: Continuous Flow" 
            icon={<Zap className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>Kanban offers an alternative focused on workflow visualization and continuous optimization.</p>
            
            <TechList 
              title="Fundamental Kanban Principles"
              items={[
                "Visualize the workflow",
                "Limit work in progress (WIP)",
                "Manage flow",
                "Make policies explicit",
                "Implement feedback loops",
                "Improve collaboratively"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <h5 className="font-semibold mb-2">Important Metrics:</h5>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Lead Time:</strong> Total time from request to delivery</li>
                <li><strong>Cycle Time:</strong> Active work time</li>
                <li><strong>Throughput:</strong> Items completed per period</li>
                <li><strong>Cumulative Flow:</strong> Work visualization over time</li>
              </ul>
            </div>
          </BlogSection>

          <BlogSection 
            title="Scrumban: Efficient Hybrid" 
            icon={<Target className="w-5 h-5 text-accent-blue" />}
          >
            <p>Combines Scrum structure with Kanban flexibility for distributed teams.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <TechList 
                title="From Scrum"
                items={[
                  "Timeboxed sprints",
                  "Planning and Retrospectives",
                  "Defined roles",
                  "Synchronization rituals"
                ]}
                variant="features"
              />
              
              <TechList 
                title="From Kanban"
                items={[
                  "Flow visualization",
                  "WIP limits",
                  "Flow metrics",
                  "Continuous improvement"
                ]}
                variant="benefits"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Advanced Practices" 
            icon={<Users className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">CI/CD for Agile Teams</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">Automated pipeline with quality:</p>
                <CodeTerminal 
                  code={`# .github/workflows/agile-pipeline.yml
name: Agile Development Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run Tests
        run: |
          npm test -- --coverage
          npm run test:e2e
          
      - name: Code Quality
        run: |
          npm run lint
          npm run security-audit
          
      - name: Deploy to Staging
        if: github.ref == 'refs/heads/develop'
        run: npm run deploy:staging`}
                  language="yaml"
                  title="Agile Pipeline"
                />
              </div>

              <div>
                <p className="mb-2">Feature flags for safe deployments:</p>
                <CodeTerminal 
                  code={`// Feature flag system
const FeatureFlags = {
  NEW_CHECKOUT: process.env.FEATURE_NEW_CHECKOUT === 'true',
  BETA_DASHBOARD: process.env.FEATURE_BETA_DASHBOARD === 'true',
  
  isEnabled(flag, userId = null) {
    if (userId && this.isBetaUser(userId)) {
      return true; // Beta users get all features
    }
    return this[flag] || false;
  }
};

// Usage in code
if (FeatureFlags.isEnabled('NEW_CHECKOUT')) {
  return <NewCheckoutComponent />;
}
return <LegacyCheckoutComponent />;`}
                  language="javascript"
                  title="Feature Flags"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection title="Conclusion" variant="highlight">
            <p className="text-lg">
              Agile methodologies have transformed technology project management, especially for 
              distributed teams. The combination of frameworks like Scrum and Kanban, along with 
              modern collaboration tools, enables continuous and efficient value delivery.
            </p>
            
            <TechList 
              title="Next Steps"
              items={[
                "Assess current team agile maturity",
                "Implement appropriate collaboration tools",
                "Train team in agile practices",
                "Establish relevant metrics and KPIs",
                "Promote continuous improvement culture"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        )
      }
    />
  );
};

export default ProjectManagement;