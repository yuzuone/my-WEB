import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    { label: '电话号码', value: '17384976009', icon: Phone, type: 'tel' },
    { label: '电子邮箱', value: '2662716909@qq.com', icon: Mail, type: 'email' },
    { label: 'GitHub', value: 'https://github.com/yuzuone/', icon: Github, type: 'url' },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white border border-black/5 rounded-[32px] p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e945f5]/10 blur-3xl rounded-full" />
            
            <div className="flex justify-between items-center mb-8 relative">
              <div>
                <h2 className="text-2xl font-display font-bold tracking-tight text-text-main">王颖</h2>
                <p className="text-[10px] font-bold text-text-main/50 uppercase tracking-[0.2em] mt-1">AI Product Strategist</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 relative">
              {contactInfo.map((info) => (
                <div 
                  key={info.label} 
                  className="group p-4 rounded-2xl bg-black/[0.02] border border-black/5 hover:border-[#e945f5]/30 transition-all hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#e945f5]">
                        <info.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-text-main uppercase tracking-widest mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium text-text-main break-all">{info.value}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCopy(info.value, info.label)}
                      className="p-2 text-text-main/50 hover:text-[#e945f5] transition-colors"
                    >
                      {copied === info.label ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-black/5 text-center relative">
              <p className="text-xs text-text-main font-medium">期待与您共同探索 AI 赋能的更多商业可能性</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
