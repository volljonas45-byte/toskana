"use client";

import Image from "next/image";
import { ArrowUpRight, Coffee, ShoppingBasket, Sun } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "cafe-card",
    href: "#cafe",
    icon: Coffee,
    title: "Bauernhofcafé",
    sub: "Korbsessel, Kuchen & Kaffee",
    text: "Mediterrane Atmosphäre, hausgemachte Torten und Hagen-Kaffeespezialitäten – im Sommer auf unserer Terrasse, fast wie in der echten Toskana.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    alt: "Mediterranes Café mit warmem Licht",
    badge: "Mi · Fr · Sa · So",
  },
  {
    id: "hofladen-card",
    href: "#hofladen",
    icon: ShoppingBasket,
    title: "Hofladen",
    sub: "Alles Gute aus der Natur",
    text: "Tagesfrische Eier, hausmacher Wurst, selbstgemachte Marmelade, Honig, Wein – auserwählte und selbsterzeugte Produkte zum in Ruhe einkaufen.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    alt: "Frische Hofprodukte im Korb",
    badge: "Direkt vom Hof",
  },
  {
    id: "wochenmarkt-card",
    href: "#wochenmarkt",
    icon: Sun,
    title: "Wochenmarkt",
    sub: "Freitag ist Markttag",
    text: "Jeden Freitag von 7:30 bis 18:00 Uhr finden Sie uns mit unserem Stand in Leingarten beim alten Rathaus.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    alt: "Wochenmarkt-Stand",
    badge: "Freitag 7:30 – 18:00",
  },
];

export function Pillars() {
  return (
    <section className="relative py-24 lg:py-36 bg-toskana-cream overflow-hidden">
      {/* Decorative cypress silhouettes */}
      <CypressDecor />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mb-20">
          <p className="text-toskana-terracotta text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Drei Welten · Ein Hof
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-toskana-bark mb-6 text-balance">
            Eine Reise in die Toskana –<br />
            <span className="italic text-toskana-terracotta">ganz ohne Koffer.</span>
          </h2>
          <p className="text-lg lg:text-xl text-toskana-bark/70 max-w-2xl text-pretty">
            Seit über zwei Jahrzehnten verbinden wir mediterrane Lebensfreude mit
            echten Kraichgauer Produkten. Drei Erlebnisse warten auf Sie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_rgba(107,58,26,0.06)] hover:shadow-[0_24px_80px_rgba(107,58,26,0.18)] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-toskana-ink/70 via-toskana-ink/10 to-transparent" />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-toskana-cream/95 text-toskana-bark text-[0.7rem] font-semibold uppercase tracking-wider">
                  {p.badge}
                </span>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p.icon className="w-7 h-7 text-toskana-honey mb-2" />
                    <p className="text-toskana-cream/80 text-xs font-medium uppercase tracking-widest">
                      {p.sub}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-toskana-cream/95 text-toskana-bark flex items-center justify-center group-hover:bg-toskana-honey group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl text-toskana-bark mb-3">{p.title}</h3>
                <p className="text-toskana-bark/65 leading-relaxed">{p.text}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CypressDecor() {
  return (
    <svg
      className="absolute left-0 top-20 h-40 w-auto opacity-[0.07] pointer-events-none"
      viewBox="0 0 200 200"
      fill="#3F4A1F"
      aria-hidden
    >
      <ellipse cx="40" cy="120" rx="10" ry="65" />
      <ellipse cx="75" cy="110" rx="12" ry="80" />
      <ellipse cx="115" cy="115" rx="11" ry="72" />
      <ellipse cx="155" cy="125" rx="9" ry="58" />
    </svg>
  );
}
