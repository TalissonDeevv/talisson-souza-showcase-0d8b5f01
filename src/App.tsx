import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import HowIWork from "./pages/HowIWork";
import TechDecisions from "./pages/TechDecisions";
import Accessibility from "./pages/Accessibility";
import BotDiscord from "./pages/blog/BotDiscord";
import FullstackDevelopment from "./pages/blog/FullstackDevelopment";
import CloudSolutions from "./pages/blog/CloudSolutions";
import WebAutomation from "./pages/blog/WebAutomation";
import ProjectManagement from "./pages/blog/ProjectManagement";
import ProjectDetail from "./pages/ProjectDetail";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import DiscordBotsGuide from "./pages/articles/DiscordBotsGuide";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        {/* ===== PT-BR Routes (root) ===== */}
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/projetos/:id" element={<ProjectDetail />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
        <Route path="/carreira" element={<Career />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/como-trabalho" element={<HowIWork />} />
        <Route path="/decisoes-tecnicas" element={<TechDecisions />} />
        <Route path="/acessibilidade" element={<Accessibility />} />
        <Route path="/livro" element={<Book />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigos/bots-discord" element={<DiscordBotsGuide />} />
        
        {/* Blog posts PT */}
        <Route path="/blog/bot-discord" element={<BotDiscord />} />
        <Route path="/blog/desenvolvimento-fullstack" element={<FullstackDevelopment />} />
        <Route path="/blog/solucoes-cloud" element={<CloudSolutions />} />
        <Route path="/blog/automacao-web" element={<WebAutomation />} />
        <Route path="/blog/gestao-projetos" element={<ProjectManagement />} />

        {/* ===== EN-US Routes (/en-us prefix) ===== */}
        <Route path="/en-us" element={<Index />} />
        <Route path="/en-us/about" element={<About />} />
        <Route path="/en-us/projects" element={<Projects />} />
        <Route path="/en-us/projects/:id" element={<ProjectDetail />} />
        <Route path="/en-us/services" element={<Services />} />
        <Route path="/en-us/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/en-us/career" element={<Career />} />
        <Route path="/en-us/contact" element={<Contact />} />
        <Route path="/en-us/how-i-work" element={<HowIWork />} />
        <Route path="/en-us/tech-decisions" element={<TechDecisions />} />
        <Route path="/en-us/accessibility" element={<Accessibility />} />
        <Route path="/en-us/book" element={<Book />} />
        <Route path="/en-us/blog" element={<Blog />} />
        <Route path="/en-us/articles" element={<Articles />} />
        <Route path="/en-us/articles/discord-bots" element={<DiscordBotsGuide />} />
        
        {/* Blog posts EN */}
        <Route path="/en-us/blog/discord-bot" element={<BotDiscord />} />
        <Route path="/en-us/blog/fullstack-development" element={<FullstackDevelopment />} />
        <Route path="/en-us/blog/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/en-us/blog/web-automation" element={<WebAutomation />} />
        <Route path="/en-us/blog/project-management" element={<ProjectManagement />} />

        {/* Legacy routes */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/fullstack-development" element={<FullstackDevelopment />} />
        <Route path="/blog/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/blog/web-automation" element={<WebAutomation />} />
        <Route path="/blog/project-management" element={<ProjectManagement />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </ThemeProvider>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
