"use client";

import SectionSubHeader from "../SectionSubHeader";
import SectionDesc from "../SectionDesc";
import { useBrand } from "@/context/BrandContext";
import ABBadge from "../ABBadge";
import BTBadge from "../BTBadge";
import CPBadge from "../CPBadge";
import DTBadge from "../DTBadge";
import TABadge from "../TABadge";

const BreadcrumbSection = () => {
  const { brand } = useBrand();

  return (
    <div className="mb-10">
      <SectionSubHeader anchor="breadcrumb">Breadcrumb</SectionSubHeader>
      <SectionDesc>
        Defines the hierarchy of the current page in a website
      </SectionDesc>
      {(brand === "all" ||
        brand === "bt" ||
        brand === "ta" ||
        brand === "cp" ||
        brand === "dt") && (
        <div className="mb-6">
          <ABBadge />
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

export default BreadcrumbSection;
