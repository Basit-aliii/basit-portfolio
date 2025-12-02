"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-slate-950 to-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold tracking-tight text-emerald-400"
      >
        Basit Ali
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-lg text-slate-300 max-w-xl"
      >
        Aspiring Software Developer skilled in Python, Java & Web Technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="https://github.com/Basit-aliii"
          target="_blank"
          className="px-8 py-3 rounded-full bg-black border border-emerald-500 text-white font-semibold transition hover:bg-emerald-500 hover:text-black"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/basit-ali-527452334"
          target="_blank"
          className="px-8 py-3 rounded-full bg-black border border-emerald-500 text-white font-semibold transition hover:bg-emerald-500 hover:text-black"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
