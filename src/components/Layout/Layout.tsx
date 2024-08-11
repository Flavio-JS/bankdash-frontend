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
          <div className="flex h-full flex-col overflow-y-scroll bg-[#F5F7FA] lg:max-w-[calc(100vw-230px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
