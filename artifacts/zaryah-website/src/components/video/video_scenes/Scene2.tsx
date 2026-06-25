import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const services = [
    { name: "CUSTOM AI SOFTWARE", desc: "Tailored intelligent systems" },
    { name: "AGENTIC AI", desc: "Autonomous workflows & operations" },
    { name: "AI AGENTS", desc: "Specialized virtual assistants" },
    { name: "RESOURCE PLACEMENT", desc: "Top-tier AI engineering talent" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[12vw]"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Title */}
      <div className="relative mb-[4vw] overflow-hidden pl-[2vw]">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[0.4vw] bg-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.4)]"
          initial={{ y: '-100%' }}
          animate={phase >= 1 ? { y: 0 } : { y: '-100%' }}
          transition={{ duration: 0.6, ease: 'circOut' }}
        />
        <motion.h2 
          className="text-[3vw] font-bold text-[#FAF5FF] tracking-[0.3em] uppercase font-sans"
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          WHAT WE BUILD
        </motion.h2>
      </div>

      {/* Services List */}
      <div className="flex flex-col w-full">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col py-[2vw]"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: phase >= 2 ? idx * 0.2 : 0, ease: 'easeOut' }}
          >
            <div className="flex items-baseline gap-[3vw]">
              <span className="text-[1.8vw] font-mono text-[#F59E0B]">0{idx + 1}</span>
              <h3 className="text-[3vw] font-bold text-[#FAF5FF] tracking-tight">{service.name}</h3>
              <span className="text-[1.5vw] text-[#6B7280] font-sans ml-auto">{service.desc}</span>
            </div>
            
            {/* Separator */}
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-[#1A1030]"
              initial={{ width: 0 }}
              animate={phase >= 2 ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: phase >= 2 ? idx * 0.2 + 0.3 : 0, ease: 'easeInOut' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Violet Progress Bar at Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[0.6vw] bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.5)]"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 9, ease: 'linear' }}
      />
    </motion.div>
  );
}
