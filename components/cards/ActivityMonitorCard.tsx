"use client";

import { useState } from "react";

const chartData = [
  { day: "Mon", value: "45%", count: "1.2k req", delay: "delay-0" },
  { day: "Tue", value: "70%", count: "2.8k req", delay: "delay-75" },
  { day: "Wed", value: "35%", count: "900 req", delay: "delay-100" },
  { day: "Thu", value: "90%", count: "4.1k req", delay: "delay-150" },
  { day: "Fri", value: "60%", count: "2.3k req", delay: "delay-200" },
  { day: "Sat", value: "80%", count: "3.5k req", delay: "delay-300" },
  { day: "Sun", value: "95%", count: "4.9k req", delay: "delay-500" },
];

export default function ActivityMonitorCard() {
  const [timeframe, setTimeframe] = useState<"7D" | "30D">("7D");

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[190px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-sm">
            📈
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              Activity Monitor
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                delay-*
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">Hover bars to reveal floating tooltips</p>
          </div>
        </div>

        {/* Timeframe Filter with active state spring */}
        <div className="flex bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-[11px]">
          <button
            onClick={() => setTimeframe("7D")}
            className={`px-2.5 py-0.5 rounded-md font-medium transition-all duration-150 active:scale-95 ${
              timeframe === "7D" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            7D
          </button>
          <button
            onClick={() => setTimeframe("30D")}
            className={`px-2.5 py-0.5 rounded-md font-medium transition-all duration-150 active:scale-95 ${
              timeframe === "30D" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            30D
          </button>
        </div>
      </div>

      {/* Interactive Bar Chart with Hover Tooltips */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3 items-end h-24 my-2 pt-6">
        {chartData.map((item) => (
          <div key={item.day} className="group/bar relative flex flex-col items-center h-full justify-end cursor-pointer">
            
            {/* Floating Tooltip (Slides up and fades in on bar hover) */}
            <div className="absolute -top-7 opacity-0 pointer-events-none translate-y-1 group-hover/bar:opacity-100 group-hover/bar:translate-y-0 transition-all duration-200 ease-out bg-slate-950 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap z-20">
              {item.count}
            </div>

            {/* Vertical Bar with staggered transition delays and scale on hover */}
            <div className="w-full bg-slate-800/80 rounded-t-lg overflow-hidden h-full flex items-end">
              <div
                className={`w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg transition-all duration-500 ease-out ${item.delay} group-hover/bar:brightness-125 group-hover/bar:scale-y-105 origin-bottom`}
                style={{ height: item.value }}
              />
            </div>

            {/* Day Label */}
            <span className="text-[10px] font-mono text-slate-400 mt-1 transition-colors duration-150 group-hover/bar:text-cyan-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      {/* Footer System Stats */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60 font-mono">
        <span>Throughput: <strong className="text-slate-300">99.8%</strong></span>
        <span>Peak: <strong className="text-cyan-400">4.9k req/s</strong></span>
      </div>
    </div>
  );
}
