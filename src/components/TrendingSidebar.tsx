import { Article } from "@/config/feeds";
import { formatDistanceToNow } from "date-fns";
import { TrendingUp } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface TrendingSidebarProps {
  articles: Article[];
  loading?: boolean;
}

export const TrendingSidebar = ({ articles, loading }: TrendingSidebarProps) => {
  return (
    <aside>
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="h-5 w-5 text-blue-700 dark:text-cyan-300" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">Trending</h2>
      </div>
      <div className="space-y-3">
        {loading ? (
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-2 bg-white dark:bg-slate-950/50 p-3 rounded-xl border border-slate-200 dark:border-cyan-400/20">
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800/50" />
                <Skeleton className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800/50" />
              </div>
            ))}
          </>
        ) : articles.length === 0 ? (
          <p className="text-sm text-slate-600 dark:text-slate-400">No trending articles</p>
        ) : (
          articles.slice(0, 5).map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-slate-950/50 hover:bg-slate-50 dark:hover:bg-slate-950/70 p-3 rounded-xl transition-all border border-slate-200 dark:border-cyan-400/20 hover:border-blue-300 dark:hover:border-cyan-400/40"
            >
              <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-50 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {article.sourceName} • {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
              </p>
            </a>
          ))
        )}
      </div>
    </aside>
  );
};
