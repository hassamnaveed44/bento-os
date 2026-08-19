import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BentoOS - Interactive Workspace",
  description: "Explore Tailwind CSS Transitions, Transforms, and Animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white min-h-screen overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
