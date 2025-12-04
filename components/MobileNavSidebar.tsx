"use client";

import React, { useState } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import NavSidebarContent from "./NavSidebarContent";

const MobileNavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="fixed top-4 right-4 z-20">
          {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </DrawerTrigger>
        <DrawerContent>
          <NavSidebarContent className="bg-white" onLinkClick={handleLinkClick} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavSidebar;
