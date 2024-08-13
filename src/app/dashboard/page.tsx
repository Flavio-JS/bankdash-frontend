import { ExpenseStatisticsChart } from "@/features/dashboard/components/ExpenseStatisticsChart/ExpenseStatisticsChart";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <ExpenseStatisticsChart />
      </div>
    </main>
  );
}
