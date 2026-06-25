import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  intro: 8000,
  services: 9000,
  stats: 8000,
  credentials: 7000,
  outro: 8000
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#F8FAFC]" style={{ backgroundColor: '#05080F' }}>
      
      {/* Background layer - Persistent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated SVG Grid */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1E293B 1px, transparent 1px),
              linear-gradient(to bottom, #1E293B 1px, transparent 1px)
            `,
            backgroundSize: '4vw 4vw'
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Faint radial gradient glow */}
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
          animate={{
            x: ['-20%', '40%', '10%'],
            y: ['10%', '30%', '-10%'],
            scale: [1, 1.2, 0.9]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.div
          className="absolute w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-15 right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)' }}
          animate={{
            x: ['20%', '-20%', '5%'],
            y: ['-10%', '-40%', '-10%'],
            scale: [0.9, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Glowing Orbs */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              backgroundColor: i % 2 === 0 ? '#2563EB' : '#06B6D4',
              boxShadow: `0 0 20px ${i % 2 === 0 ? '#2563EB' : '#06B6D4'}`,
              filter: 'blur(2px)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Scene Content */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="popLayout">
          {currentScene === 0 && <Scene1 key="intro" />}
          {currentScene === 1 && <Scene2 key="services" />}
          {currentScene === 2 && <Scene3 key="stats" />}
          {currentScene === 3 && <Scene4 key="credentials" />}
          {currentScene === 4 && <Scene5 key="outro" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
