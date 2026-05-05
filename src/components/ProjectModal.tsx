import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
  };
}

export default function ProjectModal({ isOpen, onClose, onContactClick, project }: ProjectModalProps) {
  if (!isOpen) return null;

  const isP2 = project.id === 'p2';

  const handleContactOpen = () => {
    onClose();
    onContactClick();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/90 backdrop-blur-2xl pointer-events-auto"
            onClick={onClose}
          />
          
          <motion.div
            layoutId="project-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl h-[90vh] bg-page-bg border border-black/5 rounded-[40px] overflow-hidden pointer-events-auto flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-[110] p-3 rounded-full bg-black/5 border border-black/5 hover:bg-black/10 transition-colors"
            >
              <X size={24} className="text-text-main" />
            </button>

            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar max-h-full">
              {/* 1. Hero Section */}
              <section className="relative min-h-[80vh] p-12 md:p-20 flex items-center border-b border-black/5">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
                  {/* Left: Copy (5 Columns) */}
                  <div className="lg:col-span-5 space-y-8 text-left">
                    {!isP2 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <Sparkles size={12} />
                        <span>GEN-UI 专属案例</span>
                      </motion.div>
                    )}
                    
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight text-[#1F1F1F]">
                        {isP2 ? '让医疗 AI 从“能回答”，走向“能被信任”' : '让界面从“预设输出”，走向“按意图生成”'}
                      </h1>
                      <p className="text-lg md:text-xl text-[#666] font-light leading-relaxed">
                        {isP2 
                          ? '围绕临床场景中“建议不敢用、结论难追溯”的核心痛点，重构生成链路与证据机制，帮助医生更快完成判断，同时保留决策依据。'
                          : '围绕用户“表达模糊、需求多变、实现成本高”的核心问题，搭建一套可把自然语言快速转成可交互界面的生成式 UI 产品方案。'}
                      </p>
                      <p className="text-sm text-[#999] font-medium">
                        {isP2 ? '覆盖问答生成、证据回溯、风险控制与结果验证全流程' : '覆盖需求理解、界面生成、反馈迭代与体验验证全流程'}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a href="#architecture" className="px-8 py-4 rounded-xl bg-blue-600 text-white text-sm font-bold tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                        查看架构设计
                      </a>
                      <a href="#validation" className="px-8 py-4 rounded-xl bg-white border border-black/5 text-[#1F1F1F] text-sm font-bold tracking-wide hover:bg-black/5 transition-all">
                        验证机制说明
                      </a>
                    </div>
                  </div>

                  {/* Right: Architecture Diagram (7 Columns) */}
                  <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-2xl border border-black/5 group">
                      <img 
                        src={isP2 ? `${import.meta.env.BASE_URL}vedio/3.png` : `${import.meta.env.BASE_URL}vedio/4.png`} 
                        alt="Core Architecture"
                        className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>
              </section>

              {/* 2. Context & Challenge (Trust Section) */}
              <section className="p-12 md:p-20 border-b border-black/5 bg-white">
                <div className="max-w-7xl mx-auto space-y-16">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-display font-bold tracking-tight text-[#1F1F1F]">
                      {isP2 ? '建立临床信任：从黑盒到透明' : '交互范式演进：从固定到生成'}
                    </h2>
                    <p className="text-[#666] max-w-2xl mx-auto font-light">
                      {isP2 
                        ? '不是单纯提升回答能力，而是优先解决医疗场景里最关键的产品问题: 信任、可追溯与可落地。'
                        : '不是单纯提高生成速度，而是优先解决产品设计与前端协作中最关键的问题: 理解成本高、迭代慢、表达损耗大。'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Card: Risk/Legacy */}
                    <div className="p-10 rounded-[32px] bg-red-50/30 border border-red-100/50 flex flex-col items-center text-center space-y-6">
                      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <X size={32} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-red-600">{isP2 ? '❌ 黑盒幻觉' : '❌ 静态界面瓶颈'}</h3>
                        <p className="text-sm text-[#666]">
                          {isP2 
                            ? '建议看似完整，但缺少清晰证据链与责任边界，医生难以直接纳入实际决策流程。'
                            : '需求一旦变化就需要重新定义组件与流程，产品想法在设计到开发链路中被不断稀释。'}
                        </p>
                      </div>
                    </div>

                    {/* Right Card: Solution/Future */}
                    <div className="p-10 rounded-[32px] bg-emerald-50/30 border border-emerald-100/50 flex flex-col items-center text-center space-y-6">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Sparkles size={32} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-emerald-600">{isP2 ? '✅ 证据一致性' : '✅ 意图驱动生成'}</h3>
                        <p className="text-sm text-[#666]">
                          {isP2 
                            ? '把“答案”升级为“带依据的建议”，让生成结果能够被验证、被理解，也更容易进入真实工作流。'
                            : '把“描述需求”直接转化为“可操作界面”，显著缩短从想法提出到原型验证的链路。'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Core Selling Points (Architecture) */}
              <section id="architecture" className="p-12 md:p-20 border-b border-black/5 bg-page-bg">
                <div className="max-w-[1200px] mx-auto space-y-16">
                  <div className="text-left space-y-4">
                    <h2 className="text-3xl font-display font-bold tracking-tight text-[#1F1F1F]">核心架构设计</h2>
                      <p className="text-[#666] max-w-2xl font-light">
                        {isP2
                          ? '从产品角度拆解“可信输出”所需的关键能力，把复杂模型能力转译成用户可感知、团队可迭代的系统模块。'
                          : '从产品交付链路出发，将需求理解、界面生成与反馈优化拆成可协同的能力模块，降低试错成本并提升迭代效率。'}
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Module 01 */}
                    <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Module 01</span>
                        <h3 className="text-xl font-bold text-[#1F1F1F]">视觉语言协议层</h3>
                      </div>
                      <p className="text-sm text-[#666] font-medium leading-relaxed">{isP2 ? '先统一输入语义，降低医疗信息理解偏差' : '先把模糊需求翻译成可执行的统一界面语言'}</p>
                      <ul className="space-y-3 pt-2">
                          {(isP2
                            ? ['病例与文本语义对齐', '多源医学信息融合', '结构化证据输出']
                            : ['图像与文本 Token 对齐', '跨模态语义融合', '标准化结构输出']).map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[13px] text-[#666]">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Module 02 */}
                    <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Module 02</span>
                        <h3 className="text-xl font-bold text-[#1F1F1F]">智能调度层</h3>
                      </div>
                      <p className="text-sm text-[#666] font-medium leading-relaxed">{isP2 ? '让诊断推理过程更稳定、更可控' : '让复杂生成过程可编排、可管理、可复用'}</p>
                      <ul className="space-y-3 pt-2">
                          {(isP2
                            ? ['多步骤任务拆解', '诊断路径管理', '动态资源调度']
                            : ['多步骤任务拆解', '推理路径管理', '动态资源调度']).map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[13px] text-[#666]">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Module 03 */}
                    <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Module 03</span>
                        <h3 className="text-xl font-bold text-[#1F1F1F]">自适应反馈层</h3>
                      </div>
                      <p className="text-sm text-[#666] font-medium leading-relaxed">{isP2 ? '把结果验证纳入系统闭环，提升可用性与安全感' : '把真实使用反馈回流到生成系统，持续优化体验表现'}</p>
                      <ul className="space-y-3 pt-2">
                          {(isP2
                            ? ['输出一致性校验', '风险结果回流', '模型行为优化']
                            : ['输出一致性校验', '错误回流机制', '模型行为优化']).map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[13px] text-[#666]">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Validation (Trust Building) */}
              <section id="validation" className="p-12 md:p-20 border-b border-black/5 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1 relative aspect-[4/3] rounded-[32px] bg-blue-50/20 border border-blue-100/50 flex flex-col items-center justify-center p-12 text-center space-y-6">
                      <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Sparkles size={40} />
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">{isP2 ? 'Clinical Validation' : 'System Validation'}</p>
                         <h3 className="text-xl font-bold text-[#1F1F1F]">{isP2 ? '临床联合测试验证' : '生成闭环验证'}</h3>
                        <p className="text-sm text-[#666] leading-relaxed">
                          {isP2 
                             ? '通过临床角色联合测试验证系统是否真正帮助决策，而不只是提升模型表面回答质量。'
                             : '从需求输入到界面落地进行全链路验证，确保生成结果不仅可看，还能被真实使用与快速迭代。'}
                        </p>
                      </div>
                  </div>

                  <div className="order-1 md:order-2 space-y-8 text-left">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-display font-bold tracking-tight text-[#1F1F1F]">
                        {isP2 ? '临床测试与场景验证' : '效率收益与体验验证'}
                      </h2>
                      <p className="text-[#666] font-light leading-relaxed">
                        {isP2 
                          ? '邀请多位资深医学生与临床医生作为种子用户，重点验证系统在高风险问答中的可信度、解释性与使用接受度。'
                          : '通过多轮原型评估与任务测试，生成式 UI 在需求表达到界面确认的链路上显著缩短沟通和返工成本。'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 bg-page-bg border border-black/5 rounded-2xl space-y-2">
                          <span className="text-3xl font-black text-blue-600">{isP2 ? '98%' : '92%'}</span>
                          <p className="text-[10px] font-bold text-[#999] uppercase tracking-widest">{isP2 ? '引文准确率' : '需求理解准确率'}</p>
                      </div>
                      <div className="p-6 bg-page-bg border border-black/5 rounded-2xl space-y-2">
                          <span className="text-3xl font-black text-blue-600">{isP2 ? '< 0.5s' : '1.2s'}</span>
                          <p className="text-[10px] font-bold text-[#999] uppercase tracking-widest">{isP2 ? '首字延迟' : '平均生成耗时'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Demo Video Section (Restored at end) */}
              <section className="p-12 md:p-20 bg-page-bg border-b border-black/5">
                <div className="max-w-7xl mx-auto space-y-12">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-display font-bold tracking-tight text-[#1F1F1F]">核心功能演示</h2>
                    <p className="text-[#666] max-w-2xl mx-auto font-light">
                      {isP2 
                        ? '直观展示 MedPulse AI 如何把复杂医学问题转化为可追溯、可验证的辅助决策过程。'
                        : '直观展示产品、设计与前端如何围绕同一条意图链路，更快完成界面探索、方案确认与原型落地。'}
                    </p>
                  </div>
                  <div className="relative aspect-video w-full rounded-[40px] overflow-hidden bg-black shadow-2xl border border-black/5 group">
                    <video
                      key={`${project.id}-final-demo`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                    >
                      <source src={isP2 ? `${import.meta.env.BASE_URL}vedio/1.mp4` : `${import.meta.env.BASE_URL}vedio/5.mp4`} type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 text-[11px] font-medium text-[#666]">
                      <Sparkles size={14} className="text-blue-600" />
                      <span>{isP2 ? '演示重点：证据链回溯与结果可信性' : '演示重点：意图输入到界面生成的完整闭环'}</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Vision */}
              <section className="p-12 pb-24 bg-gradient-to-b from-transparent to-blue-50/20 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                  <h2 className="text-3xl font-display font-semibold tracking-tight">
                    {isP2 ? '构建人机协作的“数字信任合约”' : '重构产品从想法到界面的转化方式'}
                  </h2>
                  <p className="text-lg italic font-light text-text-main px-8">
                     {isP2 
                      ? '“医疗产品的关键不只是更聪明的模型，而是让一线决策者愿意使用、能够理解、出了问题也能追溯。”'
                      : '“生成式 UI 的价值，不是替代产品设计，而是把想法验证的门槛降到足够低，让更好的产品更快出现。”'}
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={handleContactOpen}
                      className="px-8 py-4 rounded-full bg-text-main text-white text-xs font-bold tracking-widest hover:bg-[#e945f5] hover:scale-105 transition-all flex items-center gap-2 group mx-auto shadow-xl"
                    >
                      了解合作机会
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
