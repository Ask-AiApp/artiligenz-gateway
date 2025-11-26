import { LucideIcon } from "lucide-react";

interface CategoryHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const CategoryHero = ({ icon: Icon, title, subtitle }: CategoryHeroProps) => {
  return (
    <div className="bg-white/95 dark:bg-white/5 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-2xl rounded-3xl shadow-lg dark:shadow-[0_0_40px_rgba(56,189,248,0.35)] p-8 mb-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-50 dark:bg-cyan-400/10 rounded-xl border border-blue-200 dark:border-cyan-400/30">
            <Icon className="h-8 w-8 text-blue-700 dark:text-cyan-300" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              {title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 dark:bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-slate-600 dark:text-slate-400">Live</span>
        </div>
      </div>
    </div>
  );
};
