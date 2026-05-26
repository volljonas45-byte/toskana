"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { img } from "../lib/images";

export function Wochenmarkt() {
  return (
    <section id="wochenmarkt" className="relative py-24 lg:py-36 bg-toskana-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-toskana-olive text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Wochenmarkt
            </p>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] text-toskana-bark mb-8 text-balance">
              Freitag ist
              <br />
              <span className="italic text-toskana-olive">Markttag.</span>
            </h2>
            <p className="text-lg text-toskana-bark/75 leading-relaxed mb-10 text-pretty">
              Jeden Freitag finden Sie uns mit einer kleinen Auswahl unseres Sortiments
              am Wochenmarkt in Leingarten – tagesfrisch, regional und mit der gleichen
              Sorgfalt wie im Hofladen.
            </p>

            <div className="space-y-4 mb-10">
              <InfoLine icon={Calendar} title="Jeden Freitag" sub="zuverlässig & wetterfest" />
              <InfoLine icon={Clock} title="7:30 – 18:00 Uhr" sub="den ganzen Tag erreichbar" />
              <InfoLine icon={MapPin} title="Leingarten · beim alten Rathaus" sub="zentral und gut zu finden" />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Eier", "Nudeln", "Dosenwurst", "Schinken", "Marmelade", "Honig", "Kaffee", "Obst"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white border border-toskana-olive/20 text-sm text-toskana-bark/80 hover:border-toskana-olive hover:text-toskana-olive transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-toskana-bark/20">
              <Image
                src={img.piaggio.apeVorCafe}
                alt="TOSKANA Piaggio Ape vor dem Café – am Markttag freitags in Leingarten"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-toskana-ink/40 via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-sm p-6 rounded-2xl bg-toskana-cream/95 backdrop-blur-md shadow-xl">
                <p className="text-[0.7rem] uppercase tracking-widest text-toskana-terracotta font-semibold mb-2">
                  Nächster Markttag
                </p>
                <p className="text-2xl font-[family-name:var(--font-display)] text-toskana-bark leading-tight">
                  Freitag · 7:30 Uhr
                </p>
                <p className="text-sm text-toskana-bark/65 mt-1">
                  Leingarten, beim alten Rathaus
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ icon: Icon, title, sub }: { icon: typeof Calendar; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-toskana-honey/20">
      <div className="w-12 h-12 rounded-full bg-toskana-olive/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-toskana-olive" />
      </div>
      <div>
        <p className="text-toskana-bark font-semibold">{title}</p>
        <p className="text-toskana-bark/60 text-sm">{sub}</p>
      </div>
    </div>
  );
}
