
import BlogPost from "@/components/ui/BlogPost";
import BlogSection from "@/components/ui/BlogSection";
import CodeTerminal from "@/components/ui/CodeTerminal";
import TechList from "@/components/ui/TechList";
import { useTheme } from "@/contexts/ThemeContext";
import { Cloud, Database, Shield, Zap, Wrench } from "lucide-react";

const CloudSolutions = () => {
  const { language } = useTheme();
  
  return (
    <BlogPost
      id="cloud-solutions"
      title={language === 'pt' ? "Soluções em Nuvem para Empresas de Todos os Tamanhos" : "Cloud Solutions for Businesses of All Sizes"}
      date={language === 'pt' ? "12 de Julho, 2024" : "July 12, 2024"}
      tags={["Cloud", "AWS", "Azure", "GCP"]}
      image="https://i.ibb.co/sv5LjMHr/website-hosting-concept-with-screen.jpg"
      content={
        language === 'pt' ? (
        <>
          <BlogSection 
            title="Por que Migrar para a Nuvem?" 
            icon={<Cloud className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              A migração para soluções em nuvem não é apenas uma tendência, mas uma necessidade estratégica 
              para empresas que buscam competitividade no mercado atual. Com a crescente demanda por 
              escalabilidade, flexibilidade e redução de custos operacionais, a nuvem oferece soluções 
              que transformam a forma como as organizações gerenciam sua infraestrutura tecnológica.
            </p>
            
            <TechList 
              title="Benefícios Principais"
              items={[
                "Redução de custos operacionais em até 40%",
                "Escalabilidade automática baseada na demanda",
                "Acesso global com baixa latência",
                "Backup e recuperação automatizados",
                "Atualizações de segurança contínuas"
              ]}
              variant="benefits"
            />
          </BlogSection>

          <BlogSection 
            title="Principais Provedores de Nuvem" 
            icon={<Database className="w-5 h-5 text-foreground" />}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Amazon AWS</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• EC2, S3, Lambda</li>
                  <li>• Marketplace líder</li>
                  <li>• Maior variedade de serviços</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Google Cloud</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Kubernetes Engine</li>
                  <li>• BigQuery, AI/ML</li>
                  <li>• Preços competitivos</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Microsoft Azure</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Integração com Office</li>
                  <li>• Azure DevOps</li>
                  <li>• Híbrido e multi-cloud</li>
                </ul>
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Implementação Prática" 
            icon={<Wrench className="w-5 h-5 text-foreground" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">Configurando uma aplicação na AWS</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">1. Configurando AWS CLI:</p>
                <CodeTerminal 
                  code="aws configure"
                  language="bash"
                  title="AWS CLI Setup"
                  showOutput={true}
                  output="AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: json"
                />
              </div>

              <div>
                <p className="mb-2">2. Criando uma instância EC2:</p>
                <CodeTerminal 
                  code={`# Criar instância EC2
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --count 1 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-groups my-security-group`}
                  language="bash"
                  title="Criando EC2"
                />
              </div>

              <div>
                <p className="mb-2">3. Deploy com Docker:</p>
                <CodeTerminal 
                  code={`# Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}
                  language="dockerfile"
                  title="Dockerfile"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Segurança na Nuvem" 
            icon={<Shield className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p>A segurança é fundamental em qualquer migração para nuvem. Implementar as melhores práticas desde o início é essencial:</p>
            
            <TechList 
              title="Práticas de Segurança Essenciais"
              items={[
                "Autenticação multi-fator (MFA) obrigatória",
                "Criptografia end-to-end para dados sensíveis",
                "Monitoramento contínuo com logs detalhados",
                "Princípio de menor privilégio (IAM)",
                "Backup automatizado com versionamento"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <p className="mb-2">Exemplo de política IAM restritiva:</p>
              <CodeTerminal 
                code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-app-bucket/*"
    }
  ]
}`}
                language="json"
                title="IAM Policy"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Otimização de Custos" 
            icon={<Zap className="w-5 h-5 text-foreground" />}
          >
            <p>Gerenciar custos na nuvem é crucial para o sucesso do projeto:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <TechList 
                title="Estratégias de Economia"
                items={[
                  "Instâncias reservadas para cargas previsíveis",
                  "Auto-scaling baseado em métricas",
                  "Lifecycle policies para dados arquivados",
                  "Spot instances para processamento em lote"
                ]}
                variant="features"
              />
              
              <TechList 
                title="Ferramentas de Monitoramento"
                items={[
                  "AWS Cost Explorer",
                  "Google Cloud Billing",
                  "Azure Cost Management",
                  "Cloudflare Analytics"
                ]}
                variant="benefits"
              />
            </div>

            <div className="mt-4">
              <p className="mb-2">Script para monitoramento de custos:</p>
              <CodeTerminal 
                code={`#!/bin/bash
# Verificar custos AWS do mês atual
aws ce get-cost-and-usage \\
  --time-period Start=$(date +%Y-%m-01),End=$(date +%Y-%m-%d) \\
  --granularity MONTHLY \\
  --metrics BlendedCost \\
  --group-by Type=DIMENSION,Key=SERVICE`}
                language="bash"
                title="Cost Monitoring Script"
              />
            </div>
          </BlogSection>

          <BlogSection title="Conclusão" variant="highlight">
            <p className="text-lg">
              A migração para soluções em nuvem é um investimento estratégico que oferece retorno 
              significativo quando bem planejada e executada. Com as práticas apresentadas neste guia, 
              sua empresa estará preparada para aproveitar todos os benefícios que a nuvem oferece.
            </p>
            
            <TechList 
              title="Próximos Passos Recomendados"
              items={[
                "Realizar audit completo da infraestrutura atual",
                "Definir estratégia de migração por fases",
                "Treinar equipe em tecnologias cloud",
                "Implementar monitoramento e alertas",
                "Estabelecer políticas de governança"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        ) : (
        <>
          <BlogSection 
            title="Why Migrate to the Cloud?" 
            icon={<Cloud className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              Migrating to cloud solutions is not just a trend, but a strategic necessity for companies 
              seeking competitiveness in today's market. With growing demand for scalability, flexibility, 
              and operational cost reduction, the cloud offers solutions that transform how organizations 
              manage their technological infrastructure.
            </p>
            
            <TechList 
              title="Key Benefits"
              items={[
                "Operational cost reduction up to 40%",
                "Automatic scalability based on demand",
                "Global access with low latency",
                "Automated backup and recovery",
                "Continuous security updates"
              ]}
              variant="benefits"
            />
          </BlogSection>

          <BlogSection 
            title="Key Cloud Providers" 
            icon={<Database className="w-5 h-5 text-foreground" />}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Amazon AWS</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• EC2, S3, Lambda</li>
                  <li>• Market leader</li>
                  <li>• Largest variety of services</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Google Cloud</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Kubernetes Engine</li>
                  <li>• BigQuery, AI/ML</li>
                  <li>• Competitive pricing</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Microsoft Azure</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Office integration</li>
                  <li>• Azure DevOps</li>
                  <li>• Hybrid and multi-cloud</li>
                </ul>
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Practical Implementation" 
            icon={<Wrench className="w-5 h-5 text-foreground" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">Setting up an AWS application</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">1. Configuring AWS CLI:</p>
                <CodeTerminal 
                  code="aws configure"
                  language="bash"
                  title="AWS CLI Setup"
                  showOutput={true}
                  output="AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: json"
                />
              </div>

              <div>
                <p className="mb-2">2. Creating an EC2 instance:</p>
                <CodeTerminal 
                  code={`# Create EC2 instance
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --count 1 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-groups my-security-group`}
                  language="bash"
                  title="Creating EC2"
                />
              </div>

              <div>
                <p className="mb-2">3. Deploy with Docker:</p>
                <CodeTerminal 
                  code={`# Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}
                  language="dockerfile"
                  title="Dockerfile"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Cloud Security" 
            icon={<Shield className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p>Security is fundamental in any cloud migration. Implementing best practices from the start is essential:</p>
            
            <TechList 
              title="Essential Security Practices"
              items={[
                "Mandatory multi-factor authentication (MFA)",
                "End-to-end encryption for sensitive data",
                "Continuous monitoring with detailed logs",
                "Principle of least privilege (IAM)",
                "Automated backup with versioning"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <p className="mb-2">Example of restrictive IAM policy:</p>
              <CodeTerminal 
                code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-app-bucket/*"
    }
  ]
}`}
                language="json"
                title="IAM Policy"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Cost Optimization" 
            icon={<Zap className="w-5 h-5 text-foreground" />}
          >
            <p>Managing cloud costs is crucial for project success:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <TechList 
                title="Cost-Saving Strategies"
                items={[
                  "Reserved instances for predictable workloads",
                  "Auto-scaling based on metrics",
                  "Lifecycle policies for archived data",
                  "Spot instances for batch processing"
                ]}
                variant="features"
              />
              
              <TechList 
                title="Monitoring Tools"
                items={[
                  "AWS Cost Explorer",
                  "Google Cloud Billing",
                  "Azure Cost Management",
                  "Cloudflare Analytics"
                ]}
                variant="benefits"
              />
            </div>

            <div className="mt-4">
              <p className="mb-2">Cost monitoring script:</p>
              <CodeTerminal 
                code={`#!/bin/bash
# Check current month AWS costs
aws ce get-cost-and-usage \\
  --time-period Start=$(date +%Y-%m-01),End=$(date +%Y-%m-%d) \\
  --granularity MONTHLY \\
  --metrics BlendedCost \\
  --group-by Type=DIMENSION,Key=SERVICE`}
                language="bash"
                title="Cost Monitoring Script"
              />
            </div>
          </BlogSection>

          <BlogSection title="Conclusion" variant="highlight">
            <p className="text-lg">
              Migrating to cloud solutions is a strategic investment that offers significant returns 
              when well planned and executed. With the practices presented in this guide, your company 
              will be prepared to leverage all the benefits the cloud offers.
            </p>
            
            <TechList 
              title="Recommended Next Steps"
              items={[
                "Conduct complete audit of current infrastructure",
                "Define phased migration strategy",
                "Train team in cloud technologies",
                "Implement monitoring and alerts",
                "Establish governance policies"
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

export default CloudSolutions;
