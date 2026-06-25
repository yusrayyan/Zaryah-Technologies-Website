import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const emailText = "info@zaryahtech.com";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center bg-[#2563EB]"
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={{ clipPath: 'inset(0% 0 0 0)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Two glowing orbs */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[80px] bg-white opacity-20 left-[10vw]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[80px] bg-[#06B6D4] opacity-30 right-[10vw]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.h1
        className="text-[7vw] font-bold text-white tracking-tighter text-shadow-lg z-10"
        style={{ textShadow: '0 0 40px rgba(255,255,255,0.5)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        ZARYAH TECHNOLOGIES
      </motion.h1>

      <div className="h-[3vw] mt-6 font-mono text-[2vw] text-white z-10">
        {emailText.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.05, delay: phase >= 2 ? i * 0.05 : 0 }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="mt-12 text-[1.2vw] font-sans font-medium tracking-[0.2em] text-white/80 uppercase z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        India · UAE · Global
      </motion.div>
    </motion.div>
  );
}
