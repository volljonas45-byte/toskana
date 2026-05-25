import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { Cafe } from "./components/Cafe";
import { Breakfast } from "./components/Breakfast";
import { Hofladen } from "./components/Hofladen";
import { Wochenmarkt } from "./components/Wochenmarkt";
import { Piaggio } from "./components/Piaggio";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-toskana-cream">
      <Navigation />
      <Hero />
      <Pillars />
      <Cafe />
      <Breakfast />
      <Hofladen />
      <Wochenmarkt />
      <Piaggio />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
