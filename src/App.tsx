import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import BrandCarousel from './sections/BrandCarousel';
import ServicesIntro from './sections/ServicesIntro';
import ServiceSection from './sections/ServiceSection';
import CTASection from './sections/CTASection';
import InfoBanner from './sections/InfoBanner';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BrandCarousel />
      <ServicesIntro />
      <ServiceSection
        id="plumbing"
        icon="wrench"
        title="Servizi idraulici e termoidraulici"
        items={[
          "Riparazione perdite d'acqua e pronto intervento idraulico",
          "Disotturazione tubi di scarico con attrezzature professionali",
          "Installazione e sostituzione sanitari e rubinetteria",
          "Installazione caldaie a condensazione e scaldabagni (elettrici, a gas e metano)",
          "Manutenzione impianti idraulici e termici",
          "Montaggio box doccia, pompe press control e serbatoi",
        ]}
      />
      <ServiceSection
        id="renovation"
        icon="house"
        title="Ristrutturazioni e lavori edili"
        items={[
          "Ristrutturazione bagno completo chiavi in mano",
          "Lavori in muratura e impianti idraulici sanitari",
          "Pitturazione interni ed esterni",
          "Cartongesso e lavori di rifinitura",
          "Posa in opera di piastrelle e pavimentazioni",
        ]}
      />
      <ServiceSection
        id="windows"
        icon="window"
        title="Infissi, avvolgibili e zanzariere"
        items={[
          "Riparazione e sostituzione avvolgibili e cinghie",
          "Installazione e manutenzione infissi e serramenti",
          "Vendita e montaggio zanzariere su misura (tutti i modelli e colori)",
          "Riparazione serrande e motorizzazione serrande elettriche",
        ]}
      />
      <ServiceSection
        id="ac"
        icon="snowflake"
        title="Climatizzazione e condizionatori"
        items={[
          "Installazione climatizzatori e condizionatori certificati F-GAS",
          "Assistenza tecnica e manutenzione impianti di climatizzazione",
          "Disinfezione e Sanificazione",
          "Ricarica gas refrigerante",
          "Vendita climatizzatori inverter classe A+++ (9000, 12000, 18000, 24000 etc. BTU, dual split e multi split)",
        ]}
      />
      <CTASection />
      <InfoBanner />
      <Footer />
    </div>
  );
}

export default App;
