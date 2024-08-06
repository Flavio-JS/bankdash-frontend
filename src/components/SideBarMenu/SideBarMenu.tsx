import { SideBarMobile } from "@/components/Layout/SideBar/SideBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function SideBarMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2">
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-0">
        <SideBarMobile />
      </SheetContent>
    </Sheet>
  );
}
