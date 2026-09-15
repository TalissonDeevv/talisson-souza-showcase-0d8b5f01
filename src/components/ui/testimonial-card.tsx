import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "flex min-h-[232px] w-[300px] max-w-[300px] shrink-0 flex-col rounded-lg border border-border/60 border-t-foreground/15",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:w-[320px] sm:max-w-[320px] sm:p-6",
        "transition-colors duration-300 hover:from-muted/60 hover:to-muted/20",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-border/60">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="text-xs font-medium">{getInitials(author.name)}</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col items-start">
          <h3 className="max-w-full truncate text-base font-semibold leading-none text-foreground">
            {author.name}
          </h3>
          <p className="mt-1 max-w-full truncate text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {text}
      </p>
    </Card>
  );
}
