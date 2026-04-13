"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Typed from "typed.js";
import { RippleButton } from "@/components/ui/RippleButton";
// import { useLenis } from "@studio-freight/react-lenis";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function Hero() {
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    lenis?.scrollTo(`#${id}`, { offset: -80 });
  };

  const reduceMotion = useReducedMotion();
  const typedEl = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (!typedEl.current || reduceMotion) return;

    typedInstance.current = new Typed(typedEl.current, {
      strings: [
        "Frontend Developer",
        "Creative Technologist",
        "Next.js Specialist",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typedInstance.current?.destroy();
  }, [reduceMotion]);

  return (
    <section 
      id="home" 
      // pt-24 (Mobile) aur pt-32 (Desktop) - Yeh Navbar se safe distance hai
      className="relative min-h-screen flex flex-col justify-start pt-24 md:pt-32 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Status Tag */}
          <motion.div variants={itemReveal} className="mb-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70">
                Available for Projects
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemReveal}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[1] md:leading-[0.9] text-foreground mb-6"
          >
            Wasiq Khan. <br />
            <span className="text-muted-foreground italic font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Digital Experiences.
            </span>
          </motion.h1>

          <motion.div variants={itemReveal} className="text-lg md:text-2xl text-muted-foreground mb-8 md:mb-10 h-8">
            I am a <span className="text-foreground font-semibold" ref={typedEl} />
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemReveal}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <RippleButton
              onClick={() => scrollTo("projects")}
              className="h-14 md:h-16 px-8 md:px-10 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              View Work
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </RippleButton>

            <div className="flex gap-4 flex-1 sm:flex-none">
              <button
                onClick={() => scrollTo("contact")}
                className="h-14 md:h-16 flex-1 px-8 md:px-10 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-md text-foreground font-medium hover:bg-foreground/10 transition-all flex items-center justify-center gap-2"
              >
                Get in Touch
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              {/* <a
                href="/cv.pdf"
                download="wasiq-cv.pdf"
                className="h-14 md:h-16 w-14 md:w-16 flex items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-md text-foreground hover:bg-foreground/10 transition-all"
              >
                <FileText className="h-5 w-5 md:h-6 md:w-6" />
              </a> */}
            </div>
          </motion.div>

          {/* Mini Stats - Responsive Fix */}
          <motion.div 
            variants={itemReveal}
            // Mobile par spacing ko gap-8 se manage kiya hai aur mt-16 rakha hai
            className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-foreground/10 pt-10 pb-10"
          >
            {[
              { label: "Location", value: "Remote / Global" },
              { label: "Specialty", value: "High-End UI/UX" },
              { label: "Current Role", value: "Frontend Dev" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <p className="text-sm md:text-base font-bold text-foreground uppercase tracking-wider">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}