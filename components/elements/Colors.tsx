"use client";

import { useBrand } from "@/context/BrandContext";
import SectionSubHeader from "../SectionSubHeader";
import SectionDesc from "../SectionDesc";
import BTBadge from "../BTBadge";
import TABadge from "../TABadge";
import CPBadge from "../CPBadge";
import DTBadge from "../DTBadge";
import ABBadge from "../ABBadge";
import { Palette } from "lucide-react";
import ColorSwatch from "./ColorSwatch";

const Colors = () => {
  const { brand } = useBrand();

  return (
    <div className="mb-10">
      <SectionSubHeader anchor="colors" className="flex items-center gap-2">
        <Palette size={32} /> Colors
      </SectionSubHeader>
      <SectionDesc>Primary and secondary colors per brand</SectionDesc>
      {(brand === "all" ||
        brand === "bt" ||
        brand === "ta" ||
        brand === "cp" ||
        brand === "dt") && (
        <div className="mb-6">
          <ABBadge />
          <div className="flex flex-wrap items-center gap-8 md:gap-y-10">
            <ColorSwatch hex="#FFFFFF" name="White" />
            <ColorSwatch hex="#000000" name="Black" className="text-white" />
          </div>
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
          <SectionDesc className="font-semibold">Heartsmart</SectionDesc>
          <div className="flex flex-wrap items-center gap-8 md:gap-y-10">
            <ColorSwatch hex="#4B4C4F" name="Dark Gray" />
            <ColorSwatch hex="#D9D9D9" name="Med Gray" />
            <ColorSwatch hex="#E1E1E1" name="Light Gray" />
            <ColorSwatch hex="#E00034" name="Red" />
            <ColorSwatch hex="#FF9F1A" name="Orange" />
            <ColorSwatch hex="#FEDEB1" name="Light Orange" />
            <ColorSwatch hex="#FDF5E9" name="Lighter Orange" />
            <ColorSwatch hex="#FFE488" name="Yellow" />
            <ColorSwatch hex="#FFF7DB" name="Light Yellow" />
            <ColorSwatch hex="#D7F171" name="Green" />
            <ColorSwatch hex="#F3FBD4" name="Light Green" />
            <ColorSwatch hex="#067BC2" name="Blue" />
            <ColorSwatch hex="#9CDAE8" name="Light Blue" />
            <ColorSwatch hex="#E1F4F8" name="Lighter Blue" />
            <ColorSwatch hex="#F5FBFD" name="Lightest Blue" />
            <ColorSwatch hex="#9993D6" name="Purple" />
            <ColorSwatch hex="#E0DFF3" name="Light Purple" />
            <ColorSwatch hex="#F5F4FB" name="Lighest Purple" />
          </div>
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
