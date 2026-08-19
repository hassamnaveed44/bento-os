export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6">
      {/* Brand & Live System Status */}
      <div className="flex items-center space-x-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <span className="text-white font-black text-sm tracking-wider">B</span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            BentoOS <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">v1.0</span>
          </h1>
          <p className="text-xs text-slate-400">Interactive Tailwind Motion Lab</p>
        </div>
      </div>

      {/* Live Pulse Indicator & Quick Action */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full backdrop-blur-md">
          {/* Animated ping dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Active
        </div>

        <button className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors duration-200 active:scale-95">
          Docs
        </button>
      </div>
    </header>
  );
}
