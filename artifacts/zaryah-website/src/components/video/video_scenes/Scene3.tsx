import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "35+", label: "Engineers" },
    { value: "30K+", label: "Active Users" },
    { value: "8×", label: "Cost-Efficient vs Western Shops" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-2 gap-y-16 gap-x-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <motion.div
              className="text-[6vw] font-black text-[#2563EB] leading-none tracking-tighter"
              initial={{ opacity: 0, x: -40 }}
              animate={phase > idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {stat.value}
            </motion.div>
            <motion.div
              className="text-[1.8vw] font-medium text-[#111827] mt-2"
              initial={{ opacity: 0 }}
              animate={phase > idx ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {stat.label}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}