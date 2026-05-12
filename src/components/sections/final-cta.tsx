"use client";

import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Calendar, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const TRUST = [
  "Free discovery call",
  "No upfront commitment",
  "Reply within 24 hours",
  "100% IP ownership",
] as const;

const STATS = [
  { value: "10+", label: "Projects" },
  { value: "99%", label: "Satisfaction" },
  { value: "5+", label: "Years" },
  { value: "40+", label: "Technologies" },
] as const;

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* Mouse spotlight on CTA panel */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--cy", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Section-level ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-225 h-100 rounded-full bg-indigo-600/8 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* ── Outer spinning-border wrapper ─────── */}
          <div className="border-spin rounded-3xl p-px">
            <div
              ref={panelRef}
              onMouseMove={handleMouseMove}
              style={{ "--cx": "50%", "--cy": "50%" } as React.CSSProperties}
              className="relative overflow-hidden rounded-3xl bg-zinc-950"
            >
              {/* Mouse spotlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(500px circle at var(--cx) var(--cy), rgba(99,102,241,0.08), transparent 60%)",
                }}
              />

              {/* Parallax mesh background */}
              <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 mesh-bg opacity-70 pointer-events-none scale-110"
              />

              {/* Grid overlay */}
              <div className="absolute inset-0 dot-grid-animated opacity-40 pointer-events-none" />

              {/* Glow orbs */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-indigo-500/12 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 right-0 w-75 h-50 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

              {/* ── Content ──────────────────────── */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
                {/* Left: Headline + CTAs */}
                <div className="p-10 md:p-14 flex flex-col gap-8">
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Let&apos;s Build Together
                  </motion.div>

                  {/* Heading */}
                  <div className="space-y-3">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.95]">
                      Ready to bring your
                      <br />
                      <span className="gradient-text">idea to life?</span>
                    </h2>
                    <p className="text-base text-zinc-400 leading-relaxed max-w-sm">
                      Tell us about your project. Discovery calls are always
                      free — no pitch, just a genuine conversation about what
                      you&apos;re building.
                    </p>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      variant="gradient"
                      asChild
                      className="shadow-glow-indigo"
                    >
                      <Link
                        href={siteConfig.calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar size={16} />
                        Book a Call
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/contact">
                        <Mail size={16} />
                        Start a Project
                      </Link>
                    </Button>
                  </div>

                  {/* Trust signals */}
                  <ul className="flex flex-col gap-2">
                    {TRUST.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-zinc-500"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-emerald-500 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Stats + testimonial snippet */}
                <div className="p-10 md:p-14 flex flex-col gap-8 justify-center">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {STATS.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                        className="glass rounded-xl p-4 border-hover-glow"
                      >
                        <div className="text-2xl md:text-3xl font-black text-white tabular-nums gradient-text">
                          {s.value}
                        </div>
                        <div className="text-xs text-zinc-500 mt-0.5">
                          {s.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass rounded-2xl p-6 space-y-4"
                  >
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm text-zinc-300 leading-relaxed">
                      &ldquo;DigitalMasonry built our entire platform from zero
                      in 10 weeks. The quality and communication were
                      exceptional.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 pt-1 border-t border-white/8">
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        SC
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Sarah Chen
                        </div>
                        <div className="text-xs text-zinc-500">
                          CEO, Apex Analytics
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Availability indicator */}
                  <div className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span>
                      <strong className="text-white">
                        Currently accepting
                      </strong>{" "}
                      new projects for Q3 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
