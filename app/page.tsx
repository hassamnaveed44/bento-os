import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import DockBar from "@/components/DockBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 relative selection:bg-indigo-500 selection:text-white">
      {/* Ambient background blur blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-60 right-10 w-[350px] h-[200px] bg-pink-500/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <Header />
      <BentoGrid />

      {/* Floating macOS Dock */}
      <DockBar />
    </main>
  );
}
