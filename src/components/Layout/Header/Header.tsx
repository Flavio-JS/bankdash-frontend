"use client";

import { InputIcon } from "@/components/InputIcon/InputIcon";
import { SideBarMenu } from "@/components/SideBarMenu/SideBarMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellDot, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pathToTitleMap: Record<string, string> = {
  dashboard: "Dashboard",
  transactions: "Transactions",
  accounts: "Accounts",
  investments: "Investments",
  "credit-cards": "Credit Cards",
  loans: "Loans",
  services: "Services",
  privileges: "My Privileges",
  settings: "Settings",
};

export const Header = () => {
  const pathname = usePathname();

  const titleKey = Object.keys(pathToTitleMap).find((key) =>
    pathname.includes(key)
  );

  const title = titleKey ? pathToTitleMap[titleKey] : "";

  return (
    <div className="flex flex-col gap-5 p-5 lg:gap-7">
      <div className="flex justify-between gap-7">
        <div className="flex h-full items-center lg:hidden">
          <SideBarMenu />
        </div>

        <div className="flex items-center">
          <h1 className="text-xl font-bold text-[#343C6A] lg:text-3xl">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-7">
          <InputIcon
            className="hidden lg:flex"
            icon="Search"
            iconPosition="left"
            iconColor="#718EBF"
            placeholder="Search for something"
          />
          <div className="hidden rounded-full bg-[#F5F7FA] p-3 hover:cursor-pointer lg:block">
            <Link href="/settings" aria-label="Settings">
              <Settings color="#718EBF" />
            </Link>
          </div>
          <div className="hidden rounded-full bg-[#F5F7FA] p-3 hover:cursor-pointer lg:block">
            <BellDot color="#FE5C73" />
          </div>
          <Avatar className="h-9 w-9 lg:h-16 lg:w-16">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="avatar image"
            />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <InputIcon
        className="flex w-full lg:hidden"
        icon="Search"
        iconPosition="left"
        iconColor="#718EBF"
        placeholder="Search for something"
      />
    </div>
  );
};
