"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  rippleClassName?: string;
};

export function RippleButton({
  className,
  rippleClassName,
  onClick,
  ...props
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number; size: number }[]
  >([]);

  return (
    <button
      ref={ref}
      {...props}
      onClick={(e) => {
        const el = ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const size = Math.max(rect.width, rect.height) * 1.15;
          const id = Date.now() + Math.random();
          setRipples((r) => [...r, { id, x, y, size }]);
          window.setTimeout(() => {
            setRipples((r) => r.filter((rr) => rr.id !== id));
          }, 520);
        }
        onClick?.(e);
      }}
      className={cn("relative overflow-hidden", className)}
    >
      {props.children}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        {ripples.map((r) => (
          <span
            key={r.id}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full",
              "bg-black/10 dark:bg-white/15",
              "animate-[ripple_520ms_ease-out_forwards]",
              rippleClassName
            )}
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
            }}
          />
        ))}
      </span>
    </button>
  );
}

