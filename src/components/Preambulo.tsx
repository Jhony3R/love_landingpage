import { motion } from "framer-motion";
import mangaCouple1 from "@/assets/pareja5.png";

const timelineEvents = [
  { year: "2020", title: "El Primer Encuentro", text: "Donde nuestras almas se encontraron por primera vez, una vida llena de emociones y aventura nos espera." },
  { year: "2021", title: "El primer contrato", text: "Se sellaron los primeros votos no oficiales mediante un contrato por mutuo acuerdo cuya validez y duración corresponde a 2 años, todo ello absolutamente vinculantes ante el tribunal del corazón." },
  { year: "2022", title: "La Consolidación", text: "Los hechos demostraron que el amor era irrefutable, irrevocable e innegable ante cualquier jurisdicción." },
  { year: "2023", title: "La Prueba de Fuego", text: "EL contrato pactado llegó a su fin, pero ante todo pronostico era imprescindible su renovación. La distancia intentó apelar, pero fue desestimada por falta de pruebas contra este amor." },
  { year: "2024-2025", title: "Sentencia Firme", text: "Los problemas siempre estuvieron presentes, en mayor parte ocasionada por la parte demandante lo que conllevo a un punto crítico de este caso, la parte demandada decidió dar una ultima oportunidad y mantener a flote el amor. Ante todo lo acontecido el tribunal declara: este amor es perpetuo, sin posibilidad de recurso. Caso cerrado... o apenas comienza. 💜" },
];

const Preambulo = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="neobrutal-yellow inline-block px-6 py-2 mb-4">
            <h2 className="font-legal font-bold text-2xl md:text-3xl text-foreground">
              PREÁMBULO
            </h2>
          </div>
          <p className="font-legal italic text-lg text-muted-foreground ml-2">
            De los antecedentes y la cronología de los hechos
          </p>
        </motion.div>

        {/* Webtoon vertical container */}
        <div className="manga-panel-lg p-0 bg-card">
          {/* Hero manga image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="w-full border-b-4 border-foreground overflow-hidden"
          >
            <img 
              src={mangaCouple1} 
              alt="Nuestra historia manga" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Timeline */}
          <div className="p-6 md:p-10 space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0 border-l-[3px] border-foreground last:border-l-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[10px] top-0 w-5 h-5 bg-primary border-[3px] border-foreground rounded-full" />
                
                {/* Year badge */}
                <span className="neobrutal-purple inline-block px-3 py-1 text-sm font-body font-bold mb-2">
                  {event.year}
                </span>

                <h3 className="font-legal font-bold text-xl text-foreground mb-1">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {event.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preambulo;
