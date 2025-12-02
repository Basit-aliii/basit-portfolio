"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] px-6 md:px-20 py-20 bg-black text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-emerald-400"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
      >
        Have a project or opportunity in mind? Let’s work together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex justify-center gap-6"
      >
        <a
          href="mailto:baal22cs@cmrit.ac.in"
          className="px-8 py-3 rounded-full bg-black border border-emerald-500 text-white font-semibold transition hover:bg-emerald-500 hover:text-black"
        >
          Email Me
        </a>

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
