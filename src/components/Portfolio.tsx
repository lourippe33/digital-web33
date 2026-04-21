import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import neurofeedbackImg from "@/assets/portfolio-neurofeedback.png";
import insulaImg from "@/assets/portfolio-insula.png";
import methodesImg from "@/assets/portfolio-methodes-douces.png";
import pertePoidsImg from "@/assets/portfolio-perte-poids.png";

const projects = [
  {
    title: "Neurofeedback Stress",
    url: "https://neurofeedback-stress.fr/",
    description: "Site professionnel en neurofeedback à Tresses (Bordeaux)",
    category: "Bien-être",
    image: neurofeedbackImg,
    alt: "Site web professionnel pour praticien en neurofeedback à Tresses près de Bordeaux - Création Digital-web33",
  },
  {
    title: "Insula Hypnose",
    url: "https://insula-hypnose.fr/",
    description: "Cabinet d'hypnothérapie – Gironde et à distance",
    category: "Hypnose",
    image: insulaImg,
    alt: "Site web pour hypnothérapeute en Gironde à distance et à domicile - Création Digital-web33 Bordeaux",
  },
  {
    title: "Méthodes Douces Bordeaux",
    url: "https://www.methodes-douces-bordeaux.fr/",
    description: "Praticien en thérapies alternatives – Bordeaux",
    category: "Thérapies",
    image: methodesImg,
    alt: "Site web praticien thérapies alternatives Méthodes Douces à Bordeaux - Portfolio Digital-web33",
  },
  {
    title: "Perte de Poids Praticiens",
    url: "https://formation.programme-agp.fr/",
    description: "Accompagnement en gestion du poids – France entière",
    category: "Coaching",
    image: pertePoidsImg,
    alt: "Site web pour coach en perte de poids et accompagnement méthode AGP France entière",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ils m'ont fait confiance</h2>
          <p className="text-lg text-muted-foreground">
            Des sites professionnels qui travaillent pour leurs propriétaires
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {projects.map((project, index) => (
            <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="overflow-hidden h-full bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez travaillé avec moi ? Un avis Google aide d'autres praticiens à me trouver.
          </p>
          <a
            href="https://g.page/r/Cfjuh7QvgP-KEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Laisser un avis Google
          </a>
        </div>
      </div>
    </section>
  );
};
