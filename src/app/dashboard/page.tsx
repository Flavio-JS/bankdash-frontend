import { BalanceHistoryChart } from "@/features/dashboard/components/BalanceHistoryChart/BalanceHistoryChart";
import { CardTransactionSession } from "@/features/dashboard/components/CardTransactionSession/CardTransactionSession";
import { ChartSession } from "@/features/dashboard/components/ChartSession/ChartSession";
import { CreditCardSession } from "@/features/dashboard/components/CreditCardSession/CreditCardSession";
import { ExpenseStatisticsChart } from "@/features/dashboard/components/ExpenseStatisticsChart/ExpenseStatisticsChart";
import { QuickTransfer } from "@/features/dashboard/components/QuickTransfer/QuickTransfer";
import { WeeklyActivityChart } from "@/features/dashboard/components/WeeklyActivityChart/WeeklyActivityChart";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full flex-col items-start justify-center gap-4 p-4 lg:flex-row">
        <CreditCardSession />
        <CardTransactionSession />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4 lg:flex-row">
        <ChartSession title="Weekly Activity" className="h-full lg:w-[60%]">
          <WeeklyActivityChart />
        </ChartSession>
        <ChartSession
          title="Expense Statistics"
          chartType="donut"
          className="h-full lg:w-[40%]"
        >
          <ExpenseStatisticsChart />
        </ChartSession>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4 lg:max-h-[445px] lg:flex-row lg:justify-between">
        <QuickTransfer />
        <ChartSession
          title="Balance History"
          className="h-full max-h-[445px] lg:w-[calc(100%-436px)]"
        >
          <BalanceHistoryChart />
        </ChartSession>
      </div>
    </main>
  );
}
