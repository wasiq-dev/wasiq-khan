"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function isCoarsePointer() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const x = useSpring(0, { stiffness: 900, damping: 60, mass: 0.2 });
  const y = useSpring(0, { stiffness: 900, damping: 60, mass: 0.2 });

  const x2 = useSpring(0, { stiffness: 500, damping: 50, mass: 0.3 });
  const y2 = useSpring(0, { stiffness: 500, damping: 50, mass: 0.3 });

  useEffect(() => {
    if (isCoarsePointer()) return;
    setEnabled(true);

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      x2.set(e.clientX);
      y2.set(e.clientY);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, x2, y, y2]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 mix-blend-difference"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[59] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 mix-blend-difference"
        style={{ x: x2, y: y2 }}
      />
    </>
  );
}

