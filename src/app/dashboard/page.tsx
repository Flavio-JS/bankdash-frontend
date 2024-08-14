import { CardTransactionSession } from "@/features/dashboard/components/CardTransactionSession/CardTransactionSession";
import { ChartSession } from "@/features/dashboard/components/ChartSession/ChartSession";
import { CreditCardSession } from "@/features/dashboard/components/CreditCardSession/CreditCardSession";
import { WeeklyActivityChart } from "@/features/dashboard/components/WeeklyActivityChart/WeeklyActivityChart";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full flex-col items-start justify-center gap-4 p-4 lg:flex-row">
        <CreditCardSession />
        <CardTransactionSession />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4 lg:flex-row">
        <ChartSession title="Weekly Activity">
          <WeeklyActivityChart />
        </ChartSession>
      </div>
    </main>
  );
}
