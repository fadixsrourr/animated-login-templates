import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * SpotlightHover
 * - Follows the mouse with a radial gradient.
 * - On dark theme: light halo (white-ish) to brighten.
 * - On light theme: subtle shadow (black-ish) to dim.
 * - Uses requestAnimationFrame to avoid spamming setState.
 */
export default function SpotlightHover() {
  const { isDark } = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [spot, setSpot] = React.useState({
    x: 0,
    y: 0,
    show: false,
  });

  // rAF throttle so we don't set state on every mouse event
  const frameRef = React.useRef<number | null>(null);
  const latestPos = React.useRef<{ x: number; y: number; show: boolean } | null>(
    null
  );

  const applySpot = React.useCallback(() => {
    if (!latestPos.current) return;
    setSpot(latestPos.current);
    frameRef.current = null;
  }, []);

  const queueSpot = React.useCallback((next: {
    x: number;
    y: number;
    show: boolean;
  }) => {
    latestPos.current = next;
    if (frameRef.current == null) {
      frameRef.current = requestAnimationFrame(applySpot);
    }
  }, [applySpot]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    queueSpot({ x, y, show: true });
  };

  const onLeave = () => queueSpot({ x: spot.x, y: spot.y, show: false });

  // pick a spotlight color based on theme
  const spotlightColor = isDark
    ? "rgba(255,255,255,0.085)" // brighten on dark bg
    : "rgba(0,0,0,0.08)";       // soften on light bg

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative grid min-h-[560px] place-items-center overflow-hidden bg-zinc-50 p-6 transition-colors dark:bg-zinc-950"
    >
      {/* spotlight layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-150"
        style={{
          background: spot.show
            ? `radial-gradient(220px 220px at ${spot.x}px ${spot.y}px, ${spotlightColor}, transparent 65%)`
            : undefined,
          opacity: spot.show ? 1 : 0,
        }}
      />

      {/* card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
      >
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-cyan-400">
          Sign in
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">We missed you 👋</p>

        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="sh-email"
              className="block text-sm font-medium text-zinc-800 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              id="sh-email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label
              htmlFor="sh-password"
              className="block text-sm font-medium text-zinc-800 dark:text-zinc-300"
            >
              Password
            </label>
            <input
              id="sh-password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
          >
            Continue
          </button>

          <div className="text-center text-sm text-zinc-500 dark:text-zinc-500">or</div>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Sign in with GitHub
          </button>
        </form>
      </motion.div>
    </div>
  );
}
