export const Footer = () => {
  return (
    <footer className="mt-16 bg-white dark:bg-white/5 border-t border-slate-200 dark:border-cyan-400/25 py-10 text-center text-sm backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Artiligenz.com</p>
        <p className="text-slate-600 dark:text-slate-400">Universal Artificial Intelligence Gateway</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">About</a>
          <a href="#newsletter" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">Newsletter</a>
          <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">Contact</a>
          <a href="#privacy" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
