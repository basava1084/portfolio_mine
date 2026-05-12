import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "PROGRAMMING",
      skills: ["Java", "Python", "JavaScript", "C"]
    },
    {
      title: "WEB STACK",
      skills: ["HTML5", "CSS3", "JavaScript", "Firebase"]
    },
    {
      title: "TOOLS & DEV",
      skills: ["GitHub", "Render", "VS Code", "Firebase Auth"]
    }
  ];

  return (
    <section className="relative min-h-screen w-full py-20 md:py-40 px-6 bg-transparent">
      <div className="container mx-auto">
        <div className="space-y-4 mb-20 text-center md:text-left">
          <span className="text-[9px] font-mono tracking-[1em] md:tracking-[1.5em] text-primary uppercase inline-block whitespace-nowrap">[ TECH_MATRIX ]</span>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none">SKILLS<br />CORE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-[30px] md:rounded-[40px] p-8 md:p-12 space-y-8 text-center md:text-left hover:scale-105 transition-transform"
            >
              <div className="text-[10px] font-mono tracking-[1em] text-primary uppercase whitespace-nowrap">{category.title}</div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-5 py-3 bg-black/5 rounded-full text-[10px] md:text-xs font-bold text-black uppercase tracking-widest">
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
