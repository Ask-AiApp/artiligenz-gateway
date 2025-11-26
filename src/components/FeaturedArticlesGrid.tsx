import { Article } from "@/config/feeds";
import { formatDistanceToNow } from "date-fns";

interface FeaturedArticlesGridProps {
  articles: Article[];
}

export const FeaturedArticlesGrid = ({ articles }: FeaturedArticlesGridProps) => {
  if (articles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {articles.map((article) => {
        const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });
        
        return (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-slate-950/70 rounded-2xl overflow-hidden shadow-lg dark:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-1 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl"
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-50 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <span className="text-xs text-blue-700 dark:text-cyan-300 font-medium">
                {article.sourceName} • {timeAgo}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
