import { motion } from 'framer-motion';

const Storytelling = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-32 px-6 bg-primary overflow-hidden">
      {/* Cinematic Background Labels */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <h2 className="absolute top-1/4 -left-20 text-[20vw] font-black text-white/[0.03] select-none uppercase">REVA_UNI</h2>
        <h2 className="absolute bottom-1/4 -right-20 text-[20vw] font-black text-white/[0.03] select-none uppercase">MCA_2026</h2>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="space-y-6"
        >
          <span className="text-[10px] font-mono tracking-[1.5em] text-white/50 uppercase">[ THE_NARRATIVE ]</span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            "BEYOND THE CODE,<br />
            I FIND THE <span className="italic text-black/20 font-light">HUMAN RHYTHM</span>."
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-white/60 font-light leading-relaxed"
          >
            My journey at <span className="text-white font-bold">REVA UNIVERSITY</span> is more than just an MCA degree. It is a quest to master the intersection of <span className="text-white font-bold">Java Architecture</span> and <span className="text-white font-bold">Machine Learning</span>. I don't just see cold algorithms; I see a new language for digital storytelling.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-white/60 font-light leading-relaxed"
          >
            From predicting employee salaries with ML to building peer-learning platforms with React, every project is a chapter in the grand narrative of our digital future. I build experiences that bridge the gap between complex logic and seamless human interaction.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="pt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black font-bold tracking-widest text-[10px] uppercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Innovating with Intelligence
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Storytelling;
