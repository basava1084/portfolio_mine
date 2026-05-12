import { Home, User, Code, Briefcase, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: MessageSquare, label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 md:px-8 py-3 md:py-4 glass-card rounded-full flex items-center gap-6 md:gap-12">
      <div className="hidden sm:flex items-center gap-2 mr-4 md:mr-8 border-r border-black/5 pr-4 md:pr-8">
        <span className="text-primary font-bold tracking-tighter">❯_</span>
        <span className="text-[10px] font-mono tracking-widest text-black/20">OS 1.0</span>
      </div>
      
      <div className="flex items-center gap-6 md:gap-12">
        {navItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center"
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-black transition-colors group-hover:text-primary" />
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-[8px] font-mono tracking-widest uppercase px-3 py-1 rounded-full pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
