import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  intro: 5000,
  services: 6000,
  stats: 6000,
  credentials: 5000,
  outro: 6000
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0F1A] text-white">
      
      {/* Background grid / scanline layer */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4vw 4vw'
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-10 bg-repeat bg-center" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }} />

      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
          animate={{
            x: ['-20%', '50%', '10%'],
            y: ['0%', '40%', '20%'],
            scale: [1, 1.2, 0.9]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full opacity-10 blur-[100px] right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)' }}
          animate={{
            x: ['20%', '-30%', '5%'],
            y: ['-10%', '-50%', '-20%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Persistent horizontal rule lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute h-[1px] bg-[#2563EB]/40 left-0 right-0 top-[15vh]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div 
          className="absolute h-[1px] bg-[#2563EB]/40 left-0 right-0 bottom-[15vh]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
          style={{ transformOrigin: "right" }}
        />
      </div>

      {/* Scene specific foreground */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="sync">
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