import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Scene from './components/canvas/Scene';
import Navigation from './components/layout/Navigation';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Storytelling from './components/sections/Storytelling';
import Contact from './components/sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  
  // Desktop-only transformations (Hidden on mobile via CSS)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <div className="relative min-h-screen bg-white">
      <CustomCursor />
      <Navigation />
      
      <Scene />

      {/* 👤 THE ARCHITECT: ONLY VISIBLE ON DESKTOP (md and up) */}
      <div className="hidden md:flex fixed inset-0 z-[5] pointer-events-none items-center justify-center">
        <motion.div
          style={{ opacity, scale, y }}
          className="relative w-[450px] aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-[0_30px_100px_rgba(0,0,0,0.1)] bg-white"
        >
          <img 
            src="/me.jpg" 
            alt="The Architect" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <main className="relative z-10">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <Storytelling />
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
