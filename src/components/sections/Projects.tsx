"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "../Section";
import { cn } from "@/lib/cn";

type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  accent: "indigo" | "sky";
};

const PROJECTS: Project[] = [
  {
    title: "Premium Portfolio",
    description:
      "A minimal, animated portfolio with smooth interactions and dark-first design.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "#",
    accent: "indigo",
  },
  {
    title: "SaaS Landing Page",
    description:
      "A conversion-focused landing page with sections, pricing, and responsive layout.",
    tech: ["React", "Tailwind", "SEO"],
    href: "#",
    accent: "sky",
  },
  {
    title: "Dashboard UI",
    description:
      "Modern dashboard UI with cards, charts placeholders, and clean information hierarchy.",
    tech: ["Next.js", "UI/UX", "API Integration"],
    href: "#",
    accent: "indigo",
  },
  {
    title: "E-commerce Product Page",
    description:
      "Responsive product layout with gallery, variants, and smooth micro-interactions.",
    tech: ["React", "Responsive Design", "Performance"],
    href: "#",
    accent: "sky",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Projects & experiments">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <div key={p.title} className="card card-hover group relative overflow-hidden p-6">
            <div
              className={cn(
                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                p.accent === "indigo"
                  ? "bg-[radial-gradient(700px_350px_at_20%_0%,rgba(99,102,241,0.18),transparent_60%)]"
                  : "bg-[radial-gradient(700px_350px_at_20%_0%,rgba(56,189,248,0.14),transparent_60%)]"
              )}
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {p.description}
                </p>
              </div>
              <a
                href={p.href}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card-2/40",
                  "transition-colors hover:bg-card-2/70 focus:outline-none focus:ring-2 focus:ring-accent/35"
                )}
                aria-label={`Open ${p.title} demo`}
              >
                <ExternalLink className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <a
                href={p.href}
                className="link-hover inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                Live / Demo <ExternalLink className="h-4 w-4" />
              </a>

              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.98 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="hidden sm:block text-xs text-muted"
              >
                Hover for details
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/5" />
          </div>
        ))}
      </div>
    </Section>
  );
}

