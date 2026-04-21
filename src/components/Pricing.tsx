import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Site clé en main",
    price: "390€",
    features: [
      "5 pages essentielles",
      "Design sur mesure",
      "Formulaire de contact",
      "Textes adaptés à votre pratique",
      "SEO local optimisé (Google Business inclus)",
      "Optimisation des performances",
      "Achat nom de domaine inclus la première année",
      "Pas de frais cachés",
      "🤖 ChatGPT intégré pour vos réponses/FAQ",
    ],
    highlighted: false,
  },
  {
    name: "Autres demandes",
    price: "Sur devis",
    subtitle: "Tarif horaire 25€ de l'heure",
    features: [
      "Audit SEO complet",
      "Pages de programmes (perte de poids, arrêt tabac, etc.)",
      "Stratégie de contenu",
      "Optimisation avancée",
      "Suivi des performances",
      "Analytics détaillés",
      "Support prioritaire",
      "Évolutions sur mesure",
      "Conseil stratégique",
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tarifs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tarifs transparents</h2>
          <p className="text-lg text-muted-foreground">Des formules claires, sans frais cachés</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative flex flex-col ${
                plan.highlighted
                  ? "border-2 border-primary shadow-[var(--shadow-strong)] scale-105"
                  : "border border-border"
              } bg-card transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  {plan.name === "Site clé en main" ? (
                    <>Site clé en main<br />à partir de </>
                  ) : plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
                {plan.subtitle && <p className="text-sm text-muted-foreground">{plan.subtitle}</p>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToContact} className="w-full mt-auto" variant={plan.highlighted ? "default" : "outline"}>
                Démarrer mon site professionnel
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            💡 Plus rapide et plus moderne que WordPress - Livraison en quelques jours
          </p>
        </div>
      </div>
    </section>
  );
};
