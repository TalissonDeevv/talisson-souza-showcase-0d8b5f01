import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import TrailReadingPrompt from "@/components/ui/TrailReadingPrompt";
import { lazy, Suspense } from "react";

const queryClient = new QueryClient();

const Index = lazy(() => import("./pages/Index"));
const Bio = lazy(() => import("./pages/Bio"));
const About = lazy(() => import("./pages/About"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const Projects = lazy(() => import("./pages/Projects"));
const SaudeMais = lazy(() => import("./pages/SaudeMais"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const CommunityDiscord = lazy(() => import("./pages/CommunityDiscord"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const HowIWork = lazy(() => import("./pages/HowIWork"));
const TechDecisions = lazy(() => import("./pages/TechDecisions"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Book = lazy(() => import("./pages/Book"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Articles = lazy(() => import("./pages/Articles"));
const ArticleSuggestions = lazy(() => import("./pages/ArticleSuggestions"));
const TagPage = lazy(() => import("./pages/TagPage"));
const TrailPage = lazy(() => import("./pages/TrailPage"));
const Principles = lazy(() => import("./pages/Principles"));
const Checklists = lazy(() => import("./pages/Checklists"));
const ChecklistDetail = lazy(() => import("./pages/ChecklistDetail"));
const Changelogs = lazy(() => import("./pages/Changelogs"));
const MarketTrailArticle = lazy(() => import("./pages/articles/MarketTrailArticle"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Feedbacks = lazy(() => import("./pages/Feedbacks"));
const Policies = lazy(() => import("./pages/Policies"));
const PolicyDetail = lazy(() => import("./pages/PolicyDetail"));

const RouteFallback = () => (
  <div className="min-h-screen bg-background text-foreground" />
);

const AppRoutes = () => (
  <ThemeProvider>
    <TooltipProvider>
      <SmoothScroll>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* ===== PT-BR Routes (root) ===== */}
            <Route path="/" element={<Index />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/seja-afiliado" element={<Affiliate />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projeto/saudemais" element={<SaudeMais />} />
            <Route path="/projetos/saudemais" element={<SaudeMais />} />
            <Route path="/projetos/:id" element={<ProjectDetail />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/comunidade-discord" element={<CommunityDiscord />} />
            <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
            <Route path="/carreira" element={<Career />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/como-trabalho" element={<HowIWork />} />
            <Route path="/decisoes-tecnicas" element={<TechDecisions />} />
            <Route path="/acessibilidade" element={<Accessibility />} />
            <Route path="/livro" element={<Book />} />
            <Route path="/principios" element={<Principles />} />
            <Route path="/checklists" element={<Checklists />} />
            <Route path="/checklists/:checklistId" element={<ChecklistDetail />} />
            <Route path="/changelogs" element={<Changelogs />} />
            <Route path="/changelogs/:categorySlug" element={<Changelogs />} />

            <Route path="/artigos" element={<Articles />} />
            <Route path="/sugestoes-artigos" element={<ArticleSuggestions />} />
            <Route path="/artigos/tag/:tag" element={<TagPage />} />
            <Route path="/trilhas/:trailId" element={<TrailPage />} />
            <Route path="/artigos/:slug" element={<MarketTrailArticle />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
            <Route path="/politicas" element={<Policies />} />
            <Route path="/politicas/:sectionId" element={<PolicyDetail />} />
            <Route path="/politica/:sectionId" element={<PolicyDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/en-us" element={<Index />} />
            <Route path="/en-us/bio" element={<Bio />} />
            <Route path="/en-us/about" element={<About />} />
            <Route path="/en-us/affiliate-program" element={<Affiliate />} />
            <Route path="/en-us/projects" element={<Projects />} />
            <Route path="/en-us/project/saudemais" element={<SaudeMais />} />
            <Route path="/en-us/projects/saudemais" element={<SaudeMais />} />
            <Route path="/en-us/projects/:id" element={<ProjectDetail />} />
            <Route path="/en-us/services" element={<Services />} />
            <Route path="/en-us/services/community-discord" element={<CommunityDiscord />} />
            <Route path="/en-us/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/en-us/career" element={<Career />} />
            <Route path="/en-us/contact" element={<Contact />} />
            <Route path="/en-us/how-i-work" element={<HowIWork />} />
            <Route path="/en-us/tech-decisions" element={<TechDecisions />} />
            <Route path="/en-us/accessibility" element={<Accessibility />} />
            <Route path="/en-us/book" element={<Book />} />
            <Route path="/en-us/principles" element={<Principles />} />
            <Route path="/en-us/checklists" element={<Checklists />} />
            <Route path="/en-us/checklists/:checklistId" element={<ChecklistDetail />} />
            <Route path="/en-us/changelogs" element={<Changelogs />} />
            <Route path="/en-us/changelogs/:categorySlug" element={<Changelogs />} />

            <Route path="/en-us/articles" element={<Articles />} />
            <Route path="/en-us/article-suggestions" element={<ArticleSuggestions />} />
            <Route path="/en-us/articles/tag/:tag" element={<TagPage />} />
            <Route path="/en-us/trails/:trailId" element={<TrailPage />} />
            <Route path="/en-us/articles/:slug" element={<MarketTrailArticle />} />
            <Route path="/en-us/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/en-us/faq" element={<FAQ />} />
            <Route path="/en-us/feedbacks" element={<Feedbacks />} />
            <Route path="/en-us/policies" element={<Policies />} />
            <Route path="/en-us/policies/:sectionId" element={<PolicyDetail />} />
            <Route path="/en-us/404" element={<NotFound />} />

            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/saudemais" element={<SaudeMais />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <TrailReadingPrompt />
      </SmoothScroll>
    </TooltipProvider>
  </ThemeProvider>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);
export default App;
