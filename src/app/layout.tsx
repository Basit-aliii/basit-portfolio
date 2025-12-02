import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

export const metadata: Metadata = {
  title: "Basit Ali | Portfolio",
  description: "Basit Ali - Aspiring Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
