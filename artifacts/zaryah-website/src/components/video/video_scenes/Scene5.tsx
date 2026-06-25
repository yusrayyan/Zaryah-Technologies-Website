import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw] bg-[#0A0F1A]"
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50" />

      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="w-16 h-16 mb-8 relative"
          initial={{ scale: 0, rotate: -90 }}
          animate={phase >= 1 ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="absolute inset-0 border-2 border-[#2563EB] rotate-45" />
          <div className="absolute inset-2 border-2 border-[#06B6D4]" />
          <div className="absolute inset-0 bg-[#2563EB]/20 blur-md" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1 
            className="text-[6vw] font-black font-sans tracking-tighter text-white mb-2 leading-none"
            initial={{ y: "100%" }}
            animate={phase >= 1 ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            ZARYAH
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.div 
            className="text-[2vw] font-mono tracking-[0.5em] text-[#2563EB]"
            initial={{ y: "-100%" }}
            animate={phase >= 1 ? { y: "0%" } : { y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            TECHNOLOGIES
          </motion.div>
        </div>
        
        <motion.div
          className="px-8 py-4 border border-[#2563EB]/50 bg-[#2563EB]/10 backdrop-blur-md relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute -left-[1px] top-1/4 bottom-1/4 w-[2px] bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
          <div className="absolute -right-[1px] top-1/4 bottom-1/4 w-[2px] bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
          <span className="font-mono text-[#06B6D4] mr-4 text-[1.2vw]">&gt;</span>
          <span className="text-[1.8vw] font-mono text-white tracking-widest">
            info@zaryahtech.com
          </span>
          <motion.span 
            className="inline-block w-3 h-5 bg-[#06B6D4] ml-2 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "steps(2)" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}