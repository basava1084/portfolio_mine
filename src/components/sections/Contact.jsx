import { motion } from 'framer-motion';

const Contact = () => {
  const contacts = [
    { label: "Email", value: "basavarajhg8970@gmail.com", href: "mailto:basavarajhg8970@gmail.com" },
    { label: "LinkedIn", value: "in/basavaraj-h-g", href: "https://linkedin.com/in/basavaraj-h-g-565a51342" },
    { label: "GitHub", value: "basava1084", href: "https://github.com/basava1084" },
    { label: "Phone", value: "07411278970", href: "tel:07411278970" }
  ];

  return (
    <section className="relative min-h-screen w-full py-20 md:py-40 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="space-y-4 mb-20">
          <span className="text-[10px] font-mono tracking-[1.5em] text-primary uppercase">[ SIGNAL_OUT ]</span>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-black uppercase">GET IN<br />TOUCH</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-[30px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between hover:bg-primary transition-all duration-700 h-[200px] md:h-[250px]"
            >
              <div className="text-[10px] font-mono tracking-[1em] text-primary group-hover:text-white uppercase transition-colors">
                {contact.label}
              </div>
              <div className="text-xl md:text-3xl font-black text-black group-hover:text-white tracking-tighter transition-colors break-words">
                {contact.value}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 md:mt-40 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-black/20 tracking-widest uppercase">
            © 2024 BASAVARAJ HG / ALL RIGHTS RESERVED
          </div>
          <div className="text-[10px] font-mono text-black/20 tracking-widest uppercase">
            REVA UNIVERSITY / BANGALORE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
