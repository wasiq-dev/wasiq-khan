"use client";

import { ThemeProvider } from "next-themes";
import { MotionProvider } from "@/components/MotionProvider";
import { CustomCursor } from "@/components/CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <CustomCursor />
      <MotionProvider>{children}</MotionProvider>
    </ThemeProvider>
  );
}

