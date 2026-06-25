import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const zaryahLetters = "ZARYAH".split("");
  const techText = "TECHNOLOGIES";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center pl-[10vw]"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      exit={{ clipPath: 'inset(0 0 0 100%)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top Left Label */}
      <div className="absolute top-[8vh] left-[5vw] font-mono text-[#06B6D4] text-[1.5vw] tracking-wider opacity-80">
        // ZARYAH.TECH
      </div>

      <div className="relative z-10">
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter flex">
          {zaryahLetters.map((char, i) => (
            <motion.span
              key={i}
              className="relative"
              initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
              animate={phase >= 1 ? { x: 0, opacity: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              style={{ textShadow: phase >= 1 ? '0 0 40px rgba(6, 182, 212, 0.4)' : 'none' }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <div className="h-[4vw] mt-2 text-[#64748B] font-mono tracking-[0.5em] text-[2.5vw]">
          {techText.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.05, delay: phase >= 2 ? i * 0.08 : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="h-[2px] bg-[#06B6D4] w-[40vw] mt-8"
          initial={{ scaleX: 0, opacity: 0, boxShadow: '0 0 0px #06B6D4' }}
          animate={phase >= 3 ? { scaleX: 1, opacity: 1, boxShadow: '0 0 20px #06B6D4' } : {}}
          transition={{ duration: 0.8, ease: 'circOut' }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          className="mt-8 text-[2.2vw] text-[#F8FAFC] opacity-90 max-w-[50vw] leading-relaxed font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          We build the AI software that grows your business.
        </motion.p>
      </div>
    </motion.div>
  );
}
