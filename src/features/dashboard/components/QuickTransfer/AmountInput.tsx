"use client";

import { Icons } from "@/features/dashboard/components/Icons/Icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const AmountInput = () => {
  const [amount, setAmount] = useState<number | "">("");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");

    setAmount(
      numericValue === "" || numericValue === "00" ? "" : Number(numericValue)
    );
  };

  const formatAmount = (value: number | "") => {
    if (value === "") return "";
    return (value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="flex items-center justify-between gap-5">
      <span className="whitespace-nowrap text-xs text-[#718EBF]">
        Write Amount
      </span>
      <div className="flex w-full items-center justify-between gap-3 rounded-full bg-[#EDF1F7] pl-4">
        <input
          className="w-20 bg-transparent text-xs text-[#718EBF] focus-visible:outline-none lg:w-32 lg:text-base"
          type="text"
          name="amount"
          id="amount"
          placeholder="$0.00"
          value={formatAmount(amount)}
          onChange={handleAmountChange}
        />
        <button
          disabled={amount === ""}
          className={cn(
            "flex items-center justify-center gap-2 rounded-full px-5 py-3 text-white",
            amount === "" ? "bg-gray-500" : "bg-[#1814F3]"
          )}
        >
          <span className="text-xs lg:text-base">Send</span>
          <Icons.SendIcon />
        </button>
      </div>
    </div>
  );
};
