import { Newspaper, TrendingUp, Briefcase, Heart, FlaskConical, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "top-news",
    path: "/top-news",
    title: "Top News",
    description: "Latest AI developments and general news",
    icon: Newspaper,
  },
  {
    id: "trending",
    path: "/trending",
    title: "Trending",
    description: "Most popular AI stories right now",
    icon: TrendingUp,
  },
  {
    id: "business",
    path: "/business",
    title: "Business",
    description: "AI in industry and enterprise",
    icon: Briefcase,
  },
  {
    id: "health",
    path: "/health",
    title: "Health",
    description: "AI in medicine and biotech",
    icon: Heart,
  },
  {
    id: "science",
    path: "/science",
    title: "Science",
    description: "Research and breakthroughs",
    icon: FlaskConical,
  },
  {
    id: "education",
    path: "/education",
    title: "Education",
    description: "AI in learning and academia",
    icon: GraduationCap,
  },
  {
    id: "sports",
    path: "/sports",
    title: "Sports",
    description: "AI in sports analytics and performance",
    icon: Trophy,
  },
];

export const CategoriesOverview = () => {
  return (
    <section id="categories-overview" className="w-full bg-slate-100 dark:bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            Explore AI Categories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Browse news by topic and discover what matters to you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={category.path}
                className="group bg-white dark:bg-slate-950/70 rounded-2xl p-6 shadow-md dark:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all hover:-translate-y-1 border border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 dark:bg-cyan-400/10 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-cyan-400/20 transition-colors border border-blue-200/50 dark:border-cyan-400/30">
                    <Icon className="w-6 h-6 text-blue-700 dark:text-cyan-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1 group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
