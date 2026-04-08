"use client";

import { Brush, Cpu, Goal, Medal } from "lucide-react";
import { Section } from "../Section";
import { cn } from "@/lib/cn";

const INTERESTS: { label: string; icon: React.ReactNode }[] = [
  { label: "Cricket", icon: <Medal className="h-4 w-4" /> },
  { label: "Football", icon: <Goal className="h-4 w-4" /> },
  { label: "Learning New Technologies", icon: <Cpu className="h-4 w-4" /> },
  { label: "UI/UX Design Exploration", icon: <Brush className="h-4 w-4" /> },
];

export function Interests() {
  return (
    <Section id="interests" eyebrow="Interests" title="What keeps me curious">
      <div className="card p-6">
        <div className="flex flex-wrap gap-3">
          {INTERESTS.map((t) => (
            <div
              key={t.label}
              className={cn(
                "group inline-flex items-center gap-2 rounded-2xl border border-border bg-card-2/35 px-4 py-3",
                "transition-colors hover:bg-card-2/70"
              )}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/80 transition-transform group-hover:scale-105">
                {t.icon}
              </span>
              <span className="text-sm font-medium text-foreground">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

