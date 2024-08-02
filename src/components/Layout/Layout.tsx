"use client";

import { type ReactNode } from "react";
import { Header } from "./Header/Header";
import Link from "next/link";
import { Icons } from "@/components/Icons/Icons";
import { usePathname } from "next/navigation";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="flex flex-1">
        <aside className="hidden w-[230px] border-r lg:flex lg:flex-col">
          <div className="flex h-[104px] items-center gap-2 p-8">
            <Icons.BankDashIcon />
            <span className="text-2xl font-bold">BankDash.</span>
          </div>
          <nav>
            <ul className="p-8">
              <li className="flex gap-6">
                <Icons.HomeIcon
                  fill={pathname.includes("/dashboard") ? "#2D60FF" : undefined}
                />
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className="flex gap-6">
                <Icons.TransactionsIcon
                  fill={
                    pathname.includes("/transactions") ? "#2D60FF" : undefined
                  }
                />
                <Link href="/transactions">Transactions</Link>
              </li>
              <li>
                <Link href="/accounts">Accounts</Link>
              </li>
              <li>
                <Link href="/investments">Investments</Link>
              </li>
              <li>
                <Link href="/credit-cards">Credit Cards</Link>
              </li>
              <li>
                <Link href="/loans">Loans</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/privileges">My Privileges</Link>
              </li>
              <li>
                <Link href="/settings">Setting</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex w-full flex-col">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};
