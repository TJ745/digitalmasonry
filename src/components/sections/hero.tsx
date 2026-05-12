"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const ORBS = [
  {
    x: 52,
    y: -15,
    size: 720,
    blur: 80,
    color: "rgba(99,102,241,0.20)",
    factor: 0.06,
    dur: 12,
  },
  {
    x: 12,
    y: 35,
    size: 460,
    blur: 70,
    color: "rgba(139,92,246,0.14)",
    factor: 0.1,
    dur: 15,
  },
  {
    x: 78,
    y: 55,
    size: 340,
    blur: 65,
    color: "rgba(168,85,247,0.12)",
    factor: 0.08,
    dur: 13,
  },
  {
    x: 40,
    y: 80,
    size: 280,
    blur: 60,
    color: "rgba(99,102,241,0.09)",
    factor: 0.05,
    dur: 11,
  },
] as const;

function WordReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.75,
            delay: delay + i * 0.09,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="inline-block mr-[0.22em] last:mr-0"
        >
          <span className={className}>{word}</span>
        </motion.span>
      ))}
    </>
  );
}

interface OrbProps {
  orb: (typeof ORBS)[number];
  orbY: MotionValue<number>;
  reduced: boolean | null;
  index: number;
}

function Orb({ orb, orbY, reduced, index }: OrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none will-change-transform"
      style={{
        width: orb.size,
        height: orb.size,
        left: `${orb.x}%`,
        top: `${orb.y}%`,
        x: "-50%",
        y: orbY,
        background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
        filter: `blur(${orb.blur}px)`,
      }}
      animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: orb.dur,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 2,
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollY } = useScroll();

  // All transforms declared at top level — no hooks inside loops
  const contentY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -90]);
  const contentOp = useTransform(scrollY, [0, 450], [1, 0]);
  const gridOp = useTransform(scrollY, [0, 500], [0.55, 0.15]);
  const cardsOp = useTransform(scrollY, [0, 350], [1, 0]);
  const cardsLeft = useTransform(scrollY, [0, 400], [0, reduced ? 0 : -30]);
  const cardsRight = useTransform(scrollY, [0, 400], [0, reduced ? 0 : 30]);

  const orbY0 = useTransform(
    scrollY,
    [0, 700],
    [0, reduced ? 0 : -700 * ORBS[0].factor],
  );
  const orbY1 = useTransform(
    scrollY,
    [0, 700],
    [0, reduced ? 0 : -700 * ORBS[1].factor],
  );
  const orbY2 = useTransform(
    scrollY,
    [0, 700],
    [0, reduced ? 0 : -700 * ORBS[2].factor],
  );
  const orbY3 = useTransform(
    scrollY,
    [0, 700],
    [0, reduced ? 0 : -700 * ORBS[3].factor],
  );
  const orbYs = [orbY0, orbY1, orbY2, orbY3] as const;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty(
      "--mouse-x",
      `${((e.clientX - rect.left) / rect.width) * 100}%`,
    );
    el.style.setProperty(
      "--mouse-y",
      `${((e.clientY - rect.top) / rect.height) * 100}%`,
    );
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
      style={{ "--mouse-x": "50%", "--mouse-y": "40%" } as React.CSSProperties}
    >
      {/* Dot grid */}
      <motion.div
        style={{ opacity: gridOp }}
        className="absolute inset-0 dot-grid-animated pointer-events-none"
      />
      {/* Line grid */}
      <motion.div
        style={{ opacity: gridOp }}
        className="absolute inset-0 grid-bg pointer-events-none"
      />

      {/* Fades */}
      <div className="absolute bottom-0 inset-x-0 h-52 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 inset-x-0 h-24 bg-linear-to-b from-zinc-950 to-transparent pointer-events-none z-10" />

      {/* Gradient orbs */}
      {ORBS.map((orb, i) => (
        <Orb key={i} orb={orb} orbY={orbYs[i]} reduced={reduced} index={i} />
      ))}

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-2"
        style={{
          background:
            "radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(99,102,241,0.10), transparent 55%)",
        }}
      />

      {/* Floating left card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
        style={{ opacity: cardsOp, x: cardsLeft }}
        className="absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 hidden xl:block z-20 will-change-transform"
      >
        <div className="border-spin glass-strong rounded-2xl p-5 w-48 shadow-depth">
          <div className="text-3xl font-black text-white tabular-nums mb-1">
            99%
          </div>
          <div className="text-xs text-zinc-500 mb-3">Client satisfaction</div>
          <div className="h-1.5 w-full rounded-full bg-zinc-800/80 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{
                duration: 1.5,
                delay: 1.2,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="h-full rounded-full bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating right card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={{ opacity: cardsOp, x: cardsRight }}
        className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 hidden xl:block z-20 will-change-transform"
      >
        <div className="border-spin glass-strong rounded-2xl p-5 w-48 shadow-depth">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs text-emerald-400 font-medium">
              Open for work
            </span>
          </div>
          <div className="text-3xl font-black text-white tabular-nums mb-1">
            10+
          </div>
          <div className="text-xs text-zinc-500">Projects delivered</div>
        </div>
      </motion.div>

      {/* Hero content — parallax wrapper */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-8 will-change-transform"
      >
        {/* Spinning-border status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="badge-border-glow inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm text-indigo-300 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Sparkles size={12} className="text-indigo-400/80" />
          <span>{siteConfig.availability} — Booking Q3 2026</span>
        </motion.div>

        {/* Fluid headline with word-blur reveal */}
        <h1
          className="text-hero text-white text-center"
          aria-label="We Build Digital Products That Scale."
        >
          <div className="mb-1 md:mb-2">
            <WordReveal text="We Build Digital" delay={0.18} />
          </div>
          <div>
            <WordReveal
              text="Products That Scale."
              delay={0.45}
              className="gradient-text"
            />
          </div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-xl lg:max-w-2xl leading-relaxed"
        >
          {siteConfig.name} is a full-stack software studio that helps startups
          and businesses design, build, and scale world-class digital products —
          from MVP to enterprise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.05,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <Button
            size="xl"
            variant="gradient"
            asChild
            className="w-full sm:w-auto shadow-glow-indigo"
          >
            <Link
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
              <ArrowRight size={17} />
            </Link>
          </Button>
          <Button
            size="xl"
            variant="outline"
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="/work">View Our Work</Link>
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="flex items-center gap-4 text-sm text-zinc-600"
        >
          <div className="flex -space-x-2">
            {["SC", "TJ", "PK", "RT", "AR", "+"].map((ini, i) => (
              <div
                key={ini}
                className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-bold"
                style={{ zIndex: 5 - i }}
              >
                {ini}
              </div>
            ))}
          </div>
          <span>
            Trusted by{" "}
            <strong className="text-zinc-300 font-semibold">30+</strong> clients
            worldwide
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: contentOp }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-700/60 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
