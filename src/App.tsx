import React, { useState } from "react";
import {
  GlassAurora,
  CardFlip,
  SlidingPanels,
  SpotlightHover,
} from "./components/templates";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [active, setActive] = useState<
    "glass" | "flip" | "panels" | "spotlight"
  >("glass");

  const renderTemplate = () => {
    switch (active) {
      case "flip":
        return <CardFlip />;
      case "panels":
        return <SlidingPanels />;
      case "spotlight":
        return <SpotlightHover />;
      default:
        return <GlassAurora />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h1 className="text-xl font-semibold tracking-tight">
            Animated Login Templates
          </h1>
          <nav className="flex flex-wrap gap-2">
            {[
              ["glass", "Glass"],
              ["flip", "Flip"],
              ["panels", "Panels"],
              ["spotlight", "Spotlight"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActive(key as any)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  active === key
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <ThemeToggle />
      </header>

      <main>{renderTemplate()}</main>

      <footer className="p-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Built with ❤️ by Fadi Srour
      </footer>
    </div>
  );
}
