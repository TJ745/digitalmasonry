"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  name: string;
  industry: string;
  description: string;
  technologies: readonly string[];
  results: readonly string[];
  color: string;
  index?: number;
}

export function ProjectCard({
  id,
  name,
  industry,
  description,
  technologies,
  results,
  color,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1"
    >
      {/* Color header band */}
      <div
        className={cn(
          "h-2 w-full bg-gradient-to-r",
          color.replace("from-", "from-").replace("to-", "to-")
        )}
      />

      {/* Gradient overlay */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-40 bg-gradient-to-br opacity-40 pointer-events-none",
          color
        )}
      />

      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge variant="outline" className="mb-3 text-xs">
              {industry}
            </Badge>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
              {name}
            </h3>
          </div>
          <Link
            href={`/work/${id}`}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white"
            aria-label={`View ${name} case study`}
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Results */}
        <div className="mb-6 space-y-2">
          {results.map((result) => (
            <div key={result} className="flex items-center gap-2 text-sm">
              <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-emerald-400/80">{result}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 pt-6 border-t border-white/8">
          <Link
            href={`/work/${id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link"
          >
            View Case Study
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
