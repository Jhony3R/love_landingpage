import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const FinalVerdict = () => {
  const [appealed, setAppealed] = useState(false);

  const launchConfetti = useCallback(() => {
    setAppealed(true);

    // Purple hearts confetti
    const purpleConfig = {
      particleCount: 50,
      angle: 90,
      spread: 120,
      origin: { x: 0.5, y: 0.7 },
      colors: ["#6B3FA0", "#8B5CF6", "#A855F7"],
      shapes: ["circle" as const],
      scalar: 1.2,
    };

    // Yellow confetti
    const yellowConfig = {
      particleCount: 50,
      angle: 90,
      spread: 120,
      origin: { x: 0.5, y: 0.7 },
      colors: ["#FFD700", "#FFC107", "#FFEB3B"],
      shapes: ["circle" as const],
      scalar: 1.2,
    };

    // Fire both!
    confetti(purpleConfig);
    setTimeout(() => confetti(yellowConfig), 200);
    
    // Second burst
    setTimeout(() => {
      confetti({ ...purpleConfig, angle: 60, origin: { x: 0.2, y: 0.8 } });
      confetti({ ...yellowConfig, angle: 120, origin: { x: 0.8, y: 0.8 } });
    }, 600);

    // Third burst
    setTimeout(() => {
      confetti({ ...purpleConfig, particleCount: 80, spread: 160, origin: { x: 0.5, y: 0.6 } });
    }, 1000);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="neobrutal-purple inline-block px-8 py-3 mb-4">
            <h2 className="font-legal font-bold text-2xl md:text-3xl">
              SENTENCIA DEFINITIVA
            </h2>
          </div>
        </motion.div>

        {/* Verdict card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="manga-panel-lg p-8 md:p-12 bg-card text-center"
        >
          <div className="mb-8">
            <p className="font-legal text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              Vista la totalidad de las pruebas, escuchados los latidos de ambos corazones, y habiendo deliberado durante{" "}
              <strong>1,826 días</strong> (y contando)...
            </p>
            
            <div className="neobrutal-yellow inline-block px-8 py-4 mb-6">
              <p className="font-legal font-black text-2xl md:text-3xl text-foreground">
                SE DECLARA:
              </p>
            </div>

            <p className="font-legal text-xl md:text-2xl text-foreground leading-relaxed mb-4">
              Que el amor entre las partes es{" "}
              <span className="font-bold underline decoration-primary decoration-4">FIRME</span>,{" "}
              <span className="font-bold underline decoration-secondary decoration-4">INAPELABLE</span> y{" "}
              <span className="font-bold underline decoration-accent decoration-4">ETERNO</span>.
            </p>

            <p className="font-handwriting text-2xl md:text-3xl mt-6" style={{ color: "hsl(var(--pastel-pink))" }}>
              Te amo hoy, mañana y todos los días que me quedan 🌻💜
            </p>
          </div>

          {/* Appeal button */}
          <motion.button
            onClick={launchConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neobrutal-purple px-10 py-5 cursor-pointer group"
          >
            <span className="font-legal font-bold text-xl md:text-2xl group-hover:tracking-wider transition-all duration-300">
              {appealed ? "💜🌻 ¡APELACIÓN DENEGADA! 🌻💜" : "⚖️ PRESENTAR APELACIÓN ⚖️"}
            </span>
          </motion.button>

          {appealed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-handwriting text-2xl mt-6" style={{ color: "hsl(var(--purple-heart))" }}
            >
              ¡No hay apelación que valga! Este amor es para siempre 💜🌻
            </motion.p>
          )}

          {/* Signature area */}
          <div className="mt-12 pt-8 border-t-[3px] border-foreground">
            <div className="flex flex-col md:flex-row justify-around gap-8">
              <div className="text-center">
                <div className="border-b-2 border-foreground w-48 mx-auto mb-2" />
                <p className="font-legal text-sm text-muted-foreground">Roy Jhony Ruiz Riveros</p>
                <p className="font-handwriting text-xl text-foreground">Parte Demandante 💛</p>
              </div>
              <div className="text-center">
                <div className="border-b-2 border-foreground w-48 mx-auto mb-2" />
                <p className="font-legal text-sm text-muted-foreground">Evelin Gonzales Rojas</p>
                <p className="font-handwriting text-xl text-foreground">Parte Demandada 💜</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalVerdict;
