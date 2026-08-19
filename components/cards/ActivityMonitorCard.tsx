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
  const [selectedDay, setSelectedDay] = useState<string | null>("Sun");

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[190px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
      
      {/* Header with High-Level Metrics (Breaks card template uniformity) */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-sm">
            📈
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white tracking-tight">Throughput Analytics</h2>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                +18.4%
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Peak 4.9k requests/sec</p>
          </div>
        </div>

        {/* Timeframe Filter */}
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

      {/* Bar Chart with Hover Tooltips & Active Selection */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3 items-end h-24 my-2 pt-6">
        {chartData.map((item) => {
          const isSelected = selectedDay === item.day;

          return (
            <div
              key={item.day}
              onClick={() => setSelectedDay(item.day)}
              className="group/bar relative flex flex-col items-center h-full justify-end cursor-pointer select-none"
            >
              {/* Tooltip */}
              <div className="absolute -top-7 opacity-0 pointer-events-none translate-y-1 group-hover/bar:opacity-100 group-hover/bar:translate-y-0 transition-all duration-200 ease-out bg-slate-950 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap z-20">
                {item.count}
              </div>

              {/* Bar */}
              <div className="w-full bg-slate-800/80 rounded-t-lg overflow-hidden h-full flex items-end">
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ease-out ${item.delay} ${
                    isSelected
                      ? "bg-gradient-to-t from-cyan-400 to-white brightness-125 scale-y-105"
                      : "bg-gradient-to-t from-cyan-600 to-cyan-400 group-hover/bar:brightness-125 group-hover/bar:scale-y-105"
                  } origin-bottom`}
                  style={{ height: item.value }}
                />
              </div>

              {/* Day Label */}
              <span
                className={`text-[10px] font-mono mt-1 transition-colors duration-150 ${
                  isSelected ? "text-cyan-300 font-bold" : "text-slate-400 group-hover/bar:text-cyan-400"
                }`}
              >
                {item.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Clean Status Row without redundant bottom border */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>Selected: <strong className="text-cyan-300">{selectedDay ? `${selectedDay} Peak` : "All"}</strong></span>
        <span>Avg Latency: <strong className="text-slate-300">18ms</strong></span>
      </div>
    </div>
  );
}
