import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type TestimonialsSectionProps = {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export function TestimonialsSection({
  quote,
  author,
  role,
  imageSrc,
  imageAlt,
  className,
}: TestimonialsSectionProps) {
  return (
    <figure
      className={cn(
        "mx-auto flex w-full max-w-3xl flex-col items-center justify-center md:grid md:grid-cols-[auto_1fr]",
        className
      )}
    >
      <div className="relative">
        <MaskLine className="left-0" orientation="vertical" />
        <MaskLine className="right-0" orientation="vertical" />
        <MaskLine className="top-0 md:w-xl" orientation="horizontal" />
        <MaskLine className="bottom-0 md:w-xl" orientation="horizontal" />

        <Avatar className="size-24 rounded-none [mask-image:radial-gradient(circle,black_60%,transparent_100%)] *:rounded-none md:size-32">
          <AvatarImage
            alt={imageAlt ?? author}
            src={imageSrc}
            className="object-cover object-[58%_28%]"
          />
          <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>

      <figcaption className="space-y-4 p-8 text-center md:p-6 md:text-left">
        <blockquote className="text-lg leading-tight tracking-normal text-muted-foreground sm:text-xl">
          &quot;
          <span className="font-medium text-foreground">{quote}</span>
          &quot;
        </blockquote>

        <div>
          <cite className="text-xs font-medium not-italic text-foreground">
            {author}
          </cite>
          <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function MaskLine({
  className,
  orientation,
  style,
  ...props
}: ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  const fadeStyle =
    orientation === "vertical"
      ? {
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--foreground) / 0.2) 22%, hsl(var(--foreground) / 0.2) 78%, transparent)",
        }
      : {
          background:
            "linear-gradient(to right, transparent, hsl(var(--foreground) / 0.2) 22%, hsl(var(--foreground) / 0.2) 78%, transparent)",
        };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute",
        orientation === "vertical" && "-inset-y-1/2 w-px",
        orientation === "horizontal" && "-inset-x-1/2 h-px",
        className
      )}
      style={{ ...fadeStyle, ...style }}
      {...props}
    />
  );
}

export default TestimonialsSection;
