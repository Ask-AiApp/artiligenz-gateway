// src/types.ts

export type Category =
  | "top"
  | "trending"
  | "business"
  | "health"
  | "science"
  | "education"
  | "sports";

export type SourceType = "rss" | "google_news";

export type Article = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: SourceType;
  publishedAt: string;   // ISO string
  excerpt: string;
  imageUrl?: string;
  category: Category;
  tags: string[];
};
