import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { Header } from "@/components/Header";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
            <Button onClick={() => navigate("/blog")}>Retour au blog</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 🧠 Génération automatique du mot-clé principal
  const mainKeyword = post.title
    .toLowerCase()
    .replace(/[^\p{L}\p{N} ]+/gu, "") // nettoie les caractères spéciaux
    .split(" ")
    .slice(0, 3) // garde les 3 premiers mots pertinents
    .join(" ");

  // 🖼️ Insertion automatique du titre comme alt si absent
  const rawContent = post.content.replace(/<img(?![^>]*alt=)/g, `<img alt="${post.title}"`);
  const enhancedContent = DOMPurify.sanitize(rawContent);

  return (
    <div className="min-h-screen">
      {/* 🔍 Bloc SEO dynamique */}
      <Helmet>
        <title>{post.title} | Digital-Web33</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${mainKeyword}, ${post.category}, Digital-Web33, création site web, Bordeaux, développement web`}
        />
        <link rel="canonical" href={`https://digital-web33.fr/blog/${post.slug}`} />
        
        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": "Digital-web33"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Digital-web33",
              "logo": {
                "@type": "ImageObject",
                "url": "https://digital-web33.fr/logo.png"
              }
            }
          })}
        </script>
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image ? post.image : "/default-og-image.jpg"} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={post.image ? post.image : "/default-og-image.jpg"} />
        <meta name="author" content="Digital-Web33" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Button variant="ghost" className="mb-8" onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">
              ACCUEIL
            </a>
            <span>/</span>
            <a href="/blog" className="hover:text-primary transition-colors">
              BLOG
            </a>
            <span>/</span>
            <span className="text-foreground">{post.title.toUpperCase()}</span>
          </div>

          {/* Article header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
          </div>

          {/* Featured image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-12">
            <img
              src={post.image}
              alt={`Illustration de l’article ${post.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article content */}
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:mb-6
              prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: enhancedContent }}
          />

          {/* CTA section */}
          <div className="mt-16 p-8 bg-muted/50 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d'un site web professionnel ?</h3>
            <p className="text-muted-foreground mb-6">
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Button size="lg" onClick={() => navigate("/#contact")}>
              Me contacter
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
