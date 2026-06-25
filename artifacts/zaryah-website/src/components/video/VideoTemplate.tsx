import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  intro: 9000,
  services: 9000,
  stats: 8000,
  credentials: 7000,
  outro: 7000
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#FAF5FF]" style={{ backgroundColor: '#080612' }}>
      
      {/* Background layer - Persistent */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Breathing Grid */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1A1030 1px, transparent 1px),
              linear-gradient(to bottom, #1A1030 1px, transparent 1px)
            `,
            backgroundSize: '4vw 4vw'
          }}
          animate={{
            scale: [1.0, 1.02, 1.0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating Glowing Orbs (Violet + Gold) */}
        {Array.from({ length: 10 }).map((_, i) => {
          const isGold = i % 3 === 0;
          const color = isGold ? '#F59E0B' : '#7C3AED';
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 20 + 10 + 'vw',
                height: Math.random() * 20 + 10 + 'vw',
                backgroundColor: color,
                opacity: Math.random() * 0.07 + 0.08,
                filter: 'blur(100px)',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * -200 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5
              }}
            />
          );
        })}
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
