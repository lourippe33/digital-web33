import { Check } from "lucide-react";

const features = [
"Page d'accueil persuasive (pensée pour transformer les visiteurs en demandes de rendez-vous)",
"Page \"À propos\" personnalisée (valorise votre parcours et votre approche)",
"Page Services/Programmes (adaptée à vos spécialités : EFT, sophrologie, arrêt tabac, hypnose enfant, coaching…)",
"Page Contact + Google Map intégrée (facilite la prise de rendez-vous près de chez vous)",
"Mentions légales + RGPD inclus (conforme et rassurant)",
"Optimisation SEO locale + configuration Google Business (pour apparaître dans votre ville) en option",
"Site rapide, sécurisé, adapté mobile (important pour le référencement)",
"Assistant conversationnel (ChatGPT) en option",
"Mini-formation offerte (pour modifier votre site facilement)"];


export const IncludedFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Tout ce que pourrait comprendre votre site professionnel sur-mesure
          </h2>
          
          <div className="space-y-2 mb-8">
            {features.map((feature, index) =>
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300">
              
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90 leading-relaxed text-sm">{feature}</p>
              </div>
            )}
          </div>
          
          <p className="text-center text-sm italic text-muted-foreground max-w-2xl mx-auto">
            💡 Vous obtenez un site complet, prêt à l'emploi, conçu pour attirer des clients, pas seulement pour être en ligne.
          </p>
        </div>
      </div>
    </section>);

};