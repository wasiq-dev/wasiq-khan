'use client';

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";
import Experience from "@/components/three/Experience";
import SmoothScroll from "@/components/SmoothScroll";

// Is component ko abhi humne banaya hai (Make sure file exist karti ho)
import { Preloader } from "@/components/PreLoader"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3.5 seconds ka timer taake animation sahi se dikhe
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Loading khatam hone par page ko top par scroll kar dena behtar hota hai
      window.scrollTo(0, 0);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Loader logic */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <SmoothScroll>
        {/* Jab tak loading ho rahi hai, content ko hide/lock rakhte hain */}
        <div className={`relative min-h-screen ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
          <ScrollProgress />
          <Navbar />
          
          {/* Background 3D Layer */}
          <Experience />

          <main className="relative z-10">
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="interests">
              <Interests />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}