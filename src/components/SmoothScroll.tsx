"use client";
import { ReactLenis } from '@studio-freight/react-lenis' 
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.08, // Thora sa slow lerp for more "premium" feel
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1, // Agar scroll fast karni ho tu 1.2 kar dein
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  )
}