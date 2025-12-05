"use client";

import { useBrand } from "@/context/BrandContext";
import { useState, useCallback, useRef, KeyboardEvent, RefObject } from "react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

type BrandValue = "all" | "bt" | "ta" | "cp" | "dt";

interface BrandOption {
  value: BrandValue;
  label: string;
  imageSrc?: string;
}

const brandOptions: BrandOption[] = [
  { value: "all", label: "All Brands" },
  {
    value: "bt",
    label: "Bound Tree",
    imageSrc:
      "https://www.boundtree.com/medias/boundtree-logo.png?context=bWFzdGVyfGltYWdlc3w2NzA5fGltYWdlL3BuZ3xpbWFnZXMvaGMyL2hiMi84OTk0NzI1MDAzMjk0LnBuZ3w1NWI4ZTc3NTliZDgxZDAyOTVkNTZmYWNjZDUxMjNkNGQ4N2Y0MDM2ODA5YWUzYmE1YTc5NjJmZWFhMGU4NmFh",
  },
  {
    value: "ta",
    label: "Tri-anim",
    imageSrc:
      "https://www.tri-anim.com/ths/medias/TRIANIM-Header-logo.png?context=bWFzdGVyfGltYWdlc3wzODEzfGltYWdlL3BuZ3xpbWFnZXMvaDEyL2hhNS84OTk1MDk3MzEzMzEwLnBuZ3w5NzE1NWNlOTBiYzUyNjM3Mjk0MTE1ZDgxMmNhNzRhNjgzMzVmYjIyMWE2NGMwN2YyMDNmNTU0NDMxMDlhOWFi",
  },
  {
    value: "cp",
    label: "Cardio Partners",
    imageSrc: "https://www.cardiopartners.com/assets/images/cp-logo.svg",
  },
  {
    value: "dt",
    label: "Digitech",
    imageSrc:
      "https://digitechcomputer.com/wp-content/uploads/2017/08/digitech-logo-252.png",
  },
];

const HeaderBrandFilter = () => {
  const { brand, updateBrand } = useBrand();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const desktopButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLButtonElement>,
      index: number,
      refs: RefObject<(HTMLButtonElement | null)[]>
    ) => {
      const buttons = refs.current.filter(Boolean);
      let nextIndex: number | null = null;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          nextIndex = (index + 1) % buttons.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          nextIndex = (index - 1 + buttons.length) % buttons.length;
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = buttons.length - 1;
          break;
      }

      if (nextIndex !== null) {
        buttons[nextIndex]?.focus();
      }
    },
    []
  );

  const handleBrandSelect = useCallback(
    (value: BrandValue, closeOnSelect = false) => {
      updateBrand(value);
      if (closeOnSelect) {
        setIsOpen(false);
      }
    },
    [updateBrand]
  );

  const getButtonClassName = (value: BrandValue, extraClasses = "") => {
    return `brand-filter-btn ${value} ${extraClasses} ${brand === value ? "active" : ""}`.trim();
  };

  const setButtonRef = useCallback(
    (
      el: HTMLButtonElement | null,
      index: number,
      refs: RefObject<(HTMLButtonElement | null)[]>
    ) => {
      refs.current[index] = el;
    },
    []
  );

  const BrandButton = ({
    option,
    index,
    refs,
    closeOnSelect,
    extraClasses = "",
  }: {
    option: BrandOption;
    index: number;
    refs: RefObject<(HTMLButtonElement | null)[]>;
    closeOnSelect: boolean;
    extraClasses?: string;
  }) => {
    const isSelected = brand === option.value;

    return (
      <button
        ref={(el) => setButtonRef(el, index, refs)}
        className={getButtonClassName(option.value, extraClasses)}
        type="button"
        role="radio"
        aria-checked={isSelected}
        aria-label={`Filter by ${option.label}`}
        tabIndex={isSelected ? 0 : -1}
        onClick={() => handleBrandSelect(option.value, closeOnSelect)}
        onKeyDown={(e) => handleKeyDown(e, index, refs)}
      >
        {option.imageSrc ? (
          <Image
            src={option.imageSrc}
            alt={option.label}
            width={200}
            height={60}
            aria-hidden="true"
          />
        ) : (
          <span>All</span>
        )}
        <span className="sr-only">{option.label}</span>
      </button>
    );
  };

  return (
    <nav aria-label="Brand filter navigation">
      {/* Mobile view */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger
            aria-expanded={isOpen}
            aria-controls="brand-filter-mobile-content"
            aria-label={`Filter by Brand. ${isOpen ? "Collapse menu" : "Expand menu"}`}
          >
            <span className="text-sm mb-2 flex flex-row gap-2">
              Filter by Brand:{" "}
              <ChevronDown
                className={`transition-all duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent id="brand-filter-mobile-content">
            <div
              className="flex flex-col sm:grid sm:grid-cols-2 items-center gap-2 sm:gap-4"
              role="radiogroup"
              aria-label="Select brand to filter"
            >
              {brandOptions.map((option, index) => (
                <BrandButton
                  key={option.value}
                  option={option}
                  index={index}
                  refs={buttonRefs}
                  closeOnSelect={true}
                  extraClasses={
                    option.value === "all" || option.value === "ta" || option.value === "dt"
                      ? "sm:justify-self-end"
                      : ""
                  }
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <p id="brand-filter-label" className="text-sm mb-2 text-center">
          Filter by Brand:
        </p>
        <div
          className="flex flex-wrap justify-center items-center gap-6"
          role="radiogroup"
          aria-labelledby="brand-filter-label"
        >
          {brandOptions.map((option, index) => (
            <BrandButton
              key={option.value}
              option={option}
              index={index}
              refs={desktopButtonRefs}
              closeOnSelect={false}
              extraClasses={
                option.value === "all" || option.value === "ta" || option.value === "dt"
                  ? "md:justify-self-end"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeaderBrandFilter;
