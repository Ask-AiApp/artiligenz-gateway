import { Article } from "@/config/feeds";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full h-[500px] rounded-3xl overflow-hidden group shadow-lg dark:shadow-[0_0_40px_rgba(56,189,248,0.35)] hover:shadow-xl dark:hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all"
    >
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-cyan-300 font-medium text-sm">{article.sourceName}</span>
          <span className="text-slate-300 text-sm">•</span>
          <span className="text-slate-300 text-sm">{timeAgo}</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
          {article.title}
        </h2>
        
        <p className="text-slate-200 text-lg mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="inline-flex items-center gap-2 text-cyan-300 font-medium group-hover:gap-3 transition-all">
          Read article
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </a>
  );
};
