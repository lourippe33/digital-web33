import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { IncludedFeatures } from "@/components/IncludedFeatures";
import { LocalSEO } from "@/components/LocalSEO";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang="fr" />
        <title>Création Site Web Praticiens Bien-être Bordeaux | Digital-web33</title>
        <meta name="description" content="Boostez votre visibilité de praticien à Bordeaux. Création de sites web pro et optimisés SEO pour sophrologues, hypnothérapeutes & coachs. Devis gratuit." />
        <link rel="canonical" href="https://digital-web33.fr/" />
        <meta property="og:title" content="Digital-web33 | Création de sites web à Bordeaux" />
        <meta property="og:description" content="Sites web professionnels pour praticiens du bien-être. Modernes, rapides et optimisés. Formation pour gérer votre site incluse." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digital-web33.fr/" />
        <meta property="og:image" content="https://digital-web33.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digitalweb33" />
        <meta name="twitter:image" content="https://digital-web33.fr/og-image.png" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        
        {/* SEO Content Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital-web33 accompagne les praticiens du bien-être (sophrologues, hypnothérapeutes, énergéticiens, naturopathes, coachs…) dans la création de sites professionnels performants. Basé à Bordeaux, je conçois des sites modernes, rapides, adaptés au référencement local pour attirer des clients près de chez vous. Vous exercez ailleurs en France ? Votre site peut également être optimisé pour votre ville et votre spécialité.
              </p>
            </div>
          </div>
        </section>
        
        <Services />
        <Portfolio />
        <IncludedFeatures />
        <LocalSEO />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
