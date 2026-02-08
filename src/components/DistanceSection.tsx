import { motion } from "framer-motion";

const DistanceSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-paper-aged overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-right"
        >
          <div className="neobrutal-purple inline-block px-6 py-2 mb-4">
            <h2 className="font-legal font-bold text-2xl md:text-3xl">
              TÍTULO IV: De la Distancia
            </h2>
          </div>
          <p className="font-legal italic text-lg text-muted-foreground mr-2">
            Que la distancia nunca fue obstáculo, sino prueba de fortaleza
          </p>
        </motion.div>

        {/* Distance visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="manga-panel-lg p-8 md:p-12 bg-card"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* City A */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="neobrutal-yellow px-6 py-4 mb-3">
                <span className="font-legal font-bold text-xl md:text-2xl text-foreground">
                  Huanta
                </span>
              </div>
              <p className="font-handwriting text-2xl text-muted-foreground">Donde estoy yo</p>
              <span className="text-4xl mt-2 block">🌻</span>
            </motion.div>

            {/* Dotted line with emojis */}
            <div className="flex-1 w-full md:w-auto relative py-6 md:py-0">
              <svg viewBox="0 0 400 60" className="w-full h-16 md:h-20" preserveAspectRatio="xMidYMid meet">
                {/* Dotted path */}
                <path
                  d="M 20 30 Q 100 10 200 30 Q 300 50 380 30"
                  fill="none"
                  stroke="hsl(0 0% 8%)"
                  strokeWidth="3"
                  className="distance-line"
                />
              </svg>
              
              {/* Floating emojis along the path */}
              <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                  className="text-2xl"
                >🌻</motion.span>
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                  className="text-2xl"
                >💜</motion.span>
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
                  className="text-2xl"
                >🌻</motion.span>
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
                  className="text-2xl"
                >💜</motion.span>
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1.6 }}
                  className="text-2xl"
                >🌻</motion.span>
              </div>
            </div>

            {/* City B */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <div className="neobrutal-pink px-6 py-4 mb-3">
                <span className="font-legal font-bold text-xl md:text-2xl text-foreground">
                  Lima
                </span>
              </div>
              <p className="font-handwriting text-2xl text-muted-foreground">Donde estás tú</p>
              <span className="text-4xl mt-2 block">💜</span>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <blockquote className="neobrutal-pink inline-block px-8 py-4">
              <p className="font-handwriting text-2xl md:text-3xl text-foreground">
                "Los kilómetros son solo números. Lo nuestro es infinito." 🌻💜
              </p>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DistanceSection;
