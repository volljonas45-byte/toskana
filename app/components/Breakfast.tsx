"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { img } from "../lib/images";

const variants = [
  {
    no: "I",
    name: "Klassisch",
    items: ["1 Heißgetränk", "2 Brötchen", "Butter & Marmelade", "Gekochtes Ei"],
  },
  {
    no: "II",
    name: "Vesper",
    items: ["1 Heißgetränk", "2 Brötchen", "Butter & Marmelade", "Ei, Käse, Wurst, Schinken"],
  },
  {
    no: "III",
    name: "Rührei",
    items: ["1 Heißgetränk", "2 Brötchen", "Butter & Marmelade", "Portion Rührei"],
  },
  {
    no: "IV",
    name: "Rührei deluxe",
    items: ["1 Heißgetränk", "2 Brötchen", "Butter & Marmelade", "Rührei, Käse, Wurst, Schinken"],
  },
  {
    no: "V",
    name: "Mediterran",
    items: ["1 Heißgetränk", "2 Brötchen", "Butter & Marmelade", "Gekochtes Ei", "Naturjoghurt mit Müsli"],
  },
  {
    no: "VI",
    name: "Sonntagsfrühstück",
    items: ["Heißgetränk & Orangensaft", "2 Brötchen, Butter, Marmelade", "Räucherlachs & Sahnemeerrettich", "Gekochtes Ei, Obstsalat"],
  },
  {
    no: "VII",
    name: "Schukraft's Festtag",
    highlight: true,
    items: [
      "Heißgetränk & Orangensaft",
      "2 Brötchen, Butter, Marmelade, Honig",
      "Gekochtes Ei, Schinken von der Pute",
      "Tomaten mit Mozzarella, Obstsalat & Joghurt",
    ],
  },
];

export function Breakfast() {
  return (
    <section id="fruehstueck" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={img.galerie.gartenYucca}
          alt="Bauerngarten mit Yucca und Lavendel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-toskana-cream/95 via-toskana-cream/90 to-toskana-sand/90" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-toskana-terracotta text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Frühstück · Mi · Fr · Sa ab 8:30
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-toskana-bark mb-6 text-balance">
            Sieben Wege in einen <span className="italic text-toskana-terracotta">guten Morgen.</span>
          </h2>
          <p className="text-lg text-toskana-bark/70 max-w-2xl mx-auto text-pretty">
            Vom klassischen Bauernfrühstück bis zum festlichen Sonntags-Brunch – jede
            Variante mit Liebe zubereitet und mit frischen Produkten aus unserem eigenen Hofladen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {variants.map((v, i) => (
            <motion.div
              key={v.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                v.highlight
                  ? "bg-gradient-to-br from-toskana-terracotta to-toskana-burgundy text-toskana-cream shadow-2xl shadow-toskana-terracotta/30 md:col-span-2 lg:col-span-1 lg:row-span-1"
                  : "bg-toskana-cream/85 backdrop-blur-sm border border-toskana-honey/30 hover:border-toskana-terracotta/40 hover:shadow-2xl hover:shadow-toskana-bark/10"
              }`}
            >
              {v.highlight && (
                <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-toskana-honey text-toskana-ink text-[0.7rem] font-bold uppercase tracking-wider shadow-lg">
                  Empfehlung
                </span>
              )}
              <div className="flex items-baseline justify-between mb-6">
                <span
                  className={`font-[family-name:var(--font-display)] text-6xl leading-none ${
                    v.highlight ? "text-toskana-honey" : "text-toskana-honey"
                  }`}
                >
                  {v.no}
                </span>
                <h3 className={`text-2xl ${v.highlight ? "text-toskana-cream" : "text-toskana-bark"}`}>
                  {v.name}
                </h3>
              </div>
              <div className={`h-px w-12 mb-6 ${v.highlight ? "bg-toskana-honey" : "bg-toskana-terracotta"}`} />
              <ul className="space-y-2.5">
                {v.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2.5 text-[0.95rem] leading-relaxed ${
                      v.highlight ? "text-toskana-cream/90" : "text-toskana-bark/75"
                    }`}
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        v.highlight ? "bg-toskana-honey" : "bg-toskana-terracotta"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-16 text-sm text-toskana-bark/60 italic">
          Reservierung empfohlen · Telefon 07267 / 911070
        </p>
      </div>
    </section>
  );
}
