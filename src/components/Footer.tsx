"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-center py-8 border-t border-slate-800">
      <p className="text-slate-500 text-sm tracking-wide">
        © {new Date().getFullYear()} Basit Ali. All rights reserved.
      </p>
    </footer>
  );
}
