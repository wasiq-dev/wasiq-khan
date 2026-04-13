"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react"; // Menu icons import karein
// import { useLenis } from "@studio-freight/react-lenis"; // Lenis hook use karein

type NavItem = { id: string; label: string };

const NAV: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  // const lenis = useLenis();

  const ids = useMemo(() => NAV.map((n) => n.id), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.3, 0.5] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  function scrollTo(id: string) {
    // lenis?.scrollTo(`#${id}`, { offset: -80 });
    setIsOpen(false); // Menu close karein jab link click ho
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center p-4">
      <nav
        className={cn(
          "flex items-center justify-between md:justify-start w-full max-w-fit gap-2 px-3 py-2 rounded-full transition-all duration-500 border",
          isScrolled || isOpen
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg" 
            : "bg-transparent border-transparent"
        )}
      >
        {/* Logo Section */}
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="flex items-center gap-1.5 px-4 py-1.5 group focus:outline-none"
        >
          <span className="text-sm font-bold tracking-tighter uppercase italic">
            W<span className="text-primary">K</span>
          </span>
          <div className="h-4 w-[1px] bg-border/60 mx-1 hidden sm:block" />
          <span className="text-sm font-medium hidden sm:block">Wasiq Khan</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 z-[-1] bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-border/50 rounded-3xl p-6 shadow-2xl md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "text-left px-4 py-3 text-lg font-medium rounded-xl transition-all",
                    active === item.id 
                      ? "bg-secondary text-foreground" 
                      : "text-muted-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}