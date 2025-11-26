import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { ThemeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="w-full bg-white/95 dark:bg-white/5 border-b border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/ai-hub" className="text-2xl font-bold text-blue-700 dark:text-cyan-300 hover:text-blue-800 dark:hover:text-cyan-200 transition-colors">
          Artiligenz
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors focus:outline-none">
              <span>Explore Artiligenz</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white dark:bg-slate-950/95 border-slate-200 dark:border-cyan-400/25 backdrop-blur-xl z-50">
              <DropdownMenuItem asChild>
                <Link to="/" className="cursor-pointer text-slate-700 dark:text-slate-200">Gateway</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/top-news" className="cursor-pointer text-slate-700 dark:text-slate-200">Top News</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/trending" className="cursor-pointer text-slate-700 dark:text-slate-200">Trending</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/business" className="cursor-pointer text-slate-700 dark:text-slate-200">Business</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/health" className="cursor-pointer text-slate-700 dark:text-slate-200">Health</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/science" className="cursor-pointer text-slate-700 dark:text-slate-200">Science</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/education" className="cursor-pointer text-slate-700 dark:text-slate-200">Education</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sports" className="cursor-pointer text-slate-700 dark:text-slate-200">Sports</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500 dark:text-slate-400" />
            <Input
              placeholder="Search AI news..."
              className="pl-9 w-48 md:w-64 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-cyan-400/25 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
