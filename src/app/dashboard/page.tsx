import { CardTransactionSession } from "@/components/CardTransactionSession/CardTransactionSession";

export default function Dashboards() {
  return (
    <main className="flex min-h-full max-w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
        <CardTransactionSession />
      </div>
    </main>
  );
}
