import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.webp";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Email invalide").max(255, "L'email ne peut pas dépasser 255 caractères"),
  phone: z.string().max(20, "Le téléphone ne peut pas dépasser 20 caractères").optional(),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "Le message ne peut pas dépasser 2000 caractères"),
  website: z.string().max(0, "Veuillez ne pas remplir ce champ"), // Honeypot
});
export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // Honeypot field
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validation Zod côté client
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      
      toast({
        title: "Erreur de validation",
        description: "Merci de remplir tous les champs correctement.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Nouveau message de ${formData.name} — Digital-web33`,
          botcheck: formData.website,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ name: "", email: "", phone: "", message: "", website: "" });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        toast({
          title: "Erreur",
          description: "Impossible d'envoyer le message. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Parlons de votre projet</h2>
          <p className="text-lg text-muted-foreground">Prenez contact pour discuter de vos besoins</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-[var(--shadow-medium)]">
            {isSubmitted ? (
              <div className="animate-fade-in text-center py-12">
                <div className="mb-6 text-6xl">✅</div>
                <h3 className="text-2xl font-bold mb-4">Message envoyé avec succès !</h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Votre message a bien été envoyé 👍
                </p>
                <p className="text-muted-foreground">
                  Je vous réponds sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot invisible */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet..."
                    rows={5}
                    required
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer le message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localisation</h4>
                    <p className="text-muted-foreground">Bordeaux, Gironde (33)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@digital-web33.fr" className="text-primary hover:underline">
                      contact@digital-web33.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a href="tel:+33782386621" className="text-primary hover:underline">
                      07 82 38 66 21
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage 
                    src={profilePhoto} 
                    alt="Éric Gata, créateur de sites web pour praticiens bien-être à Bordeaux"
                    loading="lazy"
                  />
                </Avatar>
                <h4 className="font-bold">Pourquoi me choisir ?</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Spécialiste des praticiens bien-être</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Livraison rapide en quelques jours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Formation pour maintenir le site à jour inclus            </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Technologie moderne et performante</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-primary/10">
                Je crée des sites professionnels pour praticiens du bien-être à Bordeaux, en Gironde (Tresses, Mérignac…) et en France entière en téléservice.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
