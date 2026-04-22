import { Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cityPages, specialtyPages } from "@/data/localPages";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Remove any existing LocalBusiness script to avoid duplicates
    const existingScript = document.querySelector('script[data-schema="local-business"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'local-business');
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Digital-web33",
      "image": "https://digital-web33.fr/logo.png",
      "@id": "https://digital-web33.fr",
      "url": "https://digital-web33.fr",
      "telephone": "+33782386621",
      "email": "contact@digital-web33.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Galerie Marchande",
        "addressLocality": "Tresses",
        "addressRegion": "Gironde",
        "postalCode": "33370",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 44.8217,
        "longitude": -0.4892
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:30",
        "closes": "17:30"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61568067626665",
        "https://www.instagram.com/digital.web33/",
        "https://www.linkedin.com/in/%C3%A9ric-gata-225786336/"
      ],
      "priceRange": "€",
      "description": "Création de sites web professionnels pour praticiens du bien-être à Bordeaux et en Gironde. Sophrologues, hypnothérapeutes, naturopathes, coachs. Sites clé en main à partir de 390€, livrés en 14 jours.",
      "areaServed": [
        { "@type": "City", "name": "Bordeaux" },
        { "@type": "City", "name": "Mérignac" },
        { "@type": "City", "name": "Pessac" },
        { "@type": "City", "name": "Talence" },
        { "@type": "City", "name": "Tresses" },
        { "@type": "City", "name": "Bègles" },
        { "@type": "City", "name": "Gradignan" },
        { "@type": "City", "name": "Villenave-d'Ornon" },
        { "@type": "AdministrativeArea", "name": "Gironde" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Création de sites web pour praticiens bien-être",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Site web clé en main 5 pages" },
            "price": "390",
            "priceCurrency": "EUR"
          }
        ]
      },
      "knowsAbout": ["Sophrologie", "Hypnothérapie", "Naturopathie", "Coaching bien-être", "SEO local", "Création de site web"]
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8" />
              <span className="text-xl font-bold">Digital-web33</span>
            </div>
            <p className="text-background/80 mb-4">
              Création de sites web professionnels pour praticiens du bien-être à Bordeaux et en Gironde.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61568067626665"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/digital.web33/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/%C3%A9ric-gata-225786336/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-background transition-colors"
                >
                  Site clé en main
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-background transition-colors"
                >
                  Pas de frais caché
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-background transition-colors"
                >
                  Optimisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-background transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="mailto:contact@digital-web33.fr" className="hover:text-background transition-colors">
                  contact@digital-web33.fr
                </a>
              </li>
              <li>
                <a href="tel:+33782386621" className="hover:text-background transition-colors">
                  07 82 38 66 21
                </a>
              </li>
              <li className="pt-2">
                <address className="text-sm not-italic">
                  9 Galerie Marchande<br />
                  33370 Tresses (Gironde)<br />
                  France
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Zones d'intervention — liens SEO invisibles visuellement, indexés par Google */}
        <nav aria-label="Zones d'intervention" className="sr-only">
          <ul>
            {specialtyPages.map((p) => (
              <li key={p.slug}><Link to={`/creation-site-web/${p.slug}`}>{p.name}</Link></li>
            ))}
            {cityPages.map((p) => (
              <li key={p.slug}><Link to={`/creation-site-web/${p.slug}`}>Création site web {p.name}</Link></li>
            ))}
          </ul>
        </nav>



        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 – Digital-web33 / Eric GATA — Tous droits réservés</p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="hover:text-background transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-background transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/politique-cookies" className="hover:text-background transition-colors">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
