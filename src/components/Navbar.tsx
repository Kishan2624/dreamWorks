"use client";

import Link from "next/link";
import HamburgerMenu from "./Hamburger";

const navItems = ["Home", "Services", "Projects", "About", "Contact"];

export function Navbar() {
  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden justify-center items-center dark:bg-slate-800/50 bg-white/50 backdrop-blur-lg rounded-full py-3 px-8 shadow-xl md:flex gap-8 text-slate-700 dark:text-slate-200">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-red-600 transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <HamburgerMenu />
    </>
  );
}
