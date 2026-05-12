import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 md:py-40 px-6 overflow-hidden bg-white">
      {/* 📊 BACKGROUND STAT: Responsive Size */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <h2 className="text-[60vw] md:text-[40vw] font-black text-primary/[0.03] select-none leading-none">8.82</h2>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: THE PHILOSOPHY */}
          <div className="lg:col-span-5 space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-4 md:space-y-6"
            >
              <span className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase">[ EXHIBIT.01_IDENTITY ]</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black leading-[0.9] uppercase">
                SCULPTING<br />THE FUTURE
              </h2>
              <p className="text-lg md:text-2xl text-black/40 font-light leading-relaxed max-w-md">
                I am an <span className="text-black font-bold">MCA Scholar</span> at REVA UNIVERSITY. My mission is to blend Software Development and Data Analytics.
              </p>
            </motion.div>

            {/* QUICK STATS: Stack on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 pt-10 border-t border-black/5">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest">Education</div>
                <div className="text-lg font-bold text-black">MCA (Pursuing)</div>
                <div className="text-xs text-black/40">REVA University, Bangalore</div>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest">Internship</div>
                <div className="text-lg font-bold text-black">Web Developer</div>
                <div className="text-xs text-black/40">Dev Creations (6 Months)</div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE KNOWLEDGE SHARDS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card rounded-[30px] md:rounded-[40px] p-8 md:p-10 space-y-6 md:space-y-8 flex flex-col justify-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase">Languages</div>
              <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-bold tracking-widest text-black uppercase">
                <span>KANNADA</span>
                <span className="text-primary">•</span>
                <span>ENGLISH</span>
                <span className="text-primary">•</span>
                <span>HINDI</span>
                <span className="text-primary">•</span>
                <span>TELUGU</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-[30px] md:rounded-[40px] p-8 md:p-10 space-y-6 md:space-y-8 text-center hover:scale-105 transition-transform"
            >
              <div className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase">Soft Skills</div>
              <div className="space-y-2 text-md md:text-lg font-light text-black/50">
                <div>Critical Thinking</div>
                <div>Adaptability</div>
                <div>Attention to Detail</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sm:col-span-2 glass-card rounded-[30px] md:rounded-[40px] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:scale-102 transition-transform"
            >
              <div className="space-y-2 md:space-y-4">
                <div className="text-[10px] font-mono tracking-[1em] text-primary uppercase">Academic_Path</div>
                <h3 className="text-2xl md:text-3xl font-black text-black">REVA UNIVERSITY <span className="text-primary">/</span> GFGC</h3>
              </div>
              <div className="flex gap-8 md:gap-10">
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-black text-black">8.82</div>
                  <div className="text-[8px] font-mono text-black/30 uppercase tracking-widest">MCA CGPA</div>
                </div>
                <div className="space-y-1 opacity-40">
                  <div className="text-2xl md:text-3xl font-black text-black">7.26</div>
                  <div className="text-[8px] font-mono text-black/30 uppercase tracking-widest">BSc CGPA</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
