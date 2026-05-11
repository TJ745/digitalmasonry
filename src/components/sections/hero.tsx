"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const floatingOrbs = [
  { size: 600, x: "55%", y: "-20%", color: "rgba(99,102,241,0.18)", delay: 0, duration: 10 },
  { size: 400, x: "10%", y: "30%", color: "rgba(139,92,246,0.12)", delay: 2, duration: 14 },
  { size: 300, x: "80%", y: "60%", color: "rgba(168,85,247,0.1)", delay: 4, duration: 12 },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      container.style.setProperty("--mouse-x", `${x}%`);
      container.style.setProperty("--mouse-y", `${y}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4"
      aria-label="Hero"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

      {/* Animated gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(60px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse parallax spotlight */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(99,102,241,0.12), transparent 50%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-sm text-indigo-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Sparkles size={13} className="text-indigo-400" />
          {siteConfig.availability} — Now booking Q3 2026
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-3"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]">
            We Build Digital
            <br />
            <span className="gradient-text">Products That Scale.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          {siteConfig.name} is a full-stack software studio that helps startups and
          businesses design and engineer world-class digital products — from MVP to
          enterprise at scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="xl" variant="gradient" asChild className="w-full sm:w-auto shadow-2xl shadow-indigo-500/25">
            <Link href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/work">
              View Our Work
            </Link>
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-4 text-sm text-zinc-600"
        >
          <div className="flex -space-x-2">
            {["SC", "MW", "PK", "JO", "AD"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-semibold"
                style={{ zIndex: 5 - i }}
              >
                {initials}
              </div>
            ))}
          </div>
          <span>
            Trusted by <strong className="text-zinc-400">120+</strong> clients worldwide
          </span>
        </motion.div>
      </div>

      {/* Floating metric cards */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="glass rounded-2xl p-4 space-y-2 w-44">
          <div className="text-2xl font-black text-white">98%</div>
          <div className="text-xs text-zinc-500">Client satisfaction rate</div>
          <div className="h-1 w-full rounded-full bg-zinc-800">
            <div className="h-1 w-[98%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="glass rounded-2xl p-4 space-y-1 w-44">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">Live</span>
          </div>
          <div className="text-2xl font-black text-white">120+</div>
          <div className="text-xs text-zinc-500">Projects shipped</div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
