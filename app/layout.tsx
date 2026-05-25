import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toskana Schukraft · Hofladen & Bauernhofcafé Gemmingen",
  description:
    "Das kleine Urlaubsparadies direkt vor Ihrer Haustüre. Mediterrane Atmosphäre, hausgemachte Torten, frische Hofprodukte und freitags Wochenmarkt in Leingarten.",
  keywords: [
    "Café Toskana Gemmingen",
    "Hofladen Gemmingen",
    "Bauernhofcafé Kraichgau",
    "Frühstück Heilbronn",
    "Tortenbäckerei",
    "Schukraft",
    "Wochenmarkt Leingarten",
  ],
  openGraph: {
    title: "Toskana Schukraft · Hofladen & Bauernhofcafé",
    description: "Das kleine Urlaubsparadies direkt vor Ihrer Haustüre.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
