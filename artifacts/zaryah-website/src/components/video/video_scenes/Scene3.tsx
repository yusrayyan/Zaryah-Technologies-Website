import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// A simple count up effect
function CountUp({ end, suffix = "", duration = 2, startDelay = 0, trigger = false }: { end: number, suffix?: string, duration?: number, startDelay?: number, trigger: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number;
    let animationFrame: number;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setValue(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(tick);
    }, startDelay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startDelay, trigger]);

  return <span>{value}{suffix}</span>;
}

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1000), // stats start
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const stats = [
    { value: 5, suffix: "+", label: "YEARS EXP" },
    { value: 35, suffix: "+", label: "ENGINEERS" },
    { value: 30, suffix: "K+", label: "ACTIVE USERS" },
    { value: 8, suffix: "×", label: "COST EFFICIENT" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center px-[5vw]"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex justify-between items-center w-full max-w-[80vw]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center relative flex-1">
            <motion.div
              className="text-[6vw] font-mono font-bold text-[#06B6D4]"
              style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? {
                opacity: [0, 1, 0, 1, 0.5, 1],
              } : {}}
              transition={{ duration: 0.3, delay: phase >= 2 ? idx * 0.2 : 0 }}
            >
              {phase >= 2 ? (
                <CountUp end={stat.value} suffix={stat.suffix} duration={1.5} startDelay={idx * 0.2 + 0.3} trigger={phase >= 2} />
              ) : "0"}
            </motion.div>
            
            <motion.div
              className="text-[1.2vw] font-sans font-medium tracking-widest text-[#F8FAFC] mt-4 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: phase >= 2 ? idx * 0.2 + 0.5 : 0 }}
            >
              {stat.label}
            </motion.div>

            {idx < stats.length - 1 && (
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[8vw] bg-[#1E293B]"
                initial={{ scaleY: 0 }}
                animate={phase >= 1 ? { scaleY: 1 } : {}}
                transition={{ duration: 0.5, delay: phase >= 1 ? 0.3 + idx * 0.1 : 0 }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
