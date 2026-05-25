type LogoProps = { className?: string; variant?: "light" | "dark" };

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const primary = variant === "light" ? "#FBF1DC" : "#6B3A1A";
  const accent = variant === "light" ? "#E8A93C" : "#C26B5B";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark />
      <div className="flex flex-col leading-none">
        <span
          className="font-[family-name:var(--font-display)] text-2xl tracking-wider"
          style={{ color: primary }}
        >
          TOSKANA
        </span>
        <span
          className="text-[0.6rem] uppercase tracking-[0.25em] mt-0.5"
          style={{ color: accent }}
        >
          Schukraft · seit 1998
        </span>
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`h-12 w-12 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Toskana"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4D9A4" />
          <stop offset="100%" stopColor="#E8A93C" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBF1DC" />
          <stop offset="100%" stopColor="#F4D9A4" />
        </linearGradient>
        <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6E7A3A" />
          <stop offset="100%" stopColor="#3F4A1F" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#sky)" />
      <circle cx="32" cy="28" r="11" fill="url(#sun)" />
      {/* Zypressen */}
      <ellipse cx="15" cy="36" rx="2" ry="9" fill="#3F4A1F" />
      <ellipse cx="20" cy="34" rx="1.8" ry="11" fill="#3F4A1F" />
      <ellipse cx="24" cy="36" rx="2" ry="9" fill="#3F4A1F" />
      {/* Hügel hinten */}
      <path d="M 0 44 Q 22 32 44 40 T 64 38 L 64 64 L 0 64 Z" fill="#C26B5B" opacity="0.55" />
      {/* Hügel vorn */}
      <path d="M 0 50 Q 18 40 36 46 T 64 46 L 64 64 L 0 64 Z" fill="url(#hill)" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="#6B3A1A" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}
