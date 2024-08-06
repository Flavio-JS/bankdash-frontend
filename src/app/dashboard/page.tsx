import { CreditCardSession } from "@/components/CreditCardSession/CreditCardSession";

export default function Dashboards() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-4 p-4">
        <CreditCardSession />
      </div>
    </main>
  );
}
