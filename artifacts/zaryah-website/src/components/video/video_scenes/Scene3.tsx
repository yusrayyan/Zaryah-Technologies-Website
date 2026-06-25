import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const stats = [
    { value: "5+", label: "YEARS EXP", prefix: ">_" },
    { value: "35+", label: "ENGINEERS", prefix: ">_" },
    { value: "30K+", label: "ACTIVE USERS", prefix: ">_" },
    { value: "8×", label: "COST EFFICIENT", prefix: ">_" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute right-[10vw] top-[20vh] text-right">
        <motion.p 
          className="text-[1.2vw] font-mono text-[#06B6D4] tracking-[0.2em]"
          initial={{ opacity: 0, x: 20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
        >
          SYS.METRICS_
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-y-16 gap-x-12 w-[70vw]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col relative">
            <motion.div
              className="absolute -left-6 top-4 text-[#2563EB] font-mono text-[2vw]"
              initial={{ opacity: 0 }}
              animate={phase > idx ? { opacity: 0.5 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {stat.prefix}
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.div
                className="text-[6vw] font-mono font-bold text-white leading-none tracking-tighter"
                initial={{ y: "100%", opacity: 0 }}
                animate={phase > idx ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {stat.value}
              </motion.div>
            </div>
            
            <motion.div
              className="h-[1px] bg-[#2563EB]/40 my-3"
              initial={{ scaleX: 0 }}
              animate={phase > idx ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "circOut" }}
              style={{ transformOrigin: "left" }}
            />
            
            <motion.div
              className="text-[1.2vw] font-sans font-medium tracking-widest text-[#94A3B8]"
              initial={{ opacity: 0, x: -10 }}
              animate={phase > idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stat.label}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}