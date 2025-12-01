"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const HeaderBrandFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger>
            <p className="text-sm mb-2 flex flex-row gap-2">
              Filter by Brand:{" "}
              <ChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
            </p>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col sm:grid sm:grid-cols-2 items-center gap-2 sm:gap-4">
              <button className="brand-filter-btn bt sm:justify-self-end" type="button">
                <Image
                  src={
                    "https://www.boundtree.com/medias/boundtree-logo.png?context=bWFzdGVyfGltYWdlc3w2NzA5fGltYWdlL3BuZ3xpbWFnZXMvaGMyL2hiMi84OTk0NzI1MDAzMjk0LnBuZ3w1NWI4ZTc3NTliZDgxZDAyOTVkNTZmYWNjZDUxMjNkNGQ4N2Y0MDM2ODA5YWUzYmE1YTc5NjJmZWFhMGU4NmFh"
                  }
                  alt="Bound Tree"
                  width={200}
                  height={60}
                />
              </button>
              <button className="brand-filter-btn ta" type="button">
                <Image
                  src={
                    "https://www.tri-anim.com/ths/medias/TRIANIM-Header-logo.png?context=bWFzdGVyfGltYWdlc3wzODEzfGltYWdlL3BuZ3xpbWFnZXMvaDEyL2hhNS84OTk1MDk3MzEzMzEwLnBuZ3w5NzE1NWNlOTBiYzUyNjM3Mjk0MTE1ZDgxMmNhNzRhNjgzMzVmYjIyMWE2NGMwN2YyMDNmNTU0NDMxMDlhOWFi"
                  }
                  alt="Tri-anim"
                  width={200}
                  height={60}
                />
              </button>
              <button className="brand-filter-btn cp sm:justify-self-end" type="button">
                <Image
                  src={
                    "https://www.cardiopartners.com/assets/images/cp-logo.svg"
                  }
                  alt="Cardio Partners"
                  width={200}
                  height={60}
                />
              </button>
              <button className="brand-filter-btn dt" type="button">
                <Image
                  src={
                    "https://digitechcomputer.com/wp-content/uploads/2017/08/digitech-logo-252.png"
                  }
                  alt="Digitech"
                  width={200}
                  height={60}
                />
              </button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="hidden md:block">
        <p className="text-sm mb-2 text-center">Filter by Brand:</p>
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-6">
          <button className="brand-filter-btn bt md:justify-self-end" type="button">
            <Image
              src={
                "https://www.boundtree.com/medias/boundtree-logo.png?context=bWFzdGVyfGltYWdlc3w2NzA5fGltYWdlL3BuZ3xpbWFnZXMvaGMyL2hiMi84OTk0NzI1MDAzMjk0LnBuZ3w1NWI4ZTc3NTliZDgxZDAyOTVkNTZmYWNjZDUxMjNkNGQ4N2Y0MDM2ODA5YWUzYmE1YTc5NjJmZWFhMGU4NmFh"
              }
              alt="Bound Tree"
              width={200}
              height={60}
            />
          </button>
          <button className="brand-filter-btn ta" type="button">
            <Image
              src={
                "https://www.tri-anim.com/ths/medias/TRIANIM-Header-logo.png?context=bWFzdGVyfGltYWdlc3wzODEzfGltYWdlL3BuZ3xpbWFnZXMvaDEyL2hhNS84OTk1MDk3MzEzMzEwLnBuZ3w5NzE1NWNlOTBiYzUyNjM3Mjk0MTE1ZDgxMmNhNzRhNjgzMzVmYjIyMWE2NGMwN2YyMDNmNTU0NDMxMDlhOWFi"
              }
              alt="Tri-anim"
              width={200}
              height={60}
            />
          </button>
          <button className="brand-filter-btn cp md:justify-self-end" type="button">
            <Image
              src={"https://www.cardiopartners.com/assets/images/cp-logo.svg"}
              alt="Cardio Partners"
              width={200}
              height={60}
            />
          </button>
          <button className="brand-filter-btn dt" type="button">
            <Image
              src={
                "https://digitechcomputer.com/wp-content/uploads/2017/08/digitech-logo-252.png"
              }
              alt="Digitech"
              width={200}
              height={60}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderBrandFilter;
