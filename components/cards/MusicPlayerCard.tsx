"use client";

import { useState } from "react";

export default function MusicPlayerCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(42);

  return (
    <div className="group/player col-span-1 lg:row-span-2 min-h-[380px] rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/50 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 relative overflow-hidden">
      
      {/* Background Pink Ambient Glow */}
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl transition-opacity duration-500 opacity-40 group-hover/player:opacity-100 pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">Lo-Fi Synth</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
          animate-spin
        </span>
      </div>

      {/* Center: Spinning Vinyl Record & Equalizer */}
      <div className="my-auto py-4 flex flex-col items-center justify-center z-10">
        
        {/* Vinyl Record */}
        <div className="relative flex items-center justify-center">
          {/* Animated Vinyl Disc with Grooves */}
          <div
            className={`w-36 h-36 rounded-full bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border-4 border-slate-800/90 shadow-2xl flex items-center justify-center transition-all duration-700 ${
              isPlaying ? "animate-[spin_4s_linear_infinite] shadow-pink-500/20" : ""
            }`}
          >
            {/* Vinyl Concentric Grooves */}
            <div className="w-28 h-28 rounded-full border border-slate-800/60 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-slate-800/80 flex items-center justify-center">
                {/* Center Record Label */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-inner">
                  {/* Center Spindle Hole */}
                  <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Equalizer overlay when playing */}
          {isPlaying && (
            <div className="absolute -bottom-2 flex items-end gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-pink-500/30">
              <div className="w-1 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:0ms]" />
              <div className="w-1 h-5 bg-pink-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <div className="w-1 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:300ms]" />
              <div className="w-1 h-4 bg-purple-400 rounded-full animate-bounce [animation-delay:75ms]" />
            </div>
          )}
        </div>

        {/* Track Metadata */}
        <div className="text-center mt-5">
          <h3 className="text-sm font-bold text-white tracking-tight">Midnight Coding Wave</h3>
          <p className="text-xs text-slate-400 mt-0.5">Bento Beats • 120 BPM</p>
        </div>
      </div>

      {/* Bottom Area: Interactive Scrub Bar & Controls */}
      <div className="space-y-4 z-10 pt-2 border-t border-slate-800/80">
        
        {/* Interactive Scrub Bar with Grab Cursor */}
        <div className="space-y-1.5">
          <div className="group/track relative w-full h-1.5 hover:h-2.5 bg-slate-800 rounded-full cursor-grab active:cursor-grabbing transition-all duration-200">
            {/* Current Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-150 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Scrub Handle (Grows on track hover) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover/track:scale-100 transition-transform duration-200" />
            </div>
            {/* Clickable range overlay for testing */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-grab active:cursor-grabbing w-full"
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>01:42</span>
            <span>03:50</span>
          </div>
        </div>

        {/* Playback Control Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Track Button */}
          <button className="h-8 w-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105">
            ⏮
          </button>

          {/* Master Play/Pause Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-11 w-11 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white flex items-center justify-center shadow-lg shadow-pink-500/25 transition-all duration-200 active:scale-90 hover:scale-110 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          {/* Next Track Button */}
          <button className="h-8 w-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105">
            ⏭
          </button>
        </div>

      </div>
    </div>
  );
}
