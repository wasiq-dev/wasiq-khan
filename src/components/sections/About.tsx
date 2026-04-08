"use client";

import { Section } from "../Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Crafting clean, usable interfaces">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="card p-6 lg:col-span-7">
          <p className="text-base leading-7 text-muted">
            Frontend Developer skilled in modern web technologies with strong
            problem-solving abilities and a passion for UI/UX design. I enjoy
            building fast, responsive interfaces, polishing micro-interactions,
            and turning ideas into reliable products.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { k: "Location", v: "Remote / On-site" },
              { k: "Role", v: "Frontend Developer" },
              { k: "Strengths", v: "UI/UX, Responsiveness" },
              { k: "Mindset", v: "Curious, detail-driven" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-border bg-card-2/40 p-4">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
                  {x.k}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6 lg:col-span-5">
          <p className="text-sm font-medium text-foreground">Quick bio</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Strong foundation in HTML/CSS/JS with React & Next.js.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent-2" />
              Focused on accessibility, performance, and polish.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
              Comfortable collaborating with teams and iterating fast.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

