"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Creative", "Developer", "Designer", "Innovator", "Wasiq Khan"];

export const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Word cycling logic
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    // Progress counter logic
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Curtain Panels (Exiting effect)
  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
    >
      {/* Background Staggered Panels for extra depth */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: "100%" }}
            exit={{ height: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05 * i,
            }}
            className="w-full bg-[#111] border-r border-white/5"
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Animated Text */}
        <div className="overflow-hidden h-20 flex items-center">
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-4xl md:text-6xl font-medium flex items-center gap-4"
          >
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
            {words[index]}
          </motion.p>
        </div>

        {/* Minimal Progress Bar & Percentage */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 text-center">
          <div className="w-full h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-blue-500"
            />
          </div>
          <p className="mt-4 font-mono text-xs tracking-widest text-gray-500 uppercase">
            System Initializing — {progress}%
          </p>
        </div>
      </div>

      {/* Decorative Text in background */}
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        className="absolute bottom-10 right-10 text-[15vw] font-bold text-white pointer-events-none select-none"
      >
        WASIQ
      </motion.span>
    </motion.div>
  );
};