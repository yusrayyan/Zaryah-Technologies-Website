import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => setPhase(5), 5000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const zaryahText = "ZARYAH";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top Right Label */}
      <motion.div 
        className="absolute top-[6vh] right-[6vw] font-mono text-[#F59E0B] text-[1.2vw] tracking-widest opacity-80"
        initial={{ opacity: 0, x: 20 }}
        animate={phase >= 1 ? { opacity: 0.8, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        EST. 2019 · AI STUDIO
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* ZARYAH Word */}
        <div className="relative overflow-hidden">
          <motion.h1 
            className="text-[14vw] font-bold leading-none tracking-tighter text-[#FAF5FF] pb-[1vw]"
            initial={{ y: '100%', opacity: 0 }}
            animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--app-font-display)' }}
          >
            {zaryahText}
          </motion.h1>
          {/* Violet underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-[0.8vw] bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.5)]"
            initial={{ width: 0 }}
            animate={phase >= 2 ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* TECHNOLOGIES */}
        <motion.div 
          className="mt-[1vw] text-[#F59E0B] font-mono tracking-[1em] text-[2vw] pl-[1em]"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={phase >= 3 ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 1 }}
        >
          TECHNOLOGIES
        </motion.div>

        {/* Thin gold horizontal rule */}
        <motion.div
          className="h-[1px] bg-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.3)] mt-[3vw]"
          initial={{ width: 0, opacity: 0 }}
          animate={phase >= 4 ? { width: '30vw', opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Tagline */}
        <motion.p
          className="mt-[3vw] text-[2.5vw] text-[#FAF5FF] opacity-90 max-w-[50vw] leading-tight font-sans font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          We build the AI software that grows your business.
        </motion.p>
      </div>
    </motion.div>
  );
}
