import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import neurofeedbackImg from "@/assets/site-web-neurofeedback-bordeaux.webp";
import insulaImg from "@/assets/site-web-hypnotherapeute-gironde.webp";
import methodesImg from "@/assets/site-web-therapies-alternatives-bordeaux.webp";
import pertePoidsImg from "@/assets/site-web-programme-gestion-poids.webp";
import sophroImg from "@/assets/site-web-sophrologue-bordeaux.webp";
import hypnoImg from "@/assets/site-web-hypnotherapeute-merignac.webp";
import naturoImg from "@/assets/site-web-naturopathe-pessac.webp";
import coachImg from "@/assets/site-web-coach-bienetre-talence.webp";
import ariaImg from "@/assets/site-web-bienetre-premium-bordeaux.webp";

const projects = [
  { url: "https://neurofeedback-stress.fr/", category: "Bien-être", image: neurofeedbackImg, alt: "Site web praticien neurofeedback Tresses Bordeaux - Digital-web33" },
  { url: "https://sophrobordeaux.lovable.app", category: "Sophrologie", image: sophroImg, alt: "Site web sophrologue Bordeaux - Digital-web33" },
  { url: "https://insula-hypnose.fr/", category: "Hypnose", image: insulaImg, alt: "Site web hypnothérapeute Gironde - Digital-web33" },
  { url: "https://hypnosebordeaux.lovable.app", category: "Hypnose", image: hypnoImg, alt: "Site web hypnothérapeute Mérignac - Digital-web33" },
  { url: "https://sophie-laurent-naturopathe.lovable.app", category: "Naturopathie", image: naturoImg, alt: "Site web naturopathe Pessac - Digital-web33" },
  { url: "https://www.methodes-douces-bordeaux.fr/", category: "Thérapies", image: methodesImg, alt: "Site web thérapies alternatives Bordeaux - Digital-web33" },
  { url: "https://coachtalence.lovable.app", category: "Coaching", image: coachImg, alt: "Site web coach bien-être Talence - Digital-web33" },
  { url: "https://formation.programme-agp.fr/", category: "Coaching", image: pertePoidsImg, alt: "Site web programme gestion du poids - Digital-web33" },
  { url: "https://ariabien-etre.lovable.app", category: "Premium", image: ariaImg, alt: "Site web premium coaching Bordeaux - Digital-web33" },
];

const Tile = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative block aspect-square overflow-hidden bg-[#141414] cursor-pointer group"
      aria-label={`Voir le site : ${project.alt}`}
    >
      {/* Screenshot */}
      <img
        src={project.image}
        alt={project.alt}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />

      {/* Cover that slides up on hover */}
      <div
        className="absolute inset-0 bg-[#0d0d0d] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
        style={{ transform: hovered ? "translateY(-100%)" : "translateY(0)" }}
      >
        <span className="text-white/15 text-6xl font-bold leading-none select-none">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <span className="text-white/30 text-xs uppercase tracking-widest mt-3">
          {project.category}
        </span>
      </div>

      {/* CTA overlay on top of image when hovered */}
      <div
        className="absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <span className="flex items-center gap-2 text-white text-sm font-medium">
          Voir le site
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
};

export const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-[#0d0d0d]">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-8">
        <div>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-none">
            Ce que je crée<br />
            <span className="text-white/20">pour vous</span>
          </h2>
        </div>
        <p className="text-white/20 text-sm hidden md:block">
          Passez la souris pour découvrir
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
        {projects.map((project, index) => (
          <Tile key={index} project={project} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-white/20 mb-4 text-sm">
          Vous avez travaillé avec moi ? Un avis Google aide d'autres praticiens à me trouver.
        </p>
        <a
          href="https://g.page/r/Cfjuh7QvgP-KEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/50 hover:border-white/50 hover:text-white transition-all duration-300 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          Laisser un avis Google
        </a>
      </div>
    </div>
  </section>
);
