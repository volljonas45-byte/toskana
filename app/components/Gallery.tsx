"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { img } from "../lib/images";

const images = [
  { src: img.hero, alt: "Café Toskana – Frontansicht mit Piaggio Ape", h: "row-span-2" },
  { src: img.cafe.terrasse, alt: "Terrasse mit Sonnenschirmen und Bauerngarten" },
  { src: img.cafe.innen, alt: "Café-Innenraum mit Korbsesseln" },
  { src: img.hofladen.inhaberin, alt: "Adelheid Schukraft auf der Café-Terrasse", h: "row-span-2" },
  { src: img.galerie.gartenYucca, alt: "Bauerngarten mit Yucca und Lavendel" },
  { src: img.torten.baeckerin, alt: "Unsere Tortenbäckerin im Café" },
  { src: img.galerie.hofFrontal, alt: "Hof Toskana in der Abendsonne" },
  { src: img.galerie.terrasseTische, alt: "Terrasse mit Sonnenschirmen und Steingarten" },
  { src: img.piaggio.apeVorCafe, alt: "Der gelbe Piaggio Ape vor dem Café" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative py-24 lg:py-36 bg-toskana-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-toskana-terracotta text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Galerie
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-toskana-bark mb-6 text-balance">
            Atmosphäre, die man <span className="italic text-toskana-terracotta">sehen kann.</span>
          </h2>
          <p className="text-lg text-toskana-bark/70 max-w-2xl text-pretty">
            Ein Blick in unseren Hof, die Tortenbäckerei und das mediterrane Flair,
            das unsere Gäste seit über 25 Jahren wieder zurückkommen lässt.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[260px] gap-3 lg:gap-4">
          {images.map((image, i) => (
            <motion.div
              key={image.src + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl lg:rounded-3xl group cursor-pointer ${image.h ?? ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-toskana-ink/0 group-hover:bg-toskana-ink/40 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-toskana-cream text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
