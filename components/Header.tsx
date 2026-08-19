"use client";

import { useState } from "react";

export default function Header() {
  const [isAudioActive, setIsAudioActive] = useState(false);

  return (
    <header className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6">
      {/* Brand & Workspace Status */}
      <div className="flex items-center space-x-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <span className="text-white font-black text-sm tracking-wider">B</span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            BentoOS <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">v1.2</span>
          </h1>
          <p className="text-xs text-slate-400">Personal Workspace & Motion Studio</p>
        </div>
      </div>

      {/* Right Controls: Ambient Soundwave Toggle & System Active Pill */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsAudioActive(!isAudioActive)}
          className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300 active:scale-95 ${
            isAudioActive
              ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-sm shadow-indigo-500/20"
              : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200"
          }`}
          title="Toggle ambient background audio"
        >
          {/* Animated sound wave bars when active */}
          <div className="flex items-end gap-0.5 h-3">
            <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${isAudioActive ? "h-3 animate-pulse" : "h-1"}`} />
            <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${isAudioActive ? "h-2 animate-pulse [animation-delay:150ms]" : "h-1.5"}`} />
            <span className={`w-0.5 bg-current rounded-full transition-all duration-300 ${isAudioActive ? "h-3.5 animate-pulse [animation-delay:300ms]" : "h-1"}`} />
          </div>
          <span className="hidden sm:inline">{isAudioActive ? "Ambience On" : "Ambience Muted"}</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline">Connected</span>
        </div>
      </div>
    </header>
  );
}
