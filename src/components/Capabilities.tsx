import { motion } from 'motion/react';
import { Sparkles, ClipboardList, Terminal, Languages, ChevronRight } from 'lucide-react';

const skillModules = [
  {
    title: '产品策略与用户洞察',
    icon: Sparkles,
    color: 'from-[#e945f5] to-accent-blue',
    sections: [
      {
        subtitle: '需求分析',
        items: [
          '能够从业务目标、用户场景与使用链路中识别关键问题，完成需求优先级排序与版本规划',
          '具备用户访谈、问卷调研、竞品分析、痛点归纳能力，能将模糊反馈沉淀为明确需求',
          '擅长从 0 到 1 梳理产品定位、核心价值主张与最小可行方案（MVP）'
        ]
      },
      {
        subtitle: '产品思维',
        items: [
          '关注“用户价值-业务价值-实现成本”三者平衡，推动需求从功能堆叠转向价值交付',
          '能够围绕转化、留存、效率、满意度等目标设计产品方案，强化结果导向',
          '善于把复杂 AI 能力翻译成用户可感知、团队可执行的产品能力'
        ]
      }
    ]
  },
  {
    title: '产品设计与项目推进',
    icon: ClipboardList,
    color: 'from-blue-500 to-emerald-400',
    sections: [
      {
        subtitle: '方案设计',
        items: [
          '熟悉完整产品流程：需求调研、PRD/SRS 输出、原型设计、开发对齐、测试验收与上线复盘',
          '可独立完成信息架构、核心流程、交互逻辑与页面原型设计，提升方案可落地性',
          '擅长用 Figma、Axure、ProcessOn、Visio、Notion 等工具进行方案表达与团队协作'
        ]
      },
      {
        subtitle: '项目推进',
        items: [
          '具备跨团队协同能力，可推动产品、设计、开发、算法等角色在目标、范围与节奏上达成一致',
          '能够拆解里程碑、识别风险点、跟进关键节点，保障项目按优先级有序推进',
          '注重需求评审与交付闭环，通过文档、原型与会议机制降低沟通损耗'
        ]
      }
    ]
  },
  {
    title: '数据分析与 AI 产品落地',
    icon: Terminal,
    color: 'from-orange-400 to-red-500',
    sections: [
      {
        subtitle: '数据驱动',
        items: [
          '能够搭建核心指标体系，围绕转化漏斗、行为路径与使用效果进行分析与优化',
          '熟练使用 SQL、Excel、Tableau 等工具进行数据处理、分析与可视化表达',
          '具备 A/B 测试设计与结果解读能力，支持产品决策与策略迭代'
        ]
      },
      {
        subtitle: 'AI 产品化',
        items: [
          '熟悉 ChatGPT、Claude、DeepSeek、文心一言等大模型产品及其典型应用场景',
          '了解 Prompt Engineering、RAG、知识图谱、多模态生成等能力，并能结合业务设计产品方案',
          '具备 Python、SQL、FastAPI、Neo4j、TypeScript/React 基础，便于与技术团队高效协作'
        ]
      }
    ]
  }
];

export default function Capabilities() {
  return (
    <div className="space-y-16">
      <div className="text-left space-y-3 max-w-xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-main">
          专业技能 <span className="text-text-main/40">/ Skills</span>
        </h2>
        <p className="text-sm md:text-base text-text-main font-light leading-relaxed">
          围绕用户洞察、产品设计、数据分析与 AI 落地，形成面向产品经理角色的完整能力闭环。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillModules.map((module, mIdx) => (
          <motion.div
            key={mIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: mIdx * 0.1, duration: 0.6 }}
            className="group relative bg-white/40 backdrop-blur-xl border border-black/[0.03] rounded-[32px] p-6 shadow-sm hover:shadow-xl hover:border-black/[0.08] transition-all duration-500 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${module.color} flex items-center justify-center text-white shadow-sm`}>
                <module.icon size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-text-main">
                {module.title}
              </h3>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {module.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-[#e945f5]">
                      {section.subtitle}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-3 group/item">
                        <div className="mt-1.5 shrink-0">
                          <div className="w-1 h-1 rounded-full bg-text-main/40 group-hover/item:bg-[#e945f5] transition-all" />
                        </div>
                        <p className="text-xs md:text-[13px] text-text-main font-light leading-relaxed group-hover/item:text-text-main transition-colors">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Subtle Gradient Accent */}
            <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-bl ${module.color} opacity-0 group-hover:opacity-[0.05] blur-2xl transition-opacity duration-700 pointer-events-none`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
