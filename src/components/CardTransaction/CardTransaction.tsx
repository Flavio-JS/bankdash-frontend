import { type Icons } from "@/components/Icons/Icons";
import { BriefcaseBusinessIcon } from "lucide-react";

export type CardTransactionProps = {
  icon: keyof typeof Icons;
  title: string;
  subTitle: string;
};

export const CardTransaction = ({ title, subTitle }: CardTransactionProps) => {
  return (
    <div className="flex justify-between gap-3 bg-[#F5F7FA] p-3">
      <div>
        <BriefcaseBusinessIcon />
      </div>
      <div className="flex flex-col">
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
      <div>
        <span>-850</span>
      </div>
    </div>
  );
};
