import { Icons } from "@/features/dashboard/components/Icons/Icons";
import { cn } from "@/lib/utils";

const CardIcons = {
  MasterCardIcon: Icons.MasterCardIcon,
  VisaCardIcon: Icons.VisaCardIcon,
};

type CardIconKeys = keyof typeof CardIcons;

export const getRandomCardIcon = (): CardIconKeys => {
  const iconKeys = Object.keys(CardIcons) as CardIconKeys[];

  const randomIndex = Math.floor(Math.random() * iconKeys.length);

  return iconKeys[randomIndex];
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

export const cardStyles: CreditCardComponentProps["cardStyle"][] = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "purple",
];

export const getRandomCardStyle = (): CreditCardComponentProps["cardStyle"] => {
  const randomIndex = Math.floor(Math.random() * cardStyles.length);

  return cardStyles[randomIndex];
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
        return "from-slate-950 to-slate-800";
      case "gray":
        return "from-gray-800 to-gray-500";
      case "zinc":
        return "from-zinc-800 to-zinc-500";
      case "neutral":
        return "from-neutral-800 to-neutral-500";
      case "stone":
        return "from-stone-800 to-stone-500";
      case "red":
        return "from-red-800 to-red-500";
      case "orange":
        return "from-orange-800 to-orange-500";
      case "amber":
        return "from-amber-800 to-amber-500";
      case "yellow":
        return "from-yellow-800 to-yellow-500";
      case "lime":
        return "from-lime-800 to-lime-500";
      case "green":
        return "from-green-800 to-green-500";
      case "emerald":
        return "from-emerald-800 to-emerald-500";
      case "teal":
        return "from-teal-800 to-teal-500";
      case "cyan":
        return "from-cyan-800 to-cyan-500";
      case "sky":
        return "from-sky-800 to-sky-500";
      case "blue":
        return "from-blue-800 to-blue-500";
      case "indigo":
        return "from-indigo-800 to-indigo-500";
      case "violet":
        return "from-violet-800 to-violet-500";
      case "purple":
        return "from-purple-800 to-purple-500";
      case "fuchsia":
        return "from-fuchsia-800 to-fuchsia-500";
      case "pink":
        return "from-pink-800 to-pink-500";
      case "purple":
        return "from-purple-800 to-purple-500";
    }
  };

  return (
    <div
      className={cn(
        "flex h-[170px] w-[231px] flex-col justify-between rounded-2xl bg-gradient-to-tl text-white",
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
