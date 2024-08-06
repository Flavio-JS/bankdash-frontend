import {
  CreditCardComponent,
  type CreditCardComponentProps,
} from "@/components/CreditCardComponent/CreditCardComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const creditCards: CreditCardComponentProps[] = [
  {
    balance: "$5,756",
    chipIcon: "VisaCardIcon",
    cardHolder: "Eddy CusumaCusu",
    validThru: "12/22",
    finalDigits: "1234",
    cardStyle: "slate",
  },
  {
    balance: "$5,756",
    chipIcon: "VisaCardIcon",
    cardHolder: "Eddy CusumaCusu",
    validThru: "12/22",
    finalDigits: "1234",
    cardStyle: "cyan",
  },
  {
    balance: "$5,756",
    chipIcon: "VisaCardIcon",
    cardHolder: "Eddy CusumaCusu",
    validThru: "12/22",
    finalDigits: "1234",
    cardStyle: "lime",
  },
];

export const CreditCardSession = () => {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-4 text-[#343C6A]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">My Cards</h2>
        <Link href="/credit-cards" className="text-base font-semibold">
          See All
        </Link>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="mb-3 flex gap-6">
          {creditCards.map((creditCard) => (
            <CreditCardComponent key={creditCard.cardStyle} {...creditCard} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
