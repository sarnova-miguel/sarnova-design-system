import React from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionSubHeader from "@/components/SectionSubHeader";
import TechStackDocs from "./TechStackDocs";
import BestPractices from "./BestPractices";
import AccessibilitySection from "./AccessibilitySection";

const Guidelines = () => {
  return (
    <section>
      <SectionHeader anchor="guidelines">Guidelines</SectionHeader>
      <TechStackDocs />
      <BestPractices />
      <AccessibilitySection />
      <SectionSubHeader anchor="ai">AI</SectionSubHeader>
    </section>
  );
};

export default Guidelines;
