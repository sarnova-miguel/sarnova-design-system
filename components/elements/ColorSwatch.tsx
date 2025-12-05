"use client";

import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";

/**
 * Calculates the relative luminance of a color
 * Based on WCAG 2.1 definition: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
const getLuminance = (hex: string): number => {
  const rgb = hex
    .replace("#", "")
    .match(/.{2}/g)
    ?.map((c) => {
      const val = parseInt(c, 16) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
  if (!rgb || rgb.length < 3) return 0;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

/**
 * Determines if text should be light or dark based on background color
 * Uses WCAG 2.1 contrast ratio guidelines
 */
const getContrastTextColor = (bgHex: string): string => {
  const luminance = getLuminance(bgHex);
  // Use white text on dark backgrounds, black on light backgrounds
  // Threshold of 0.179 ensures minimum 4.5:1 contrast ratio (WCAG AA)
  return luminance > 0.179 ? "#000000" : "#FFFFFF";
};

interface ColorSwatchProps {
  hex: string;
  name: string;
  className?: string;
}

const ColorSwatch = ({ hex, name, className }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy hex code:", err);
    }
  }, [hex]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      // WCAG 2.1.1: Keyboard accessible - respond to Enter and Space
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleCopy();
      }
    },
    [handleCopy]
  );

  const textColor = getContrastTextColor(hex);

  return (
    <div className="min-w-[100px] flex flex-col items-center gap-2">
      <button
        type="button"
        className={cn(
          "w-16 h-16 rounded-sm border border-gray-500 cursor-pointer flex justify-center items-center text-sm transition-all hover:scale-105",
          // WCAG 2.4.7: Focus Visible - clear focus indicator
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          className
        )}
        style={{
          backgroundColor: hex,
          color: textColor, // WCAG 1.4.3: Contrast (Minimum)
        }}
        onClick={handleCopy}
        onKeyDown={handleKeyDown}
        aria-label={`Copy color ${name} with hex value ${hex} to clipboard`}
      >
        <span aria-hidden="true">{copied ? "Copied!" : hex}</span>

        {/* WCAG 4.1.3: Status Messages - Live region for screen reader announcements */}
        <span
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {copied ? `${name} hex color ${hex} copied to clipboard` : ""}
        </span>
      </button>

      {/* Color name label - associated with the button via context */}
      <p className="text-sm leading-none" id={`color-name-${hex.replace("#", "")}`}>
        {name}
      </p>
    </div>
  );
};

export default ColorSwatch;
