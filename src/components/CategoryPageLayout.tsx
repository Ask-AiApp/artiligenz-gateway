import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skeleton } from "./ui/skeleton";

interface CategoryPageLayoutProps {
  title: string;
  subtitle: string;
  loading?: boolean;
  error?: string;
  children: ReactNode;
}

export const CategoryPageLayout = ({
  title,
  subtitle,
  loading,
  error,
  children,
}: CategoryPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-950">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/95 dark:bg-white/5 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-2xl rounded-3xl shadow-lg dark:shadow-[0_0_40px_rgba(56,189,248,0.35)] p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                {title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 dark:bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-slate-600 dark:text-slate-400">Live</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-950/70 rounded-2xl p-6 border border-slate-200 dark:border-cyan-400/25">
                <Skeleton className="h-8 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 rounded-2xl p-6 text-center">
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </div>
        ) : (
          children
        )}
      </div>

      <Footer />
    </div>
  );
};
