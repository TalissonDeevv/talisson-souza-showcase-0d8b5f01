import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  User, 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Cloud, 
  Users,
  ArrowRight,
  Check
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const Services = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const serviceCategories = [
    {
      id: "web-development",
      icon: Code,
      ...t.servicesPage.categories.webDevelopment
    },
    {
      id: "mobile-development", 
      icon: Smartphone,
      ...t.servicesPage.categories.mobileDevelopment
    },
    {
      id: "bot-development",
      icon: Bot,
      ...t.servicesPage.categories.botDevelopment
    },
    {
      id: "uiux-design",
      icon: Palette,
      ...t.servicesPage.categories.uiuxDesign
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      ...t.servicesPage.categories.cloudSolutions
    },
    {
      id: "consulting",
      icon: Users,
      ...t.servicesPage.categories.consulting
    }
  ];

  const clientProjects = [
    {
      title: "Land page Sagiri Bot",
      client: "Rodrigo",
      description: language === 'pt' 
        ? "Uma land page pra uma bot de discord de parcerias."
        : "A landing page for a Discord bot for partnerships.",
      image: "https://i.ibb.co/jkPPHWdc/image.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://zafire.cloud",
      deliveryDate: language === 'pt' ? "Novembro 20, 2025" : "November 20, 2025",
      status: t.servicesPage.completed
    },
    {
      title: "Werneck Group",
      client: "Talisson Souza",
      description: language === 'pt' 
        ? "Desenvolvimento de plataforma web moderna com funcionalidades avançadas e interface intuitiva."
        : "Development of modern web platform with advanced features and intuitive interface.",
      image: "https://i.ibb.co/ymjQhFmG/image.png",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      link: "https://werneckgroup.com",
      deliveryDate: language === 'pt' ? "Novembro 28, 2023" : "November 28, 2023",
      status: t.servicesPage.completed
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === t.servicesPage.completed) {
      return "bg-primary text-primary-foreground";
    } else if (status === t.servicesPage.inProgress) {
      return "bg-gray-600 text-white";
    } else {
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <SectionTitle subtitle={t.servicesPage.subtitle} align="center">
          {t.servicesPage.title}
        </SectionTitle>
        
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Service Categories Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                      
                      <CardHeader className="pb-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-full h-full text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <Check className="w-4 h-4 text-gray-700 dark:text-gray-300 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          asChild
                          className="w-full"
                        >
                          <Link to={`/services/${service.id}`}>
                            {t.servicesPage.learnMore}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Client Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                {language === 'pt' ? 'Projetos Realizados' : 'Completed Projects'}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {language === 'pt' 
                  ? 'Conheça alguns dos projetos personalizados que desenvolvi para meus clientes'
                  : 'Learn about some of the custom projects I developed for my clients'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {clientProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{t.servicesPage.client}: {project.client}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{t.servicesPage.deliveryDate}: {project.deliveryDate}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-700 dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.status === t.servicesPage.completed && (
                        <Button 
                          className="w-full"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.servicesPage.viewProject}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20"
          >
            <div className="relative bg-primary text-primary-foreground p-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.servicesPage.projectIdea}</h3>
                <p className="text-xl mb-8 opacity-90">
                  {t.servicesPage.projectIdeaDescription}
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://wa.me/5581993964261', '_blank')}
                >
                  {t.servicesPage.requestQuote}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;