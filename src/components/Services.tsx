import { Card } from "@/components/ui/card";
import { Zap, Shield, TrendingUp } from "lucide-react";
const services = [
  {
    icon: Zap,
    title: "Site clé en main",
    description: "Un site professionnel, moderne et ultra-rapide pour praticiens à Bordeaux et en France, sans passer par WordPress.",
    details: [
      "Livré en quelques jours seulement",
      "Technologie légère et stable",
      "Adapté à tous les écrans",
      "Navigation fluide et claire",
    ],
  },
  {
    icon: Shield,
    title: "Pas de frais cachés",
    description: "Je prends en charge votre nom de domaine la première année",
    details: [
      "Hébergement sécurisé",
      "Maintenance technique",
      "Référencement local optimisé (Gironde)",
      "Le site vous appartient",
      "SEO adapté à votre ville",
    ],
  },
  {
    icon: TrendingUp,
    title: "Accompagnement continu",
    description: "Je m'occupe de tout : mises à jour, sécurité, SEO local et évolutions, où que vous soyez.",
    details: [
      "Mises à jour régulières",
      "Sécurité renforcée",
      "Ajustements de contenu",
      "Suivi des performances",
      "Support praticiens France entière",
    ],
  },
];
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Création de sites web pour praticiens à Bordeaux et en Gironde</h2>
          <p className="text-lg text-muted-foreground">
            Idéal pour les praticiens, coachs, thérapeutes et indépendants qui veulent une présence en ligne
            professionnelle, sans se noyer dans la technique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
