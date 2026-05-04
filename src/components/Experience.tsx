import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: '北京猿力未来 (猿辅导) | AI 产品实习生',
    period: '2025.06 - 2025.09',
    description: '主导从 0 到 1 的 AI 自动化补题链路设计。通过漏斗式流程将日均补题量从 50 提升至 1000+，成本降低 90%。建立 4 维模型评测体系，通过多模型横向对比使解题准确率提升 12%。攻坚含图题型识别与 LaTeX 公式处理，理科含图解答率提升至 89%。迭代 30+ 版 Prompt，使搜题满意度由 3.8 升至 4.6 分。'
  },
  {
    role: '澜码科技 | AI 产品运营实习生',
    period: '2024.11 - 2025.01',
    description: '主导医疗知识图谱 Schema 设计，整合 11.8 万条医学事实数据。基于 LangGraph 构建多工具协同 Agent，实现 Cypher 语法自愈（成功率 ≥85%）。落地 GraphRAG 模式，使复杂医疗查询准确率提升至 87%。采用 FastAPI 构建异步流式服务，实现首字延迟 ≤300ms，支撑高并发连续对话。'
  },
  {
    role: '某民航公司 | 产品经理实习生',
    period: '2024.06 - 2024.08',
    description: '设计“旅客-商户-航司”三端严穿隔离的联盟链权限体系，确保 100% 数据合规。引入 DTO 概念进行跨端工程解耦，封装 Repository 层清洗后端复杂 JSON 嵌套，减少前端冗余约 40%，页面渲染速度提升 51%。协调跨团队 20+ 核心接口联调，将成功率由 92% 提升至 99%。'
  }
];

export default function Experience() {
  return (
    <div className="max-w-4xl">
      {/* Work Experience */}
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-text-main">职业历程</h2>
          <p className="text-sm text-text-main font-light max-w-2xl">围绕 AI 产品、业务增长与复杂系统协作持续积累实践经验，关注从需求判断到结果落地的完整闭环。</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-6 border-l border-black/5 group"
            >
              <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full border border-white bg-black/20 group-hover:bg-[#e945f5] group-hover:scale-125 transition-all" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-text-main">{exp.role}</h3>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-text-main">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {exp.period}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm font-light text-text-main leading-relaxed max-w-lg">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
