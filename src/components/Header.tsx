import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Logo Digital-web33 création sites web praticiens bien-être Bordeaux" 
              className="w-10 h-10"
              loading="lazy"
            />
            <span className="text-xl font-bold">Digital-web33</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("accueil")} className="text-foreground hover:text-primary transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("tarifs")} className="text-foreground hover:text-primary transition-colors">
              Tarifs
            </button>
            <button onClick={() => navigate('/blog')} className="text-foreground hover:text-primary transition-colors">
              Blog
            </button>
            <Button onClick={() => scrollToSection("contact")} size="default">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu de navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav id="mobile-nav" className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("accueil")} className="text-foreground hover:text-primary transition-colors text-left">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("tarifs")} className="text-foreground hover:text-primary transition-colors text-left">
              Tarifs
            </button>
            <button onClick={() => { navigate('/blog'); setMobileMenuOpen(false); }} className="text-foreground hover:text-primary transition-colors text-left">
              Blog
            </button>
            <Button onClick={() => scrollToSection("contact")} size="default" className="w-full">
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
