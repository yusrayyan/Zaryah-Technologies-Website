import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const creds = ["IIT-Incubated", "Forbes Tech Council", "SOC 2", "ISO 27001"];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Circuit-node background pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(#7C3AED 2px, transparent 2px)', 
        backgroundSize: '3vw 3vw',
        backgroundPosition: '0 0'
      }} />

      <motion.h3
        className="text-[1.8vw] font-sans font-bold text-[#F59E0B] tracking-[0.4em] uppercase mb-[4vw] z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        TRUSTED BY / CERTIFIED
      </motion.h3>

      <div className="grid grid-cols-2 gap-[3vw] z-10">
        {creds.map((cred, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-[1.5vw] px-[4vw] py-[2.5vw] border-2 border-[#7C3AED] bg-[#080612]/80 backdrop-blur-md rounded-lg"
            initial={{ scale: 0.8, opacity: 0, boxShadow: '0 0 0px transparent' }}
            animate={phase >= 2 ? { 
              scale: 1, 
              opacity: 1, 
              boxShadow: ['0 0 0px transparent', '0 0 30px rgba(124,58,237,0.4)', '0 0 10px rgba(124,58,237,0.2)']
            } : { scale: 0.8, opacity: 0 }}
            transition={{ 
              scale: { type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.15 },
              opacity: { duration: 0.3, delay: idx * 0.15 },
              boxShadow: { duration: 1.5, delay: idx * 0.15, times: [0, 0.5, 1] }
            }}
          >
            <div className="w-[1vw] h-[1vw] rounded-full bg-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            <span className="text-[2.2vw] font-sans font-bold text-[#FAF5FF]">{cred}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
