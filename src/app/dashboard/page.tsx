import { ChartSession } from "@/features/dashboard/components/ChartSession/ChartSession";
import { WeeklyActivityChart } from "@/features/dashboard/components/WeeklyActivityChart/WeeklyActivityChart";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <div className="w-full max-w-[700px]">
          <ChartSession
            title="Weekly Activity"
            labels={[
              { text: "Withdraw", labelColor: "#1814F3" },
              { text: "Diposit", labelColor: "#16DBCC" },
            ]}
          >
            <WeeklyActivityChart />
          </ChartSession>
        </div>
      </div>
    </main>
  );
}
