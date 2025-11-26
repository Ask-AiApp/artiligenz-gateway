import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { FEEDS } from '../_shared/feeds.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Article {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: "rss" | "google_news";
  publishedAt: string;
  excerpt: string;
  imageUrl?: string;
  category: string;
  tags: string[];
}

const cache = new Map<string, { updatedAt: number; items: Article[] }>();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

function createHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

function extractText(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([^\\]]+)\\]\\]></${tag}>|<${tag}[^>]*>([^<]+)</${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? (match[1] || match[2] || '').trim() : '';
}

function extractAttribute(xml: string, tag: string, attr: string): string {
  const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]+)"`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function extractImageFromContent(content: string): string | undefined {
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) return imgMatch[1];
  
  const urlMatch = content.match(/https?:\/\/[^\s<>"]+?\.(jpg|jpeg|png|gif|webp)/i);
  return urlMatch ? urlMatch[0] : undefined;
}

async function parseFeed(url: string, category: string): Promise<Article[]> {
  try {
    console.log(`Fetching feed: ${url}`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Artiligenz/1.0)',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return [];
    }

    const text = await response.text();
    const articles: Article[] = [];

    // Split by <item> or <entry> tags
    const isAtom = text.includes('<entry');
    const itemRegex = isAtom ? /<entry[^>]*>([\s\S]*?)<\/entry>/gi : /<item[^>]*>([\s\S]*?)<\/item>/gi;
    const items = text.match(itemRegex) || [];

    for (let i = 0; i < Math.min(items.length, 20); i++) {
      const itemXml = items[i];
      
      let title = extractText(itemXml, 'title');
      if (!title) continue;

      let link = '';
      if (isAtom) {
        link = extractAttribute(itemXml, 'link', 'href');
      } else {
        link = extractText(itemXml, 'link');
        if (!link) link = extractText(itemXml, 'guid');
      }
      
      if (!link) continue;

      // Extract published date
      let pubDate = extractText(itemXml, 'pubDate') || 
                    extractText(itemXml, 'published') || 
                    extractText(itemXml, 'updated') ||
                    extractText(itemXml, 'dc:date') ||
                    new Date().toISOString();

      // Extract description
      const description = extractText(itemXml, 'description') || 
                         extractText(itemXml, 'summary') || 
                         extractText(itemXml, 'content') ||
                         extractText(itemXml, 'content:encoded') || '';
      
      const cleanDesc = description.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
      const excerpt = cleanDesc.substring(0, 200);

      // Extract image
      let imageUrl: string | undefined;
      const mediaUrl = extractAttribute(itemXml, 'media:content', 'url') ||
                      extractAttribute(itemXml, 'media:thumbnail', 'url') ||
                      extractAttribute(itemXml, 'enclosure', 'url');
      
      if (mediaUrl && (mediaUrl.includes('.jpg') || mediaUrl.includes('.png') || mediaUrl.includes('.jpeg') || mediaUrl.includes('.webp'))) {
        imageUrl = mediaUrl;
      } else {
        imageUrl = extractImageFromContent(description);
      }

      // Extract source
      const sourceName = extractText(itemXml, 'source') || 
                        extractText(itemXml, 'dc:creator') ||
                        extractText(itemXml, 'author') ||
                        new URL(url).hostname.replace('www.', '');

      const id = createHash(link + sourceName);

      articles.push({
        id,
        title,
        url: link,
        sourceName,
        sourceType: url.includes('google.com/rss') ? "google_news" : "rss",
        publishedAt: new Date(pubDate).toISOString(),
        excerpt,
        imageUrl,
        category,
        tags: []
      });
    }

    console.log(`Parsed ${articles.length} articles from ${url}`);
    return articles;
  } catch (error) {
    console.error(`Error parsing feed ${url}:`, error);
    return [];
  }
}

function scoreTrendingArticle(article: Article): number {
  let score = 0;
  
  const ageHours = (Date.now() - new Date(article.publishedAt).getTime()) / (1000 * 60 * 60);
  if (ageHours < 24) score += 10;
  else if (ageHours < 72) score += 5;
  else score += 1;

  const buzzwords = ['breakthrough', 'viral', 'record', 'controversy', 'ban', 'lawsuit', 'open-source', 'AGI', 'revolutionary'];
  const titleLower = article.title.toLowerCase();
  for (const word of buzzwords) {
    if (titleLower.includes(word.toLowerCase())) score += 2;
  }

  return score;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const category = url.searchParams.get('category') || 'top';

    const now = Date.now();
    const cached = cache.get(category);
    
    if (cached && (now - cached.updatedAt) < CACHE_DURATION) {
      console.log(`Returning cached data for ${category}`);
      return new Response(
        JSON.stringify({
          section: category,
          updatedAt: new Date(cached.updatedAt).toISOString(),
          items: cached.items
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get feeds for the requested category from shared config
    const feeds = (FEEDS as any)[category];
    
    if (!feeds) {
      console.error(`Invalid category: ${category}`);
      return new Response(
        JSON.stringify({ error: `Invalid category: ${category}` }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    const allArticles: Article[] = [];

    for (const feedUrl of feeds) {
      const articles = await parseFeed(feedUrl, category);
      allArticles.push(...articles);
    }

    const uniqueArticles = Array.from(
      new Map(allArticles.map(a => [a.url, a])).values()
    );

    let sortedArticles: Article[];
    if (category === 'trending') {
      sortedArticles = uniqueArticles
        .map(article => ({ article, score: scoreTrendingArticle(article) }))
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return new Date(b.article.publishedAt).getTime() - new Date(a.article.publishedAt).getTime();
        })
        .map(({ article }) => article)
        .slice(0, 10);
    } else {
      sortedArticles = uniqueArticles.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    cache.set(category, { updatedAt: now, items: sortedArticles });

    console.log(`Fetched ${sortedArticles.length} articles for ${category}`);

    return new Response(
      JSON.stringify({
        section: category,
        updatedAt: new Date(now).toISOString(),
        items: sortedArticles
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in fetch-rss function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
