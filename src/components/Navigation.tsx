import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const navLinks = [
    { name: '项目案例', href: '#projects' },
    { name: '工作经历', href: '#experience' },
    { name: '专业能力', href: '#capabilities' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 sm:p-10 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="pointer-events-auto flex items-center bg-white/70 backdrop-blur-3xl border border-white/50 rounded-2xl px-12 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)] h-20"
      >
        <div className="flex items-center gap-12 whitespace-nowrap">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.25em] text-text-main hover:text-[#e945f5] transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e945f5] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
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
