import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* 🔮 THE NEURAL DATA FLOW (LEFT & RIGHT) */}
      
      {/* LEFT: THE HARMONIC EQUALIZER */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 h-[60%] w-12 flex items-center justify-center pointer-events-none">
        <div className="flex gap-1 h-full items-center">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: ['10%', '80%', '30%', '100%', '10%'],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 1.5 + i * 0.1, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-[1px] bg-primary rounded-full"
            />
          ))}
        </div>
      </div>

      {/* RIGHT: THE SATELLITE RADAR */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-[1px] border-primary/5 rounded-full relative flex items-center justify-center"
        >
          {/* Radar Sweep Line */}
          <div className="absolute top-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-t from-primary to-transparent origin-bottom" />
          
          {/* Internal Rings */}
          <div className="w-3/4 h-3/4 border-[1px] border-primary/10 rounded-full animate-pulse" />
          <div className="w-1/2 h-1/2 border-[1px] border-primary/20 rounded-full" />
          
          {/* Data Points */}
          <div className="absolute top-10 left-10 w-1 h-1 bg-primary rounded-full animate-ping" />
          <div className="absolute bottom-10 right-20 w-1 h-1 bg-primary rounded-full animate-ping [animation-delay:1s]" />
        </motion.div>
      </div>

      {/* ⚡ KINETIC CONNECTION LINES */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-center gap-20 opacity-5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear", delay: i }}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        ))}
      </div>

      {/* 🌠 FLOATING GLASS FRAGMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
            animate={{ 
              y: [null, '-150px'],
              rotate: [0, 360],
              opacity: [0, 0.2, 0]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-6 h-6 bg-primary/5 backdrop-blur-md border border-white/20 rounded-sm"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-black/[0.02] whitespace-nowrap leading-none select-none uppercase">
              FULL_STACK
            </h2>

            <motion.h1 
              style={{ scale, rotate }}
              className="text-[6vw] font-black leading-none tracking-tighter text-primary uppercase relative z-10"
            >
              Full Stack<br />Developer
            </motion.h1>

            <p className="text-[14px] font-bold tracking-[2em] uppercase text-primary pt-24 ml-[2em]">
              [ BASAVARAJ_HG ]
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[8px] font-mono tracking-[1em] text-primary/50 uppercase ml-[1em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
