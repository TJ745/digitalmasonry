"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  spinBorder?: boolean;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  hover = true,
  spinBorder = false,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    // Reset to off-card position so spotlight hides
    el.style.setProperty("--sx", "-200px");
    el.style.setProperty("--sy", "-200px");
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
      onMouseMove={hover ? handleMouseMove : undefined}
      onMouseLeave={hover ? handleMouseLeave : undefined}
      style={
        { "--sx": "-200px", "--sy": "-200px" } as React.CSSProperties
      }
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden group",
        "transition-all duration-300",
        hover && "border-hover-glow spotlight-card",
        hover && "hover:shadow-xl hover:shadow-black/40",
        spinBorder && "border-spin",
        className
      )}
    >
      {/* Inner spotlight layer (above children) */}
      {hover && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(280px circle at var(--sx, -200px) var(--sy, -200px), rgba(99,102,241,0.07), transparent 70%)",
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};
