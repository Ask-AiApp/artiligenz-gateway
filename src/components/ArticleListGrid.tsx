import { Article } from "@/config/feeds";
import { formatDistanceToNow } from "date-fns";

interface ArticleListGridProps {
  articles: Article[];
}

export const ArticleListGrid = ({ articles }: ArticleListGridProps) => {
  if (articles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => {
        const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });
        
        return (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 bg-white dark:bg-slate-950/70 rounded-xl p-4 shadow-md dark:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all hover:-translate-y-0.5 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl"
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-50 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
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
