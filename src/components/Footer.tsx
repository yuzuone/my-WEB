import { Github } from 'lucide-react';
import TextType from './ui/TextType';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-transparent py-20 relative overflow-hidden">
      {/* Footer background atmosphere */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-tr from-[#e945f5] via-white to-[#1d1d1f] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">
        <div className="mb-20">
          <h2 className="text-2xl md:text-5xl font-display font-semibold tracking-tighter text-text-main min-h-[4em] leading-tight">
            <TextType 
              text={"期待与您共同探索\nAI 赋能的更多商业可能性"}
              typingSpeed={70}
              pauseDuration={5000}
              showCursor={true}
              cursorCharacter="_"
              className="inline-block text-left"
            />
          </h2>
        </div>

        <div className="flex items-center justify-start pt-20">
          <div className="w-full h-px bg-black/5" />
        </div>
      </div>
    </footer>
  );
}
