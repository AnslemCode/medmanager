"use client";

import { useTheme } from "next-themes";
import { FaUserDoctor } from "react-icons/fa6";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./toggle-mode";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-gray-900 border-b" : "bg-white";
  return (
    <div
      className={`relative w-full h-[94px] ${bgColor} overflow-hidden flex items-center justify-between px-6`}
    >
      {/* Header with title and icon */}
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-11 rounded-lg bg-primary flex items-center justify-center">
          <FaUserDoctor className="text-white text-xl" />
        </div>
        <h1 className="font-semibold text-2xl font-poppins">
          Med<span className="font-normal">Manager</span>
        </h1>
      </header>

      {/* SearchInput */}
      <SearchInput />

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button className="h-10">
          <FaPlus className="text-lg" />
          <span>New Patient</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
