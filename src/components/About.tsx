"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const variant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-black text-white"
    >
      <motion.h2
        variants={variant}
        initial="hidden"
        animate={controls}
        className="text-4xl font-bold text-emerald-400 mb-10"
      >
        About Me
      </motion.h2>

      <motion.p
        variants={variant}
        initial="hidden"
        animate={controls}
        className="text-lg text-slate-300 max-w-3xl text-center leading-relaxed"
      >
        Aspiring Computer Science Engineer with skills in Python, Java & MySQL.
        Passionate about solving real-world problems and continuously learning
        to grow in software development.
      </motion.p>

      <motion.div
        variants={variant}
        initial="hidden"
        animate={controls}
        className="mt-14 w-full max-w-3xl space-y-6"
      >
        <h3 className="text-2xl font-semibold text-emerald-400">Education</h3>

        <ul className="space-y-4">
          <li className="bg-slate-800 p-4 rounded-lg">
            <strong>B.E. CSE — CMR Institute of Technology</strong>
            <p className="text-sm text-slate-300">8.82 CGPA • Bangalore • 2026 (Pursuing)</p>
          </li>

          <li className="bg-slate-800 p-4 rounded-lg">
            <strong>PUC — Nucleus Institute of Excellence</strong>
            <p className="text-sm text-slate-300">93.2% • J&K • 2022</p>
          </li>

          <li className="bg-slate-800 p-4 rounded-lg">
            <strong>Higher Secondary — Hanfia Waqf HSS</strong>
            <p className="text-sm text-slate-300">85.4% • J&K • 2020</p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
