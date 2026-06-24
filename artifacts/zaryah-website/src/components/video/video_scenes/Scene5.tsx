import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#2563EB] text-white px-[10vw]"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.h1 
        className="text-[5vw] font-black tracking-tight mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        ZARYAH TECHNOLOGIES
      </motion.h1>
      
      <motion.p
        className="text-[2vw] font-light text-white/80 mb-12"
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        We build the AI software that grows your business.
      </motion.p>
      
      <motion.div
        className="px-8 py-4 bg-white text-[#2563EB] font-bold text-[1.5vw] rounded-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        info@zaryahtech.com
      </motion.div>
    </motion.div>
  );
}