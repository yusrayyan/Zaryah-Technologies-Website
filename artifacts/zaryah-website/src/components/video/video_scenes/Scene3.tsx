import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Count up with flicker effect
function FlickerCountUp({ end, suffix = "", duration = 2, startDelay = 0, trigger = false }: { end: number, suffix?: string, duration?: number, startDelay?: number, trigger: boolean }) {
  const [value, setValue] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    // Flicker entry
    setTimeout(() => setOpacity(1), startDelay * 1000);
    setTimeout(() => setOpacity(0.5), startDelay * 1000 + 100);
    setTimeout(() => setOpacity(1), startDelay * 1000 + 300);

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
    }, startDelay * 1000 + 300);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startDelay, trigger]);

  return <span style={{ opacity }}>{value}{suffix}</span>;
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
      className="absolute inset-0 flex flex-col justify-center items-center px-[4vw]"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex justify-between items-center w-full">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center relative flex-1 h-[30vw]">
            {/* Faint Ghost Number */}
            <motion.div
              className="absolute text-[25vw] font-mono font-bold text-[#7C3AED] leading-none select-none z-0"
              style={{ opacity: 0.05 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={phase >= 1 ? { scale: 1, opacity: 0.05 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
            >
              {stat.value}
            </motion.div>

            {/* Foreground Stat */}
            <div className="relative z-10 text-center">
              <div
                className="text-[8vw] font-mono font-bold text-[#F59E0B]"
                style={{ textShadow: '0 0 30px rgba(245,158,11,0.3)' }}
              >
                <FlickerCountUp end={stat.value} suffix={stat.suffix} duration={1.5} startDelay={idx * 0.2} trigger={phase >= 2} />
              </div>
              
              <motion.div
                className="text-[1.5vw] font-sans font-semibold tracking-[0.2em] text-[#FAF5FF] mt-[1vw] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: phase >= 2 ? idx * 0.2 + 0.6 : 0 }}
              >
                {stat.label}
              </motion.div>
            </div>

            {/* Vertical Divider */}
            {idx < stats.length - 1 && (
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[15vw] bg-[#7C3AED] opacity-40 shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                initial={{ scaleY: 0 }}
                animate={phase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: phase >= 1 ? 0.4 + idx * 0.15 : 0, ease: 'circOut' }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
