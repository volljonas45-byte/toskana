"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frische vom Hof",
    items: ["Tagesfrische Eier", "Frischmilch", "Käse", "Joghurt"],
    image: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hausmacher Spezialitäten",
    items: ["Dosenwurst", "Schinken", "Putenspezialitäten", "Frischei-Nudeln"],
    image: "https://images.unsplash.com/photo-1607113284070-d56b81c0bc04?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Süßes & Vorrat",
    items: ["Selbstgemachte Marmelade", "Honig", "Mehl & Müsli", "Hagen-Kaffee"],
    image: "https://images.unsplash.com/photo-1597528380179-2c7f87fd3ec4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Aus Garten & Feld",
    items: ["Saisonales Obst", "Gemüse & Salat", "Kartoffeln", "Zwiebeln"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wein & Edelbrände",
    items: ["Wein & Sekt", "Edle Schnäpse", "Liköre", "Pralinen"],
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Geschenke",
    items: ["Geschenkideen", "Bücher", "Gutscheine", "ohne Verfallsdatum"],
    image: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?auto=format&fit=crop&w=900&q=80",
  },
];

export function Hofladen() {
  return (
    <section id="hofladen" className="relative py-24 lg:py-36 bg-toskana-bark text-toskana-cream overflow-hidden">
      {/* Decorative top wave */}
      <svg
        className="absolute top-0 left-0 w-full h-24 -translate-y-px text-toskana-cream"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C240,112 480,16 720,48 C960,80 1200,112 1440,64 L1440,0 L0,0 Z" />
      </svg>

      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-toskana-terracotta/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-toskana-honey/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mb-20">
          <p className="text-toskana-honey text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Hofladen · Direkt vom Erzeuger
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6 text-balance">
            Alles Gute aus der Natur –<br />
            <span className="italic text-toskana-honey">in Ruhe einkaufen.</span>
          </h2>
          <p className="text-lg text-toskana-cream/70 max-w-2xl text-pretty">
            Bummeln Sie über unseren Markt auserwählter und selbsterzeugter Produkte.
            Bei uns kann Ihr Einkauf zum Erlebnis werden – und wenn Sie etwas Zeit
            übrig haben, trinken Sie noch ein Tässchen Kaffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden h-72 cursor-pointer"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-toskana-ink via-toskana-ink/50 to-transparent transition-opacity group-hover:from-toskana-bark group-hover:via-toskana-bark/70" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl text-toskana-cream mb-3">{c.title}</h3>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-2 group-hover:translate-y-0">
                  {c.items.map((it) => (
                    <li key={it} className="text-toskana-cream/85 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-toskana-honey" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-toskana-honey text-xs uppercase tracking-widest">
                    {c.items.length} Highlights · hover
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
