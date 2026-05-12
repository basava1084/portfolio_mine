import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CinematicLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center">
      {/* Soft Glow in background */}
      <div className="absolute inset-0 bg-radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" />
      
      <div className="relative space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-mono uppercase tracking-[1.5em] text-black/30 ml-[1.5em]"
        >
          Transmitting_Light
        </motion.div>

        <div className="relative w-48 h-[1px] bg-black/5">
          <motion.div 
            className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: progress / 100 }}
          />
        </div>

        <div className="text-4xl font-black tracking-tighter text-black/10">
          {Math.round(progress)}
        </div>
      </div>
    </div>
  );
};

export default CinematicLoader;
