import React from "react";
import { ModeToggle } from "@/components/theme-button";

const navbar = () => {
  return (
    <div className="relative z-50">
      <nav className="absolute top-0 left-0 w-full bg-transparent py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex-1"></div>
          <div className="flex-none">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
