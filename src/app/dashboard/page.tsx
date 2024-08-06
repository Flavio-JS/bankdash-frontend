import {
  CreditCardComponent,
  type CreditCardComponentProps,
} from "@/components/CreditCardComponent/CreditCardComponent";

const cardColors: CreditCardComponentProps["cardStyle"][] = [
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

export default function Dashboards() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-4 p-4">
        {cardColors.map((cardColor, index) => (
          <CreditCardComponent
            key={cardColor}
            balance="$5,756"
            chipIcon={index % 2 === 0 ? "MasterCardIcon" : "VisaCardIcon"}
            cardHolder={
              index % 2 === 0 ? "Eddy CusumaCusuCusuma" : "Eddy CusumaCusu"
            }
            validThru="12/22"
            finalDigits={String(index + 1).padStart(4, "0")}
            cardStyle={cardColor}
          />
        ))}
      </div>
    </main>
  );
}
