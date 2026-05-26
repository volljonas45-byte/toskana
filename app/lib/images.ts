// Zentrale Bild-Pfade. basePath wird von Next.js automatisch vorangestellt.
// next/image fügt im prod-build /toskana/ vor den Pfad.
export const img = {
  logo: "/images/logo/toskana-logo.png",
  hero: "/images/hero/hof-uebersicht.jpg",
  cafe: {
    terrasse: "/images/cafe/terrasse-sonnenschirme.webp",
    innen: "/images/cafe/innen-korbsessel.jpg",
  },
  hofladen: {
    inhaberin: "/images/hofladen/inhaberin-terrasse.jpg",
  },
  torten: {
    baeckerin: "/images/torten/tortenbaeckerin.jpg",
  },
  piaggio: {
    apeVorCafe: "/images/piaggio/ape-vor-cafe.jpg",
  },
  galerie: {
    hofFrontal: "/images/galerie/hof-frontal.jpg",
    gartenYucca: "/images/galerie/garten-yucca.jpg",
    terrasseTische: "/images/galerie/terrasse-tische.jpg",
  },
} as const;
