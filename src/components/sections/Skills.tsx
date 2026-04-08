"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  GitBranch,
  Globe,
  LayoutGrid,
  MessagesSquare,
  MonitorSmartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Section } from "../Section";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    icon: <Code2 className="h-4 w-4" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Soft Skills",
    icon: <MessagesSquare className="h-4 w-4" />,
    skills: [
      "Problem Solving",
      "Quick Learner",
      "Team Collaboration",
      "Communication Skills",
      "Time Management",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="h-4 w-4" />,
    skills: ["Claude AI", "SpecKit", "WordPress", "Git & GitHub", "Cursor"],
  },
  {
    title: "Other Skills",
    icon: <Sparkles className="h-4 w-4" />,
    skills: [
      "Responsive Web Design",
      "Cross-browser Compatibility",
      "UI/UX Principles",
      "API Integration",
      "Basic SEO Optimization",
    ],
  },
];

const ICONS: Record<string, React.ReactNode> = {
  HTML5: <Globe className="h-4 w-4" />,
  CSS3: <LayoutGrid className="h-4 w-4" />,
  JavaScript: <Brain className="h-4 w-4" />,
  "React.js": <Code2 className="h-4 w-4" />,
  "Next.js": <MonitorSmartphone className="h-4 w-4" />,
  "Git & GitHub": <GitBranch className="h-4 w-4" />,
};

const LEVEL: Record<string, number> = {
  HTML5: 92,
  CSS3: 88,
  JavaScript: 86,
  "React.js": 85,
  "Next.js": 82,
  "Git & GitHub": 78,
  Cursor: 80,
  WordPress: 72,
  "API Integration": 76,
  "Responsive Web Design": 88,
  "UI/UX Principles": 80,
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A modern frontend toolkit">
      <div className="grid gap-6 lg:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="card card-hover p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card-2/50 text-foreground">
                {cat.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {cat.title}
                </p>
                <p className="text-sm text-muted">Core strengths & tools</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cat.skills.map((s) => (
                <div
                  key={s}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card-2/30 px-4 py-3 transition-colors hover:bg-card-2/70"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-white/80 transition-transform duration-300 group-hover:scale-110">
                    {ICONS[s] ?? (
                      <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate text-sm font-medium text-foreground">
                        {s}
                      </span>
                      {LEVEL[s] ? (
                        <span className="text-xs font-medium text-muted">
                          {LEVEL[s]}%
                        </span>
                      ) : null}
                    </div>
                    {LEVEL[s] ? (
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${LEVEL[s]}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-2))]"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

