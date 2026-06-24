import { useState, useEffect, useRef } from 'react';

export function useVideoPlayer({ durations }: { durations: Record<string, number> }) {
  const [currentScene, setCurrentScene] = useState(0);
  const sceneKeys = Object.keys(durations);
  const hasStoppedRecording = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).startRecording) {
      (window as any).startRecording();
    }
  }, []);

  useEffect(() => {
    const sceneKey = sceneKeys[currentScene];
    const duration = durations[sceneKey];

    const timer = setTimeout(() => {
      if (currentScene === sceneKeys.length - 1) {
        if (!hasStoppedRecording.current && typeof window !== 'undefined' && (window as any).stopRecording) {
          (window as any).stopRecording();
          hasStoppedRecording.current = true;
        }
        setCurrentScene(0); // loop
      } else {
        setCurrentScene(c => c + 1);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [currentScene, durations, sceneKeys]);

  return { currentScene };
}