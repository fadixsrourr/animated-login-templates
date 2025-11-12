import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SlidingPanels() {
  const [panel, setPanel] = React.useState<"login" | "signup">("login");

  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-2xl bg-zinc-50 transition-colors dark:bg-zinc-950">
      {/* crisp corner accents (very subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-8 hidden h-56 w-56 opacity-[0.07] md:block dark:opacity-[0.10]"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 50%, #60a5fa 0deg, #a78bfa 120deg, #22d3ee 240deg, #60a5fa 360deg)",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          borderRadius: "9999px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-8 hidden h-56 w-56 opacity-[0.06] md:block dark:opacity-[0.10]"
        style={{
          background:
            "conic-gradient(from 300deg at 50% 50%, #34d399 0deg, #60a5fa 160deg, #f472b6 280deg, #34d399 360deg)",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
          borderRadius: "9999px",
        }}
      />

      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Left side: hero with animated gradient stripe (no haze) */}
        <div className="relative hidden items-center justify-center p-10 md:flex">
          {/* neutral vignette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(520px 360px at 50% 40%, rgba(0,0,0,0.08), transparent 60%)",
            }}
          />
          {/* animated accent stripe */}
          <motion.div
            aria-hidden
            className="absolute left-0 top-0 h-full w-1/5 opacity-30"
            initial={{ x: "-20%" }}
            animate={{ x: ["-20%", "120%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.25) 40%, rgba(236,72,153,0.25) 60%, transparent 100%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              AI Snippet Companion
            </h3>
            <p className="mt-2 max-w-sm text-zinc-600 dark:text-zinc-400">
              Save, search, and sync your favorite code snippets across devices.
            </p>
          </div>
        </div>

        {/* Right: forms with animated tabs + presence */}
        <div className="relative p-6">
          <div className="mb-4 flex gap-2">
            {(["login", "signup"] as const).map((key) => (
              <motion.button
                key={key}
                onClick={() => setPanel(key)}
                whileTap={{ scale: 0.98 }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  panel === key
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-zinc-800 shadow-sm hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {key === "login" ? "Login" : "Sign up"}
              </motion.button>
            ))}
          </div>

          <div className="relative h-[430px] overflow-hidden">
            <AnimatePresence mode="wait">
              {panel === "login" ? (
                <motion.div
                  key="login"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="absolute inset-0"
                >
                  <motion.h2
                    layout
                    className="text-xl font-semibold text-zinc-900 dark:text-white"
                  >
                    Welcome back
                  </motion.h2>
                  <form className="mt-6 space-y-4">
                    <motion.div layout>
                      <label htmlFor="sp-email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                        Email
                      </label>
                      <input
                        id="sp-email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                      />
                    </motion.div>
                    <motion.div layout>
                      <label htmlFor="sp-password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                        Password
                      </label>
                      <input
                        id="sp-password"
                        type="password"
                        placeholder="••••••••"
                        className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                      />
                    </motion.div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <input
                          type="checkbox"
                          className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500 dark:border-zinc-600"
                        />{" "}
                        Remember me
                      </label>
                      <a href="#" className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">
                        Forgot password?
                      </a>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                    >
                      Sign in
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="absolute inset-0"
                >
                  <motion.h2
                    layout
                    className="text-xl font-semibold text-zinc-900 dark:text-white"
                  >
                    Create your account
                  </motion.h2>
                  <form className="mt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div layout>
                        <label htmlFor="sp-first" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                          First name
                        </label>
                        <input
                          id="sp-first"
                          placeholder="Jane"
                          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                        />
                      </motion.div>
                      <motion.div layout>
                        <label htmlFor="sp-last" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                          Last name
                        </label>
                        <input
                          id="sp-last"
                          placeholder="Doe"
                          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                        />
                      </motion.div>
                    </div>
                    <motion.div layout>
                      <label htmlFor="sp-email2" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                        Email
                      </label>
                      <input
                        id="sp-email2"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                      />
                    </motion.div>
                    <motion.div layout>
                      <label htmlFor="sp-password2" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300">
                        Password
                      </label>
                      <input
                        id="sp-password2"
                        type="password"
                        placeholder="Create a strong password"
                        className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                      />
                    </motion.div>
                    <motion.button
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                    >
                      Create account
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
