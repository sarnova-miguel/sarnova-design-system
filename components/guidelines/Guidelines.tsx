import React from "react";
import SectionHeader from "@/components/SectionHeader";
import TechStackDocs from "./TechStackDocs";
import BestPractices from "./BestPractices";
import AccessibilitySection from "./AccessibilitySection";
import AI from "./AI";

const Guidelines = () => {
  return (
    <section className="mb-12 md:mb-16">
      <SectionHeader anchor="guidelines">Guidelines</SectionHeader>
      <TechStackDocs />
      <BestPractices />
      <AccessibilitySection />
      <AI />
    </section>
  );
};

export default Guidelines;
