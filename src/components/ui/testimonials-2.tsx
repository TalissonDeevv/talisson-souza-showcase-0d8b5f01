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
        "mx-auto flex w-full max-w-6xl flex-col items-center justify-center md:grid md:grid-cols-[minmax(180px,240px)_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:gap-x-16",
        className
      )}
    >
      <div className="relative">
        <MaskLine className="left-0" orientation="vertical" />
        <MaskLine className="right-0" orientation="vertical" />
        <MaskLine className="top-0 md:w-xl" orientation="horizontal" />
        <MaskLine className="bottom-0 md:w-xl" orientation="horizontal" />

        <Avatar className="size-36 rounded-none [mask-image:radial-gradient(circle,black_60%,transparent_100%)] *:rounded-none md:size-44 lg:size-52">
          <AvatarImage
            alt={imageAlt ?? author}
            src={imageSrc}
            className="object-cover object-[58%_28%]"
          />
          <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>

      <figcaption className="space-y-6 px-2 py-8 text-center sm:px-4 md:p-0 md:text-left">
        <blockquote className="max-w-4xl text-xl leading-[1.25] tracking-normal text-muted-foreground sm:text-2xl lg:text-4xl">
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
