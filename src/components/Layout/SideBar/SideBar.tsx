"use client";

import { Icons } from "@/features/dashboard/components/Icons/Icons";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavIconProps = {
  iconName: keyof typeof Icons;
  selected: boolean;
};

const NavIcon = ({ iconName, selected }: NavIconProps) => {
  const Icon = Icons[iconName];

  return (
    <>
      <Icon fill={selected ? "#2D60FF" : undefined} />
    </>
  );
};

type ListItemProps = {
  iconName: keyof typeof Icons;
  href: string;
  title: string;
};

const ListItem = ({ iconName, href, title }: ListItemProps) => {
  const pathname = usePathname();

  return (
    <li className="flex items-center justify-start gap-6">
      <NavIcon iconName="SelectedTabIcon" selected={pathname.includes(href)} />
      <NavIcon iconName={iconName} selected={pathname.includes(href)} />
      <Link
        href={href}
        style={{
          color: pathname.includes(href) ? "#2D60FF" : "#B1B1B1",
        }}
      >
        {title}
      </Link>
    </li>
  );
};

type MenuItem = {
  iconName: keyof typeof Icons;
  href: string;
  title: string;
};

const menuItems: MenuItem[] = [
  { iconName: "DashboardIcon", href: "/dashboard", title: "Dashboard" },
  {
    iconName: "TransactionsIcon",
    href: "/transactions",
    title: "Transactions",
  },
  { iconName: "AccountsIcon", href: "/accounts", title: "Accounts" },
  { iconName: "InvestmentsIcon", href: "/investments", title: "Investments" },
  { iconName: "CreditCardsIcon", href: "/credit-cards", title: "Credit Cards" },
  { iconName: "LoansIcon", href: "/loans", title: "Loans" },
  { iconName: "ServicesIcon", href: "/services", title: "Services" },
  { iconName: "MyPrivilegesIcon", href: "/privileges", title: "My Privileges" },
  { iconName: "SettingIcon", href: "/settings", title: "Settings" },
];

export const SideBar = () => {
  return (
    <aside className="hidden w-[230px] border-r lg:flex lg:flex-col">
      <div className="flex h-[104px] items-center gap-2 p-8">
        <Icons.BankDashIcon />
        <span className="text-2xl font-bold text-[#343C6A]">BankDash.</span>
      </div>
      <nav>
        <ul className="p-8 pl-0">
          {menuItems.map((item) => (
            <ListItem
              key={item.href}
              iconName={item.iconName}
              href={item.href}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export const SideBarMobile = () => {
  return (
    <>
      <SheetHeader className="flex flex-row items-center justify-start gap-2 pl-6">
        <Icons.BankDashMobileIcon />
        <SheetTitle>BankDash.</SheetTitle>
      </SheetHeader>
      <aside className="flex w-[230px]">
        <ul className="p-8 pl-0">
          {menuItems.map((item) => (
            <ListItem
              key={item.href}
              iconName={item.iconName}
              href={item.href}
              title={item.title}
            />
          ))}
        </ul>
      </aside>
    </>
  );
};
