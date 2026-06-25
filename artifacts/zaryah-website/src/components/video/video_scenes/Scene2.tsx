import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const services = [
    "CUSTOM AI SOFTWARE",
    "AGENTIC AI",
    "AI AGENTS",
    "RESOURCE PLACEMENT"
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[4px] bg-[#2563EB]"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 9, ease: 'linear' }}
      />

      <motion.h2 
        className="text-[4vw] font-bold text-white tracking-tight mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={phase >= 1 ? { y: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        CAPABILITIES
      </motion.h2>

      <div className="flex flex-col gap-6 w-[60vw]">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative pl-6 py-4 bg-[#1E293B]/20 backdrop-blur-sm border border-[#1E293B]"
            initial={{ x: 100, opacity: 0 }}
            animate={phase >= 2 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: phase >= 2 ? idx * 0.15 : 0, ease: 'easeOut' }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#2563EB] shadow-[0_0_15px_#2563EB]" />
            <div className="flex items-center gap-6">
              <span className="text-[1.5vw] font-mono text-[#06B6D4]">0{idx + 1}</span>
              <h3 className="text-[2.5vw] font-bold text-[#F8FAFC] tracking-tight">{service}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
