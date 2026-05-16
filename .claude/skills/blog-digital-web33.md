---
name: blog-digital-web33
description: Génère des articles de blog complets et optimisés SEO pour Digital-Web33 (Eric Gata), incluant recherche web des tendances actuelles, rédaction article HTML, meta données SEO, prompt visuel et appel API fal.ai pour génération de l'image. Utilise cette skill DÈS QUE Eric demande à "créer un article", "générer un article de blog", "nouvel article", "proposer des sujets d'articles", "article pour digital-web33", ou mentionne le blog de son site Digital-Web33. La skill évite automatiquement la duplication avec les articles existants et produit un objet BlogPost prêt à injecter dans blogPosts.ts.
---

# Blog Digital-Web33 — Générateur d'articles SEO

## Contexte du site

- **URL** : https://digital-web33.fr/blog
- **Stack** : React + Vite, Netlify
- **Audience cible** : praticiens bien-être (sophrologues, hypnothérapeutes, naturopathes, kinés, ostéos, psychologues, coachs...) — pas uniquement Gironde/Bordeaux
- **Objectif** : générer du trafic SEO + crédibilité + leads pour Digital-Web33

## Articles existants (éviter la duplication)

| ID | Slug | Catégorie |
|----|------|-----------|
| 1 | referencement-local-praticien-bien-etre-bordeaux | SEO LOCAL |
| 2 | site-web-sophrologue-hypnotherapeute-bordeaux | SITE WEB |
| 3 | google-business-praticien-bien-etre-gironde | GOOGLE |
| 4 | doctolib-vs-site-web-praticien-bien-etre | STRATÉGIE |
| 5 | combien-coute-site-web-praticien-bien-etre-2026 | TARIFS |
| 6 | seo-combien-de-temps-avant-clients-praticien-bien-etre | SEO LOCAL |

**Prochain ID disponible** : 7

---

## Interface BlogPost (blogPosts.ts)

```typescript
{
  id: number,
  slug: string,           // URL /blog/{slug}
  title: string,          // Titre H1 optimisé SEO
  excerpt: string,        // Résumé 2-3 phrases pour liste blog
  category: string,       // Ex: SEO LOCAL, SITE WEB, GOOGLE, STRATÉGIE, TARIFS, IA, RÉSEAUX SOCIAUX
  image: string,          // new URL("@/assets/blog-{slug}.webp", import.meta.url).href
  date: string,           // Ex: "16 mai 2026"
  content: string         // HTML complet de l'article
}
```

---

## Pipeline complet

### Étape 1 — Recherche web + proposition de sujets

1. Lire `src/data/blogPosts.ts` pour connaître les articles déjà publiés (liste ci-dessus peut être incomplète)
2. Rechercher les tendances actuelles sur le web : `praticiens bien-être site web 2026`, `SEO thérapeute`, `digitalisation cabinet bien-être`, etc.
3. Identifier 5 sujets pertinents **non couverts** par les articles existants
4. Pour chaque sujet proposé, fournir :
   - Titre SEO optimisé (60 caractères max)
   - Catégorie suggérée
   - Mot-clé principal
   - Volume estimé / pertinence
   - Angle différenciateur
5. **Attendre la validation d'Eric** avant de rédiger

### Étape 2 — Rédaction de l'article

Une fois le sujet validé, rédiger l'article complet en visant **2000 à 3000 mots**.

---

## Standards de qualité — Niveau de référence

Chaque nouvel article doit atteindre le niveau de l'article `seo-combien-de-temps-avant-clients-praticien-bien-etre` sur les points suivants :

### Structure obligatoire

```
- Intro percutante (150-200 mots) : chiffre ou fait marquant + problème + promesse
- H2 sections (6-8 minimum)
  - Chaque H2 peut contenir des H3
  - Listes à puces pour lisibilité
  - Tableaux comparatifs quand pertinent
  - 2 CTA minimum par article
- Scénario illustratif concret (fictif mais réaliste, ancré localement, clairement annoncé comme fictif)
- FAQ complète (5-8 questions/réponses longues, format SEO)
- Conclusion avec CTA fort vers /contact
- Longueur totale : 2000-3000 mots
```

