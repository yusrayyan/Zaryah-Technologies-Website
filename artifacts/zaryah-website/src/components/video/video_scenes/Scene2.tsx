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
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const services = [
    { title: "Custom AI Software", desc: "Tailored intelligence" },
    { title: "Agentic AI", desc: "Autonomous workflows" },
    { title: "AI Agents", desc: "Intelligent assistants" },
    { title: "Resource Placement", desc: "Top-tier talent" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.p 
        className="text-[1.5vw] font-semibold text-[#2563EB] tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Capabilities
      </motion.p>
      
      <div className="grid grid-cols-2 gap-8 w-full">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-8 border border-[#111827]/10 bg-white/50 backdrop-blur-md rounded-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={phase > idx ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-[2.2vw] font-bold text-[#111827] mb-2">{service.title}</h3>
            <p className="text-[1.2vw] text-[#111827]/60">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}