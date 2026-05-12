import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white py-20 md:py-0">
      
      {/* 🔮 MOBILE-ONLY IMAGE (STOPS OVERLAPPING) */}
      <div className="absolute top-20 md:hidden w-[220px] aspect-square rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-0 opacity-40">
        <img 
          src="/me.jpg" 
          alt="Basavaraj" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔮 ARCHITECTURAL SIDEBARS (HIDDEN ON MOBILE) */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 h-[60%] w-12 items-center justify-center pointer-events-none">
        <div className="flex gap-1 h-full items-center">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: ['10%', '80%', '30%', '100%', '10%'],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] bg-primary rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-20 md:mt-0">
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50vw] md:text-[30vw] font-black text-black/[0.02] whitespace-nowrap leading-none select-none uppercase">
              FULL_STACK
            </h2>

            <motion.h1 
              style={{ scale, rotate }}
              className="text-[12vw] sm:text-[10vw] md:text-[6vw] font-black leading-none tracking-tighter text-primary uppercase relative z-10"
            >
              Full Stack<br />Developer
            </motion.h1>

            <p className="text-[14px] sm:text-[16px] md:text-[14px] font-bold tracking-[1.5em] md:tracking-[2em] uppercase text-primary pt-12 md:pt-24 md:ml-[2em]">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 scale-75 md:scale-100"
      >
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[8px] font-mono tracking-[1em] text-primary/50 uppercase ml-[1em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
