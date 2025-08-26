"use client";

import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent"
        >
          Iqbal Hossain
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
