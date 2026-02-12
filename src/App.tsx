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

import Contact from "./pages/Contact";
import HowIWork from "./pages/HowIWork";
import TechDecisions from "./pages/TechDecisions";
import Accessibility from "./pages/Accessibility";
import ProjectDetail from "./pages/ProjectDetail";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import DiscordBotsGuide from "./pages/articles/DiscordBotsGuide";
import VisionAndPersistence from "./pages/articles/VisionAndPersistence";
import INPIGuide from "./pages/articles/INPIGuide";
import ProfessionalDiscordBot from "./pages/articles/ProfessionalDiscordBot";
import DiscordBotRental from "./pages/articles/DiscordBotRental";
import MonetizingBots from "./pages/articles/MonetizingBots";
import DiscordBotNiche from "./pages/articles/DiscordBotNiche";
import WhatIsFullStack from "./pages/articles/WhatIsFullStack";
import SystemDevelopmentCost from "./pages/articles/SystemDevelopmentCost";

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
        
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigos/bots-discord" element={<DiscordBotsGuide />} />
        <Route path="/artigos/visao-e-persistencia" element={<VisionAndPersistence />} />
        <Route path="/artigos/inpi" element={<INPIGuide />} />
        <Route path="/artigos/bot-profissional-discord" element={<ProfessionalDiscordBot />} />
        <Route path="/artigos/aluguel-bots-discord" element={<DiscordBotRental />} />
        <Route path="/artigos/monetizar-bots" element={<MonetizingBots />} />
        <Route path="/artigos/nicho-bot-discord" element={<DiscordBotNiche />} />
        <Route path="/artigos/desenvolvimento-full-stack" element={<WhatIsFullStack />} />
        <Route path="/artigos/custo-desenvolvimento-sistema" element={<SystemDevelopmentCost />} />
        
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
        
        <Route path="/en-us/articles" element={<Articles />} />
        <Route path="/en-us/articles/discord-bots" element={<DiscordBotsGuide />} />
        <Route path="/en-us/articles/vision-and-persistence" element={<VisionAndPersistence />} />
        <Route path="/en-us/articles/inpi" element={<INPIGuide />} />
        <Route path="/en-us/articles/professional-discord-bot" element={<ProfessionalDiscordBot />} />
        <Route path="/en-us/articles/discord-bot-rental" element={<DiscordBotRental />} />
        <Route path="/en-us/articles/monetizing-bots" element={<MonetizingBots />} />
        <Route path="/en-us/articles/discord-bot-niche" element={<DiscordBotNiche />} />
        <Route path="/en-us/articles/full-stack-development" element={<WhatIsFullStack />} />
        <Route path="/en-us/articles/system-development-cost" element={<SystemDevelopmentCost />} />
        
        {/* Legacy routes */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
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