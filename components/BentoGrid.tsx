import ActionHubCard from "./cards/ActionHubCard";
import ActivityMonitorCard from "./cards/ActivityMonitorCard";
import MusicPlayerCard from "./cards/MusicPlayerCard";
import QuickSettingsCard from "./cards/QuickSettingsCard";
import ShortcutVaultCard from "./cards/ShortcutVaultCard";
export default function BentoGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 pb-28">
      {/* Slot 1: Action Hub Card (2 columns, 2 rows on desktop) */}
      <ActionHubCard />
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 min-h-[340px] rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Widget 1</span>
          <span className="text-xs text-slate-500 font-mono">Transforms & 3D Tilt</span>
        </div>
        <div className="my-auto text-center">
          <p className="text-slate-300 font-medium">Action Hub (Coming in Step 3)</p>
          <p className="text-xs text-slate-500 mt-1">Demonstrating scale, rotate, origin, & group-hover</p>
        </div>
        <div className="h-2 w-24 bg-indigo-500/20 rounded-full" />
      </div>

      {/* Slot 2: Quick Settings Card (1 column, 1 row) */}
      <QuickSettingsCard />
      <div className="col-span-1 min-h-[170px] rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">Widget 2</span>
          <span className="text-xs text-slate-500 font-mono">Peer Modifiers</span>
        </div>
        <div>
          <p className="text-slate-300 font-medium">Quick Settings (Step 4)</p>
          <p className="text-xs text-slate-500 mt-1">Pure CSS peer-checked toggles</p>
        </div>
      </div>

      {/* Slot 3: Music Player Card (1 column, 2 rows on lg) */}
      <MusicPlayerCard />
      <div className="col-span-1 lg:row-span-2 min-h-[260px] rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">Widget 3</span>
          <span className="text-xs text-slate-500 font-mono">Animations</span>
        </div>
        <div className="my-auto text-center">
          <p className="text-slate-300 font-medium">Lo-Fi Player (Step 5)</p>
          <p className="text-xs text-slate-500 mt-1">Spinning vinyl & cursor grab</p>
        </div>
        <div className="h-2 w-full bg-pink-500/20 rounded-full" />
      </div>

      {/* Slot 4: Activity Monitor Card (2 columns, 1 row) */}
      <ActivityMonitorCard />
      <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[170px] rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Widget 4</span>
          <span className="text-xs text-slate-500 font-mono">Delays & Tooltips</span>
        </div>
        <div>
          <p className="text-slate-300 font-medium">Activity Chart (Step 6)</p>
          <p className="text-xs text-slate-500 mt-1">Staggered hover bar charts</p>
        </div>
      </div>

      {/* Slot 5: Shortcut Vault Card (1 column, 1 row) */}
      <ShortcutVaultCard />
      <div className="col-span-1 min-h-[170px] rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Widget 5</span>
          <span className="text-xs text-slate-500 font-mono">Tactile Keys</span>
        </div>
        <div>
          <p className="text-slate-300 font-medium">Quick Keys</p>
          <p className="text-xs text-slate-500 mt-1">Active press spring states</p>
        </div>
      </div>
    </div>
  );
}
