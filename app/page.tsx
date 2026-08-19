import BentoGrid from "@/components/BentoGrid";
import DockBar from "@/components/DockBar";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950">
      <div className="text-center space-y-4 max-w-lg">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          BentoOS Initialized
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Interactive Workspace
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Highlight this text to see our custom selection style in action.
        </p>
      </div>
      <Header />
      <BentoGrid />
      <DockBar />
    </main>
  );
}
