"use client";

import { useMemo } from "react";
import { Particles } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

let inited = false;

export function HeroParticles() {
  // Initialize once per session.
  if (!inited) {
    inited = true;
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 36, density: { enable: true, area: 900 } },
        color: { value: ["#A5B4FC", "#38BDF8", "#FFFFFF"] },
        opacity: { value: { min: 0.08, max: 0.22 } },
        size: { value: { min: 1, max: 2.2 } },
        links: {
          enable: true,
          color: "#A5B4FC",
          opacity: 0.08,
          distance: 140,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: MoveDirection.none,
          outModes: { default: OutMode.out },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: { repulse: { distance: 120, duration: 0.3 } },
      },
      background: { color: { value: "transparent" } },
    }),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <Particles id="heroParticles" options={options} />
    </div>
  );
}

