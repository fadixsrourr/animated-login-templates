import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};
const pop = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.28 } },
};

export default function GlassAurora() {
  return (
    <div className="relative grid min-h-[560px] place-items-center overflow-hidden bg-zinc-50 p-6 dark:bg-zinc-950 transition-colors">
      {/* crisp color accents (subtle, no blur) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 opacity-[0.10] dark:opacity-[0.12]"
        style={{
          background:
            "conic-gradient(from 140deg at 50% 50%, #60a5fa 0deg, #a78bfa 120deg, #22d3ee 240deg, #60a5fa 360deg)",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          borderRadius: "9999px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 opacity-[0.08] dark:opacity-[0.10]"
        style={{
          background:
            "conic-gradient(from 320deg at 50% 50%, #34d399 0deg, #60a5fa 160deg, #f472b6 280deg, #34d399 360deg)",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          borderRadius: "9999px",
        }}
      />

      <motion.div
        variants={pop}
        initial="initial"
        animate="animate"
        className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
      >
        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-cyan-400"
        >
          Welcome back
        </motion.h2>
        <p className="mt-1 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Log in to continue
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="ga-email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
              Email
            </label>
            <input
              id="ga-email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label htmlFor="ga-password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
              Password
            </label>
            <input
              id="ga-password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
          >
            Sign in
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Continue with Google
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-500">
          By continuing, you agree to our Terms &amp; Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}
