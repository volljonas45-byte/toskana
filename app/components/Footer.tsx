import { Phone, Mail, MapPin, Share2 as Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-toskana-ink text-toskana-cream/85 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-toskana-cream/60 text-sm leading-relaxed max-w-sm">
              Das kleine Urlaubsparadies direkt vor Ihrer Haustüre.
              Hofladen, Bauernhofcafé und Tortenbäckerei mitten im Kraichgau –
              fast wie in der echten Toskana.
            </p>
            <div className="flex gap-3 mt-6">
              <SocialIcon icon={Facebook} href="https://www.facebook.com/" label="Facebook" />
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-toskana-honey text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Entdecken
            </h4>
            <ul className="space-y-3">
              {[
                { l: "Café", h: "#cafe" },
                { l: "Frühstück", h: "#fruehstueck" },
                { l: "Hofladen", h: "#hofladen" },
                { l: "Wochenmarkt", h: "#wochenmarkt" },
                { l: "Galerie", h: "#galerie" },
                { l: "Kontakt", h: "#kontakt" },
              ].map((i) => (
                <li key={i.l}>
                  <a href={i.h} className="text-sm text-toskana-cream/70 hover:text-toskana-honey transition-colors">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="lg:col-span-3">
            <h4 className="text-toskana-honey text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-toskana-cream/70">
                <MapPin className="w-4 h-4 text-toskana-honey shrink-0 mt-0.5" />
                <span>
                  Schleifweghöfe 1/1<br />
                  75050 Gemmingen
                </span>
              </li>
              <li>
                <a href="tel:+4972679110700" className="flex items-center gap-3 text-toskana-cream/70 hover:text-toskana-honey transition-colors">
                  <Phone className="w-4 h-4 text-toskana-honey" />
                  07267 / 911070
                </a>
              </li>
              <li>
                <a href="mailto:F.Schukraft@t-online.de" className="flex items-center gap-3 text-toskana-cream/70 hover:text-toskana-honey transition-colors break-all">
                  <Mail className="w-4 h-4 text-toskana-honey shrink-0" />
                  F.Schukraft@t-online.de
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div className="lg:col-span-3">
            <h4 className="text-toskana-honey text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Geöffnet
            </h4>
            <ul className="space-y-2 text-sm text-toskana-cream/70">
              <li>Mi 8:30 – 12:30 · 14:00 – 18:30</li>
              <li>Fr 8:30 – 18:30</li>
              <li>Sa 8:30 – 17:30</li>
              <li>So 14:00 – 17:30</li>
              <li className="pt-3 text-toskana-honey/80 text-xs uppercase tracking-wider">
                Wochenmarkt Leingarten
              </li>
              <li>Freitag 7:30 – 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-toskana-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-toskana-cream/45">
            © {new Date().getFullYear()} Michael und Adelheid Schukraft GbR · Schleifweghöfe 1/1 · 75050 Gemmingen
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#impressum" className="text-toskana-cream/55 hover:text-toskana-honey transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" className="text-toskana-cream/55 hover:text-toskana-honey transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href, label }: { icon: typeof Facebook; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-toskana-cream/10 hover:bg-toskana-honey text-toskana-cream hover:text-toskana-ink flex items-center justify-center transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
