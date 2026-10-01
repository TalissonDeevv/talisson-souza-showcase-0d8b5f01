"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;

  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
}

type SplitTextInstance = InstanceType<typeof SplitText>;

export type CareerJourneyItem = {
  id: string;
  year: string;
  date: string;
  company: string;
  role: string;
  status: string;
  description: string;
  logo: string;
  logoClassName?: string;
};

export type TimelineProps = {
  items: CareerJourneyItem[];
  title: string;
  eyebrow?: string;
  description?: string;
  periodLabel?: string;
  actionHref?: string;
  actionLabel?: string;
  sectionId?: string;
  className?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  duration?: number;
};

function TimelineIntro({
  title,
  eyebrow,
  description,
  periodLabel,
  actionHref,
  actionLabel,
  mutedTextStyle,
}: Pick<
  TimelineProps,
  "title" | "eyebrow" | "description" | "periodLabel" | "actionHref" | "actionLabel"
> & {
  mutedTextStyle: CSSProperties;
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      {eyebrow ? (
        <span className="text-xs font-medium uppercase" style={mutedTextStyle}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 max-w-[10ch] font-serif text-5xl font-semibold leading-[0.98] text-current md:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={mutedTextStyle}>
          {description}
        </p>
      ) : null}
      {periodLabel ? (
        <p className="mt-6 text-sm font-medium" style={mutedTextStyle}>
          {periodLabel}
        </p>
      ) : null}
      {actionHref && actionLabel ? (
        <Link
          to={actionHref}
          className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span className="border-b border-current/30 pb-1 transition-colors group-hover:border-current">
            {actionLabel}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}

function JourneyCard({
  item,
  index,
  activeStyle,
  mutedTextStyle,
}: {
  item: CareerJourneyItem;
  index: number;
  activeStyle: CSSProperties;
  mutedTextStyle: CSSProperties;
}) {
  const isTop = index % 2 === 0;

  return (
    <article
      data-journey-card
      className="relative h-full w-[84vw] max-w-[430px] shrink-0 px-4 sm:w-[64vw] md:w-[440px] md:px-6"
      aria-label={`${item.company}: ${item.role}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background"
        style={activeStyle}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 z-10 w-px -translate-x-1/2",
          isTop ? "bottom-1/2 h-6" : "top-1/2 h-6",
        )}
        style={activeStyle}
      />

      <div
        className={cn(
          "flex h-1/2",
          isTop ? "items-end pb-6" : "translate-y-full items-start pt-6",
        )}
      >
        <div className="journey-card-copy w-full rounded-md border border-border/30 bg-background/92 p-4 shadow-[0_20px_60px_-36px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-5">
          <div className="flex min-h-9 items-center justify-between gap-4">
            <img
              src={item.logo}
              alt={`Logo da ${item.company}`}
              loading="lazy"
              decoding="async"
              draggable={false}
              className={cn(
                "company-logo-monochrome max-h-9 w-auto max-w-[158px] select-none object-contain object-left",
                item.logoClassName,
              )}
            />
            <span className="shrink-0 font-serif text-2xl text-current/30">{item.year}</span>
          </div>

          <div className="mt-3 border-t border-border/25 pt-3">
            <p className="text-[11px] font-medium uppercase" style={mutedTextStyle}>
              {item.date}
            </p>
            <h3 className="journey-copy mt-1.5 font-serif text-xl font-medium leading-tight text-current md:text-2xl">
              {item.role}
            </h3>
            <p className="journey-copy mt-2 line-clamp-2 text-sm leading-relaxed" style={mutedTextStyle}>
              {item.description}
            </p>
            <p className="mt-3 text-xs font-medium text-current/70">{item.status}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Timeline({
  items,
  title,
  eyebrow,
  description,
  periodLabel,
  actionHref,
  actionLabel,
  sectionId = "journey",
  className,
  textColor = "hsl(var(--foreground))",
  mutedTextColor = "hsl(var(--muted-foreground))",
  activeColor = "hsl(var(--foreground))",
  backgroundColor = "hsl(var(--background))",
  duration = 1.1,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const sectionStyle: CSSProperties = { color: textColor, backgroundColor };
  const activeStyle: CSSProperties = { backgroundColor: activeColor };
  const mutedTextStyle: CSSProperties = { color: mutedTextColor };

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const lineProgress = lineProgressRef.current;

    if (!section || !track || !lineProgress) return;

    const splitInstances: SplitTextInstance[] = [];
    const refresh = () => ScrollTrigger.refresh();
    const context = gsap.context(() => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 32);
      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        lineProgress,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      section.querySelectorAll<HTMLElement>("[data-journey-card]").forEach((card) => {
        const copy = card.querySelectorAll<HTMLElement>(".journey-copy");
        const split = new SplitText(copy, { type: "lines", mask: "lines" });
        splitInstances.push(split);

        gsap.fromTo(
          card.querySelector(".journey-card-copy"),
          { opacity: 0.34, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 96%",
              toggleActions: "play none none reverse",
            },
          },
        );

        gsap.fromTo(
          split.lines,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration,
            stagger: 0.06,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 92%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      window.addEventListener("resize", refresh);
      requestAnimationFrame(refresh);
    }, section);

    return () => {
      window.removeEventListener("resize", refresh);
      splitInstances.forEach((split) => split.revert());
      context.revert();
    };
  }, [duration, items, reducedMotion]);

  if (reducedMotion) {
    return (
      <section id={sectionId} className={cn("w-full scroll-mt-28 py-16", className)} style={sectionStyle}>
        <div className="container mx-auto px-6 lg:px-8">
          <TimelineIntro
            title={title}
            eyebrow={eyebrow}
            description={description}
            periodLabel={periodLabel}
            actionHref={actionHref}
            actionLabel={actionLabel}
            mutedTextStyle={mutedTextStyle}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {items.map((item) => (
              <article key={item.id} className="rounded-md border border-border/30 p-6">
                <div className="flex min-h-12 items-center justify-between gap-4">
                  <img
                    src={item.logo}
                    alt={`Logo da ${item.company}`}
                    className={cn("company-logo-monochrome max-h-11 max-w-[170px] object-contain", item.logoClassName)}
                  />
                  <span className="font-serif text-3xl text-current/30">{item.year}</span>
                </div>
                <p className="mt-5 text-xs font-medium uppercase" style={mutedTextStyle}>{item.date}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{item.role}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={mutedTextStyle}>{item.description}</p>
                <p className="mt-4 text-xs font-medium text-current/70">{item.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={cn("relative h-[420vh] w-full", className)}
      style={sectionStyle}
    >
      <div className="sticky top-24 h-[calc(100svh-6rem)] w-full overflow-hidden lg:top-28 lg:h-[calc(100svh-7rem)]">
        <div
          ref={trackRef}
          className="flex h-full w-max items-center gap-8 px-6 will-change-transform md:gap-12 md:px-[8vw]"
        >
          <div className="h-full w-[86vw] max-w-[560px] shrink-0 pr-5 md:w-[44vw] md:pr-12">
            <TimelineIntro
              title={title}
              eyebrow={eyebrow}
              description={description}
              periodLabel={periodLabel}
              actionHref={actionHref}
              actionLabel={actionLabel}
              mutedTextStyle={mutedTextStyle}
            />
          </div>

          <div className="relative flex h-full items-stretch">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border/35" aria-hidden="true" />
            <div
              ref={lineProgressRef}
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
              style={activeStyle}
              aria-hidden="true"
            />
            {items.map((item, index) => (
              <JourneyCard
                key={item.id}
                item={item}
                index={index}
                activeStyle={activeStyle}
                mutedTextStyle={mutedTextStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
