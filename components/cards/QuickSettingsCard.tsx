"use client";

import { useState } from "react";

export default function QuickSettingsCard() {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [shieldActive, setShieldActive] = useState(false);

  return (
    <div className="col-span-1 min-h-[190px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-violet-500/50 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-sm">
            ⚙️
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">Quick Settings</h2>
            <p className="text-[11px] text-slate-400">Peer & State Modifiers</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
          peer-checked
        </span>
      </div>

      {/* Interactive Toggle List using Pure CSS 'peer' */}
      <div className="space-y-2.5 my-3">
        
        {/* Toggle 1: High-Speed Uplink (Demonstrates peer, peer-checked, & has-[:checked]) */}
        <label className="group/toggle flex items-center justify-between p-2.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 has-[:checked]:border-violet-500/40 has-[:checked]:bg-violet-950/20 transition-all duration-200 cursor-pointer select-none">
          <div className="flex items-center gap-2.5">
            <span className="text-sm transition-transform duration-200 group-hover/toggle:scale-110">📡</span>
            <div>
              <p className="text-xs font-semibold text-slate-200">Uplink 5G</p>
              <p className="text-[10px] text-slate-500">Auto-reconnect</p>
            </div>
          </div>

          {/* Sibling Checkbox (peer) + Animated Sliding Track */}
          <div className="relative inline-flex items-center">
            <input
              type="checkbox"
              checked={wifiEnabled}
              onChange={(e) => setWifiEnabled(e.target.checked)}
              className="peer sr-only"
            />
            {/* Toggle Track (Changes color on peer-checked) */}
            <div className="w-10 h-6 bg-slate-800 peer-checked:bg-violet-600 rounded-full transition-colors duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-violet-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-950" />
            {/* Sliding Thumb (Translates X on peer-checked) */}
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-out peer-checked:translate-x-4 shadow-sm" />
          </div>
        </label>

        {/* Toggle 2: Vault Shield (Demonstrates color shift + icon rotation on check) */}
        <label className="group/toggle flex items-center justify-between p-2.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 has-[:checked]:border-emerald-500/40 has-[:checked]:bg-emerald-950/20 transition-all duration-200 cursor-pointer select-none">
          <div className="flex items-center gap-2.5">
            <span className="text-sm transition-transform duration-200 group-hover/toggle:scale-110">🛡️</span>
            <div>
              <p className="text-xs font-semibold text-slate-200">Vault Shield</p>
              <p className="text-[10px] text-slate-500">Hardware firewall</p>
            </div>
          </div>

          {/* Sibling Checkbox (peer) + Animated Sliding Track */}
          <div className="relative inline-flex items-center">
            <input
              type="checkbox"
              checked={shieldActive}
              onChange={(e) => setShieldActive(e.target.checked)}
              className="peer sr-only"
            />
            {/* Toggle Track */}
            <div className="w-10 h-6 bg-slate-800 peer-checked:bg-emerald-600 rounded-full transition-colors duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-950" />
            {/* Sliding Thumb */}
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-out peer-checked:translate-x-4 shadow-sm" />
          </div>
        </label>

      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
        <span>Hardware Sync</span>
        <span className="font-mono text-violet-400">Zero-JS CSS Toggles</span>
      </div>
    </div>
  );
}
