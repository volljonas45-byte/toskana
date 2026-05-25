"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Car, ExternalLink, Share2 as Facebook } from "lucide-react";

const hours = [
  { day: "Montag", time: "Geschlossen", closed: true },
  { day: "Dienstag", time: "Geschlossen", closed: true },
  { day: "Mittwoch", time: "8:30 – 12:30 · 14:00 – 18:30" },
  { day: "Donnerstag", time: "Geschlossen", closed: true },
  { day: "Freitag", time: "8:30 – 18:30 · durchgehend" },
  { day: "Samstag", time: "8:30 – 17:30 · durchgehend" },
  { day: "Sonntag", time: "14:00 – 17:30" },
];

export function Contact() {
  const today = new Date().getDay();
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <section id="kontakt" className="relative py-24 lg:py-36 bg-toskana-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-toskana-terracotta text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Anfahrt & Kontakt
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-toskana-bark mb-6 text-balance">
            Mitten im Kraichgau –<br />
            <span className="italic text-toskana-terracotta">leicht zu finden.</span>
          </h2>
          <p className="text-lg text-toskana-bark/70 text-pretty">
            Direkt an der B 293 zwischen Heilbronn und Eppingen. Ausreichend Parkplätze,
            Spielplatz für die Kinder – und Hunde dürfen draußen warten.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left column: Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl shadow-toskana-bark/15 min-h-[480px] lg:min-h-[640px] bg-toskana-bark/5"
          >
            <iframe
              src="https://www.google.com/maps?q=Schleifweghöfe+1%2F1+75050+Gemmingen&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[35%] contrast-[1.05] saturate-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anfahrt Café Toskana Gemmingen"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-md p-6 rounded-2xl bg-toskana-cream/95 backdrop-blur-md shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-widest text-toskana-terracotta font-semibold mb-2">
                Hier sind wir
              </p>
              <p className="text-2xl font-[family-name:var(--font-display)] text-toskana-bark leading-tight mb-1">
                Schleifweghöfe 1/1
              </p>
              <p className="text-toskana-bark/70 mb-4">75050 Gemmingen · Kraichgau</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Schleifweghöfe+1%2F1+75050+Gemmingen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-toskana-terracotta text-toskana-cream text-sm font-semibold hover:bg-toskana-burgundy transition-colors"
              >
                <Car className="w-4 h-4" />
                Route planen
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right column: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact card */}
            <div className="p-7 lg:p-8 rounded-3xl bg-toskana-bark text-toskana-cream">
              <h3 className="text-2xl font-[family-name:var(--font-display)] mb-6">
                So erreichen Sie uns
              </h3>
              <div className="space-y-5">
                <ContactRow icon={Phone} label="Telefon" value="07267 / 911070" href="tel:+4972679110700" />
                <ContactRow icon={Mail} label="E-Mail" value="F.Schukraft@t-online.de" href="mailto:F.Schukraft@t-online.de" />
                <ContactRow icon={MapPin} label="Adresse" value="Schleifweghöfe 1/1, 75050 Gemmingen" />
                <ContactRow icon={Facebook} label="Social" value="Café Toskana auf Facebook" href="https://www.facebook.com/" />
              </div>
            </div>

            {/* Hours */}
            <div className="p-7 lg:p-8 rounded-3xl bg-white border border-toskana-honey/30">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-toskana-terracotta" />
                <h3 className="text-2xl font-[family-name:var(--font-display)] text-toskana-bark">
                  Öffnungszeiten
                </h3>
              </div>
              <div className="space-y-2">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      i === todayIdx
                        ? "bg-toskana-honey/15 ring-1 ring-toskana-honey/40"
                        : ""
                    }`}
                  >
                    <span className={`text-sm font-medium ${i === todayIdx ? "text-toskana-bark" : "text-toskana-bark/80"}`}>
                      {h.day}
                      {i === todayIdx && (
                        <span className="ml-2 text-[0.65rem] uppercase tracking-widest text-toskana-terracotta font-bold">
                          heute
                        </span>
                      )}
                    </span>
                    <span className={`text-sm ${h.closed ? "text-toskana-bark/40 italic" : "text-toskana-bark/80"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-toskana-bark/55 mt-4 italic">
                An Feiertagen geschlossen · Hunde dürfen draußen warten
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <div className="w-10 h-10 rounded-full bg-toskana-honey/15 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-toskana-honey" />
      </div>
      <div>
        <p className="text-[0.7rem] uppercase tracking-widest text-toskana-cream/60">{label}</p>
        <p className="text-toskana-cream font-medium">{value}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} className="flex items-center gap-4 group hover:text-toskana-honey transition-colors">
        {Inner}
      </a>
    );
  }
  return <div className="flex items-center gap-4">{Inner}</div>;
}
