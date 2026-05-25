"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wine, Cake, Coffee, Sandwich } from "lucide-react";

const offerings = [
  { icon: Coffee, label: "Hagen-Kaffeespezialitäten" },
  { icon: Cake, label: "Selbstgebackene Kuchen & Torten" },
  { icon: Sandwich, label: "Vesperteller & Brotzeit" },
  { icon: Wine, label: "Viertele Wein & kühles Bier" },
];

export function Cafe() {
  return (
    <section id="cafe" className="relative py-24 lg:py-36 bg-gradient-to-b from-toskana-cream via-toskana-sand/30 to-toskana-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[560px] lg:h-[680px]"
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[78%] h-[68%] rounded-3xl overflow-hidden shadow-2xl shadow-toskana-bark/20">
              <Image
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=1200&q=85"
                alt="Mediterranes Café mit Korbsesseln"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Overlap image */}
            <div className="absolute bottom-0 right-0 w-[62%] h-[52%] rounded-3xl overflow-hidden shadow-2xl shadow-toskana-bark/30 ring-8 ring-toskana-cream">
              <Image
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85"
                alt="Hausgemachte Torten"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
            {/* Floating sun emblem */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-toskana-honey to-toskana-terracotta shadow-2xl flex items-center justify-center animate-float">
              <div className="text-center text-toskana-cream font-[family-name:var(--font-display)]">
                <p className="text-3xl leading-none italic">est.</p>
                <p className="text-2xl leading-none font-bold">1998</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-toskana-terracotta text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Café Toskana
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-toskana-bark mb-8 text-balance">
              Inmitten eines wunderschönen <span className="italic text-toskana-terracotta">Bauerngartens.</span>
            </h2>
            <p className="text-lg text-toskana-bark/75 leading-relaxed mb-6 text-pretty">
              Lassen Sie sich vom mediterranen Ambiente unserer Toskana überraschen.
              Nehmen Sie Platz in einem der bequemen Korbsessel und lassen Sie Ihre
              Seele baumeln.
            </p>
            <p className="text-lg text-toskana-bark/75 leading-relaxed mb-10 text-pretty">
              Genießen Sie unsere selbstgebackenen Kuchen oder Torten bei einer Tasse
              Hagen-Kaffeespezialität und einem Eisbecher. Dazu Vesperteller,
              Schinkenbrot, Käsebrot – für jeden Geschmack ist etwas dabei.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {offerings.map((o) => (
                <div
                  key={o.label}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-toskana-cream border border-toskana-honey/20 hover:border-toskana-terracotta/40 hover:bg-white transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-toskana-terracotta/10 flex items-center justify-center shrink-0">
                    <o.icon className="w-5 h-5 text-toskana-terracotta" />
                  </div>
                  <span className="text-sm font-medium text-toskana-bark leading-tight">
                    {o.label}
                  </span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-toskana-honey pl-6 py-2">
              <p className="text-2xl font-[family-name:var(--font-serif)] italic text-toskana-bark/85">
                „Beginnen Sie den Tag in ruhiger erholsamer Umgebung."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
