import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const emailText = "info@zaryahtech.com";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Rich Violet Gradient Flood */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to top, #3B0764, #080612)' }}
      />

      {/* Two pulsing gold orbs */}
      <motion.div
        className="absolute w-[30vw] h-[30vw] rounded-full blur-[60px] bg-[#F59E0B] opacity-20 left-[-5vw] top-[-5vw] z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[35vw] h-[35vw] rounded-full blur-[80px] bg-[#F59E0B] opacity-20 right-[-10vw] bottom-[-10vw] z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Breathing whole scene */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ scale: [1.0, 1.02, 1.0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative">
          <motion.h1
            className="text-[7vw] font-bold text-[#FAF5FF] tracking-tighter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            ZARYAH TECHNOLOGIES
          </motion.h1>
          <motion.div
            className="absolute -bottom-[1vw] left-[10%] right-[10%] h-[0.5vw] bg-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.6)]"
            initial={{ scaleX: 0 }}
            animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'circOut' }}
          />
        </div>

        <div className="h-[3vw] mt-[5vw] font-mono text-[2vw] text-[#F59E0B]">
          {emailText.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: phase >= 2 ? i * 0.05 : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="mt-[2vw] text-[1.4vw] font-sans font-medium tracking-[0.3em] text-[#FAF5FF]/80 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          India · UAE · Global
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
