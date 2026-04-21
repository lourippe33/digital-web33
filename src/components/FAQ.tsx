import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const faqData = [
  {
    question: "Combien coûte la création d'un site professionnel ?",
    answer: "Le tarif de base est de 390 € pour un site complet clé en main. Cela inclut toutes les pages essentielles, l'optimisation pour Google, le chatbot intelligent et une formation pour gérer votre site vous-même. Pas de frais cachés, pas d'abonnement obligatoire."
  },
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer: "Votre site est livré en quelques jours seulement. Une fois que vous m'avez transmis vos informations (textes, photos, services), je m'occupe de tout et vous livrez un site prêt à fonctionner rapidement."
  },
  {
    question: "Est-ce que je pourrai modifier mon site moi-même ?",
    answer: "Oui, absolument. Une micro-formation gratuite est incluse pour vous apprendre à faire vos propres modifications simples (textes, images, tarifs). Vous gardez le contrôle total de votre site."
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer: "Oui, chaque site est optimisé pour le référencement local. Je configure votre présence Google Business, j'optimise vos pages pour votre ville et votre spécialité afin que les clients proches de chez vous vous trouvent facilement."
  },
  {
    question: "Que se passe-t-il si j'ai besoin d'aide après la livraison ?",
    answer: "Je reste disponible pour vous accompagner. Si vous avez besoin de modifications, d'ajouts de pages ou de support technique, je facture 25 €/h. Pas d'engagement, vous payez uniquement ce dont vous avez besoin."
  },
  {
    question: "Est-ce que le site fonctionnera sur mobile et tablette ?",
    answer: "Oui, tous les sites sont parfaitement adaptés aux mobiles, tablettes et ordinateurs. C'est essentiel aujourd'hui puisque la majorité de vos clients consultent votre site depuis leur téléphone."
  }
];

export const FAQ = () => {
  useEffect(() => {
    // Remove any existing FAQ script to avoid duplicates
    const existingScript = document.querySelector('script[data-schema="faq-page"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'faq-page');
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir avant de démarrer votre projet
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
