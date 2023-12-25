"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileSidebar = () => {
  return (
    <Button size={"icon"} variant="ghost" className="md:hidden">
      <Menu />
    </Button>
  );
};
export default MobileSidebar;
