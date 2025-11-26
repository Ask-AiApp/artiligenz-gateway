import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryHero } from "@/components/CategoryHero";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import { FeaturedArticlesGrid } from "@/components/FeaturedArticlesGrid";
import { ArticleListGrid } from "@/components/ArticleListGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { Article } from "@/config/feeds";
import { supabase } from "@/integrations/supabase/client";
import { TrendingUp } from "lucide-react";

const Trending = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('fetch-rss?category=trending');

        if (error) {
          setError('Failed to load trending articles');
          console.error('Error:', error);
        } else {
          setArticles(data?.items || []);
        }
      } catch (err) {
        setError('Failed to load trending articles');
        console.error('Exception:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  const featuredArticle = articles.find(a => a.imageUrl) || articles[0];
  const featuredGrid = articles.slice(1, 4);
  const remainingArticles = articles.slice(4);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-950">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategoryHero
          icon={TrendingUp}
          title="Trending AI Topics"
          subtitle="Most popular AI stories right now"
        />

        {loading ? (
          <div className="space-y-6">
            <Skeleton className="h-[500px] w-full rounded-3xl bg-slate-200 dark:bg-slate-800/50" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-64 w-full rounded-2xl bg-slate-200 dark:bg-slate-800/50" />
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 rounded-2xl p-6 text-center">
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {featuredArticle && <FeaturedArticle article={featuredArticle} />}
            {featuredGrid.length > 0 && <FeaturedArticlesGrid articles={featuredGrid} />}
            {remainingArticles.length > 0 && <ArticleListGrid articles={remainingArticles} />}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Trending;
