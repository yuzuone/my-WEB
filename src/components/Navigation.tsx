import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: '精选作品', href: '#projects', id: 'projects' },
    { name: '职业历程', href: '#experience', id: 'experience' },
    { name: '专业技能', href: '#capabilities', id: 'capabilities' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0,
      }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (id: string) => activeSection === id;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 sm:p-10 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="pointer-events-auto flex items-center bg-white/70 backdrop-blur-3xl border border-white/50 rounded-2xl px-12 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)] h-20"
      >
        <div className="flex items-center gap-12 whitespace-nowrap">
          {navLinks.map((link) => {
            const active = isActive(link.id);
            return (
              <a 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-bold uppercase tracking-[0.25em] transition-all group"
                style={{ color: active ? '#e945f5' : undefined }}
              >
                <span className={active ? '' : 'text-text-main hover:text-[#e945f5] transition-all'}>
                  {link.name}
                </span>
                <span 
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#e945f5] transition-all duration-300"
                  style={{ width: active ? '100%' : '0' }}
                />
              </a>
            );
          })}
          <button 
            onClick={onContactClick}
            className="px-10 py-3 rounded-full bg-text-main text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-[#e945f5] transition-all active:scale-95 shadow-lg shadow-black/5"
          >
            Contact
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
