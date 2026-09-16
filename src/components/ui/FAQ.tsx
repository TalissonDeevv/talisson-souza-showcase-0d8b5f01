import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";
import { useTheme } from "@/contexts/ThemeContext";
import { getText, useTranslation } from "@/utils/translations";

const FAQ = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const faqData: FaqProItem[] = [
    {
      id: "faq-1",
      question: t.faq.questions.question1,
      answer: t.faq.questions.answer1,
    },
    {
      id: "faq-2",
      question: t.faq.questions.question2,
      answer: t.faq.questions.answer2,
    },
    {
      id: "faq-3",
      question: t.faq.questions.question3,
      answer: t.faq.questions.answer3,
    },
    {
      id: "faq-4",
      question: t.faq.questions.question4,
      answer: t.faq.questions.answer4,
    },
    {
      id: "faq-5",
      question: t.faq.questions.question5,
      answer: t.faq.questions.answer5,
    },
    {
      id: "faq-6",
      question: t.faq.questions.question6,
      answer: t.faq.questions.answer6,
    },
  ];

  return (
    <FaqPro
      defaultOpenFirst
      emptyText={getText(language, "Nenhuma pergunta encontrada.", "No FAQs match your search.")}
      items={faqData}
      searchPlaceholder={getText(language, "Buscar perguntas...", "Search FAQs...")}
    />
  );
};

export default FAQ;
