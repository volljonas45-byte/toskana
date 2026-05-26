"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Egg, Beef, Wheat, Carrot, Wine, Gift } from "lucide-react";
import { img } from "../lib/images";

const categories = [
  {
    icon: Egg,
    title: "Frische vom Hof",
    items: ["Tagesfrische Eier", "Frischmilch", "Käse", "Joghurt"],
  },
  {
    icon: Beef,
    title: "Hausmacher Spezialitäten",
    items: ["Dosenwurst", "Schinken", "Putenspezialitäten", "Frischei-Nudeln"],
  },
  {
    icon: Wheat,
    title: "Süßes & Vorrat",
    items: ["Selbstgemachte Marmelade", "Honig", "Mehl & Müsli", "Hagen-Kaffee"],
  },
  {
    icon: Carrot,
    title: "Aus Garten & Feld",
    items: ["Saisonales Obst", "Gemüse & Salat", "Kartoffeln", "Zwiebeln"],
  },
  {
    icon: Wine,
    title: "Wein & Edelbrände",
    items: ["Wein & Sekt", "Edle Schnäpse", "Liköre", "Pralinen"],
  },
  {
    icon: Gift,
    title: "Geschenke",
    items: ["Geschenkideen", "Bücher", "Gutscheine", "ohne Verfallsdatum"],
  },
];

export function Hofladen() {
  return (
    <section id="hofladen" className="relative py-24 lg:py-36 bg-toskana-bark text-toskana-cream overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-24 -translate-y-px text-toskana-cream"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C240,112 480,16 720,48 C960,80 1200,112 1440,64 L1440,0 L0,0 Z" />
      </svg>

      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-toskana-terracotta/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-toskana-honey/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Inhaberin Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="text-toskana-honey text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Hofladen · Direkt vom Erzeuger
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6 text-balance">
              Alles Gute aus der Natur –<br />
              <span className="italic text-toskana-honey">in Ruhe einkaufen.</span>
            </h2>
            <p className="text-lg text-toskana-cream/70 mb-8 text-pretty">
              Bummeln Sie über unseren Markt auserwählter und selbsterzeugter Produkte.
              Bei uns kann Ihr Einkauf zum Erlebnis werden – und wenn Sie etwas Zeit
              übrig haben, trinken Sie noch ein Tässchen Kaffee.
            </p>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-toskana-ink/40 ring-1 ring-toskana-honey/20">
              <Image
                src={img.hofladen.inhaberin}
                alt="Adelheid Schukraft – Inhaberin auf der Café-Terrasse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-toskana-ink/70 via-toskana-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-[0.7rem] uppercase tracking-widest text-toskana-honey font-semibold mb-2">
                  Mit Leidenschaft seit 1998
                </p>
                <p className="text-2xl font-[family-name:var(--font-display)] text-toskana-cream italic leading-tight">
                  „Bei uns wird Ihr Einkauf zum Erlebnis."
                </p>
                <p className="text-toskana-cream/70 text-sm mt-2">
                  Familie Schukraft
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Categories list */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl p-6 lg:p-7 bg-toskana-cream/5 border border-toskana-cream/10 hover:bg-toskana-cream/10 hover:border-toskana-honey/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-toskana-honey/15 flex items-center justify-center mb-5 group-hover:bg-toskana-honey/30 transition-colors">
                  <c.icon className="w-5 h-5 text-toskana-honey" />
                </div>
                <h3 className="text-2xl text-toskana-cream mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="text-toskana-cream/75 text-sm flex items-center gap-2.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-toskana-honey shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
