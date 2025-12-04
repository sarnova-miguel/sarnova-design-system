import React from "react";
import SectionHeader from "../SectionHeader";
import BreadcrumbSection from "./BreadcrumbSection";
import ButtonSection from "./ButtonSection";

const ComponentsSection = () => {
  return (
    <section className="section">
      <SectionHeader anchor="components">Components</SectionHeader>
      <BreadcrumbSection />
      <ButtonSection />
    </section>
  );
};

export default ComponentsSection;
