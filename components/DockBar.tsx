"use client";

import { useState } from "react";

interface DockItem {
  id: string;
  name: string;
  icon: string;
  badge?: string;
  color: string;
}

const dockItems: DockItem[] = [
  { id: "home", name: "Dashboard", icon: "⚡", color: "from-indigo-500 to-violet-500" },
  { id: "music", name: "Lo-Fi Beats", icon: "🎵", color: "from-pink-500 to-rose-500" },
  { id: "metrics", name: "Analytics", icon: "📈", badge: "Live", color: "from-cyan-500 to-blue-500" },
  { id: "settings", name: "Settings", icon: "⚙️", color: "from-violet-500 to-purple-500" },
  { id: "terminal", name: "Terminal", icon: "⌨️", color: "from-amber-500 to-orange-500" },
];

export default function DockBar() {
  const [activeApp, setActiveApp] = useState("home");
  const [notification, setNotification] = useState<string | null>(null);

  const handleAppClick = (item: DockItem) => {
    setActiveApp(item.id);
    setNotification(`Opened ${item.name}`);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <>
      {/* Toast Notification for Dock Clicks */}
      {notification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 border border-indigo-500/40 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl text-xs font-medium text-indigo-200 animate-bounce flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
          {notification}
        </div>
      )}

      {/* Floating macOS Dock Container */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <nav className="flex items-end gap-2 sm:gap-3 p-2.5 rounded-3xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-2xl shadow-2xl shadow-indigo-950/60 select-none">
          {dockItems.map((item) => {
            const isActive = activeApp === item.id;

            return (
              <div key={item.id} className="group/dock relative flex flex-col items-center">
                
                {/* Floating Tooltip Label (Revealed smoothly on item hover) */}
                <div className="absolute -top-10 opacity-0 pointer-events-none translate-y-2 group-hover/dock:opacity-100 group-hover/dock:translate-y-0 transition-all duration-200 ease-out bg-slate-950/95 border border-slate-700 text-slate-200 text-[11px] font-medium px-2.5 py-0.5 rounded-lg shadow-xl whitespace-nowrap z-50">
                  {item.name}
                  {/* Tooltip Triangle arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 border-r border-b border-slate-700 rotate-45" />
                </div>

                {/* Magnetic App Icon Button */}
                <button
                  onClick={() => handleAppClick(item)}
                  className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-200 ease-out origin-bottom hover:scale-125 hover:-translate-y-2 active:scale-95 shadow-lg ${
                    isActive
                      ? `bg-gradient-to-tr ${item.color} shadow-indigo-500/30 text-white`
                      : "bg-slate-800/80 hover:bg-slate-700/90 text-slate-200 border border-slate-700/50"
                  }`}
                >
                  <span>{item.icon}</span>

                  {/* Optional mini-badge */}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 h-3.5 px-1 bg-cyan-500 text-slate-950 text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>

                {/* macOS Running Indicator Dot */}
                <div
                  className={`mt-1.5 h-1 w-1 rounded-full transition-all duration-300 ${
                    isActive ? "bg-indigo-400 w-3 shadow-sm shadow-indigo-400" : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}
