"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  AppWindow,
  Smartphone,
  Cloud,
  Palette,
  Rocket,
  Shield,
  Link as LinkIcon,
  Server,
  Gauge,
  Search,
  ShoppingCart,
  LayoutDashboard,
  Brain,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/constants/site";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  AppWindow,
  Smartphone,
  Cloud,
  Palette,
  Rocket,
  Shield,
  Link: LinkIcon,
  Server,
  Gauge,
  Search,
  ShoppingCart,
  LayoutDashboard,
  Brain,
  Workflow,
};

const gradients = [
  "from-indigo-500/20 to-violet-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-blue-500/20 to-indigo-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-pink-500/20 to-rose-500/20",
  "from-amber-500/20 to-orange-500/20",
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32" aria-label="Services overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to"
            titleHighlight="ship great software."
            description="From design to deployment, we cover the full product lifecycle. Every service delivered with engineering excellence."
            align="left"
          />
          <Button variant="outline" size="lg" asChild className="shrink-0">
            <Link href="/services">
              All Services <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featuredServices.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const gradient = gradients[i % gradients.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group glass rounded-2xl p-6 md:p-7 flex flex-col gap-5 hover:border-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl",
                    gradient,
                  )}
                  style={{ opacity: 0 }}
                />
                <div
                  className={cn(
                    "absolute top-0 right-0 w-full h-full bg-linear-to-bl rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none",
                    gradient,
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br",
                    gradient,
                    "border border-white/10",
                  )}
                >
                  <Icon size={20} className="text-white" />
                </div>

                <div className="flex flex-col gap-2.5 flex-1 relative">
                  <h3 className="text-base font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 relative">
                  {service.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                  {service.tech.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-zinc-600">
                      +{service.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <Link
                  href={`/services#${service.id}`}
                  className="relative flex items-center gap-1.5 text-sm font-medium text-zinc-600 group-hover:text-indigo-400 transition-colors duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
