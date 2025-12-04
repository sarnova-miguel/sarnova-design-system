import React from "react";
import SectionHeader from "../SectionHeader";
import BreadcrumbSection from "./BreadcrumbSection";
import ButtonSection from "./ButtonSection";
import BadgeSection from "./BadgeSection";

const ComponentsSection = () => {
  return (
    <section className="section">
      <SectionHeader anchor="components">Components</SectionHeader>
      <BadgeSection />
      <BreadcrumbSection />
      <ButtonSection />
    </section>
  );
};

export default ComponentsSection;
