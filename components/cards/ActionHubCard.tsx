"use client";

import { useState } from "react";

export default function ActionHubCard() {
  const [activeTab, setActiveTab] = useState<"launch" | "metrics">("launch");

  return (
    <div className="group/hub col-span-1 md:col-span-2 lg:col-span-2 row-span-2 min-h-[360px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
      
      {/* Background Decorative Radial Gradient that brightens on card hover */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/0 rounded-full blur-3xl transition-opacity duration-500 opacity-40 group-hover/hub:opacity-100 pointer-events-none" />

      {/* Top Bar: Title, Origin-Rotating Badge & Mode Switcher */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          {/* Badge with transform origin & rotation on hover */}
          <div className="h-10 w-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center transition-transform duration-300 origin-bottom-left group-hover/hub:rotate-12 group-hover/hub:scale-110">
            <span className="text-lg">⚡</span>
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              Action Hub
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Transforms
              </span>
            </h2>
            <p className="text-xs text-slate-400">Tactile triggers & group hover reactions</p>
          </div>
        </div>

        {/* Tab Toggle with active scale micro-interactions */}
        <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab("launch")}
            className={`text-xs px-3 py-1 rounded-lg font-medium transition-all duration-200 active:scale-90 ${
              activeTab === "launch"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Launch
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`text-xs px-3 py-1 rounded-lg font-medium transition-all duration-200 active:scale-90 ${
              activeTab === "metrics"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Transforms
          </button>
        </div>
      </div>

      {/* Center Dynamic Area */}
      <div className="my-6 z-10">
        {activeTab === "launch" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Action Item 1: Hover skew & slide effect */}
            <div className="group/item p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-850 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">Deploy Build</span>
                {/* Arrow that translates horizontally on parent item hover */}
                <span className="text-xs text-indigo-400 transition-transform duration-200 group-hover/item:translate-x-1">
                  →
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Triggers CI/CD with smooth translate</p>
            </div>

            {/* Action Item 2: Hover scale & rotate badge */}
            <div className="group/item p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-850 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5 cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">Terminal Shell</span>
                {/* Tag that rotates on hover */}
                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20 transition-transform duration-300 origin-center group-hover/item:rotate-6 group-hover/item:scale-105">
                  SSH
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Instant shell with origin rotation</p>
            </div>
          </div>
        ) : (
          /* Transform Showcase: Live Skew & Rotation Interactive Sandbox */
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-around gap-2 text-center">
            {/* Box A: Scale & Skew */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/60 transition-transform duration-300 hover:scale-110 hover:-skew-x-6 cursor-pointer">
              <span className="text-xs font-mono text-indigo-300">hover:skew-x-6</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Hover to skew</p>
            </div>

            {/* Box B: Scale & Origin Top Right */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/60 transition-transform duration-300 origin-top-right hover:scale-110 hover:-rotate-6 cursor-pointer">
              <span className="text-xs font-mono text-purple-300">origin-top-right</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Pivots from corner</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar: Slide-Up Quick Action on Card Hover */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 z-10">
        <span className="text-xs font-mono text-slate-500">
          Status: <span className="text-emerald-400">Ready</span>
        </span>

        {/* Tactile Push Button with active:scale-95 and focus-visible rings */}
        <button className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none">
          Execute Hub
        </button>
      </div>
    </div>
  );
}
