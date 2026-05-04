import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, MousePointer2 } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 'p1',
    title: 'OpenGenerativeUI',
    description: '打破技术壁垒，将“模糊意图”快速转化为可交互的前端视觉画布。主打“所想即所见”的 AI 创作赋能。',
    category: 'Project 01',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    size: 'md:col-span-1 md:row-span-1',
    color: 'from-[#e945f5]/40 via-[#e945f5]/20 to-transparent'
  },
  {
    id: 'p2',
    title: 'MedPulse AI',
    description: '融合 RAG 与医学知识图谱。为临床决策提供“有据可查”的可信度支持与实证分析。',
    category: 'Project 02',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop',
    size: 'md:col-span-1 md:row-span-1',
    color: 'from-blue-600/30 via-slate-400/20 to-transparent'
  }
];

interface ProjectBentoProps {
  onContactClick: () => void;
}

export default function ProjectBento({ onContactClick }: ProjectBentoProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3 tracking-tight text-text-main">精选作品</h2>
          <p className="text-sm text-text-main max-w-lg font-light leading-relaxed">
            通过主导产品设计与技术实现，为 AI 时代打造极致的用户交互体验。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            onClick={() => (project.id === 'p1' || project.id === 'p2') && setSelectedProject(project)}
            className={`group relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-[32px] overflow-hidden cursor-pointer ${project.size} min-h-[340px] hover:shadow-2xl transition-all duration-500`}
          >
            {/* Click Hint Overlay */}
            {(project.id === 'p1' || project.id === 'p2') && (
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-text-main text-white text-[9px] font-bold shadow-2xl backdrop-blur-sm">
                  <MousePointer2 size={10} />
                  点击查看详情
                </div>
              </div>
            )}

            {/* Gradient Overlay */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.color} blur-3xl opacity-40 z-0 group-hover:scale-125 transition-transform duration-1000`} />
            
            {/* Background Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-all duration-700 pointer-events-none scale-105 group-hover:scale-100"
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
              <div>
                 <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#e945f5] mb-2 block">{project.category}</span>
                 <h3 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-[#e945f5] transition-colors text-text-main">{project.title}</h3>
                 <p className="text-text-main text-xs font-light leading-relaxed max-w-xs">
                   {project.description}
                 </p>
              </div>

              <div className="flex items-center justify-between">
                 {(project.id === 'p1' || project.id === 'p2') && (
                   <div className="flex items-center gap-1.5 text-accent-purple text-[10px] font-bold uppercase tracking-widest pl-1">
                      <Sparkles size={14} className="animate-pulse" />
                      <span>Case Study Available</span>
                   </div>
                 )}
                 <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 flex-1 justify-end">
                    <button className="p-2 rounded-full bg-black/5 border border-black/5 hover:bg-black/10 active:scale-95 transition-all text-text-main">
                       <ExternalLink size={18} />
                    </button>
                 </div>
              </div>
            </div>

            {/* Breathing Light Effect (requested in theme) */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-accent-purple rounded-full blur-[2px] shadow-[0_0_12px_rgba(139,92,246,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onContactClick={onContactClick}
        project={selectedProject || projects[0]} 
      />
    </div>
  );
}
