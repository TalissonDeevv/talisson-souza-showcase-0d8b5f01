import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const FAQ = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const faqData = [
    {
      question: t.faq.questions.question1,
      answer: t.faq.questions.answer1
    },
    {
      question: t.faq.questions.question2,
      answer: t.faq.questions.answer2
    },
    {
      question: t.faq.questions.question3,
      answer: t.faq.questions.answer3
    },
    {
      question: t.faq.questions.question4,
      answer: t.faq.questions.answer4
    },
    {
      question: t.faq.questions.question5,
      answer: t.faq.questions.answer5
    },
    {
      question: t.faq.questions.question6,
      answer: t.faq.questions.answer6
    }
  ];

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-b border-border/40 last:border-b-0"
          >
            <AccordionTrigger className="text-left py-6 text-foreground hover:no-underline hover:opacity-70 transition-opacity duration-200 text-base font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;