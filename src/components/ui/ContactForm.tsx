import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { Check, Send } from "lucide-react";

const ContactForm = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div>
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="w-16 h-16 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-6"
          >
            <Check className="h-8 w-8 text-foreground/70" />
          </motion.div>
          <h3 className="font-serif text-xl text-foreground mb-2">{t.contact.form.success}</h3>
          <p className="text-muted-foreground text-sm">{t.contact.form.successMessage}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-foreground text-sm font-medium mb-2" htmlFor="name">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border/30 bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/50"
              placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
            />
          </div>
          
          <div>
            <label className="block text-foreground text-sm font-medium mb-2" htmlFor="email">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border/30 bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/50"
              placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
            />
          </div>
          
          <div>
            <label className="block text-foreground text-sm font-medium mb-2" htmlFor="message">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-border/30 bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
              placeholder={language === 'pt' ? 'Conte sobre seu projeto...' : 'Tell us about your project...'}
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full inline-flex items-center justify-center gap-2 bg-foreground hover:opacity-90 text-primary-foreground font-medium py-3.5 px-6 rounded-xl transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            style={{
              boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
            }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
                {t.contact.form.sending}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t.contact.form.send}
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
