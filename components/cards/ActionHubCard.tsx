"use client";

import { useState } from "react";

export default function ActionHubCard() {
  const [activeTab, setActiveTab] = useState<"actions" | "terminal">("actions");
  const [terminalOutput, setTerminalOutput] = useState("bento-os ready. Select an action above.");

  const runCommand = (cmd: string, output: string) => {
    setTerminalOutput(`$ ${cmd}\n${output}`);
  };

  return (
    <div className="group/hub col-span-1 md:col-span-2 lg:col-span-2 row-span-2 min-h-[360px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
      
      {/* Background radial highlight */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/0 rounded-full blur-3xl transition-opacity duration-500 opacity-40 group-hover/hub:opacity-100 pointer-events-none" />

      {/* Top Bar: Pivot Icon & Mode Switcher */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center transition-transform duration-300 origin-bottom-left group-hover/hub:rotate-12 group-hover/hub:scale-110">
            <span className="text-lg">⚡</span>
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              Action Hub
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Production
              </span>
            </h2>
            <p className="text-xs text-slate-400">Quick deployments and workspace commands</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab("actions")}
            className={`text-xs px-3 py-1 rounded-lg font-medium transition-all duration-200 active:scale-90 ${
              activeTab === "actions"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Actions
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`text-xs px-3 py-1 rounded-lg font-medium transition-all duration-200 active:scale-90 ${
              activeTab === "terminal"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Console
          </button>
        </div>
      </div>

      {/* Center Dynamic Area */}
      <div className="my-5 z-10">
        {activeTab === "actions" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Deploy Action */}
            <div
              onClick={() => runCommand("npm run deploy:edge", "Deploying build v1.2 to global edge network... Done in 1.4s.")}
              className="group/item p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-850 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">Deploy Edge</span>
                <span className="text-xs text-indigo-400 transition-transform duration-200 group-hover/item:translate-x-1">
                  →
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Triggers zero-downtime CI/CD sync</p>
            </div>

            {/* Run Tests Action */}
            <div
              onClick={() => runCommand("npm run test:e2e", "Running 42 end-to-end test suites... All passed (100%).")}
              className="group/item p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-850 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">Run Diagnostics</span>
                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20 transition-transform duration-300 origin-center group-hover/item:rotate-6 group-hover/item:scale-105">
                  CI/CD
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Full suite validation and health test</p>
            </div>
          </div>
        ) : (
          /* Live Interactive Console */
          <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 font-mono text-xs text-slate-300 flex flex-col justify-between min-h-[110px]">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800/80 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-amber-500/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-400">bash — edge-worker</span>
            </div>
            <pre className="text-[11px] text-indigo-300 mt-2 whitespace-pre-wrap leading-relaxed">
              {terminalOutput}
            </pre>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
              <span>❯</span>
              <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 z-10">
        <span className="text-xs font-mono text-slate-500">
          Uptime: <strong className="text-slate-300">99.98%</strong>
        </span>

        <button
          onClick={() => runCommand("bento-os sync", "Synchronizing all micro-services... State synced.")}
          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
        >
          Sync Cluster
        </button>
      </div>
    </div>
  );
}
