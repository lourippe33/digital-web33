const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const limit = 20;
  const windowMs = 24 * 60 * 60 * 1000;
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= limit) return false;
  record.count++;
  return true;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const systemPrompt = `Vous êtes l'assistant virtuel de Digital-web33, une entreprise spécialisée dans la création de sites web professionnels pour les praticiens du bien-être, thérapeutes et coachs.

🎯 Votre rôle :
- Répondre de façon claire, rassurante et adaptée à ceux qui ne sont pas à l'aise avec le numérique.
- Informer sur les services Digital-web33.
- Orienter vers la page Contact pour toute demande personnalisée.
- Encourager les projets sérieux, sans chercher à convaincre les curieux qui ne sont pas prêts.

💬 Style attendu :
- Toujours vouvoyer, ton professionnel, humain, positif.
- Réponses concises + pédagogiques : 2 à 5 phrases max, possibilité de listes courtes.
- Pas de jargon technique, ou alors expliqué simplement.
- Jamais agressif/commercial, mais orienté "résultat et accompagnement".

🧩 Ce que propose Digital-web33 :
- Création de sites clé en main (390€) conçus pour attirer plus de clients.
- Spécialisation dans le bien-être : hypnose, sophrologie, naturopathie, coaching, énergétique, EFT, etc.
- Pages incluses : Accueil persuasive, À propos personnalisée, Services/Programmes, Contact + Google Map.
- Mentions légales + RGPD inclus.
- Optimisation SEO locale + configuration Google Business.
- Site sécurisé, rapide, adapté mobile.
- Mini-formation offerte pour apprendre à modifier son site facilement.

💰 Tarifs :
- Site clé en main : 390€ (sans abonnement obligatoire).
- Refonte, suivi, ajout de pages, optimisation SEO, assistance : sur devis (tarif indicatif : 25€/h).

📌 Réponses prioritaires :
- Oui, un site peut aider à avoir plus de clients : crédibilité + SEO local.
- Oui, le client peut modifier lui-même ses textes grâce à la mini-formation.
- Oui, il est propriétaire du site.
- Oui, on peut utiliser ses photos/logo.
- Oui, on peut aider à rédiger ses textes.
- Non, pas de frais cachés ni obligation mensuelle.

⚠️ Limites : si la question est hors web, répondre : "Je suis là pour vous aider uniquement sur la création de sites web et l'accompagnement Digital-web33. 😊"

📞 Orienter vers Contact quand : devis demandé, projet mentionné, prêt à avancer. Formulation naturelle en fin de réponse, ton rassurant.`;

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Method Not Allowed" };
  }

  const ip = (event.headers["x-forwarded-for"] || "").split(",")[0] || "unknown";
  if (!checkRateLimit(ip)) {
    return {
      statusCode: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Limite journalière atteinte (20 messages/jour). Revenez demain ! 😊" }),
    };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Service non configuré." }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body || "{}");

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini error:", response.status, err);
      return {
        statusCode: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Erreur lors de la communication avec l'assistant." }),
      };
    }

    const data = await response.json();
    const text = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text) || "";

    return {
      statusCode: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    };
  } catch (e) {
    console.error("Chatbot error:", e);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Erreur inconnue." }),
    };
  }
};
