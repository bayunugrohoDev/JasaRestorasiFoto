import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Keahlian from "./components/Keahlian";
import Keunggulan from "./components/Keunggulan";
import LangkahPemesanan from "./components/LangkahPemesanan";
import MetodePembayaran from "./components/MetodePembayaran";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* About  */}
      <About/>
      <Services />
      <Keahlian/>
      <Keunggulan/>
      <Portfolio />
      <MetodePembayaran/>
      <LangkahPemesanan/>
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
