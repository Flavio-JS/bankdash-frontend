import { Icons } from "@/components/Icons/Icons";

const ValidIcons = {
  BusinessIcon: Icons.BusinessIcon,
  PaypalIcon: Icons.PaypalIcon,
};
export type CardTransactionProps = {
  icon: keyof typeof ValidIcons;
  title: string;
  subTitle: string;
};

export const CardTransaction = ({
  icon,
  title,
  subTitle,
}: CardTransactionProps) => {
  const Icon = Icons[icon];
  return (
    <div className="flex justify-between gap-3 bg-[#F5F7FA] p-3">
      <div>
        <Icon />
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
