"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Clock } from "lucide-react";
import { img } from "../lib/images";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[760px] w-full overflow-hidden">
      {/* Background Image - Toskana-Landschaft */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0003})` }}>
        <Image
          src={img.cafe.terrasse}
          alt="Café Toskana Terrasse mit Sonnenschirmen und Bauerngarten"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Top vignette - dunkler oben für Logo+Nav-Lesbarkeit */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-toskana-ink/85 via-toskana-ink/45 to-transparent" />
        {/* Base overall darkening for hero text */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-toskana-bark/25 to-toskana-ink/70" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-toskana-cream via-transparent to-transparent" />
      </div>

      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-toskana-honey/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-toskana-terracotta/30 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-end pb-32 lg:pb-40">
        <div
          className="max-w-4xl"
          style={{ transform: `translateY(${-scrollY * 0.15}px)`, opacity: 1 - scrollY / 600 }}
        >
          <h1 className="text-toskana-cream text-shadow-warm font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] mb-6">
            Das kleine
            <br />
            <span className="italic text-toskana-honey">Urlaubsparadies</span>
            <br />
            direkt vor Ihrer Haustüre.
          </h1>

          <p className="text-toskana-cream/90 text-shadow-warm text-xl lg:text-2xl max-w-2xl font-[family-name:var(--font-serif)] italic mb-12 text-pretty">
            Mediterrane Atmosphäre, hausgemachte Torten, frische Hofprodukte –
            mitten im Kraichgau, fast wie in der echten Toskana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cafe"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-toskana-cream text-toskana-bark font-semibold hover:bg-toskana-honey transition-all hover:shadow-2xl hover:shadow-toskana-honey/40 hover:-translate-y-1"
            >
              Unser Café entdecken
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-toskana-cream/10 backdrop-blur-md border border-toskana-cream/30 text-toskana-cream font-semibold hover:bg-toskana-cream/20 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Anfahrt & Karte
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 inset-x-0 backdrop-blur-md bg-toskana-cream/85 border-t border-toskana-honey/30">
        <div className="container mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-toskana-terracotta" />
            <div>
              <p className="text-[0.7rem] uppercase tracking-widest text-toskana-bark/60">Heute</p>
              <p className="text-sm font-semibold text-toskana-bark">
                <TodayOpening />
              </p>
            </div>
          </div>
          <div className="hidden md:block h-10 w-px bg-toskana-honey/30" />
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-toskana-terracotta" />
            <div>
              <p className="text-[0.7rem] uppercase tracking-widest text-toskana-bark/60">Adresse</p>
              <p className="text-sm font-semibold text-toskana-bark">Schleifweghöfe 1/1 · 75050 Gemmingen</p>
            </div>
          </div>
          <div className="hidden md:block h-10 w-px bg-toskana-honey/30" />
          <div className="flex items-center gap-3 md:ml-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-toskana-olive/15 text-toskana-cypress text-xs font-semibold uppercase tracking-wider">
              Freitag · Marktstand Leingarten 7:30 – 18:00
            </span>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="animate-float text-toskana-cream/70">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

function TodayOpening() {
  const [text, setText] = useState("Geöffnet · Bitte Öffnungszeiten prüfen");

  useEffect(() => {
    const day = new Date().getDay();
    const map: Record<number, string> = {
      0: "Geöffnet 14:00 – 17:30",
      1: "Geschlossen · Mittwoch wieder geöffnet",
      2: "Geschlossen · Mittwoch wieder geöffnet",
      3: "Geöffnet 8:30 – 12:30 & 14:00 – 18:30",
      4: "Geschlossen · Freitag wieder geöffnet",
      5: "Geöffnet 8:30 – 18:30",
      6: "Geöffnet 8:30 – 17:30",
    };
    setText(map[day] ?? "Bitte Öffnungszeiten prüfen");
  }, []);

  return <>{text}</>;
}
