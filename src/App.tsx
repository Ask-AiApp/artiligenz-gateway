import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gateway from "./pages/Gateway";
import Index from "./pages/Index";
import TopNews from "./pages/TopNews";
import Trending from "./pages/Trending";
import Business from "./pages/Business";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Education from "./pages/Education";
import Sports from "./pages/Sports";
import AIDirectory from "./pages/AIDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gateway />} />
          <Route path="/ai-hub" element={<Index />} />
          <Route path="/ai-directory" element={<AIDirectory />} />
          <Route path="/top-news" element={<TopNews />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
