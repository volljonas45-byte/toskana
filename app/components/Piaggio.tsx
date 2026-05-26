"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { img } from "../lib/images";

export function Piaggio() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-br from-toskana-honey via-toskana-honey to-toskana-terracotta">
      {/* Toskana hills SVG decoration */}
      <svg
        className="absolute bottom-0 left-0 w-full h-1/2 opacity-30 pointer-events-none"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0,300 Q360,150 720,250 T1440,200 L1440,400 L0,400 Z" fill="#6E7A3A" opacity="0.6" />
        <path d="M0,350 Q360,250 720,320 T1440,290 L1440,400 L0,400 Z" fill="#3F4A1F" />
        {/* Cypress trees */}
        <ellipse cx="120" cy="250" rx="8" ry="55" fill="#3F4A1F" />
        <ellipse cx="135" cy="240" rx="9" ry="68" fill="#3F4A1F" />
        <ellipse cx="155" cy="252" rx="7" ry="50" fill="#3F4A1F" />
        <ellipse cx="1280" cy="240" rx="10" ry="65" fill="#3F4A1F" />
        <ellipse cx="1300" cy="230" rx="8" ry="75" fill="#3F4A1F" />
        <ellipse cx="1320" cy="245" rx="9" ry="60" fill="#3F4A1F" />
      </svg>

      {/* Sun */}
      <div className="absolute top-16 right-16 w-40 h-40 rounded-full bg-toskana-cream/40 blur-2xl" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-toskana-cream/85 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Unser TOSKANA-Flitzer
            </p>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] text-toskana-cream text-shadow-warm mb-8 text-balance">
              Klein, gelb,
              <br />
              <span className="italic">italienisch.</span>
            </h2>
            <p className="text-lg lg:text-xl text-toskana-cream/90 leading-relaxed mb-6 text-pretty">
              Unser gelber Piaggio Ape 50 ist mehr als ein Fahrzeug – er ist das
              Symbol unserer Toskana. Ein Stück italienische Lebensfreude,
              direkt vor unserem Hof.
            </p>
            <p className="text-lg text-toskana-cream/85 italic font-[family-name:var(--font-serif)] text-pretty">
              "La dolce vita" beginnt manchmal mit drei Rädern.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <Stat n="1998" l="seit über 25 Jahren" />
              <Stat n="3" l="Räder, ein Lächeln" />
              <Stat n="∞" l="Toskana-Momente" />
            </div>
          </motion.div>

          {/* Right - animated Piaggio scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-toskana-cream/20 to-toskana-cream/5 backdrop-blur-sm border border-toskana-cream/20 p-8">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-toskana-cream/10">
                <Image
                  src={img.piaggio.apeVorCafe}
                  alt="Der gelbe TOSKANA Piaggio Ape 50 vor dem Café"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full bg-toskana-cream shadow-xl flex items-center justify-center animate-float">
                <div className="text-center text-toskana-bark font-[family-name:var(--font-display)] leading-none">
                  <p className="text-xs uppercase tracking-widest opacity-60">Made in</p>
                  <p className="text-xl mt-0.5">Italia</p>
                </div>
              </div>

              <div className="absolute bottom-4 -left-4 px-5 py-3 rounded-full bg-toskana-cypress text-toskana-cream text-sm font-semibold shadow-xl">
                Ape 50 · since 1968
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl text-toskana-cream">{n}</p>
      <p className="text-toskana-cream/75 text-sm mt-1 leading-tight">{l}</p>
    </div>
  );
}
