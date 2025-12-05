"use client";

import React, { useState, useCallback, useId } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import NavSidebarContent from "./NavSidebarContent";

const MobileNavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();
  const drawerTitleId = `${drawerId}-title`;
  const drawerDescriptionId = `${drawerId}-description`;

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <nav
      className="relative md:hidden"
      aria-label="Mobile navigation"
    >
      <Drawer direction="left" open={isOpen} onOpenChange={handleOpenChange}>
        <DrawerTrigger
          className="fixed top-4 right-4 z-20 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-expanded={isOpen}
          aria-controls={drawerId}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? (
            <PanelLeftClose aria-hidden="true" />
          ) : (
            <PanelLeftOpen aria-hidden="true" />
          )}
        </DrawerTrigger>
        <DrawerContent
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={drawerTitleId}
          aria-describedby={drawerDescriptionId}
        >
          {/* Visually hidden title and description for screen readers (WCAG 2.4.2, WAI-ARIA dialog pattern) */}
          <div className="sr-only">
            <DrawerTitle id={drawerTitleId}>
              Navigation Menu
            </DrawerTitle>
            <DrawerDescription id={drawerDescriptionId}>
              Main navigation menu with links to guidelines, elements, and components
            </DrawerDescription>
          </div>
          <NavSidebarContent className="bg-white" onLinkClick={handleLinkClick} />
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default MobileNavSidebar;
