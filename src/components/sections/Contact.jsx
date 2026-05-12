import { motion } from 'framer-motion';

const Contact = () => {
  const contacts = [
    { label: "EMAIL", value: "basavarajhg8970@gmail.com", link: "mailto:basavarajhg8970@gmail.com" },
    { label: "PHONE", value: "+91 74112 78970", link: "tel:07411278970" },
    { label: "LINKEDIN", value: "in/basavaraj-h-g", link: "https://linkedin.com/in/basavaraj-h-g-565a51342" },
    { label: "GITHUB", value: "basava1084", link: "https://github.com/basava1084" }
  ];

  return (
    <section className="relative min-h-screen w-full py-32 px-6 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase">[ SIGNAL_OUT ]</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase">
                LET'S<br />CONNECT
              </h2>
            </div>
            
            <p className="text-2xl text-black/40 font-light leading-relaxed">
              Currently based in <span className="text-black font-bold">Davanagere / Bangalore</span>. 
              Open for Software Developer, Web Developer, or Data Analyst roles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {contacts.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group flex items-center justify-between p-8 glass-card rounded-3xl hover:bg-black hover:text-white transition-all duration-500"
              >
                <div>
                  <div className="text-[10px] font-mono text-black/30 group-hover:text-white/30 uppercase tracking-widest">{contact.label}</div>
                  <div className="text-lg font-bold tracking-tighter">{contact.value}</div>
                </div>
                <div className="w-10 h-10 rounded-full border border-black/5 group-hover:border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                   →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
