"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = ["Home", "Services", "Projects", "About", "Contact"];

export default function HamburgerMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="dark:bg-slate-900 bg-slate-50 pl-6"
        >
          <div className="flex flex-col gap-6 mt-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-red-400 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
