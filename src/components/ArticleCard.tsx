// components/ArticleCard.tsx
import type { Article } from "@/types"; // or wherever your type lives

const FALLBACK_IMAGES: Record<string, string> = {
  top: "/images/ai-generic.jpg",
  trending: "/images/ai-trending.jpg",
  health: "/images/ai-health.jpg",
  science: "/images/ai-science.jpg",
  education: "/images/ai-education.jpg",
  sports: "/images/ai-sports.jpg",
  business: "/images/ai-business.jpg",
};

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const fallback = FALLBACK_IMAGES[article.category] ?? "/images/ai-generic.jpg";
  const img = article.imageUrl || fallback;

  return (
    <article className="flex flex-col rounded-2xl bg-card/80 border border-border/60 shadow-lg overflow-hidden backdrop-blur-xl">
      {/* Image header */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={img}
          alt={article.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        <h3 className="text-base font-semibold leading-snug line-clamp-2">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
          <span className="truncate max-w-[60%]">{article.sourceName}</span>
          <span>
            {new Date(article.publishedAt).toLocaleString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "short",
            })}
          </span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center text-xs font-medium text-primary hover:underline"
        >
          Read article ↗
        </a>
      </div>
    </article>
  );
}
