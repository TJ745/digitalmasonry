"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/constants/site";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  Backend: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  Database: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  Cloud: "text-sky-400 border-sky-500/20 bg-sky-500/5",
  Mobile: "text-pink-400 border-pink-500/20 bg-pink-500/5",
  Design: "text-purple-400 border-purple-500/20 bg-purple-500/5",
  AI: "text-violet-400 border-violet-500/20 bg-violet-500/5",
  Payments: "text-green-400 border-green-500/20 bg-green-500/5",
  Language: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
  Styling: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  ORM: "text-orange-400 border-orange-500/20 bg-orange-500/5",
  DevOps: "text-red-400 border-red-500/20 bg-red-500/5",
};

export function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-24 md:py-32" aria-label="Technology stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Built with the tools that"
          titleHighlight="power the web."
          description="We work with the modern, battle-tested technologies used by the world's best engineering teams."
        />

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-3 w-max">
            {doubled.map((tech, i) => {
              const colorClass = categoryColors[tech.category] ?? "text-zinc-400 border-zinc-700 bg-zinc-800/40";
              return (
                <div
                  key={`${tech.name}-${i}`}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 ${colorClass}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
                  {tech.name}
                  <span className="text-xs opacity-50">{tech.category}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid view for desktop */}
        <div className="hidden lg:grid grid-cols-8 gap-2">
          {techStack.map((tech, i) => {
            const colorClass = categoryColors[tech.category] ?? "text-zinc-400 border-zinc-700 bg-zinc-800/40";
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center text-xs ${colorClass} hover:-translate-y-1 transition-transform duration-200 cursor-default`}
              >
                <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                <span className="font-medium text-[11px] leading-tight">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
