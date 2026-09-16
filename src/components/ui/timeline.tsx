import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: ReactNode;
}

type TimelineProps = {
  className?: string;
  data: TimelineEntry[];
  description?: ReactNode;
  title?: ReactNode;
};

export const Timeline = ({ className, data, description, title }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full bg-transparent", className)}
      ref={containerRef}
    >
      {(title || description) && (
        <div className="mx-auto max-w-7xl px-4 pb-8 md:px-8 lg:px-10">
          {title && (
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-foreground md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative mx-auto max-w-7xl pb-6">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-start pt-10 md:gap-10 md:pt-28"
          >
            <div className="sticky top-32 z-20 flex max-w-xs self-start md:w-full md:max-w-sm md:flex-row md:items-center">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-background md:left-3">
                <div className="h-4 w-4 rounded-full border border-border bg-muted p-2" />
              </div>
              <h3 className="hidden pl-20 text-3xl font-bold leading-none text-foreground/25 md:block lg:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold leading-tight text-foreground/30 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-foreground via-foreground/60 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
