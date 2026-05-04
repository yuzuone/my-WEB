import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import MagicRings from './ui/MagicRings';
import TextType from './ui/TextType';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col items-start justify-center text-left overflow-visible">
      {/* Magic Rings Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-40 mix-blend-screen">
        <MagicRings 
          color="#e945f5"
          colorTwo="#6f6f6f"
          ringCount={5}
          speed={0.5}
          attenuation={12}
          baseRadius={0.25}
          radiusStep={0.15}
          opacity={0.6}
          noiseAmount={0.05}
          followMouse={false}
        />
      </div>

      <div className="mb-8" />

      <motion.div className="w-full max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-[6rem] md:text-[11rem] font-display font-bold tracking-[-0.05em] mb-14 leading-[0.85] text-text-main"
        >
          <TextType 
            text="Wang Ying"
            typingSpeed={120}
            pauseDuration={10000}
            showCursor={true}
            cursorCharacter="_"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#e945f5] to-accent-blue"
          />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-4xl text-text-main max-w-2xl mb-8 font-medium leading-tight tracking-tight"
        >
          关注人、技术与场景之间的关系 <br />
          构建可理解、可交互的智能产品体验
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base font-black uppercase tracking-[0.3em] text-text-main mb-14 flex flex-wrap gap-x-5 gap-y-2"
        >
          <span>AI 产品设计</span>
          <span className="opacity-50">•</span>
          <span>交互方案</span>
          <span className="opacity-50">•</span>
          <span>体验优化</span>
          <span className="opacity-50">•</span>
          <span>从 0 到 1 产品构建</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="#projects"
            className="px-12 py-6 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white text-sm font-bold tracking-widest hover:from-[#1d4ed8] hover:to-[#6d28d9] hover:scale-105 transition-all flex items-center gap-2 group shadow-xl shadow-blue-200/70"
          >
            查看我的项目
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

    </div>
  );
}
