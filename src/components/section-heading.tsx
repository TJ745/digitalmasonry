"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

function WordBlurReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.65,
            delay: delay + i * 0.055,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={cn("inline-block mr-[0.26em] last:mr-0", className)}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  const baseTitleDelay = eyebrow ? 0.15 : 0;

  return (
    <div className={cn("flex flex-col gap-5", alignClass, className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          {eyebrow}
        </motion.div>
      )}

      <h2 className="text-display text-white leading-none">
        <WordBlurReveal text={title} delay={baseTitleDelay} />
        {titleHighlight && (
          <>
            {" "}
            <WordBlurReveal
              text={titleHighlight}
              delay={baseTitleDelay + title.split(" ").length * 0.055}
              className="gradient-text"
            />
          </>
        )}
      </h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={cn(
            "text-base md:text-lg text-zinc-400 leading-relaxed",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
