"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import DockBar from "@/components/DockBar";

export default function Home() {
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleDock = () => {
    setIsDockVisible((prev) => {
      const nextState = !prev;
      setToastMessage(nextState ? "Dock Visible (Press D to hide)" : "Dock Hidden (Press D to show)");
      setTimeout(() => setToastMessage(null), 2000);
      return nextState;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key.toLowerCase() === "d" && !e.metaKey && !e.ctrlKey && document.activeElement?.tagName !== "INPUT") ||
        (e.key.toLowerCase() === "d" && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault();
        toggleDock();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 relative selection:bg-indigo-500 selection:text-white pb-36 sm:pb-28">
      {/* Ambient background lighting with bounds protection */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-[550px] h-[250px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-60 right-0 w-[80vw] max-w-[350px] h-[200px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 border border-indigo-500/40 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-2xl text-xs font-medium text-indigo-200 animate-bounce flex items-center gap-2 whitespace-nowrap">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
          {toastMessage}
        </div>
      )}

      {/* Main Content */}
      <Header />
      <BentoGrid />

      {/* Perfectly Centered Floating macOS Dock */}
      <DockBar isVisible={isDockVisible} onToggle={toggleDock} />
    </main>
  );
}
