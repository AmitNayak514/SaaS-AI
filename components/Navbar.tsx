"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import MobileSidebar from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger className="w-full block">
          <div className="flex items-center p-4">
            <div className="">
              <MobileSidebar />
            </div>
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
