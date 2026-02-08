import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {/* Audio real */}
      <audio ref={audioRef} loop>
        <source src="/music/love.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="music-float"
        aria-label="Reproductor de música"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1"
            >
              <div className="flex items-end gap-[2px] h-6">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-foreground rounded-full"
                    animate={{ height: [6, 20, 10, 24, 6] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <span className="ml-2 text-lg">🎵</span>
            </motion.div>
          ) : (
            <motion.span
              key="paused"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-xl"
            >
              🎵
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
