import { motion } from 'framer-motion';

const Contact = () => {
  const contacts = [
    { label: "EMAIL", value: "basavarajhg8970@gmail.com", href: "mailto:basavarajhg8970@gmail.com" },
    { label: "LINKEDIN", value: "Basavaraj H G", href: "https://linkedin.com/in/basavaraj-h-g-565a51342" },
    { label: "GITHUB", value: "basava1084", href: "https://github.com/basava1084" },
    { label: "PHONE", value: "+91 7411278970", href: "tel:7411278970" }
  ];

  return (
    <section className="relative min-h-[60vh] w-full py-20 px-6 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-[9px] font-mono tracking-[1.5em] text-primary uppercase inline-block whitespace-nowrap">[ SIGNAL_OUT ]</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase leading-tight">
              GET IN TOUCH
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {contacts.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card rounded-[20px] p-6 flex flex-col items-center justify-center space-y-2 hover:border-primary/30 transition-all duration-500 border border-black/5"
              >
                <div className="text-[8px] font-mono tracking-widest text-black/30 uppercase">{contact.label}</div>
                <div className="text-[10px] font-bold text-black truncate w-full">{contact.value}</div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[9px] font-mono text-black/20 tracking-widest uppercase">
            © 2024 BASAVARAJ HG / ALL RIGHTS RESERVED
          </div>
          <div className="text-[9px] font-mono text-black/20 tracking-widest uppercase whitespace-nowrap">
            REVA UNIVERSITY / BANGALORE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
