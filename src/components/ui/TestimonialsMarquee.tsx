import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { feedbacks } from "@/data/feedbacks";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

import cheetahLogo from "@/assets/logos/cheetah-solutions.png";
import squareCloudLogo from "@/assets/logos/square-cloud.png";
import splendoriLogo from "@/assets/logos/splendori.png";

type CompanyBadge = {
  name: string;
  logo: string;
  className?: string;
};

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
  company?: CompanyBadge;
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const getCompanyBadge = (role: string): CompanyBadge | undefined => {
  const normalizedRole = normalizeText(role);

  if (normalizedRole.includes("square cloud")) {
    return {
      name: "Square Cloud",
      logo: squareCloudLogo,
      className: "max-h-5 max-w-[88px] sm:max-w-[96px]",
    };
  }

  if (normalizedRole.includes("cheetah solutions")) {
    return {
      name: "Cheetah Solutions",
      logo: cheetahLogo,
      className: "max-h-5 max-w-[96px] sm:max-w-[108px]",
    };
  }

  if (normalizedRole.includes("splendori")) {
    return {
      name: "Splendori",
      logo: splendoriLogo,
      className: "h-7 w-7 rounded-sm object-cover",
    };
  }

  return undefined;
};

const splitRows = <T,>(items: T[]) => {
  const firstRow: T[] = [];
  const secondRow: T[] = [];

  items.forEach((item, index) => {
    if (index % 2 === 0) {
      firstRow.push(item);
    } else {
      secondRow.push(item);
    }
  });

  return [firstRow, secondRow];
};

const TestimonialCard = ({
  testimonial,
  isDuplicate = false,
}: {
  testimonial: Testimonial;
  isDuplicate?: boolean;
}) => {
  const featured = Boolean(testimonial.company);

  const content = (
    <div
      className={cn(
        "group relative flex h-[236px] w-[300px] shrink-0 flex-col overflow-hidden rounded-lg border border-border/70 bg-card/55 backdrop-blur-sm transition-colors duration-500 hover:border-foreground/20 sm:w-[340px]",
        featured && "w-[380px] sm:w-[500px]"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.055] via-transparent to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      <blockquote className="relative flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 items-start p-5 sm:p-6">
          <p className="overflow-hidden text-sm leading-relaxed text-foreground/82 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]">
            "{testimonial.text}"
          </p>
        </div>

        <footer className="relative flex min-h-[76px] items-center justify-between gap-3 border-t border-border/60 bg-foreground/[0.035] px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 shrink-0 rounded-full border border-border/50 object-cover"
            />
            <div className="min-w-0">
              <cite className="block truncate text-sm font-medium not-italic text-foreground">
                {testimonial.name}
              </cite>
              <p className="truncate text-xs leading-5 text-muted-foreground/75">
                {testimonial.role}
              </p>
            </div>
          </div>

          {testimonial.company && (
            <img
              src={testimonial.company.logo}
              alt={testimonial.company.name}
              loading="lazy"
              decoding="async"
              className={cn("h-auto w-auto shrink-0 object-contain grayscale opacity-70", testimonial.company.className)}
            />
          )}
        </footer>
      </blockquote>
    </div>
  );

  if (isDuplicate) {
    return (
      <div aria-hidden="true" className="shrink-0">
        {content}
      </div>
    );
  }

  return (
    <article
      aria-label={`Depoimento de ${testimonial.name}`}
      className="shrink-0"
    >
      {content}
    </article>
  );
};

const TestimonialsRow = ({
  testimonials,
  reverse = false,
  duration = 42,
}: {
  testimonials: Testimonial[];
  reverse?: boolean;
  duration?: number;
}) => {
  const groupRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(groupRef.current?.scrollWidth ?? 0);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
        maskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex w-max items-center"
        animate={width > 0 ? { x: reverse ? [-width, 0] : [0, -width] } : { x: 0 }}
        transition={{ duration, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        <div ref={groupRef} className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-duplicate`} testimonial={testimonial} isDuplicate />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TestimonialsMarquee = () => {
  const { language } = useTheme();
  const lang = language === "pt" ? "pt" : "en";

  const testimonials = feedbacks.map((feedback) => {
    const role = feedback.role[lang];

    return {
      name: feedback.name,
      role,
      text: feedback.text[lang],
      image: feedback.image,
      company: getCompanyBadge(role),
    };
  });

  const [firstRow, secondRow] = splitRows(testimonials);

  return (
    <div className="space-y-5">
      <TestimonialsRow testimonials={firstRow} duration={48} />
      <TestimonialsRow testimonials={secondRow} reverse duration={52} />
    </div>
  );
};

export default TestimonialsMarquee;
