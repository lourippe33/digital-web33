export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "chatbot-site-web",
    title: "Intégrer un chatbot sur votre site web : bonne idée ?",
    excerpt:
      "Dans un monde où les utilisateurs recherchent des réponses rapides, découvrez pourquoi intégrer un chatbot WordPress peut transformer votre site en un outil performant et interactif.",
    category: "NEWS",
    image: new URL("@/assets/chatbot-wordpress.jpg", import.meta.url).href,
    date: "6 novembre 2025",
    content: `
    <article>
      <style>
        article h1{font-size:clamp(2rem,3vw+1rem,3.2rem);font-weight:800;line-height:1.2;margin:0 0 1rem}
        article h2{font-size:clamp(1.25rem,1.2vw+1rem,2rem);font-weight:800;margin:2rem 0 .75rem}
        article p{margin:0 0 1rem;max-width:75ch}
        article a{text-decoration:underline}
        article section{margin-top:1rem}
      </style>

      <header>
        <h1>Intégrer un chatbot sur votre site web est-il une bonne idée ?</h1>
      </header>

      <section>
        <p>
          Dans un monde dans lequel les utilisateurs recherchent des réponses rapides et efficaces, les chatbots sont devenus un outil incontournable pour améliorer l expérience utilisateur.
          Quand il s agit de WordPress, plateforme de choix pour les sites web, intégrer un chatbot est aussi simple que stratégique.
          Voici un guide complet qui explique pourquoi et comment utiliser un chatbot pour booster votre site web professionnel.
        </p>
      </section>

      <section>
        <h2>1. Une disponibilité 24h/24 et 7j/7</h2>
        <p>
          L un des principaux avantages d un chatbot est sa capacité à être disponible en permanence.
          Contrairement à une équipe de support humaine avec des horaires fixes, un chatbot est actif 24h/24 et 7j/7.
          Cela signifie que vos visiteurs peuvent poser des questions à tout moment et recevoir des réponses instantanées.
          Ce niveau de disponibilité améliore simultanément l expérience utilisateur et renforce votre image professionnelle.
        </p>
      </section>

      <section>
        <h2>2. Réduire la charge de travail grâce à l automatisation</h2>
        <p>
          Un chatbot peut automatiquement répondre aux questions fréquentes (horaires, tarifs, services, etc.).
          Cela permet de libérer du temps pour vous et votre équipe, qui peuvent se concentrer sur des tâches à plus forte valeur ajoutée.
          Vous offrez ainsi un support client fluide tout en optimisant vos ressources.
        </p>
      </section>

      <section>
        <h2>3. Une meilleure expérience utilisateur</h2>
        <p>
          Vous est-il déjà arrivé de chercher une information sur un site sans la trouver rapidement ? Frustrant, n est-ce pas ?
          Un chatbot élimine ce problème en guidant les visiteurs directement vers les réponses qu ils recherchent.
          Grâce à des réponses claires et personnalisées, le chatbot améliore l expérience utilisateur et réduit le taux de rebond de votre site.
        </p>
      </section>

      <section>
        <h2>4. Une solution pour booster vos conversions</h2>
        <p>
          Les chatbots ne sont pas seulement des outils de support, ils peuvent aussi agir comme de véritables leviers de vente.
          Par exemple, un chatbot peut détecter qu un visiteur hésite à acheter un produit et lui proposer une offre spéciale
          ou des informations supplémentaires pour l aider à passer à l action.
          Ce type d interaction personnalisée peut significativement augmenter vos conversions.
        </p>
      </section>

      <section>
        <h2>5. Une installation simple grâce à l'IA </h2>
        <p>
          Intégrer un chatbot sur votre site est simple.
          Il existe plusieurs options, il est possible d'utiliser différentes IA,
          qui permettent de configurer un chatbot sans compétences techniques avancées.
          Si vous ne savez pas comment installer un chatbot, consultez un guide pratique ou contactez un professionnel pour vous accompagner.
        </p>
      </section>

      <section>
        <h2>6. Une image professionnelle et moderne</h2>
        <p>
          En intégrant un chatbot à votre site, vous montrez à vos visiteurs que vous êtes à la pointe de la technologie.
          Cela renforce leur confiance dans votre marque et projette une image moderne et innovante.
          Que vous soyez une petite entreprise ou une grande structure, cet outil peut faire toute la différence.
        </p>
      </section>

      <section>
        <h2>7. Une solution économique</h2>
        <p>
          Contrairement à ce que l on pourrait penser, intégrer un chatbot n est pas réservé aux grandes entreprises.
          C est une solution abordable et rentable.
          Les coûts d installation et d utilisation d un chatbot sont largement compensés par les bénéfices en termes de satisfaction client et d augmentation des ventes.
        </p>
      </section>

      <section>
        <h2>8. Un accompagnement personnalisé</h2>
        <p>
          Grâce à l intelligence artificielle, les chatbots modernes peuvent s adapter aux besoins spécifiques de chaque utilisateur.
          Ils peuvent mémoriser les préférences, proposer des recommandations personnalisées et gérer des conversations complexes.
          Cela crée un lien fort entre votre marque et vos visiteurs.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Un chatbot est bien plus qu un simple outil : c est un atout stratégique pour améliorer l expérience utilisateur,
          réduire votre charge de travail et augmenter vos conversions.
          En plus d être simple à installer et abordable, il apporte une réelle valeur ajoutée à votre site.
        </p>
        <p>
          Alors, pourquoi attendre ? Faites le choix d un chatbot et transformez votre site en une plateforme interactive et performante,
          prête à répondre aux besoins de vos visiteurs 24h/24 et 7j/7.
        </p>
      </section>

      <footer>
        <p>
          <strong>Besoin d aide pour installer ou paramétrer votre ChatGPT&nbsp;?</strong><br>
          <a href="https://digital-web33.fr/contact" target="_blank" rel="noopener">Cliquez ici pour me contacter</a> et obtenir un accompagnement personnalisé.
        </p>
      </footer>
    </article>
    `,
  },
  {
    id: 2,
    slug: "site-professionnel-bien-etre",
    title: "Pourquoi un site professionnel bien-être attire plus de clients ?",
    excerpt:
      "Dans le domaine du bien-être, un site professionnel est un levier essentiel pour renforcer votre visibilité, inspirer confiance et attirer de nouveaux clients. Découvrez les clés d’un site efficace.",
    category: "NEWS",
    image: new URL("@/assets/site-bien-etre.jpg", import.meta.url).href,
    date: "6 novembre 2025",
    content: `
    <article>
      <style>
        article h1{font-size:clamp(2rem,3vw+1rem,3.2rem);font-weight:800;line-height:1.2;margin:0 0 1rem}
        article h2{font-size:clamp(1.25rem,1.2vw+1rem,2rem);font-weight:800;margin:2rem 0 .75rem}
        article p{margin:0 0 1rem;max-width:75ch}
        article ul{margin:0 0 1rem 1.25rem;list-style:disc}
        article li{margin-bottom:.5rem}
        article a{text-decoration:underline}
        article section{margin-top:1rem}
      </style>

      <header>
        <h1>Pourquoi un site professionnel bien-être attire plus de clients ?</h1>
      </header>

      <section>
        <p>
          Dans le secteur du bien-être, avoir un site professionnel est bien plus qu une option : c est un véritable levier pour développer votre activité. 
          Un site professionnel bien-être permet de présenter vos services, de rassurer vos clients potentiels et de refléter les valeurs essentielles de votre pratique. 
          Mais comment s assurer que votre site répond à ces attentes ? Dans cet article, nous explorons les éléments clés pour maximiser l impact de votre site et attirer davantage de clients.
        </p>
      </section>

      <section>
        <h2>1. Les atouts d un site professionnel bien-être</h2>
        <p>
          Un site professionnel bien-être ne se contente pas de présenter vos services : il crée une véritable expérience pour vos visiteurs. 
          Contrairement à un simple profil sur une plateforme en ligne, votre site est votre espace personnel, reflétant qui vous êtes et ce que vous proposez. 
          Voici quelques-uns de ses atouts majeurs :
        </p>
        <ul>
          <li><strong>Visibilité :</strong> un site bien conçu augmente vos chances d être trouvé par des clients recherchant des services comme les vôtres.</li>
          <li><strong>Crédibilité :</strong> un site professionnel inspire confiance et montre que vous prenez votre pratique au sérieux.</li>
          <li><strong>Connectivité :</strong> grâce à des formulaires, témoignages et informations claires, vous établissez un lien direct avec vos visiteurs.</li>
        </ul>
      </section>

      <section>
        <h2>2. Une navigation claire et intuitive</h2>
        <p>
          Vos visiteurs doivent pouvoir trouver rapidement ce qu ils cherchent. 
          Une navigation intuitive est cruciale pour un site professionnel bien-être. Les menus doivent être simples et les pages facilement accessibles.
        </p>
        <ul>
          <li>Organisez vos services par thématique (ex : « Gestion du stress », « Amélioration du sommeil »).</li>
          <li>Ajoutez un menu « FAQ » pour répondre aux questions fréquentes.</li>
          <li>Incluez un bouton « Contact » visible sur toutes les pages.</li>
        </ul>
        <p>
          Une navigation bien pensée aide à retenir vos visiteurs plus longtemps et augmente les chances qu ils vous contactent.
        </p>
      </section>

      <section>
        <h2>3. Des appels à l action engageants</h2>
        <p>
          Un appel à l action clair est indispensable pour encourager vos visiteurs à réserver une séance ou en savoir plus sur vos services. 
          Sur un site professionnel bien-être, ces éléments doivent être placés de façon stratégique pour maximiser l engagement.
        </p>
        <ul>
          <li>« Prenez rendez-vous dès aujourd hui pour retrouver votre sérénité. »</li>
          <li>« Demandez une consultation gratuite pour découvrir comment je peux vous aider. »</li>
          <li>« Explorez mes services et trouvez la solution adaptée à vos besoins. »</li>
        </ul>
        <p>
          Ces messages simples mais efficaces incitent vos visiteurs à passer à l action immédiatement.
        </p>
      </section>

      <section>
        <h2>4. Un contenu qui parle à vos futurs clients</h2>
        <p>
          Le contenu est au cœur de votre site. 
          Pour qu un site professionnel bien-être soit efficace, il doit répondre aux besoins de vos visiteurs tout en mettant en avant votre expertise.
        </p>
        <ul>
          <li>Une page « À propos de moi » pour partager votre parcours, vos valeurs et ce qui vous distingue.</li>
          <li>Des descriptions claires de vos services avec les bénéfices attendus.</li>
          <li>Un blog avec des articles pratiques (ex : « Comment réduire le stress au quotidien », « Les bienfaits de la relaxation guidée »).</li>
        </ul>
        <p>
          Ces contenus montrent que vous comprenez les besoins de vos clients et que vous êtes là pour les accompagner.
        </p>
      </section>

      <section>
        <h2>5. L importance du référencement local</h2>
        <p>
          Pour attirer des clients dans votre région, votre site professionnel bien-être doit être optimisé pour le référencement local. 
          Cela vous permet d apparaître dans les recherches comme « hypnothérapeute gestion du stress Bordeaux » ou « praticien bien-être Lyon ».
        </p>
        <ul>
          <li>Ajoutez votre ville et région dans vos titres, descriptions et pages.</li>
          <li>Créez un profil <a href="https://www.google.com/business/" target="_blank" rel="noopener">Google My Business</a> et demandez des avis à vos clients satisfaits.</li>
          <li>Partagez vos événements locaux ou collaborations avec d autres praticiens.</li>
        </ul>
      </section>

      <section>
        <h2>6. L expérience mobile : un atout incontournable</h2>
        <p>
          Aujourd hui, la majorité des recherches se font sur mobile. 
          Si votre site professionnel bien-être n est pas optimisé pour les smartphones et tablettes, vous risquez de perdre des clients potentiels.
        </p>
        <p>
          <strong>Astuce :</strong> assurez-vous que votre site est responsive et qu il se charge rapidement, même sur des connexions plus lentes.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Un site professionnel bien-être n est pas simplement une vitrine : c est un outil puissant pour transformer votre activité. 
          En offrant une navigation intuitive, un contenu engageant et une optimisation locale, vous augmentez vos chances d attirer et de fidéliser vos clients.
        </p>
      </section>

      <footer>
        <p>
          <strong>Envie de créer un site professionnel à votre image&nbsp;?</strong><br>
          Découvrez mes offres sur 
          <a href="https://digital-web33.fr/" target="_blank" rel="noopener">Digital-Web33</a> 
          et bénéficiez d un accompagnement personnalisé pour mettre en valeur votre activité bien-être.
        </p>
      </footer>
    </article>

  `,
  },
  {
    id: 3,
    slug: "refonte-site-internet",
    title: "Pourquoi la refonte de site est essentielle pour booster votre activité en ligne",
    excerpt:
      "Découvrez pourquoi garder votre site à jour est crucial pour votre image, votre visibilité SEO et votre croissance en ligne. La refonte web, un investissement rentable pour votre activité.",
    category: "NEWS",
    image: new URL("@/assets/refonte-site.jpg", import.meta.url).href,
    date: "6 novembre 2025",
    content: `
    <article>
      <style>
        article h1{font-size:clamp(2rem,3vw+1rem,3.2rem);font-weight:800;line-height:1.2;margin:0 0 1rem}
        article h2{font-size:clamp(1.25rem,1.2vw+1rem,2rem);font-weight:800;margin:2rem 0 .75rem}
        article p{margin:0 0 1rem;max-width:75ch}
        article a{text-decoration:underline}
        article section{margin-top:1rem}
      </style>

      <header>
        <h1>Pourquoi la refonte de site est essentielle pour booster votre activité en ligne</h1>
      </header>

      <section>
        <p>
          Un site internet est bien plus qu une simple vitrine : c est le reflet de votre entreprise, l un de vos meilleurs atouts pour attirer et fidéliser vos clients.
          Toutefois, avec les avancées technologiques, les évolutions de design et les exigences SEO (référencement naturel), un site peut rapidement devenir obsolète,
          perdant ainsi son efficacité. Dans cet article, nous allons explorer pourquoi garder son site à jour est crucial et comment une refonte peut être un choix
          judicieux et rentable pour votre activité.
        </p>
      </section>

      <section>
        <h2>1. Un site obsolète nuit à votre image et à votre crédibilité</h2>
        <p>
          L un des principaux objectifs de votre site internet est de donner confiance aux visiteurs. En voyant une interface démodée, peu ergonomique ou un site lent,
          les visiteurs peuvent immédiatement se faire une opinion négative de votre entreprise. Un design vieillot, des informations incorrectes ou un site mal optimisé
          renvoient une image peu professionnelle et peu engageante.
        </p>
        <p>
          Une refonte de site, qui consiste à mettre à jour à la fois le design et le contenu, permet de revitaliser votre site pour offrir une expérience plus attractive.
          En optant pour des tendances actuelles et un contenu pertinent, vous gagnerez en crédibilité auprès de votre audience et vous distinguerez de la concurrence.
        </p>
      </section>

      <section>
        <h2>2. S adapter aux nouvelles exigences SEO pour attirer plus de visiteurs</h2>
        <p>
          Google et les autres moteurs de recherche modifient régulièrement leurs algorithmes pour offrir aux utilisateurs les résultats les plus pertinents.
          Si votre site ne respecte pas les standards SEO actuels (comme l optimisation mobile, la vitesse de chargement et la pertinence des mots-clés), il sera difficilement visible.
          Par conséquent, moins de visiteurs le trouveront.
        </p>
        <p>
          Une refonte de site permet d intégrer les meilleures pratiques SEO, en rendant votre site plus compétitif. Par exemple, les mots-clés et le contenu peuvent être retravaillés
          pour répondre aux attentes actuelles des utilisateurs. Pour en savoir plus sur les dernières recommandations SEO, consultez ce guide proposé par
          <a href="https://support.google.com/webmasters/answer/7451184?hl=fr" target="_blank" rel="noopener">Google sur l optimisation SEO</a>.
          En ayant un site optimisé, votre entreprise bénéficiera d une meilleure visibilité dans les moteurs de recherche, ce qui signifie plus de visiteurs et potentiellement plus de clients.
        </p>
      </section>

      <section>
        <h2>3. Répondre aux attentes des utilisateurs modernes</h2>
        <p>
          Aujourd hui, les utilisateurs sont habitués à des interfaces fluides, dynamiques et adaptées à tous les types de supports (ordinateurs, tablettes, smartphones).
          Si votre site n est pas responsive (c est-à-dire capable de s adapter à tous les formats d écran), il y a de fortes chances que vos visiteurs aient une mauvaise expérience
          de navigation et quittent rapidement le site.
        </p>
        <p>
          Une refonte de site prend en compte l ergonomie mobile et permet d offrir une expérience utilisateur optimale. Avec un site responsive, vous faciliterez la navigation de vos
          visiteurs et augmenterez leurs chances de rester plus longtemps. Cela peut directement impacter votre taux de conversion, transformant les visiteurs en clients fidèles.
        </p>
      </section>

      <section>
        <h2>4. Optimiser la sécurité de votre site</h2>
        <p>
          La cybersécurité est un sujet majeur. Un site obsolète est plus vulnérable aux attaques, ce qui peut entraîner des pertes de données, des pannes de site ou une perte de confiance
          de vos clients. Lors d une refonte de site, des mises à jour de sécurité sont intégrées pour protéger vos données sensibles et celles de vos visiteurs.
        </p>
      </section>

      <section>
        <h2>5. Gagner du temps et de l argent grâce aux nouvelles technologies</h2>
        <p>
          L un des avantages financiers d une refonte est l amélioration de la gestion du site au quotidien. Avec les nouvelles technologies et les CMS modernes, la mise à jour du site devient
          plus facile et rapide. Plutôt que de consacrer du temps et des ressources pour corriger les erreurs d un site obsolète, une refonte peut simplifier vos opérations et, à long terme,
          vous faire économiser de l argent.
        </p>
      </section>

      <section>
        <h2>6. Adapter votre site aux changements de votre activité</h2>
        <p>
          Votre entreprise évolue, et il en va de même pour les attentes de votre public. Peut-être proposez-vous de nouveaux services, avez-vous changé d image ou souhaitez-vous toucher un
          public différent. Une refonte de site est l occasion parfaite de mettre à jour votre contenu, vos visuels et d intégrer des fonctionnalités qui correspondent à vos nouveaux besoins.
        </p>
      </section>

      <section>
        <h2>7. Une solution accessible grâce aux offres personnalisées</h2>
        <p>
          L idée que la refonte de site coûte cher est encore répandue, mais les options actuelles permettent des projets sur mesure qui s adaptent à divers budgets.
          Les agences et les indépendants proposent des formules variées pour répondre aux besoins spécifiques des entreprises de toutes tailles.
          Avec un bon prestataire, il est possible de trouver une solution performante et abordable, offrant un retour sur investissement appréciable.
        </p>
      </section>

      <footer>
        <p>
          <strong>Pour une refonte de site à votre image, contactez-moi&nbsp;!</strong><br>
          <a href="https://digital-web33.fr/contact" target="_blank" rel="noopener">Cliquez ici pour me joindre</a> et obtenir un devis personnalisé.
        </p>
      </footer>
    </article>
    `,
  },
  {
    id: 5,
    slug: "site-web-pas-cher",
    title: "Pourquoi opter pour un site web pas cher est une solution gagnante ?",
    excerpt:
      "Avoir un site internet professionnel n’est plus un luxe. Découvrez pourquoi un site web pas cher peut être une solution efficace, rentable et évolutive pour booster votre visibilité en ligne.",
    category: "NEWS",
    image: new URL("@/assets/site-pas-cher.jpg", import.meta.url).href,
    date: "6 novembre 2025",
    content: `
    <article>
      <style>
        article h1{font-size:clamp(2rem,3vw+1rem,3.2rem);font-weight:800;line-height:1.2;margin:0 0 1rem}
        article h2{font-size:clamp(1.25rem,1.2vw+1rem,2rem);font-weight:800;margin:2rem 0 .75rem}
        article p{margin:0 0 1rem;max-width:75ch}
        article a{text-decoration:underline}
        article section{margin-top:1rem}
      </style>

      <header>
        <h1>Pourquoi opter pour un site web pas cher est une solution gagnante ?</h1>
      </header>

      <section>
        <p>
          Dans un monde de plus en plus digital, avoir un site internet n est plus une option, mais une nécessité. 
          Que vous soyez une petite entreprise, un entrepreneur ou un professionnel indépendant, un site web est votre vitrine ouverte 24h/24 et 7j/7. 
          Pourtant, beaucoup hésitent à franchir le pas, pensant qu un site web coûte une fortune. 
          C est là que la solution d un site web pas cher entre en jeu.
        </p>
        <p>
          Créer un site web pas cher est une solution idéale pour toute entreprise, association ou particulier qui souhaite accroître sa visibilité en ligne tout en maîtrisant son budget. 
          Un site internet permet d être visible 24h/24 et d attirer de nouveaux clients, qu il s agisse de promouvoir des services, vendre des produits ou partager des informations. 
          Grâce à des offres accessibles comme celles que je propose, il est possible de bénéficier d un site professionnel sans se ruiner.
        </p>
        <p>
          Ma politique est simple : offrir des solutions adaptées à toutes les bourses, tout en garantissant la qualité. 
          Que vous ayez besoin d un site vitrine simple, d un blog ou d un site plus complet, je m engage à fournir un service correspondant à vos besoins et à vos moyens financiers. 
          Avec un site web pas cher, vous obtenez un outil puissant pour développer votre activité, à un prix abordable, sans compromettre l efficacité ni le design. 
          Mon objectif : vous permettre d entrer dans l ère digitale sans que le budget soit un frein.
        </p>
      </section>

      <section>
        <h2>1. Visibilité et crédibilité</h2>
        <p>
          Même un site web pas cher peut vous offrir la visibilité nécessaire pour attirer de nouveaux clients. 
          En étant présent sur le web, vous vous assurez de ne pas passer à côté des opportunités offertes par la recherche en ligne. 
          Avoir un site, même simple, rassure vos clients et leur montre que vous êtes un professionnel sérieux et accessible.
        </p>
      </section>

      <section>
        <h2>2. Un site adapté à vos besoins</h2>
        <p>
          Vous n avez pas besoin d un site avec des dizaines de pages ou des fonctionnalités complexes. 
          Souvent, un site vitrine avec les informations essentielles — présentation de vos services, coordonnées et une page de contact — est amplement suffisant. 
          Un site web pas cher vous permet de démarrer petit, tout en laissant la possibilité d ajouter des fonctionnalités à mesure que votre entreprise grandit.
        </p>
      </section>

      <section>
        <h2>3. Économie sans compromis sur la qualité</h2>
        <p>
          L avantage d un site web pas cher, c est qu il n est pas synonyme de mauvaise qualité. 
          De nombreux créateurs de sites web proposent des formules abordables avec un design moderne, responsive (adapté aux mobiles) et optimisé pour le référencement naturel (SEO). 
          Avec les bons outils et un professionnel compétent, vous obtenez un site esthétique, fonctionnel et performant à moindre coût.
        </p>
      </section>

      <section>
        <h2>4. Une solution flexible et évolutive</h2>
        <p>
          Commencer avec un site web pas cher vous permet de tester votre stratégie en ligne sans investissement lourd. 
          C est une solution évolutive : vous pouvez facilement ajouter des pages ou des fonctionnalités supplémentaires (blog, boutique en ligne, outil de réservation, etc.) 
          au fur et à mesure que vos besoins évoluent.
        </p>
      </section>

      <section>
        <h2>5. Un retour sur investissement rapide</h2>
        <p>
          Grâce à un site web pas cher, votre entreprise gagne rapidement en visibilité sans attendre des mois pour rentabiliser votre investissement. 
          En attirant vos premiers clients grâce à votre présence en ligne, vous amortissez rapidement les frais engagés dans la création de votre site. 
          C est un excellent point de départ pour développer votre activité à long terme.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          En résumé, choisir un site à tarif raisonnable est une option intelligente pour toute entreprise souhaitant se digitaliser sans se ruiner. 
          C est une solution abordable qui vous permet de rester compétitif tout en conservant la flexibilité nécessaire pour évoluer au rythme de votre activité. 
          Pour démarrer et prendre votre place sur le marché digital, un site web abordable est un excellent premier pas !
        </p>
      </section>

      <footer>
        <p>
          <strong>Besoin d un site professionnel à prix abordable&nbsp;?</strong><br>
          Découvrez mes offres sur 
          <a href="https://digital-web33.fr/" target="_blank" rel="noopener">Digital-Web33</a> 
          et donnez vie à votre projet en toute sérénité.
        </p>
      </footer>
    </article>
    `,
  },
];