### Éléments obligatoires dans chaque article

1. **Chiffres sourcés** : citer des études réelles (Ahrefs, Search Engine Journal, Google, INSEE...) pour crédibiliser. Exemple : "61 % des pages web n'ont aucun trafic organique après 12 mois (Ahrefs, 2025)"

2. **Tableaux comparatifs** : dès qu'on compare des options, des délais, des prix, des outils — utiliser un tableau HTML :
```html
<table>
  <thead><tr><th>Critère</th><th>Option A</th><th>Option B</th></tr></thead>
  <tbody>
    <tr><td>...</td><td>...</td><td>...</td></tr>
  </tbody>
</table>
```

3. **Ancrage local Gironde précis** : citer des villes réelles avec des données contextuelles (Tresses, Créon, Libourne, Arcachon, Mérignac, Pessac, Talence, Bordeaux par quartier...). Ne pas se contenter de "Bordeaux" générique.

4. **Scénario illustratif** : un exemple fictif mais réaliste d'un praticien dans une ville girondine, avec des jalons concrets mois par mois. Toujours préciser clairement que c'est un scénario fictif représentatif — jamais présenter comme un vrai client.

5. **FAQ longue** : minimum 5 questions, avec des réponses de 80-150 mots chacune. Les questions doivent correspondre à de vraies requêtes Google longue traîne.

6. **Liens internes** : référencer les autres articles du blog quand c'est pertinent.

### Tonalité

- Expert terrain, pas agence générique
- Honnête sur les délais et les limites (ne pas survendre)
- Concret et chiffré, pas de vague
- Bienveillant envers les praticiens (ils ne sont pas des experts du web)
- Direct, zéro blabla

---

## Format HTML du champ `content`

Le contenu doit utiliser exactement le même format que les articles existants dans blogPosts.ts :
- Pas de balise `<article>` englobante
- Pas de `<div class="cta-box">` (non stylé dans le projet)
- Commencer directement par un `<p>` d'introduction
- CTA intégrés comme paragraphes `<p>` simples avec lien `<a>`

```html
<p>Introduction percutante...</p>

<h2>Titre section 1</h2>
<p>...</p>
<ul>
  <li><strong>Point clé :</strong> explication...</li>
</ul>

<h2>Titre section 2 avec tableau</h2>
<table>
  <thead>
    <tr><th>Colonne 1</th><th>Colonne 2</th><th>Colonne 3</th></tr>
  </thead>
  <tbody>
    <tr><td>Valeur</td><td>Valeur</td><td>Valeur</td></tr>
  </tbody>
</table>

<h2>Scénario illustratif : [contexte fictif]</h2>
<p><em>Pour illustrer concrètement, voici un scénario fictif représentatif de ce qu'on observe...</em></p>

<h2>FAQ — [Sujet de l'article]</h2>

<p><strong>Question 1 ?</strong><br>
Réponse longue et détaillée...</p>

<p><strong>Question 2 ?</strong><br>
Réponse longue et détaillée...</p>

<p>Pour aller plus loin : <a href="/blog/article-lie">titre article lié</a> et <a href="/blog/autre-article">autre article</a>.</p>

<p><a href="/contact">Contactez Digital-web33</a> pour [bénéfice concret].</p>
```

---

## Étape 3 — Génération de l'image via fal.ai

**Clé API fal.ai** : `dd5a2326-3ba7-4c6e-9de1-f19180287a14:a4b1c82587cc5bdbdfc544c510a2c267`

**Modèle** : `fal-ai/flux/schnell`

**Style visuel Digital-Web33 :**
- Illustration flat/minimaliste professionnelle
- Couleurs dominantes : violet/indigo + blanc + gris clair
- Pas de texte dans l'image
- Sujet en lien avec l'article
- Format : `landscape_16_9` (1024×576px)

**Appel API PowerShell :**
```powershell
$apiKey = "dd5a2326-3ba7-4c6e-9de1-f19180287a14:a4b1c82587cc5bdbdfc544c510a2c267"
$headers = @{ "Authorization" = "Key $apiKey"; "Content-Type" = "application/json" }
$body = @{
  prompt = "[PROMPT VISUEL ICI]"
  image_size = "landscape_16_9"
  num_inference_steps = 4
  num_images = 1
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://fal.run/fal-ai/flux/schnell" -Method POST -Headers $headers -Body $body
$imgUrl = $response.images[0].url
```

