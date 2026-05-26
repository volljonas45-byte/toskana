import Image from "next/image";
import { img } from "../lib/images";

type LogoProps = { className?: string; variant?: "light" | "dark" };

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className="relative h-14 w-44 lg:h-16 lg:w-52 transition-all duration-500"
        style={
          variant === "light"
            ? { filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.55)) drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }
            : undefined
        }
      >
        <Image
          src={img.logo}
          alt="Toskana Schukraft – Hofladen und Bauernhofcafé"
          fill
          className="object-contain object-left"
          priority
          sizes="(max-width: 768px) 176px, 208px"
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
