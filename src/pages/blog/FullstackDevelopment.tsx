import BlogPost from "@/components/ui/BlogPost";
import BlogSection from "@/components/ui/BlogSection";
import CodeTerminal from "@/components/ui/CodeTerminal";
import TechList from "@/components/ui/TechList";
import { useTheme } from "@/contexts/ThemeContext";
import { Code, Database, Globe, Layers, Rocket, Shield } from "lucide-react";

const FullstackDevelopment = () => {
  const { language } = useTheme();
  
  return (
    <BlogPost
      id="fullstack-development"
      title={language === 'pt' ? "Desenvolvimento Full Stack: Tecnologias e Práticas" : "Full Stack Development: Technologies and Practices"}
      date={language === 'pt' ? "25 de Junho, 2024" : "June 25, 2024"}
      tags={["Full Stack", "React", "Node.js", "TypeScript"]}
      image="https://i.ibb.co/Kzsf63Hx/971.jpg"
      content={
        language === 'pt' ? (
        <>
          <BlogSection 
            title="O que é Desenvolvimento Full Stack?" 
            icon={<Layers className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              O desenvolvimento full stack representa a capacidade de trabalhar tanto no frontend quanto no backend 
              de uma aplicação web. Um desenvolvedor full stack possui conhecimentos abrangentes que vão desde a 
              interface do usuário até a arquitetura do servidor, banco de dados e infraestrutura.
            </p>
            
            <TechList 
              title="Responsabilidades de um Full Stack Developer"
              items={[
                "Desenvolvimento de interfaces de usuário responsivas",
                "Criação de APIs e serviços backend",
                "Modelagem e gestão de banco de dados",
                "Configuração de servidores e deploy",
                "Integração de sistemas e terceiros"
              ]}
              variant="features"
            />
          </BlogSection>

          <BlogSection 
            title="Stack Tecnológico Moderno" 
            icon={<Code className="w-5 h-5 text-foreground" />}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Frontend</h4>
                <TechList 
                  title="Tecnologias Essenciais"
                  items={[
                    "React.js ou Vue.js para interfaces dinâmicas",
                    "TypeScript para tipagem estática",
                    "Tailwind CSS para estilização",
                    "Next.js para aplicações SSR/SSG"
                  ]}
                  variant="benefits"
                />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Backend</h4>
                <TechList 
                  title="Tecnologias Essenciais"
                  items={[
                    "Node.js com Express ou Fastify",
                    "Python com Django ou FastAPI",
                    "PostgreSQL ou MongoDB",
                    "Redis para cache e sessões"
                  ]}
                  variant="features"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Criando uma API RESTful" 
            icon={<Database className="w-5 h-5 text-foreground" />}
            variant="code"
          >
            <p>Vamos criar uma API simples para gerenciar usuários usando Node.js e Express:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Configuração inicial</h4>
                <CodeTerminal 
                  code="npm init -y && npm install express cors helmet morgan bcryptjs jsonwebtoken"
                  language="bash"
                  title="Instalação de dependências"
                  showOutput={true}
                  output="✓ Packages installed successfully"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Servidor Express básico</h4>
                <CodeTerminal 
                  code={`// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Rotas
app.get('/api/users', (req, res) => {
  res.json({ message: 'Lista de usuários' });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: 'Usuário criado', user: { name, email } });
});

app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});`}
                  language="javascript"
                  title="server.js"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Executando o servidor</h4>
                <CodeTerminal 
                  code="node server.js"
                  language="bash"
                  title="Iniciando servidor"
                  showOutput={true}
                  output="Servidor rodando na porta 3000"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Frontend com React" 
            icon={<Globe className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <p>Agora vamos criar o frontend para consumir nossa API:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Criando projeto React</h4>
                <CodeTerminal 
                  code="npx create-react-app frontend && cd frontend && npm install axios"
                  language="bash"
                  title="Setup React"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Componente de usuários</h4>
                <CodeTerminal 
                  code={`// UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users', newUser);
      setNewUser({ name: '', email: '' });
      fetchUsers();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Usuários</h1>
      
      <form onSubmit={createUser} className="mb-6">
        <input
          type="text"
          placeholder="Nome"
          value={newUser.name}
          onChange={(e) => setNewUser({...newUser, name: e.target.value})}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-primary text-primary-foreground p-2">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default UserList;`}
                  language="jsx"
                  title="UserList.jsx"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Deploy e Produção" 
            icon={<Rocket className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>Para colocar sua aplicação em produção, siga estas etapas:</p>
            
            <TechList 
              title="Checklist de Deploy"
              items={[
                "Configure variáveis de ambiente",
                "Implemente HTTPS com certificados SSL",
                "Configure monitoramento e logs",
                "Setup de backup do banco de dados",
                "Teste de carga e performance"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Deploy no Heroku:</h4>
              <CodeTerminal 
                code={`# Login no Heroku
heroku login

# Criar aplicação
heroku create minha-app-fullstack

# Deploy
git push heroku main

# Ver logs
heroku logs --tail`}
                language="bash"
                title="Deploy Heroku"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Segurança e Boas Práticas" 
            icon={<Shield className="w-5 h-5 text-accent-blue" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TechList 
                title="Segurança Backend"
                items={[
                  "Validação rigorosa de inputs",
                  "Rate limiting para APIs",
                  "Autenticação JWT segura",
                  "Criptografia de senhas com bcrypt"
                ]}
                variant="requirements"
              />
              
              <TechList 
                title="Segurança Frontend"
                items={[
                  "Sanitização de dados do usuário",
                  "Content Security Policy (CSP)",
                  "Proteção contra XSS",
                  "Validação de formulários"
                ]}
                variant="features"
              />
            </div>
          </BlogSection>

          <BlogSection title="Conclusão" variant="highlight">
            <p className="text-lg">
              O desenvolvimento full stack é uma jornada contínua de aprendizado. Comece com 
              projetos simples e vá evoluindo gradualmente, sempre priorizando boas práticas 
              de código, segurança e experiência do usuário.
            </p>
            
            <TechList 
              title="Próximos Passos"
              items={[
                "Aprender sobre arquitetura de microsserviços",
                "Implementar testes automatizados",
                "Estudar DevOps e CI/CD",
                "Explorar tecnologias de containerização"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        ) : (
        <>
          <BlogSection 
            title="What is Full Stack Development?" 
            icon={<Layers className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              Full stack development represents the ability to work on both frontend and backend 
              of a web application. A full stack developer possesses comprehensive knowledge ranging 
              from user interface to server architecture, databases, and infrastructure.
            </p>
            
            <TechList 
              title="Full Stack Developer Responsibilities"
              items={[
                "Developing responsive user interfaces",
                "Creating APIs and backend services",
                "Database modeling and management",
                "Server configuration and deployment",
                "System and third-party integrations"
              ]}
              variant="features"
            />
          </BlogSection>

          <BlogSection 
            title="Modern Technology Stack" 
            icon={<Code className="w-5 h-5 text-accent-blue" />}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent-blue">Frontend</h4>
                <TechList 
                  title="Essential Technologies"
                  items={[
                    "React.js or Vue.js for dynamic interfaces",
                    "TypeScript for static typing",
                    "Tailwind CSS for styling",
                    "Next.js for SSR/SSG applications"
                  ]}
                  variant="benefits"
                />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent-blue">Backend</h4>
                <TechList 
                  title="Essential Technologies"
                  items={[
                    "Node.js with Express or Fastify",
                    "Python with Django or FastAPI",
                    "PostgreSQL or MongoDB",
                    "Redis for caching and sessions"
                  ]}
                  variant="features"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Creating a RESTful API" 
            icon={<Database className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <p>Let's create a simple API for managing users using Node.js and Express:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Initial setup</h4>
                <CodeTerminal 
                  code="npm init -y && npm install express cors helmet morgan bcryptjs jsonwebtoken"
                  language="bash"
                  title="Installing dependencies"
                  showOutput={true}
                  output="✓ Packages installed successfully"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Basic Express server</h4>
                <CodeTerminal 
                  code={`// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/api/users', (req, res) => {
  res.json({ message: 'User list' });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: 'User created', user: { name, email } });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
                  language="javascript"
                  title="server.js"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Running the server</h4>
                <CodeTerminal 
                  code="node server.js"
                  language="bash"
                  title="Starting server"
                  showOutput={true}
                  output="Server running on port 3000"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Frontend with React" 
            icon={<Globe className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <p>Now let's create the frontend to consume our API:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Creating React project</h4>
                <CodeTerminal 
                  code="npx create-react-app frontend && cd frontend && npm install axios"
                  language="bash"
                  title="React Setup"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. User component</h4>
                <CodeTerminal 
                  code={`// UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users', newUser);
      setNewUser({ name: '', email: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      
      <form onSubmit={createUser} className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({...newUser, name: e.target.value})}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserList;`}
                  language="jsx"
                  title="UserList.jsx"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Deploy and Production" 
            icon={<Rocket className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>To put your application in production, follow these steps:</p>
            
            <TechList 
              title="Deployment Checklist"
              items={[
                "Configure environment variables",
                "Implement HTTPS with SSL certificates",
                "Setup monitoring and logging",
                "Database backup configuration",
                "Load testing and performance"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Deploy on Heroku:</h4>
              <CodeTerminal 
                code={`# Login to Heroku
heroku login

# Create application
heroku create my-fullstack-app

# Deploy
git push heroku main

# View logs
heroku logs --tail`}
                language="bash"
                title="Heroku Deploy"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Security and Best Practices" 
            icon={<Shield className="w-5 h-5 text-accent-blue" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TechList 
                title="Backend Security"
                items={[
                  "Strict input validation",
                  "Rate limiting for APIs",
                  "Secure JWT authentication",
                  "Password encryption with bcrypt"
                ]}
                variant="requirements"
              />
              
              <TechList 
                title="Frontend Security"
                items={[
                  "User data sanitization",
                  "Content Security Policy (CSP)",
                  "XSS protection",
                  "Form validation"
                ]}
                variant="features"
              />
            </div>
          </BlogSection>

          <BlogSection title="Conclusion" variant="highlight">
            <p className="text-lg">
              Full stack development is a continuous learning journey. Start with simple projects 
              and evolve gradually, always prioritizing good coding practices, security, and user experience.
            </p>
            
            <TechList 
              title="Next Steps"
              items={[
                "Learn about microservices architecture",
                "Implement automated testing",
                "Study DevOps and CI/CD",
                "Explore containerization technologies"
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

export default FullstackDevelopment;