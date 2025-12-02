"use client";

import { motion } from "framer-motion";

export default function BackgroundBeams() {
  const circles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0.5,
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
          }}
          animate={{
            opacity: Math.random() * 0.6 + 0.2,
            scale: Math.random() * 1.5 + 0.5,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl"
        />
      ))}
    </div>
  );
}
