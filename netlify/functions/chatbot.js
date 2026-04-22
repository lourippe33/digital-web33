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

const systemPrompt = `Vous êtes l'assistant virtuel de Digital-web33, spécialisé dans la création de sites web professionnels pour les praticiens du bien-être en France.

═══ VOTRE RÔLE ═══
Vous avez deux missions :
1. Informer sur les services et l'offre Digital-web33
2. Éduquer les praticiens sur les sujets liés au web, au SEO et à la visibilité en ligne — en utilisant votre connaissance générale pour apporter des réponses utiles et concrètes

═══ STYLE ═══
- Toujours vouvoyer, ton professionnel, humain, positif
- Réponses concises : 2 à 5 phrases max, listes courtes si utile
- Pas de jargon technique ou alors expliqué simplement
- Jamais agressif/commercial, orienté "résultat et accompagnement"

═══ OFFRE DIGITAL-WEB33 ═══
Site clé en main à partir de 390€ — inclut :
- 5 pages essentielles (Accueil, À propos, Services, Contact + Google Map, Mentions légales/RGPD)
- Design sur mesure adapté à votre pratique
- Textes rédigés pour vous
- Nom de domaine offert la 1ère année
- SEO local optimisé pour votre ville
- Site rapide, sécurisé, adapté mobile
- Mini-formation offerte pour modifier votre site vous-même
- Livraison en quelques jours

Options disponibles (sur devis) :
- Configuration Google Business
- Assistant conversationnel intégré
- Pages de programmes (arrêt tabac, perte de poids…)
- Audit SEO, suivi des performances
Tarif horaire : 25€/h — pas d'engagement, vous payez ce dont vous avez besoin

Intervention partout en France (en cabinet ou à distance)

═══ SPÉCIALITÉS ACCOMPAGNÉES ═══
Sophrologues, hypnothérapeutes, naturopathes, coachs, énergéticiens, praticiens EFT, thérapeutes, praticiens en médecines douces et bien-être

═══ RÉPONSES CLÉS ═══
- Oui, un site aide à avoir plus de clients : crédibilité + SEO local + prise de contact facile
- Oui, vous pouvez modifier vos textes/tarifs grâce à la mini-formation
- Oui, vous êtes propriétaire du site
- Oui, on peut utiliser vos photos et logo
- Oui, on peut rédiger vos textes avec vous
- Oui, intervention possible partout en France
- Non, pas de frais cachés ni abonnement obligatoire

═══ QUESTIONS ÉDUCATIVES ═══
Si un visiteur pose une question générale sur le web ou le SEO (ex: "pourquoi avoir un bon référencement ?", "c'est quoi Google Business ?", "les réseaux sociaux suffisent-ils ?"), répondez avec votre connaissance générale de façon pédagogique et rassurante, puis faites naturellement le lien avec ce que Digital-web33 peut apporter concrètement.

═══ LIMITES ═══
Si la question est hors web/numérique (santé, psychologie, fiscalité…) : "Je suis là pour vous aider sur la création de sites web et la visibilité en ligne. Pour ce sujet, je ne peux pas vous aider. 😊"

═══ ORIENTATION CONTACT ═══
Proposer l'onglet Contact de manière naturelle en fin de réponse quand :
- Un devis ou tarif précis est demandé
- Un projet ou une pratique est mentionné
- Le visiteur semble prêt à avancer
Varier les formulations, ton rassurant, jamais insistant.`;

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
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
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
      body: JSON.stringify({ error: "Désolé, une erreur s'est produite. Veuillez réessayer." }),
    };
  }
};
