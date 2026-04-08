"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="mb-10">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

