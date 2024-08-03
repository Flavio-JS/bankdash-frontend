import { Icons } from "@/components/Icons/Icons";
import { cn } from "@/lib/utils";

const CardIcons = {
  MasterCardIcon: Icons.MasterCardIcon,
  VisaCardIcon: Icons.VisaCardIcon,
};

export type CreditCardComponentProps = {
  balance: string;
  chipIcon: keyof typeof CardIcons;
  cardHolder: string;
  validThru: string;
  finalDigits: string;
  cardStyle:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "purple";
};

export const CreditCardComponent = ({
  balance,
  chipIcon,
  cardHolder,
  validThru,
  finalDigits,
  cardStyle,
}: CreditCardComponentProps) => {
  const CardFlag = CardIcons[chipIcon];

  const getMainStyle = () => {
    switch (cardStyle) {
      case "slate":
        return "bg-gradient-to-tl from-slate-950 to-slate-800 text-white";
      case "gray":
        return "bg-gradient-to-tl from-gray-800 to-gray-500 text-white";
      case "zinc":
        return "bg-gradient-to-tl from-zinc-800 to-zinc-500 text-white";
      case "neutral":
        return "bg-gradient-to-tl from-neutral-800 to-neutral-500 text-white";
      case "stone":
        return "bg-gradient-to-tl from-stone-800 to-stone-500 text-white";
      case "red":
        return "bg-gradient-to-tl from-red-800 to-red-500 text-white";
      case "orange":
        return "bg-gradient-to-tl from-orange-800 to-orange-500 text-white";
      case "amber":
        return "bg-gradient-to-tl from-amber-800 to-amber-500 text-white";
      case "yellow":
        return "bg-gradient-to-tl from-yellow-800 to-yellow-500 text-white";
      case "lime":
        return "bg-gradient-to-tl from-lime-800 to-lime-500 text-white";
      case "green":
        return "bg-gradient-to-tl from-green-800 to-green-500 text-white";
      case "emerald":
        return "bg-gradient-to-tl from-emerald-800 to-emerald-500 text-white";
      case "teal":
        return "bg-gradient-to-tl from-teal-800 to-teal-500 text-white";
      case "cyan":
        return "bg-gradient-to-tl from-cyan-800 to-cyan-500 text-white";
      case "sky":
        return "bg-gradient-to-tl from-sky-800 to-sky-500 text-white";
      case "blue":
        return "bg-gradient-to-tl from-blue-800 to-blue-500 text-white";
      case "indigo":
        return "bg-gradient-to-tl from-indigo-800 to-indigo-500 text-white";
      case "violet":
        return "bg-gradient-to-tl from-violet-800 to-violet-500 text-white";
      case "purple":
        return "bg-gradient-to-tl from-purple-800 to-purple-500 text-white";
      case "fuchsia":
        return "bg-gradient-to-tl from-fuchsia-800 to-fuchsia-500 text-white";
      case "pink":
        return "bg-gradient-to-tl from-pink-800 to-pink-500 text-white";
      case "purple":
        return "bg-gradient-to-tl from-purple-800 to-purple-500 text-white";
    }
  };

  return (
    <div
      className={cn(
        "flex h-[170px] w-[231px] flex-col justify-between rounded-2xl",
        getMainStyle()
      )}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs">Balance</span>
            <span className="text-base">{balance}</span>
          </div>
          <Icons.ChipCardIcon fill="black" />
        </div>
        <div className="flex justify-start gap-7">
          <div className="flex flex-col">
            <span className="text-[10px] opacity-70">CARD HOLDER</span>

            <span className="max-w-[108px] overflow-hidden truncate text-xs">
              {cardHolder}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] opacity-70">VALID THRU</span>
            <span className="text-xs">{validThru}</span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex justify-between rounded-b-2xl bg-gradient-to-t p-4"
        )}
      >
        <span>**** **** **** {finalDigits}</span>
        <CardFlag />
      </div>
    </div>
  );
};
