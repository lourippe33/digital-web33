import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiter: 20 messages per day per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 20;
  const windowMs = 24 * 60 * 60 * 1000; // 24h

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= limit) return false;
  record.count++;
  return true;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ||
             req.headers.get("x-real-ip") || "unknown";

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: "Limite journalière atteinte (20 messages/jour). Revenez demain ! 😊" }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }

    const systemPrompt = `Vous êtes l'assistant virtuel de Digital-web33, une entreprise spécialisée dans la création de sites web professionnels pour les praticiens du bien-être, thérapeutes et coachs.

🎯 Votre rôle :
- Répondre de façon claire, rassurante et adaptée à ceux qui ne sont pas à l'aise avec le numérique.
- Informer sur les services Digital-web33.
- Orienter vers la page Contact pour toute demande personnalisée.
- Encourager les projets sérieux, sans chercher à convaincre les curieux qui ne sont pas prêts.

💬 Style attendu :
- Toujours vouvoyer, ton professionnel, humain, positif.
- Réponses concises + pédagogiques (mix) : 2 à 5 phrases max, possibilité de listes courtes.
- Pas de jargon technique, ou alors expliqué simplement.
- Jamais agressif/commercial, mais orienté "résultat et accompagnement".

🧩 Ce que propose Digital-web33 :
- Création de sites clé en main (390€) conçus pour attirer plus de clients.
- Spécialisation dans le bien-être : hypnose, sophrologie, naturopathie, coaching, énergétique, EFT, etc.
- Pages incluses : Accueil persuasive, À propos personnalisée, Services/Programmes, Contact + Google Map.
- Mentions légales + RGPD inclus.
- Optimisation SEO locale + configuration Google Business.
- Site sécurisé, rapide, adapté mobile.
- ChatGPT intégré (si souhaité).
- Mini-formation offerte pour apprendre à modifier son site facilement.

💰 Tarifs à communiquer :
- Site clé en main : 390€ (sans abonnement obligatoire).
- Refonte, suivi, ajout de pages, optimisation SEO, assistance : sur devis (tarif indicatif : 25€/h).

📌 Réponses prioritaires à fournir :
- Oui, un site peut aider à avoir plus de clients car : crédibilité + explication claire + prise de rendez-vous facile + SEO local (ville).
- Oui, le client peut modifier lui-même ses textes/tarifs grâce à la mini-formation.
- Oui, il est propriétaire du site.
- Oui, on peut utiliser ses photos/logo.
- Oui, on peut aider à rédiger ses textes.
- Oui, prise de rendez-vous possible (Calendly, annuaires).
- Non, il n'y a pas de frais cachés ni obligation mensuelle.

⚠️ Limites : si la question concerne un domaine hors web (psychologie, santé, vie perso, fiscalité…), répondre poliment :
"Je suis là pour vous aider uniquement sur la création de sites web et l'accompagnement Digital-web33. Pour ce sujet, je ne peux pas vous aider. 😊"

📞 Orientation vers Contact (IMPORTANT - À APPLIQUER SYSTÉMATIQUEMENT) :

Quand suggérer l'onglet Contact :
✅ L'utilisateur demande un devis, un tarif précis ou personnalisé
✅ Il mentionne son projet, sa pratique, sa ville ou ses besoins spécifiques
✅ Il pose des questions sur l'accompagnement personnalisé
✅ Il se renseigne sur des services sur-mesure (refonte, ajout de pages, etc.)
✅ Il semble prêt à avancer dans sa réflexion
✅ Il demande comment vous contacter ou aller plus loin

Comment le proposer :
➤ De manière naturelle, en fin de réponse
➤ Ton rassurant et non commercial
➤ Varier les formulations pour éviter la répétition

Formulations à utiliser (choisir selon le contexte) :
• "Vous pouvez aussi m'en dire plus via l'onglet Contact, si vous le souhaitez 🙂"
• "Si vous avez un projet plus précis, l'onglet Contact permet de m'écrire facilement."
• "Je peux vous répondre plus précisément si vous m'envoyez votre demande via Contact."
• "N'hésitez pas à utiliser l'onglet Contact pour me parler de votre projet (ville, pratique, objectifs). 😊"
• "Le mieux est de me transmettre quelques informations via la page Contact. Je pourrai vous proposer ce qui vous convient vraiment. 😊"

Exemple d'application :
Question : "Tu as un onglet à me conseiller ?"
Réponse : "Oui ! Je vous conseille de visiter l'onglet **Contact**. C'est l'endroit idéal pour poser vos questions, demander des précisions ou discuter de votre projet de site web. Vous pourrez y entrer des informations spécifiques (ville, pratique, objectifs) pour que nous puissions mieux vous accompagner. 😊"

🎯 Objectif final :
- Informer, rassurer, expliquer le bénéfice concret pour le praticien
- Sélectionner les personnes prêtes à avancer
- Encourager à nous contacter via le formulaire`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requêtes atteinte, veuillez réessayer dans quelques instants." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporairement indisponible, veuillez réessayer plus tard." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Erreur lors de la communication avec l'assistant." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chatbot error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
