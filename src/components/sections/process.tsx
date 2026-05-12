"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { process } from "@/constants/site";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
};

const colors = [
  {
    bg: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    dot: "bg-indigo-500",
  },
  {
    bg: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    text: "text-violet-400",
    dot: "bg-violet-500",
  },
  {
    bg: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    dot: "bg-blue-500",
  },
  {
    bg: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    dot: "bg-emerald-500",
  },
  {
    bg: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    dot: "bg-amber-500",
  },
];

export function Process() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-label="Our process"
    >
      {/* Background accent */}
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Process"
          title="How we turn ideas into"
          titleHighlight="shipped products."
          description="A proven five-phase process refined across 10+ projects. Transparent, iterative, and designed for momentum."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-14 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-5 gap-6">
              {process.map((step, i) => {
                const Icon = iconMap[step.icon] ?? Lightbulb;
                const color = colors[i];
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="flex flex-col items-center text-center gap-5"
                  >
                    {/* Icon circle */}
                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color.bg} border ${color.border} flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={22} className={color.text} />
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${color.dot} border-2 border-zinc-950`}
                      />
                    </div>

                    <div className="space-y-2">
                      <div
                        className={`text-xs font-bold tracking-widest uppercase ${color.text}`}
                      >
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

          {process.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Lightbulb;
            const color = colors[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-6 pb-10 last:pb-0"
              >
                <div
                  className={`shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br ${color.bg} border ${color.border} flex items-center justify-center relative z-10`}
                >
                  <Icon size={22} className={color.text} />
                </div>
                <div className="space-y-1.5 pt-2">
                  <div
                    className={`text-xs font-bold tracking-widest uppercase ${color.text}`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
