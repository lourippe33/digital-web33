import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Blog création site web Bordeaux | Conseils & actualités Digital-web33</title>
          <meta 
            name="description" 
            content="Découvrez nos articles sur la création de sites web pour praticiens bien-être, le SEO local, les chatbots et les meilleures pratiques web à Bordeaux." 
          />
          <link rel="canonical" href="https://digital-web33.fr/blog" />
          
          {/* Schema.org Breadcrumb */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://digital-web33.fr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog"
                }
              ]
            })}
          </script>
        </Helmet>

        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">ACCUEIL</a>
            <span>/</span>
            <span className="text-foreground">BLOG</span>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Blog : Conseils et actualités en création de sites web
          </h1>

          {/* Introduction SEO */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16">
            Retrouvez des conseils pour développer votre visibilité en tant que praticien du bien-être à Bordeaux, en Gironde et partout en France. 
            SEO local, refonte de site, chatbots, performances web… Découvrez comment attirer plus de clients grâce à une présence en ligne optimisée.
          </p>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
