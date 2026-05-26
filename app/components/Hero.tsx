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
    <section
      id="top"
      className="relative min-h-[860px] h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <Image
          src={img.cafe.terrasse}
          alt="Café Toskana Terrasse mit Sonnenschirmen und Bauerngarten"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark left-to-right gradient: Text sits on dark side, image breathes on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-toskana-ink/85 via-toskana-ink/55 to-toskana-ink/15" />
        {/* Top vignette for nav + logo */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-toskana-ink/80 via-toskana-ink/25 to-transparent" />
        {/* Bottom fade to next section + bottom darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-toskana-ink/85 via-toskana-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-toskana-cream to-transparent" />
      </div>

      {/* Decorative warm glows */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-toskana-honey/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-toskana-terracotta/25 blur-3xl pointer-events-none" />

      {/* Content - vertikal zentriert, mehr Top-Padding für Logo-Freiraum */}
      <div className="relative flex-1 container mx-auto px-6 lg:px-12 flex items-center pt-32 lg:pt-40 pb-32">
        <div
          className="max-w-3xl"
          style={{
            transform: `translateY(${-scrollY * 0.12}px)`,
            opacity: Math.max(0, 1 - scrollY / 700),
          }}
        >
          <h1 className="text-toskana-cream text-shadow-warm font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] mb-8 text-balance">
            Das kleine{" "}
            <span className="italic text-toskana-honey">Urlaubsparadies</span>{" "}
            direkt vor Ihrer Haustüre.
          </h1>

          <p className="text-toskana-cream/95 text-shadow-warm text-lg lg:text-xl max-w-xl font-[family-name:var(--font-serif)] italic mb-10 text-pretty">
            Mediterrane Atmosphäre, hausgemachte Torten, frische Hofprodukte –
            mitten im Kraichgau, fast wie in der echten Toskana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cafe"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-toskana-cream text-toskana-bark font-semibold hover:bg-toskana-honey transition-all hover:shadow-2xl hover:shadow-toskana-honey/40 hover:-translate-y-1"
            >
              Unser Café entdecken
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-toskana-cream/10 backdrop-blur-md border border-toskana-cream/40 text-toskana-cream font-semibold hover:bg-toskana-cream/20 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Anfahrt & Karte
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative backdrop-blur-md bg-toskana-cream/90 border-t border-toskana-honey/30">
        <div className="container mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-toskana-terracotta" />
            <div>
              <p className="text-[0.7rem] uppercase tracking-widest text-toskana-bark/60">
                Heute
              </p>
              <p className="text-sm font-semibold text-toskana-bark">
                <TodayOpening />
              </p>
            </div>
          </div>
          <div className="hidden md:block h-10 w-px bg-toskana-honey/30" />
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-toskana-terracotta" />
            <div>
              <p className="text-[0.7rem] uppercase tracking-widest text-toskana-bark/60">
                Adresse
              </p>
              <p className="text-sm font-semibold text-toskana-bark">
                Schleifweghöfe 1/1 · 75050 Gemmingen
              </p>
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
