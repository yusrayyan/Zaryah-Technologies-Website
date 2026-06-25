import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const creds = ["IIT-Incubated", "Forbes Tech Council", "SOC 2", "ISO 27001"];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden"
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={{ clipPath: 'inset(0% 0 0 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Circuit board horizontal line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#1E293B]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'circOut' }}
      />
      
      {/* Animated dots traveling along line */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]"
          initial={{ left: '-5%' }}
          animate={{ left: '105%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: i * 1.3 }}
        />
      ))}

      <div className="flex gap-12 relative z-10 w-[150vw]">
        {/* Continuous scroll container */}
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...creds, ...creds, ...creds].map((cred, idx) => (
            <motion.div
              key={idx}
              className="px-8 py-4 border border-[#2563EB] bg-[#05080F] backdrop-blur-md text-[2vw] font-mono text-[#F8FAFC]"
              initial={{ scale: 0.9, opacity: 0, boxShadow: '0 0 0px transparent' }}
              animate={phase >= 1 ? { scale: 1, opacity: 1, boxShadow: '0 0 20px rgba(37,99,235,0.4)' } : {}}
              transition={{ duration: 0.5, delay: phase >= 1 ? (idx % creds.length) * 0.15 : 0 }}
            >
              {cred}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
