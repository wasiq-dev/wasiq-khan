"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = resolved !== "light";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 backdrop-blur",
        "transition-colors hover:bg-card-2/70 focus:outline-none focus:ring-2 focus:ring-accent/40",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <div className="h-4 w-4 rounded bg-white/10" />
      ) : isDark ? (
        <Sun className="h-4 w-4 text-white/90" />
      ) : (
        <Moon className="h-4 w-4 text-black/80" />
      )}
    </button>
  );
}

