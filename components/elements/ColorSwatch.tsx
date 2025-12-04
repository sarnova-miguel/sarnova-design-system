"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const ColorSwatch = ({
  hex,
  name,
  className,
}: {
  hex: string;
  name: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy hex code:", err);
    }
  };

  return (
    <div className={"flex flex-col items-center gap-2"}>
      <div
        className={cn(
          "w-16 h-16 rounded-sm border border-gray-500 cursor-pointer flex justify-center items-center text-sm transition-all hover:scale-105",
          className
        )}
        style={{ backgroundColor: hex }}
        onClick={handleCopy}
        title="Click to copy hex code"
      >
        {copied ? "Copied!" : hex}
      </div>
      <p className="text-sm leading-none">{name}</p>
    </div>
  );
};

export default ColorSwatch;
