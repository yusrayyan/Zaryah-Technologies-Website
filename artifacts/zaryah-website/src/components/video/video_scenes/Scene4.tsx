import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 1800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const creds = ["IIT-Incubated", "Forbes Tech Council", "SOC 2 / ISO 27001"];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-[10vw]"
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="text-[1.2vw] font-mono text-[#06B6D4] tracking-[0.3em] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        // COMPLIANCE & TRUST
      </motion.div>

      <motion.h2
        className="text-[4vw] font-bold text-white tracking-tight mb-16 font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        CERTIFIED EXCELLENCE
      </motion.h2>
      
      <div className="flex justify-center gap-8 mb-20 w-full">
        {creds.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative px-8 py-4 border border-[#2563EB]/40 bg-[#0A0F1A]/80 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 2 + idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#06B6D4]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#06B6D4]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#06B6D4]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#06B6D4]" />
            
            <span className="text-[1.5vw] font-mono text-[#94A3B8]">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}