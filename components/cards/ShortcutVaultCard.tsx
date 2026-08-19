"use client";

import { useState } from "react";

export default function ShortcutVaultCard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (shortcut: string) => {
    navigator.clipboard?.writeText(shortcut);
    setCopiedKey(shortcut);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="col-span-1 min-h-[190px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-sm">
            ⌨️
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">Key Bindings</h2>
            <p className="text-[11px] text-slate-400">Tactile Shortcuts</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
          Pro
        </span>
      </div>

      {/* 3D Keycaps */}
      <div className="space-y-1.5 my-2">
        {/* Shortcut 1: Toggle Dock (Our live custom feature!) */}
        <div
          onClick={() => handleCopy("D")}
          className="flex items-center justify-between p-1.5 px-2 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition-all duration-150 active:scale-[0.98] select-none"
        >
          <span className="text-xs text-slate-300 font-medium">Toggle Dock</span>
          <kbd className="px-2 py-0.5 text-[11px] font-mono font-semibold text-slate-200 bg-slate-800 border-t border-slate-600 rounded shadow-[0_3px_0_0_#1e293b] active:shadow-none active:translate-y-[3px] transition-all duration-75">
            D
          </kbd>
        </div>

        {/* Shortcut 2: Command Bar */}
        <div
          onClick={() => handleCopy("⌘ + K")}
          className="flex items-center justify-between p-1.5 px-2 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition-all duration-150 active:scale-[0.98] select-none"
        >
          <span className="text-xs text-slate-300 font-medium">Command Bar</span>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 text-[11px] font-mono font-semibold text-slate-200 bg-slate-800 border-t border-slate-600 rounded shadow-[0_3px_0_0_#1e293b] active:shadow-none active:translate-y-[3px] transition-all duration-75">
              ⌘
            </kbd>
            <kbd className="px-1.5 py-0.5 text-[11px] font-mono font-semibold text-slate-200 bg-slate-800 border-t border-slate-600 rounded shadow-[0_3px_0_0_#1e293b] active:shadow-none active:translate-y-[3px] transition-all duration-75">
              K
            </kbd>
          </div>
        </div>
      </div>

      {/* Footer Feedback */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60 font-mono">
        <span>Click key to copy</span>
        <span className="text-amber-400 font-semibold transition-all duration-200">
          {copiedKey ? `Copied ${copiedKey}!` : "Ready"}
        </span>
      </div>
    </div>
  );
}
