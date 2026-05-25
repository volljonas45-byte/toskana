"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85", alt: "Toskana Hügel mit Zypressen", h: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85", alt: "Hausgemachte Torten" },
  { src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=900&q=85", alt: "Mediterranes Café Interior" },
  { src: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?auto=format&fit=crop&w=900&q=85", alt: "Frische Eier" },
  { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=85", alt: "Wochenmarktstand", h: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1597528380179-2c7f87fd3ec4?auto=format&fit=crop&w=900&q=85", alt: "Selbstgemachte Marmelade" },
  { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85", alt: "Frisches Gemüse" },
  { src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85", alt: "Bauerngarten mit Lavendel" },
  { src: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=900&q=85", alt: "Piaggio Ape gelb" },
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
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl lg:rounded-3xl group cursor-pointer ${img.h ?? ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-toskana-ink/0 group-hover:bg-toskana-ink/40 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-toskana-cream text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
