import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const NavSidebarContent = ({ className }: { className?: string }) => {
  return (
    <aside className={cn("nav-sidebar", className)}>
      <Accordion type="multiple" className="flex flex-col">
        <AccordionItem value="item-1">
          <AccordionTrigger>Guidelines</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Link href={"#docs"}>Tech Stack Docs</Link>
              <Link href={"#best-practices"}>Best Practices</Link>
              <Link href={"#accessibility"}>Accessibility</Link>
              <Link href={"#ai"}>AI</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Elements</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Link href={"#colors"}>Colors</Link>
              <Link href={"#icons"}>Icons</Link>
              <Link href={"#spacing"}>Spacing</Link>
              <Link href={"#typography"}>Typography</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Components</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Link href={"#breadcrumb"}>Breadcrumb</Link>
              <Link href={"#button"}>Button</Link>
              <Link href={"#carousel"}>Carousel</Link>
              <Link href={"#checkbox"}>Checkbox</Link>
              <Link href={"#dropdown"}>Dropdown</Link>
              <Link href={"#form"}>Form</Link>
              <Link href={"#link"}>Link</Link>
              <Link href={"#list"}>List</Link>
              <Link href={"#modal"}>Modal</Link>
              <Link href={"#search"}>Search</Link>
              <Link href={"#tabs"}>Tabs</Link>
              <Link href={"#toggle"}>Toggle</Link>
              <Link href={"#tooltip"}>Tooltip</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default NavSidebarContent;
