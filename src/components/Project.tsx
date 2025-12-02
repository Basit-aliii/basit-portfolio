"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const projects = [
    {
      title: "Phone Directory Management System",
      tech: "Python, Tkinter, MySQL",
      desc: "A system to store, manage and organize contacts with features to add, update, delete and search efficiently."
    },
    {
      title: "Dynamic Website for Printing Company",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      desc: "A business website with responsive UI, service showcase, and integrated quote/contact features."
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-20 bg-slate-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-emerald-400 text-center mb-14"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:shadow-emerald-500/20 transition"
            onClick={() => setSelected(selected === index ? null : index)}
          >
            <h3 className="text-2xl font-semibold text-emerald-400">{project.title}</h3>
            <p className="text-sm mt-2 text-slate-300">{project.tech}</p>

            {selected === index && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-slate-200 leading-relaxed"
              >
                {project.desc}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
