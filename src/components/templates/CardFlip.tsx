import React from "react";
import { motion } from "framer-motion";

export default function CardFlip() {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div className="relative grid min-h-[560px] place-items-center bg-zinc-50 p-6 dark:bg-zinc-950 transition-colors">
      {/* subtle color accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-4 left-6 h-40 w-40 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          background:
            "conic-gradient(from 160deg at 50% 50%, #60a5fa 0deg, #a78bfa 120deg, #22d3ee 240deg, #60a5fa 360deg)",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          borderRadius: "9999px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-8 h-40 w-40 opacity-[0.07] dark:opacity-[0.10]"
        style={{
          background:
            "conic-gradient(from 330deg at 50% 50%, #34d399 0deg, #60a5fa 160deg, #f472b6 280deg, #34d399 360deg)",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          borderRadius: "9999px",
        }}
      />

      <div className="[perspective:1200px]">
        <motion.div
          className="relative h-[420px] w-[360px]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front (Login) */}
          <div
            className="absolute inset-0 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-cyan-400">
              Login
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Welcome back</p>

            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="cf-email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  Email
                </label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                />
              </div>
              <div>
                <label htmlFor="cf-password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  Password
                </label>
                <input
                  id="cf-password"
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
                onClick={() => setFlipped(true)}
                className="w-full text-sm text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Need an account? Sign up
              </button>
            </form>
          </div>

          {/* Back (Signup) */}
          <div
            className="absolute inset-0 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-cyan-400">
              Create account
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Start your journey</p>

            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="cf-name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  Name
                </label>
                <input
                  id="cf-name"
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                />
              </div>
              <div>
                <label htmlFor="cf-email2" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  Email
                </label>
                <input
                  id="cf-email2"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                />
              </div>
              <div>
                <label htmlFor="cf-password2" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  Password
                </label>
                <input
                  id="cf-password2"
                  type="password"
                  placeholder="Create a strong password"
                  className="mt-4 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
              >
                Create account
              </button>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="w-full text-sm text-zinc-600 hover:underline dark:text-zinc-400"
              >
                Back to login
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
