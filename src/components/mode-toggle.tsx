"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group cursor-pointer p-2 rounded-full bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 backdrop-blur-lg hover:bg-white/50 shadow-xl"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5  group-hover:text-red-600 transition-colors duration-300" />
      ) : (
        <Moon className="w-5 h-5  group-hover:text-red-600 transition-colors duration-300" />
      )}
    </Button>
  );
}
