import { useNavigate } from "react-router-dom";
import { ArrowLeft, Database } from "lucide-react";

export default function AIDirectory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-cyan-600 flex items-center justify-center border-4 border-cyan-300/50 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
              <Database className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
          AI Directory
        </h1>
        
        <p className="text-xl text-slate-400 mb-3">
          This realm is under construction
        </p>
        
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
          Soon you will be able to explore AI tools, products and ecosystems here. 
          We're building a comprehensive directory of the AI landscape to help you 
          discover and connect with the innovations that matter most.
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center space-x-2 px-8 py-3 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 rounded-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Gateway</span>
        </button>
      </div>
    </div>
  );
}
