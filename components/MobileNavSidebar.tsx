"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import NavSidebarContent from "./NavSidebarContent";

const MobileNavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="absolute top-0 right-0">
          {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </DrawerTrigger>
        <DrawerContent>
          <NavSidebarContent className="bg-white" />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavSidebar;
