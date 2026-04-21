import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { findLocalPage, cityPages, specialtyPages, CityPage, SpecialtyPage } from "@/data/localPages";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const services = [
  "Site vitrine professionnel clé en main",
  "Application web & PWA sur mesure",
  "Référencement local Google (SEO)",
  "Fiche Google Business Profile",
  "Intégration prise de rendez-vous",
  "Maintenance & mises à jour incluses",
  "Formation pour gérer votre site",
  "Support réactif par téléphone & email",
];

function CityContent({ page }: { page: CityPage }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Création site web à ${page.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digital-web33",
      "url": "https://digital-web33.fr",
      "telephone": "+33782386621",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Galerie Marchande",
        "addressLocality": "Tresses",
        "postalCode": "33370",
        "addressCountry": "FR",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": page.name,
      "postalCode": page.postalCode,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": page.lat,
        "longitude": page.lng,
      },
    },
    "description": page.metaDescription,
  };

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://digital-web33.fr/creation-site-web/${page.slug}`} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={`https://digital-web33.fr/creation-site-web/${page.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span>Création site web {page.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Création de site web professionnel à {page.name}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {page.intro}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            {page.context}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/#contact">
                Demander un devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+33782386621">
                <Phone className="mr-2 w-4 h-4" /> 07 82 38 66 21
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Ce que comprend votre site web à {page.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Pourquoi choisir Digital-web33 à {page.name} ?
          </h2>
          <div className="prose max-w-none text-muted-foreground space-y-4">
            <p>
              Digital-web33, c'est Éric Gata, freelance spécialisé dans la création de sites web et d'applications web (PWA) pour les praticiens du bien-être et les professionnels libéraux de Bordeaux et de Gironde. Basé à Tresses (33370), j'interviens à {page.name} et dans toute la métropole bordelaise.
            </p>
            <p>
              Contrairement aux grandes agences, vous avez un interlocuteur unique du début à la fin : conception, développement, référencement, formation et suivi. Pas de délégation à un sous-traitant, pas de surprise sur la facture. Un site livré en quelques jours, optimisé pour Google, et que vous pouvez gérer vous-même.
            </p>
            <p>
              Chaque site est unique, conçu sur mesure pour votre activité et votre secteur géographique à {page.name} (code postal {page.postalCode}). Le référencement local est intégré dès la conception, pas ajouté après coup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Je crée des sites web pour tous les praticiens de {page.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {["Sophrologue", "Hypnothérapeute", "Naturopathe", "Coach bien-être", "Énergéticien", "Ostéopathe", "Psychologue", "Diététicien"].map((specialty) => (
              <div key={specialty} className="text-center p-3 rounded-lg border bg-card text-sm font-medium">
                {specialty}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Vous exercez une autre spécialité ? Contactez-moi, je m'adapte à tous les secteurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/#contact">
                  Démarrer mon projet <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@digital-web33.fr">
                  <Mail className="mr-2 w-4 h-4" /> contact@digital-web33.fr
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-center">Zones d'intervention proches de {page.name}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {cityPages
              .filter((c) => c.slug !== page.slug)
              .slice(0, 10)
              .map((city) => (
                <Link
                  key={city.slug}
                  to={`/creation-site-web/${city.slug}`}
                  className="px-3 py-1 rounded-full border text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {city.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SpecialtyContent({ page }: { page: SpecialtyPage }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Création site web pour ${page.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digital-web33",
      "url": "https://digital-web33.fr",
      "telephone": "+33782386621",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Galerie Marchande",
        "addressLocality": "Tresses",
        "postalCode": "33370",
        "addressCountry": "FR",
      },
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Gironde",
    },
    "description": page.metaDescription,
  };

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://digital-web33.fr/creation-site-web/${page.slug}`} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={`https://digital-web33.fr/creation-site-web/${page.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span>Création site web {page.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Création de site web pour {page.name}<br />
            <span className="text-primary">Bordeaux & Gironde</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {page.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/#contact">
                Demander un devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+33782386621">
                <Phone className="mr-2 w-4 h-4" /> 07 82 38 66 21
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Ce dont votre site web de {page.name} a besoin
          </h2>
          <div className="space-y-4">
            {page.specificNeeds.map((need) => (
              <div key={need} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{need}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Ce que comprend votre site
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Villes d'intervention pour les {page.name}s
          </h2>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {page.cities.map((city) => {
              const cityPage = cityPages.find((c) => c.name === city);
              return cityPage ? (
                <Link
                  key={city}
                  to={`/creation-site-web/${cityPage.slug}`}
                  className="px-4 py-2 rounded-full border font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {city}
                </Link>
              ) : (
                <span key={city} className="px-4 py-2 rounded-full border font-medium text-sm">{city}</span>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Vous êtes {page.name.toLowerCase()} dans une autre ville de Gironde ou en France ? J'interviens partout en télétravail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/#contact">
                  Démarrer mon projet <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@digital-web33.fr">
                  <Mail className="mr-2 w-4 h-4" /> contact@digital-web33.fr
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-center">Autres spécialités</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {specialtyPages
              .filter((s) => s.slug !== page.slug)
              .map((specialty) => (
                <Link
                  key={specialty.slug}
                  to={`/creation-site-web/${specialty.slug}`}
                  className="px-3 py-1 rounded-full border text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {specialty.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

const LocalSEOPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const page = slug ? findLocalPage(slug) : undefined;

  useEffect(() => {
    if (!page) navigate("/404", { replace: true });
  }, [page, navigate]);

  if (!page) return null;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {page.type === "city" ? (
          <CityContent page={page} />
        ) : (
          <SpecialtyContent page={page} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LocalSEOPage;
