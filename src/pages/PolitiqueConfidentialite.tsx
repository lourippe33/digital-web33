import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Responsable du traitement</h2>
            <p>
              Les données personnelles collectées via ce site sont traitées par Eric GATA, micro-entrepreneur, domicilié à Tresses (33).
            </p>
            <p><strong>Contact :</strong> eric.gata@gmail.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
            <p>Le site peut collecter les informations suivantes :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Message transmis via le formulaire de contact</li>
            </ul>
            <p>Aucune donnée de santé ni sensible n'est collectée.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Finalité du traitement</h2>
            <p>Les données sont collectées uniquement pour :</p>
            <ul>
              <li>répondre aux demandes de contact,</li>
              <li>établir un devis,</li>
              <li>assurer le suivi des prestations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Base légale</h2>
            <p>Le traitement est basé sur le consentement (RGPD, art. 6-1.a).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Durée de conservation</h2>
            <p>
              Les données sont conservées pendant 3 ans maximum, sauf si vous demandez leur suppression avant cette période.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Destinataires</h2>
            <p>Les données ne sont transmises :</p>
            <ul>
              <li>ni à des tiers commerciaux,</li>
              <li>ni à des partenaires,</li>
              <li>ni revendues.</li>
            </ul>
            <p>
              Elles peuvent être hébergées par Lovable dans l'Union Européenne ou en zone conforme RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Droits de l'utilisateur</h2>
            <p>Conformément au RGPD, vous pouvez :</p>
            <ul>
              <li>demander l'accès à vos données,</li>
              <li>leur rectification,</li>
              <li>leur suppression,</li>
              <li>leur portabilité,</li>
              <li>vous opposer à leur traitement.</li>
            </ul>
            <p>
              <strong>Pour exercer vos droits :</strong><br />
              📩 eric.gata@gmail.com
            </p>
            <p>Une réponse sera apportée sous 30 jours maximum.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement (connexion, sécurité, performance).
            </p>
            <p>Aucun cookie publicitaire ni de tracking externe n'est utilisé.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
