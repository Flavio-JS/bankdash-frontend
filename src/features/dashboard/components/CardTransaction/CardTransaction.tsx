import { Icons } from "@/features/dashboard/components/Icons/Icons";
import { cn } from "@/lib/utils";

const ValidIcons = {
  BusinessIcon: Icons.BusinessIcon,
  PaypalIcon: Icons.PaypalIcon,
  PaymentIcon: Icons.PaymentIcon,
};
export type CardTransactionProps = {
  icon: keyof typeof ValidIcons;
  title: string;
  date: string;
  currency: number;
};

export const CardTransaction = ({
  icon,
  title,
  date,
  currency,
}: CardTransactionProps) => {
  const Icon = Icons[icon];
  return (
    <div className="flex w-full items-center justify-between gap-3 p-3">
      <div className="flex gap-3">
        <div>
          <Icon />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[#232323] lg:text-base">
            {title}
          </span>
          <span className="text-xs text-[#718EBF] lg:text-sm">{date}</span>
        </div>
      </div>

      <div>
        <span
          className={cn(
            currency < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]",
            "text-sm lg:text-base"
          )}
        >
          {currency > 0 && "+"}
          {currency.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    </div>
  );
};
