import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 6500), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-12"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="overflow-hidden">
        <motion.h1 
          className="text-[6vw] font-bold tracking-tight text-[#111827] leading-none"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          ZARYAH TECHNOLOGIES
        </motion.h1>
      </div>
      
      <div className="h-[4px] w-0 bg-[#2563EB] mt-8 mb-8 mx-auto" />
      <motion.div 
        className="h-[2px] bg-[#2563EB] mx-auto"
        initial={{ width: 0 }}
        animate={{ width: phase >= 1 ? "15vw" : 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="overflow-hidden mt-8">
        <motion.p 
          className="text-[2.5vw] font-light text-[#111827]/70"
          initial={{ y: "-100%", opacity: 0 }}
          animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          We build the AI software that <span className="font-semibold text-[#2563EB]">grows your business.</span>
        </motion.p>
      </div>
    </motion.div>
  );
}