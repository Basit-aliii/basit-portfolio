"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const sections = ["home", "about", "projects", "skills", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9998] transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center gap-10 py-4 font-semibold text-slate-200">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`capitalize transition ${
              activeSection === section
                ? "text-emerald-400"
                : "hover:text-emerald-400"
            }`}
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
