"use client";

import { motion } from "framer-motion";
import {
  Globe, AppWindow, Smartphone, Cloud, Palette, Rocket,
  Shield, Link as LinkIcon, Server, Gauge, Search,
  ShoppingCart, LayoutDashboard, Brain, Workflow, CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/constants/site";

const iconMap: Record<string, React.ElementType> = {
  Globe, AppWindow, Smartphone, Cloud, Palette, Rocket,
  Shield, Link: LinkIcon, Server, Gauge, Search,
  ShoppingCart, LayoutDashboard, Brain, Workflow,
};

const categoryColors = [
  "from-indigo-500/15 to-violet-500/15",
  "from-violet-500/15 to-purple-500/15",
  "from-blue-500/15 to-indigo-500/15",
  "from-emerald-500/15 to-teal-500/15",
  "from-pink-500/15 to-rose-500/15",
  "from-amber-500/15 to-orange-500/15",
  "from-sky-500/15 to-blue-500/15",
  "from-teal-500/15 to-cyan-500/15",
  "from-rose-500/15 to-pink-500/15",
  "from-orange-500/15 to-amber-500/15",
  "from-cyan-500/15 to-sky-500/15",
  "from-purple-500/15 to-violet-500/15",
  "from-lime-500/15 to-emerald-500/15",
  "from-fuchsia-500/15 to-purple-500/15",
  "from-slate-500/15 to-zinc-500/15",
];

export function ServiceCards() {
  return (
    <section className="py-8 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const gradient = categoryColors[i % categoryColors.length];

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="glass rounded-2xl p-7 flex flex-col gap-6 hover:border-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} border border-white/10 shrink-0`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {service.title}
                    </h2>
                    {service.featured && (
                      <Badge variant="default" className="mt-1 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-400 leading-relaxed">{service.summary}</p>

                {/* Deliverables */}
                <div className="space-y-2.5">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="pt-4 border-t border-white/8">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2.5">
                    Tech stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
