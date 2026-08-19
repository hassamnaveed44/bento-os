import ActionHubCard from "./cards/ActionHubCard";
import QuickSettingsCard from "./cards/QuickSettingsCard";
import MusicPlayerCard from "./cards/MusicPlayerCard";
import ActivityMonitorCard from "./cards/ActivityMonitorCard";
import ShortcutVaultCard from "./cards/ShortcutVaultCard";

export default function BentoGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 pb-28">
      {/* 1. Action Hub (2 cols, 2 rows) */}
      <ActionHubCard />

      {/* 2. Quick Settings (1 col) */}
      <QuickSettingsCard />

      {/* 3. Lo-Fi Music Player (1 col, 2 rows on desktop) */}
      <MusicPlayerCard />

      {/* 4. Activity Monitor (2 cols) */}
      <ActivityMonitorCard />

      {/* 5. Shortcut Vault (1 col) */}
      <ShortcutVaultCard />
    </div>
  );
}
