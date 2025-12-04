"use client";

import { useBrand } from "@/context/BrandContext";
import SectionSubHeader from "../SectionSubHeader";
import SectionDesc from "../SectionDesc";
import BTBadge from "../BTBadge";
import TABadge from "../TABadge";
import CPBadge from "../CPBadge";
import DTBadge from "../DTBadge";
import ABBadge from "../ABBadge";
import { Palette } from 'lucide-react';

const Colors = () => {
  const { brand } = useBrand();

  return (
    <div className="mb-10">
      <SectionSubHeader anchor="colors" className='flex items-center gap-2'><Palette size={32} /> Colors</SectionSubHeader>
      <SectionDesc>Primary and secondary colors per brand</SectionDesc>
      {(brand === "all" ||
        brand === "bt" ||
        brand === "ta" ||
        brand === "cp" ||
        brand === "dt") && (
        <div className="mb-6">
          <ABBadge/>
        </div>
      )}
      {(brand === "all" || brand === "bt") && (
        <div className="mb-6">
          <BTBadge />
        </div>
      )}
      {(brand === "all" || brand === "ta") && (
        <div className="mb-6">
          <TABadge />
        </div>
      )}
      {(brand === "all" || brand === "cp") && (
        <div className="mb-6">
          <CPBadge />
        </div>
      )}
      {(brand === "all" || brand === "dt") && (
        <div className="mb-6">
          <DTBadge />
        </div>
      )}
    </div>
  );
};

export default Colors;
