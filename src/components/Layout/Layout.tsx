import { type ReactNode } from "react";
import { Header } from "./Header/Header";
import { SideBar } from "@/components/Layout/SideBar/SideBar";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="flex flex-1">
        <SideBar />
        <div className="flex max-h-dvh w-full flex-col">
          <Header />
          <div className="h-full overflow-y-scroll bg-[#F5F7FA]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
