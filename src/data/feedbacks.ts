import nicolasImg from "@/assets/nicolas.png";

export interface Feedback {
  name: string;
  role: { pt: string; en: string };
  text: { pt: string; en: string };
  image: string;
}

export const feedbacks: Feedback[] = [
  {
    name: "Priscila Suanne",
    role: { pt: "Desenvolvedora Back End", en: "Back End Developer" },
    text: {
      pt: "Tive o prazer de trabalhar com Thalisson, um profissional extremamente comprometido, resiliente e dedicado em tudo o que faz.",
      en: "I had the pleasure of working with Thalisson, an extremely committed, resilient and dedicated professional in everything he does."
    },
    image: "https://i.ibb.co/zWp10rhx/Priscila.jpg"
  },
  {
    name: "Matheus Yuri Silva",
    role: { pt: "Desenvolvedor de Software", en: "Software Developer" },
    text: {
      pt: "Talisson demonstra uma combinação rara de expertise técnica e visão estratégica de negócios.",
      en: "Talisson demonstrates a rare combination of technical expertise and strategic business vision."
    },
    image: "https://i.ibb.co/V0P35B23/Matheus.jpg"
  },
  {
    name: "Camile Vitória Barros",
    role: { pt: "Assistente de Suporte Administrativo", en: "Administrative Support Assistant" },
    text: {
      pt: "Acompanho de perto o comprometimento e dedicação do Talisson em cada projeto. Trabalho marcado pela qualidade e foco em entregar os melhores resultados. Uma escolha segura para quem busca excelência. :)",
      en: "I closely follow Talisson's commitment and dedication in every project. Work marked by quality and focus on delivering the best results. A safe choice for those seeking excellence. :)"
    },
    image: "https://i.ibb.co/gFjVRgtr/image.png"
  },
  {
    name: "Rafael Araujo",
    role: { pt: "Web Developer", en: "Web Developer" },
    text: {
      pt: "Estudei ao lado do Talisson e posso afirmar que é extremamente dedicado. Sua liderança sempre se destacou, conduzindo o grupo de forma organizada e motivadora. Sua disposição para colaborar fez toda diferença nos trabalhos em equipe. Agrega muito valor em qualquer ambiente.",
      en: "I studied alongside Talisson and can affirm he is extremely dedicated. His leadership always stood out, leading the group in an organized and motivating way. His willingness to collaborate made all the difference in team projects. Adds great value in any environment."
    },
    image: "https://i.ibb.co/My7YX5s4/image.png"
  },
  {
    name: "Davi R. Fraustino",
    role: { pt: "Estudante de Ciência da Computação", en: "Computer Science Student" },
    text: {
      pt: "Talisson é um excelente profissional que une conhecimento técnico full stack com visão estratégica de negócios. Entrega soluções criativas e eficientes, sempre atento ao impacto real para clientes e equipes. Comprometido, resiliente e com grande potencial de liderança.",
      en: "Talisson is an excellent professional who combines full stack technical knowledge with strategic business vision. He delivers creative and efficient solutions, always attentive to real impact for clients and teams. Committed, resilient, with great leadership potential."
    },
    image: "https://i.ibb.co/LDG4sdNM/image.png"
  },
  {
    name: "Anna Ishii",
    role: { pt: "Co-fundadora da Splendori", en: "Co-founder of Splendori" },
    text: {
      pt: "Trabalhei com o Talisson em projetos estratégicos e ele entrega com excelência. Sua visão técnica aliada ao senso de negócio torna qualquer projeto mais robusto. Inspira confiança e compromisso em tudo que faz.",
      en: "I worked with Talisson on strategic projects and he delivers with excellence. His technical vision combined with business sense makes any project more robust. He inspires trust and commitment in everything he does."
    },
    image: "https://i.ibb.co/pjKpnWFq/image.png"
  },
  {
    name: "Caio Eduardo Ferreira Frederico",
    role: { pt: "Backend Developer", en: "Backend Developer" },
    text: {
      pt: "Talisson entende tanto o lado técnico quanto o de negócios. Sua organização e clareza na comunicação facilitam o trabalho em equipe. Sempre entrega com qualidade e no prazo.",
      en: "Talisson understands both the technical and business sides. His organization and clear communication make teamwork easier. Always delivers with quality and on time."
    },
    image: "https://i.ibb.co/SwqJmQt0/image.png"
  },
  {
    name: "Diogo Calmon",
    role: { pt: "Full Stack Developer", en: "Full Stack Developer" },
    text: {
      pt: "Talisson tem domínio técnico sólido, visão de produto e dedicação impressionante. Um desenvolvedor que realmente faz a diferença em qualquer projeto.",
      en: "Talisson has solid technical skills, product vision and impressive dedication. A developer who truly makes a difference in any project."
    },
    image: "https://i.ibb.co/1tyf3c5V/image.png"
  }
];
