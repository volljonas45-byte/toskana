"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#cafe", label: "Café" },
  { href: "#fruehstueck", label: "Frühstück" },
  { href: "#hofladen", label: "Hofladen" },
  { href: "#wochenmarkt", label: "Wochenmarkt" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Anfahrt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FBF1DC]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(107,58,26,0.08)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a
            href="#top"
            className={`z-10 inline-flex items-center rounded-2xl transition-all duration-500 ${
              scrolled
                ? "px-3 py-1.5 bg-transparent"
                : "px-4 py-2.5 bg-toskana-cream/95 backdrop-blur-md shadow-[0_8px_30px_rgba(42,26,14,0.25)] ring-1 ring-toskana-cream/40"
            }`}
          >
            <Logo variant="dark" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative group ${
                  scrolled ? "text-toskana-bark hover:text-toskana-terracotta" : "text-toskana-cream hover:text-toskana-honey"
                }`}
              >
                {l.label}
                <span className="absolute left-4 right-4 bottom-1 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="tel:+4972679110700"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-toskana-terracotta text-toskana-cream text-sm font-semibold hover:bg-toskana-burgundy transition-all hover:shadow-lg hover:shadow-toskana-terracotta/40 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              07267 / 911070
            </a>
          </nav>

          <button
            className={`lg:hidden p-2 ${scrolled ? "text-toskana-bark" : "text-toskana-cream"}`}
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-toskana-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-toskana-cream shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-toskana-honey/30">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Menü schließen" className="text-toskana-bark p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 px-4 text-2xl font-[family-name:var(--font-display)] text-toskana-bark border-b border-toskana-honey/20 hover:text-toskana-terracotta transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+4972679110700"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-toskana-terracotta text-toskana-cream font-semibold"
            >
              <Phone className="w-5 h-5" />
              07267 / 911070
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
