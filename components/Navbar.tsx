import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import MobileSidebar from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center p-4">
          <MobileSidebar />
          <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
