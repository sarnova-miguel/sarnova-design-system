"use client";

import { useBrand } from "@/context/BrandContext";
import SectionSubHeader from "../SectionSubHeader";
import SectionDesc from "../SectionDesc";
import BTBadge from "../BTBadge";
import TABadge from "../TABadge";
import CPBadge from "../CPBadge";
import DTBadge from "../DTBadge";

const Spacing = () => {
  const { brand } = useBrand();

  return (
    <div className="mb-10">
      <SectionSubHeader anchor="spacing">Spacing</SectionSubHeader>
      <SectionDesc>Spacing guidelines for all elements per brand</SectionDesc>
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

export default Spacing;
