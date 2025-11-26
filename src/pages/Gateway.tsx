import { useNavigate } from "react-router-dom";
import { CORE_NODE, REALMS } from "@/config/realms";
import { Newspaper, Database, Dumbbell, Building2, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const getRealmIcon = (id: string) => {
  switch (id) {
    case "ai-hub":
      return Newspaper;
    case "ai-directory":
      return Database;
    case "future-athlete":
      return Dumbbell;
    case "enterprise-universe":
      return Building2;
    case "learning-nexus":
      return BookOpen;
    default:
      return Newspaper;
  }
};

export default function Gateway() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRealmClick = (realm: typeof REALMS[0]) => {
    if (realm.disabled) {
      toast({
        title: "Coming Soon",
        description: `${realm.label} is currently under construction.`,
      });
      return;
    }

    if (realm.linkType === "internal" && realm.href) {
      navigate(realm.href);
    } else if (realm.linkType === "external" && realm.href) {
      window.open(realm.href, "_blank");
    }
  };

  const primaryRealms = REALMS.filter((r) => r.type === "primary");
  const pseudoRealms = REALMS.filter((r) => r.type === "pseudo");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 overflow-hidden relative">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 w-full bg-slate-950/70 border-b border-cyan-400/25 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-cyan-300">Artiligenz</div>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start pt-12 min-h-[calc(100vh-80px)] px-4 py-12">
        <div className="mb-12 px-4"> 
          <div
            className="
              inline-flex flex-col items-start
              px-3 py-1 
              rounded-3xl
              bg-white/10 dark:bg-white/5
              border border-white/20 dark:border-cyan-400/30
              backdrop-blur-xl
              shadow-[0_0_25px_rgba(56,189,248,0.4)]
              text-left
            "
          >
            <h1 className="text-lg md:text-xl font-semibold text-cyan-300"> 
              Choose Your Realm
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-200/85">
              Begin your journey into the Artiligenz universe
            </p>
          </div>
        </div>
        
        {/* Desktop Layout */}
        {/* TARGETED FIX: Added -mt-[30px] to move the entire node structure up by 30px */}
        <div className="hidden lg:block relative w-full max-w-6xl h-[400px] mx-auto -mt-[30px]"> 
          {/* Core Node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-cyan-600 flex flex-col items-center justify-center border-4 border-cyan-300/50 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
                <div className="text-2xl font-bold text-white mb-1">
                  {CORE_NODE.label}
                </div>
                <div className="text-xs text-cyan-100 text-center px-4">
                  {CORE_NODE.description}
                </div>
              </div>
            </div>
          </div>

          {/* Primary Realms */}
          {primaryRealms.map((realm, index) => {
            const Icon = getRealmIcon(realm.id);
            const isLeft = index === 0;
            const position = isLeft
              ? "left-8 top-1/2 -translate-y-1/2"
              : "right-8 top-1/2 -translate-y-1/2";

            return (
              <div key={realm.id} className={`absolute ${position} z-10`}>
                {/* Connecting line */}
                <svg
                  className="absolute top-1/2 w-64 h-1 pointer-events-none"
                  style={{
                    left: isLeft ? "100%" : "auto",
                    right: isLeft ? "auto" : "100%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="rgba(56, 189, 248, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>

                <button
                  onClick={() => handleRealmClick(realm)}
                  className="relative group hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl blur-2xl group-hover:bg-cyan-400/20 transition-all" />
                  <div className="relative w-40 h-40 rounded-2xl bg-slate-950/80 backdrop-blur-xl border-2 border-cyan-400/30 group-hover:border-cyan-400/60 flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all">
                    <Icon className="w-10 h-10 text-cyan-300 mb-2" />
                    <div className="text-sm font-bold text-cyan-300 text-center mb-1">
                      {realm.label}
                    </div>
                    <div className="text-xs text-slate-400 text-center">
                      {realm.description}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

          {/* Pseudo Realms */}
          {pseudoRealms.map((realm, index) => {
            const Icon = getRealmIcon(realm.id);
            const angle = (index * 120 - 60) * (Math.PI / 180);
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={realm.id}
                className="absolute top-1/2 left-1/2 z-5"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Connecting line */}
                <svg
                  className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
                  style={{
                    width: Math.abs(x) * 2 + "px",
                    height: Math.abs(y) * 2 + "px",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2={x > 0 ? "0%" : "100%"}
                    y2={y > 0 ? "0%" : "100%"}
                    stroke="rgba(56, 189, 248, 0.15)"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                </svg>

                <button
                  onClick={() => handleRealmClick(realm)}
                  className="relative group opacity-60 hover:opacity-80 transition-opacity"
                >
                  <div className="w-20 h-20 rounded-xl bg-slate-950/60 backdrop-blur-lg border border-cyan-400/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400/60" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full max-w-md space-y-6">
          {/* Core Node */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-cyan-600 flex flex-col items-center justify-center border-4 border-cyan-300/50 shadow-[0_0_40px_rgba(56,189,248,0.6)]">
                <div className="text-xl font-bold text-white mb-1">
                  {CORE_NODE.label}
                </div>
                <div className="text-[10px] text-cyan-100 text-center px-3">
                  {CORE_NODE.description}
                </div>
              </div>
            </div>
          </div>

          {/* Primary Realms */}
          {primaryRealms.map((realm) => {
            const Icon = getRealmIcon(realm.id);
            return (
              <button
                key={realm.id}
                onClick={() => handleRealmClick(realm)}
                className="w-full group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl blur-xl group-hover:bg-cyan-400/20 transition-all" />
                  <div className="relative bg-slate-950/80 backdrop-blur-xl border-2 border-cyan-400/30 group-hover:border-cyan-400/60 rounded-2xl p-6 shadow-[0_0_25px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all">
                    <div className="flex items-center space-x-4">
                      <Icon className="w-12 h-12 text-cyan-300" />
                      <div className="flex-1 text-left">
                        <div className="text-lg font-bold text-cyan-300 mb-1">
                          {realm.label}
                        </div>
                        <div className="text-sm text-slate-400">
                          {realm.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Pseudo Realms */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {pseudoRealms.map((realm) => {
              const Icon = getRealmIcon(realm.id);
              return (
                <button
                  key={realm.id}
                  onClick={() => handleRealmClick(realm)}
                  className="opacity-60"
                >
                  <div className="bg-slate-950/60 backdrop-blur-lg border border-cyan-400/20 rounded-xl p-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-cyan-400/60" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}