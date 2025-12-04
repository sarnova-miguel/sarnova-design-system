import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const NavSidebarContent = ({
  className,
  onLinkClick
}: {
  className?: string;
  onLinkClick?: () => void;
}) => {
  return (
    <aside className={cn("nav-sidebar", className)}>
      <Accordion type="single" collapsible className="flex flex-col">
        <AccordionItem value="item-1">
          <AccordionTrigger>Guidelines</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Link href={"#docs"} onClick={onLinkClick}>Tech Stack Docs</Link>
              <Link href={"#best-practices"} onClick={onLinkClick}>Best Practices</Link>
              <Link href={"#accessibility"} onClick={onLinkClick}>Accessibility</Link>
              <Link href={"#ai"} onClick={onLinkClick}>AI</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Elements</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Link href={"#colors"} onClick={onLinkClick}>Colors</Link>
              <Link href={"#icons"} onClick={onLinkClick}>Icons</Link>
              <Link href={"#spacing"} onClick={onLinkClick}>Spacing</Link>
              <Link href={"#typography"} onClick={onLinkClick}>Typography</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Components</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Link href={"#breadcrumb"} onClick={onLinkClick}>Breadcrumb</Link>
              <Link href={"#button"} onClick={onLinkClick}>Button</Link>
              <Link href={"#carousel"} onClick={onLinkClick}>Carousel</Link>
              <Link href={"#checkbox"} onClick={onLinkClick}>Checkbox</Link>
              <Link href={"#dropdown"} onClick={onLinkClick}>Dropdown</Link>
              <Link href={"#form"} onClick={onLinkClick}>Form</Link>
              <Link href={"#link"} onClick={onLinkClick}>Link</Link>
              <Link href={"#list"} onClick={onLinkClick}>List</Link>
              <Link href={"#modal"} onClick={onLinkClick}>Modal</Link>
              <Link href={"#search"} onClick={onLinkClick}>Search</Link>
              <Link href={"#tabs"} onClick={onLinkClick}>Tabs</Link>
              <Link href={"#toggle"} onClick={onLinkClick}>Toggle</Link>
              <Link href={"#tooltip"} onClick={onLinkClick}>Tooltip</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default NavSidebarContent;
