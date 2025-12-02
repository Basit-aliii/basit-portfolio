"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Python" },
    { name: "Java" },
    { name: "MySQL" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "AWS" },
    { name: "Windows" },
    { name: "Ubuntu" }
  ];

  return (
    <section id="skills" className="min-h-screen px-6 md:px-20 py-20 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-emerald-400 text-center mb-14"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-slate-800 rounded-xl text-lg font-semibold text-slate-200 border border-slate-700"
            whileHover={{
              scale: 1.12,
              boxShadow: "0px 0px 15px rgba(16, 185, 129, 0.6)",
              color: "#10b981",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
