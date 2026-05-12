"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/constants/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-black text-white tracking-tight tabular-nums">
      {count}
      <span className="gradient-text">{suffix}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-24" aria-label="Statistics">
      <div className="divider-gradient mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 overflow-hidden rounded-2xl border border-white/8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass p-8 md:p-10 flex flex-col gap-2 group hover:bg-white/5 transition-colors duration-300"
            >
              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t" />

              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-zinc-500 font-medium mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider-gradient mt-0" />
    </section>
  );
}
