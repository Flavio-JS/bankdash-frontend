import { ChartSession } from "@/features/dashboard/components/ChartSession/ChartSession";
import { ExpenseStatisticsChart } from "@/features/dashboard/components/ExpenseStatisticsChart/ExpenseStatisticsChart";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <ChartSession title="Weekly Activity">
          <ExpenseStatisticsChart />
        </ChartSession>
      </div>
    </main>
  );
}
