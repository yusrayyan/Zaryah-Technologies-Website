import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 4000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Node / dot accent */}
      <motion.div 
        className="absolute left-[8vw] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#06B6D4] shadow-[0_0_15px_#06B6D4]"
        initial={{ scale: 0, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />
      <motion.div 
        className="absolute left-[8vw] top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#06B6D4]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 0.5 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="relative">
        <motion.p 
          className="text-[#94A3B8] font-mono text-[1vw] tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          // INITIALIZING
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1 
            className="text-[6vw] font-bold leading-[1.1] tracking-tight font-sans text-white"
            initial={{ y: '100%', opacity: 0 }}
            animate={phase >= 1 ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            ZARYAH
            <br />
            TECHNOLOGIES
          </motion.h1>
        </div>

        <motion.div 
          className="h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mt-6 mb-6"
          initial={{ scaleX: 0 }}
          animate={phase >= 2 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: 'circOut' }}
          style={{ transformOrigin: 'left', width: '40vw' }}
        />

        <div className="overflow-hidden">
          <motion.p 
            className="text-[2vw] text-[#94A3B8] font-light max-w-[50vw]"
            initial={{ y: '100%', opacity: 0 }}
            animate={phase >= 2 ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We build the <span className="text-[#06B6D4] font-medium">AI software</span> that grows your business.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}