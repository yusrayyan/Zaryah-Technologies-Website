import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  intro: 8000,
  services: 8000,
  stats: 8000,
  trust: 8000,
  outro: 8000
};

const scenePos = [
  { x: '10vw', y: '10vh', scale: 2, opacity: 0.8 },
  { x: '60vw', y: '60vh', scale: 1.2, opacity: 0.5 },
  { x: '80vw', y: '20vh', scale: 1.5, opacity: 0.7 },
  { x: '20vw', y: '70vh', scale: 0.8, opacity: 0.4 },
  { x: '50vw', y: '50vh', scale: 3, opacity: 0.9 },
];

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5F7FB] text-[#111827]">
      {/* Persistent background layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
          animate={{
            x: ['-20%', '50%', '10%'],
            y: ['0%', '40%', '20%'],
            scale: [1, 1.2, 0.9]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
          animate={{
            x: ['20%', '-30%', '5%'],
            y: ['-10%', '-50%', '-20%']
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Persistent midground layer */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-[#2563EB]/10 blur-2xl z-0"
        animate={scenePos[currentScene]}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
      
      <motion.div
        className="absolute h-[2px] bg-[#2563EB]/20 z-0"
        animate={{
          left: ['10%', '0%', '40%', '20%', '30%'][currentScene],
          width: ['80%', '100%', '30%', '70%', '40%'][currentScene],
          top: ['80%', '20%', '90%', '10%', '50%'][currentScene],
          opacity: currentScene >= 4 ? 0 : 1,
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Scene specific foreground */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="popLayout">
          {currentScene === 0 && <Scene1 key="intro" />}
          {currentScene === 1 && <Scene2 key="services" />}
          {currentScene === 2 && <Scene3 key="stats" />}
          {currentScene === 3 && <Scene4 key="trust" />}
          {currentScene === 4 && <Scene5 key="outro" />}
        </AnimatePresence>
      </div>
    </div>
  );
}