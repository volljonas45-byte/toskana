// basePath muss manuell vor next/image src gesetzt werden.
// Quelle: next.js docs/01-app/.../basePath.md → "Images"
const basePath = process.env.NODE_ENV === "production" ? "/toskana" : "";
const p = (path: string) => `${basePath}${path}`;

export const img = {
  logo: p("/images/logo/toskana-logo.png"),
  hero: p("/images/hero/hof-uebersicht.jpg"),
  cafe: {
    terrasse: p("/images/cafe/terrasse-sonnenschirme.webp"),
    innen: p("/images/cafe/innen-korbsessel.jpg"),
  },
  hofladen: {
    inhaberin: p("/images/hofladen/inhaberin-terrasse.jpg"),
  },
  torten: {
    baeckerin: p("/images/torten/tortenbaeckerin.jpg"),
  },
  piaggio: {
    apeVorCafe: p("/images/piaggio/ape-vor-cafe.jpg"),
  },
  galerie: {
    hofFrontal: p("/images/galerie/hof-frontal.jpg"),
    gartenYucca: p("/images/galerie/garten-yucca.jpg"),
    terrasseTische: p("/images/galerie/terrasse-tische.jpg"),
  },
} as const;
