import { motion } from "framer-motion";
import sunflowerLogo from "@/assets/flor.png";

const Header = () => {
  return (
    <header className="relative py-12 md:py-20 px-4 text-center overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone bg-primary opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Sunflower spinning logo */}
        <motion.div className="flex justify-center mb-6">
          <img 
            src={sunflowerLogo} 
            alt="Girasol" 
            className="w-16 h-16 md:w-20 md:h-20 animate-spin-slow"
          />
        </motion.div>

        {/* Legal header bar */}
        <div className="neobrutal-yellow inline-block px-6 py-2 mb-6">
          <span className="font-body text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-foreground">
            República del Amor · Tribunal Supremo del Corazón
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-legal font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight">
          EXPEDIENTE:
          <br />
          <span className="text-accent">Evelin Gonzales Rojas</span>
          <br />
          <span className="font-handwriting text-3xl md:text-5xl">&</span>
          <br />
          <span className="text-accent">Roy Jhony Ruiz Riveros</span>
        </h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="neobrutal-pink inline-block px-8 py-3 mt-4"
        >
          <p className="font-legal italic text-lg md:text-xl text-foreground">
            Causa Nº 2020-2025 · 5 Años de Amor Comprobado
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 animate-bounce-down"
        >
          <span className="font-handwriting text-2xl text-muted-foreground">↓ Desplaza para leer el expediente ↓</span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
