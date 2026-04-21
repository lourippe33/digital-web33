import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p>
              Ce site est édité par Eric GATA, micro-entrepreneur spécialisé dans la création de sites web professionnels pour praticiens du bien-être.
            </p>
            <ul className="list-none space-y-2">
              <li><strong>SIREN :</strong> 813 904 729</li>
              <li><strong>Adresse professionnelle :</strong> 9 Galerie Marchande, 33370 Tresses – France</li>
              <li><strong>Email :</strong> eric.gata@gmail.com</li>
              <li><strong>Téléphone :</strong> 07 82 38 66 21</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Responsable de la publication</h2>
            <p>Eric GATA</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Hébergement du site</h2>
            <p>
              Le site est hébergé par Lovable, société éditrice d'hébergement web.
            </p>
            <p>
              <strong>Adresse :</strong> Lovable.dev – États-Unis (hébergement sécurisé + CDN).
            </p>
            <p>
              Les informations personnelles collectées sont hébergées de manière sécurisée et conformément au RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p>
              Les contenus présents sur ce site (textes, images, logo, design, pages) sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation écrite est interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prestations de services</h2>
            <p>
              Digital-web33 propose des prestations de création de sites web professionnels, optimisation SEO locale, assistance technique et intégration d'IA. Ces services ne constituent en aucun cas une activité médicale, thérapeutique ou d'accompagnement de santé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changement d'adresse</h2>
            <p>
              En cas de modification d'adresse professionnelle, les présentes mentions légales seront mises à jour sans préavis.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
