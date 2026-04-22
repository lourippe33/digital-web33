import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";

const SPECIALTIES = [
  "sophrologues",
  "hypnothérapeutes",
  "naturopathes",
  "coachs",
  "énergéticiens",
  "praticiens EFT",
  "thérapeutes",
];

const useTypewriter = (words: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const word = words[wordIndex];
    if (phase === "typing") {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pauseMs);
        return () => clearTimeout(t);
      }
    }
    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
};

export const Hero = () => {
  const specialty = useTypewriter(SPECIALTIES);

  useEffect(() => {
    const img = document.querySelector('meta[property="og:image"]');
    if (!img) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.setAttribute('content', heroImage);
      document.head.appendChild(meta);
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToPricing = () => {
    const element = document.getElementById("tarifs");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Gradient overlay from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in" style={{
          textShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
            Sites web professionnels<br />
            <span className="text-primary">pour{" "}
              <span className="inline-block min-w-[2ch]">{specialty}</span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed" style={{
          textShadow: '0 3px 8px rgba(0, 0, 0, 0.35), 0 1px 3px rgba(0, 0, 0, 0.25)'
        }}>
            Création de sites professionnels pour praticiens du bien-être, conçus pour vous aider à développer votre visibilité et attirer plus de clients près de chez vous.
            <br /><br />
            Sites adaptés aux hypnothérapeutes, sophrologues, naturopathes, coachs, énergéticiens et thérapeutes en cabinet ou à distance.
            <br /><br />
            Chaque site est optimisé pour le référencement local (Google Business) et intègre des outils de contact simples pour augmenter vos demandes de rendez-vous.
        </p>

          <div className="flex flex-col gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={scrollToPricing} className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl text-lg px-8 py-6 font-semibold transition-all hover:scale-105">
              Découvrir mon offre
            </Button>
            
            <button onClick={scrollToContact} className="text-white/95 hover:text-white text-base font-medium underline underline-offset-4 transition-colors" style={{
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.18)'
          }}>
              Prendre rendez-vous
            </button>
          </div>

          {/* Bonus Badges */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3">
              <p className="text-white font-medium">🎁 Micro-formation offerte pour gérer votre site</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3">
              <p className="text-white font-medium">✨ Assistant intelligent 24h/24 pour guider vos clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>;
};