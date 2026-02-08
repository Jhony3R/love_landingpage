import { motion } from "framer-motion";

const articles = [
  {
    number: 1,
    title: "Del Deber de los Buenos Días",
    body: "Queda establecido que ambas partes contratantes están obligadas, sin excepción ni periodo de gracia, a enviar un mensaje de buenos días antes de las 9:00 AM. Quien lo incumpla se somete a cumplir una orden o mandato a modo de compensación.",
    footnote: "Nota: Aunque a veces me tardo, cada mensaje lleva un pedacito de mi corazón 💜",
  },
  {
    number: 2,
    title: "De las Visitas",
    body: "Se declara que cuando una de las partes visite a la otra, lleve consigo algun detalle o presente, en caso de que esto se incumpla, el visitante esta en la obligación de dar mimos, consentir y tratar como Rey/Reyna a la parte afectada por el tiempo que dure su estadía.",
    footnote: "Ya sea que tu me visites o yo sea el visitante, no hay situacion ajena para dejar de tratarte como la Reyna que eres 💜",
  },
  {
    number: 3,
    title: "Del Derecho a la Transparencia Móvil",
    body: "Las partes reconocen que deben de tener registrada las huellas dactilares, faciales o cualquier tipo de contraseña en ambos dispositivos móviles, esto a modo de solicitando en cada momento las credenciales de acceso a la otra parte lo que podria resultar ser tedioso.",
    footnote: "Quien nada debe, nada teme. No tenemos nada que ocultar asi que esta regla no aplica para nosotros 💜",
  },
  {
    number: 4,
    title: "De las Videollamadas Nocturnas",
    body: "Se establece la obligación bilateral de realizar videollamadas nocturnas de duración indeterminada. Quedarse dormido durante la llamada no constituye incumplimiento, sino prueba de confianza absoluta.",
    footnote: "Me encanta cuando te pones las Skin de la coneja, lo haces ver tan natural 💜",
  },
  {
    number: 5,
    title: "De los Aniversarios y Fechas Especiales",
    body: "Todo aniversario, mensiversario, y cualquier fecha que cualquiera de las partes declare como 'especial' será celebrado con la solemnidad que merece. La frase 'se me olvidó' no será admitida como defensa.",
    footnote: "Cada día contigo es una fecha especial, pero hoy... hoy es TODO 🌻💜",
  },
];

const LegalArticles = () => {
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
              LIBRO II: De las Obligaciones
            </h2>
          </div>
          <p className="font-legal italic text-lg text-muted-foreground ml-2">
            Cláusulas vinculantes del presente contrato amoroso
          </p>
        </motion.div>

        {/* Articles */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="neobrutal p-6 md:p-8"
            >
              {/* Article header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="neobrutal-yellow px-3 py-1 shrink-0">
                  <span className="font-legal font-bold text-foreground">
                    Art. {article.number}
                  </span>
                </div>
                <h3 className="font-legal font-bold text-xl md:text-2xl text-foreground leading-tight">
                  {article.title}
                </h3>
              </div>

              {/* Article body */}
              <p className="font-body text-foreground leading-relaxed mb-4 pl-0 md:pl-[76px]">
                {article.body}
              </p>

              {/* Handwritten footnote */}
              <div className="pl-0 md:pl-[76px] border-t-2 border-dashed border-muted pt-3">
                <p className="font-handwriting text-xl md:text-2xl text-secondary-foreground" style={{ color: "hsl(var(--pastel-pink))" }}>
                  {article.footnote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalArticles;
