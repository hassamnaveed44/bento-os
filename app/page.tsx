"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import DockBar from "@/components/DockBar";

export default function Home() {
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Global keyboard shortcut: Press 'D' or 'Cmd/Ctrl + D' to toggle Dock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key.toLowerCase() === "d" && !e.metaKey && !e.ctrlKey && document.activeElement?.tagName !== "INPUT") ||
        (e.key.toLowerCase() === "d" && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault();
        setIsDockVisible((prev) => {
          const nextState = !prev;
          setToastMessage(nextState ? "Dock Visible (Press D to hide)" : "Dock Hidden (Press D to show)");
          setTimeout(() => setToastMessage(null), 2200);
          return nextState;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 relative selection:bg-indigo-500 selection:text-white pb-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-60 right-10 w-[350px] h-[200px] bg-pink-500/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Global Toast for Keyboard Shortcut */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 border border-indigo-500/40 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-2xl text-xs font-medium text-indigo-200 animate-bounce flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
          {toastMessage}
        </div>
      )}

      {/* Main Content */}
      <Header />
      <BentoGrid />

      {/* Floating macOS Dock with visibility state */}
      <DockBar isVisible={isDockVisible} />
    </main>
  );
}
