"use client";

import { ModeToggle } from "./mode-toggle";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className=" p-4 md:p-6 items-center dark:bg-slate-900 bg-slate-50">
      <div className="flex justify-between container mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center space-x-2 text-slate-700  dark:text-slate-200">
          PORTFOLIO.
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </header>
  );
};
