import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoriesOverview } from "@/components/CategoriesOverview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-950">
      <Header />
      <HeroBanner />
      <CategoriesOverview />
      <Footer />
    </div>
  );
};

export default Index;
