import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Shimmer progress tracking
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream"
          id="loading-screen"
        >
          <div className="text-center max-w-xs px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex justify-center mb-6"
            >
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl shadow-blush-50 border border-blush-100">
                <span className="font-serif text-3xl font-light text-rose-gold tracking-widest pl-1">B</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-rose-gold opacity-30"
                />
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-rose-gold animate-bounce" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-2xl font-light tracking-widest text-luxury-charcoal uppercase mb-1"
            >
              Blush
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-light tracking-[0.2em] text-xs text-luxury-clay uppercase mb-8"
            >
              Nail Studio
            </motion.p>

            {/* Premium Gold Progress Bar */}
            <div className="w-full h-[2px] bg-stone-200 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blush-300 via-rose-gold to-blush-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <span className="block mt-2 font-mono text-[10px] tracking-widest text-stone-400 uppercase">
              {progress < 100 ? `Polishing ${progress}%` : 'Welcome'}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
