# 🍱 BentoOS – Interactive Motion Studio & Personal Workspace

A modern, tactile desktop dashboard built with **Next.js (App Router)** and **Tailwind CSS v4**. This project explores advanced CSS transitions, hardware-accelerated transforms, keyframe animations, and modern relational pseudo-classes (`peer`, `group`, and `:has()`).

---

## ✨ Features & Micro-Interactions

* **macOS-Style Magnetic Dock:** Floating navigation bar with hardware-accelerated upward magnification (`hover:scale-125 origin-bottom`) and fluid responsive sizing.
* **Global Hotkey Integration:** Press `D` or `⌘ + D` anywhere in the app to smoothly toggle the dock visibility with GPU spring translations.
* **Action Hub & Terminal Emulator:** Card with anchor-origin pivot badges (`origin-bottom-left hover:rotate-12`), interactive CI/CD actions, and a live bash console.
* **Zero-JS Reactive Toggles:** Pure CSS state handling via `<input className="peer sr-only">` and `peer-checked:translate-x-4` paired with parent illumination via `has-[:checked]`.
* **Lo-Fi Vinyl Music Player:** Custom keyframe continuous vinyl disc rotation (`animate-[spin_4s_linear_infinite]`), sleeve hover slide-out, bouncing equalizer, and interactive grab scrub bar (`cursor-grab active:cursor-grabbing`).
* **Throughput Analytics & Staggered Motion:** Interactive bar chart featuring staggered entrance delays (`delay-75`, `delay-150`, `delay-300`) and hover tooltips.
* **Tactile 3D Keycaps:** Physical mechanical keyboard simulation with depth shadows that collapse on press (`active:translate-y-[3px] shadow-[0_3px_0_0_#1e293b] active:shadow-none`).
* **Ambient Sound Wave Header:** Live pulsing audio frequency indicator with subpixel typography smoothing (`antialiased`).

---

## 🛠️ Tailwind Motion & Utility Matrix

| Utility Category | Classes Implemented | Real-World Application |
| :--- | :--- | :--- |
| **Transitions & Timing** | `transition-transform`, `transition-colors`, `transition-all`, `duration-150`, `duration-300`, `duration-500`, `ease-out` | Smooth hover lifts, button presses, and theme transitions. |
| **Hardware Transforms** | `scale-105`, `scale-110`, `scale-125`, `scale-y-105`, `rotate-6`, `rotate-12`, `-skew-x-6`, `translate-x-1`, `-translate-y-2` | 2D/3D GPU-composited spatial shifts without triggering layout reflows. |
| **Transform Origin** | `origin-bottom`, `origin-bottom-left`, `origin-top-right` | Anchors rotation and scaling pivot points for native dock magnification and corner badge tilts. |
| **CSS Animations** | `animate-[spin_4s_linear_infinite]`, `animate-pulse`, `animate-ping`, `animate-bounce`, `[animation-delay:*]` | Continuous vinyl spin, hardware radar pings, and organic audio visualizers. |
| **Interactive States** | `hover:`, `active:scale-95`, `focus-visible:ring-2`, `disabled:` | Tactile press squish and accessible keyboard focus navigation rings. |
| **Group & Peer Modifiers** | `group/hub`, `group/item`, `group-hover/item:translate-x-1`, `peer`, `peer-checked:translate-x-4` | Scoped parent-child hover actions and zero-JS toggle switches. |
| **Parent Selector** | `has-[:checked]:border-*`, `has-[:checked]:bg-*` | Dynamic parent container illumination driven purely by child input states. |
| **Tactile UX** | `cursor-grab`, `active:cursor-grabbing`, `select-none`, `selection:bg-indigo-500` | Draggable scrub states, selection suppression on controls, and custom brand highlight colors. |

---

## 📁 Project Architecture

```text
bento-os/
├── app/
│   ├── layout.tsx         # Global selection, smooth scrolling, Inter typography
│   ├── page.tsx           # Global hotkey listener (D / ⌘+D) and ambient canvas
│   └── globals.css        # Tailwind v4 import & smooth scroll directives
├── components/
│   ├── Header.tsx         # Ambience audio wave toggle & ping status radar
│   ├── BentoGrid.tsx      # Responsive CSS grid with asymmetric spans
│   ├── DockBar.tsx        # Floating macOS dock with origin-bottom magnetic scale
│   └── cards/
│       ├── ActionHubCard.tsx        # Pivot transforms, command triggers & console
│       ├── QuickSettingsCard.tsx    # Pure CSS peer-checked & :has() switches
│       ├── MusicPlayerCard.tsx      # Rotating vinyl, grab scrubbing & FLAC audio
│       ├── ActivityMonitorCard.tsx  # Staggered delays & hover tooltips
│       └── ShortcutVaultCard.tsx    # 3D mechanical keycaps with click feedback
└── README.md
