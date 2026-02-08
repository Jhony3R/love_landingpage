import { motion } from "framer-motion";
import mangaCouple2 from "@/assets/cafe.png";
import mangaCouple3 from "@/assets/atardecer.png";
import mangaCouple4 from "@/assets/pareja1.png";
import mangaCouple5 from "@/assets/quinua.png";
import mangaCouple6 from "@/assets/teamo.png";

const photos = [
  { src: mangaCouple2, alt: "Café juntos", span: "col-span-2 row-span-2" },
  { src: mangaCouple3, alt: "Atardecer", span: "col-span-1 row-span-1" },
  { src: mangaCouple4, alt: "De la mano", span: "col-span-1 row-span-2" },
  { src: mangaCouple5, alt: "Bajo la lluvia", span: "col-span-1 row-span-1" },
  { src: mangaCouple6, alt: "Carta de amor", span: "col-span-2 row-span-1" },
];

const MangaGallery = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-paper-aged">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-right"
        >
          <div className="neobrutal-pink inline-block px-6 py-2 mb-4">
            <h2 className="font-legal font-bold text-2xl md:text-3xl text-foreground">
              LIBRO I: De los Hechos Probados
            </h2>
          </div>
          <p className="font-legal italic text-lg text-muted-foreground mr-2">
            Evidencia fotográfica adjunta al expediente
          </p>
        </motion.div>

        {/* Manga-style gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`manga-panel manga-photo-glow ${photo.span} cursor-pointer`}
              style={{ 
                clipPath: index === 1 
                  ? "polygon(0 0, 100% 5%, 95% 100%, 5% 95%)" 
                  : index === 3 
                  ? "polygon(5% 0, 100% 3%, 97% 100%, 0 97%)" 
                  : undefined 
              }}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Manga speed lines overlay on hover */}
              <div className="absolute inset-0 bg-sunflower/0 hover:bg-sunflower/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Evidence stamp */}
        <motion.div
          initial={{ opacity: 0, rotate: -12 }}
          whileInView={{ opacity: 1, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-end"
        >
          <div className="border-[3px] border-accent text-accent px-6 py-2 font-legal font-bold text-lg uppercase tracking-wider" style={{ transform: "rotate(-6deg)" }}>
            ✓ Pruebas Verificadas
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MangaGallery;