**Conversion JPEG → WebP via FFmpeg :**
```powershell
$ffmpeg = "C:\Users\louri\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"
Invoke-WebRequest -Uri $imgUrl -OutFile "src\assets\blog-{slug}.jpg"
& $ffmpeg -y -i "src\assets\blog-{slug}.jpg" -c:v libwebp -quality 85 "src\assets\blog-{slug}.webp"
Remove-Item "src\assets\blog-{slug}.jpg"
```

---

## Étape 4 — Injection dans blogPosts.ts

1. Ajouter le nouvel objet BlogPost **à la fin du tableau** dans `src/data/blogPosts.ts` (avant le `];` final)
2. Vérifier avec `npx tsc --noEmit` qu'il n'y a aucune erreur TypeScript

**Bloc à injecter :**
```typescript
  {
    id: 7,
    slug: "slug-de-l-article",
    title: "Titre SEO de l'article",
    excerpt: "Résumé 2-3 phrases pour l'aperçu sur la liste blog.",
    category: "CATÉGORIE",
    image: new URL("@/assets/blog-slug-de-l-article.webp", import.meta.url).href,
    date: "16 mai 2026",
    content: `
<p>...</p>
    `,
  },
```

**Fournir également :**
- ✅ Meta title (≤60 caractères)
- ✅ Meta description (≤160 caractères)
- ✅ Slug image : `blog-{slug}.webp`
- ✅ Prompt fal.ai utilisé

---

## Étape 5 — Mise à jour du sitemap

Ajouter l'entrée du nouvel article dans `public/sitemap.xml`, dans la section `<!-- Articles de blog -->`, en utilisant la date du jour au format `YYYY-MM-DD` :

```xml
  <url>
    <loc>https://digital-web33.fr/blog/{slug}</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
```

Mettre également à jour la `<lastmod>` de la page `/blog` avec la même date.

---

## Étape 6 — Vérification du rendu

Lancer le serveur de développement et vérifier visuellement :

```bash
npm run dev
```

Vérifier :
- `/blog` → l'article apparaît en dernier avec la bonne image, le bon titre et la bonne catégorie
- `/blog/{slug}` → l'article s'affiche correctement, l'image charge, les tableaux sont lisibles, les liens internes fonctionnent
- Aucune erreur dans la console du navigateur

---

## Étape 7 — Mise à jour de ce fichier skill

Après chaque article publié, mettre à jour **ce fichier** (`.claude/skills/blog-digital-web33.md`) :

1. Ajouter le nouvel article dans le tableau "Articles existants"
2. Incrémenter "Prochain ID disponible"

```markdown
| 7 | slug-du-nouvel-article | CATÉGORIE |
```

Cela garantit que la prochaine session repart avec une liste à jour et ne propose pas de doublons.

---

## Catégories disponibles

- `SEO LOCAL` — référencement géolocalisé
- `SITE WEB` — création, contenu, technique
- `GOOGLE` — Google Business, Search Console, Analytics
- `STRATÉGIE` — choix, comparatifs, positionnement
- `TARIFS` — coûts, ROI, budget
- `IA` — intelligence artificielle appliquée aux praticiens
- `RÉSEAUX SOCIAUX` — présence sociale, Instagram, Facebook

---

## Notes importantes

- Toujours lire `src/data/blogPosts.ts` avant de proposer des sujets pour éviter les doublons
- Ne jamais inventer de témoignages ou cas clients réels — utiliser uniquement des scénarios fictifs clairement annoncés
- Toujours inclure au moins 2 CTA vers /contact
- Les mots-clés locaux (Bordeaux, Gironde, villes précises) sont un avantage différenciant — les utiliser systématiquement
- Incrémenter l'ID à partir de 7
- Le champ `image` référence toujours un fichier dans `src/assets/`
- Viser 2000-3000 mots, pas 1000-1500
- Inclure systématiquement : tableaux, FAQ, scénario illustratif fictif, chiffres sourcés
