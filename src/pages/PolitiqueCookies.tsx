import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Politique de cookies</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. Il permet de mémoriser des informations sur votre navigation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Les cookies utilisés sur ce site</h2>
            <p>
              Digital-web33 utilise uniquement des <strong>cookies techniques</strong> indispensables au bon fonctionnement du site. Ces cookies ne nécessitent pas de consentement préalable selon la réglementation en vigueur.
            </p>
            <p>Ils permettent notamment :</p>
            <ul>
              <li>Le maintien de votre session de navigation</li>
              <li>La sécurisation de la connexion</li>
              <li>L'amélioration des performances du site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ce que nous ne faisons pas</h2>
            <p>Ce site ne dépose pas :</p>
            <ul>
              <li>De cookies publicitaires</li>
              <li>De cookies de tracking externes (Google Analytics, Facebook Pixel, etc.)</li>
              <li>De cookies liés aux réseaux sociaux</li>
            </ul>
            <p>
              Vos données de navigation ne sont ni collectées, ni transmises à des tiers, ni utilisées à des fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gestion des cookies</h2>
            <p>
              Vous pouvez à tout moment paramétrer votre navigateur pour refuser les cookies. Cependant, cela pourrait affecter certaines fonctionnalités du site.
            </p>
            <p>Pour gérer vos préférences :</p>
            <ul>
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Pour toute question relative aux cookies ou à la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante :
            </p>
            <p>📩 eric.gata@gmail.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueCookies;
