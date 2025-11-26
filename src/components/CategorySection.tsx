import { Article } from "@/config/feeds";
import { ArticleCard } from "./ArticleCard";
import { Skeleton } from "./ui/skeleton";

interface CategorySectionProps {
  id: string;
  title: string;
  articles: Article[];
  loading?: boolean;
}

export const CategorySection = ({ id, title, articles, loading }: CategorySectionProps) => {
  return (
    <section id={id} className="w-full">
      <div className="bg-white/95 dark:bg-white/5 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-2xl rounded-3xl shadow-lg dark:shadow-[0_0_40px_rgba(56,189,248,0.35)] p-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">{title}</h2>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl bg-slate-200 dark:bg-slate-800/50" />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center text-slate-600 dark:text-slate-400 py-8">No articles available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="small" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
