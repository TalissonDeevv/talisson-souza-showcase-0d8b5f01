import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcons from "@/components/ui/SocialIcons";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <SectionTitle subtitle={t.contact.subtitle} align="center">
          {t.contact.title}
        </SectionTitle>

        {/* Recess Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-2xl mx-auto"
        >
          <div className="relative bg-card backdrop-blur-md rounded-2xl shadow-lg border border-border overflow-hidden">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            
            <div className="p-5 pl-6 flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-foreground" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-foreground text-sm font-medium leading-relaxed">
                  {getText(language,
                    "Em recesso até 15/01/2026 — respostas podem ter atraso.",
                    "On recess until Jan 15, 2026 — responses may be delayed."
                  )}
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  {getText(language, "Agradeço pela compreensão.", "Thank you for your understanding.")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t.contact.info}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">talinhodev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+55 (81) 9 93964261</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t.contact.location}</p>
                    <p className="text-muted-foreground">Recife, Pernambuco - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {t.contact.social}
              </h4>
              <SocialIcons className="flex gap-4" />
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
