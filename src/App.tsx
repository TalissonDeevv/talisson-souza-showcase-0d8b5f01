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
import BotDiscord from "./pages/blog/BotDiscord";
import FullstackDevelopment from "./pages/blog/FullstackDevelopment";
import CloudSolutions from "./pages/blog/CloudSolutions";
import WebAutomation from "./pages/blog/WebAutomation";
import ProjectManagement from "./pages/blog/ProjectManagement";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Rotas principais */}
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/projetos/:id" element={<ProjectDetail />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
              <Route path="/carreira" element={<Career />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              
              {/* Blog posts */}
              <Route path="/blog/bot-discord" element={<BotDiscord />} />
              <Route path="/blog/desenvolvimento-fullstack" element={<FullstackDevelopment />} />
              <Route path="/blog/solucoes-cloud" element={<CloudSolutions />} />
              <Route path="/blog/automacao-web" element={<WebAutomation />} />
              <Route path="/blog/gestao-projetos" element={<ProjectManagement />} />
              
              {/* Rotas legadas (redirecionamentos para compatibilidade) */}
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
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
