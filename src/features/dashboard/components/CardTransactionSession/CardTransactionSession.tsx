import {
  CardTransaction,
  type CardTransactionProps,
} from "@/features/dashboard/components/CardTransaction/CardTransaction";

const transactions: CardTransactionProps[] = [
  {
    icon: "BusinessIcon",
    title: "Deposit from my Card",
    date: "28 January 2021",
    currency: -850,
  },
  {
    icon: "PaypalIcon",
    title: "Deposit Paypal",
    date: "25 January 2021",
    currency: 2500,
  },
  {
    icon: "PaymentIcon",
    title: "Jemi Wilson",
    date: "21 January 2021",
    currency: 5400,
  },
];

export const CardTransactionSession = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h2 className="text-2xl font-semibold text-[#343C6A]">
        Recent Transaction
      </h2>
      <div className="rounded-3xl bg-white p-6">
        {transactions.map((transaction) => (
          <CardTransaction
            key={transaction.title}
            icon={transaction.icon}
            title={transaction.title}
            date={transaction.date}
            currency={transaction.currency}
          />
        ))}
      </div>
    </div>
  );
};
