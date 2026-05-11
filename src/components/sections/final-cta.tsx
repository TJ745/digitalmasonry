"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32" aria-label="Call to action">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/80 via-violet-950/60 to-zinc-950/80 p-10 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[200px] rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none rounded-3xl" />

          <div className="relative space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Let&apos;s Build Together
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Ready to bring your
                <br />
                <span className="gradient-text">idea to life?</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
                Discovery calls are always free.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" variant="gradient" asChild className="w-full sm:w-auto shadow-2xl shadow-violet-500/30">
                <Link
                  href={siteConfig.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar size={18} />
                  Book a Discovery Call
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/contact">
                  <Mail size={18} />
                  Start a Project
                </Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500 pt-2">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Free discovery call
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> No upfront commitment
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Response within 24h
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 100% IP ownership
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
