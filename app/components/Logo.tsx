import Image from "next/image";
import { img } from "../lib/images";

type LogoProps = { className?: string; variant?: "light" | "dark" };

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  // light = vor dem Hero-Bild: kräftiger weißer Glow umgibt das Logo,
  // damit es auf jedem Hintergrund leuchtet – ohne sichtbare Box.
  const lightFilter =
    "drop-shadow(0 0 18px rgba(251,241,220,0.95)) drop-shadow(0 0 8px rgba(251,241,220,0.85)) drop-shadow(0 2px 4px rgba(0,0,0,0.45))";

  return (
    <div className={`flex items-center ${className}`}>
      <div
        className="relative h-16 w-52 lg:h-20 lg:w-64 transition-all duration-500"
        style={variant === "light" ? { filter: lightFilter } : undefined}
      >
        <Image
          src={img.logo}
          alt="Toskana Schukraft – Hofladen und Bauernhofcafé"
          fill
          className="object-contain object-left"
          priority
          sizes="(max-width: 768px) 208px, 256px"
        />
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-12 w-12 ${className}`}>
      <Image src={img.logo} alt="Toskana" fill className="object-contain" sizes="48px" />
    </div>
  );
}
