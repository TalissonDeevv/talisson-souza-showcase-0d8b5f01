import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "px-0 py-12 sm:py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="max-w-[600px] text-base font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex flex-row overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]">
            <div className="flex shrink-0 animate-marquee flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.author.name}-${index}`}
                  {...testimonial}
                />
              ))}
              {[...Array(3)].map((_, setIndex) =>
                testimonials.map((testimonial, index) => (
                  <div
                    key={`${setIndex + 1}-${testimonial.author.name}-${index}`}
                    aria-hidden="true"
                    className="contents"
                  >
                    <TestimonialCard {...testimonial} />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
