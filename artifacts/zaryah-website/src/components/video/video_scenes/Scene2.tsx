import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 4500), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const services = [
    { title: "CUSTOM AI SOFTWARE", desc: "Tailored intelligence architectures." },
    { title: "AGENTIC AI", desc: "Autonomous multi-agent workflows." },
    { title: "AI AGENTS", desc: "Intelligent domain-specific assistants." },
    { title: "RESOURCE PLACEMENT", desc: "Top-tier AI engineering talent." }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-4 mb-12">
        <motion.div 
          className="w-3 h-3 bg-[#2563EB] shadow-[0_0_15px_#2563EB]"
          initial={{ scale: 0 }}
          animate={phase >= 1 ? { scale: 1 } : { scale: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        />
        <motion.p 
          className="text-[1.2vw] font-mono text-[#2563EB] tracking-[0.2em]"
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          // CORE CAPABILITIES
        </motion.p>
      </div>
      
      <div className="flex flex-col gap-6 w-[60vw]">
        {services.map((service, idx) => (
          <div key={idx} className="relative overflow-hidden group">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#06B6D4]"
              initial={{ scaleY: 0 }}
              animate={phase > idx ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              style={{ transformOrigin: "top" }}
            />
            
            <motion.div
              className="pl-8 py-2"
              initial={{ x: -40, opacity: 0 }}
              animate={phase > idx ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-[2.5vw] font-bold text-white font-sans leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-[1.2vw] font-mono text-[#94A3B8] mt-1">
                {service.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}