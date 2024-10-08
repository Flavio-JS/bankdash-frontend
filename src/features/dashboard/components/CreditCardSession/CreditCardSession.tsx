import {
  CreditCardComponent,
  type CreditCardComponentProps,
} from "@/features/dashboard/components/CreditCardComponent/CreditCardComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const creditCards: CreditCardComponentProps[] = [
  {
    balance: "$6,992.00",
    chipIcon: "MasterCardIcon",
    cardHolder: "Flávio Jerônimo da Silva Filho",
    validThru: "07/2033",
    finalDigits: "6711",
    cardStyle: "blue",
  },
  {
    balance: "$7,825.00",
    chipIcon: "MasterCardIcon",
    cardHolder: "Flávio Jerônimo da Silva Filho",
    validThru: "04/2031",
    finalDigits: "9811",
    cardStyle: "green",
  },
  {
    balance: "$2,798.00",
    chipIcon: "VisaCardIcon",
    cardHolder: "Flávio Jerônimo da Silva Filho",
    validThru: "12/2030",
    finalDigits: "8107",
    cardStyle: "slate",
  },
  {
    balance: "$8,317.00",
    chipIcon: "VisaCardIcon",
    cardHolder: "Flávio Jerônimo da Silva Filho",
    validThru: "03/2029",
    finalDigits: "3388",
    cardStyle: "indigo",
  },
];

export const CreditCardSession = () => {
  return (
    <div className="flex w-full max-w-full flex-col gap-5 text-[#343C6A] lg:max-w-[45%] xl:max-w-[60%]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">My Cards</h2>
        <Link href="/credit-cards" className="text-base font-semibold">
          See All
        </Link>
      </div>
      <ScrollArea className="flex w-full items-center whitespace-nowrap rounded-md py-6">
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
