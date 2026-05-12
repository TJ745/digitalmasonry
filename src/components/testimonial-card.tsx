"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  className,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 md:p-8 flex flex-col gap-5 h-full",
        "hover:border-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-black/30",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-zinc-300 text-sm md:text-base leading-relaxed flex-1">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-zinc-500">
            {role} · {company}
          </div>
        </div>
      </div>
    </div>
  );
}
