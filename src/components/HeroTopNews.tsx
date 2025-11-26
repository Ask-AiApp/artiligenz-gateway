import { Article } from "@/config/feeds";
import { ArticleCard } from "./ArticleCard";
import { Skeleton } from "./ui/skeleton";

interface HeroTopNewsProps {
  data: Article[];
  loading?: boolean;
}

export const HeroTopNews = ({ data, loading }: HeroTopNewsProps) => {
  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Top News</h2>
        <div className="space-y-4">
          <Skeleton className="h-64 w-full rounded-2xl bg-slate-200 dark:bg-slate-800/50" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-32 w-full rounded-xl bg-slate-200 dark:bg-slate-800/50" />
            <Skeleton className="h-32 w-full rounded-xl bg-slate-200 dark:bg-slate-800/50" />
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Top News</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 py-8">No articles available</p>
      </div>
    );
  }

  const heroArticle = data[0];
  const feedArticles = data.slice(1, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Top News</h2>
      <div className="space-y-4">
        <ArticleCard article={heroArticle} variant="hero" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {feedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="small" />
          ))}
        </div>
      </div>
    </div>
  );
};
