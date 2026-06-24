import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-[10vw]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="text-[3vw] font-bold text-[#111827] mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        Trusted by Leaders
      </motion.div>
      
      <div className="flex justify-center gap-12 mb-20">
        {["IIT-Incubated", "Forbes Tech Council", "SOC 2 / ISO 27001"].map((item, idx) => (
          <motion.div
            key={idx}
            className="px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-full text-[1.5vw] font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: idx * 0.2, type: "spring", stiffness: 200, damping: 20 }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-[2vw] font-medium text-[#111827]/70"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        India <span className="mx-4 text-[#2563EB]">•</span> UAE <span className="mx-4 text-[#2563EB]">•</span> Global
      </motion.div>
    </motion.div>
  );
}