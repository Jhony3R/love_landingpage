import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showFlash, setShowFlash] = useState(false);

  const handleClick = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 7) {
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 2500);
        return 0;
      }
      return newCount;
    });
  }, []);

  // Reset click counter after 3 seconds of inactivity
  useEffect(() => {
    if (clickCount > 0 && clickCount < 7) {
      const timeout = setTimeout(() => setClickCount(0), 3000);
      return () => clearTimeout(timeout);
    }
  }, [clickCount]);

  // Listen for clicks on document
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <AnimatePresence>
      {showFlash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, hsl(270 48% 44%), hsl(280 60% 55%), hsl(260 50% 50%))" }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-6xl md:text-8xl mb-4">💜</p>
            <p className="font-legal font-bold text-3xl md:text-5xl" style={{ color: "hsl(0 0% 100%)" }}>
              I Purple You
            </p>
            <p className="font-handwriting text-2xl md:text-3xl mt-2" style={{ color: "hsl(51 100% 50%)" }}>
              보라해 💜🌻
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
