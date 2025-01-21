import { useTheme } from "next-themes";
import React from "react";
import PaginationSelection from "./paginationSelection";
import { Button } from "../ui/button";
import { BiFirstPage } from "react-icons/bi";
import { GrFormPrevious } from "react-icons/gr";

const PaginationArea = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-black border-t" : "bg-white";
  return (
    <div
      className={`relative border w-full h-[84px] overflow-hidden flex justify-between items-center px-6 ${bgColor} poppins`}
    >
      <PaginationSelection />
      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-500">Page 1 of 3</span>
        <div className="flex items-center justify-end space-x-2">
          <Button variant={"outline"} className="size-9 w-12" size={"sm"}>
            <BiFirstPage />
          </Button>
          <Button variant={"outline"} className="size-9 w-12" size={"sm"}>
            <GrFormPrevious />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationArea;
