import { Article } from "@/config/feeds";
import { formatDistanceToNow } from "date-fns";

interface ArticleCardProps {
  article: Article;
  variant?: "hero" | "small";
}

export const ArticleCard = ({ article, variant = "small" }: ArticleCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });

  if (variant === "hero") {
    return (
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-slate-950/70 rounded-2xl shadow-lg dark:shadow-[0_0_25px_rgba(56,189,248,0.4)] overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-1 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl"
      >
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-5">
          <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-50 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">
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
  }

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-slate-950/70 rounded-xl p-4 shadow-md dark:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all hover:-translate-y-0.5 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl"
    >
      <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-50 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors line-clamp-2">
        {article.title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
        {article.excerpt}
      </p>
      <span className="text-xs text-blue-700 dark:text-cyan-300 font-medium">
        {article.sourceName} • {timeAgo}
      </span>
    </a>
  );
};
