import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-32 px-6 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase whitespace-nowrap">[ CAREER_OBJECTIVE ]</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-[0.9] uppercase">
                SCULPTING<br />THE FUTURE
              </h2>
              <p className="text-base md:text-lg text-black/40 font-light leading-relaxed">
                I am an <span className="text-black font-bold">MCA Scholar</span> at REVA UNIVERSITY with a CGPA of <span className="text-primary font-bold">8.82</span>. My mission is to blend Software Development and Data Analytics into a singular, high-performance experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-black/5">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest">Education</div>
                <div className="text-lg font-bold text-black">MCA (Pursuing)</div>
                <div className="text-xs text-black/40">REVA University, Bangalore</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest">Internship</div>
                <div className="text-lg font-bold text-black">Web Developer</div>
                <div className="text-xs text-black/40">Dev Creations and Solutions (6 Months)</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="glass-card rounded-[40px] p-12 space-y-12 relative z-10">
              <div className="space-y-4">
                <div className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase whitespace-nowrap">Languages</div>
                <div className="flex flex-wrap gap-4 text-sm font-bold tracking-widest text-black">
                  <span>KANNADA</span> <span>/</span> <span>ENGLISH</span> <span>/</span> <span>HINDI</span> <span>/</span> <span>TELUGU</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase whitespace-nowrap">Soft Skills</div>
                <div className="space-y-3 text-lg text-black/50 font-light">
                  <p>Critical Thinking</p>
                  <p>Adaptability</p>
                  <p>Attention to Detail</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
