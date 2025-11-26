import { useEffect, useState } from "react";
import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { ArticleCard } from "@/components/ArticleCard";
import { Article } from "@/config/feeds";
import { supabase } from "@/integrations/supabase/client";

const TopNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTopNews = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('fetch-rss?category=top');

        if (error) {
          setError('Failed to load top news');
          console.error('Error:', error);
        } else {
          setArticles(data?.items || []);
        }
      } catch (err) {
        setError('Failed to load top news');
        console.error('Exception:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopNews();
  }, []);

  return (
    <CategoryPageLayout
      title="Top News"
      subtitle="Latest AI developments and general news"
      loading={loading}
      error={error}
    >
      <div className="space-y-6">
        {articles.length > 0 && (
          <ArticleCard article={articles[0]} variant="hero" />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} variant="small" />
          ))}
        </div>
      </div>
    </CategoryPageLayout>
  );
};

export default TopNews;
