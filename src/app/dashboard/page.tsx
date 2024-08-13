import { QuickTransfer } from "@/features/dashboard/components/QuickTransfer/QuickTransfer";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <div className="w-full max-w-[700px]">
          <QuickTransfer />
        </div>
      </div>
    </main>
  );
}
