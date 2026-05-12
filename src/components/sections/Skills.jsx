import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["JAVA", "PYTHON", "JAVASCRIPT", "C"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Web Stack",
      skills: ["HTML5", "CSS3", "REACT", "JAVASCRIPT", "FIREBASE"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["GITHUB", "RENDER", "VS CODE", "FIREBASE AUTH"],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="relative min-h-screen w-full py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <span className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase ml-[1.5em]">[ KNOWLEDGE_MATRIX ]</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black">THE TOOLKIT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="glass-card rounded-[40px] p-12 space-y-12 hover:shadow-2xl transition-all group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white font-mono text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-3xl font-black text-black group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-6 py-3 bg-black/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-black/40 hover:bg-black hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
