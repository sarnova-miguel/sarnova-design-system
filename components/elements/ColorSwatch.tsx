import { cn } from "@/lib/utils";
import React from "react";

const ColorSwatch = ({
  hex,
  name,
  className,
}: {
  hex: string;
  name: string;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col items-center gap-2"}>
      <div
        className={cn("w-16 h-16 rounded-sm border border-gray-500 cursor-pointer flex justify-center items-center text-sm", className)}
        style={{ backgroundColor: hex }}
      >
        {hex}
      </div>
      <p className="text-sm leading-none">{name}</p>
    </div>
  );
};

export default ColorSwatch;
