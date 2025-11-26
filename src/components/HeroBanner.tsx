export const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4 py-16">
        <span className="inline-block px-4 py-1.5 bg-white/20 dark:bg-cyan-400/10 text-white dark:text-cyan-300 text-sm font-semibold rounded-full mb-6 border border-white/30 dark:border-cyan-400/30">
          Universal Artificial Intelligence Gateway
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
          Discover, Explore & Connect with the world of AI
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Your comprehensive source for artificial intelligence news, insights, and breakthroughs across all industries and sectors.
        </p>
        
        <a
          href="#categories-overview"
          className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-cyan-400 text-blue-700 dark:text-slate-950 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-cyan-300 transition-all shadow-lg hover:shadow-xl"
        >
          Explore
        </a>
      </div>
    </section>
  );
};
