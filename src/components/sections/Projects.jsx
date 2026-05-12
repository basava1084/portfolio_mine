import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "EMOTION AI",
      category: "AI + MENTAL HEALTH",
      description: "AI-based emotion detection and mental health support system that analyzes user sentiment and provides real-time wellness suggestions.",
      tags: ["AI", "Emotion Detection", "Wellness", "Python"],
      link: "https://our-minor-project.vercel.app/",
      image: "/emotion.png"
    },
    {
      title: "SKILL SWAP",
      category: "REACT + FIREBASE",
      description: "A full-stack peer learning platform with real-time chat, skill profiles, and authentication.",
      tags: ["React", "Firebase", "Auth", "Real-time"],
      link: "https://github.com/basava1084/skillswap.git",
      image: "/skillswap.png"
    },
    {
      title: "SALARY PREDICTION",
      category: "MACHINE LEARNING",
      description: "Deployed regression system with ML preprocessing pipeline and Flask integration.",
      tags: ["Python", "Flask", "ML", "Regression"],
      link: "https://github.com/basava1084/salary_predection_using_ml.git",
      image: "/salary.png"
    },
    {
      title: "CODE MINING",
      category: "JAVA DEVELOPMENT",
      description: "Java tool for analyzing code structures, extracting patterns, and generating insights.",
      tags: ["Java", "Analysis", "Patterns"],
      link: "https://github.com/basava1084/codemining.git",
      image: "/codemining.png"
    }
  ];

  return (
    <section className="relative min-h-screen w-full py-20 md:py-40 px-6 bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[1em] md:tracking-[1.5em] text-primary uppercase inline-block whitespace-nowrap">[ PROJECT_VAULT ]</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none">MY<br />PROJECTS</h2>
          </div>
          <div className="text-[10px] font-mono text-black/20 tracking-widest uppercase">
            ARCHIVE / 2024-2026
          </div>
        </div>

        <div className="space-y-20 md:space-y-40">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="group relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left"
            >
              <div className="space-y-6 md:space-y-8 order-2 md:order-1 w-full">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-primary tracking-widest uppercase">{project.category}</div>
                  <h3 className="text-3xl md:text-5xl font-black text-black tracking-tighter group-hover:italic transition-all uppercase">
                    {project.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-black/50 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 md:px-4 md:py-2 border border-black/5 rounded-full text-[8px] md:text-[10px] font-mono text-black/40 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-black hover:text-primary transition-colors border-b border-black pb-1"
                  >
                    View Source Code →
                  </a>
                </div>
              </div>

              <div className="relative aspect-video w-full glass-card rounded-[24px] md:rounded-[40px] overflow-hidden order-1 md:order-2 group-hover:scale-105 transition-all duration-1000 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
