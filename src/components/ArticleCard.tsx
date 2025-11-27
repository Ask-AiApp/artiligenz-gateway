import type { Article } from "@/types";

const FALLBACK_IMAGE = "/ai-generic.jpg";

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  // Prefer article image, otherwise fallback
  const initialSrc = article.imageUrl || FALLBACK_IMAGE;

  return (
    <article className="flex flex-col rounded-2xl bg-card/80 border border-border/60 shadow-lg overflow-hidden backdrop-blur-xl">
      {/* Image header */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={initialSrc}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover"
          // If the remote image 404s or is blocked, swap to fallback once
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src.endsWith(FALLBACK_IMAGE) || img.dataset.fallback === "true") {
              return; // already using fallback, avoid infinite loop
            }
            img.src = FALLBACK_IMAGE;
            img.dataset.fallback = "true";
          }}
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
