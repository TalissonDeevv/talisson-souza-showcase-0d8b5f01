import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";
import { Check, Send, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});

  const validateForm = () => {
    const newErrors: {name?: string; email?: string; message?: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'pt' ? 'Nome é obrigatório' : 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = language === 'pt' ? 'Nome muito longo (máx. 100)' : 'Name too long (max. 100)';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = language === 'pt' ? 'Email é obrigatório' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = language === 'pt' ? 'Email inválido' : 'Invalid email';
    } else if (formData.email.length > 255) {
      newErrors.email = language === 'pt' ? 'Email muito longo' : 'Email too long';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'pt' ? 'Mensagem é obrigatória' : 'Message is required';
    } else if (formData.message.length > 5000) {
      newErrors.message = language === 'pt' ? 'Mensagem muito longa (máx. 5000)' : 'Message too long (max. 5000)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });
      
      if (error) {
        throw new Error(error.message || 'Erro ao enviar mensagem');
      }
      
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      toast({
        title: language === 'pt' ? "Mensagem enviada!" : "Message sent!",
        description: language === 'pt' ? "Entrarei em contato em breve." : "I'll get back to you soon.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      console.error('Error sending contact form:', error);
      toast({
        title: language === 'pt' ? "Erro ao enviar" : "Error sending",
        description: language === 'pt' 
          ? "Tente novamente ou entre em contato pelo WhatsApp." 
          : "Try again or contact via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              className={`w-full px-4 py-3 border bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/50 ${errors.name ? 'border-red-500/50' : 'border-border/30'}`}
              placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
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
              className={`w-full px-4 py-3 border bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/50 ${errors.email ? 'border-red-500/50' : 'border-border/30'}`}
              placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
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
              rows={5}
              className={`w-full px-4 py-3 border bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 resize-none placeholder:text-muted-foreground/50 ${errors.message ? 'border-red-500/50' : 'border-border/30'}`}
              placeholder={language === 'pt' ? 'Conte sobre seu projeto...' : 'Tell us about your project...'}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
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
